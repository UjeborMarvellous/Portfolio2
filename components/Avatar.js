import Image from "next/image";

const Avatar = () => {
  return (
    <div className="hidden xl:flex xl:max-n-none">
      <Image src={"/Ava4.png"} alt="" width={100} height={1000} className="translate-z-0 w-[60%] h-[60%]" />
    </div>
  );
};

export default Avatar;
