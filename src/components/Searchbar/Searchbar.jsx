import React, { Component } from 'react';
import styles from './Searchbar.module.css';

class Searchbar extends Component {
  state = {
    query: '',
  };

  handleChange = (e) => {
    this.setState({ query: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
  };

  render() {
    return (
      <header className={styles.searchbar}> {/* Użyj stylu z modułu */}
        <form className={styles.form} onSubmit={this.handleSubmit}> {/* Użyj stylu z modułu */}
          <button type="submit" className={styles.button}> {/* Użyj stylu z modułu */}
            <span className={styles.buttonLabel}>Search</span> {/* Użyj stylu z modułu */}
          </button>

          <input
            className={styles.input} // Użyj stylu z modułu
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.query}
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}


export default Searchbar;
