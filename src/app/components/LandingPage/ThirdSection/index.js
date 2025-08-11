"use client";

import React from "react";
import styles from "./styles.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import client1 from "../../../../../public/landing/client.svg";
import client2 from "../../../../../public/landing/client2.svg";
import client3 from "../../../../../public/landing/client3.svg";
import client4 from "../../../../../public/landing/client4.svg";
import client5 from "../../../../../public/landing/client5.svg";
import client6 from "../../../../../public/landing/client6.svg";
import client7 from "../../../../../public/landing/client7.svg";
import Image from "next/image";

export default function ThirdSection() {
  const settings = {
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    speed: 500,
    slidesToShow: 6, // Number of columns visible at once
    rows: 2, // Number of rows
    slidesPerRow: 1, // Number of slides per row to advance
    responsive: [
      {
        breakpoint: 768, // Adjust for smaller screens
        settings: {
          slidesToShow: 1,
          rows: 1,
          slidesPerRow: 1,
        },
      },
    ],
  };
  const items = [
    {
      imgUrl: client1,
    },
    {
      imgUrl: client2,
    },
    {
      imgUrl: client3,
    },
    {
      imgUrl: client4,
    },
    {
      imgUrl: client5,
    },
    {
      imgUrl: client6,
    },
    {
      imgUrl: client7,
    },
    {
      imgUrl: client1,
    },
    {
      imgUrl: client2,
    },
    {
      imgUrl: client3,
    },
    {
      imgUrl: client4,
    },
    {
      imgUrl: client5,
    },
    {
      imgUrl: client6,
    },
    {
      imgUrl: client7,
    },
    {
      imgUrl: client1,
    },
    {
      imgUrl: client2,
    },
    {
      imgUrl: client3,
    },
    {
      imgUrl: client4,
    },
    {
      imgUrl: client5,
    },
    {
      imgUrl: client6,
    },
    {
      imgUrl: client7,
    },
    {
      imgUrl: client5,
    },
  ];

  return (
    <section className={styles.thirdSection}>
      <div className={`pageCenter ${styles.pageCenter}`}>
        <h2>
          Some of the big names <br /> We served
        </h2>
        <div className={styles.repeatSection}>
          <Slider {...settings}>
            {items.map((item, index) => (
              <div key={index} className={styles.repeatItem}>
                <Image src={item.imgUrl} alt="" width={150} height={40} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
