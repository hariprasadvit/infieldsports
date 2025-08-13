"use client";

import { useEffect } from 'react';

export default function ScrollAnimations() {
  useEffect(() => {
    // Intersection Observer for scroll-triggered animations
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2
    };

    const handleIntersection = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Only handle fade-in animations since gradient is now continuous
          if (entry.target.classList.contains('scroll-fade-in')) {
            setTimeout(() => {
              entry.target.classList.add('visible');
            }, 150);
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    // Scroll-based gradient intensity adjustment
    const handleScroll = () => {
      const scrollPercent = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
      const bodyBefore = document.querySelector('body::before');

      // Adjust gradient intensity based on scroll position
      if (bodyBefore) {
        const intensity = Math.sin(scrollPercent * Math.PI * 2) * 0.02 + 0.03;
        document.documentElement.style.setProperty('--scroll-gradient-intensity', intensity);
      }
    };

    // Wait for DOM to be fully loaded
    const observeElements = () => {
      const elementsToObserve = document.querySelectorAll('.scroll-fade-in');
      elementsToObserve.forEach(el => {
        observer.observe(el);
      });
    };

    // Add scroll listener for gradient intensity
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Observe elements
    observeElements();
    const timeoutId = setTimeout(observeElements, 500);

    // Cleanup
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return null; // This component only handles scroll events
}
