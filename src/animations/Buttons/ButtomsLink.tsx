"use client";
import { ReactElement } from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import { AnimatedWord } from "../WordsAmation/AnimatedWord";
import { letterAnimation, letterAnimationTwo } from "../WordsAmation/motion";
import { AnimatedSvgs } from "../SvgsAnimation/AnimatedSvg";
import { SVGAnimationTwo, SVGsAnimation } from "../SvgsAnimation/motion";

interface Props {
  chrildren: ReactElement;
  className?: string;
  title: string;
}

const ButtomsLink = ({ chrildren, className, title }: Props) => {
  const [isHovered, setHovered] = useState(false);

  return (
    <motion.div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`flex justify-center items-center gap-6 ${className} `}
    >
      <div className="relative overflow-hidden cursor-pointer border-b-[1px] mb-[5px]">
        <AnimatedWord
          title={title}
          animation={letterAnimation}
          isHovered={isHovered}
        />
        <div className="absolute top-0">
          <AnimatedWord
            title={title}
            animation={letterAnimationTwo}
            isHovered={isHovered}
          />
        </div>
      </div>

      <motion.div
        className={`relative overflow-hidden cursor-pointer  bg-[#5651e5] 
        rounded-full w-[55px] h-[55px] flex items-center justify-center ease-in 
        duration-75 ${
          isHovered
            ? `border-[1px]
        border-black  text-gray-700 bg-[#ecf0f3] scale-110`
            : "text-white"
        } `}
      >
        <AnimatedSvgs
          chrildren={chrildren}
          animation={SVGAnimationTwo}
          isHovered={isHovered}
        />
        <div className="absolute">
          <AnimatedSvgs
            chrildren={chrildren}
            animation={SVGsAnimation}
            isHovered={isHovered}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ButtomsLink;
