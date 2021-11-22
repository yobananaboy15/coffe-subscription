import React from 'react';
import styles from './Button.module.scss';

type ButtonProps = {
  text: string,
  callback: () => void,
};

const Button = ({ text, callback }: ButtonProps) => (
  <button className={styles.button} type="button" onClick={callback}>
    {text}
  </button>
);

export default Button;
