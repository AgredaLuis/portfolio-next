/* animation  */

export const SVGAnimation = {
  rest: {
    transition: 0.003,

  },
  hover: {
    transition:  0.003,
  },
};

export const SVGsAnimation = {
  rest: {
    x: 0,
  },
  hover: {
    x: -40,
    transition: {
      duration: 0.3,
      ease: [0.6, 0.01, 0.05, 0.95],
      type: "tween",
    },
  },
};

export const SVGAnimationTwo = {
  rest: {
    x: 40,
  },
  hover: {
    x: 0,
    transition: {
      duration: 0.3,
      ease: [0.6, 0.01, 0.05, 0.95],
      type: "tween",
    },
  },
};

/* animation ENDS */
