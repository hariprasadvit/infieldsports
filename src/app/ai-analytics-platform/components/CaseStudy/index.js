"use client";

import React from "react";
import styles from "./styles.module.scss";

export default function CaseStudy() {
  return (
    <section className={styles.caseStudy}>
      <div className="pageCenter">
        <div className={styles.sectionHeader}>
          <h2>Case Study / Example</h2>
          <p className={styles.desc}>
            Real-world AI dashboard showing sponsor logo detection and engagement 
            metrics during a live sports event.
          </p>
        </div>
        
        <div className={styles.dashboardContainer}>
          <div className={styles.dashboardDemo}>
            <div className={styles.dashboardHeader}>
              <h3>AI Analytics Dashboard - Live Match</h3>
              <div className={styles.statusIndicator}>
                <span className={styles.liveStatus}>● LIVE</span>
                <span className={styles.timestamp}>15:42:33</span>
              </div>
            </div>
            
            <div className={styles.dashboardContent}>
              <div className={styles.heatmapSection}>
                <h4>Sponsor Logo Detection Heatmap</h4>
                <div className={styles.heatmapGrid}>
                  {Array.from({ length: 20 }).map((_, index) => (
                    <div 
                      key={index} 
                      className={`${styles.heatmapCell} ${
                        index % 3 === 0 ? styles.high : 
                        index % 3 === 1 ? styles.medium : styles.low
                      }`}
                    ></div>
                  ))}
                </div>
                <div className={styles.heatmapLegend}>
                  <span className={styles.legendItem}>
                    <div className={`${styles.colorBox} ${styles.high}`}></div>
                    High Visibility
                  </span>
                  <span className={styles.legendItem}>
                    <div className={`${styles.colorBox} ${styles.medium}`}></div>
                    Medium Visibility
                  </span>
                  <span className={styles.legendItem}>
                    <div className={`${styles.colorBox} ${styles.low}`}></div>
                    Low Visibility
                  </span>
                </div>
              </div>
              
              <div className={styles.metricsSection}>
                <h4>Real-time Metrics</h4>
                <div className={styles.metricsGrid}>
                  <div className={styles.metricCard}>
                    <span className={styles.metricValue}>2.3M</span>
                    <span className={styles.metricLabel}>Total Exposures</span>
                  </div>
                  <div className={styles.metricCard}>
                    <span className={styles.metricValue}>18.5s</span>
                    <span className={styles.metricLabel}>Avg. Duration</span>
                  </div>
                  <div className={styles.metricCard}>
                    <span className={styles.metricValue}>94%</span>
                    <span className={styles.metricLabel}>Detection Accuracy</span>
                  </div>
                  <div className={styles.metricCard}>
                    <span className={styles.metricValue}>$127K</span>
                    <span className={styles.metricLabel}>Estimated Value</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className={styles.chartSection}>
              <h4>Exposure Time vs. Brand Engagement</h4>
              <div className={styles.chartPlaceholder}>
                <div className={styles.chartBars}>
                  <div className={styles.chartBar} style={{height: '60%'}}></div>
                  <div className={styles.chartBar} style={{height: '85%'}}></div>
                  <div className={styles.chartBar} style={{height: '70%'}}></div>
                  <div className={styles.chartBar} style={{height: '95%'}}></div>
                  <div className={styles.chartBar} style={{height: '78%'}}></div>
                  <div className={styles.chartBar} style={{height: '88%'}}></div>
                </div>
                <div className={styles.chartLabels}>
                  <span>Q1</span>
                  <span>Q2</span>
                  <span>Q3</span>
                  <span>Q4</span>
                  <span>OT1</span>
                  <span>OT2</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
