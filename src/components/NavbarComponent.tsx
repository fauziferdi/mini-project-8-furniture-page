import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/image/FurniShop.png";
const NavbarComponent: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-grayCstm">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <Link className="block text-teal-600" to="/">
              <span className="sr-only">Home</span>
              <img src={logo} alt="logo" width={"60%"} />
            </Link>
          </div>

          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <Link
                    className="text-white transition hover:text-white/75"
                    to="/"
                  >
                    Home
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-white transition hover:text-white/75"
                    to="/about"
                  >
                    About
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-white transition hover:text-white/75"
                    to="/features"
                  >
                    Features
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-white transition hover:text-white/75"
                    to="/contact"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavbarComponent;
