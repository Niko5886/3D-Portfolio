import { useMemo } from 'react';
import type { CSSProperties, ElementType, ReactNode } from 'react';
import { motion } from 'framer-motion';

interface FadeInProps {
  children: ReactNode;
  as?: ElementType;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  className?: string;
  style?: CSSProperties;
}

/**
 * Framer Motion wrapper that fades its children in on scroll-into-view.
 * Uses motion.create() so any element type can be animated.
 */
export default function FadeIn({
  children,
  as = 'div',
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  className,
  style,
}: FadeInProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const MotionTag = useMemo(() => motion.create(as as any), [as]) as any;

  return (
    <MotionTag
      className={className}
      style={style}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '50px', amount: 0 }}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </MotionTag>
  );
}
