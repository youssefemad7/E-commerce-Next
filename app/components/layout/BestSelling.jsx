"use client";

import Link from "next/link";
import SwiperTwo from "../ui/Slider2";
import { useEffect, useState } from "react";
import { Button } from "flowbite-react";
import Slider2 from "../ui/Slider2";
import { useProducts } from "../../hooks/Products/useProducts";
import Loading from "../ui/Loading";

export default function BestSelling() {
  const { data: products, isLoading, isError } = useProducts();

  if (isLoading) return <Loading />;

  if (isError) return <p>Failed to load products</p>;
  const secondEightProducts = products.slice(9, 17);
  return (
    <section className="mb-16">
      <div className="flex items-center gap-4 mb-6 pl-[7%]">
        <div className="w-5 h-10 bg-red-500 rounded"></div>
        <span className="text-red-500 font-semibold">This Month</span>
      </div>

      <div className="flex items-center justify-between mb-8 ">
        <h2 className="text-4xl font-bold pl-[7%]">Best Selling Products</h2>
        <Button className="bg-red-500 hover:bg-red-600 text-white px-8 mr-[7%]">
          View All
        </Button>
      </div>
      {/* SLIDER */}
      <div className="flex flex-col items-center justify-center  ">
        {/* <SwiperTwo /> */}
        <Slider2 dummyProducts={secondEightProducts} />
      </div>
    </section>
  );
}
