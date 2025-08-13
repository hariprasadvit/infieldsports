"use client";

import React from "react";
import styles from "./styles.module.scss";

const workflowSteps = [
  {
    id: 1,
    title: "Capture",
    description: "AI scans video feeds from cameras and stadium screens",
    details: [
      "Real-time video feed processing",
      "Multi-camera angle analysis",
      "Stadium display monitoring",
      "Broadcast stream integration"
    ],
    geometric: "diamond"
  },
  {
    id: 2,
    title: "Analyse",
    description: "Detects brand logos, measures visibility, and records exposure time",
    details: [
      "AI-powered logo recognition",
      "Visibility measurement algorithms",
      "Exposure duration tracking",
      "Audience engagement metrics"
    ],
    geometric: "circles"
  },
  {
    id: 3,
    title: "Optimise",
    description: "Suggests sponsor content changes in real time",
    details: [
      "Real-time content recommendations",
      "Dynamic placement optimization",
      "Context-aware suggestions",
      "Revenue maximization algorithms"
    ],
    geometric: "grid"
  },
  {
    id: 4,
    title: "Report",
    description: "Generates post-event analytics for stakeholders",
    details: [
      "Comprehensive exposure reports",
      "ROI analysis and metrics",
      "Stakeholder dashboards",
      "Performance benchmarking"
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
          <h3>Visual 4-Step AI Flow</h3>
          <p className={styles.desc}>
            Our AI-powered system processes visual data in real-time to deliver 
            actionable insights and optimize sponsor value automatically.
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
      </div>
    </section>
  );
}
