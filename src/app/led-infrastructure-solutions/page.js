import styles from "./page.module.scss";
import HeroSection from "./components/HeroSection";
import Introduction from "./components/Introduction";
import StadiumSolutions from "./components/StadiumSolutions";
import KeyBenefits from "./components/KeyBenefits";
import HowItWorks from "./components/HowItWorks";
import CaseStudies from "./components/CaseStudies";
import TechnicalSpecs from "./components/TechnicalSpecs";
import Testimonials from "../components/LandingPage/Testimonials";
import ExpertCTA from "../components/LandingPage/ExpertCTA";
import ScrollAnimations from "../components/ScrollAnimations";

export default function LEDInfrastructureSolutions() {
  return (
    <div className={styles.landing}>
      <ScrollAnimations />
      <HeroSection />
      <div className="scroll-fade-in scroll-gradient-bg">
        <Introduction />
      </div>
      <div className="scroll-fade-in scroll-gradient-bg">
        <StadiumSolutions />
      </div>
      <div className="scroll-fade-in scroll-gradient-bg">
        <KeyBenefits />
      </div>
      <div className="scroll-fade-in scroll-gradient-bg">
        <HowItWorks />
      </div>
      <div className="scroll-fade-in scroll-gradient-bg">
        <CaseStudies />
      </div>
      <div className="scroll-fade-in scroll-gradient-bg">
        <TechnicalSpecs />
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
