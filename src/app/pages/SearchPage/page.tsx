import React from 'react'
import Navbar from '../../components/Navbar/page';
import ExampleSearchProfile from '../../components/ExampleSearchPorfile/page';
import styles from './search.module.css';
import '../../styles/globals.css';

const SearchPage = () => {
  return (
    <div className="container">
      <div className="sidebar">
        <Navbar />
      </div>
      <div className="mainContent">
        <h1 className="title">Cari</h1>
        <div className={styles.content}>
          <div className={styles.searchBar}>
            <div className={styles.searchInput}>
              <i className='bx bx-search-alt-2'></i>
              <input type="text" placeholder='Siapa yang anda ingin cari?' className={styles.input} />
            </div>
          </div>
          <div className={styles.userInfo}>
            <ExampleSearchProfile />
            <ExampleSearchProfile />
            <ExampleSearchProfile />
            <ExampleSearchProfile />
            <ExampleSearchProfile />
            <ExampleSearchProfile />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchPage