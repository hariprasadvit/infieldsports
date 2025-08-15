import React from "react";
import styles from "./styles.module.scss";

export default function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <div className="pageCenter">
        <div className={styles.heroContent}>
          <h1 className="heading-1">
            Get in <span className="text-gradient">Touch</span>
          </h1>
          <p className="body-large">
            Ready to transform your sports experience? Let's discuss how our innovative solutions can elevate your organization.
          </p>
        </div>
      </div>
    </section>
  );
}
