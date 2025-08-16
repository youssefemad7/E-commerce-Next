let cachedToken = null;
let tokenExpiry = null;

async function getAuthToken() {
  const now = Date.now();

  // لو فيه Token صالح لسه، استخدمه
  if (cachedToken && tokenExpiry && now < tokenExpiry) {
    return cachedToken;
  }

  // اعمل طلب جديد للـ Auth
  const res = await fetch("https://accept.paymob.com/api/auth/tokens", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ api_key: process.env.PAYMOB_API_KEY }),
  });

  const data = await res.json();
  if (!data.token) {
    throw new Error("Auth failed: " + JSON.stringify(data));
  }

  // خزّن التوكن واعتبره صالح لمدة 1 ساعة
  cachedToken = data.token;
  tokenExpiry = now + 60 * 60 * 1000; // ساعة

  return cachedToken;
}

export async function POST(req) {
  try {
    const { amount, items } = await req.json();

    // 1) هات التوكن من الكاش أو اعمل Auth جديد
    const authToken = await getAuthToken();

    // 2) سجل Order
    const orderRes = await fetch(
      "https://accept.paymob.com/api/ecommerce/orders",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authToken}`,
        },
        body: JSON.stringify({
          amount_cents: amount * 100,
          currency: "EGP",
          merchant_order_id: `order_${Date.now()}`, // فريد في كل مرة
          items: items || [],
        }),
      }
    );

    const orderJson = await orderRes.json();
    if (!orderJson.id) {
      throw new Error("Order creation failed: " + JSON.stringify(orderJson));
    }

    // 3) سجل Payment Key
    const paymentRes = await fetch(
      "https://accept.paymob.com/api/acceptance/payment_keys",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authToken}`,
        },
        body: JSON.stringify({
          amount_cents: amount * 100,
          currency: "EGP",
          order_id: orderJson.id,
          integration_id: process.env.PAYMOB_INTEGRATION_ID,
          billing_data: {
            apartment: "NA",
            email: "customer@example.com",
            floor: "NA",
            first_name: "Test",
            street: "NA",
            building: "NA",
            phone_number: "+201234567890",
            shipping_method: "PKG",
            postal_code: "NA",
            city: "Cairo",
            country: "EG",
            last_name: "Customer",
            state: "NA",
          },
        }),
      }
    );

    const paymentJson = await paymentRes.json();
    if (!paymentJson.token) {
      throw new Error("Payment key failed: " + JSON.stringify(paymentJson));
    }

    // 4) رجّع Iframe URL
    return new Response(
      JSON.stringify({
        iframe_url: `https://accept.paymob.com/api/acceptance/iframes/${process.env.PAYMOB_IFRAME_ID}?payment_token=${paymentJson.token}`,
      }),
      { status: 200 }
    );
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
    });
  }
}
