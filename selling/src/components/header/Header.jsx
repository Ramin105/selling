import React from "react";
import styles from "./Header.module.css";
const Header = () => {
  return (
    <div className={styles.headercontainer}>
      <div className={styles.header1}>
        <div className={styles.header1left}>
        <i class="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-linkedin-in"></i>
        </div>
        <div className={styles.header1right}>
            <div className={styles.iconbox}><i class="fa-solid fa-phone"></i><p>(+1) 234 5678 9101</p></div>
            <div className={styles.iconbox}><i class="fa-solid fa-envelope"></i><p>shop@yourdomain.com</p></div>
        </div>
      </div>
      <div className={styles.header2}>
        <div className={styles.header2left}>
<h1>Selling<span>.</span></h1>
        </div>
        <div className={styles.header2right}>
            <h3>Home</h3>
            <h3>Products</h3>
            <h3>About us</h3>
            <h3>Special</h3>
            <h3>Testimonials</h3>
            <h3>Blog</h3>
            <h3>Contact</h3>
        </div>
      </div>
    </div>
  );
};

export default Header;
