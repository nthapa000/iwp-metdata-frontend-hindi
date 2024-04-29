"use client";
import React, { useState } from "react";

const DataDropDownDesktop = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSubMenu = () => {
    setIsOpen(!isOpen);
  };
  const closeSubMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <a
        className="hover:text-arghyam p-2 flex items-center"
        onMouseEnter={toggleSubMenu}
        onMouseLeave={closeSubMenu}
      >
        Data
        <svg
          className="w-4 h-4 ml-1 fill-current text-gray-500"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
        </svg>
      </a>
      {isOpen && (
        <div className="absolute z-10 left-0 mt-2 w-60 bg-white border border-gray-200 rounded-md shadow-lg dark:bg-gray-800 dark:border-gray-600">
          <a
            href="/"
            className="block px-4 justify-center h-full  py-2 text-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            People & Content
          </a>
          <a
            href="/"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            Data Finder
          </a>
          <a
            href="/"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            Met Data
          </a>
          <a
            href="/"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            State of Sanitation
          </a>
        </div>
      )}
    </div>
  );
};

export default DataDropDownDesktop;
