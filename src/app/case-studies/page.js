import styles from "./page.module.scss";
import HeroSection from "./components/HeroSection";
import FiltersSearch from "./components/FiltersSearch";
import CaseStudyGrid from "./components/CaseStudyGrid";
import FeaturedCarousel from "./components/FeaturedCarousel";
import Gallery from "../components/LandingPage/Gallery";
import Testimonials from "../components/LandingPage/Testimonials";
import ExpertCTA from "../components/LandingPage/ExpertCTA";
import ScrollAnimations from "../components/ScrollAnimations";

export default function CaseStudies() {
  return (
    <div className={styles.caseStudies}>
      <ScrollAnimations />
      <HeroSection />
      <FiltersSearch />
      <FeaturedCarousel />
      <CaseStudyGrid />
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
