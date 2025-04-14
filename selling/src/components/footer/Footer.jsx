import React from "react";
import styles from "./Footer.module.css";
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.foot}>
        <h3>ABOUT US</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque facere
          laudantium magnam voluptatum autem. Amet aliquid nesciunt veritatis
          aliquam.
        </p>
      </div>
      <div style={{ width: "20%" }} className={styles.foot}>
        <h3>Quick Links</h3>
        <p>About us</p>
        <p>Services</p>
        <p>Testimonials</p>
        <p>Contact Us</p>
      </div>
      <div className={styles.foot}>
        <h3>Follow Us</h3>
        <div className={styles.icons}>
          {" "}
          <i class="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-linkedin-in"></i>
        </div>
      </div>
      <div className={styles.end}>
        <h3>Featured Product</h3>
        <div className={styles.imgbox}>
          <img
            src="https://preview.colorlib.com/theme/selling/images/product_1_bg.jpg"
            alt=""
          />
        </div>
        <div className={styles.description}>
          <p>Leather Brown Shoe</p>
          <h4>$60.00</h4>
          <button className={styles.cart}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
