import Link from 'next/link'
import Image from 'next/image';

import "./Navbar.css";

export const Navbar = (props: any) => {
  return (
    <>
      <nav className="nav">
        <div className="nav_logo-container">
          <Image src="/unible-logo3.avif" 
            alt="icon" 
            className="logo-icon" 
            width={30}
            height={30}            
            />
          <Link href="#home" className="nav-logo">
            <span>Unible</span>
          </Link>
        </div>
        <div className="nav-links">
          <ul>
            <li>
              <Link href="#details">
                Details
              </Link>
            </li>
            <li>
              <Link href="#team">
                Team
              </Link>
            </li>            
            <li>
              <Link href="#contact">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="#about">
                About
              </Link>
            </li>            
          </ul>
        </div>
      </nav>
    </>
  );
};
