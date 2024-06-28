"use client"
import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <header className="fixed top-0 left-0 right-0 bg-white shadow-black shadow-sm z-50">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="md:flex md:items-center md:gap-12">
              <a className="block" href="/">
                <Image
                  src="/lighthouselogo.png"
                  width={60}
                  height={50}
                  alt="logo"
                />
              </a>
            </div>

            <div className="hidden md:block">
              <nav aria-label="Global">
                <ul className="flex items-center gap-8 text-sm">
                  <li>
                    <a
                      className="text-gray-600 text-lg font-semibold hover:text-blue-600 transition duration-300 hover:bg-zinc-400 rounded-md p-2"
                      href="/"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-600 text-lg font-semibold hover:text-blue-600 transition duration-300 hover:bg-zinc-400 rounded-md p-2"
                      href="about"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-600 text-lg font-semibold hover:text-blue-600 transition duration-300 hover:bg-zinc-400 rounded-md p-2"
                      href="projects"
                    >
                      Projects
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-600 text-lg font-semibold hover:text-blue-600 transition duration-300 hover:bg-zinc-400 rounded-md p-2"
                      href="blog"
                    >
                      Blog
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="flex items-center gap-8">
              <div className="sm:flex sm:gap-4">
                <a
                  className="rounded-md bg-blue-600 px-5 py-2.5 text-sm font-medium text-white shadow-md transition duration-300 hover:bg-blue-700"
                  href="docs"
                >
                  Docs
                </a>
              </div>

              <div className="block md:hidden">
                <Button
                  className="rounded-md bg-gray-100 p-2 text-gray-600 transition duration-300 hover:text-gray-800"
                  onClick={handleMenuToggle}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </Button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            className={`${
              isMenuOpen ? "block" : "hidden"
            } md:hidden mt-2 bg-white shadow-md rounded-lg p-4`}
          >
            <ul className="flex flex-col gap-4 text-sm">
              <li>
                <a
                  className="text-gray-600 font-semibold hover:text-blue-600 transition duration-300"
                  href="/"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className="text-gray-600 font-semibold hover:text-blue-600 transition duration-300"
                  href="about"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  className="text-gray-600 font-semibold hover:text-blue-600 transition duration-300"
                  href="projects"
                >
                  Projects
                </a>
              </li>
              
              <li>
                <a
                  className="text-gray-600 font-semibold hover:text-blue-600 transition duration-300"
                  href="blog"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>

      <div className="mt-10"></div>
    </div>
  );
};

export default Navbar;
