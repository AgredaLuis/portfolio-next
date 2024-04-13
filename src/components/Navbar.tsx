"use client";
import { motion, useCycle, AnimatePresence, MotionConfig } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [mobileNav, toggleOpen] = useCycle(false, true);
  const [navOpen, setNavOpen] = useState(false);

  return (
    <nav className=" fixed w-full z-30 flex justify-center pt-7 md:pt-[25px] xl:pt-4 bg-transparen">
      <div className="w-[78%] bg-black h-30 rounded-full flex items-center justify-between py-3 md:py-3 xl:py-[16px] px-8 text-white">
        <div className="text-md sm:hidden">DA</div>
        <div className="hidden sm:block">Danadel</div>
        <ul className="hidden md:flex gap-4">
          <li><Link href="/#about">About</Link></li>
          <li><Link href="/#projects">Projects</Link></li>
          <li>Skills</li>
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
              className="fixed h-screen inset-0 bg-blue-600 space-y-10 p-6 flex flex-col justify-center"
            >
              <motion.div
                variants={{
                  open: { opacity: 1, y: 0 },
                  closed: { opacity: 0, y: "25%" },
                }}
              >
                <ul>
                  <li className="py-4 text-4xl font-bold text-white">About</li>
                  <li className="py-4 text-4xl font-bold text-white">
                    Projects
                  </li>
                  <li className="py-4 text-4xl font-bold text-white">Contact</li>
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
                className="list-none flex justify-center gap-x-4"
              >
                <li>
                  <div className="bg-white rounded-lg w-8 h-8"></div>
                </li>
                <li>
                  <div className="bg-white rounded-lg w-8 h-8"></div>
                </li>
                <li>
                  <div className="bg-white rounded-lg w-8 h-8"></div>
                </li>
              </motion.ul>
            </motion.div>
          </MotionConfig>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
