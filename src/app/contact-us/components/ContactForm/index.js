"use client";

import React, { useState } from "react";
import styles from "./styles.module.scss";
import CustomButton from "../../../components/CustomButton";

export default function ContactForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    company: "",
    purpose: ""
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const purposeOptions = [
    { value: "", label: "Select Purpose" },
    { value: "ai-analytics", label: "AI & Analytics Platform" },
    { value: "graphics-broadcast", label: "Graphics & Broadcast Software" },
    { value: "led-infrastructure", label: "LED & Infrastructure Solutions" },
    { value: "consultation", label: "General Consultation" },
    { value: "partnership", label: "Partnership Inquiry" },
    { value: "support", label: "Technical Support" },
    { value: "other", label: "Other" }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[\d\s\-\+\(\)]{10,}$/.test(formData.phone.replace(/\s/g, ""))) {
      newErrors.phone = "Please enter a valid phone number";
    }

    if (!formData.company.trim()) {
      newErrors.company = "Company name is required";
    }

    if (!formData.purpose) {
      newErrors.purpose = "Please select a purpose";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      onSubmit(formData);
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.formContainer}>
      <div className={styles.formHeader}>
        <h2 className="heading-3">Send us a Message</h2>
        <p className="body-medium">
          Fill out the form below and we'll get back to you as soon as possible.
        </p>
      </div>

      <form onSubmit={handleSubmit} className={styles.contactForm}>
        <div className={styles.formGroup}>
          <label htmlFor="name" className={styles.label}>
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className={`${styles.input} ${errors.name ? styles.error : ""}`}
            placeholder="Enter your full name"
          />
          {errors.name && <span className={styles.errorMessage}>{errors.name}</span>}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="phone" className={styles.label}>
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className={`${styles.input} ${errors.phone ? styles.error : ""}`}
            placeholder="Enter your phone number"
          />
          {errors.phone && <span className={styles.errorMessage}>{errors.phone}</span>}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="company" className={styles.label}>
            Company Name *
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleInputChange}
            className={`${styles.input} ${errors.company ? styles.error : ""}`}
            placeholder="Enter your company name"
          />
          {errors.company && <span className={styles.errorMessage}>{errors.company}</span>}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="purpose" className={styles.label}>
            Purpose *
          </label>
          <select
            id="purpose"
            name="purpose"
            value={formData.purpose}
            onChange={handleInputChange}
            className={`${styles.select} ${errors.purpose ? styles.error : ""}`}
          >
            {purposeOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {errors.purpose && <span className={styles.errorMessage}>{errors.purpose}</span>}
        </div>

        <div className={styles.submitContainer}>
          <CustomButton
            type="button"
            onClick={handleSubmit}
            btnTxt={isSubmitting ? "Submitting..." : "Submit"}
            className="primary"
            width="200px"
            height="56px"
          />
        </div>
      </form>
    </div>
  );
}
