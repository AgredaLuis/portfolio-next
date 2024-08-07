"use client";
import { motion, useCycle, AnimatePresence, MotionConfig } from "framer-motion";
import Link from "next/link";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { ProfilesLinks, Urls } from "@/libs";
import AnimatedLink from "@/animations/WordsAmation/AnimatedWord";

const Navbar = () => {
  const [mobileNav, toggleOpen] = useCycle(false, true);

  return (
    <nav className="fixed w-full z-30 flex justify-center pt-7 md:pt-[25px] xl:pt-4 2xl:pt-[24px] bg-transparent ">
      <div className="w-[78%] z-20 bg-white shadow-[1px_2px_10px_#00000050] h-20 2xl:h-[86px] rounded-full flex items-center justify-between py-3 md:py-3 xl:py-[16px] px-8 text-black animate-appear">
        <div className="mr-1 sm:hidden text-2xl"><Link href={Urls.Home} className="font-bold">LA</Link></div>
        <div className="hidden sm:block text-2xl">
          <Link href={Urls.Home} className="font-bold">Luis Agreda</Link>
        </div>
        <ul className="hidden md:flex gap-4">
          <li className="2xl:text-lg">
            <Link href={Urls.About}>
                <AnimatedLink title="About" />
            </Link>
          </li>
          <li className="2xl:text-lg">
            <Link href="/#projects" className="hover:underline">
                <AnimatedLink title="Projects" />
            </Link>
          </li>
        </ul>
        <div className="flex gap-4">
          <a href={Urls.Resume} rel="noreferrer"  target="_blank"  about="Open Resume my resume" aria-label="Open Resume">
            <button aria-label="Open Resume" className="hidden md:block py-3 px-5"><AnimatedLink title="Resume" /></button>
          </a>
          <Link href={Urls.Contact}>
            <button aria-label="Go to Contact" className="py-3 px-5"><AnimatedLink title="Contact" /></button>
          </Link>
        </div>
        

        <motion.button
          animate={mobileNav ? "open" : "closed"}
          className=" md:hidden flex flex-col space-y-1"
          aria-label="Open Mobile Navigation"
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
              className="fixed top-0 h-screen w-screen bg-gradient-to-r from-[#5651e5] to-[#709dff] p-6 flex flex-col justify-center"
            >
              <motion.div
                variants={{
                  open: { opacity: 1, y: 0 },
                  closed: { opacity: 0, y: "25%" },
                }}
                className="py-6"
              >
                <ul>
                  <li className="py-4 text-4xl font-bold text-white">
                    <Link href="/#home" aria-label="Go to Home" onClick={() => toggleOpen()}>
                      Home
                    </Link>
                  </li>
                  <li className="py-4 text-4xl font-bold text-white">
                    <Link href="/#about" aria-label="Go to About" onClick={() => toggleOpen()}>
                      About
                    </Link>
                  </li>
                  <li className="py-4 text-4xl font-bold text-white">
                    <Link href="/#projects" aria-label="Go to Projects" onClick={() => toggleOpen()}>
                      Projects
                    </Link>
                  </li>
                  <li className="py-4 text-4xl font-bold text-white">
                    <Link href={Urls.Contact} aria-label="Go to Contact" className="hover:underline" onClick={() => toggleOpen()}>
                      Contact
                    </Link>
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
                className="list-none flex justify-center items-end"
              >
                <div className="flex items-center justify-between max-w-[330px] m-auto py-4 gap-x-4">
                  <Link
                    href={ProfilesLinks.linkedin}
                    rel="noreferrer"
                    target="_blank"
                    aria-label="LinkedIn"
                  >
                    <div className="bg-[#ecf0f3] rounded-full  p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaLinkedinIn />
                    </div>
                  </Link>
                  <Link
                    href={ProfilesLinks.Github}
                    rel="noreferrer"
                    target="_blank"
                    aria-label="Github"
                  >
                    <div className="bg-[#ecf0f3] rounded-full  p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaGithub />
                    </div>
                  </Link>
                  <Link href={Urls.Contact} aria-label="contact page">
                    <div className="bg-[#ecf0f3] rounded-full  p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <AiOutlineMail />
                    </div>
                  </Link>
                  <Link href={Urls.Resume}>
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
