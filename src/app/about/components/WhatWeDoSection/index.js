import React from "react";
import styles from "./styles.module.scss";

export default function WhatWeDoSection() {
  return (
    <section className={styles.whatWeDoSection}>
      <div className="pageCenter">
        <div className={styles.content}>
          <div className={styles.leftColumn}>
            <div className={styles.badge}>What We Do</div>
            <h2 className="heading-2">What We Do</h2>
            <p className="body-medium">
              We forge sophisticated <strong>smart stadium solutions</strong> 
              that revolutionize sports infrastructure, elevate fan experience, and clarity at scale.
            </p>
            <ul className={styles.servicesList}>
              <li>
                AI-powered analytics platforms that deliver real-time insights across 
                multiple sports disciplines, providing unprecedented visibility into 
                player performance, tactical analysis, and predictive modeling for 
                teams, and their stakeholders.
              </li>
              <li>
                <strong>LED Infrastructure Solutions</strong> that transform venue atmospheres, 
                creating immersive visual experiences that captivate audiences while 
                providing dynamic advertising platforms for sponsors and partners.
              </li>
              <li>
                Intelligent broadcast automation systems that seamlessly integrate with 
                existing production workflows, delivering professional-grade content 
                creation with minimal human intervention and maximum reliability.
              </li>
            </ul>
          </div>

          <div className={styles.rightColumn}>
            <div className={styles.badge}>Our Difference</div>
            <h2 className="heading-2">Our Difference</h2>
            <p className="body-medium">
              <strong>Advanced Development & Exceptional Performance!</strong>
            </p>
            <p className="body-medium">
              At <strong>Infield Sports</strong>, we believe in eliminating technology's friction 
              entirely through smart automation and intelligent system design.
            </p>
            <p className="body-medium">
              Our commitment to sports excellence drives every decision we make. It's 
              why organizations trust us to deliver mission-critical solutions that 
              perform flawlessly under the pressure of live competition.
            </p>
            <p className="body-medium">
              While our real competitive advantage is our laser focus on performance. 
              Every line of code developed, every infrastructure component deployed, 
              is scrutinized against one primary goal: Does this make the sport better? 
              If we can't demonstrate clear improvement, it doesn't make the cut. 
              Period. It's that simple.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
