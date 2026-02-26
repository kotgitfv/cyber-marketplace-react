import React from 'react'
import styles from './products.module.css'
import airpods from '../../../assets/img/products/airpods.png';
import applevision  from '../../../assets/img/products/apple vision.png';
import mac from '../../../assets/img/products/MacBook Pro 14.png';
import playstation from '../../../assets/img/products/PlayStation.png';

const products = () => {
  return (
    <section className={styles.products}>

        <div className={styles.first}>
            <div className={styles.image}>
                <img src={airpods} alt="" />
            </div>
            <div className={styles.text}>
                <h2 className={styles.title}>Apple  AirPods<span> Max</span></h2>
                <p className={styles.subtitle}>Computational audio. Listen, it's powerful</p>
            </div>
        </div>

        <div className={styles.second}>
            <div className={styles.image}>
                <img src={applevision} alt="" />
            </div>
            <div className={styles.text}>
                <h2 className={styles.title}>Apple Vision <span>Pro</span></h2>
                <p className={styles.subtitle}>An immersive way to experience entertainment</p>
            </div>
        </div>

        <div className={styles.therd}>
            <div className={styles.image}>
                <img src={playstation} alt="" />
            </div>
            <div className={styles.text}>
                <h2 className={styles.title}>Playstation <span>5</span></h2>
                <p className={styles.subtitle}>Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will redefine your PlayStation experience.</p>
            </div>
        </div>

        <div className={styles.fourth}>
            <div className={styles.image}>
                <img src={mac} alt="" />
            </div>
            <div className={styles.text}>
                <h2 className={styles.title}><span>Macbook</span> Air</h2>
                <p className={styles.subtitle}>The new 15‑inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display.</p>
                <button className='dark_btn'>Shop Now</button>
            </div>
        </div>

    </section>
  )
}

export default products
