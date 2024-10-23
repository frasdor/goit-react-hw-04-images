import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import styles from './ImageGallery.module.css'

const ImageGallery = ({ images, onImageClick }) => (
      <ul className={styles.gallery}>
        {images.map(({ id, webformatURL, largeImageURL }) => (
          <ImageGalleryItem
            key={id}
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
            onClick={() => onImageClick(largeImageURL)}
          />
        ))}
      </ul>
    );

export default ImageGallery;
