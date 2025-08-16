import Sidebar from "./components/layout/Sidebar";
import Slider from "./components/ui/Slider";
import BestSelling from "./components/layout/BestSelling";
import Categories from "./components/layout/Categories";
import ExploreProducts from "./components/layout/ExploreProducts";
import FlashSale from "./components/layout/FlashSale";
import Image from "next/image";
import NewArrivals from "./components/layout/NewArrivals";
import Services from "./components/layout/Services";
import fetch from "node-fetch";

export default function Home() {
  return (
    <main className="bg-background text-foreground min-h-screen flex-col items-center justify-center p-4">
      <section className="sec1">
        <div className=" w-full mx-auto grid grid-cols-12 gap-6 items-start  ">
          <div className="col-span-8 md:col-span-4 sm:col-span-12  hide-on-mobile relative left-[11%] bottom-[4.5%] sidebarmd  sidebarxl  ">
            <Sidebar />
          </div>

          <div className="col-span-4 md:col-span-4 sm:col-span-12 relative right-[120%] bottom-[4.5%] center-on-mobile ">
            <Slider />
          </div>
        </div>
      </section>
      <section className="sec2 mt-[10%] ">
        <FlashSale />
      </section>
      <hr className="mt-[80px] mb-[80px]" />
      <section className="sec3 mt-[10%] ">
        <Categories />
      </section>
      <hr className="mt-[80px] mb-[80px]" />
      <section className="sec4 mt-[10%] ">
        <BestSelling />
      </section>
      <section className="sec5 mt-[10%] ">
        <Image
          src="/MusicBanner.jpg"
          alt="Music Banner"
          width={1180}
          height={400}
          className="  object-cover flex justify-center items-center mx-auto"
        />
      </section>
      <section className="sec6 mt-[10%] ">
        <ExploreProducts />
      </section>
      <hr className="mt-[80px] mb-[80px]" />
      <section className="sec7 mt-[10%] ">
        <NewArrivals />
      </section>
      <section className="sec7 mt-[10%] mb-[10%] ">
        <Services />
      </section>
    </main>
  );
}
