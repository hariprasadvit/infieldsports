"use client";

import React from "react";
import styles from "./styles.module.scss";

const technicalSpecs = [
  {
    category: "Screen Formats & Resolutions",
    items: [
      "4K Ultra HD (3840 × 2160)",
      "Full HD (1920 × 1080)",
      "HD Ready (1280 × 720)",
      "Custom aspect ratios",
      "Portrait and landscape orientations"
    ]
  },
  {
    category: "Compatible LED & Video Systems",
    items: [
      "Perimeter LED displays",
      "Stadium big screens",
      "Ribbon boards and mid-tier displays",
      "Player tunnel screens",
      "Broadcast video boards"
    ]
  },
  {
    category: "Data Integration Options",
    items: [
      "REST API integration",
      "Real-time data feeds",
      "CSV import/export",
      "Database connectivity",
      "Third-party sports data providers"
    ]
  },
  {
    category: "Redundancy & Offline Support",
    items: [
      "Hot-swap failover systems",
      "Offline mode operation",
      "Data backup and recovery",
      "Load balancing",
      "24/7 monitoring and alerts"
    ]
  }
];

export default function TechnicalCapabilities() {
  return (
    <section className={styles.technicalCapabilities}>
      <div className="pageCenter">
        <div className={styles.sectionHeader}>
          <h2>Technical Capabilities</h2>
          <p className={styles.desc}>
            Our software solutions are built on robust technical foundations, 
            supporting a wide range of hardware configurations and integration requirements.
          </p>
        </div>
        
        <div className={styles.specsGrid}>
          {technicalSpecs.map((spec, index) => (
            <div key={index} className={styles.specCard}>
              <h4>{spec.category}</h4>
              <ul className={styles.specList}>
                {spec.items.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={styles.performanceStats}>
          <div className={styles.stat}>
            <h3>&lt;50ms</h3>
            <span>Latency</span>
          </div>
          <div className={styles.stat}>
            <h3>99.9%</h3>
            <span>Uptime</span>
          </div>
          <div className={styles.stat}>
            <h3>50+</h3>
            <span>Concurrent Displays</span>
          </div>
          <div className={styles.stat}>
            <h3>24/7</h3>
            <span>Support</span>
          </div>
        </div>
      </div>
    </section>
  );
}
