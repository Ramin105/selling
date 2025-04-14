import React from "react";
import styles from "./Products.module.css";
const Products = () => {
  return (
    <div
      style={{
        marginTop: "20px",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        width: "75%",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          width: "100%",
          gap: "15px",
        }}
      >
        <p>Popular Products</p>
        <h2 style={{ fontSize: "35px" }}>Our Products</h2>
        <p
          style={{
            width: "45%",
            opacity: "0.7",
            lineHeight: "22px",
            fontSize: "17px",
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          nostrum natus excepturi fuga ullam accusantium vel ut eveniet aut
          consequatur laboriosam ipsam.
        </p>
      </div>
      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <div className={styles.imgbox}>
            <img
              src="	https://preview.colorlib.com/theme/selling/images/model_1_bg.jpg"
              alt=""
            />
          </div>
          <div className={styles.description}>
            <div>
              <h2>Wild West Hoodie</h2>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div style={{ display: "flex", gap: "10px" }}>
                <i style={{ color: "yellow" }} class="fa-solid fa-star"></i>
                <p>5.0</p>
                <i style={{ color: "red" }} class="fa-solid fa-heart"></i>
                <p>29</p>
              </div>
            </div>
            <p style={{ width: "75%" }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing.
            </p>
            <div className={styles.btns}>
              <button className={styles.btn2}>CART</button>
              <button className={styles.btn1}>VIEW</button>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.imgbox}>
            <img
              src="	https://preview.colorlib.com/theme/selling/images/model_1_bg.jpg"
              alt=""
            />
          </div>
          <div className={styles.description}>
            <div>
              <h2>Wild West Hoodie</h2>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div style={{ display: "flex", gap: "10px" }}>
                <i style={{ color: "yellow" }} class="fa-solid fa-star"></i>
                <p>5.0</p>
                <i style={{ color: "red" }} class="fa-solid fa-heart"></i>
                <p>29</p>
              </div>
            </div>
            <p style={{ width: "75%" }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing.
            </p>
            <div className={styles.btns}>
              <button className={styles.btn2}>CART</button>
              <button className={styles.btn1}>VIEW</button>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.imgbox}>
            <img
              src="	https://preview.colorlib.com/theme/selling/images/model_1_bg.jpg"
              alt=""
            />
          </div>
          <div className={styles.description}>
            <div>
              <h2>Wild West Hoodie</h2>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div style={{ display: "flex", gap: "10px" }}>
                <i style={{ color: "yellow" }} class="fa-solid fa-star"></i>
                <p>5.0</p>
                <i style={{ color: "red" }} class="fa-solid fa-heart"></i>
                <p>29</p>
              </div>
            </div>
            <p style={{ width: "75%" }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing.
            </p>
            <div className={styles.btns}>
              <button className={styles.btn2}>CART</button>
              <button className={styles.btn1}>VIEW</button>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.imgbox}>
            <img
              src="	https://preview.colorlib.com/theme/selling/images/model_1_bg.jpg"
              alt=""
            />
          </div>
          <div className={styles.description}>
            <div>
              <h2>Wild West Hoodie</h2>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div style={{ display: "flex", gap: "10px" }}>
                <i style={{ color: "yellow" }} class="fa-solid fa-star"></i>
                <p>5.0</p>
                <i style={{ color: "red" }} class="fa-solid fa-heart"></i>
                <p>29</p>
              </div>
            </div>
            <p style={{ width: "75%" }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing.
            </p>
            <div className={styles.btns}>
              <button className={styles.btn2}>CART</button>
              <button className={styles.btn1}>VIEW</button>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.imgbox}>
            <img
              src="	https://preview.colorlib.com/theme/selling/images/model_1_bg.jpg"
              alt=""
            />
          </div>
          <div className={styles.description}>
            <div>
              <h2>Wild West Hoodie</h2>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div style={{ display: "flex", gap: "10px" }}>
                <i style={{ color: "yellow" }} class="fa-solid fa-star"></i>
                <p>5.0</p>
                <i style={{ color: "red" }} class="fa-solid fa-heart"></i>
                <p>29</p>
              </div>
            </div>
            <p style={{ width: "75%" }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing.
            </p>
            <div className={styles.btns}>
              <button className={styles.btn2}>CART</button>
              <button className={styles.btn1}>VIEW</button>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.imgbox}>
            <img
              src="	https://preview.colorlib.com/theme/selling/images/model_1_bg.jpg"
              alt=""
            />
          </div>
          <div className={styles.description}>
            <div>
              <h2>Wild West Hoodie</h2>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div style={{ display: "flex", gap: "10px" }}>
                <i style={{ color: "yellow" }} class="fa-solid fa-star"></i>
                <p>5.0</p>
                <i style={{ color: "red" }} class="fa-solid fa-heart"></i>
                <p>29</p>
              </div>
            </div>
            <p style={{ width: "75%" }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing.
            </p>
            <div className={styles.btns}>
              <button className={styles.btn2}>CART</button>
              <button className={styles.btn1}>VIEW</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
