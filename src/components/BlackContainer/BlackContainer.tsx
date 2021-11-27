import React from 'react';
import styles from './BlackContainer.module.scss';
import coffebeanImage from '../../assets/home/desktop/icon-coffee-bean.svg';
import giftImage from '../../assets/home/desktop/icon-gift.svg';
import truckImage from '../../assets/home/desktop/icon-truck.svg';

const BlackContainer = () => (
  <div className={styles.container}>
    <div className={styles.topText}>
      <h4 className={styles.title}>Why choose us?</h4>
      <p>
        A large part of our role is choosing which particular coffees will be featured
        in our range. This means working closely with the best coffee growers to give
        you a more impactful experience on every level.
      </p>
    </div>
    <div className={`${styles.card1} ${styles.card}`}>
      <img className={styles.icon} src={coffebeanImage} alt="coffebean" />
      <h4 className={styles.title}>Best quality</h4>
      <p>Discover an endless variety of the world’s best artisan coffee from each of our roasters.</p>
    </div>
    <div className={`${styles.card2} ${styles.card}`}>
      <img className={styles.icon} src={giftImage} alt="gift" />
      <h4 className={styles.title}>Exclusive benefits</h4>
      <p>Special offers and swag when you subscribe, including 30% off your first shipment.</p>
    </div>
    <div className={`${styles.card3} ${styles.card}`}>
      <img className={styles.icon} src={truckImage} alt="truck" />
      <h4 className={styles.title}>Free shipping </h4>
      <p>We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.</p>
    </div>
    <div className={styles.background1} />
  </div>
);

export default BlackContainer;
