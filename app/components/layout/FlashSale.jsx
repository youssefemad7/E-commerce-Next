"use client";

import { Button } from "flowbite-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useProducts } from "../../hooks/Products/useProducts";
import Loading from "../ui/Loading";
import Slider2 from "../ui/Slider2";

export default function FlashSale() {
  const { data: products, isLoading, isError } = useProducts();

  const [timeLeft, setTimeLeft] = useState({
    days: 99,
    hours: 23,
    minutes: 19,
    seconds: 56,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return {
            ...prev,
            days: prev.days - 1,
            hours: 23,
            minutes: 59,
            seconds: 59,
          };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (isLoading) return <Loading />;

  if (isError) return <p>Failed to load products</p>;
  const firstEightProducts = products?.slice(0, 8);
  return (
    <section className="mb-16">
      <div className="flex items-center gap-4 mb-6 pl-[7%]">
        <div className="w-5 h-10 bg-red-500 rounded"></div>
        <span className="text-red-500 font-semibold">Today's</span>
      </div>

      <div className="flex items-center justify-between mb-8 pl-[7%] pr-[7%] ">
        <div className="flex items-center gap-8 smclock">
          <h2 className="text-4xl font-bold">Flash Sales</h2>
          <div className="flex items-center gap-4">
            <div className="text-center ">
              <div className="text-xs text-gray-500">Days</div>
              <div className="text-2xl font-bold">
                {timeLeft.days.toString().padStart(2, "0")}
              </div>
            </div>
            <div className="text-red-500 text-2xl mt-3">:</div>
            <div className="text-center">
              <div className="text-xs text-gray-500">Hours</div>
              <div className="text-2xl font-bold">
                {timeLeft.hours.toString().padStart(2, "0")}
              </div>
            </div>
            <div className="text-red-500 text-2xl mt-3">:</div>
            <div className="text-center">
              <div className="text-xs text-gray-500">Minutes</div>
              <div className="text-2xl font-bold">
                {timeLeft.minutes.toString().padStart(2, "0")}
              </div>
            </div>
            <div className="text-red-500 text-2xl mt-3 ">:</div>
            <div className="text-center ">
              <div className="text-xs text-gray-500">Seconds</div>
              <div className="text-2xl font-bold">
                {timeLeft.seconds.toString().padStart(2, "0")}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* SLIDER */}
      <div className="flex flex-col items-center justify-center">
        {/* <SwiperTwo /> */}
        <Slider2 dummyProducts={firstEightProducts} />
      </div>
      <div className="flex justify-center mt-5">
        <Link href="/products">
          <Button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 cursor-pointer">
            View All Products
          </Button>
        </Link>
      </div>
    </section>
  );
}
