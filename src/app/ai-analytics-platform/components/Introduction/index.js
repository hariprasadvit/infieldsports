import React from "react";
import styles from "./styles.module.scss";

export default function Introduction() {
  return (
    <section className={styles.introduction}>
      <div className="pageCenter">
        <div className={styles.content}>
          <h2>AI-Powered Sports Intelligence</h2>
          <p className={styles.overview}>
            Infield Sports' AI Solutions integrate seamlessly with stadium displays, broadcast systems, 
            and sponsorship platforms. Using cutting-edge computer vision, data analytics, and machine learning, 
            we help teams, leagues, and brands make better decisions and deliver richer experiences.
          </p>
          <div className={styles.integrationHighlight}>
            <h3>Seamless Ecosystem Integration</h3>
            <div className={styles.integrationGrid}>
              <div className={styles.integrationItem}>
                <span className={styles.icon}>📺</span>
                <span>Stadium Displays</span>
              </div>
              <div className={styles.integrationItem}>
                <span className={styles.icon}>📡</span>
                <span>Broadcast Systems</span>
              </div>
              <div className={styles.integrationItem}>
                <span className={styles.icon}>🎯</span>
                <span>Sponsorship Platforms</span>
              </div>
              <div className={styles.integrationItem}>
                <span className={styles.icon}>🤖</span>
                <span>Machine Learning</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
