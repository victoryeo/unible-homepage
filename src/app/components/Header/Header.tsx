import React from "react";
import Link from 'next/link'
import Image from 'next/image';
import "./Header.css";

export const Header = () => {
  return (
    <>
      <div id="home"></div>
      <div className="bc__bg-image">
        <div className="header_catalog">

          <div className="htwebpage__header-welcometext">
            <h4>Gas Free Stablecoin</h4>
            <span className="header-desc">
              Unible is a 1:1 USD-backed stablecoin.
              <br /><br />
              Revolutionize global finance with a cutting-edge gas free stablecoin.
            </span>
            <br />
            <Link href="http://34.87.34.143/" className="header-btn">Get Unible</Link>
          </div>
          <Link href="https://unible.gitbook.io/unible" className="header-btn_banner">
            <Image src="/unible_banner.avif" 
              alt="icon" 
              className="logo-icon" 
              width={406}
              height={200}            
              />
          </Link>
        </div>
      </div>
    </>
  );
};
