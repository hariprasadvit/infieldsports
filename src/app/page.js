import styles from "./page.module.scss";
import FourthSection from "./components/LandingPage/FourthSection";
import HeroSection from "./components/LandingPage/HeroSection";
import SecondSection from "./components/LandingPage/SecondSection";
import Testimonials from "./components/LandingPage/Testimonials";
import ThirdSection from "./components/LandingPage/ThirdSection";
import Gallery from "./components/LandingPage/Gallery";
import ExpertCTA from "./components/LandingPage/ExpertCTA";

export default function Home() {
  return (
    <div className={styles.landing}>
      <HeroSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <Gallery />
      <Testimonials />
      <ExpertCTA />
    </div>
  );
}
