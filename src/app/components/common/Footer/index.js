import React from "react";
import styles from "./styles.module.scss";
import logo from "../../../../../public/logo.svg";
import youtube from "../../../../../public/footer/youtube.svg";
import twitter from "../../../../../public/footer/twitter.svg";
import discord from "../../../../../public/footer/discord.svg";
import pinT from "../../../../../public/footer/pinT.svg";
import Link from "next/link";
import Image from "next/image";
export default function Footer() {
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={`pageCenter ${styles.pageCenter}`}>
        <div className={styles.footerContent}>
          <div className={styles.brandSection}>
            <Link href="/" className={styles.logoLink} aria-label="Infield Sports Home">
              <Image src={logo} alt="Infield Sports Logo" width={203} height={53} />
            </Link>
            <p className={styles.tagline}>
              Transforming sports experiences through cutting-edge technology and innovative solutions.
            </p>
            <div className={styles.socialIcons} role="list" aria-label="Social Media Links">
              <Link
                href="#"
                className={styles.iconWrap}
                aria-label="Follow us on YouTube"
                role="listitem"
              >
                <Image src={youtube} alt="" width={20} height={20} />
              </Link>
              <Link
                href="#"
                className={styles.iconWrap}
                aria-label="Follow us on Twitter"
                role="listitem"
              >
                <Image src={twitter} alt="" width={20} height={20} />
              </Link>
              <Link
                href="#"
                className={styles.iconWrap}
                aria-label="Join our Discord community"
                role="listitem"
              >
                <Image src={discord} alt="" width={20} height={20} />
              </Link>
              <Link
                href="#"
                className={styles.iconWrap}
                aria-label="Follow us on Pinterest"
                role="listitem"
              >
                <Image src={pinT} alt="" width={20} height={20} />
              </Link>
            </div>
          </div>

          <div className={styles.linksSection}>
            <div className={styles.footerLinks}>
              <h6>Company</h6>
              <ul role="list">
                <li>
                  <Link href="/about">About Us</Link>
                </li>
                <li>
                  <Link href="/case-studies">Case Studies</Link>
                </li>
                <li>
                  <Link href="/career">Careers</Link>
                </li>
              </ul>
            </div>

            <div className={styles.footerLinks}>
              <h6>Solutions</h6>
              <ul role="list">
                <li>
                  <Link href="/graphics-broadcast-software">Graphics & Broadcast</Link>
                </li>
                <li>
                  <Link href="/ai-analytics-platform">AI & Analytics</Link>
                </li>
                <li>
                  <Link href="/led-infrastructure-solutions">LED Infrastructure</Link>
                </li>
              </ul>
            </div>

            <div className={styles.footerLinks}>
              <h6>Support</h6>
              <ul role="list">
                <li>
                  <Link href="/contact-us">Contact Us</Link>
                </li>
                <li>
                  <Link href="/contact-us">Technical Support</Link>
                </li>
                <li>
                  <Link href="/contact-us">Partnerships</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <div className={styles.copyright}>
            © 2025 Infield Sports LLP. All rights reserved.
          </div>
          <div className={styles.legalLinks}>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
            <Link href="/disclaimer">Disclaimer</Link>
          </div>
          <div className={styles.attribution}>
            Managed by <Link href="https://booleanbeyond.com" target="_blank" rel="noopener noreferrer">Booleanbeyond.com</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
