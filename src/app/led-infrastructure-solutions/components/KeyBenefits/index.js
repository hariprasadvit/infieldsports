"use client";

import React from "react";
import styles from "./styles.module.scss";

const keyBenefits = [
  {
    icon: "🎯",
    title: "Enhanced Fan Engagement",
    description: "Crystal-clear visuals and immersive displays create unforgettable experiences that keep fans coming back for more."
  },
  {
    icon: "📈",
    title: "Increased Sponsor ROI",
    description: "Highly visible ad placements and dynamic content delivery maximize sponsor value and revenue opportunities."
  },
  {
    icon: "🛡️",
    title: "Improved Spectator Comfort & Safety",
    description: "Ergonomic seating designs and clear sightlines ensure optimal comfort and safety for all attendees."
  },
  {
    icon: "📏",
    title: "Scalable Designs",
    description: "Flexible solutions that adapt to venues of all sizes, from intimate arenas to massive stadiums."
  }
];

export default function KeyBenefits() {
  return (
    <section className={styles.keyBenefits}>
      <div className="pageCenter">
        <div className={styles.sectionHeader}>
          <h2>Key Benefits</h2>
          <p className={styles.desc}>
            Transform your stadium into a revenue-generating, fan-engaging, 
            world-class sporting destination with our comprehensive solutions.
          </p>
        </div>
        
        <div className={styles.benefitsGrid}>
          {keyBenefits.map((benefit, index) => (
            <div key={index} className={styles.benefitCard}>
              <div className={styles.benefitIcon}>
                <span>{benefit.icon}</span>
              </div>
              <div className={styles.benefitContent}>
                <h4>{benefit.title}</h4>
                <p>{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
