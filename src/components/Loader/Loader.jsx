import React from 'react';
import { ThreeDots } from 'react-loader-spinner';
import styles from './Loader.module.css';


class Loader extends React.Component {
    render() {
      return (
        <div className={styles.loader}>
            <ThreeDots
          visible={true}
          height="80"
          width="80"
          color="#303f9f"
          radius="9"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
        </div>
      );
    }
  }
  
export default Loader;