import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";

export const Footer = () => {
  return (
    <footer className="md:sticky -z-30 bottom-0 left-0 mx-auto py-16 w-full max-w-screen-xl p-4 ">
      <div className="md:flex md:justify-between">
        <div className="flex flex-col justify-start">
          <h2 className="mb-6 md:mb-0 text-gray-700">Danadel</h2>
          <p className="pb-4 text-gray-600">Front-End Developer</p>

          <div className="flex justify-between max-w-[330px] pb-10 md:py-4 gap-x-4">
            <div className="bg-[#ecf0f3] rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <FaLinkedinIn />
            </div>
            <div className="bg-[#ecf0f3] rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <FaGithub />
            </div>
            <Link href="/#contact">
              <div className="bg-[#ecf0f3] rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <AiOutlineMail />
              </div>
            </Link>
            <Link href="/resume">
              <div className="bg-[#ecf0f3] rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <BsFillPersonLinesFill />
              </div>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-700 uppercase">
              Navigation
            </h2>
            <ul className="text-gray-600 dark:text-gray-400">
              <li className="mb-4">
                <a href="https://flowbite.com" className="hover:underline">
                  Home
                </a>
              </li>
              <li className="mb-4">
                <a href="https://tailwindcss.com/" className="hover:underline">
                  About
                </a>
              </li>
              <li className="mb-4">
                <a href="https://tailwindcss.com/" className="hover:underline">
                  Projects
                </a>
              </li>
              <li className="mb-4">
                <a href="https://tailwindcss.com/" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-700 uppercase">
              Resources
            </h2>
            <ul className="text-gray-600 dark:text-gray-400">
              <li className="mb-4">
                <a
                  href="https://github.com/themesberg/flowbite"
                  className="hover:underline "
                >
                  OneWayTravel
                </a>
              </li>
              <li className="mb-4">
                <a
                  href="https://discord.gg/4eeurUVvTy"
                  className="hover:underline"
                >
                  Meals App
                </a>
              </li>
              <li className="mb-4">
                <a
                  href="https://discord.gg/4eeurUVvTy"
                  className="hover:underline"
                >
                  Gerach Restaurant
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-700 uppercase">
              Profiles
            </h2>
            <ul className="text-gray-600 dark:text-gray-400">
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Frontend Mentor
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  FreeCodeCamp
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024{" "}
          <a href="https://flowbite.com" className="hover:underline">
            Luis Agreda™
          </a>
          . All Rights Reserved.
        </span>
        <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0"></div>
      </div>
    </footer>
  );
};
