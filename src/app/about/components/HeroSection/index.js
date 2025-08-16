import React from "react";
import styles from "./styles.module.scss";

export default function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <div className="pageCenter">
        <div className={styles.heroContent}>
          <div className={styles.badge}>About Us</div>
          <h1 className="heading-1">
            We Turn Sports <span className="text-gradient">Complexity</span> & Technology Challenges
            <br />
            To <span className="text-gradient">Elegant Solutions</span> & 
            <br />
            Absolute <span className="text-gradient">Performance</span>
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
