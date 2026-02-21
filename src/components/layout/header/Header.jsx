import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // 1. Импортируем Link
import { Menu, ShoppingCart, Heart, UserRound } from 'lucide-react';
import logoImg from '../../../assets/img/Logo.png';
import styles from "./Header.module.css";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Переключатель бургера
  const burgerOn = () => {
    setIsActive(!isActive);
  };

  // Закрытие меню при клике на ссылку (чтобы на мобилках меню пряталось после перехода)
  const closeMenu = () => {
    setIsActive(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.header_scrolled : ''}`}>
        {/* Логотип теперь тоже ссылка на главную */}
        <Link to="/" className={styles.logo} onClick={closeMenu}>
            <img src={logoImg} alt="Logo" />
        </Link>
        
        <button onClick={burgerOn} className={styles.burger} aria-label="Menu">
          <Menu />
        </button>

        <nav className={`${styles.nav} ${isActive ? styles.active : ''}`}>
            <ul className={styles.nav_links_1}>
                <li>
                  <Link to="/" className={styles.link} onClick={closeMenu}>Home</Link>
                </li>
                <li>
                  <Link to="/about" className={styles.link} onClick={closeMenu}>About</Link>
                </li>
                <li>
                  <Link to="/contact" className={styles.link} onClick={closeMenu}>Contact Us</Link>
                </li>
                <li>
                  <Link to="/blog" className={styles.link} onClick={closeMenu}>Blog</Link>
                </li>
            </ul>
            
            <ul className={styles.nav_links_2}>
              <li>
                <Link to='/liked'><Heart className={styles.link} onClick={closeMenu} /></Link>
              </li>
              <li>
                <Link to='/cart'><ShoppingCart className={styles.link} onClick={closeMenu} /></Link>
              </li>
              <li>
                <Link to='/user'><UserRound className={styles.link} onClick={closeMenu} /></Link>
              </li>
            </ul>
        </nav>
    </header>
  );
};

export default Header;