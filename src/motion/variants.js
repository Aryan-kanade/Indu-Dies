/** Shared motion language for Indu Dyes — industrial, short, soft ease-out. */

export const EASE = [0.22, 1, 0.36, 1];

export const DURATION = {
  page: 0.28,
  enter: 0.5,
  quick: 0.35,
};

export const VIEWPORT = { once: true, margin: '-40px' };

export const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.enter, ease: EASE },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: DURATION.enter, ease: EASE },
  },
};

export const fadeLeft = {
  hidden: { opacity: 0, x: -28 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: DURATION.enter, ease: EASE },
  },
};

export const fadeRight = {
  hidden: { opacity: 0, x: 28 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: DURATION.enter, ease: EASE },
  },
};

/** Staggered card/item grid — use with custom index via RevealGroup children */
export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.04,
    },
  },
};

export const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.enter, ease: EASE },
  },
};

/** Drop-in replacement for legacy cardVariants(custom i) patterns */
export const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: DURATION.enter,
      delay: i * 0.07,
      ease: EASE,
    },
  }),
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.97 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: DURATION.enter, ease: EASE },
  },
};
