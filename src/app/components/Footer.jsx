import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between items-center">
        <Image
          src="/images/logo-transparent.png"
          width={80}
          height={80}
          className="rounded-3xl"
          alt="logo-transparent"
        ></Image>
        {/* <span>logo</span> */}
        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
