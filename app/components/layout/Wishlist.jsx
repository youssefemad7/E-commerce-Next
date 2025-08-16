"use client";

import { Button } from "flowbite-react";
import CardList from "../ui/CardList";
import { useWishlist } from "../../hooks/Wishlist/useWishlist";
import { useUser } from "../../hooks/Auth/useUser";

import Loading from "../ui/Loading";
import Link from "next/link";

export default function Wishlist() {
  const { data: user } = useUser();
  const userId = user?.uid;

  const { data: wishlist, isLoading, isError } = useWishlist(userId);

  if (!userId) return <p>Please log in to view your wishlist.</p>;

  if (isLoading) return <Loading />;

  if (isError) return <p>Failed to load products</p>;

  return (
    <section className="mb-16 mt-[5%]">
      <div className="flex items-center justify-between mb-8 ">
        <h2 className="text-2xl font-bold pl-[9%] text-foreground">
          Wishlist ({wishlist?.length || 0})
        </h2>
        <Button className="bg-background hover:bg-foreground text-foreground hover:text-background cursor-pointer border border-accent-foreground px-8 mr-[8%] rounded-sm">
          <Link href="/products">View All Products</Link>
        </Button>
      </div>
      {/* SLIDER */}
      <div className="pe-[6%] ps-[7%] ">
        <CardList products={wishlist} hidden="Trash" />
      </div>
    </section>
  );
}
