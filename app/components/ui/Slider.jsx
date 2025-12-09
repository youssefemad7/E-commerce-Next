"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { useProducts } from "../../hooks/Products/useProducts";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import styles from "./SwiperOne.module.css";

import { Autoplay, Navigation, Pagination } from "swiper/modules";

export default function Slider() {
  const { data: products, isLoading, isError } = useProducts();
  
  if (isLoading) return <p>Loading products...</p>;
  if (isError) return <p>Failed to load products</p>;
  if (!products || products.length === 0) return <p>No products available</p>;
  
  return (
    <div className="relative mt-10 w-[200%] px-4 md:px-8 ">
      <div className="h-[300px]  md:h-[300px] lg:h-[400px] xl:h-[450px] max-w-screen-2xl mx-auto transform scale-[1.1] md:scale-[1.2] lg:scale-[1.3] ">
        <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className={`h-full w-full rounded-lg overflow-hidden mySwiper `}
        >
          {products[0] && (
            <SwiperSlide className="bg-gray-200">
              <img
                src={products[0]?.imageUrl || products[0]?.image}
                alt="Product 1"
                className=" relative left-[25%] object-cover w-[50%] h-[100%]"
              />
            </SwiperSlide>
          )}
          {products[1] && (
            <SwiperSlide className="bg-gray-200">
              <img
                src={products[1]?.imageUrl || products[1]?.image}
                alt="Product 2"
                className=" relative left-[25%] object-cover w-[50%] h-[100%]"
              />
            </SwiperSlide>
          )}
          {products[2] && (
            <SwiperSlide className="bg-gray-200">
              <img
                src={products[2]?.imageUrl || products[2]?.image}
                alt="Product 3"
                className=" relative left-[25%] object-cover w-[50%] h-[100%]"
              />
            </SwiperSlide>
          )}
          {products[3] && (
            <SwiperSlide className="bg-gray-200">
              <img
                src={products[3]?.imageUrl || products[3]?.image}
                alt="Product 4"
                className=" relative left-[25%] object-cover w-[50%] h-[100%]"
              />
            </SwiperSlide>
          )}
          {products[4] && (
            <SwiperSlide className="bg-gray-200">
              <img
                src={products[4]?.imageUrl || products[4]?.image}
                alt="Product 5"
                className=" relative left-[25%] object-cover w-[50%] h-[100%]"
              />
            </SwiperSlide>
          )}
        </Swiper>
      </div>
    </div>
  );
}
