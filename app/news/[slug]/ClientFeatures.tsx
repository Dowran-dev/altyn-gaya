"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Search, X, Menu } from "lucide-react";

export default function ClientFeatures({
  children,
}: {
  children: React.ReactNode,
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [readProgressPercent, setReadProgressPercent] = useState(0);

  // Dark mode effect
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  // Scroll progress effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.offsetHeight;
      const winHeight = window.innerHeight;
      const scrollPercent = scrollTop / (docHeight - winHeight);
      setReadProgressPercent(scrollPercent * 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? "bg-blue-950 text-white" : "bg-white text-blue-800"
      }`}
    >
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 z-50">
        <div
          className="h-full bg-orange-500"
          style={{ width: `${readProgressPercent}%` }}
        >
        </div>
      </div>
      {/* Modern Navbar */}
      <nav
        className={`sticky top-0 z-40 backdrop-blur-lg ${
          darkMode ? "bg-blue-950/80" : "bg-white/80"
        } border-b ${darkMode ? "border-blue-800" : "border-gray-100"}`}
      >
        <div className="container mx-auto max-w-6xl px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="md:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className={`p-2 rounded-full ${
                    darkMode ? "hover:bg-blue-800" : "hover:bg-gray-100"
                  }`}
                >
                  <Menu
                    className={`h-6 w-6 ${
                      darkMode ? "text-white" : "text-blue-800"
                    }`}
                  />
                </button>
              </div>
              <Link href="/">
                <span className="flex items-center">
                  <div
                    className="h-8 w-8 rounded-full bg-orange-500 mr-2 flex items-center justify-center"
                  >
                    <span className="text-white font-bold"> T </span>
                  </div>
                  <span
                    className={`font-bold text-xl ${
                      darkMode ? "text-white" : "text-blue-800"
                    }`}
                  >
                    Tide
                  </span>
                </span>
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <Link
                href="/products"
                className={`${
                  darkMode
                    ? "text-white hover:text-orange-300"
                    : "text-blue-800 hover:text-orange-500"
                } transition-colors`}
              >
                Products
              </Link>
              <Link
                href="/how-to-wash"
                className={`${
                  darkMode
                    ? "text-white hover:text-orange-300"
                    : "text-blue-800 hover:text-orange-500"
                } transition-colors`}
              >
                How to Wash
              </Link>
              <Link
                href="/sustainability"
                className={`${
                  darkMode
                    ? "text-white hover:text-orange-300"
                    : "text-blue-800 hover:text-orange-500"
                } transition-colors`}
              >
                Sustainability
              </Link>
              <Link
                href="/whats-new"
                className={`${
                  darkMode ? "bg-blue-800 text-white" : "bg-orange-50 text-orange-500"
                } px-3 py-1 rounded-full font-medium`}
              >
                What&apos;s New {/* Fixed Line 136:22 */}
              </Link>
            </div>
            <div className="flex items-center">
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className={`p-2 rounded-full ${
                  darkMode ? "hover:bg-blue-800" : "hover:bg-gray-100"
                } mr-2`}
              >
                <Search
                  className={`h-5 w-5 ${
                    darkMode ? "text-white" : "text-blue-800"
                  }`}
                />
              </button>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-full ${
                  darkMode
                    ? "bg-blue-800 text-white"
                    : "bg-gray-100 text-blue-800"
                }`}
              >
                {darkMode ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          className={`fixed inset-0 z-40 ${
            darkMode ? "bg-blue-950" : "bg-white"
          }`}
        >
          <div className="flex justify-end p-4">
            <button onClick={() => setIsMenuOpen(false)} className="p-2">
              <X
                className={`h-6 w-6 ${
                  darkMode ? "text-white" : "text-blue-800"
                }`}
              />
            </button>
          </div>
          <div className="flex flex-col items-center space-y-6 p-8">
            <Link
              href="/products"
              className={`text-2xl font-medium ${
                darkMode ? "text-white" : "text-blue-800"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </Link>
            <Link
              href="/how-to-wash"
              className={`text-2xl font-medium ${
                darkMode ? "text-white" : "text-blue-800"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              How to Wash
            </Link>
            <Link
              href="/sustainability"
              className={`text-2xl font-medium ${
                darkMode ? "text-white" : "text-blue-800"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Sustainability
            </Link>
            <Link
              href="/whats-new"
              className={`text-2xl font-medium ${
                darkMode ? "text-white" : "text-blue-800"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              What&apos;s New {/* Fixed Line 247:20 */}
            </Link>
            <Link href="/shop-products" onClick={() => setIsMenuOpen(false)}>
              <button className="bg-orange-500 text-white font-bold text-lg px-6 py-3 rounded-full hover:bg-orange-600 transition-colors mt-6">
                Shop Tide Products
              </button>
            </Link>
          </div>
        </div>
      )}
      {/* Search Overlay */}
      {isSearchOpen && (
        <div
          className={`fixed inset-0 z-50 ${
            darkMode ? "bg-blue-950/95" : "bg-white/95"
          } backdrop-blur-md p-4 flex flex-col`}
        >
          <div className="flex justify-end mb-4">
            <button onClick={() => setIsSearchOpen(false)} className="p-2">
              <X
                className={`h-6 w-6 ${
                  darkMode ? "text-white" : "text-blue-800"
                }`}
              />
            </button>
          </div>
          <div
            className={`bg-transparent border-b-2 ${
              darkMode ? "border-blue-700" : "border-gray-300"
            } mb-8`}
          >
            <div className="flex items-center">
              <Search
                className={`h-6 w-6 ${
                  darkMode ? "text-white" : "text-blue-800"
                } mr-2`}
              />
              <input
                type="text"
                placeholder="Search articles, products, and guides..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`w-full py-3 px-2 text-xl outline-none ${
                  darkMode
                    ? "bg-transparent text-white placeholder-blue-400"
                    : "bg-transparent text-blue-800 placeholder-gray-400"
                }`}
                autoFocus
              />
            </div>
          </div>
          <div className="mt-4">
            <h3
              className={`text-lg font-medium mb-4 ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Popular Searches
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Stain removal",
                "Sustainable washing",
                "Cold water cleaning",
                "New formula",
                "How to use pods",
              ].map((term) => (
                <div
                  key={term}
                  onClick={() => setSearchQuery(term)}
                  className={`flex items-center p-3 rounded-lg cursor-pointer ${
                    darkMode ? "hover:bg-blue-900" : "hover:bg-gray-100"
                  }`}
                >
                  <Search
                    className={`h-4 w-4 ${
                      darkMode ? "text-gray-400" : "text-gray-500"
                    } mr-3`}
                  />
                  <span
                    className={darkMode ? "text-gray-200" : "text-gray-700"}
                  >
                    {term}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      {children}
    </div>
  );
}