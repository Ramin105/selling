import React from "react";
import styles from "./ImgContainer.module.css";
const ImgContainer = () => {
  return (
    <div className={styles.imgContainer}>
      <div style={{ width: "75%", color: "white", fontSize: "35px" }}>
        <h1>Shop With Us</h1>
        <p style={{ color: "White", width: "60%", fontSize: "22px" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          assumenda ea quo cupiditate facere deleniti fuga officia.
        </p>
        <div className={styles.btnbox}>
          <button className={styles.btn1}>SHOP NOW</button>
          <button className={styles.btn2}>CLUB MEMBERSHIP</button>
        </div>
      </div>
    </div>
  );
};

export default ImgContainer;
