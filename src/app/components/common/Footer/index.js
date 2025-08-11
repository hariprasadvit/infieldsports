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
    <div className={styles.footer}>
      <div className={`pageCenter ${styles.pageCenter}`}>
        <div className={styles.left}>
          <Image src={logo} alt="Logo" width={203} height={53} />
          <p>Managed by Booleanbeyond.com</p>
          <div className={styles.socialIcons}>
            <div className={styles.iconWrap}>
              <Image src={youtube} alt="YouTube" width={16} height={16} />
            </div>
            <div className={styles.iconWrap}>
              <Image src={twitter} alt="Twitter" width={16} height={16} />
            </div>
            <div className={styles.iconWrap}>
              <Image src={discord} alt="Discord" width={16} height={16} />
            </div>
            <div className={styles.iconWrap}>
              <Image src={pinT} alt="pinterest" width={16} height={16} />
            </div>
          </div>
          <div className={styles.copyright}>© 2025 Infield Sports LLP</div>
        </div>
        <div className={styles.right}>
          <div className={styles.footerLinks}>
            <h6>Quick Links</h6>
            <ul>
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="#">Our Solutions</Link>
              </li>
              <li>
                <Link href="#">News & Media</Link>
              </li>
              <li>
                <Link href="#">Careers</Link>
              </li>
              <li>
                <Link href="#">Disclaimer</Link>
              </li>
            </ul>
          </div>
          <div className={styles.footerLinks}>
            <h6>Get Connected</h6>
            <ul>
              <li>
                <Link href="#">Ecosystem</Link>
              </li>
              <li>
                <Link href="#">Blog</Link>
              </li>
              <li>
                <Link href="#">Newsletter</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
