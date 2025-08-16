"use client";

import styles from "./page.module.scss";
import HeroSection from "./components/HeroSection";
import ExistenceSection from "./components/ExistenceSection";
import WhatWeDoSection from "./components/WhatWeDoSection";
import QualitySection from "./components/QualitySection";
import TrustSection from "./components/TrustSection";
import ScrollAnimations from "../components/ScrollAnimations";

export default function About() {
  return (
    <div className={styles.aboutPage}>
      <ScrollAnimations />
      <HeroSection />
      <div className="scroll-fade-in scroll-gradient-bg">
        <ExistenceSection />
      </div>
      <div className="scroll-fade-in scroll-gradient-bg">
        <WhatWeDoSection />
      </div>
      <div className="scroll-fade-in scroll-gradient-bg">
        <QualitySection />
      </div>
      <div className="scroll-fade-in scroll-gradient-bg">
        <TrustSection />
      </div>
    </div>
  );
}
