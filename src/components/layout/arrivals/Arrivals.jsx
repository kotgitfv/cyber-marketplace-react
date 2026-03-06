import React from 'react'
import styles from './Arrivals.module.css'
import Card from '../../ui/card/Card'
import airpods from '../../../assets/img/card/airpods.png';
import appleWatch from '../../../assets/img/card/apple watch.png';
import buds from '../../../assets/img/card/buds.png';
import camera from '../../../assets/img/card/camera.png';
import ipad from '../../../assets/img/card/ipad.png';
import iphone from '../../../assets/img/card/iphone 14 pro max.png';
import samsungWatch from '../../../assets/img/card/samsung watch.png';
import samsung from '../../../assets/img/card/samsung.png';



const Arrivals = () => {
  return (
    <section className={styles.arrivals}>
      <h1 className={styles.title}>
        New Arrival
      </h1>

      <div className={styles.cards}>
        <Card 
          title='Apple Watch Series 9 GPS 41mm Starlight Aluminium Case'
          price='$900'
          img={iphone}
        />
        <Card 
          title='Blackmagic Pocket Cinema Camera 6k'
          price='$2535'
          img={camera}
        />
        <Card 
          title='Apple Watch Series 9 GPS 41mm Starlight Aluminium Case'
          price='$399'
          img={appleWatch}
        />
        <Card 
          title='AirPods Max Silver'
          price='$549'
          img={airpods}
        />
        <Card 
          title='Samsung Galaxy Watch6 Classic 47mm Black'
          price='$369'
          img={samsungWatch}
        />
        <Card 
          title='Galaxy Z Fold5 Unlocked | 256GB | Phantom Black'
          price='$1799'
          img={samsung}
        />
        <Card 
          title='Galaxy Buds FE Graphite'
          price='$99.99'
          img={buds}
        />
        <Card 
          title='Apple iPad 9 10.2" 64GB Wi-Fi Silver (MK2L3) 2021'
          price='$398'
          img={ipad}
        />

      </div>
        
    </section>
  )
}

export default Arrivals
