"use client";

import { useState } from "react";
import styles from "./page.module.scss";
import HeroSection from "./components/HeroSection";
import ContactForm from "./components/ContactForm";
import LocationInfo from "./components/LocationInfo";
import ThankYouMessage from "./components/ThankYouMessage";
import ScrollAnimations from "../components/ScrollAnimations";

export default function ContactUs() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = (formData) => {
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
  };

  const handleBackToForm = () => {
    setFormSubmitted(false);
  };

  return (
    <div className={styles.contactPage}>
      <ScrollAnimations />
      
      {!formSubmitted ? (
        <>
          <HeroSection />
          <div className="scroll-fade-in scroll-gradient-bg">
            <section className="section">
              <div className="pageCenter">
                <div className={styles.contactContent}>
                  <div className={styles.contactGrid}>
                    <ContactForm onSubmit={handleFormSubmit} />
                    <LocationInfo />
                  </div>
                </div>
              </div>
            </section>
          </div>
        </>
      ) : (
        <ThankYouMessage onBackToForm={handleBackToForm} />
      )}
    </div>
  );
}
