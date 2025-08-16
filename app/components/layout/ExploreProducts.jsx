"use client";

import { Button } from "flowbite-react";
import Slider2 from "../ui/Slider2";
import { useProducts } from "../../hooks/Products/useProducts";
import Loading from "../ui/Loading";
import Link from "next/link";

export default function ExploreProducts() {
  const { data: products, isLoading, isError } = useProducts();

  if (isLoading) return <Loading />;

  if (isError) return <p>Failed to load products</p>;
  const thirdEightProducts = products.slice(17, 25);
  const fourthEightProducts = products.slice(22, 30);

  return (
    <section className="mb-16">
      <div className="flex items-center gap-4 mb-6 pl-[7%]">
        <div className="w-5 h-10 bg-red-500 rounded"></div>
        <span className="text-red-500 font-semibold">Our Products</span>
      </div>

      <div className="flex items-center justify-between mb-8 pl-[7%] pr-[7%] ">
        <div className="flex items-center gap-8 smclock">
          <h2 className="text-4xl font-bold">Explore Our Products</h2>
        </div>
      </div>
      {/* SLIDER */}
      <div className="flex flex-col items-center justify-center">
        <Slider2 dummyProducts={thirdEightProducts} />
        <Slider2 dummyProducts={fourthEightProducts} />
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
