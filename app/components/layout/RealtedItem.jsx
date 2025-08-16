"use client";

import { Button } from "flowbite-react";
import CardList from "../ui/CardList";
import { useProducts } from "../../hooks/Products/useProducts";
import Loading from "../ui/Loading";

export default function Relateditem() {
  const { data: products, isLoading, isError } = useProducts();
  if (isLoading) return <Loading />;

  if (isError) return <p>Failed to load products</p>;
  const Products = products.slice(9, 13);
  return (
    <section className="mb-16 mt-[5%]">
      <div className="flex items-center justify-between mb-8 ">
        <div className="flex items-center gap-4 mb-6 pl-[9%]">
          <div className="w-5 h-10 bg-red-500 rounded"></div>
          <span className="text-red-500 font-semibold text-xl">
            Related Item
          </span>
        </div>
      </div>
      {/* SLIDER */}
      <div className="pe-[6%] ps-[7%]">
        <CardList products={Products} hidden={["Heart", "Search"]} />
      </div>
    </section>
  );
}
