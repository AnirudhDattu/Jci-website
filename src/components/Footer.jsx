import React from "react";
import logo from "../assets/mainlogo.png";
import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const handleNavigation = (sectionId) => {
    if (window.location.pathname !== "/") {
      navigate("/", { state: { scrollTo: sectionId } });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  };

  const scrollToTop = () => {
    if (window.location.pathname !== "/") {
      navigate("/");
    }
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative bg-[#F8F5F0]">
      {/* Yellow Footer Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className="bg-yellow-400 p-6 sm:p-8 md:p-10 rounded-lg shadow-lg"
          style={{ marginBottom: "-2rem" }}
        >
          <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-12">
            {/* Navigation Section */}
            <nav className="flex-1">
              <h6 className="text-lg font-bold mb-4 text-gray-800">Navigate</h6>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => handleNavigation("about")}
                    className="text-gray-700 hover:text-gray-900 transition-colors text-left w-full"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavigation("opportunities")}
                    className="text-gray-700 hover:text-gray-900 transition-colors text-left w-full"
                  >
                    Areas of Opportunity
                  </button>
                </li>
                <li>
                  <Link
                    to="/team"
                    onClick={scrollToTop}
                    className="text-gray-700 hover:text-gray-900 transition-colors text-left w-full"
                  >
                    Team
                  </Link>
                </li>
                <li>
                  <Link
                    to="/events"
                    onClick={scrollToTop}
                    className="text-gray-700 hover:text-gray-900 transition-colors text-left w-full"
                  >
                    Events
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Contact Section */}
            <nav className="flex-1">
              <h6 className="text-lg font-bold mb-4 text-gray-800">Contact</h6>
              <ul className="space-y-2">
                <li className="text-gray-700">
                  D V S P Gupta - zone president
                </li>
                <li>
                  <a
                    href="tel:+919347368514"
                    className="text-blue-700 hover:underline cursor-pointer"
                  >
                    +91 9347368514
                  </a>
                </li>
                <li>
                  <a
                    href="https://mail.google.com/mail/?view=cm&to=zsjaczone12@gmail.com&su=Hi%20i%20want%20to%20talk%20to%20you%20regarding%20something"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 hover:underline cursor-pointer"
                  >
                    zsjaczone12@gmail.com
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      {/* Blue Footer Section */}
      <footer className="bg-[#02052A] text-white pt-16 pb-8 px-4 sm:px-6 lg:px-8 relative z-0">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <button onClick={scrollToTop} className="focus:outline-none">
            <img
              src={logo}
              alt="Logo"
              className="h-16 w-auto hover:opacity-80 transition-opacity"
            />
          </button>

          {/* Social Links */}
          <nav>
            <div className="flex gap-6">
              {/* Twitter */}
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-75 transition-opacity"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-75 transition-opacity"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-75 transition-opacity"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </nav>
        </div>
        <div className="mt-8 text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Designed and Crafted by Anirudh
          Dattu. All rights reserved by Anirudh Dattu.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
