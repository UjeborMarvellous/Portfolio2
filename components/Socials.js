import Link from "next/link";
import { RiYoutubeLine, RiInstagramLine } from "react-icons/ri";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const Socials = () => {
  return (
    <div className="flex sm:mx-[40%] mx-[20%] items-center gap-x-5 text-lg">
      <Link
        href={"/"}
        className="hover:text-pink-600 transition-all duration-300"
      >
        <RiYoutubeLine />
      </Link>
      <Link
        href={"https://www.instagram.com/marvellousujebor?igsh=MXBnYTNiOGlwdjU0Nw=="}
        className="hover:text-pink-600 transition-all duration-300"
      >
        <RiInstagramLine />
      </Link>
      <Link
        href={"/"}
        className="hover:text-pink-600 transition-all duration-300"
      >
        <FaFacebookF />
      </Link>
      <Link
        href={"https://www.linkedin.com/in/marvellous-ujebor-023679226?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"}
        className="hover:text-pink-600 transition-all duration-300"
      >
        <FaLinkedinIn />
      </Link>
    </div>
  );
};

export default Socials;
