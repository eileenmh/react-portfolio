import React from "react";
import Navigation from "./Navigation";

function Header({ currentPage, handlePageChange }) {
  return (
    <header className="header">
      <Navigation
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
    </header>
  );
}

export default Header;
