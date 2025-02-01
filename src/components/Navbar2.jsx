import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/mainlogo.png";

const Navbar2 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [prevScrollY, setPrevScrollY] = useState(0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < prevScrollY) {
        // Scrolling up → Show navbar
        setShowNavbar(true);
      } else if (currentScrollY > 50) {
        // Scrolling down & past 50px → Hide navbar
        setShowNavbar(false);
      }

      setPrevScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollY]);

  return (
    <div
      className="fixed top-0 left-0 right-0 z-50 transition-transform duration-300"
      style={{
        transform: showNavbar ? "translateY(0)" : "translateY(-100%)",
      }}
    >
      <div className="flex justify-between items-center p-5 bg-transparent text-white">
        <div className="flex items-center">
          <Link to="/" onClick={closeMenu}>
            <img src={logo} alt="Logo" className="h-auto max-h-16" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-14 items-center text-lg font-coda tracking-widest">
          <Link to="/" className="hover:text-[#BF81F0]">
            Home
          </Link>
          <Link to="/about" className="hover:text-[#BF81F0]">
            About Us
          </Link>
          <Link to="/gallery" className="hover:text-[#BF81F0]">
            Gallery
          </Link>
          <Link to="/team" className="hover:text-[#BF81F0]">
            Team
          </Link>
          <Link
            to="/membership"
            className="bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-600"
          >
            Become a Member
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white">
            {isMenuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <line
                  x1="1"
                  y1="23"
                  x2="23"
                  y2="1"
                  stroke="white"
                  strokeWidth="3"
                />
                <line
                  x1="1"
                  y1="1"
                  x2="23"
                  y2="23"
                  stroke="white"
                  strokeWidth="3"
                />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <line
                  x1="1"
                  y1="5"
                  x2="23"
                  y2="5"
                  stroke="white"
                  strokeWidth="3"
                />
                <line
                  x1="1"
                  y1="12"
                  x2="23"
                  y2="12"
                  stroke="white"
                  strokeWidth="3"
                />
                <line
                  x1="1"
                  y1="19"
                  x2="23"
                  y2="19"
                  stroke="white"
                  strokeWidth="3"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar2;
