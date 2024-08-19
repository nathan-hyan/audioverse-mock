export const LOCAL_ANIMATIONS = {
  container: {
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
    hidden: { opacity: 0 },
  },
  items: {
    visible: {
      delay: 1,
      opacity: 1,
      x: 0,
    },
    hidden: {
      opacity: 0,
      x: -10,
    },
  },
};
