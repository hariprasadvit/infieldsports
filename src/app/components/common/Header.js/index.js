"use client";

import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import logo from "../../../../../public/logo.svg";
import Link from "next/link";
import CustomButton from "../../CustomButton";
import { useRouter } from "next/navigation";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const router = useRouter();

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

  const handleProductClick = (productPath) => {
    router.push(productPath);
    setProductsDropdownOpen(false);
  };

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
            <li
              className={styles.productsDropdown}
              onMouseEnter={() => setProductsDropdownOpen(true)}
              onMouseLeave={() => setProductsDropdownOpen(false)}
            >
              <span className={styles.productsToggle}>
                Products
                <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                  <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              {productsDropdownOpen && (
                <div className={styles.dropdownMenu}>
                  <button
                    onClick={() => handleProductClick('/graphics-broadcast-software')}
                    className={styles.dropdownItem}
                  >
                    Graphics & Broadcast Software
                  </button>
                  <button
                    onClick={() => handleProductClick('/ai-analytics-platform')}
                    className={styles.dropdownItem}
                  >
                    AI & Analytics Platform
                  </button>
                  <button
                    onClick={() => handleProductClick('/led-infrastructure-solutions')}
                    className={styles.dropdownItem}
                  >
                    LED & Infrastructure Solutions
                  </button>
                </div>
              )}
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
