"use client";

import React from "react";
import styles from "./styles.module.scss";

const aiProducts = [
  {
    id: 1,
    title: "MATRA",
    subtitle: "AI Brand Analytics",
    features: [
      "Tracks on-screen sponsor exposure in real time (LED boards, big screens, replays)",
      "Generates reports on audience reach, duration, and placement value",
      "AI-powered detection for brand logo recognition across multiple camera angles",
      "Automated exposure measurement and valuation"
    ],
    description: "Advanced computer vision technology that provides comprehensive real-time brand analytics and sponsor visibility tracking across all stadium displays and broadcast feeds.",
    background: "rgba(15, 15, 15, 0.8)",
  },
  {
    id: 2,
    title: "TRIVENI",
    subtitle: "Content Intelligence",
    features: [
      "AI-assisted sponsor content placement decisions based on live game context",
      "Automates which ads play on which LED zones for maximum visibility",
      "Predictive models to optimise ad rotation for engagement & revenue",
      "Context-aware content scheduling and placement"
    ],
    description: "Intelligent content management system that uses machine learning to optimize sponsor content placement and maximize advertising effectiveness in real-time.",
    background: "rgba(15, 15, 15, 0.8)",
  },
  {
    id: 3,
    title: "Brihmanas + MATRA Integration",
    subtitle: "Unified AI Analytics",
    features: [
      "Links AI analytics with sponsor playback system for instant campaign adjustments",
      "Real-time data-driven content switching during events",
      "Dynamic performance dashboards for sponsors and stadium operators",
      "Closed-loop optimization for maximum ROI"
    ],
    description: "Seamlessly integrated platform combining playback control with AI analytics for intelligent, data-driven sponsor content management and optimization.",
    background: "rgba(15, 15, 15, 0.8)",
  },
];

export default function AIProducts() {
  return (
    <section className={styles.aiProducts}>
      <div className="pageCenter">
        <div className={styles.sectionHeader}>
          <h2>AI Products & Capabilities</h2>
          <p className={styles.desc}>
            Three powerful AI-driven solutions that revolutionize sports analytics, 
            content intelligence, and sponsor value optimization through cutting-edge technology.
          </p>
        </div>
        <div className={styles.productsGrid}>
          {aiProducts.map((product) => (
            <div
              className={styles.productCard}
              key={product.id}
              style={{
                background: product.background,
              }}
            >
              <div className={styles.cardContent}>
                <div className={styles.cardHeader}>
                  <h3>{product.title}</h3>
                  <h4>{product.subtitle}</h4>
                </div>
                
                <div className={styles.featuresSection}>
                  <ul className={styles.featuresList}>
                    {product.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <p className={styles.description}>{product.description}</p>

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
