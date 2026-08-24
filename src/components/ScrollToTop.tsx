import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

/**
 * Floating "back to top" button. Appears after scrolling past the hero and
 * smooth-scrolls to the top. A circular dark-glass FAB holds the 3D chrome
 * cursor arrow (rotated to point up) to match the site's iridescent language.
 */
export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={scrollToTop}
          aria-label="Back to top"
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.92 }}
          className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 flex items-center justify-center rounded-full w-16 h-16 sm:w-[72px] sm:h-[72px]"
          style={{
            background:
              'radial-gradient(circle at 35% 28%, rgba(118, 33, 176, 0.5), rgba(12, 12, 12, 0.85))',
            border: '1px solid rgba(215, 226, 234, 0.22)',
            boxShadow: '0 8px 26px rgba(118, 33, 176, 0.5)',
            backdropFilter: 'blur(6px)',
            WebkitBackdropFilter: 'blur(6px)',
          }}
        >
          <img
            src="/images/ui/arrow-up.png"
            alt=""
            draggable={false}
            className="w-9 h-9 sm:w-11 sm:h-11 object-contain select-none pointer-events-none"
            style={{
              transform: 'rotate(45deg)',
              filter: 'drop-shadow(0 2px 5px rgba(0, 0, 0, 0.45))',
            }}
          />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
