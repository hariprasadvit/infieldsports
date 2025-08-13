"use client";

import React from "react";
import styles from "./styles.module.scss";

const softwareSolutions = [
  {
    id: 1,
    title: "Kshetra",
    subtitle: "Scoring Software",
    sports: ["Cricket", "Football", "Golf", "Hockey", "Athletics & Field Events"],
    features: [
      "Sport-specific scoreboard templates",
      "Real-time updates",
      "Branding options",
      "Multi-language support"
    ],
    description: "Comprehensive scoring software that covers multiple sports with real-time updates and customizable templates.",
    cta: "Learn More About Kshetra",
    gradient: "linear-gradient(135deg, #02062d 0%, #1a1a2e 50%, #000000 100%)",
  },
  {
    id: 2,
    title: "Brihmanas",
    subtitle: "Sponsor Playback",
    sports: ["LED Perimeter", "Mid Tier", "Wave", "Vorms", "Tunnel", "Player Bench", "Sight Screen"],
    features: [
      "Scheduled playback",
      "Sponsor asset management",
      "Real-time control",
      "Multi-format support"
    ],
    description: "Advanced sponsor playback system for LED displays and various stadium installations with seamless integration.",
    cta: "Learn More About Brihmanas",
    gradient: "linear-gradient(135deg, #02062d 0%, #16213e 50%, #000000 100%)",
  },
  {
    id: 3,
    title: "Graphics on Air",
    subtitle: "Replay Sponsor Playbook",
    sports: ["In-stadia replay integration", "Sponsor overlays", "Broadcast graphics"],
    features: [
      "Instant replays",
      "Highlight clips",
      "Branded transitions",
      "Real-time graphics overlay"
    ],
    description: "Professional replay system with integrated sponsor playback and branded graphics for enhanced viewer experience.",
    cta: "Learn More About Graphics on Air",
    gradient: "linear-gradient(135deg, #02062d 0%, #0f0f23 50%, #000000 100%)",
  },
];

export default function SoftwareSolutions() {
  return (
    <section className={styles.softwareSolutions}>
      <div className="pageCenter">
        <div className={styles.sectionHeader}>
          <h2>Software Solutions Overview</h2>
          <p className={styles.desc}>
            Three powerful software solutions that work together to deliver comprehensive 
            graphics and broadcast capabilities for sports events of any scale.
          </p>
        </div>
        <div className={styles.solutionsGrid}>
          {softwareSolutions.map((solution) => (
            <div
              className={styles.solutionCard}
              key={solution.id}
              style={{
                background: solution.gradient,
              }}
            >
              <div className={styles.cardOverlay}></div>
              <div className={styles.cardContent}>
                <div className={styles.cardHeader}>
                  <h3>{solution.title}</h3>
                  <h4>{solution.subtitle}</h4>
                </div>
                
                <div className={styles.sportsSection}>
                  <h5>Covers:</h5>
                  <div className={styles.sportsList}>
                    {solution.sports.map((sport, index) => (
                      <span key={index} className={styles.sportTag}>
                        {sport}
                      </span>
                    ))}
                  </div>
                </div>

                <div className={styles.featuresSection}>
                  <h5>Features:</h5>
                  <ul className={styles.featuresList}>
                    {solution.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <p className={styles.description}>{solution.description}</p>

                <button className={styles.ctaButton}>
                  {solution.cta}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
