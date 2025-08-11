import React from "react";
import styles from "./styles.module.scss";
import CustomButton from "../../CustomButton";

export default function FooterForm() {
  return (
    <section className={styles.footerForm}>
      <div className={`pageCenter ${styles.pageCenter}`}>
        <div className={styles.formWrap}>
          <h2>Talk to our Expert for installation</h2>
          <p className={styles.desc}>
            Risus commodo id odio turpis pharetra elementum. Pulvinar porta
            porta feugiat scelerisque in elit.
          </p>
          <form action="">
            <input
              type="text"
              placeholder="Your email"
              className={styles.emailInput}
            />
            <CustomButton btnTxt={"Submit"} className={"primary"} />
          </form>
        </div>
      </div>
    </section>
  );
}
