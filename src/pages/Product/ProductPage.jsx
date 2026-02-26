import React from 'react';
import { Link } from 'react-router-dom';
import { Smartphone, Cpu, Camera, Battery, Layers, Monitor } from 'lucide-react';
import iphoneImg from '../../assets/img/iphone14pro Space.png';
import styles from "./ProductStyles.module.css"

const ProductPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.main_info}>
        <img src={iphoneImg} alt="iPhone 14 Pro Max" className={styles.main_img} />
        <h1 className={styles.title}>Apple iPhone 14 Pro Max</h1>
        <div className={styles.price_block}>
          <span className={styles.price}>$1399</span>
          <span className={styles.old_price}>$1499</span>
        </div>
      </div>
      <div className={styles.specs_grid}>
        <div className={styles.card}>
          <Smartphone size={20} />
          <div>
            <p className={styles.label}>Screen size</p>
            <p className={styles.val}>6.7"</p>
          </div>
        </div>

        <div className={styles.card}>
          <Cpu size={20} />
          <div>
            <p className={styles.label}>CPU</p>
            <p className={styles.val}>Apple A16 Bionic</p>
          </div>
        </div>

        <div className={styles.card}>
          <Layers size={20} />
          <div>
            <p className={styles.label}>Number of Cores</p>
            <p className={styles.val}>6</p>
          </div>
        </div>

        <div className={styles.card}>
          <Camera size={20} />
          <div>
            <p className={styles.label}>Main camera</p>
            <p className={styles.val}>48-12-12 MP</p>
          </div>
        </div>

        <div className={styles.card}>
          <Monitor size={20} />
          <div>
            <p className={styles.label}>Front-camera</p>
            <p className={styles.val}>12 MP</p>
          </div>
        </div>

        <div className={styles.card}>
          <Battery size={20} />
          <div>
            <p className={styles.label}>Battery capacity</p>
            <p className={styles.val}>4323 mAh</p>
          </div>
        </div>
      </div>
      <Link to='/' >
          <button className={styles.back}>Back</button>
      </Link>
    </div>
  );
};

export default ProductPage;