"use client";

import { useEffect } from 'react';

export default function ScrollAnimations() {
  useEffect(() => {
    // Intersection Observer for scroll-triggered animations
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const handleIntersection = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          
          // Add gradient background animation for sections
          if (entry.target.classList.contains('scroll-gradient-bg')) {
            entry.target.classList.add('active');
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    // Observe all elements with scroll animation classes
    const elementsToObserve = document.querySelectorAll('.scroll-fade-in, .scroll-gradient-bg');
    elementsToObserve.forEach(el => observer.observe(el));

    // Cleanup
    return () => {
      elementsToObserve.forEach(el => observer.unobserve(el));
    };
  }, []);

  return null; // This component only handles scroll events
}
