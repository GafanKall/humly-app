import React from 'react'
import Navbar from '../components/Navbar/page';
import '../styles/globals.css';
import ExampleSearchProfile from '../components/ExampleSearchPorfile/page';
import SearchBar from '../components/SearchBar/page';

const SearchPage = () => {
  return (
    <div className="container">
      <div className="sidebar">
        <Navbar />
      </div>
      <div className="mainContent">
        <h1 className="title">Cari</h1>
        <div className="content">
          <SearchBar />
          <ExampleSearchProfile />
          <ExampleSearchProfile />
          <ExampleSearchProfile />
          <ExampleSearchProfile />
          <ExampleSearchProfile />
          <ExampleSearchProfile />
        </div>
      </div>
    </div>
  )
}

export default SearchPage