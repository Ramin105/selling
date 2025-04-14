import React from "react";
import styles from "./Promo.module.css";

const Promo = () => {
  return (
    <div className={styles.promoContainer}>
      {/* Background element with brightness filter */}
      <div className={styles.backgroundImage}></div>

      {/* Content remains unaffected by the filter */}
      <div className={styles.promoContent}>
        <p style={{opacity:'0.7'}}>SPECIAL PROMO</p>
        <h3 className={styles.title}>Summer Sale</h3>
        <p className={styles.subtitle}>
          Repudiandae nostrum natus excepturi fuga ullam accusantium vel ut
          eveniet aut consequatur laboriosam ipsam.
        </p>

        <div className={styles.timerContainer}>
          <div className={styles.timerUnit}>
            <span className={styles.timerValue}>00</span>
            <span className={styles.timerLabel}>weeks</span>
          </div>
          <div className={styles.timerUnit}>
            <span className={styles.timerValue}>00</span>
            <span className={styles.timerLabel}>days</span>
          </div>
          <div className={styles.timerUnit}>
            <span className={styles.timerValue}>00</span>
            <span className={styles.timerLabel}>hr</span>
          </div>
          <div className={styles.timerUnit}>
            <span className={styles.timerValue}>00</span>
            <span className={styles.timerLabel}>min</span>
          </div>
          <div className={styles.timerUnit}>
            <span className={styles.timerValue}>00</span>
            <span className={styles.timerLabel}>sec</span>
          </div>
        </div>

        <button className={styles.shopNowButton}>SHOP NOW</button>
      </div>
    </div>
  );
};

export default Promo;
