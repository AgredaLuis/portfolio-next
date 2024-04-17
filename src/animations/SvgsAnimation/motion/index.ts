/* animation  */

export const SVGAnimation = {
  rest: {
    transition: 0.003,

  },
  hover: {
    transition:  0.003,
  },
};

export const letterAnimation = {
  rest: {
    x: 0,
  },
  hover: {
    x: -30,
    transition: {
      duration: 0.3,
      ease: [0.6, 0.01, 0.05, 0.95],
      type: "tween",
    },
  },
};

export const letterAnimationTwo = {
  rest: {
    x: 30,
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
