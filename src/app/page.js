import styles from "./page.module.scss";
import FourthSection from "./components/LandingPage/FourthSection";
import HeroSection from "./components/LandingPage/HeroSection";
import SecondSection from "./components/LandingPage/SecondSection";
import Testimonials from "./components/LandingPage/Testimonials";
import ThirdSection from "./components/LandingPage/ThirdSection";
import Gallery from "./components/LandingPage/Gallery";
import FooterForm from "./components/LandingPage/FooterForm";

export default function Home() {
  return (
    <div className={styles.landing}>
      <HeroSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <Gallery />
      <Testimonials />
      <FooterForm />
    </div>
  );
}
