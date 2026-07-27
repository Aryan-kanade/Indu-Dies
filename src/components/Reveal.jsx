import { motion, useReducedMotion } from 'framer-motion';
import {
  fadeUp,
  fadeIn,
  fadeLeft,
  fadeRight,
  scaleIn,
  staggerContainer,
  staggerItem,
  VIEWPORT,
} from '../motion/variants';

const PRESETS = {
  fadeUp,
  fadeIn,
  fadeLeft,
  fadeRight,
  scaleIn,
};

/**
 * Scroll-triggered reveal. Opacity + transform only.
 * With prefers-reduced-motion, renders a static element.
 */
export default function Reveal({
  children,
  className = '',
  variant = 'fadeUp',
  delay = 0,
  as = 'div',
  viewport = VIEWPORT,
  ...rest
}) {
  const reduceMotion = useReducedMotion();
  const Mot = motion[as] || motion.div;
  const base = PRESETS[variant] || fadeUp;
  const variants =
    delay > 0
      ? {
          ...base,
          visible: {
            ...base.visible,
            transition: { ...base.visible.transition, delay },
          },
        }
      : base;

  if (reduceMotion) {
    const Tag = as === 'div' ? 'div' : as;
    return (
      <Tag className={className} {...rest}>
        {children}
      </Tag>
    );
  }

  return (
    <Mot
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      {...rest}
    >
      {children}
    </Mot>
  );
}

/**
 * Parent for staggered children. Wrap grid; each child should use RevealItem.
 */
export function RevealGroup({
  children,
  className = '',
  as = 'div',
  viewport = VIEWPORT,
  ...rest
}) {
  const reduceMotion = useReducedMotion();
  const Mot = motion[as] || motion.div;

  if (reduceMotion) {
    const Tag = as === 'div' ? 'div' : as;
    return (
      <Tag className={className} {...rest}>
        {children}
      </Tag>
    );
  }

  return (
    <Mot
      className={className}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      {...rest}
    >
      {children}
    </Mot>
  );
}

export function RevealItem({ children, className = '', as = 'div', ...rest }) {
  const reduceMotion = useReducedMotion();
  const Mot = motion[as] || motion.div;

  if (reduceMotion) {
    const Tag = as === 'div' ? 'div' : as;
    return (
      <Tag className={className} {...rest}>
        {children}
      </Tag>
    );
  }

  return (
    <Mot className={className} variants={staggerItem} {...rest}>
      {children}
    </Mot>
  );
}
