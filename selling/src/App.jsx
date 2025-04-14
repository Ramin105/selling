import React from "react";
import Header from "./components/header/Header";
import ImgContainer from "./components/imgcontainer/ImgContainer";
import Products from "./components/products/Products";
import Subscribe from "./components/subscribe/Subscribe";
import Featured from "./components/featured/Featured";
import Leadership from "./components/leadership/Leadership";
import Promo from "./components/promo/Promo";
import Services from "./components/services/Services";
import Testimonials from "./components/testimonials/Testimonials";
import BlogPost from "./components/blog/Blog";
import ContactForm from "./components/contact/Contact";

const App = () => {
  return (
    <div>
      {" "}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Header />
        <ImgContainer />
        <Products/>
       
      </div> <Subscribe/>
      <div><Featured/><Leadership/><Promo/></div>
      <div style={{marginTop:'250px',display:"flex",flexDirection:'column',alignItems:'center',gap:'10px'}}> <p>Our Services</p> <h1>We Offer Services</h1><Services/></div>
      <Testimonials/>
      <div style={{display:"flex",width:'100%',justifyContent:'center', flexDirection:'column',alignItems:"center", gap:'25px'}}> <h1>Blog posts</h1> <BlogPost/></div>
      <ContactForm/>
    </div>
  );
};

export default App;
