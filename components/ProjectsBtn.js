import Image from "next/image";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2";

const ProjectsBtn = () => {
  return (
    <div className="mx-auto xl:mx-0 xl:-mt-12 ">
      <Link
        href={"/work"}
        className="relative z-50 w-[130px] h-[130px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group"
      >
        <Image
          src={"/rounded-text.png"}
          width={100}
          height={100}
          alt=""
          className=" animate-spin-slow w-full max-w-[100px] max-h-[100px]"
        />
        <HiArrowRight className="absolute text-4xl group-hover:translate-x-2 transition-all duration-300 " />
      </Link>
    </div>
  );
};

export default ProjectsBtn;
