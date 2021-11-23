import React from 'react';
import styles from './CoffeItem.module.scss';

type CoffeItemProps = {
  img: string,
  title: string,
  text: string
};

const CoffeItem = ({ img, title, text }: CoffeItemProps) => (
  <div className={styles.container}>
    <img src={img} alt={title} className={styles.coffeImage} />
    <div className={styles.textContainer}>
      <h4 className={styles.title}>{title}</h4>
      <p className={styles.text}>{text}</p>
    </div>
  </div>
);

export default CoffeItem;
