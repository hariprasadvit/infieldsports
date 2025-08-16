import React from "react";
import styles from "./styles.module.scss";

export default function ExistenceSection() {
  return (
    <section className={styles.existenceSection}>
      <div className="pageCenter">
        <div className={styles.content}>
          <div className={styles.textSection}>
            <div className={styles.badge}>Our Story</div>
            <h2 className="heading-2">Our Existence Explained</h2>
            <p className="body-large">
              Founded in <strong>2018</strong>, we recognized a demand for solutions that transform 
              how sports are experienced, analyzed, and broadcast across the technological landscape.
            </p>
            <p className="body-medium">
              Looking at the industry, we encountered software solutions that struggled to 
              handle the real-time demands of live sports competition. We saw slow load times, 
              limited integration capabilities, and tools that failed to deliver the precision 
              that modern sports require.
            </p>
            <p className="body-medium">
              Evolving software from simple manual processes, requiring time to run algorithms, 
              into instant comprehensive analytics and broadcast automation. We observed industry 
              pain points around complex setup processes, and recognized better tooling, 
              automation, and optimization was needed.
            </p>
            <p className="body-medium">
              It was clear to us technology had an opportunity to make the greatest impact inside 
              stadiums and discovered <strong>Smart Infrastructure</strong>, machine learning 
              algorithms, and intelligent <strong>Broadcast Automation</strong> could empower 
              sports organizations to deliver enhanced experiences that engage millions worldwide.
            </p>
          </div>
          
          <div className={styles.statsSection}>
            <div className={styles.stat}>
              <div className={styles.statNumber}>2018</div>
              <div className={styles.statLabel}>Founded</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNumber}>100%</div>
              <div className={styles.statLabel}>Success Rate</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNumber}>50M+</div>
              <div className={styles.statLabel}>Fans Reached</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
