import { useState } from 'react'; 
import styles from './Card.module.css';
import { Heart } from 'lucide-react';

const Card = ({title, img, price}) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className={styles.card}>
      <div className={styles.like_area}>
        <button 
          className={styles.btn} 
          onClick={handleLike}
          type="button"
        >
          <Heart 
            size={24} 
            color={isLiked ? "#ff0000" : "#909090"} 
            fill={isLiked ? "#ff0000" : "none"} 
            className={styles.heart_icon}
          />
        </button>
      </div>
      <img src={img} alt="" />
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.price}>{price}</p>
        <button className="black_btn">Buy Now</button>
      </div>
    </div>
  );
}

export default Card;