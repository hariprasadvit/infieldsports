"use client";

import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import logo from "../../../../../public/logo.svg";
import Link from "next/link";
import CustomButton from "../../CustomButton";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={`pageCenter ${styles.pageCenter}`}>
        <Link href="/">
          <Image src={logo} alt="Logo" width={203} height={53} />
        </Link>
        <nav>
          <ul>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/case-studies">Case Studies</Link>
            </li>
            <li>
              <Link href="/products">Products</Link>
            </li>
            <li>
              <Link href="/career">Career</Link>
            </li>
          </ul>
        </nav>
        <CustomButton
          className={"whiteBtn"}
          type="link"
          linkUrl="/contact-us"
          btnTxt="Contact Us"
        />
      </div>
    </div>
  );
}
