import styles from "./page.module.scss";
import HeroSection from "./components/HeroSection";
import Introduction from "./components/Introduction";
import AIProducts from "./components/AIProducts";
import HowItWorks from "./components/HowItWorks";
import Benefits from "./components/Benefits";
import UseCases from "./components/UseCases";
import CaseStudy from "./components/CaseStudy";
import Testimonials from "../components/LandingPage/Testimonials";
import ExpertCTA from "../components/LandingPage/ExpertCTA";
import ScrollAnimations from "../components/ScrollAnimations";

export default function AIAnalyticsPlatform() {
  return (
    <div className={styles.landing}>
      <ScrollAnimations />
      <HeroSection />
      <div className="scroll-fade-in scroll-gradient-bg">
        <Introduction />
      </div>
      <div className="scroll-fade-in scroll-gradient-bg">
        <AIProducts />
      </div>
      <div className="scroll-fade-in scroll-gradient-bg">
        <HowItWorks />
      </div>
      <div className="scroll-fade-in scroll-gradient-bg">
        <Benefits />
      </div>
      <div className="scroll-fade-in scroll-gradient-bg">
        <UseCases />
      </div>
      <div className="scroll-fade-in scroll-gradient-bg">
        <CaseStudy />
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
