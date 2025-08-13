"use client";

import React from "react";
import styles from "./styles.module.scss";

const implementationSteps = [
  {
    id: 1,
    title: "Assessment",
    description: "Site survey & requirement analysis",
    details: [
      "Comprehensive venue evaluation",
      "Structural and electrical assessment",
      "Audience capacity and viewing angle analysis",
      "Integration requirements planning"
    ],
    geometric: "diamond"
  },
  {
    id: 2,
    title: "Design",
    description: "Custom layouts for LEDs & seating",
    details: [
      "Bespoke LED display configurations",
      "Optimized seating arrangements",
      "Branding and aesthetic integration",
      "3D visualization and mockups"
    ],
    geometric: "circles"
  },
  {
    id: 3,
    title: "Installation",
    description: "Expert fitting with minimal downtime",
    details: [
      "Professional installation teams",
      "Minimal venue disruption",
      "Quality control and testing",
      "Safety compliance certification"
    ],
    geometric: "grid"
  },
  {
    id: 4,
    title: "Integration",
    description: "Sync with scoring, broadcast, and sponsor playback systems",
    details: [
      "Kshetra scoring system integration",
      "Brihmanas sponsor playback setup",
      "Graphics on Air replay connectivity",
      "Comprehensive system testing"
    ],
    geometric: "hexagon"
  }
];

export default function HowItWorks() {
  return (
    <section className={styles.howItWorks}>
      <div className="pageCenter">
        <div className={styles.sectionHeader}>
          <h2>How It Works</h2>
          <h3>Implementation Flow</h3>
          <p className={styles.desc}>
            Our proven 4-step implementation process ensures seamless stadium transformation 
            with minimal disruption and maximum impact.
          </p>
        </div>
        
        <div className={styles.workflowContainer}>
          <div className={styles.workflowSteps}>
            {implementationSteps.map((step, index) => (
              <div key={step.id} className={styles.workflowStep}>
                <div className={`${styles.geometricShape} ${styles[step.geometric]}`}>
                  {step.geometric === 'diamond' && (
                    <div className={styles.diamondInner}>
                      <div className={styles.diamondCore}></div>
                    </div>
                  )}
                  {step.geometric === 'circles' && (
                    <div className={styles.circlesContainer}>
                      <div className={styles.circle}></div>
                      <div className={styles.circle}></div>
                      <div className={styles.circle}></div>
                    </div>
                  )}
                  {step.geometric === 'grid' && (
                    <div className={styles.gridContainer}>
                      {Array.from({ length: 16 }).map((_, i) => (
                        <div key={i} className={styles.gridCell}></div>
                      ))}
                    </div>
                  )}
                  {step.geometric === 'hexagon' && (
                    <div className={styles.hexagonContainer}>
                      <div className={styles.hexagon}></div>
                    </div>
                  )}
                </div>
                <div className={styles.stepContent}>
                  <h4>{step.title}</h4>
                  <p className={styles.stepDescription}>{step.description}</p>
                  <ul className={styles.stepDetails}>
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex}>{detail}</li>
                    ))}
                  </ul>
                </div>
                {index < implementationSteps.length - 1 && (
                  <div className={styles.stepConnector}></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
