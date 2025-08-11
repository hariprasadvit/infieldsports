import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import caseStudy1 from "../../../../../public/landing/caseStudy1.png";
import caseStudy2 from "../../../../../public/landing/caseStudy2.png";
import Link from "next/link";
export default function FourthSection() {
  return (
    <section className={styles.fourthSection}>
      <div className={`pageCenter ${styles.pageCenter}`}>
        <h2>Read our Case Study</h2>
        <p className={styles.desc}>
          Our AI-driven assistant is designed to decode complex financial
          figures and <span>illuminate key trends</span> in your business.
        </p>
        <div className={styles.repeatSection}>
          <Link href="#" className={styles.repeatItem}>
            <div className={styles.caseStudyImage}>
              <Image
                src={caseStudy1}
                alt="Case Study 1"
                width={300}
                height={200}
              />
            </div>
            <h5>IPL 2020</h5>
            <p>
              Harness the power of Cobalt's predictive analytics to map out the
              financial future of your business.
            </p>
          </Link>
          <Link href="#" className={styles.repeatItem}>
            <div className={styles.caseStudyImage}>
              <Image
                src={caseStudy2}
                alt="Case Study 2"
                width={300}
                height={200}
              />
            </div>
            <h5>FIFA Qatar</h5>
            <p>
              Harness the power of Cobalt's predictive analytics to map out the
              financial future of your business.
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
}
