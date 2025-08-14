import styles from "./styles.module.scss";

export default function HeroSection() {
  const projectImages = [
    "/landing/imgOne.svg",
    "/landing/imgTwo.svg", 
    "/landing/imgThree.svg",
    "/landing/imgFour.svg",
    "/landing/imgFive.svg"
  ];

  return (
    <section className={styles.heroSection}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.headline}>Our Success Stories</h1>
          <p className={styles.subtext}>
            Explore how Infield Sports has transformed stadiums, events, and broadcasts worldwide.
          </p>
        </div>
        
        <div className={styles.visualSection}>
          <div className={styles.imageCollage}>
            {projectImages.map((image, index) => (
              <div key={index} className={`${styles.imageCard} ${styles[`card${index + 1}`]}`}>
                <img src={image} alt={`Project ${index + 1}`} />
                <div className={styles.overlay}></div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className={styles.scrollIndicator}>
        <div className={styles.scrollDot}></div>
        <span>Scroll to explore</span>
      </div>
    </section>
  );
}
