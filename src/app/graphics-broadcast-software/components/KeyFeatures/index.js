"use client";

import React from "react";
import styles from "./styles.module.scss";

const keyFeatures = [
  {
    icon: "🔗",
    title: "Seamless Integration",
    description: "All three products work together flawlessly, sharing data and synchronizing outputs for unified event management."
  },
  {
    icon: "⚡",
    title: "Real-time Control",
    description: "Minimal latency control systems ensure instant updates and responses across all connected displays and systems."
  },
  {
    icon: "🎨",
    title: "Custom Branding",
    description: "Comprehensive branding options for teams and sponsors with customizable templates and dynamic content integration."
  },
  {
    icon: "🏟️",
    title: "Multi-Sport Support",
    description: "Works with multiple sports and event types, from cricket and football to athletics and specialized tournaments."
  },
  {
    icon: "📈",
    title: "Scalable Architecture",
    description: "Designed to scale from small venues to large stadiums, adapting to different technical requirements and budgets."
  },
  {
    icon: "🛡️",
    title: "Reliable Performance",
    description: "Enterprise-grade reliability with redundancy options and offline support for mission-critical events."
  }
];

export default function KeyFeatures() {
  return (
    <section className={styles.keyFeatures}>
      <div className="pageCenter">
        <div className={styles.sectionHeader}>
          <h2>Key Features Across All Solutions</h2>
          <p className={styles.desc}>
            Our integrated software suite provides comprehensive capabilities that work 
            seamlessly together to deliver exceptional sports broadcasting experiences.
          </p>
        </div>
        
        <div className={styles.featuresGrid}>
          {keyFeatures.map((feature, index) => (
            <div key={index} className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <span>{feature.icon}</span>
              </div>
              <div className={styles.featureContent}>
                <h4>{feature.title}</h4>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
