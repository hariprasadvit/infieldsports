import styles from "./styles.module.scss";

export default function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <div className="pageCenter">
        <h1 className="animate-gradient-text">Our Success Stories</h1>
        <p>
          Explore how Infield Sports has transformed stadiums, events, and broadcasts worldwide with cutting-edge technology and innovative solutions.
        </p>

      </div>
    </section>
  );
}
