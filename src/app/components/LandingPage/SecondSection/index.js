"use client";

import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import CustomButton from "../../CustomButton";

const businessVerticals = [
  {
    id: 1,
    title: "Graphics & Broadcast Software",
    description:
      "Advanced graphics solutions and broadcast software for live sports events. Our cutting-edge technology delivers real-time graphics, scoring systems, and broadcast-ready content that enhances viewer experience and engagement.",
    imageUrl: "https://cdn.builder.io/api/v1/image/assets%2F1ba648a6a1694e9aa91b762fb1bf4499%2Fa02b160e79ed4b79a66181f74455bc85?format=webp&width=800",
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  },
  {
    id: 2,
    title: "AI & Analytics Platform",
    description:
      "Intelligent analytics and AI-powered solutions for sports performance optimization. We provide comprehensive data analysis, player tracking, and predictive insights that transform how teams and leagues understand their game.",
    imageUrl: "https://cdn.builder.io/api/v1/image/assets%2F1ba648a6a1694e9aa91b762fb1bf4499%2F071ae863ba4a436a90e452850823ec53?format=webp&width=800",
    gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
  },
  {
    id: 3,
    title: "LED & Infrastructure Solutions",
    description:
      "Complete LED display systems and stadium infrastructure solutions. From indoor/outdoor LED installations to seating arrangements and gallery setups, we create immersive sporting environments that captivate audiences.",
    imageUrl: "https://cdn.builder.io/api/v1/image/assets%2F1ba648a6a1694e9aa91b762fb1bf4499%2Fa02b160e79ed4b79a66181f74455bc85?format=webp&width=800",
    gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
  },
];

export default function SecondSection() {
  return (
    <section className={styles.secondSection}>
      <div className="pageCenter">
        <h2>
          Our Business Verticals <br /> Transforming Sports Technology
        </h2>
        <p className={styles.desc}>
          Comprehensive solutions across three core areas. Experience our{" "}
          <span>integrated ecosystem</span> that powers the future of sports entertainment.
        </p>
        <div className={styles.repeatSection}>
          {businessVerticals.map((vertical) => (
            <div 
              className={styles.repeatItem} 
              key={vertical.id}
              style={{
                '--gradient': vertical.gradient,
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = vertical.gradient;
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '';
              }}
            >
              <div className={styles.imgWrap}>
                <Image src={vertical.imageUrl} alt={vertical.title} width={300} height={200} style={{borderRadius: '12px'}} />
              </div>
              <h5 style={{marginTop: '20px', marginBottom: '15px'}}>{vertical.title}</h5>
              <p style={{marginBottom: '20px', lineHeight: '1.6'}}>{vertical.description}</p>
              <CustomButton
                className="knowMoreBtn"
                type="link"
                linkUrl={`/services/${vertical.title.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                btnTxt="Know More"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
