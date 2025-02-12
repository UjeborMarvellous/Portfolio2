import Image from "next/image";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2";

const ProjectsBtn = () => {
  return (
    <div className="mx-auto xl:mx-0 xl:-mt-12 ">
      <Link
        href={"/work"}
        className="relative z-50 2xl:w-[200px] 2xl:h-[200px] lg:w-[150px] lg:h-[150px] md:w-[140px] md:h-[140px] sm:w-[100px] sm:h-[100px] w-[100px] h-[100px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group"
      >
        <Image
          src={"/rounded-text.png"}
          width={100}
          height={100}
          alt=""
          className=" animate-spin-slow w-full 2xl:max-w-[160px] 2xl:max-h-[160px] lg:max-w-[120px] lg:max-h-[120px] md:max-w-[100px] md:max-h-[100px] sm:max-w-[80px] sm:max-h-[80px] max-w-[80px] max-h-[80px] "
        />
        <HiArrowRight className="absolute 2xl:text-5xl lg:text-5xl md:text-4xl sm:text-3xl text-3xl group-hover:translate-x-2 transition-all duration-300 " />
      </Link>
    </div>
  );
};

export default ProjectsBtn;
