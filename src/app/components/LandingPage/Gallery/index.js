"use client";

import React from "react";
import styles from "./styles.module.scss";

const galleryItems = [
  { id: 1, title: "Stadium Integration", category: "LED Solutions" },
  { id: 2, title: "Broadcast Graphics", category: "Software" },
  { id: 3, title: "Analytics Dashboard", category: "AI Platform" },
  { id: 4, title: "Event Coverage", category: "Live Production" },
  { id: 5, title: "Score Display", category: "LED Solutions" },
  { id: 6, title: "Data Visualization", category: "Analytics" },
];

export default function Gallery() {
  return (
    <section className={styles.gallery}>
      <div className="pageCenter">
        <div className={styles.sectionHeader}>
          <h2>Our Work Gallery</h2>
          <p className={styles.desc}>
            Explore our portfolio of successful projects and innovative solutions 
            that have transformed sports experiences across the globe.
          </p>
        </div>
        <div className={styles.galleryGrid}>
          {galleryItems.map((item) => (
            <div key={item.id} className={styles.galleryItem}>
              <div className={styles.imagePlaceholder}>
                <span className={styles.category}>{item.category}</span>
                <h4>{item.title}</h4>
                <div className={styles.overlay}>
                  <button className={styles.viewButton}>View Project</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
