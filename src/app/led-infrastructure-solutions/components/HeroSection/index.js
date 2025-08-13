import React from "react";
import styles from "./styles.module.scss";

export default function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <div className="pageCenter">
        <div className={styles.heroContent}>
          <h1 className="animate-gradient-text">Transform Your Stadium Experience</h1>
          <p className={styles.subtext}>
            From high-definition LED displays to premium seating, Infield Sports delivers 
            end-to-end stadium infrastructure that creates world-class sporting environments.
          </p>
          
          <div className={styles.ctaButtons}>
            <button className={styles.primaryButton}>
              Request a Consultation
            </button>
            <button className={styles.secondaryButton}>
              View Our Installations
            </button>
          </div>
        </div>
        
        <div className={styles.heroVisual}>
          <div className={styles.stadiumPlaceholder}>
            <div className={styles.stadiumContent}>
              <h3>Stadium Visual</h3>
              <p>Wide shot of stadium with LED displays and seating</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
