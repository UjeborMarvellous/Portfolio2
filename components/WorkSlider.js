// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: "title",
          path: "/thumb.jpg",
          Name: 'AutoMobile (Sales and Let of cars)',
          Links: "https://bogieautomobile.netlify.app/",
        },
        {
          title: "title",
          path: "/thumb02.JPG",
          Name: 'Bring Education all round Online',
          Links: "https://e-student-app.netlify.app/",
        },
        {
          title: "title",
          path: "/thumb03.JPG",
          Name: 'Tech Startup one ( 1 )',
          Links: "https://ajuxtechstartup.netlify.app/",
        },
        {
          title: "title",
          path: "/thumb04.jpg",
          Name: 'Tech Startup two ( 2 )',
          Links: "https://idahvis.netlify.app/",
        },
      ],
    },
    {
      images: [
        {
          title: "title",
          path: "/thumb01.jpg",
          Name: 'Travel Agency in Euroupe For Africa',
          Links: "/",
        },
        {
          title: "title",
          path: "/thumb.jpg",
          Name: 'AutoMobile (Sales and Let of cars)',
          Links: "https://bogieautomobile.netlify.app/",
        },
        {
          title: "title",
          path: "/thumb4.jpg",
          Name: 'Hotel Booking In Italy',
          Links: "https://suiterosso24jesi.com/",
        },
        {
          title: "title",
          path: "/thumbs.JPG",
          Name: 'Charity Organzation',
          Links: "https://gfrf.netlify.app/",
        },
      ],
    },
  ],
};

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import Image from "next/image";

import { Pagination } from "swiper";

import { BsArrowRight } from "react-icons/bs";

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
        color: "#FF5733",
      }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[440px]"
    >
      {workSlides.slides.map((slide, slideIndex) => { // Use slideIndex as key
        return (
          <SwiperSlide key={slideIndex}>
            <div className="grid grid-cols-2 gap-6 cursor-pointer">
              {slide.images.map((image, imageIndex) => { // Use imageIndex as key
                return (
                  <a key={imageIndex} href={image.Links} className="relative rounded-lg overflow-hidden flex items-center justify-center group">
                    <div className="flex items-center justify-center relative overflow-hidden">
                      <Image src={image.path} width={600} height={300} alt="" />
                      <div className="absolute bg-black/90 from-transparent opacity-0 group-hover:opacity-80 transition-all duration-700 h-full w-full text-center px-10 py-16 text-xs md:text-2xl font-semibold group-hover:-translate-y-[0.01px] transition-all translate-y-full font-sora">{image.Name}</div>
                    </div>
                  </a>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
