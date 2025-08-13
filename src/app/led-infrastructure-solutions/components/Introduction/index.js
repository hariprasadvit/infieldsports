import React from "react";
import styles from "./styles.module.scss";

export default function Introduction() {
  return (
    <section className={styles.introduction}>
      <div className="pageCenter">
        <div className={styles.content}>
          <h2>Stadium Solutions Excellence</h2>
          <p className={styles.overview}>
            Infield Sports Stadium Solutions combine advanced display technology, durable seating, 
            and customised layouts to create world-class sporting environments that elevate both 
            the spectator experience and venue operations.
          </p>
          <div className={styles.ecosystem}>
            <h3>Part of the Infield Sports Ecosystem</h3>
            <p>
              Our stadium infrastructure solutions integrate seamlessly with our 
              <span className={styles.highlight}> Broadcast Software</span> and 
              <span className={styles.highlight}> AI Analytics Platform</span>, 
              providing a complete end-to-end sports technology ecosystem.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
