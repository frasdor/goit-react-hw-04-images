import React, { useEffect } from 'react';
import styles from './Modal.module.css';

const Modal = ({ largeImageURL, onClose }) => {

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    }
  }, [onClose]);


  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

    return (
      <div className={styles.Overlay} onClick={handleOverlayClick}>
        <div className={styles.Modal}>
          <img src={largeImageURL} alt="Large" />
        </div>
      </div>
    );
  };


export default Modal;
