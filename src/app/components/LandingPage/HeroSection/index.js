import React from "react";
import styles from "./styles.module.scss";
import Spline from "@splinetool/react-spline/next";

export default function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <div className="pageCenter">
        <h1>Transforming Events into State of the Art Experiences</h1>
        <p>
          As a dynamic and visionary company, we epitomize the art of crafting
          captivating experiences. Through a fusion of creativity, innovation,
          and meticulous execution, we excel at breathing life into events,
          whether on screen or stage.{" "}
        </p>
        <div className={styles.spline}>
          <Spline scene="https://prod.spline.design/Oh0LB3HLQCmAV1Qm/scene.splinecode" />
        </div>
      </div>
    </section>
  );
}
