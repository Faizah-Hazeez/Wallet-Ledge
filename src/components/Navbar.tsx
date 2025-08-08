import { useState } from "react";
import { menuItems } from "../data/MenuItem";
import { useTransactionContext } from "../context/TransactionContext";

function Navbar() {
  const { searchQuery, setSearchQuery } = useTransactionContext();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen((isOpen) => !isOpen);
  }

  function toggleSearch() {
    setIsSearchOpen((isSearchOpen) => {
      if (isSearchOpen) setSearchQuery("");
      return !isSearchOpen;
    });
    if (isMenuOpen) {
      setIsSearchOpen(false);
    }
  }
  return (
    <header className="flex justify-between lg:py-2 lg:px-10 px-4 py-3">
      <div className="flex items-center lg:gap-6 gap-2">
        <button
          type="button"
          className="relative"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          onClick={toggleMenu}
        >
          <img src="/menu.svg" alt="hamburger-menu" />
        </button>
        <img src="/logo.svg" alt="Fintech-Logo" />
      </div>
      <nav
        className="flex items-center lg:gap-6 gap-2"
        aria-label="Main navigation"
      >
        <div
          className={`${
            isSearchOpen
              ? "border lg:pl-4 pl-2 pr-2 py-1 rounded-full border-[#437D8E] shadow "
              : ""
          } flex items-center`}
        >
          <input
            type="text"
            placeholder={`${isSearchOpen ? "Search" : ""}`}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={`${
              isSearchOpen ? "lg:w-48 w-30 opacity-100" : "w-0 opacity-0"
            } transition-all duration-300 ease-in-out overflow-hidden ml-2 outline-0`}
          />
          <button
            type="button"
            aria-label={isSearchOpen ? "Close search" : "Open search"}
            onClick={toggleSearch}
          >
            <img
              src="/search.svg"
              alt="search-icon"
              aria-hidden="true"
              className={`${isSearchOpen ? "w-4 h-4" : ""} `}
            />{" "}
          </button>
        </div>
        <a href="#">
          <img src="/app-grid.svg" alt="app-grid" aria-hidden="true" />
        </a>
        <a href="#">
          <img
            src="/avatar.png"
            alt="female"
            className="lg:w-10 lg:h-10 w-7 h-7"
            aria-hidden="true"
          />
        </a>
      </nav>

      {/* MOBILE VIEW */}

      <nav
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } fixed lg:hidden bg-white  w-1/2  shadow h-screen top-0 left-0`}
      >
        <button
          type="button"
          className="absolute right-2 top-2 shadow px-2 cursor-pointer hover:scale-105 transition-all"
          aria-label="Toggle close menu"
          onClick={toggleMenu}
        >
          {" "}
          X
        </button>
        <ul className="list-none p-4 mt-8">
          {menuItems.map((item, index) => (
            <li key={index} className="list-none">
              <a
                href={item.href}
                className="block mb-1 px-4 py-1 font-public text-[15px]  hover:bg-[rgb(56,103,118,0.16)] hover:text-[#3a6c7b] rounded-full focus:ouline-none focus:ring-2 focus:ring-[#3a6979] text-[#1B2528]"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
