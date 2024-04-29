import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
const Footer = () => {
  return (
    <footer className="bg-gray-400 text-gray-300 py-8">
    <div className="flex flex-col md:flex-row  ">
      <div className="ml-4  w-full  ">
        <Link href="https://www.indiawaterportal.org/about" className="text-md font-bold mb-2 arghyam ">
        के बारे में
        </Link>
      </div>
      <div className="ml-4 mt-2 w-full ">
        <Link href="https://www.indiawaterportal.org/contact-us" className="text-md font-bold mb-2 arghyam ">
        संपर्क
        </Link>
      </div>
      <div className="ml-4 mt-2 w-full ">
        <Link href="https://www.indiawaterportal.org/static-page/terms-use" className="text-md font-bold mb-2 arghyam">
        उपयोग की शर्तें
        </Link>
      </div>
      <div className="ml-4 mt-2 w-full">
        <Link href="https://www.indiawaterportal.org/static-page/privacy-policy" className="text-md font-bold mb-2 arghyam">
        गोपनीयता नीति
        </Link>
      </div>
    </div>
  </footer>
  );
}

export default Footer;