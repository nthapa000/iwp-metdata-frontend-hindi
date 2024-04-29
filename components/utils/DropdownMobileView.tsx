"use client"
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const DropdownMobileView = () => {
  const [isClick, setIsClick] = useState(false);
  const toggleNavbar = () => {
    setIsClick(!isClick);
  };
  return (
    <div className="lg:hidden flex items-center justify-end space-x-4">
      <Link href="https://hindi.indiawaterportal.org/" className="p-2">
        <Image src={"/global.png"} width={30} height={20} alt="IWF" />
      </Link>{" "}
      <div>
        <button
          className="inline-flex items-center justify-center p-2 rounded-md"
          onClick={toggleNavbar}
        >
          {isClick ? (
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
};

export default DropdownMobileView;
