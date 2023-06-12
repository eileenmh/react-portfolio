import React from "react";

function Navigation({ currentPage, handlePageChange }) {
  return (
    <ul>
      <li>
        <a href="#about" onClick={() => handlePageChange("About")} className="">
          About Me
        </a>
      </li>
      <li>
        <a
          href="#portfolio"
          onClick={() => handlePageChange("Portfolio")}
          className=""
        >
          Portfolio
        </a>
      </li>
      <li>
        <a
          href="#contact"
          onClick={() => handlePageChange("Contact")}
          className=""
        >
          Contact
        </a>
      </li>
      <li>
        <a
          href="#resume"
          onClick={() => handlePageChange("Resume")}
          className=""
        >
          Resume
        </a>
      </li>
    </ul>
  );
}

export default Navigation;
