"use client";

import Image from "next/image";
import { useCart } from "../../hooks/Cart/useCart";
import { useUser } from "../../hooks/Auth/useUser";
import { useState } from "react";

function CheckoutPayment() {
  const { data: user, isLoading: userLoading } = useUser();
  const {
    data: cart,
    isLoading: cartLoading,
    isError,
  } = useCart(user?.uid, {
    enabled: !!user?.uid,
  });

  const [loading, setLoading] = useState(false);

  const Subtotal = Math.floor(
    cart?.reduce((total, product) => {
      return total + product.price * (product.quantity || 1);
    }, 0)
  );
  const Shipping = Math.floor(Subtotal * 0.03);
  const Total = Subtotal + Shipping;

  const handlePlaceOrder = async () => {
    if (!user) {
      alert("من فضلك قم بتسجيل الدخول أولا");
      return;
    }
    if (!cart || cart.length === 0) {
      alert("السلة فارغة");
      return;
    }

    try {
      setLoading(true);
      const res = await fetch("/api/paymob/initiate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: Total,
          billing_data: {
            first_name: user?.firstName || "Customer",
            last_name: user?.lastName || "Example",
            email: user?.email || "customer@example.com",
            phone_number: user?.phone || "+201000000000",
            city: user?.city || "Cairo",
            apartment: "NA",
          },
        }),
      });

      const data = await res.json();

      if (data?.iframe_url) {
        window.location.href = data.iframe_url; // يفتح صفحة الدفع
      } else {
        console.error("Error:", data);
        alert("فشل إنشاء طلب الدفع");
      }
    } catch (err) {
      console.error(err);
      alert("حدث خطأ أثناء الاتصال بـ Paymob");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="col-span-2 px-[5%] pt-[6%] ">
      <div className="w-full max-w-sm bg-background p-6 rounded-sm">
        {cart?.map((product, index) => (
          <div
            key={index}
            className="flex items-center justify-between mb-4 flex-wrap sm:flex-nowrap"
          >
            <div className="flex items-center">
              <Image
                src={product.imageUrl}
                alt={product.name}
                width={45}
                height={45}
                className=" rounded-md mr-4"
              />
            </div>

            <span className="text-sm font-semibold justify-end">
              {product.name}
            </span>
            <span className="text-sm ">${product.price}</span>
          </div>
        ))}

        <div className="flex justify-between mb-2">
          <span className="text-foreground">Subtotal:</span>
          <span className="font-medium">${Math.floor(Subtotal)}</span>
        </div>
        <hr className="mt-3 mb-3" />
        <div className="flex justify-between mb-2">
          <span className="text-foreground">Shipping:</span>
          <span className="font-medium">${Math.floor(Shipping)}</span>
        </div>
        <hr className="mt-3 mb-3" />

        <div className="flex justify-between mb-4">
          <span className="text-lg font-semibold">Total:</span>
          <span className="text-lg font-bold">${Math.floor(Total)}</span>
        </div>
      </div>

      {/* Payment Methods */}
      <div className="flex items-center justify-between w-[60%] gap-4 mycheck">
        <div>
          <label className=" gap-4 p-4 rounded-md cursor-pointer ">
            <input
              type="radio"
              name="payment"
              className="w-5 h-5 text-red-500 focus:ring-red-500"
              defaultChecked
            />
          </label>
          <span className="font-medium">Bank</span>
        </div>

        <Image
          src="/payment.png"
          alt="Bank"
          width={200}
          height={60}
          className="rounded-md"
        />
      </div>
      <div className="flex items-center w-full sm:w-[68%] mt-4 gap-2">
        <label className=" gap-4 p-4 rounded-md cursor-pointer ">
          <input
            type="radio"
            name="payment"
            className="w-5 h-5 text-red-500 focus:ring-red-500"
          />
        </label>
        <span className="font-medium">Cash on Delivery</span>
      </div>

      {/* Coupon Section */}
      <div className="flex sm:flex-row gap-2 sm:w-[80%] mt-4 w-[80%] mycheck">
        <input
          type="text"
          placeholder="Coupon Code"
          className="flex-1 px-4 py-3 rounded-sm bg-background border border-gray-300 focus:outline-none focus:border-red-500"
        />
        <button className="px-6 py-3 bg-red-500 text-white rounded-sm hover:bg-foreground hover:text-background">
          Apply Coupon
        </button>
      </div>

      {/* Place Order */}
      <div className="mt-6 w-[40%] mycheck">
        <button
          onClick={handlePlaceOrder}
          disabled={loading}
          className="w-full px-8 py-3 bg-red-500 text-white rounded-sm hover:bg-foreground hover:text-background disabled:opacity-50"
        >
          {loading ? "جارٍ المعالجة..." : "Place Order"}
        </button>
      </div>
    </div>
  );
}

export default CheckoutPayment;
