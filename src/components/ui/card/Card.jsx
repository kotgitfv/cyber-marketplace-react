import { useState } from 'react';
import { Heart } from 'lucide-react';
import styles from './Card.module.css';

const Card = ({ title, img, price }) => {
  const [isLiked, setIsLiked] = useState(false);

  const formatTitle = (text, limit) => {
    if (!text) return "";
    return text.length > limit ? text.substring(0, --limit) + "..." : text;
  };

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
          aria-label="Like product"
        >
          <Heart 
            size={24} 
            color={isLiked ? "#ff0000" : "#909090"} 
            fill={isLiked ? "#ff0000" : "none"} 
            className={styles.heart_icon}
          />
        </button>
      </div>
      
      <div className={styles.image_container}>
        <img src={img} alt={title} className={styles.card_img} />
      </div>
      
      <div className={styles.content}>
        <h2 className={styles.title}>{formatTitle(title, 25)}</h2>
        <p className={styles.price}>{price}</p>
        <button className="black_btn">Buy Now</button>
      </div>
    </div>
  );
};

export default Card;