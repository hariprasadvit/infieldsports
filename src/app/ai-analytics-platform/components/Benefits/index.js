"use client";

import React from "react";
import styles from "./styles.module.scss";

const benefits = [
  {
    icon: "📊",
    title: "Measurable ROI for Sponsors",
    description: "AI-verified exposure metrics provide concrete proof of sponsorship value and return on investment."
  },
  {
    icon: "🎯",
    title: "Increased Ad Effectiveness",
    description: "Contextual placement algorithms ensure maximum visibility and engagement for sponsor content."
  },
  {
    icon: "🧠",
    title: "Data-Driven Decision Making",
    description: "Real-time analytics empower stadium operators and teams with actionable insights."
  },
  {
    icon: "🔗",
    title: "Seamless Integration",
    description: "Works perfectly with Infield Sports' Broadcast & Stadium Solutions ecosystem."
  }
];

export default function Benefits() {
  return (
    <section className={styles.benefits}>
      <div className="pageCenter">
        <div className={styles.sectionHeader}>
          <h2>Benefits</h2>
          <p className={styles.desc}>
            Transform your sports venue into a data-driven, revenue-optimized environment 
            with measurable results and enhanced sponsor relationships.
          </p>
        </div>
        
        <div className={styles.benefitsGrid}>
          {benefits.map((benefit, index) => (
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
