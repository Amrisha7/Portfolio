import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react"; 

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  // Load initial theme from localStorage or default to light
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  // Toggle theme
  const toggleTheme = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 dark:from-yellow-400 dark:to-orange-400 rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
      aria-label="Toggle Theme"
    >
      {darkMode ? <Moon className="w-6 h-6 text-white" /> : <Sun className="w-6 h-6 text-yellow-300" />}
    </button>
  );
}
