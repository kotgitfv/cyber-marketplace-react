import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Smartphone, Cpu, Camera, Battery, Layers, Monitor } from 'lucide-react';
import styles from "./ProductStyles.module.css";
import prevI from '../../assets/img/spc/iphone14proSpace.png'
import { PRODUCTS_DATA } from '../../data/products.js';

const ProductPage = () => {
  const { id } = useParams();
  const product = PRODUCTS_DATA.find(item => item.id === id);

  if (!product) {
    return (
      <div className={styles.container}>
        <h2>Product {id} not found</h2>
        <Link to="/" className={styles.back}>Go Home</Link>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.main_info}>
        <img src={product.img} alt={product.title} className={styles.main_img} />
        <h1 className={styles.title}>{product.title}</h1>
        <div className={styles.price_block}>
          <span className={styles.price}>{product.price}</span>
          {product.oldPrice && <span className={styles.old_price}>{product.oldPrice}</span>}
        </div>
      </div>

      <div className={styles.specs_grid}>
        <div className={styles.card}>
          <Smartphone size={20} />
          <div>
            <p className={styles.label}>Screen size</p>
            <p className={styles.val}>{product.specs.screen}</p>
          </div>
        </div>

        <div className={styles.card}>
          <Cpu size={20} />
          <div>
            <p className={styles.label}>CPU</p>
            <p className={styles.val}>{product.specs.cpu}</p>
          </div>
        </div>

        <div className={styles.card}>
          <Layers size={20} />
          <div>
            <p className={styles.label}>Number of Cores</p>
            <p className={styles.val}>{product.specs.cores}</p>
          </div>
        </div>

        <div className={styles.card}>
          <Camera size={20} />
          <div>
            <p className={styles.label}>Main camera</p>
            <p className={styles.val}>{product.specs.mainCam}</p>
          </div>
        </div>

        <div className={styles.card}>
          <Monitor size={20} />
          <div>
            <p className={styles.label}>Front-camera</p>
            <p className={styles.val}>{product.specs.frontCam}</p>
          </div>
        </div>

        <div className={styles.card}>
          <Battery size={20} />
          <div>
            <p className={styles.label}>Battery capacity</p>
            <p className={styles.val}>{product.specs.battery}</p>
          </div>
        </div>
      </div>

      <Link to='/'>
        <button className={styles.back}>Back</button>
      </Link>
    </div>
  );
};

export default ProductPage;