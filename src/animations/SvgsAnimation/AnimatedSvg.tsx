"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  AnimatedElementProps,
  AnimatedElementsProps,
  Props,
} from "./interfaces";
import { SVGAnimation, SVGsAnimation, SVGAnimationTwo } from "./motion";

export default function AnimatedSVG({ chrildren, className }: Props) {
  const [isHovered, setHovered] = useState(false);

  return (
    <motion.div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`relative overflow-hidden cursor-pointer flex ${className}`}
    >
      <AnimatedSvgs
        chrildren={chrildren}
        animation={SVGAnimationTwo}
        isHovered={isHovered}
      />
      <div className="absolute ">
        <AnimatedSvgs
          chrildren={chrildren}
          animation={SVGsAnimation}
          isHovered={isHovered}
        />
      </div>
    </motion.div>
  );
}

export const AnimatedSvg = ({ chrildren, animation }: AnimatedElementsProps) => {
  return (
    <motion.span
      variants={animation}
      className="relative inline-block whitespace-nowrap"
    >
      {chrildren}
    </motion.span>
  );
};

export const AnimatedSvgs = ({
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
      <AnimatedSvg chrildren={chrildren} animation={animation} />
    </motion.span>
  );
};
