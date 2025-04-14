import React from "react";
import styles from "./Featured.module.css";
const Featured = () => {
  return (
    <div>
      <div className={styles.head}>
        <p>Awesome Products</p> 
        <h1>Featured Products</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          nostrum natus excepturi fuga ullam accusantium vel ut eveniet aut
          consequatur laboriosam ipsam.
        </p>
      </div>
      <div className={styles.productCard}>
      <div className={styles.imageContainer}>
        <img 
          src="https://preview.colorlib.com/theme/selling/images/model_1_bg.jpg" 
          alt="Product" 
          className={styles.productImage}
        />
      </div>
      <div className={styles.productInfo}>
        <h3 className={styles.productTitle}>About This Product</h3>
        <p className={styles.productDescription}>
          Et tempora id nostrum saepe amet doloribus deserunt totam officiis cupiditate asperiores quasi accusantium voluptatum dolorem quae sapiente voluptatem ratione odio lure blanditlis earum fuga molestiae alias dicta perferendis inventore!
        </p>
        <p className={styles.additionalInfo}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus soluta assumenda sed optio, error at?
        </p>
        <div className={styles.priceContainer}>
          <span className={styles.originalPrice}>$269.00</span>
          <span className={styles.discountedPrice}>$69.00</span>
        </div>
        <div className={styles.buttonContainer}>
          <button className={styles.viewDetailsBtn}>VIEW DETAILS</button>
          <button className={styles.addToCartBtn}>ADD TO CART</button>
        </div>
      </div>
    </div>
      <div className={styles.productCard}>
      
      <div className={styles.productInfo}>
        <h3 className={styles.productTitle}>About This Product</h3>
        <p className={styles.productDescription}>
          Et tempora id nostrum saepe amet doloribus deserunt totam officiis cupiditate asperiores quasi accusantium voluptatum dolorem quae sapiente voluptatem ratione odio lure blanditlis earum fuga molestiae alias dicta perferendis inventore!
        </p>
        <p className={styles.additionalInfo}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus soluta assumenda sed optio, error at?
        </p>
        <div className={styles.priceContainer}>
          <span className={styles.originalPrice}>$269.00</span>
          <span className={styles.discountedPrice}>$69.00</span>
        </div>
        <div className={styles.buttonContainer}>
          <button className={styles.viewDetailsBtn}>VIEW DETAILS</button>
          <button className={styles.addToCartBtn}>ADD TO CART</button>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <img 
          src="https://preview.colorlib.com/theme/selling/images/model_1_bg.jpg" 
          alt="Product" 
          className={styles.productImage}
        />
      </div>
    </div>
      <div className={styles.productCard}>
      <div className={styles.imageContainer}>
        <img 
          src="https://preview.colorlib.com/theme/selling/images/model_1_bg.jpg" 
          alt="Product" 
          className={styles.productImage}
        />
      </div>
      <div className={styles.productInfo}>
        <h3 className={styles.productTitle}>About This Product</h3>
        <p className={styles.productDescription}>
          Et tempora id nostrum saepe amet doloribus deserunt totam officiis cupiditate asperiores quasi accusantium voluptatum dolorem quae sapiente voluptatem ratione odio lure blanditlis earum fuga molestiae alias dicta perferendis inventore!
        </p>
        <p className={styles.additionalInfo}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus soluta assumenda sed optio, error at?
        </p>
        <div className={styles.priceContainer}>
          <span className={styles.originalPrice}>$269.00</span>
          <span className={styles.discountedPrice}>$69.00</span>
        </div>
        <div className={styles.buttonContainer}>
          <button className={styles.viewDetailsBtn}>VIEW DETAILS</button>
          <button className={styles.addToCartBtn}>ADD TO CART</button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Featured;
