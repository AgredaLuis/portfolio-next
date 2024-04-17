"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  AnimatedElementProps,
  AnimatedElementsProps,
  Props,
} from "./interfaces";
import { SVGAnimation, letterAnimation, letterAnimationTwo } from "./motion";

export default function AnimatedSVG({ chrildren }: Props) {
  const [isHovered, setHovered] = useState(false);

  return (
    <motion.div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative overflow-hidden cursor-pointer flex"
    >
      <AnimatedWord
        chrildren={chrildren}
        animation={letterAnimationTwo}
        isHovered={isHovered}
      />
      <div className="absolute left-0">
        <AnimatedWord
          chrildren={chrildren}
          animation={letterAnimation}
          isHovered={isHovered}
        />
      </div>
    </motion.div>
  );
}

const AnimatedLetter = ({ chrildren, animation }: AnimatedElementsProps) => {
  return (
    <motion.span
      variants={animation}
      className="relative inline-block whitespace-nowrap"
    >
      {chrildren}
    </motion.span>
  );
};

const AnimatedWord = ({
  chrildren,
  animation,
  isHovered,
}: AnimatedElementProps) => {
  return (
    <motion.span
      initial="rest"
      animate={isHovered ? "hover" : "rest"}
      className="whitespace-nowrap relative"
    >
      <AnimatedLetter chrildren={chrildren} animation={animation} />
    </motion.span>
  );
};
