"use client";

import React from "react";
import styles from "./styles.module.scss";

const caseStudies = [
  {
    venue: "MetroCity Arena",
    transformation: "Indoor LED Upgrade",
    location: "Toronto, Canada",
    beforeAfter: "Transformed dark corners into vibrant viewing zones with 360° LED displays",
    testimonial: "The LED installation completely transformed our arena atmosphere. Fan engagement increased by 200% during games.",
    client: "Arena Operations Director",
    results: ["360° LED display coverage", "200% increase in fan engagement", "Premium sponsor visibility"]
  },
  {
    venue: "Olympic Stadium",
    transformation: "Complete Infrastructure Overhaul",
    location: "Sydney, Australia", 
    beforeAfter: "Replaced aging infrastructure with state-of-the-art LED boards and ergonomic seating for 80,000 spectators",
    testimonial: "Infield Sports delivered beyond expectations. The new seating and displays have elevated our stadium to world-class status.",
    client: "Stadium Manager",
    results: ["80,000 premium seats installed", "4K LED perimeter displays", "Weather-resistant technology"]
  },
  {
    venue: "Champions Cricket Ground",
    transformation: "Outdoor LED & Seating Project",
    location: "Mumbai, India",
    beforeAfter: "Added massive LED scoreboards and VIP gallery seating with branded customization",
    testimonial: "The integration with our existing systems was seamless. The LED displays work perfectly with our scoring software.",
    client: "Ground Administrator",
    results: ["Massive LED scoreboards", "VIP gallery with branding", "Perfect system integration"]
  }
];

const notableStadiums = [
  "Tokyo Olympic Stadium", "Wembley Stadium", "MCG Melbourne", "Eden Gardens", 
  "Camp Nou", "Santiago Bernabéu", "Old Trafford", "Emirates Stadium"
];

export default function CaseStudies() {
  return (
    <section className={styles.caseStudies}>
      <div className="pageCenter">
        <div className={styles.sectionHeader}>
          <h2>Case Studies & Gallery</h2>
          <p className={styles.desc}>
            See how our stadium solutions have transformed venues worldwide, 
            creating exceptional experiences and generating measurable results.
          </p>
        </div>
        
        <div className={styles.studiesGrid}>
          {caseStudies.map((study, index) => (
            <div key={index} className={styles.studyCard}>
              <div className={styles.studyHeader}>
                <h4>{study.venue}</h4>
                <span className={styles.transformation}>{study.transformation}</span>
                <span className={styles.location}>{study.location}</span>
              </div>
              
              <div className={styles.beforeAfter}>
                <h5>Transformation:</h5>
                <p>{study.beforeAfter}</p>
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

        <div className={styles.notableStadiums}>
          <h3>Notable Stadiums Equipped by Infield Sports</h3>
          <div className={styles.stadiumsList}>
            {notableStadiums.map((stadium, index) => (
              <span key={index} className={styles.stadiumTag}>
                {stadium}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
