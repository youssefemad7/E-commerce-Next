"use client";

import ProductCard from "../ui/ProductCard";

export default function NewArrivals() {
  return (
    <section className="mb-16 px-[7%]  bg-black">
      {/* العنوان */}
      <div className="flex items-center gap-4 mb-6 ">
        <div className="w-5 h-10 bg-red-500 rounded" />
        <span className="text-red-500 font-semibold  ">Featured</span>
      </div>

      <div className="flex items-center justify-between mb-8">
        <h2 className="text-4xl font-bold ">New Arrival</h2>
      </div>

      <div className="grid grid-cols-4 gap-4 smclock2 ">
        <div className="col-span-2">
          <ProductCard
            image="/PlayStation.png"
            title="PlayStation 5"
            desc="Black and White version of the PS5 coming out on sale."
            height="h-[600px]"
            width="w-[511px]"
            link="#"
          />
        </div>
        <div className="col-span-2 grid grid-cols-2 gap-4">
          <div className="col-span-2 gap-4">
            <ProductCard
              image="/Perfumes.png"
              title="Perfume"
              desc="GUCCI INTENSE OUD EDP"
              height="h-[300px]"
              width="w-[250px]"
              link="#"
            />
          </div>

          <div className="col-span-2 grid grid-cols-2 gap-4">
            <ProductCard
              image="/Speakers.png"
              title="Speakers"
              desc="Amazon wireless speakers"
              height="h-[280px]"
              width="w-[250px]"
              link="#"
            />

            <ProductCard
              image="/Laptop.webp"
              title="Laptop’s Collections"
              desc="Featured laptop collections that give you another vibe."
              height="h-[280px]"
              width="w-[300px]"
              link="#"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
