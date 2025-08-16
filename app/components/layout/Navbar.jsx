"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FaHeart, FaShoppingCart, FaSignOutAlt, FaUser } from "react-icons/fa";
import DarkModeToggle from "../ui/DarkModeToggle";
import { Button } from "../ui/button";
import { getAuth, signOut } from "firebase/auth";

const auth = getAuth();

const handleLogout = () => {
  signOut(auth)
    .then(() => {
      console.log("User signed out successfully");
      // هنا ممكن تعمله Redirect مثلاً للصفحة الرئيسية أو login
    })
    .catch((error) => {
      console.error("Error signing out: ", error);
    });
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showDesktopMenu, setShowDesktopMenu] = useState(false);

  // Detect screen width on mount and on resize
  useEffect(() => {
    const checkScreenSize = () => {
      if (typeof window !== "undefined") {
        setShowDesktopMenu(window.innerWidth >= 768); // md = 768px
      }
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  return (
    // <nav className="bg-background border-b border-border text-foreground fixed top-0 w-full z-50"> //for sticky navbar
    <nav className="bg-background border-b border-border text-foreground ">
      <div className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between p-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <span className="text-2xl font-semibold">Exclusive</span>
        </Link>

        {/* Desktop nav links + search bar */}
        {showDesktopMenu && (
          <div className="flex items-center gap-6">
            <ul className="flex space-x-6 font-medium">
              <li>
                <Link href="/" className="hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary">
                  About
                </Link>
              </li>
              <li>
                <Link href="/signup" className="hover:text-primary">
                  Sign Up
                </Link>
              </li>
            </ul>
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 rounded-lg bg-muted text-foreground border border-border focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <svg
                className="w-10 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                fill="none"
                viewBox="0 0 20 20"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
          </div>
        )}

        {/* Right side */}
        <div className="flex items-center gap-4 mt-3">
          <Link href="/wishlist" className="flex items-center ">
            <button
              className="p-2 rounded-full bg-muted text-foreground hover:text-background hover:bg-foreground transition-all cursor-pointer"
              aria-label="Favorites"
            >
              <FaHeart size={18} />
            </button>
          </Link>
          <Link href="/cart" className="flex items-center ">
            <button
              className="p-2 rounded-full bg-muted text-foreground hover:text-background hover:bg-foreground transition-all cursor-pointer"
              aria-label="Cart"
            >
              <FaShoppingCart size={18} />
            </button>
          </Link>
          <Link href="/account" className="flex items-center ">
            <button
              className="p-2 rounded-full bg-muted text-foreground hover:text-background hover:bg-foreground transition-all cursor-pointer"
              aria-label="Cart"
            >
              <FaUser size={18} />
            </button>
          </Link>
          <button
            className="p-2 rounded-full bg-muted text-foreground hover:text-background hover:bg-foreground transition-all cursor-pointer"
            aria-label="Cart"
            onClick={handleLogout}
          >
            <FaSignOutAlt size={18} />
          </button>
          <DarkModeToggle />

          {/* Toggle menu only on mobile */}
          {!showDesktopMenu && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg
                className="w-6 h-6 md:hidden"
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
          )}
        </div>

        {/* Mobile menu (only shown when open) */}
        {!showDesktopMenu && isOpen && (
          <div className="w-full mt-4">
            <ul className="flex flex-col space-y-2 font-medium mb-4">
              <li>
                <Link href="/" className="block py-2 px-4 hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="block py-2 px-4 hover:text-primary"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="block py-2 px-4 hover:text-primary"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/signup"
                  className="block py-2 px-4 hover:text-primary"
                >
                  Sign Up
                </Link>
              </li>
            </ul>
            <div className="relative px-4">
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-10 pr-4 py-2 rounded-lg bg-muted text-foreground border border-border focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <svg
                className="w-5 h-5 absolute left-7 top-[50%] transform -translate-y-1/2 text-gray-400"
                fill="none"
                viewBox="0 0 20 20"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
