"use client";
import React, { useState } from "react";
import LogoImage from "../utils/LogoImage";
import DataDropDownDesktop from "../utils/DataDropDownDesktop";
import TopicsDesktop from "../utils/TopicsDesktop";
import Button from "../utils/Button";
import Language from "../utils/Language";
import MobileDropdown from "../utils/MobileDropdown";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [isClick, setIsClick] = useState(false);
  const toggleNavbar = () => {
    setIsClick(!isClick);
  };
  return (
    <nav className="border-b">
      <div className="max-w-9xl m-4 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <LogoImage />
          <div className="hidden lg:block">
            <div className="ml-4 flex items-center space-x-4">
              <a href="/" className="arghyam p-2">
                Home
              </a>
              <DataDropDownDesktop />
              <a href="/" className="arghyam p-2">
                Articles
              </a>
              <a href="/" className="arghyam p-2">
                Opportunities & Event
              </a>
              <TopicsDesktop />
              <Button label="Subscribe" />
              <Language />
            </div>
          </div>
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
        </div>
      </div>
      {isClick && <MobileDropdown />}
    </nav>
  );
};
export default Header;
