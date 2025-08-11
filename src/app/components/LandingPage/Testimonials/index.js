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
      name: "Brooklyn Simmons",
      company: "manam",
      text: "Sit ut diam bibendum dolor. Ullamcorper pharetra nibh eget vitae pulvinar. Placerat sapien, dolor, aenean vivamus in tincidunt et. Mauris dolor vestibulum et lacus a ante orci.",
    },
    {
      img: test1,
      name: "Esther Howard",
      company: "Offmax",
      text: "Vitae tellus bibendum nibh integer auctor pretium sed. Sollicitudin tristique euismod elit.",
    },
    {
      img: test1,
      name: "Arlene McCoy",
      company: "bloopixel",
      text: "Eu eu eget lorem commodo sagittis enim in viverra. Urna egestas ipsum gravida tempor. Libero, consectetur urna in enim magnis. Est.",
    },
    {
      img: test1,
      name: "Jane Cooper",
      company: "unpexel",
      text: "Amet aliquam, volutpat nisl, duis sed at. Vehicula proin consectetur risus dictumst nec amet consequat at tempus. Ornare dapibus nunc fames nibh morbi viverra eu sed mattis.",
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
        <h2>What our Clients say</h2>
        <p className={styles.desc}>
          Our AI-driven assistant is designed to decode complex financial
          figures and <span>illuminate key trends</span> in your business.
        </p>
        <div className={styles.repeatSection}>
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div className={styles.repeatItem} key={index}>
                <div className={styles.profile}>
                  <Image
                    src={testimonial.img}
                    alt="Client 1"
                    width={48}
                    height={48}
                  />
                  <div>
                    <strong>{testimonial.name}</strong>
                    <span>{testimonial.company}</span>
                  </div>
                </div>
                <div className={styles.testimonialText}>{testimonial.text}</div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
