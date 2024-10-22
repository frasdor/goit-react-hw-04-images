import React from 'react';
import styles from './ImageGalleryItem.module.css';

class ImageGalleryItem extends React.Component {
  render() {
    const { webformatURL, onClick } = this.props;
    return (
      <li className={styles.galleryItem} onClick={onClick}>
        <img className={styles.image} src={webformatURL} alt="Gallery item" />
      </li>
    );
  }
}

export default ImageGalleryItem;

