"use client";

import React, { useState } from "react";
import styles from "./styles.module.scss";

export default function ExpertCTA() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(""); // "", "loading", "success", "error"
  const [message, setMessage] = useState("");

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email.trim()) {
      setStatus("error");
      setMessage("Please enter your email address");
      return;
    }

    if (!validateEmail(email)) {
      setStatus("error");
      setMessage("Please enter a valid email address");
      return;
    }

    setStatus("loading");
    setMessage("");

    // Simulate API call
    setTimeout(() => {
      setStatus("success");
      setMessage("Thanks! We'll reach out within 1 business day.");
      setEmail("");
    }, 1000);
  };

  return (
    <section className={`${styles.expertCTA} floating-section`}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2>Talk to Our Expert for Installation</h2>
          <p className={styles.description}>
            Ready to transform your sports venue with cutting-edge technology? 
            Our expert team will guide you through the perfect solution tailored to your needs. 
            Get started with a personalized consultation today.
          </p>
          
          <form className={styles.emailForm} onSubmit={handleSubmit}>
            <div className={styles.inputGroup}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className={styles.emailInput}
                disabled={status === "loading"}
              />
              <button 
                type="submit" 
                className={styles.submitButton}
                disabled={status === "loading"}
              >
                {status === "loading" ? "Sending..." : "Get Expert Consultation"}
              </button>
            </div>
            
            {message && (
              <div className={`${styles.message} ${styles[status]}`}>
                {message}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
