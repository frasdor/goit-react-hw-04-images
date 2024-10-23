import React from 'react';
import styles from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ webformatURL, onClick }) => (    
      <li className={styles.galleryItem} onClick={onClick}>
        <img className={styles.image} src={webformatURL} alt="Gallery item" />
      </li>
    );

export default ImageGalleryItem;

