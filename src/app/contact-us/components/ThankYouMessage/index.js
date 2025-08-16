import React from "react";
import styles from "./styles.module.scss";
import CustomButton from "../../../components/CustomButton";

export default function ThankYouMessage({ onBackToForm }) {
  return (
    <section className={styles.thankYouSection}>
      <div className="pageCenter">
        <div className={styles.thankYouContent}>
          <div className={styles.successIcon}>
            <svg width="80" height="80" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
              <path d="m9 12 2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          
          <h1 className="heading-2">
            Thank You for <span className="text-gradient">Reaching Out!</span>
          </h1>
          
          <p className="body-large">
            Your message has been successfully submitted. Our team will review your inquiry and get back to you within 24 hours.
          </p>
          
          <div className={styles.nextSteps}>
            <h3 className="heading-4">What happens next?</h3>
            <ul className={styles.stepsList}>
              <li className={styles.step}>
                <div className={styles.stepIcon}>1</div>
                <span>Our team reviews your inquiry</span>
              </li>
              <li className={styles.step}>
                <div className={styles.stepIcon}>2</div>
                <span>We'll contact you within 24 hours</span>
              </li>
              <li className={styles.step}>
                <div className={styles.stepIcon}>3</div>
                <span>Schedule a consultation if needed</span>
              </li>
            </ul>
          </div>
          
          <div className={styles.actionButtons}>
            <CustomButton
              type="button"
              onClick={onBackToForm}
              btnTxt="Send Another Message"
              className="whiteBtn"
              width="220px"
              height="56px"
            />
            <CustomButton
              type="link"
              linkUrl="/"
              btnTxt="Back to Home"
              className="primary"
              width="180px"
              height="56px"
            />
          </div>
          
          <div className={styles.contactInfo}>
            <p className="body-medium">
              Need immediate assistance? Call us at{" "}
              <a href="tel:+918754575637" className={styles.phoneLink}>
                +91 87545 75637
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
