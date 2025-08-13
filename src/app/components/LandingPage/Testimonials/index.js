"use client";

import React, { useRef, useEffect, useState } from "react";
import styles from "./styles.module.scss";

export default function Testimonials() {
  const scrollRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "Premier Sports League",
      position: "Technology Director",
      text: "Infield Sports transformed our entire stadium experience. Their LED solutions and broadcast software have elevated our game presentation to championship levels.",
    },
    {
      name: "Michael Chen",
      company: "Global Sports Network",
      position: "Head of Operations",
      text: "The AI analytics platform provided insights we never thought possible. Game-changing technology that's revolutionized how we understand sports performance.",
    },
    {
      name: "Emma Rodriguez",
      company: "Olympic Committee",
      position: "Innovation Lead",
      text: "Outstanding partnership from concept to execution. Their graphics and broadcast solutions made our events truly spectacular for audiences worldwide.",
    },
    {
      name: "David Thompson",
      company: "Professional Football League",
      position: "Technical Manager",
      text: "Reliability, innovation, and exceptional support. Infield Sports delivered beyond our expectations and continues to push the boundaries of sports technology.",
    },
    {
      name: "Lisa Wang",
      company: "International Tennis Federation",
      position: "Digital Innovation Lead",
      text: "The seamless integration of their analytics platform during our tournaments provided unprecedented insights that enhanced both player performance and fan engagement.",
    },
    {
      name: "Robert Martinez",
      company: "Major League Soccer",
      position: "Broadcast Director",
      text: "Their real-time graphics and broadcast solutions have set a new standard in sports presentation. The quality and reliability are simply outstanding.",
    },
  ];

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleScroll = () => {
      const { scrollLeft, scrollWidth, clientWidth } = container;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    };

    // Auto-scroll functionality
    let autoScrollInterval;
    if (!isHovering) {
      autoScrollInterval = setInterval(() => {
        if (container && canScrollRight) {
          container.scrollBy({ left: 1, behavior: 'smooth' });
        } else if (container) {
          container.scrollTo({ left: 0, behavior: 'smooth' });
        }
      }, 50);
    }

    container.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => {
      container.removeEventListener('scroll', handleScroll);
      clearInterval(autoScrollInterval);
    };
  }, [isHovering, canScrollRight]);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <section className={styles.testimonials}>
      <div className="pageCenter">
        <div className={styles.sectionHeader}>
          <h2>What Our Clients Say</h2>
          <p className={styles.desc}>
            Hear from industry leaders who trust our solutions to <span>power their success</span>
            and deliver exceptional sports experiences to millions of fans worldwide.
          </p>
        </div>
        <div className={styles.carouselContainer}>
          <div className={styles.gradientFade}></div>
          <div
            className={styles.scrollContainer}
            ref={scrollRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {testimonials.map((testimonial, index) => (
              <div className={styles.testimonialCard} key={index}>
                <div className={styles.testimonialText}>
                  "{testimonial.text}"
                </div>
                <div className={styles.profile}>
                  <div className={styles.avatarPlaceholder}>
                    <span>{testimonial.name.charAt(0)}</span>
                  </div>
                  <div className={styles.clientInfo}>
                    <strong>{testimonial.name}</strong>
                    <span className={styles.position}>{testimonial.position}</span>
                    <span className={styles.company}>{testimonial.company}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.gradientFadeRight}></div>
        </div>
      </div>
    </section>
  );
}
