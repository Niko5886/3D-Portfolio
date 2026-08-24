import { useRef } from 'react';
import type { CSSProperties } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import type { MotionValue } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
  style?: CSSProperties;
}

function Char({
  char,
  progress,
  range,
}: {
  char: string;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.2, 1]);
  return (
    <span style={{ position: 'relative', display: 'inline-block' }}>
      {/* invisible placeholder keeps layout */}
      <span style={{ visibility: 'hidden' }}>{char}</span>
      <motion.span style={{ position: 'absolute', left: 0, top: 0, opacity }}>
        {char}
      </motion.span>
    </span>
  );
}

/**
 * Reveals text character-by-character as the paragraph scrolls through view.
 * Words wrap as units; each visible character fades from 0.2 -> 1 opacity.
 */
export default function AnimatedText({ text, className, style }: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  });

  const words = text.split(' ');
  const total = text.replace(/\s/g, '').length;
  let charIndex = 0;

  return (
    <p ref={ref} className={className} style={style}>
      {words.map((word, wi) => (
        <span key={wi} style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
          {word.split('').map((c) => {
            const i = charIndex++;
            const start = i / total;
            const end = start + 1 / total;
            return (
              <Char key={i} char={c} progress={scrollYProgress} range={[start, end]} />
            );
          })}
          {wi < words.length - 1 && <span>&nbsp;</span>}
        </span>
      ))}
    </p>
  );
}
