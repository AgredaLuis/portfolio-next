import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { Gericht, Mealsapp, onewaytravel } from "@/libs/data/projects";
import { ProfilesLinks } from "@/libs";

export const Footer = () => {
  return (
    <footer className="bottom-0 left-0 mx-auto py-16 w-full max-w-screen-xl p-4">
      <div className="md:flex md:justify-between">
        <div className="flex flex-col justify-start">
          <h2 className="mb-6 md:mb-0 text-gray-700 pb-2">Luis Agreda</h2>
          <p className="pb-4 text-gray-600">Front-End Developer</p>

          <div className="flex justify-between max-w-[330px] pb-10 md:py-4 gap-x-4">
            <Link href={ProfilesLinks.linkedin} rel="noreferrer" target="_blank">
              <div className="bg-[#ecf0f3] rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaLinkedinIn />
              </div>
            </Link>
            <Link href={ProfilesLinks.Github} rel="noreferrer" target="_blank">
              <div className="bg-[#ecf0f3] rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaGithub />
              </div>
            </Link>

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
                <Link href="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li className="mb-4">
                <Link href="#about" className="hover:underline">
                  About
                </Link>
              </li>
              <li className="mb-4">
                <Link href="#projects" className="hover:underline">
                  Projects
                </Link>
              </li>
              <li className="mb-4">
                <Link href="/contact" className="hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-700 uppercase">
              Resources
            </h2>
            <ul className="text-gray-600 dark:text-gray-400">
              <li className="mb-4">
                <a href={onewaytravel.url} className="hover:underline ">
                  OneWayTravel
                </a>
              </li>
              <li className="mb-4">
                <a href={Mealsapp.url} className="hover:underline">
                  Meals App
                </a>
              </li>
              <li className="mb-4">
                <a href={Gericht.url} className="hover:underline">
                  Gericht Restaurant
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
                <a
                  href="https://www.frontendmentor.io/profile/AgredaLuis"
                  className="hover:underline"
                >
                  Frontend Mentor
                </a>
              </li>
              <li>
                <a
                  href="https://www.freecodecamp.org/AgredaLuis"
                  className="hover:underline"
                >
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
