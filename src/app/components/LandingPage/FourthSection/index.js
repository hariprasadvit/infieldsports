import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import caseStudy1 from "../../../../../public/landing/caseStudy1.png";
import caseStudy2 from "../../../../../public/landing/caseStudy2.png";
import Link from "next/link";
const caseStudies = [
  {
    id: 1,
    title: "IPL 2024 Championship",
    category: "LED & Broadcast Solutions",
    description: "Revolutionized stadium experience with cutting-edge LED displays and real-time graphics, reaching over 500 million viewers globally.",
    metrics: ["500M+ Viewers", "Zero Downtime", "4K Resolution"],
    challenge: "Stadium Technology Upgrade",
  },
  {
    id: 2,
    title: "FIFA World Cup Analytics",
    category: "AI & Data Platform",
    description: "Deployed advanced AI analytics platform providing real-time player insights and performance metrics for coaching teams.",
    metrics: ["32 Teams", "Real-time Data", "99.9% Accuracy"],
    challenge: "Performance Analytics",
  },
  {
    id: 3,
    title: "Olympic Games Production",
    category: "Complete Event Solution",
    description: "End-to-end technology solutions for Olympic broadcasting, including graphics, analytics, and infrastructure management.",
    metrics: ["200+ Countries", "24/7 Coverage", "Multi-language"],
    challenge: "Global Event Management",
  },
];

export default function FourthSection() {
  return (
    <section className={styles.fourthSection}>
      <div className={`pageCenter ${styles.pageCenter}`}>
        <div className={styles.sectionHeader}>
          <h2>Success Stories</h2>
          <p className={styles.desc}>
            Explore how our innovative solutions have transformed major sporting events
            and delivered <span>exceptional results</span> for our clients worldwide.
          </p>
        </div>
        <div className={styles.repeatSection}>
          {caseStudies.map((study) => (
            <Link href="#" key={study.id} className={styles.repeatItem}>
              <div className={styles.caseStudyImage}>
                <div className={styles.imagePlaceholder}>
                  <span className={styles.category}>{study.category}</span>
                  <div className={styles.challenge}>{study.challenge}</div>
                </div>
              </div>
              <div className={styles.content}>
                <h5>{study.title}</h5>
                <p>{study.description}</p>
                <div className={styles.metrics}>
                  {study.metrics.map((metric, index) => (
                    <span key={index} className={styles.metric}>{metric}</span>
                  ))}
                </div>
                <div className={styles.readMore}>
                  Read Case Study →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
