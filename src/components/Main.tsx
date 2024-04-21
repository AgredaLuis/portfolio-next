import { ProfilesLinks, Urls } from "@/libs";
import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center bg-[#ecf0f3]">
      <div className="max-w-[1240px] w-full h-full mx-auto p-4 flex justify-center items-center">
        <div className="">
          <h1 className="py-4 text-gray-700 text-5xl font-extrabold">
            Hi, I&#39;m <span className="text-[#5651e5]">Luis Agreda</span>
          </h1>
          <h2 className="py-2 text-gray-700 text-4xl font-extrabold">
            A Front-End Web Developer
          </h2>
          <h3 className="py-4 text-gray-600 sm:max-w-[70%] m-auto text-[18px] font-semibold">
            I’m focused on building responsive front-end web applications
            integrating back-end technologies.
          </h3>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <Link href={ProfilesLinks.linkedin} rel="noreferrer" target="_blank" aria-label="LinkedIn">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaLinkedinIn />
              </div>
            </Link>
            <Link href="https://github.com/AgredaLuis" rel="noreferrer" target="_blank" aria-label="GitHub">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaGithub />
              </div>
            </Link>
            <Link href="/contact" aria-label="Email">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <AiOutlineMail />
              </div>
            </Link>
            <Link href={Urls.Resume} rel="noreferrer" target="_blank" aria-label="Resume">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <BsFillPersonLinesFill />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
