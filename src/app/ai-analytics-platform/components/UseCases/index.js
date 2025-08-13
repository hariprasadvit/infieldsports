"use client";

import React from "react";
import styles from "./styles.module.scss";

const useCases = [
  {
    title: "For Sponsors",
    subtitle: "Real-time proof of visibility and value",
    benefits: [
      "Live exposure tracking and verification",
      "Detailed visibility analytics and reports",
      "ROI measurement with concrete metrics",
      "Brand placement optimization insights"
    ],
    icon: "💼"
  },
  {
    title: "For Teams & Leagues",
    subtitle: "Maximised sponsorship revenue with AI-optimised placement",
    benefits: [
      "Increased sponsor satisfaction and retention",
      "Data-driven pricing for premium placements",
      "Automated content optimization",
      "Enhanced negotiation power with metrics"
    ],
    icon: "🏆"
  },
  {
    title: "For Broadcasters",
    subtitle: "Branded content targeting across multiple camera feeds",
    benefits: [
      "Multi-angle brand detection and tracking",
      "Broadcast-specific exposure analytics",
      "Content targeting optimization",
      "Cross-platform visibility measurement"
    ],
    icon: "📺"
  }
];

export default function UseCases() {
  return (
    <section className={styles.useCases}>
      <div className="pageCenter">
        <div className={styles.sectionHeader}>
          <h2>Use Cases</h2>
          <p className={styles.desc}>
            Discover how different stakeholders leverage our AI solutions to achieve 
            measurable results and maximize value from sports sponsorships.
          </p>
        </div>
        
        <div className={styles.useCasesGrid}>
          {useCases.map((useCase, index) => (
            <div key={index} className={styles.useCaseCard}>
              <div className={styles.cardIcon}>
                <span>{useCase.icon}</span>
              </div>
              <div className={styles.cardHeader}>
                <h3>{useCase.title}</h3>
                <p className={styles.subtitle}>{useCase.subtitle}</p>
              </div>
              <ul className={styles.benefitsList}>
                {useCase.benefits.map((benefit, benefitIndex) => (
                  <li key={benefitIndex}>{benefit}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
