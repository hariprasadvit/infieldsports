"use client";
import { useState, useEffect } from "react";
import styles from "./styles.module.scss";

export default function FeaturedCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const featuredCases = [
    {
      id: 1,
      title: "Kshetra Cricket Scoring Revolution",
      subtitle: "M.A. Chidambaram Stadium • Chennai",
      description: "Our revolutionary AI-powered scoring system transformed cricket analytics at one of India's most prestigious venues. Real-time ball tracking, automated statistics, and instant broadcast graphics elevated the viewing experience for millions of fans worldwide.",
      image: "/landing/imgOne.svg",
      tags: ["AI Analytics", "Cricket", "Real-time"],
      quote: "The level of accuracy and speed in scoring has revolutionized how we present cricket to our global audience.",
      author: "Stadium Director",
      metrics: {
        accuracy: "99.8%",
        speed: "<1s",
        coverage: "360°"
      },
      year: "2024",
      achievement: "IPL Official System"
    },
    {
      id: 2,
      title: "Smart Stadium Infrastructure",
      subtitle: "Wankhede Stadium • Mumbai",
      description: "Complete digital transformation featuring 360-degree LED perimeter displays, IoT-enabled crowd management, and intelligent power distribution systems. Setting new standards for modern stadium experiences in cricket.",
      image: "/landing/imgTwo.svg",
      tags: ["Stadium Tech", "LED Infrastructure", "IoT"],
      quote: "This technology has completely transformed how fans experience cricket at our venue.",
      author: "Operations Manager",
      metrics: {
        displays: "360°",
        resolution: "4K",
        efficiency: "+35%"
      },
      year: "2024",
      achievement: "Green Stadium Certified"
    },
    {
      id: 3,
      title: "AI Football Analytics Platform",
      subtitle: "Emirates Stadium • London",
      description: "Advanced player tracking and tactical analysis system providing real-time insights for Premier League matches. Our AI algorithms analyze 22 players simultaneously with unprecedented accuracy.",
      image: "/landing/imgThree.svg",
      tags: ["AI Analytics", "Football", "Player Tracking"],
      quote: "The tactical insights provided have given our team a significant competitive advantage.",
      author: "Head Coach",
      metrics: {
        players: "22",
        accuracy: "95%",
        insights: "Live"
      },
      year: "2023",
      achievement: "Premier League Approved"
    },
    {
      id: 4,
      title: "Broadcast Automation Suite",
      subtitle: "Melbourne Cricket Ground • Australia",
      description: "Revolutionary AI-driven broadcast automation covering cricket's biggest matches. Automatic camera switching, intelligent graphics generation, and commentary assistance delivering world-class production quality.",
      image: "/landing/imgFour.svg",
      tags: ["Broadcast AI", "Cricket", "Automation"],
      quote: "The production quality achieved through automation exceeds our highest expectations.",
      author: "Broadcast Director",
      metrics: {
        cameras: "12",
        automation: "95%",
        quality: "8K"
      },
      year: "2023",
      achievement: "World Cup Ready"
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredCases.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, featuredCases.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredCases.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredCases.length) % featuredCases.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section className={styles.featuredCarousel}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>Featured Success Stories</h2>
          <p>Highlighting our most impactful stadium and broadcast transformations</p>
        </div>

        <div className={styles.carousel}>
          <div className={styles.slideContainer}>
            {featuredCases.map((caseStudy, index) => (
              <div
                key={caseStudy.id}
                className={`${styles.slide} ${index === currentSlide ? styles.active : ''}`}
              >
                <div className={styles.slideContent}>
                  <div className={styles.imageSection}>
                    <img src={caseStudy.image} alt={caseStudy.title} />
                    <div className={styles.imageOverlay}>
                      <div className={styles.tags}>
                        {caseStudy.tags.map((tag, tagIndex) => (
                          <span key={tagIndex} className={styles.tag}>
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className={styles.achievement}>
                        <span className={styles.achievementBadge}>
                          {caseStudy.achievement}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className={styles.textSection}>
                    <div className={styles.slideHeader}>
                      <span className={styles.year}>{caseStudy.year}</span>
                      <h3 className={styles.title}>{caseStudy.title}</h3>
                      <p className={styles.subtitle}>{caseStudy.subtitle}</p>
                    </div>

                    <p className={styles.description}>{caseStudy.description}</p>

                    <div className={styles.metrics}>
                      {Object.entries(caseStudy.metrics).map(([key, value]) => (
                        <div key={key} className={styles.metric}>
                          <span className={styles.metricValue}>{value}</span>
                          <span className={styles.metricLabel}>{key}</span>
                        </div>
                      ))}
                    </div>

                    <blockquote className={styles.quote}>
                      <p>"{caseStudy.quote}"</p>
                      <cite>— {caseStudy.author}</cite>
                    </blockquote>

                    <button className={styles.caseStudyBtn}>
                      Read Full Case Study
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="m9 18 6-6-6-6"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.controls}>
            <button 
              onClick={prevSlide}
              className={styles.navBtn}
              aria-label="Previous slide"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <polyline points="15,18 9,12 15,6"/>
              </svg>
            </button>

            <div className={styles.indicators}>
              {featuredCases.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`${styles.indicator} ${index === currentSlide ? styles.active : ''}`}
                  aria-label={`Go to slide ${index + 1}`}
                >
                  <div className={styles.indicatorProgress}>
                    {index === currentSlide && isAutoPlaying && (
                      <div className={styles.progressBar}></div>
                    )}
                  </div>
                </button>
              ))}
            </div>

            <button 
              onClick={nextSlide}
              className={styles.navBtn}
              aria-label="Next slide"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <polyline points="9,18 15,12 9,6"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
