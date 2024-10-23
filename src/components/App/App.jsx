import React, { useState, useEffect } from 'react';
import Searchbar from '../Searchbar/Searchbar';
import ImageGallery from '../ImageGallery/ImageGallery';
import Button from '../Button/Button';
import Loader from '../Loader/Loader';
import Modal from '../Modal/Modal';
import { fetchImages } from '../../api/api';
import styles from './App.module.css';

const App = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [largeImageURL, setLargeImageURL] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!query) return;

    const fetchImagesData = async () => {
      setLoading(true);
      setError(null); 

      try {
        const newImages = await fetchImages(query, page);

        if (newImages.length === 0) {
          setError('No search results found.'); 
        } else {
          setImages((prevImages) => [...prevImages, ...newImages]);
        }
          
      } catch {
        setError('An error occurred while fetching images.');
      } finally {
        setLoading(false);
      }
    };

    fetchImagesData();
  }, [query, page]);

  // Scroll down after new images are added
  useEffect(() => {
    if (images.length > 0) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [images]);

  const handleSearchSubmit = (newQuery) => {
    setQuery(newQuery);
    setImages([]);
    setPage(1);
    setError(null); 
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1); 
  };

  const handleImageClick = (url) => {
    setLargeImageURL(url);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setLargeImageURL(null);
  };

  return (
    <div className={styles.app}>
      <Searchbar onSubmit={handleSearchSubmit} />
      {showModal && <Modal largeImageURL={largeImageURL} onClose={handleCloseModal} />}
      {error && <p className={styles.error}>{error}</p>} 
      <ImageGallery images={images} onImageClick={handleImageClick} />
      {loading && <Loader />}
      {images.length > 0 && !loading && <Button onClick={handleLoadMore} />}
    </div>
  );
};

export default App;
