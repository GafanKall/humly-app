"use client";
import React, { useState } from "react";
import Form from "../components/FormsHome/page";
import Thread1 from "../components/ExampleThreads1/page";
import Thread2 from "../components/ExampleThreads2/page";
import Navbar from "../components/Navbar/page";
import DropdownFilter from "../components/DropdownFilter/page";
import "../styles/globals.css";

const HomePage = () => {
  const [selectedFilter, setSelectedFilter] = useState("Untuk Anda");

  const handleFilterChange = (filter: React.SetStateAction<string>) => {
    setSelectedFilter(filter);
  };

  return (
    <div className="container">
      <div className="sidebar">
        <Navbar />
      </div>
      <div className="mainContent">
        <DropdownFilter
          options={["Untuk Anda", "Diikuti"]}
          defaultOption="Untuk Anda"
          onSelect={handleFilterChange}
        />
        <div className="content">
          {selectedFilter === "Untuk Anda" ? (
            <>
              <Form />
              <Thread1 />
              <Thread2 />
              <Thread1 />
              <Thread2 />
            </>
          ) : (
            <>
              <Thread2 />
              <Thread1 />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
