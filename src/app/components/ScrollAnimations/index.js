"use client";

import { useEffect } from 'react';

export default function ScrollAnimations() {
  useEffect(() => {
    // Intersection Observer for scroll-triggered animations
    const observerOptions = {
      root: null,
      rootMargin: '-50px 0px -50px 0px',
      threshold: [0.1, 0.3, 0.5]
    };

    const handleIntersection = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add visible class with a slight delay for better effect
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, 100);

          // Add gradient background animation for sections
          if (entry.target.classList.contains('scroll-gradient-bg')) {
            setTimeout(() => {
              entry.target.classList.add('active');
            }, 200);
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    // Wait for DOM to be fully loaded
    const observeElements = () => {
      const elementsToObserve = document.querySelectorAll('.scroll-fade-in, .scroll-gradient-bg');
      elementsToObserve.forEach(el => {
        observer.observe(el);
      });
    };

    // Observe immediately and also after a short delay to catch dynamically added elements
    observeElements();
    const timeoutId = setTimeout(observeElements, 500);

    // Cleanup
    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, []);

  return null; // This component only handles scroll events
}
