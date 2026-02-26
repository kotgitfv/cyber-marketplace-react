import React, { useRef } from 'react';
import styles from './Categories.module.css';
import { Smartphone, Watch, Camera, Headphones, LaptopMinimal, Gamepad, ChevronRight, ChevronLeft } from 'lucide-react'

const Categories = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      const scrollAmount = current.offsetWidth / 2; 
      if (direction === 'left') {
        current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  return (
    <section className={styles.categories}>
        <div className={styles.top}>
            <h2 className={styles.title}>Browse By Category</h2>
            <div className={styles.navBtns}>
              <button className={styles.btn} onClick={() => scroll('left')}> <ChevronLeft size={24}/></button> 
              <button className={styles.btn} onClick={() => scroll('right')}> <ChevronRight size={24}/> </button>
            </div>
        </div>

        <div className={styles.bottom}>
            <div className={styles.cards} ref={scrollRef}>
                <div className={styles.card}>
                    <Smartphone size={48}/>
                    <h3 className={styles.phone}>Phones</h3>
                </div>
                <div className={styles.card}>
                    <Watch size={48}/>
                    <h3 className={styles.wathes}>Smart Watches</h3>
                </div>
                <div className={styles.card}>
                    <Camera size={48}/>
                    <h3 className={styles.camera}>Cameras</h3>
                </div>
                <div className={styles.card}>
                    <Headphones size={48}/>
                    <h3 className={styles.headphones}>Headphones</h3>
                </div>
                <div className={styles.card}>
                    <LaptopMinimal size={48}/>
                    <h3 className={styles.pc}>Computers</h3>
                </div>
                <div className={styles.card}>
                    <Gamepad size={48}/>
                    <h3 className={styles.pad}>Gaming</h3>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Categories