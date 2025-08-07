import { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen((isOpen) => !isOpen);
  }

  function toggleSearch() {
    setIsSearchOpen((isSearchOpen) => !isSearchOpen);
    if (isMenuOpen) {
      setIsSearchOpen(false);
    }
  }
  return (
    <header className="flex justify-between py-2 lg:px-10 px-2">
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
              ? "border pl-4 pr-2 py-1 rounded-full border-[#437D8E] shadow"
              : ""
          } flex items-center`}
        >
          <input
            type="text"
            placeholder={`${isSearchOpen ? "Search" : ""}`}
            className={`${
              isSearchOpen ? "visible" : "hidden"
            } w-full border-0 outline-none`}
          />
          <a href="#" onClick={toggleSearch}>
            <img
              src="/search.svg"
              alt="search-icon"
              aria-hidden="true"
              className={`${isSearchOpen ? "w-5 h-5" : ""} `}
            />{" "}
          </a>
        </div>
        <a href="#">
          <img src="/app-grid.svg" alt="app-grid" aria-hidden="true" />
        </a>
        <a href="#">
          <img
            src="/avatar.png"
            alt="search-icon"
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
        <ul className="list-none p-8 space-y-6 mt-2">
          <li>
            <a href="#">Dashboard</a>
          </li>
          <li>
            <a href="#">Transaction</a>
          </li>
          <li>
            <a href="#">Reports</a>
          </li>
          <li>
            <a href="#">Settings</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
