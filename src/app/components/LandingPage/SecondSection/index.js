"use client";

import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import CustomButton from "../../CustomButton";

const businessVerticals = [
  {
    id: 1,
    title: "Graphics & Broadcast Software",
    description:
      "Advanced graphics solutions and broadcast software for live sports events. Our cutting-edge technology delivers real-time graphics, scoring systems, and broadcast-ready content that enhances viewer experience and engagement.",
    gradient: "linear-gradient(135deg, #7fff00 0%, #32cd32 50%, #228b22 100%)",
  },
  {
    id: 2,
    title: "AI & Analytics Platform",
    description:
      "Intelligent analytics and AI-powered solutions for sports performance optimization. We provide comprehensive data analysis, player tracking, and predictive insights that transform how teams and leagues understand their game.",
    gradient: "linear-gradient(135deg, #ffff00 0%, #ffd700 50%, #ffb347 100%)",
  },
  {
    id: 3,
    title: "LED & Infrastructure Solutions",
    description:
      "Complete LED display systems and stadium infrastructure solutions. From indoor/outdoor LED installations to seating arrangements and gallery setups, we create immersive sporting environments that captivate audiences.",
    gradient: "linear-gradient(135deg, #adff2f 0%, #9acd32 50%, #6b8e23 100%)",
  },
];

export default function SecondSection() {
  return (
    <section className={styles.secondSection}>
      <div className="pageCenter">
        <div className={styles.sectionHeader}>
          <h2>Our Business Verticals</h2>
          <h3>Transforming Sports Technology</h3>
          <p className={styles.desc}>
            Comprehensive solutions across three core areas. Experience our{" "}
            <span>integrated ecosystem</span> that powers the future of sports entertainment.
          </p>
        </div>
        <div className={styles.repeatSection}>
          {businessVerticals.map((vertical) => (
            <div
              className={styles.repeatItem}
              key={vertical.id}
              style={{
                background: vertical.gradient,
              }}
            >
              <div className={styles.cardOverlay}></div>
              <div className={styles.cardContent}>
                <div className={styles.imgWrap}>
                  <div className={styles.imagePlaceholder}>
                    <span>Image Placeholder</span>
                  </div>
                </div>
                <h5>{vertical.title}</h5>
                <p>{vertical.description}</p>
                <button className={styles.ctaButton}>
                  Know More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
