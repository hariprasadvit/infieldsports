"use client";

import React from "react";
import styles from "./styles.module.scss";

const caseStudies = [
  {
    venue: "National Cricket Stadium",
    event: "International Cricket Championship",
    location: "Mumbai, India",
    testimonial: "The integration of all three solutions transformed our stadium experience. Real-time scoring, sponsor playback, and instant replays worked flawlessly throughout the tournament.",
    client: "Stadium Operations Manager",
    results: ["500% increase in sponsor engagement", "Zero system downtime", "Enhanced viewer experience"]
  },
  {
    venue: "Olympic Sports Complex",
    event: "Multi-Sport Tournament",
    location: "Tokyo, Japan",
    testimonial: "Kshetra, Brihmanas, and Graphics on Air provided seamless coverage across 15 different sports. The unified control system was a game-changer for our operations team.",
    client: "Technical Director",
    results: ["15 sports covered simultaneously", "Real-time multilingual support", "Broadcast-ready output"]
  },
  {
    venue: "Premier Football Arena",
    event: "Football League Finals",
    location: "London, UK",
    testimonial: "The sponsor integration capabilities exceeded our expectations. The replay system with branded overlays created an immersive experience for both stadium and broadcast audiences.",
    client: "Venue Manager",
    results: ["200% increase in ad revenue", "Instant replay integration", "Custom team branding"]
  }
];

const clients = [
  "Olympic Committee", "Premier League", "Cricket Board", "ATP Tennis", 
  "FIFA", "NBA", "NHL", "Formula 1", "Rugby World Cup", "Commonwealth Games"
];

export default function CaseStudies() {
  return (
    <section className={styles.caseStudies}>
      <div className="pageCenter">
        <div className={styles.sectionHeader}>
          <h2>Case Studies & Clients</h2>
          <p className={styles.desc}>
            See how our integrated solutions have transformed sports events worldwide, 
            delivering exceptional experiences for operators, venues, and sponsors.
          </p>
        </div>
        
        <div className={styles.studiesGrid}>
          {caseStudies.map((study, index) => (
            <div key={index} className={styles.studyCard}>
              <div className={styles.studyHeader}>
                <h4>{study.venue}</h4>
                <span className={styles.event}>{study.event}</span>
                <span className={styles.location}>{study.location}</span>
              </div>
              
              <div className={styles.testimonial}>
                <p>"{study.testimonial}"</p>
                <span className={styles.client}>— {study.client}</span>
              </div>
              
              <div className={styles.results}>
                <h5>Key Results:</h5>
                <ul>
                  {study.results.map((result, resultIndex) => (
                    <li key={resultIndex}>{result}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.clientsSection}>
          <h3>Trusted by Leading Organizations</h3>
          <div className={styles.clientsList}>
            {clients.map((client, index) => (
              <span key={index} className={styles.clientTag}>
                {client}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
