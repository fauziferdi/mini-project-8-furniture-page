import React from "react";
import { Link } from "react-router-dom";

const FooterComponent: React.FC = () => {
  return (
    <footer className="bg-gray-900">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <strong className="text-xl text-white sm:text-xl">FurniShop</strong>
        </div>
        <hr className="my-8 border-gray-200" />
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5">
          <div className="text-center sm:text-left">
            <p className="text-lg font-medium text-white">Our Products</p>

            <ul className="mt-8 space-y-4 text-sm">
              <li>
                <Link
                  className="text-white transition hover:text-white/75"
                  to="/products/support-suite"
                >
                  The Support Suite
                </Link>
              </li>

              <li>
                <Link
                  className="text-white transition hover:text-white/75"
                  to="/products/sales-suite"
                >
                  The Sales Suite
                </Link>
              </li>

              <li>
                <Link
                  className="text-white transition hover:text-white/75"
                  to="/support"
                >
                  Support
                </Link>
              </li>

              <li>
                <Link
                  className="text-white transition hover:text-white/75"
                  to="/guide"
                >
                  Guide
                </Link>
              </li>
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <p className="text-lg font-medium text-white">Top Features</p>

            <ul className="mt-8 space-y-4 text-sm">
              <li>
                <Link
                  className="text-white transition hover:text-white/75"
                  to="/features/ticketing-system"
                >
                  Ticketing System
                </Link>
              </li>

              <li>
                <Link
                  className="text-white transition hover:text-white/75"
                  to="/features/knowledge-base"
                >
                  Knowledge Base
                </Link>
              </li>

              <li>
                <Link
                  className="text-white transition hover:text-white/75"
                  to="/features/community-forums"
                >
                  Community Forums
                </Link>
              </li>

              <li>
                <Link
                  className="text-white transition hover:text-white/75"
                  to="/features/help-desk-software"
                >
                  Help Desk Software
                </Link>
              </li>
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <p className="text-lg font-medium text-white">Resources</p>

            <ul className="mt-8 space-y-4 text-sm">
              <li>
                <Link
                  className="text-white transition hover:text-white/75"
                  to="/resources/product-support"
                >
                  Product Support
                </Link>
              </li>

              <li>
                <Link
                  className="text-white transition hover:text-white/75"
                  to="/resources/request-demo"
                >
                  Request Demo
                </Link>
              </li>

              <li>
                <Link
                  className="text-white transition hover:text-white/75"
                  to="/resources/library"
                >
                  Library
                </Link>
              </li>

              <li>
                <Link
                  className="text-white transition hover:text-white/75"
                  to="/resources/blog"
                >
                  Peoplepower Blog
                </Link>
              </li>
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <p className="text-lg font-medium text-white">Company</p>

            <ul className="mt-8 space-y-4 text-sm">
              <li>
                <Link
                  className="text-white transition hover:text-white/75"
                  to="/company/about"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  className="text-white transition hover:text-white/75"
                  to="/company/press"
                >
                  Press
                </Link>
              </li>
              <li>
                <Link
                  className="text-white transition hover:text-white/75"
                  to="/company/investors"
                >
                  Investors
                </Link>
              </li>
              <li>
                <Link
                  className="text-white transition hover:text-white/75"
                  to="/company/events"
                >
                  Events
                </Link>
              </li>
            </ul>
          </div>
          <div className="text-center sm:text-left">
            <p className="text-lg font-medium text-white">Favourite Things</p>

            <ul className="mt-8 space-y-4 text-sm">
              <li>
                <Link
                  className="text-white transition hover:text-white/75"
                  to="/favourites/enterprise"
                >
                  For Enterprise
                </Link>
              </li>

              <li>
                <Link
                  className="text-white transition hover:text-white/75"
                  to="/favourites/startups"
                >
                  For Startups
                </Link>
              </li>
              <li>
                <Link
                  className="text-white transition hover:text-white/75"
                  to="/favourites/benchmark"
                >
                  For Benchmark
                </Link>
              </li>
              <li>
                <Link
                  className="text-white transition hover:text-white/75"
                  to="/favourites/small-business"
                >
                  For Small Business
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-10 text-white">
          <p>© NameBrand 2022 - All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
