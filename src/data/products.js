import iphone from '../assets/img/card/iphone 14 pro max.png';
import camera from '../assets/img/card/camera.png';
import appleWatch from '../assets/img/card/apple watch.png';
import airpods from '../assets/img/card/airpods.png';
import samsungWatch from '../assets/img/card/samsung watch.png';
import samsung from '../assets/img/card/samsung.png';
import buds from '../assets/img/card/buds.png';
import ipad from '../assets/img/card/ipad.png';

export const PRODUCTS_DATA = [
  {
    id: 'iphone-14-pro-max',
    title: 'Apple iPhone 14 Pro Max 128GB',
    price: '$900',
    oldPrice: '$1499',
    img: iphone,
    specs: {
      screen: '6.7"',
      cpu: 'Apple A16 Bionic',
      cores: '6',
      mainCam: '48-12-12 MP',
      frontCam: '12 MP',
      battery: '4323 mAh'
    }
  },
  {
    id: 'blackmagic-pocket-cinema',
    title: 'Blackmagic Pocket Cinema Camera 6K',
    price: '$2535',
    img: camera,
    specs: {
      screen: '5" Touchscreen',
      cpu: 'Blackmagic OS',
      cores: 'N/A',
      mainCam: '6144 x 3456 (6K)',
      frontCam: 'N/A',
      battery: 'LP-E6'
    }
  },
  {
    id: 'apple-watch-9',
    title: 'Apple Watch Series 9 GPS 41mm',
    price: '$399',
    img: appleWatch,
    specs: {
      screen: '1.9" OLED',
      cpu: 'Apple S9',
      cores: '2',
      mainCam: 'N/A',
      frontCam: 'N/A',
      battery: '308 mAh'
    }
  },
  {
    id: 'airpods-max',
    title: 'AirPods Max Silver',
    price: '$549',
    img: airpods,
    specs: {
      screen: 'N/A',
      cpu: 'Apple H1 (x2)',
      cores: '10 (per chip)',
      mainCam: 'N/A',
      frontCam: 'N/A',
      battery: '20 hours'
    }
  },
  {
    id: 'samsung-watch-6',
    title: 'Samsung Galaxy Watch6 Classic',
    price: '$369',
    img: samsungWatch,
    specs: {
      screen: '1.5" Super AMOLED',
      cpu: 'Exynos W930',
      cores: '2',
      mainCam: 'N/A',
      frontCam: 'N/A',
      battery: '425 mAh'
    }
  },
  {
    id: 'galaxy-z-fold5',
    title: 'Galaxy Z Fold5 Unlocked | 256GB',
    price: '$1799',
    img: samsung,
    specs: {
      screen: '7.6" Dynamic AMOLED',
      cpu: 'Snapdragon 8 Gen 2',
      cores: '8',
      mainCam: '50-10-12 MP',
      frontCam: '4 MP',
      battery: '4400 mAh'
    }
  },
  {
    id: 'galaxy-buds-fe',
    title: 'Galaxy Buds FE Graphite',
    price: '$99.99',
    img: buds,
    specs: {
      screen: 'N/A',
      cpu: 'BES2700',
      cores: 'N/A',
      mainCam: 'N/A',
      frontCam: 'N/A',
      battery: '479 mAh (case)'
    }
  },
  {
    id: 'ipad-9',
    title: 'Apple iPad 9 10.2" 64GB Silver',
    price: '$398',
    img: ipad,
    specs: {
      screen: '10.2" Retina',
      cpu: 'Apple A13 Bionic',
      cores: '6',
      mainCam: '8 MP',
      frontCam: '12 MP',
      battery: '8557 mAh'
    }
  }
];