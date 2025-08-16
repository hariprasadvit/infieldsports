import React from "react";
import styles from "./styles.module.scss";
import CustomButton from "../../../components/CustomButton";

export default function TrustSection() {
  return (
    <section className={styles.trustSection}>
      <div className="pageCenter">
        <div className={styles.content}>
          <div className={styles.header}>
            <h2 className="heading-2">Trust backed by numbers</h2>
            <p className="body-large">
              We have built an outstanding track record. Created a billion 
              moments of joy and we are here to deliver this with 
              every future project.
            </p>
          </div>

          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>2018</div>
              <div className={styles.statLabel}>Founded</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>100%</div>
              <div className={styles.statLabel}>Success Rate</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>50M+</div>
              <div className={styles.statLabel}>Fans Reached</div>
            </div>
          </div>

          <div className={styles.ctaSection}>
            <div className={styles.logo}>
              <svg width="60" height="60" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="heading-3">Starting has never been easier</h3>
            <CustomButton
              type="link"
              linkUrl="/contact-us"
              btnTxt="Connect with Experts"
              className="primary"
              width="220px"
              height="56px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
