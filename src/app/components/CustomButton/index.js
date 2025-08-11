import Link from "next/link";
import React from "react";
import styles from "./styles.module.scss";

export default function CustomButton({
  type,
  linkUrl,
  width,
  height,
  btnTxt,
  onClick,
  className,
}) {
  const combinedClass = `${styles.customButton} ${
    className ? styles[className] : ""
  }`;

  return (
    <div className={combinedClass}>
      {type === "link" ? (
        <Link
          style={{
            width: width || "154px",
            height: height || "52px",
          }}
          href={linkUrl}
        >
          {btnTxt}
        </Link>
      ) : (
        <button
          style={{
            width: width || "154px",
            height: height || "52px",
          }}
          type="button"
          onClick={onClick}
        >
          {btnTxt}
        </button>
      )}
    </div>
  );
}
