import React from "react";
import styles from "./Blog.module.css";
const Blog = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
       <div className={styles.imgbox}> <img
          src="https://preview.colorlib.com/theme/selling/images/model_1_bg.jpg"
          alt=""
        /></div>
        <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h4>
      <p>Ham Brook • Jan 18, 2019• <span>News</span></p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius.</p>
      <span>Continue Reading...</span>
      </div>
      <div className={styles.card}>
       <div className={styles.imgbox}> <img
          src="https://preview.colorlib.com/theme/selling/images/model_1_bg.jpg"
          alt=""
        /></div>
        <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h4>
      <p>Ham Brook • Jan 18, 2019• <span>News</span></p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius.</p>
      <span>Continue Reading...</span>
      </div>
      <div className={styles.card}>
       <div className={styles.imgbox}> <img
          src="https://preview.colorlib.com/theme/selling/images/model_1_bg.jpg"
          alt=""
        /></div>
        <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h4>
      <p>Ham Brook • Jan 18, 2019• <span>News</span></p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius.</p>
      <span>Continue Reading...</span>
      </div>
    </div>
  );
};

export default Blog;
