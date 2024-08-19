export const LOCAL_ANIMATIONS = {
  container: {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
    hidden: {
      x: 50,
      opacity: 0,
    },
  },
  text: {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        staggerChildren: 1.2,
      },
    },
  },
  img: {
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  },
};
