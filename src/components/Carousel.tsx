import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function Carousel() {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  // Check screen width on initial load and on resize
  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    handleResize(); // Check on mount
    window.addEventListener("resize", handleResize); // Update on resize

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex justify-center items-center p-8">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={isLargeScreen} // Conditionally enable navigation
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper max-w-7xl"
      >
        <SwiperSlide>
          <div className="flex justify-center items-center">
            <Image
              src="/images/sustainable-17-goals.webp"
              alt="Global Access Master Class Logo"
              width={400}
              height={300}
              className="h-96"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center items-center">
            <Image
              src="/images/home2.jpg"
              alt="The Ebaidebheki Initiative at a radio station"
              width={400}
              height={300}
              className="h-96"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center items-center">
            <Image
              src="/images/home4.jpg"
              alt="Global Access Master Class Logo"
              width={400}
              height={300}
              className="h-96"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center items-center">
            <Image
              src="/images/home1.jpg"
              alt="Global Access Master Class Logo"
              width={400}
              height={300}
              className="h-96"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center items-center">
            <Image
              src="/images/home3.jpg"
              alt="Global Access Master Class Logo"
              width={400}
              height={300}
              className="h-96"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center items-center">
            <Image
              src="/images/climate-teen-hub-member.jpg"
              alt="Climate Tee Hub Member Logo"
              width={400}
              height={300}
              className="h-96"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center items-center">
            <Image
              src="/images/climate-teen-hub-one.jpg"
              alt="Climate Teen Hub First Activities"
              width={400}
              height={300}
              className="h-96"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center items-center">
            <Image
              src="/images/climate-teen-hub-two.jpg"
              alt="Climate Teen Hub Second Activities"
              width={400}
              height={300}
              className="h-96"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
