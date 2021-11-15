import React from 'react';
import styles from './AppContainer.module.scss';

type AppContainerProps = {
  children: any
};

const AppContainer = ({ children }: AppContainerProps) => (
  <div className={styles.container}>
    {children}
  </div>
);

export default AppContainer;
