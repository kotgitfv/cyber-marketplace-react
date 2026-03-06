import React from "react";
import { Link } from 'react-router-dom'; 
import prewPhone from "../../../assets/img/prewiew iphone.png";
import styles from "./Hero.module.css";

const Hero = () => {
  
  return (
    <section className={styles.hero}>
      <div className={styles.header_txt}>
        <p className={styles.pre_title}>Pro.Beyond.</p>
        <h2 className={styles.title}>
          IPhone 14 <span className={styles.span}>Pro</span>
        </h2>
        <p className={styles.subtitle}>
          Created to change everything for the better. For everyone
        </p>
        
        <Link to="/product/iphone-14-pro-max">
          <button className="light_btn">Shop Now</button>
        </Link>
      </div>
      
      <div className={styles.image}>
        <img className={styles.img} src={prewPhone} alt="iPhone 14 Pro" />
      </div>
    </section>
  );
};

export default Hero;