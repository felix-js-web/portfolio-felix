import React from "react";
import Navigation from "./Navigation";
import '../styles/Header.css';


export default function Header({ currentPage, handlePageChange }) {
  return (
    <div className="headerContainer">
          <h1 className="profileName">Felix Java/NodeJS Developer</h1>
      <Navigation
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
    </div>
  );
}
