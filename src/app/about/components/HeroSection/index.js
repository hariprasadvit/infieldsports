import React from "react";
import styles from "./styles.module.scss";

export default function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <div className="pageCenter">
        <div className={styles.heroContent}>
          <div className={styles.badge}>About Us</div>
          <h1 className={styles.mainHeading}>
            <span className={styles.headingText}>Turning sports </span>
            <span className={`text-gradient ${styles.headingText}`}>complexity</span>
            <span className={styles.headingText}> into </span>
            <span className={`text-gradient ${styles.headingText}`}>elegant</span>
            <span className={styles.headingText}>, </span>
            <span className={`text-gradient ${styles.headingText}`}>high-performance</span>
            <span className={styles.headingText}> solutions</span>
          </h1>
          <p className="body-large">
            <strong>Infield Sports</strong> crafts state-of-the-art sports technology solutions that 
            empower stadiums, broadcasters, and organizations to integrate, visualize, and 
            analyze sports data across the technological vertical.
          </p>
        </div>
      </div>
    </section>
  );
}
