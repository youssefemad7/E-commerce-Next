import "swiper/css";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import CardList from "./CardList";
import styles from "./SwiperTwo.module.css";

function chunkArray(array, size) {
  if (!array || array.length === 0) return [];
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
}

export default function Slider2({ dummyProducts }) {
  if (!dummyProducts || dummyProducts.length === 0) {
    return <div className="text-center py-8">No products available</div>;
  }

  const productsPerSlide = 4;
  const slides = chunkArray(dummyProducts, productsPerSlide);

  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      grabCursor={true}
      modules={[Pagination]}
      className={styles.swiperContainer}
    >
      {slides.map((group, index) => (
        <SwiperSlide key={index} className={styles.slide}>
          <div className="w-[91%] relative left-[5%]">
            <CardList products={group} hidden={["Heart", "Search"]} />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
