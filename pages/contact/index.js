import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";

const Contact = () => {
  const formRef = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_i1ysxec", // Replace with your Service ID
        "template_1o324dg", // Replace with your Template ID
        formRef.current,
        "-odn4AGi3iU6ff3-V" // Replace with your Public Key
      )
      .then(
        (result) => {
          console.log("Email Sent Successfully:", result.text);
          setIsSent(true);
        },
        (error) => {
          console.error("Email Sending Error:", error.text);
        }
      );

    e.target.reset(); // Clears the form after submission
  };

  return (
    <div className="md:bg-black/80 bg-black py-36 flex text-center h-full">
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        <div className="grid max-w-[780px]">
          <h2 className="text-2xl font-semibold pt-16 pb-6 md:h2 xl:mt-20">
            Get In Touch <span className="text-pink-600">With Me.</span>
          </h2>

          {isSent && (
            <div className="flex fixed h-screen text-2xl 2xl:mt-auto lg:mt-auto md:-mt-[30%] sm:-mt-[30%] -mt-[30%] 2xl:-ml-[35%] lg:-ml-[28%] md:-ml-[10%] sm:-ml-[5%] -ml-[5%] w-full 2xl:bg-background lg:bg-background md:bg-background sm:bg-black bg-black z-20 p-20 flex-col items-center justify-center">
              <p className="font-semibold">
                <span className=" text-8xl"> 🤗 </span>
              </p>
              <p className="text-pink-500 my-7 font-semibold 2xl:text-2xl lg:text-xl md:text-xl sm:text-sm text-[.8rem]">
                Thank you for reaching out. We will get back to you soon.
              </p>
              <a
                href="/"
                className="btn rounded-full 2xl:text-2xl lg:text-xl md:text-xl sm:text-sm text-[.8rem] border py-2 border-white/50 2xl:max-w-[50%] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-pink-600 group"
              >
                <button >
                  {" "}
                  Go Back Home{" "}
                </button>
              </a>
            </div>
          )} 

          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="flex-1 flex flex-col gap-6 w-full mx-auto"
          >
            <div className="flex gap-x-4">
              <input
                type="text"
                name="user_name"
                placeholder="Name"
                required
                className="bg-transparent border border-white/20 rounded-lg py-3 w-full px-6 focus:border focus:border-green-600"
              />
              <input
                type="email"
                name="user_email"
                placeholder="Email"
                required
                className="bg-transparent border border-white/20 rounded-lg py-3 w-full px-6 focus:border focus:border-green-600 invalid:border-red-500 invalid:border-2"
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="bg-transparent border border-white/20 rounded-lg py-3 w-full px-6 focus:border focus:border-green-600 placeholder:text-white/20"
            />
            <textarea
              name="message"
              placeholder="Message"
              required
              className="bg-transparent border border-white/20 rounded-lg py-3 w-full px-6 focus:border focus:border-green-600 placeholder:text-white/20 pb-20 md:pb-32"
            ></textarea>
            <button
              type="submit"
              className="btn rounded-full border py-2 border-white/50 max-w-[50%] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-pink-600 group"
            >
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                Let us talk
              </span>
              <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[32px]" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
