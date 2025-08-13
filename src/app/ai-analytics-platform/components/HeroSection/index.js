import React from "react";
import styles from "./styles.module.scss";

export default function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <div className="pageCenter">
        <div className={styles.heroContent}>
          <h1 className="animate-gradient-text">AI Solutions for Smarter Sports & Stadium Management</h1>
          <p className={styles.subtext}>
            Leverage real-time analytics, intelligent content control, and audience insights 
            to maximise fan engagement and sponsor value through cutting-edge artificial intelligence.
          </p>
          
          <div className={styles.ctaButtons}>
            <button className={styles.primaryButton}>
              Request a Demo
            </button>
            <button className={styles.secondaryButton}>
              Explore Capabilities
            </button>
          </div>
        </div>
        
        <div className={styles.heroVisual}>
          <div className={styles.splitScreen}>
            <div className={styles.liveFootage}>
              <div className={styles.videoPlaceholder}>
                <h4>Live Sports Footage</h4>
                <p>Real-time video feed analysis</p>
              </div>
            </div>
            <div className={styles.aiDashboard}>
              <div className={styles.dashboardPlaceholder}>
                <h4>AI Dashboard</h4>
                <div className={styles.metrics}>
                  <div className={styles.metric}>
                    <span className={styles.value}>2.5M</span>
                    <span className={styles.label}>Brand Exposures</span>
                  </div>
                  <div className={styles.metric}>
                    <span className={styles.value}>89%</span>
                    <span className={styles.label}>Engagement Rate</span>
                  </div>
                  <div className={styles.metric}>
                    <span className={styles.value}>15s</span>
                    <span className={styles.label}>Avg. Exposure</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
