import React, { Component } from 'react';
import Searchbar from '../Searchbar/Searchbar';
import ImageGallery from '../ImageGallery/ImageGallery';
import Button from '../Button/Button';
import Loader from '../Loader/Loader';
import Modal from '../Modal/Modal';
import { fetchImages } from '../../api/api';
import styles from './App.module.css';

class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
    loading: false,
    showModal: false,
    largeImageURL: null,
    error: null, // Nowy stan dla przechowywania błędów
  };

  componentDidMount() {
    // Inicjalne pobieranie danych, jeśli to konieczne
  }

  componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;
    if (prevState.query !== query || prevState.page !== page) {
      this.fetchImages();
    }
  }

  fetchImages = () => {
    const { query, page } = this.state;
    this.setState({ loading: true, error: null  }); // Resetujemy stan błędu przed nowym zapytaniem

    fetchImages(query, page)
      .then((newImages) => {
        if (newImages.length === 0) {
          this.setState({ error: 'No search results found.' });
          return;
        }
        this.setState((prevState) => ({
          images: [...prevState.images, ...newImages],
        }), () => {
          // Scrollowanie w dół po dodaniu nowych obrazów
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
          });
        });
      })
      .catch(() => {
        this.setState({ error: 'An error occurred while fetching images.' });
      })
      .finally(() => this.setState({ loading: false }));
  };

  handleSearchSubmit = (newQuery) => {
    this.setState({ query: newQuery, images: [], page: 1, error: null });
  };

  handleLoadMore = () => {
    this.setState((prevState) => ({ page: prevState.page + 1 }));
  };

  handleImageClick = (url) => {
    this.setState({ largeImageURL: url, showModal: true });
  };

  handleCloseModal = () => {
    this.setState({ showModal: false, largeImageURL: null });
  };

  render() {
    const { images, loading, showModal, largeImageURL, error } = this.state;
    return (
      <div className={styles.app}>
        <Searchbar onSubmit={this.handleSearchSubmit} />
        {showModal && <Modal largeImageURL={largeImageURL} onClose={this.handleCloseModal} />}
        {error && <p className={styles.error}>{error}</p>} {/* Wyświetlanie komunikatu błędu */}
        <ImageGallery images={images} onImageClick={this.handleImageClick} />
        {loading && <Loader />}
        {images.length > 0 && !loading && <Button onClick={this.handleLoadMore} />}
        
      </div>
    );
  }
}

export default App;












// Your API key: 46136265-8c05b511bcb8d1129c580e4d3



// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
