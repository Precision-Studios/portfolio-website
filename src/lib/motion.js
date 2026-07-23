const easeProductive = [0.2, 0, 0.38, 0.9];
const easeExpressive = [0.4, 0.14, 0.3, 1];

export const viewportOnce = { once: true, margin: '-40px' };

export const fadeUp = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.24, ease: easeProductive },
};

export const fadeUpDelayed = (delay = 0.05) => ({
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.24, delay, ease: easeProductive },
});

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.24, ease: easeProductive },
};

export const slideInRight = {
  initial: { opacity: 0, x: 16 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.24, ease: easeProductive },
};

export const whileInViewFadeUp = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: viewportOnce,
  transition: { duration: 0.24, ease: easeProductive },
};

export const staggerTransition = (index, step = 0.05) => ({
  transition: { delay: index * step, duration: 0.24, ease: easeProductive },
});

export const heroTransition = {
  transition: { duration: 0.4, ease: easeExpressive },
};

export { easeProductive, easeExpressive };
