import React from 'react';
import CoffeCollectionTitle from '../CoffeCollectionTitle/CoffeCollectionTitle';
import CoffeItem from '../CoffeItem/CoffeItem';
import styles from './CoffeCollection.module.scss';
import dance from '../../assets/home/desktop/image-danche.png';

const CoffeCollection = () => (
  <div className={styles.container}>
    <CoffeCollectionTitle />
    <CoffeItem img={dance} title="Danche" text="Ethiopian hand-harvested blend densely packed with vibrant fruit notes" />
    <CoffeItem img={dance} title="Danche" text="Ethiopian hand-harvested blend densely packed with vibrant fruit notes" />
    <CoffeItem img={dance} title="Danche" text="Ethiopian hand-harvested blend densely packed with vibrant fruit notes" />
  </div>
);

export default CoffeCollection;
