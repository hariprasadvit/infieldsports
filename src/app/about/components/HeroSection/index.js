import React from "react";
import styles from "./styles.module.scss";

export default function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <div className="pageCenter">
        <div className={styles.heroContent}>
          <div className={styles.badge}>About Us</div>
          <h1 className={styles.mainHeading}>
            <span className={styles.headingText}>We Turn Sports </span>
            <span className={`text-gradient ${styles.headingText}`}>Complexity</span>
            <span className={styles.headingText}> & Technology Challenges</span>
            <br />
            <span className={styles.headingText}>To </span>
            <span className={`text-gradient ${styles.headingText}`}>Elegant Solutions</span>
            <span className={styles.headingText}> & </span>
            <br />
            <span className={styles.headingText}>Absolute </span>
            <span className={`text-gradient ${styles.headingText}`}>Performance</span>
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
