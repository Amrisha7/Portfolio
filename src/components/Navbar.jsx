import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white dark:bg-black bg-opacity-80 text-black dark:text-white shadow-md z-50 transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-purple-500 dark:text-purple-700">
          Portfolio
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 items-center">
          <li><a href="#home" className="hover:text-purple-300 dark:hover:text-purple-500 transition">Home</a></li>
          <li><a href="#about" className="hover:text-purple-300 dark:hover:text-purple-500 transition">About</a></li>
          <li><a href="#resume" className="hover:text-purple-300 dark:hover:text-purple-500 transition">Resume</a></li>
          <li><a href="#projects" className="hover:text-purple-300 dark:hover:text-purple-500 transition">Projects</a></li>
          <li><a href="#skills" className="hover:text-purple-300 dark:hover:text-purple-500 transition">Skills</a></li>
          <li><a href="#contact" className="hover:text-purple-300 dark:hover:text-purple-500 transition">Contact</a></li>
          <li><ThemeToggle /></li>
        </ul>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-purple-500 dark:text-purple-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {/* Hamburger / Close Icon */}
          {isOpen ? (
            <span className="text-2xl">&times;</span>  // Close "X"
          ) : (
            <span className="text-2xl">&#9776;</span> // Hamburger
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col items-center space-y-4 py-6 bg-white dark:bg-black bg-opacity-95 shadow-md">
          <li><a href="#home" onClick={() => setIsOpen(false)}>Home</a></li>
          <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
          <li><a href="#resume" onClick={() => setIsOpen(false)}>Resume</a></li>
          <li><a href="#projects" onClick={() => setIsOpen(false)}>Projects</a></li>
          <li><a href="#skills" onClick={() => setIsOpen(false)}>Skills</a></li>
          <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
          <li><ThemeToggle /></li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
