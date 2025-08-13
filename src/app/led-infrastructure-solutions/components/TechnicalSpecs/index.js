"use client";

import React from "react";
import styles from "./styles.module.scss";

const technicalSpecs = [
  {
    category: "LED Pixel Pitch Options",
    items: [
      "P2.5 - Ultra High Definition (Indoor)",
      "P3.91 - High Definition (Indoor/Outdoor)",
      "P5 - Standard Definition (Outdoor)",
      "P6 - Large Venue (Outdoor)",
      "P10 - Perimeter Displays (Outdoor)"
    ]
  },
  {
    category: "Seating Materials & Certifications",
    items: [
      "UV-resistant polypropylene shells",
      "Fire-retardant foam cushioning",
      "Anti-fade color treatments",
      "ISO 9001 quality certification",
      "GREENGUARD environmental standards"
    ]
  },
  {
    category: "Weather Resistance Ratings",
    items: [
      "IP65+ for outdoor LED displays",
      "IP54 for semi-outdoor installations",
      "Temperature range: -20°C to +60°C",
      "Humidity resistance up to 95%",
      "Wind load resistance up to 200 km/h"
    ]
  },
  {
    category: "System Integration",
    items: [
      "Kshetra scoring software compatibility",
      "Brihmanas sponsor playback integration",
      "Graphics on Air replay system sync",
      "Real-time data feed support",
      "API integration for third-party systems"
    ]
  }
];

const performanceMetrics = [
  { metric: "5000+ nits", description: "Outdoor Brightness" },
  { metric: "120Hz", description: "Refresh Rate" },
  { metric: "IP65+", description: "Weather Protection" },
  { metric: "100,000", description: "Hour Lifespan" }
];

export default function TechnicalSpecs() {
  return (
    <section className={styles.technicalSpecs}>
      <div className="pageCenter">
        <div className={styles.sectionHeader}>
          <h2>Technical Specifications</h2>
          <p className={styles.desc}>
            Industry-leading technical specifications ensure our stadium solutions 
            deliver exceptional performance, durability, and seamless integration.
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

        <div className={styles.performanceSection}>
          <h3>Performance Metrics</h3>
          <div className={styles.metricsGrid}>
            {performanceMetrics.map((metric, index) => (
              <div key={index} className={styles.metricCard}>
                <h4>{metric.metric}</h4>
                <span>{metric.description}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.integrationHighlight}>
          <h4>Complete Ecosystem Integration</h4>
          <p>
            All LED and infrastructure solutions are designed to work seamlessly with 
            Kshetra scoring software, Brihmanas sponsor playback, and Graphics on Air 
            replay systems, providing a unified stadium technology ecosystem.
          </p>
        </div>
      </div>
    </section>
  );
}
