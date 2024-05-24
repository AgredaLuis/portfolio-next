import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { Gericht, ImageCompress, onewaytravel } from "@/libs/data/projects";
import { ProfilesLinks, Urls } from "@/libs";


export const Footer = () => {
  return (
    <footer className="md:sticky md:-z-10 bottom-0 left-0 mx-auto py-16 w-full max-w-screen-xl p-4">
      <div className="md:flex md:justify-between">
        <div className="flex flex-col justify-start">
          <h2 className="mb-6 md:mb-0 text-gray-700 pb-2">Luis Agreda</h2>
          <p className="pb-4 text-gray-600">Front-End Developer</p>

          <div className="flex justify-between max-w-[330px] pb-10 md:py-4 gap-x-4">
            <Link
              href={ProfilesLinks.linkedin}
              rel="noreferrer"
              target="_blank"
              aria-label="LinkedIn"
            >
              <div className="bg-[#ecf0f3] rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaLinkedinIn />
              </div>
            </Link>
            <Link
              href={ProfilesLinks.Github}
              rel="noreferrer"
              target="_blank"
              aria-label="GitHub"
            >
              <div className="bg-[#ecf0f3] rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaGithub />
              </div>
            </Link>

            <Link
              href={Urls.Contact}
              rel="noreferrer"
              target="_blank"
              aria-label="Email"
            >
              <div className="bg-[#ecf0f3] rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <AiOutlineMail />
              </div>
            </Link>
            <Link
              href="/resume"
              rel="noreferrer"
              target="_blank"
              aria-label="Resume"
            >
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
            <ul className="text-gray-700">
              <li className="mb-4">
                <Link
                  href="/"
                  className="hover:underline"
                  aria-label="HomePage"
                >
                  Home
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  href="#about"
                  className="hover:underline"
                  aria-label="Go to abaout section"
                >
                  About
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  href="#projects"
                  className="hover:underline"
                  aria-label="Go to projects"
                >
                  Projects
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  href="/contact"
                  className="hover:underline"
                  aria-label="Go to contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-700 uppercase">
              Resources
            </h2>
            <ul className="text-gray-600">
              <li className="mb-4">
                <a
                  href={onewaytravel.url}
                  className="hover:underline "
                  rel="noreferrer"
                  target="_blank"
                  aria-label="OneWayTravel website"
                >
                  OneWayTravel
                </a>
              </li>
              <li className="mb-4">
                <a
                  href={ImageCompress.url}
                  className="hover:underline"
                  rel="noreferrer"
                  target="_blank"
                  aria-label="Meals App website"
                >
                  ImageCompress
                </a>
              </li>
              <li className="mb-4">
                <a
                  href={Gericht.url}
                  className="hover:underline"
                  rel="noreferrer"
                  target="_blank"
                  aria-label="Gericht Restaurant website"
                >
                  Gericht Restaurant
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-700 uppercase">
              Profiles
            </h2>
            <ul className="text-gray-600">
              <li className="mb-4">
                <a
                  href="https://www.frontendmentor.io/profile/AgredaLuis"
                  className="hover:underline"
                  rel="noreferrer"
                  target="_blank"
                  aria-label="Frontend Mentor website"
                >
                  Frontend Mentor
                </a>
              </li>
              <li>
                <a
                  href="https://www.freecodecamp.org/AgredaLuis"
                  className="hover:underline"
                  rel="noreferrer"
                  target="_blank"
                  aria-label="FreeCodeCamp website"
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
        <span className="text-sm text-gray-600 sm:text-center">
          © 2024 Luis Agreda™ . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};
