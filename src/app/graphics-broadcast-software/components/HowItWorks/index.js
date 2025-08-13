"use client";

import React from "react";
import styles from "./styles.module.scss";

const workflowSteps = [
  {
    id: 1,
    title: "Prepare",
    description: "Setup scoring data, sponsor creatives, and replay system",
    details: [
      "Configure sport-specific scoring templates",
      "Upload sponsor assets and creatives",
      "Initialize replay capture system",
      "Set up display configurations"
    ],
    geometric: "diamond"
  },
  {
    id: 2,
    title: "Control",
    description: "Operators run scoring, ad playback, and replays in sync",
    details: [
      "Real-time score updates and statistics",
      "Synchronized sponsor content playback",
      "Live replay trigger and control",
      "Multi-operator coordination dashboard"
    ],
    geometric: "circles"
  },
  {
    id: 3,
    title: "Display",
    description: "Output to big screens, LED panels, and replay boards",
    details: [
      "Stadium big screen integration",
      "LED perimeter and mid-tier displays",
      "Player bench and tunnel screens",
      "Broadcast graphics overlay"
    ],
    geometric: "grid"
  },
  {
    id: 4,
    title: "Review",
    description: "Post-event stats, ad impressions, and highlight packages",
    details: [
      "Detailed event statistics and reports",
      "Sponsor impression analytics",
      "Automated highlight reel generation",
      "Performance optimization insights"
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
          <h3>Unified Workflow</h3>
          <p className={styles.desc}>
            Our integrated system provides a seamless 4-step workflow that ensures 
            all three products work together perfectly during live events.
          </p>
        </div>
        
        <div className={styles.workflowContainer}>
          <div className={styles.workflowSteps}>
            {workflowSteps.map((step, index) => (
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
                {index < workflowSteps.length - 1 && (
                  <div className={styles.stepConnector}></div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className={styles.integrationHighlight}>
          <h4>Complete Integration</h4>
          <p>
            All three software solutions - Kshetra, Brihmanas, and Graphics on Air - 
            work seamlessly together in this unified workflow, providing operators 
            with unprecedented control and audiences with engaging experiences.
          </p>
        </div>
      </div>
    </section>
  );
}
