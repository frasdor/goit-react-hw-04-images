import React from 'react';
import styles from './Button.module.css';

const Button = ({ onClick }) => (
      <div className={styles.center}>
        <button className={styles.button} onClick={onClick}>
          Load more
        </button>
      </div>
    );


export default Button;
