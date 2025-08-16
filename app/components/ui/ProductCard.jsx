"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, CardTitle, CardDescription } from "./Card";
import { Button } from "flowbite-react";

export default function ProductCard({
  image,
  title,
  desc,
  link,
  height = "h-full",
  width = "w-full",
}) {
  return (
    <Link href={link}>
      <Card className={`relative overflow-hidden bg-black text-white  `}>
        <div className={`relative w-full ${width} ${height} background`}>
          <Image
            src={image}
            alt={title}
            fill
            className={` transition-transform duration-300 group-hover:scale-105 `}
          />

          <div
            className={`absolute inset-0 bg-black/60 flex flex-col justify-end p-4 space-y-2`}
          >
            <CardTitle className="text-white text-lg sm:text-xl">
              {title}
            </CardTitle>
            <CardDescription className="text-gray-300 text-sm">
              {desc}
            </CardDescription>
            <Button className="text-sm px-4 py-2 w-fit bg-red-500 hover:bg-red-600">
              Shop Now
            </Button>
          </div>
        </div>
      </Card>
    </Link>
  );
}
