import { NextResponse } from "next/server";
import crypto from "crypto";

export async function POST(req) {
  const body = await req.json();

  // مثال تحقق HMAC: Paymob يرسل هاش للحماية — تحقق من توثيق Paymob لمعرفة الخوارزمية بالضبط.
  const secret = process.env.PAYMOB_HMAC_SECRET;
  const receivedHmac = body.hmac || null; // ممكن يكون في JSON أو header حسب إعداداتك
  if (secret && receivedHmac) {
    // نجرب SHA256 base64 و SHA512 hex كخيارات للمطابقة (راجع التوثيق لضمان الخوارزمية الصحيحة)
    const payloadString = JSON.stringify(body);
    const sha256Base64 = crypto
      .createHmac("sha256", secret)
      .update(payloadString)
      .digest("base64");
    const sha512Hex = crypto
      .createHmac("sha512", secret)
      .update(payloadString)
      .digest("hex");

    if (receivedHmac !== sha256Base64 && receivedHmac !== sha512Hex) {
      return NextResponse.json({ error: "Invalid HMAC" }, { status: 401 });
    }
  }

  // هنا تعامل مع الـ payload: خزّن حالة الدفع في DB، حدّث الطلب عند النجاح، إلخ.
  console.log("Paymob webhook body:", body);
  return NextResponse.json({ status: "ok" });
}
