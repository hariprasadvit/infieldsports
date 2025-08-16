import React from "react";
import styles from "./styles.module.scss";

export default function QualitySection() {
  return (
    <section className={styles.qualitySection}>
      <div className="pageCenter">
        <div className={styles.content}>
          <div className={styles.textContent}>
            <div className={styles.badge}>Team</div>
            <h2 className="heading-2">
              We care deeply about the quality of our work
            </h2>
            <p className="body-medium">
              <strong>Infield Sports</strong> always takes a high-quality approach. While our 
              solutions may look simple, elegant, and sophisticated from the outside, 
              we spend weeks of detailed engineering behind the scenes to ensure 
              every system performs flawlessly.
            </p>
            <p className="body-medium">
              We are diligent in both our technology decisions and software quality. 
              Our team's success isn't just about innovative features—it's about 
              delivering reliable solutions that sports organizations can depend on 
              when it matters most.
            </p>
            <button className={styles.ctaButton}>
              Meet Our Team
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="m9 18 6-6-6-6"/>
              </svg>
            </button>
          </div>

          <div className={styles.imageSection}>
            <div className={styles.imagePlaceholder}>
              <div className={styles.imageContent}>
                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
                <p>Team Photo</p>
              </div>
            </div>
            <div className={styles.teamInfo}>
              <p>The Infield Sports team at our Chennai headquarters, where innovation meets sports technology excellence.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
