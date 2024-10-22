import React from 'react';
import styles from './Button.module.css';

class Button extends React.Component {
  render() {
    const { onClick } = this.props;
    return (
      <div className={styles.center}>
        <button className={styles.button} onClick={onClick}>
          Load more
        </button>
      </div>
    );
  }
}

export default Button;
