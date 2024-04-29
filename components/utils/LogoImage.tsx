import Image from "next/image";
import React from "react";

const LogoImage = () => {
  return (
    <div className="flex items-center">
    <div className="flex-shrink-0">
      <a href="/">
        <Image src={"/IWF.png"} width={128} height={40} alt="IWF" />
      </a>
    </div>
  </div>
  );
};

export default LogoImage;
