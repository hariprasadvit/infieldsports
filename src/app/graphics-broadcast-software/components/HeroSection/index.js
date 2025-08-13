import React from "react";
import styles from "./styles.module.scss";

export default function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <div className="pageCenter">
        <h1 className="animate-gradient-text">Graphics & Broadcast Software</h1>
        <p>
          Comprehensive software solutions for live sports events, delivering 
          real-time graphics, scoring systems, and broadcast-ready content that 
          enhances viewer experience and engagement across all platforms.
        </p>
        <div className={styles.heroStats}>
          <div className={styles.stat}>
            <h3>500+</h3>
            <span>Sports Events</span>
          </div>
          <div className={styles.stat}>
            <h3>5</h3>
            <span>Sports Covered</span>
          </div>
          <div className={styles.stat}>
            <h3>15+</h3>
            <span>Countries</span>
          </div>
        </div>
      </div>
    </section>
  );
}
