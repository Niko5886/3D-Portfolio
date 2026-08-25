import { useEffect, useRef, useState } from 'react';

/**
 * Scrollspy: tracks which section currently sits across the middle of the
 * viewport and reflects it in the URL hash via history.replaceState (no new
 * history entries, no scroll jumps). Returns the active section id (or null
 * while above the first tracked section, e.g. in the hero).
 */
export default function useScrollSpy(ids: string[]): string | null {
  const [activeId, setActiveId] = useState<string | null>(null);
  const hasActivated = useRef(false);

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const visibility = new Map<string, boolean>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => visibility.set(e.target.id, e.isIntersecting));
        // active = first tracked id (document order) currently crossing the band
        const current = ids.find((id) => visibility.get(id)) ?? null;
        setActiveId(current);
      },
      // thin activation band around the upper-middle of the viewport
      { rootMargin: '-40% 0px -45% 0px', threshold: 0 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ids.join(',')]);

  useEffect(() => {
    if (activeId) {
      hasActivated.current = true;
      if (location.hash !== `#${activeId}`) {
        history.replaceState(null, '', `#${activeId}`);
      }
    } else if (hasActivated.current && location.hash) {
      // scrolled back above the first section (hero) → drop the hash
      history.replaceState(null, '', location.pathname + location.search);
    }
  }, [activeId]);

  return activeId;
}
