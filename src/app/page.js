import styles from "./page.module.scss";
import FourthSection from "./components/LandingPage/FourthSection";
import HeroSection from "./components/LandingPage/HeroSection";
import SecondSection from "./components/LandingPage/SecondSection";
import Testimonials from "./components/LandingPage/Testimonials";
import ThirdSection from "./components/LandingPage/ThirdSection";
import Gallery from "./components/LandingPage/Gallery";
import ExpertCTA from "./components/LandingPage/ExpertCTA";
import ScrollAnimations from "./components/ScrollAnimations";

export default function Home() {
  return (
    <div className={styles.landing}>
      <ScrollAnimations />
      <HeroSection />
      <div className="scroll-fade-in scroll-gradient-bg">
        <SecondSection />
      </div>
      <div className="scroll-fade-in scroll-gradient-bg">
        <ThirdSection />
      </div>
      <div className="scroll-fade-in scroll-gradient-bg">
        <FourthSection />
      </div>
      <div className="scroll-fade-in scroll-gradient-bg">
        <Gallery />
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
