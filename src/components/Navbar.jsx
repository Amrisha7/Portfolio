function Navbar({ darkMode, setDarkMode }) {
    return (
      <nav className="fixed top-0 left-0 w-full bg-white dark:bg-black bg-opacity-80 text-black dark:text-white shadow-md z-50 transition-colors duration-500">
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-purple-500 dark:text-purple-700">
            Portfolio
          </h1>
  
          <ul className="hidden md:flex space-x-6 items-center">
            <li><a href="#home" className="hover:text-purple-300 dark:hover:text-purple-500 transition">Home</a></li>
            <li><a href="#about" className="hover:text-purple-300 dark:hover:text-purple-500 transition">About</a></li>
            <li><a href="#resume" className="hover:text-purple-300 dark:hover:text-purple-500 transition">Resume</a></li>
            <li><a href="#projects" className="hover:text-purple-300 dark:hover:text-purple-500 transition">Projects</a></li>
            <li><a href="#skills" className="hover:text-purple-300 dark:hover:text-purple-500 transition">Skills</a></li>
            <li><a href="#contact" className="hover:text-purple-300 dark:hover:text-purple-500 transition">Contact</a></li>
  
            {/* Dark/Light Toggle */}
            <li>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="ml-4 px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded text-black dark:text-white transition-colors duration-300"
              >
                {darkMode ? 'Light Mode' : 'Dark Mode'}
              </button>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
  
  export default Navbar;
  