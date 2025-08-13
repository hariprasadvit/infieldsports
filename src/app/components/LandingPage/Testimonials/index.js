"use client";

import React from "react";
import styles from "./styles.module.scss";
import Slider from "react-slick";
import test1 from "../../../../../public/landing/test1.svg";
import Image from "next/image";

export default function Testimonials() {
  const testimonials = [
    {
      img: test1,
      name: "Sarah Johnson",
      company: "Premier Sports League",
      position: "Technology Director",
      text: "Infield Sports transformed our entire stadium experience. Their LED solutions and broadcast software have elevated our game presentation to championship levels.",
    },
    {
      img: test1,
      name: "Michael Chen",
      company: "Global Sports Network",
      position: "Head of Operations",
      text: "The AI analytics platform provided insights we never thought possible. Game-changing technology that's revolutionized how we understand sports performance.",
    },
    {
      img: test1,
      name: "Emma Rodriguez",
      company: "Olympic Committee",
      position: "Innovation Lead",
      text: "Outstanding partnership from concept to execution. Their graphics and broadcast solutions made our events truly spectacular for audiences worldwide.",
    },
    {
      img: test1,
      name: "David Thompson",
      company: "Professional Football League",
      position: "Technical Manager",
      text: "Reliability, innovation, and exceptional support. Infield Sports delivered beyond our expectations and continues to push the boundaries of sports technology.",
    },
  ];
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <section className={styles.testimonials}>
      <div className={`pageCenter ${styles.pageCenter}`}>
        <div className={styles.sectionHeader}>
          <h2>What Our Clients Say</h2>
          <p className={styles.desc}>
            Hear from industry leaders who trust our solutions to <span>power their success</span>
            and deliver exceptional sports experiences to millions of fans worldwide.
          </p>
        </div>
        <div className={styles.repeatSection}>
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div className={styles.repeatItem} key={index}>
                <div className={styles.testimonialText}>"{testimonial.text}"</div>
                <div className={styles.profile}>
                  <div className={styles.avatarPlaceholder}>
                    <span>{testimonial.name.charAt(0)}</span>
                  </div>
                  <div className={styles.clientInfo}>
                    <strong>{testimonial.name}</strong>
                    <span className={styles.position}>{testimonial.position}</span>
                    <span className={styles.company}>{testimonial.company}</span>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
