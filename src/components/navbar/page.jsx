"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const links = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Our Story",
    path: "/ourStory",
  },
  {
    title: "Confession",
    path: "/confession",
  },
  {
    title: "Gallery",
    path: "/gallery",
  },
  {
    title: "Contact",
    path: "/contact",
  },
];

const NavPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-800 py-4 md:py-6 lg:py-8 sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link
              data-tooltip-id="my-tooltip"
              data-tooltip-content="Hello world!"
              href="/"
            >
              <Image
                src="/kiss-love-couple-clip-art-kiss.jpg"
                height={60}
                width={60}
                alt="logo"
                className="rounded rounded-full"
                title="Kiss me hardly"
              />
            </Link>
          </div>
          <div className="hidden md:block">
            <ul className="flex space-x-4">
              {links.map((link) => (
                <li key={link.title}>
                  <Link href={link.path}>
                    <div className="text-white hover:text-gray-300">
                      {link.title}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-gray-300 focus:outline-none"
            >
              {isMenuOpen ? "Close" : "Menu"}
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden">
            <ul className="mt-4">
              {links.map((link) => (
                <li key={link.title}>
                  <Link href={link.path}>
                    <div className="text-white hover:text-gray-300">
                      {link.title}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavPage;
