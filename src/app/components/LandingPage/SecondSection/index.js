import React from "react";
import styles from "./styles.module.scss";
import imgOne from "../../../../../public/landing/imgOne.svg";
import imgTwo from "../../../../../public/landing/imgTwo.svg";
import imgThree from "../../../../../public/landing/imgThree.svg";
import Image from "next/image";

const repeatSectionItems = [
  {
    id: 1,
    title: "LED Display",
    description:
      "All your data and finances in one place to provide quick answers and make decisions",
    imageUrl: imgOne,
  },
  {
    id: 2,
    title: "League Operation",
    description:
      "All your data and finances in one place to provide quick answers and make decisions",
    imageUrl: imgTwo,
  },
  {
    id: 3,
    title: "Pyrotechnics",
    description:
      "All your data and finances in one place to provide quick answers and make decisions",
    imageUrl: imgOne,
  },
  {
    id: 4,
    title: "League Operation",
    description:
      "All your data and finances in one place to provide quick answers and make decisions",
    imageUrl: imgThree,
  },
  {
    id: 5,
    title: "League Operation",
    description:
      "All your data and finances in one place to provide quick answers and make decisions",
    imageUrl: imgThree,
  },
  {
    id: 6,
    title: "League Operation",
    description:
      "All your data and finances in one place to provide quick answers and make decisions",
    imageUrl: imgThree,
  },
];

export default function SecondSection() {
  return (
    <section className={styles.secondSection}>
      <div className="pageCenter">
        <h2>
          Everything you need. <br /> Nothing you don’t
        </h2>
        <p className={styles.desc}>
          Financial management and visibility in one place. Experience{" "}
          <span>flexible toolkit</span> that makes every task feel like a
          breeze.
        </p>
        <div className={styles.repeatSection}>
          {repeatSectionItems.map((item) => (
            <div className={styles.repeatItem} key={item.id}>
              <div className={styles.imgWrap}>
                <Image src={item.imageUrl} alt="" width={79} height={79} />
              </div>
              <h5>{item.title}</h5>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
