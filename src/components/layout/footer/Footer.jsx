import React from 'react';
import logoImg from '../../../assets/img/logo light.png';
import { Twitter, Facebook, Instagram } from 'lucide-react';
import { useState } from 'react'
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

const Footer = () => {

  function err(e) {
    e.preventDefault();
    alert(`in development`)
  }

  return (
    <footer className={styles.footer}>
        <img src={logoImg} alt="Cyber" />

        <p className={styles.subtitle}>We are a residential interior design firm located in Portland. Our boutique-studio offers more than</p>
        <ul className={styles.list_ul}>
          <li className={styles.list_title}>Services</li>
          <Link to={'/'} style={{ textDecoration: 'none', borderBottom: 'none' }}>
            <li>Bonus program</li>
          </Link>
          <Link to={'/'} style={{ textDecoration: 'none', borderBottom: 'none' }}>
            <li>Gift cards</li>
          </Link>
          <Link to={'/'} style={{ textDecoration: 'none', borderBottom: 'none' }}>
            <li>Credit and payment</li>
          </Link>
          <Link to={'/'} style={{ textDecoration: 'none', borderBottom: 'none' }}>
            <li>Service contracts</li>
          </Link>
          <Link to={'/'} style={{ textDecoration: 'none', borderBottom: 'none' }}>
            <li>Non-cash account</li>
          </Link>
          <Link to={'/'} style={{ textDecoration: 'none', borderBottom: 'none' }}>
            <li>Payment</li>
          </Link>
        </ul>
  
        <ul className={styles.list_ul}>
          <li className={styles.list_title}>Assistance to the buyer</li>
          <Link to={'/'} style={{ textDecoration: 'none', borderBottom: 'none' }}>
            <li>Find an order</li>
          </Link>
          <Link to={'/'} style={{ textDecoration: 'none', borderBottom: 'none' }}>
            <li>Terms of delivery</li>
          </Link>
          <Link to={'/'} style={{ textDecoration: 'none', borderBottom: 'none' }}>
            <li>Exchange and return of goods</li>
          </Link>
          <Link to={'/'} style={{ textDecoration: 'none', borderBottom: 'none' }}>
            <li>Guarantee</li>
          </Link>
          <Link to={'/'} style={{ textDecoration: 'none', borderBottom: 'none' }}>
            <li>Frequently asked questions</li>
          </Link>
          <Link to={'/'} style={{ textDecoration: 'none', borderBottom: 'none' }}>
            <li>Terms of use of the site</li>
          </Link>
        </ul>

        <div className={styles.contacts}>
          <a onClick={err} href=""><Twitter/></a>
          <a onClick={err} href=""><Facebook/></a>
          <a onClick={err} href=""><Instagram/></a>
        </div>
    </footer>
  )
}

export default Footer
