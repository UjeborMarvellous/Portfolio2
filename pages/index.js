import Image from "next/image";
import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Home = () => {
  return (
    <div className="bg-black/90 h-full">
      <div className="w-full h-full relative">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="2xl:text-8xl lg:text-7xl md:text-6xl sm:text-3xl text-3xl md: text-white font-sora font-semibold py-10 tracking-wider"
          >
            Transforming Ideas <br /> Into{" "}
            <span className="text-pink-600">Digital Reality</span>
          </motion.h1>
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className=" text-white xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16 2xl:text-2xl lg:text-xl md:text-xl sm:text-[.8rem] text-[.8rem]"
          >
            Elevating User Experiences with a passion for front-end development,
            using the power of HTML, CSS, React, Tailwind CSS, Next js,
            Typescript, and JavaScript. transforming their concepts into an
            interactive reality, crafting engaging interfaces, and an unwavering
            commitment to delivering intuitive digital solutions
          </motion.p>
          <div className="flex justify-center xl:hidden relative">
            <ProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:block"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      <div className="w-[1200px] h-full absolute right-0 bottom-0">
        <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"></div>
        {/* ParticlesContainer */}
        <ParticlesContainer className='w-full'/>
        <motion.div
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{duration: 1, ease: 'easeInOut' }}
          className="w-full h-full max-w-[90rem] max-h-[768px] absolute object-contain mt-[23%] ml-[35%]"
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
