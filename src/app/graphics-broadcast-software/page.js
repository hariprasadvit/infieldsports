import styles from "./page.module.scss";
import HeroSection from "./components/HeroSection";
import SoftwareSolutions from "./components/SoftwareSolutions";
import HowItWorks from "./components/HowItWorks";
import KeyFeatures from "./components/KeyFeatures";
import CaseStudies from "./components/CaseStudies";
import TechnicalCapabilities from "./components/TechnicalCapabilities";
import Testimonials from "../components/LandingPage/Testimonials";
import ExpertCTA from "../components/LandingPage/ExpertCTA";
import ScrollAnimations from "../components/ScrollAnimations";

export default function GraphicsBroadcastSoftware() {
  return (
    <div className={styles.landing}>
      <ScrollAnimations />
      <HeroSection />
      <div className="scroll-fade-in scroll-gradient-bg">
        <SoftwareSolutions />
      </div>
      <div className="scroll-fade-in scroll-gradient-bg">
        <HowItWorks />
      </div>
      <div className="scroll-fade-in scroll-gradient-bg">
        <KeyFeatures />
      </div>
      <div className="scroll-fade-in scroll-gradient-bg">
        <CaseStudies />
      </div>
      <div className="scroll-fade-in scroll-gradient-bg">
        <TechnicalCapabilities />
      </div>
      <div className="scroll-fade-in scroll-gradient-bg">
        <Testimonials />
      </div>
      <div className="scroll-fade-in scroll-gradient-bg">
        <ExpertCTA />
      </div>
    </div>
  );
}
