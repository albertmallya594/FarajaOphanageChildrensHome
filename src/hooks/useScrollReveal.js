import { useEffect, useRef } from 'react';

/**
 * Custom hook to trigger scroll-based animations using Intersection Observer.
 * @param {Object} options - Intersection Observer options (threshold, rootMargin).
 * @returns {Object} reference to be attached to the parent container.
 */
export const useScrollReveal = (options = { threshold: 0.15 }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
          // Once revealed, we can stop observing this specific element
          observer.unobserve(entry.target);
        }
      });
    }, options);

    const elements = containerRef.current?.querySelectorAll('.reveal');
    if (elements) {
      elements.forEach((el) => observer.observe(el));
    }

    return () => {
      if (elements) {
        elements.forEach((el) => observer.unobserve(el));
      }
    };
  }, [options]);

  return containerRef;
};

/**
 * Simple hook for single element observation.
 */
export const useIsVisible = (options = { threshold: 0.2, triggerOnce: true }) => {
  const [isVisible, setIsVisible] = import('react').then(m => m.useState(false));
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        if (options.triggerOnce) observer.unobserve(ref.current);
      }
    }, options);

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [options]);

  return [ref, isVisible];
};
