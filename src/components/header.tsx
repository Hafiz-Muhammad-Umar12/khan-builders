"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/60 backdrop-blur-md shadow-lg border-b border-gray-200"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center py-3 transition-all duration-300">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="relative w-44 h-14 transition-all duration-300">
            <Image
              src="/kblogo.png"
              alt="Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>

        {/* ✅ Updated Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 font-bold text-1xl">
          {["/", "/about", "/services", "/projects", "/contact", "/signin"].map(
            (path, index) => (
              <Link
                key={index}
                href={path}
                className="text-black hover:text-yellow-500 transition duration-200"
              >
                {path === "/"
                  ? "Home"
                  : path.replace("/", "").charAt(0).toUpperCase() + path.slice(2)}
              </Link>
            )
          )}

          <Link
            href="/signup"
            className="ml-2 px-5 py-2 rounded-full bg-black text-white hover:bg-yellow-500 shadow-md hover:shadow-lg transition duration-300 text-lg"
          >
            Sign Up
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="md:hidden text-white">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* ✅ Updated Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-6 py-4 bg-white/90 backdrop-blur-md rounded-b-lg shadow-lg space-y-3">
          {["/", "/about", "/services", "/projects", "/contact", "/signin"].map(
            (path, index) => (
              <Link
                key={index}
                href={path}
                className="block text-black font-bold text-2xl hover:text-yellow-500 transition duration-200"
              >
                {path === "/"
                  ? "Home"
                  : path.replace("/", "").charAt(0).toUpperCase() + path.slice(2)}
              </Link>
            )
          )}
          <Link
            href="/signup"
            className="block w-full text-center px-4 py-2 rounded-full bg-black text-white shadow-md hover:shadow-lg transition duration-300 text-lg"
          >
            Sign Up
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
