"use client";
import { motion, useCycle, AnimatePresence, MotionConfig } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Navbar = () => {
  const [mobileNav, toggleOpen] = useCycle(false, true);
  const [navOpen, setNavOpen] = useState(false);

  return (
    <nav className="fixed w-full z-10 flex justify-center pt-7 md:pt-[25px] xl:pt-4 2xl:pt-[24px] bg-transparent">
      <div className="w-[78%] z-20 bg-black h-20 2xl:h-[86px] rounded-full flex items-center justify-between py-3 md:py-3 xl:py-[16px] px-8 text-white">
        <div className="text-md sm:hidden">DA</div>
        <div className="hidden sm:block 2xl:text-xl">Danadel</div>
        <ul className="hidden md:flex gap-4">
          <li className="2xl:text-lg">
            <Link href="/#about">About</Link>
          </li>
          <li className="2xl:text-lg">
            <Link href="/#projects">Projects</Link>
          </li>
          <li className="2xl:text-lg">Contact</li>
        </ul>
        <div className="flex gap-4">
          <button className="hidden md:block py-3 px-5">Resume</button>
          <button className="py-3 px-5">Contact</button>
        </div>

        <motion.button
          animate={mobileNav ? "open" : "closed"}
          className=" md:hidden flex flex-col space-y-1"
          onClick={() => toggleOpen()}
        >
          <motion.span
            variants={{
              open: { rotate: 45, y: 5 },
              closed: { rotate: 0 },
            }}
            className="w-5 h-px bg-white block"
          ></motion.span>
          <motion.span
            variants={{
              open: { opacity: 0 },
              closed: { opacity: 1 },
            }}
            className="w-5 h-px bg-white block"
          ></motion.span>
          <motion.span
            variants={{
              open: { rotate: -45, y: -5 },
              closed: { rotate: 0 },
            }}
            className="w-5 h-px bg-white block"
          ></motion.span>
        </motion.button>
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}

      <AnimatePresence>
        {mobileNav && (
          <MotionConfig transition={{ type: "spring", bounce: 0.09 }}>
            <motion.div
              key="mobile-nav-motion"
              variants={{
                open: {
                  x: 0,
                  transition: {
                    type: "spring",
                    bounce: 0.09,
                    when: "beforeChildren",
                  },
                },
                closed: {
                  x: "-100%",
                  transition: {
                    type: "spring",
                    bounce: 0.09,
                    when: "afterChildren",
                  },
                },
              }}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed top-0 h-screen w-screen bg-blue-600 p-6 flex flex-col justify-center"
            >
              <motion.div
                variants={{
                  open: { opacity: 1, y: 0 },
                  closed: { opacity: 0, y: "25%" },
                }}
                className="py-6"
              >
                <ul>
                <li className="py-4 text-4xl font-bold text-white">Home</li>
                  <li className="py-4 text-4xl font-bold text-white">About</li>
                  <li className="py-4 text-4xl font-bold text-white">
                    Projects
                  </li>
                  <li className="py-4 text-4xl font-bold text-white">
                    Contact
                  </li>
                </ul>
              </motion.div>
              <motion.div
                variants={{
                  open: { opacity: 1, y: 0 },
                  closed: { opacity: 0, y: "25%" },
                }}
                className="w-full bg-white h-[1px]"
              ></motion.div>
              <motion.ul
                variants={{
                  closed: {
                    y: "25%",
                    opacity: 0,
                  },
                  open: {
                    y: "0%",
                    opacity: 1,
                  },
                }}
                className="list-none flex justify-center"
              >
                <div className="flex items-center justify-between max-w-[330px] m-auto py-4 gap-x-4">
                  <div className="bg-[#ecf0f3] rounded-full  p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <FaLinkedinIn />
                  </div>
                  <div className="bg-[#ecf0f3] rounded-full  p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                    <FaGithub />
                  </div>
                  <Link href="/#contact">
                    <div className="bg-[#ecf0f3] rounded-full  p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <AiOutlineMail />
                    </div>
                  </Link>
                  <Link href="/resume">
                    <div className="bg-[#ecf0f3] rounded-full  p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <BsFillPersonLinesFill />
                    </div>
                  </Link>
                </div>
              </motion.ul>
            </motion.div>
          </MotionConfig>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
