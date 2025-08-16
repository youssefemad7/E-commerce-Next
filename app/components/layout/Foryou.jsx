"use client";

import { Button } from "flowbite-react";
import CardList from "../ui/CardList";
import { useProducts } from "../../hooks/Products/useProducts";
import Loading from "../ui/Loading";
import Link from "next/link";

export default function Foryou() {
  const { data: products, isLoading, isError } = useProducts();

  if (isLoading) return <Loading />;

  if (isError) return <p>Failed to load products</p>;
  const Products = products.slice(10, 14);
  return (
    <section className="mb-16 mt-[5%]">
      <div className="flex items-center justify-between mb-8 ">
        <div className="flex items-center gap-4 mb-6 pl-[9%]">
          <div className="w-5 h-10 bg-red-500 rounded"></div>
          <span className="text-foreground font-semibold text-3xl">
            Just For You
          </span>
        </div>
        <Button className="bg-background hover:bg-foreground text-foreground hover:text-background cursor-pointer border border-accent-foreground px-8 mr-[8%] rounded-sm">
          <Link href="/products">See All</Link>
        </Button>
      </div>
      {/* SLIDER */}
      <div className="pe-[6%] ps-[7%]">
        <CardList products={Products} hidden="Search" />
      </div>
    </section>
  );
}
