"use client";

import React from "react";
import styles from "./styles.module.scss";

const stadiumSolutions = [
  {
    id: 1,
    title: "Indoor LED Solutions",
    features: [
      "Ultra-bright, high-refresh screens for arenas & indoor stadiums",
      "Custom sizes & aspect ratios",
      "High-contrast display for any lighting condition",
      "Seamless content integration"
    ],
    description: "Perfect for basketball arenas, hockey rinks, and indoor sports complexes where precision and clarity matter most.",
    background: "rgba(15, 15, 15, 0.8)",
  },
  {
    id: 2,
    title: "Outdoor LED Solutions",
    features: [
      "Weatherproof, high-brightness boards for open-air stadiums",
      "Long-distance visibility & wide viewing angles",
      "Energy-efficient & low maintenance",
      "IP65+ weather resistance rating"
    ],
    description: "Built to withstand all weather conditions while delivering crystal-clear visuals for football stadiums, cricket grounds, and outdoor venues.",
    background: "rgba(15, 15, 15, 0.8)",
  },
  {
    id: 3,
    title: "Seats & Gallery",
    features: [
      "Ergonomic, durable seating options",
      "Branding and colour customisation",
      "VIP, media, and general seating layouts",
      "Premium materials and safety certifications"
    ],
    description: "Comprehensive seating solutions designed for comfort, durability, and enhanced spectator experience across all venue types.",
    background: "rgba(15, 15, 15, 0.8)",
  },
];

export default function StadiumSolutions() {
  return (
    <section className={styles.stadiumSolutions}>
      <div className="pageCenter">
        <div className={styles.sectionHeader}>
          <h2>Stadium Solutions Overview</h2>
          <p className={styles.desc}>
            Three comprehensive solution categories that transform stadiums into 
            world-class sporting venues with cutting-edge technology and premium infrastructure.
          </p>
        </div>
        <div className={styles.solutionsGrid}>
          {stadiumSolutions.map((solution) => (
            <div
              className={styles.solutionCard}
              key={solution.id}
              style={{
                background: solution.background,
              }}
            >
              <div
                className={styles.cardContent}
              >
                <div className={styles.cardHeader}>
                  <h3>{solution.title}</h3>
                </div>
                
                <div className={styles.featuresSection}>
                  <ul className={styles.featuresList}>
                    {solution.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <p className={styles.description}>{solution.description}</p>

                <button className={styles.ctaButton}>
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
