import React, { useState } from "react";
import Avatar from "../../components/Avatar";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import Circles from "../../components/Circles";
import CountUp from "react-countup";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
  FaBootstrap,
} from "react-icons/fa";
import { SiSupabase } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { IoLogoFirebase } from "react-icons/io5";
import { SiNextdotjs, SiAdobephotoshop } from "react-icons/si";
import ParticlesContainer from "../../components/ParticlesContainer";

//  data
const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Web Development",
        icons: [
          <FaHtml5 key="html5" />,
          <FaCss3 key="css3" />,
          <FaJs key="js" />,
          <FaReact key="react" />,
          <SiNextdotjs key="next" />,
          <FaWordpress key="wordpress" />,
          <FaBootstrap key="bootstrap" />,
          <BiLogoTypescript key="typescript" />,
          <SiSupabase key="supabase" />,
          <IoLogoFirebase key="firebase" />,
        ],
      },
      {
        title: "UI/UX Design",
        icons: [<FaFigma key="figma" />, <SiAdobephotoshop key="photoshop" />],
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "UX/UI - Mentortribe Company",
        stage: "2017 - 2018",
      },
      {
        title: "Web Developer - DreamWorks, Abuja ( Intern )",
        stage: "April 2019 - November 2019",
      },
      {
        title: "Web Developer ( Front-End ) - Mentorreibe, Lagos ( Remote )",
        stage: "Febuary 2020 - july 2022",
      },
      {
        title: "Web Developer - Coaching ( Remote )",
        stage: "April 2021 - June 2022",
      },
      {
        title: "Web Developer - Freelancer",
        stage: "September 2022 - March 2023",
      },
      {
        title: "Web Development - Coaching Crea8Lab ( Remote )",
        stage: "April 2023 - Till Date",
      },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title: "Web Development - Aptech Computer Education, Abuja, Nigeria",
        stage: "2018",
      },
      {
        title: "Computer Science - Aptech Computer Education, Abuja, Nigeria ",
        stage: "2017 - 2018",
      },
      {
        title:
          "Certified Graphic Designer - Bliztech Education, Abuja, Nigeria",
        stage: "2010",
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);
  console.log(index);
  return (
    <div className="md:bg-black/80 bg-black -pt-[20%] z-20 h-full py-32 text-center xl:text-left">
      <Circles />
      <ParticlesContainer />
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px]"
      >
        <Avatar />
      </motion.div>
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="2xl:text-5xl lg:text-5xl md:text-2xl sm:text-[1rem] text-[1rem] text-white font-sora font-semibold py-5 tracking-wide"
          >
            Beautiful <span className="text-pink-600"> designs are </span>
            spawned from <br /> dazzled stories.
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[600px] 2xl:text-2xl lg:text-xl md:text-xl sm:text-[.7rem] text-[.7rem] mx-auto xl:mx-0 pb-7 xl:mb-12 px-2 xl:px-0"
          >
            5 years ago, I began freelancing as a developer. since then, I have
            done remote work for agencies, counsulted for startups, and
            collaborated on digital products for business and consumer use
          </motion.p>
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-8">
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-pink-500 mb-2">
                  <CountUp start={0} end={5} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Years of experience
                </div>
              </div>
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-pink-500 mb-2">
                  <CountUp start={0} end={80} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Satisfied clients
                </div>
              </div>
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-pink-500 mb-2">
                  <CountUp start={0} end={25} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Finished Project
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <motion.div
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${
                    index === itemIndex &&
                    "text-pink-600 after:w-[100%] after:bg-pink-600 after:transition-all after:duration-300"
                  } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-pink-600 after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className=" xl:py-6 flex flex-col xl:gap-y-4 items-center xl:text-left xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className="flex-1 flex text-[12px] lg:text-[12.2px] flex-col md:flex-row max-w-max gap-x-2 text-white/90"
                >
                  <div className="2xl:text-2xl lg:text-xl md:text-xl sm:text-[.6rem] text-[.6rem]">{item.title}</div>
                  <div className="hidden md:flex">-</div>
                  <div className="2xl:text-2xl lg:text-xl md:text-xl sm:text-[.6rem] text-[.6rem]">{item.stage}</div>
                  <div className="flex gap-x-4">
                    {item.icons?.map((icon, itemIndex) => {
                      return <div className="text-2xl transition-all duration-500" key={itemIndex}>{icon}</div>;
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
