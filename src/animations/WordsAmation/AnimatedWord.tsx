'use client'
import React, { useState } from "react";
import { motion } from "framer-motion";
import { AnimatedLetterProps, AnimatedWordProps, Props } from "./interfaces";
import { letterAnimation, letterAnimationTwo, titleAnimation } from "./motion";



 export default function AnimatedLink({ title }:Props) {
    const [isHovered, setHovered] = useState(false);
  
    return (
      <motion.div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative overflow-hidden cursor-pointer"
      >
        <AnimatedWord title={title} animation={letterAnimation} isHovered={isHovered} />
        <div className="absolute top-0">
          <AnimatedWord title={title} animation={letterAnimationTwo} isHovered={isHovered} />
        </div>
      </motion.div>
    );
  }
  

export const AnimatedLetter = ({ character, animation }: AnimatedLetterProps) => {
  return (
    <motion.span
      variants={animation}
      className="relative inline-block whitespace-nowrap"
    >
      {character}
    </motion.span>
  );
};

export const AnimatedWord = ({ title, animation, isHovered }:AnimatedWordProps) => {
  return (
    <motion.span
      variants={titleAnimation}
      initial="rest"
      animate={isHovered ? "hover" : "rest"}
      className="whitespace-nowrap relative"
    >
      {title
        .split("")
        .map((character, i) =>
          character === " " ? (
            <span key={i}>&nbsp;</span>
          ) : (
            <AnimatedLetter  key={i} character={character} animation={animation} />
          )
        )}
    </motion.span>
  );
};
