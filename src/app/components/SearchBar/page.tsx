import React from 'react'
import styles from './searchBar.module.css'

const SearchBar = () => {
    return (
        <div className={styles.content}>
            <div className={styles.searchInput}>
                <i className='bx bx-search-alt-2'></i>
                <input type="text" placeholder='Siapa yang anda ingin cari?' className={styles.input} />
            </div>
        </div>
    )
}

export default SearchBar