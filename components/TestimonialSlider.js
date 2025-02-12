// testimonial data
const testimonialData = [
  {
    image: '/Loen.jpg',
    name: 'Leonardo',
    message:
      `Working with Marvellous on our hotels booking website was fantastic. He delivered a visually stunning, user-friendly site that has boosted our online presence and direct bookings. Marvellou's attention to detail, responsiveness, and dedication were exceptional. The website works flawlessly across all devices, and we've received numerous compliments. Highly recommend Marvellous for any online booking project.`,
  },
  {
    image: '/t-avt-2.png',
    name: 'Jane Chukwu Founder of AmandasWears Fashion',
    message:
      `As a fashion entrepreneur in Australia, I needed an elegant, user-friendly eCommerce website, and Marvellous delivered beyond expectations! The sleek design, smooth navigation, and stunning visuals perfectly showcase my luxury African fashion pieces. Customers love the experience, and sales have increased. Truly a game-changer for my brand! `,
  },
  {
    image: '/t-avt-3.png',
    name: 'Praise Onubiyi',
    message:
      'I was pleasantly surprised by the remarkable value his service provided; he skillfully maximized the potential of my project, delivering outstanding results that exceeded my expectations.',
  },
];

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

import { Navigation, Pagination } from "swiper";

import { FaQuoteLeft } from "react-icons/fa";

const WorkSlider = () => {
  return (
    <Swiper
      navigation={true}
      pagination={{
        clickable: true,
        color: "#FF5733",
      }}
      modules={[Navigation, Pagination]}
      className="h-[380px] sm:h-[440px]"
    >
      {testimonialData.map((person, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center md:flex-row gap-x-8 h-full px-16">
              <div className="w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0">
                <div className="flex flex-col justify-center text-center">
                  <div className="mb-2 mx-auto">
                    <Image src={person.image} width={100} height={100} alt="" className="rounded-2xl"/>
                  </div>
                  <div className="2xl:text-2xl lg:text-xl md:text-xl sm:text-sm text-[.8rem]">{person.name}</div>
                  <div className="text-[12px] uppercase font-extralight tracking-widest">{person.position}</div>
                </div>
              </div>
              <div className="flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20">
                <div className="text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0">
                  <FaQuoteLeft />
                </div>
                <div className="xl:text-lg text-center md:text-left 2xl:text-2xl lg:text-xl md:text-xl sm:text-[.6rem] text-[.6rem] ">{person.message}</div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;

