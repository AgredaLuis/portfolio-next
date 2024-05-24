import React from "react";
import Image from "next/image";
import { FaCircleCheck } from "react-icons/fa6";

const About = () => {
  return (
    <div
      id="about"
      className="w-full px-4 flex items-center py-16 md:px-4 bg-[#ecf0f3]"
    >
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-6 bg-black p-8 rounded-[3rem]">
        <div className="col-span-2 ">
          <h3 className="uppercase text-xl tracking-widest font-bold text-[#9391ED]">
            About
          </h3>
          <h2 className="py-4 md:mx-2 text-white text-4xl">What I Do</h2>
          <p className="py-2 w-[90%] text-white mx-auto">
            I specialize in building mobile responsive front-end UI applications
            that connect with API’s and other backend technologies. I create
            custom-coded websites that are tailored to your brand. I Focus on
            accessibility, performance, and scalability, I also optimize your
            online presence to elevate your visibility in search rankings
          </p>
          <div className="my-2 h-px w-[90%] bg-white"></div>
          <div className="flex flex-col md:flex-row w-[80%] md:items-center justify-between py-4 mx-auto">
            <div className="p-4">
              <h3 className=" font-bold text-[#9391ED] pb-1">
                Web Development
              </h3>
              <p className="text-gray-400 flex items-center py-1 gap-2">
                <FaCircleCheck className="text-[#ecf0f3]" />
                Scalability
              </p>
              <p className="text-gray-400 flex items-center py-1 gap-2">
                <FaCircleCheck className="text-[#ecf0f3]" />
                CMS Integration
              </p>
              <p className="text-gray-400 flex items-center py-1 gap-2">
                <FaCircleCheck className="text-[#ecf0f3]" />
                Animations
              </p>
            </div>
            <div className=" p-4">
              <h3 className=" font-bold text-[#9391ED] pb-1">Web Design</h3>
              <p className="text-gray-400 flex items-center py-1 gap-2">
                <FaCircleCheck className="text-[#ecf0f3]" />
                Responsive Design
              </p>
              <p className="text-gray-400 flex items-center py-1 gap-2">
                <FaCircleCheck className="text-[#ecf0f3]" />
                UX writing
              </p>
              <p className="text-gray-400 flex items-center py-1 gap-2">
                <FaCircleCheck className="text-[#ecf0f3]" />
                Minimalistic Design
              </p>
            </div>
            <div className="p-4">
              <h3 className=" font-bold text-[#9391ED] ">SEO</h3>
              <p className="text-gray-400 flex items-center py-1 gap-2">
                <FaCircleCheck className="text-[#ecf0f3]" />
                Technical SEO
              </p>
              <p className="text-gray-400 flex items-center py-1 gap-2">
                <FaCircleCheck className="text-[#ecf0f3]" />
                On-Page Optimization
              </p>
              <p className="text-gray-400 flex items-center py-1 gap-2">
                <FaCircleCheck className="text-[#ecf0f3]" />
                Links Optimization
              </p>
            </div>
          </div>
        </div>
        <div className="w-full h-full m-auto shadow-xl rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image
            src="/Lighthouse.png"
            className="rounded-xl h-full object-cover"
            alt="/Lighthouse demostration of my portfolio"
            width={700}
            height={700}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
