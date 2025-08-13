import React from "react";
import styles from "./styles.module.scss";

export default function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <div className="pageCenter">
        <h1>Transforming Events into State of the Art Experiences</h1>
        <p>
          As a dynamic and visionary company, we epitomize the art of crafting
          captivating experiences. Through a fusion of creativity, innovation,
          and meticulous execution, we excel at breathing life into events,
          whether on screen or stage.{" "}
        </p>
        <div className={styles.spline}>
          {/* Spline component temporarily removed for performance */}
          <div style={{ height: '400px', background: 'rgba(0, 0, 0, 1)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px' }}>
            <p style={{ color: '#666' }}>3D Scene Placeholder</p>
          </div>
        </div>
      </div>
    </section>
  );
}
