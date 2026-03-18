import React from 'react';
import { Link } from 'react-router-dom'; // Импортируем Link
import { Heart } from 'lucide-react';
import styles from './Card.module.css';

// Не забудь добавить 'id' в список принимаемых пропсов!
const Card = ({ id, title, img, price }) => {
  const [isLiked, setIsLiked] = React.useState(false);

  const formatTitle = (text, limit) => {
    if (!text) return "";
    return text.length > limit ? text.substring(0, limit) + "..." : text;
  };

  return (
    <div className={styles.card}>
      <div className={styles.like_area}>
        <button className={styles.btn} onClick={() => setIsLiked(!isLiked)}>
          <Heart 
            size={24} 
            color={isLiked ? "#ff0000" : "#909090"} 
            fill={isLiked ? "#ff0000" : "none"} 
          />
        </button>
      </div>
      
      {/* При клике на картинку тоже можно переходить на страницу товара */}
      <Link to={`/product/${id}`} className={styles.image_link}>
        <img src={img} alt={title} className={styles.img} />
      </Link>
      
      <div className={styles.content}>
        <h2 className={styles.title}>{formatTitle(title, 35)}</h2>
        <p className={styles.price}>{price}</p>
        
        {/* ГЛАВНОЕ: Кнопка "Buy Now" теперь ведет на страницу товара */}
        <Link to={`/product/${id}`}>
          <button className="black_btn">Buy Now</button>
        </Link>
      </div>
    </div>
  );
};

export default Card;