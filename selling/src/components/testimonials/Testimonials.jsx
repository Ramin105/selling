// Testimonials.js
import React from "react";
import styles from "./Testimonials.module.css";

const Testimonials = () => {
  return (
    <div className={styles.testimonials}>
      <div className={styles.header}>
        <p className={styles.subtitle}>PEOPLE SAYS</p>
        <h2 className={styles.title}>Testimonials</h2>
      </div>
      
      <div className={styles.testimonialCard}><div className={styles.author}>
          <img 
            src="https://preview.colorlib.com/theme/selling/images/person_4.jpg" 
            alt="Roger Spears" 
            className={styles.authorImage}
          />
          
        </div>
        <div className={styles.quote}>
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur 
          unde reprehenderit aperiam quaerat fugiat repudiandae explicabo animi 
          minima fuga beatae illum eligendi incidunt consequatur. Amet dolores 
          excepturi earum unde iusto."
        </div>
        <p className={styles.authorName}>Roger Spears</p>
      </div>
    </div>
  );
};

export default Testimonials;