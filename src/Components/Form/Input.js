import React from 'react';
import styles from './Input.module.css';

const Input = ({ label, type, name }) => {
  return (
    <div>
      <div className={styles.wrapper}>
        <label htmlFor={name} className={styles.label}>
          {label}
        </label>
        <input id={name} name={name} className={styles.input} type={type} />
        <p className={styles.error}>Error</p>
      </div>
    </div>
  );
};

export default Input;
