"use client"
import Link from "next/link";
import React, { useState } from "react";

const MobileDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTopicOpen, setIsTopicOpen] = useState(false);
  const toggleSubMenu = () => {
    setIsOpen(!isOpen);
  };
  const toggleSubMenuTopic = () => {
    setIsTopicOpen(!isTopicOpen);
  };
  return (
        <div className="lg:hidden">
          <div className="px-6 pt-2 pb-3 space-y-1 sm:px-8 ">
            <a href="/" className="hover:text-arghyam p-2 block">
            घर
            </a>
            <div className="relative">
              <a
                className="hover:text-arghyam p-2 flex items-center"
                onClick={toggleSubMenu}
              >
                डेटा
                <svg
                  className="w-4 h-4 ml-1 fill-current  text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
                </svg>
              </a>
              {isOpen && (
                <div className="left-0 mt-2 w-60 bg-white  ">
                  <a
                    href="/"
                    className="block px-4 py-2 text-gray-800 hover:text-arghyam"
                  >
                    लोग और सामग्री
                  </a>
                  <a
                    href="/"
                    className="block px-4 py-2 text-gray-800 hover:text-arghyam"
                  >
                    डेटा खोजक
                  </a>
                  <a
                    href="/"
                    className="block px-4 py-2 text-gray-800 hover:text-arghyam"
                  >
                   मेटडेटा
                  </a>
                  <a
                    href="/"
                    className="block px-4 py-2 text-gray-800 hover:text-arghyam"
                  >
                   स्वच्छता की स्थिति
                  </a>
                </div>
              )}
            </div>
            <a href="/" className="hover:text-arghyam p-2 block">
            सामग्री
            </a>
            <a href="/" className="hover:text-arghyam p-2 block">
            अवसर एवं घटनाएँ
            </a>
            <div className="relative">
              <a
                className="hover:text-arghyam p-2 flex items-center"
                onClick={toggleSubMenuTopic}
              >
               विषय
                <svg
                  className="w-4 h-4 ml-1 fill-current text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
                </svg>
              </a>

              {isTopicOpen && (
                <div className=" left-0 mt-2 w-60 bg-white  dark:bg-gray-800 dark:border-gray-600">
                  <a
                    href="/"
                    className="block px-4 py-2 text-gray-800 hover:text-arghyam"
                  >
                    ठोस अपशिष्ट
                  </a>
                  <a
                    href="/"
                    className="block px-4 py-2 text-gray-800  hover:text-arghyam"
                  >
                    जल छाजन
                  </a>
                  <a
                    href="/"
                    className="block px-4 py-2 text-gray-800 hover:text-arghyam"
                  >
                    ग्रामीण स्वच्छता
                  </a>
                  <a
                    href="/"
                    className="block px-4 py-2 text-gray-800 hover:text-arghyam"
                  >
                   कृषि
                  </a>
                  <a
                    href="/"
                    className="block px-4 py-2 text-gray-800 hover:text-arghyam"
                  >
                   सभी विषय देखें
                  </a>
                </div>
              )}
              <div className="p-2">
                <span className="tracking-wider text-xl font-semibold">
                  <Link href="/">हिंदी</Link>
                </span>
                <span className="m-4 tracking-wider text-xl  ">
                  <a href="https://iwp-metdata-frontend.vercel.app/">English</a>
                </span>
              </div>
              <button
                className="bg-transparent  font-semibold hover:bg-[#3e5463] text-[#3e5463] hover:text-white py-2 px-4 border border-black mt-2 hover:border-transparent rounded"
                style={{
                  border: "1px solid #5b7282",
                  borderRadius: "2px",
                  letterSpacing: ".5px",
                }}
              >
               सदस्यता लें
              </button>
            </div>
          </div>
        </div>
  );
};

export default MobileDropdown;
