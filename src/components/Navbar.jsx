import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/mainlogo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [prevScrollY, setPrevScrollY] = useState(0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
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
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollY]);

  return (
    <div
      className="fixed top-0 left-0 right-0 z-50 transition-transform duration-300 text-white"
      style={{
        transform: showNavbar ? "translateY(0)" : "translateY(-100%)",
      }}
    >
      {/* 
        Use Tailwind's gradient classes:
        - bg-gradient-to-b: gradient direction from top to bottom
        - from-black/50: starting with 50% opacity black
        - to-transparent: ending with transparent
        backdrop-blur-sm: adds a subtle blur for a "frosted glass" effect
      */}
      <div className="flex justify-between items-center p-5 bg-gradient-to-b from-black/50 to-transparent backdrop-blur-sm">
        <div className="flex items-center">
          <Link to="/" onClick={closeMenu}>
            <img src={logo} alt="Logo" className="h-auto max-h-16" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-14 items-center text-lg font-coda tracking-widest">
          <Link to="/" className="hover:text-[#EFBF2C]">
            Home
          </Link>
          <Link
            to="/"
            onClick={() => scrollToSection("about")}
            className="hover:text-[#EFBF2C]"
          >
            About Us
          </Link>

          <Link to="/team" className="hover:text-[#EFBF2C]">
            Team
          </Link>
          <Link to="/events" className="hover:text-[#EFBF2C]">
            Events
          </Link>
          <Link to="/gallery" className="hover:text-[#EFBF2C]">
            Gallery
          </Link>

          <a
            href="https://jac.jciindia.in/join-us/"
            target="_blank"
            rel="noopener noreferrer"
            className="shine-effect bg-yellow-500 rounded-tl-3xl rounded-br-3xl text-black px-4 py-2 hover:bg-yellow-600"
          >
            Become a Member
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white">
            {isMenuOpen ? (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
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
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
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

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 h-screen flex flex-col items-center justify-center text-white text-2xl space-y-6 z-50 bg-black transition-all duration-500 ease-in-out transform origin-top ${
          isMenuOpen
            ? "opacity-100 scale-100 h-screen"
            : "opacity-0 scale-95 pointer-events-none"
        }`}
        style={{
          paddingTop: "env(safe-area-inset-top)",
          paddingBottom: "env(safe-area-inset-bottom)",
        }}
      >
        <button
          onClick={toggleMenu}
          className="absolute top-10 right-10 text-white"
        >
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
        </button>
        <div className="font-coda space-y-6 flex flex-col items-center tracking-widest">
          <Link
            onClick={toggleMenu}
            to="/"
            className="block hover:text-[#EFBF2C]"
          >
            Home
          </Link>
          <Link
            onClick={toggleMenu}
            to="/"
            // onClick={() => scrollToSection("about")}
            className="block hover:text-[#EFBF2C]"
          >
            About Us
          </Link>
          <Link
            onClick={toggleMenu}
            to="/gallery"
            className="block hover:text-[#EFBF2C]"
          >
            Gallery
          </Link>
          <Link
            onClick={toggleMenu}
            to="/team"
            className="block hover:text-[#EFBF2C]"
          >
            Team
          </Link>

          <a
            onClick={toggleMenu}
            href="https://jac.jciindia.in/join-us/"
            target="_blank"
            rel="noopener noreferrer"
            className="shine-effect bg-yellow-500 rounded-tl-3xl rounded-br-3xl text-black px-4 py-2 hover:bg-yellow-600"
          >
            Become a Member
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
