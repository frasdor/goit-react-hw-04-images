import React, { useState } from 'react';
import styles from './Searchbar.module.css';

const Searchbar = ({ onSubmit }) => {
    const [query, setQuery] = useState('');
  

    const handleChange = (e) => {
    setQuery (e.target.value);
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      onSubmit(query);
      setQuery('');
    };
 
    return (
      <header className={styles.searchbar}> {/* Użyj stylu z modułu */}
        <form className={styles.form} onSubmit={handleSubmit}> {/* Użyj stylu z modułu */}
          <button type="submit" className={styles.button}> {/* Użyj stylu z modułu */}
            <span className={styles.buttonLabel}>Search</span> {/* Użyj stylu z modułu */}
          </button>

          <input
            className={styles.input} // Użyj stylu z modułu
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={query}
            onChange={handleChange}
          />
        </form>
      </header>
    );
  };



export default Searchbar;
