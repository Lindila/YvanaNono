import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('theme') === 'dark');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav
  className="fixed w-full z-50 transition-colors shadow-md"
  style={{ backgroundColor: darkMode ? '#111827' : '#f3f4f6' }} // gray-900 / gray-100
>

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <h1 className="text-2xl font-extrabold text-cyan-400">Mon Portfolio</h1>

        {/* Desktop */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="font-semibold text-gray-900 dark:text-gray-100 hover:text-cyan-400 transition-colors"style={{ color: darkMode ? '#f3f4f6' : '#111827' }}>Home</Link>
          <Link to="/about" className="font-semibold text-gray-900 dark:text-gray-100 hover:text-cyan-400 transition-colors"style={{ color: darkMode ? '#f3f4f6' : '#111827' }}>About</Link>
          <Link to="/projects" className="font-semibold text-gray-900 dark:text-gray-100 hover:text-cyan-400 transition-colors"style={{ color: darkMode ? '#f3f4f6' : '#111827' }}>Projects</Link>
          <Link to="/contact" className="font-semibold text-gray-900 dark:text-gray-100 hover:text-cyan-400 transition-colors"style={{ color: darkMode ? '#f3f4f6' : '#111827' }}>Contact</Link>

          <button
            onClick={() => setDarkMode(prev => !prev)}
            className="ml-4 px-3 py-1 border border-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-gray-900 dark:hover:text-gray-100 transition"style={{ color: darkMode ? '#f3f4f6' : '#111827' }}
          >
            {darkMode ? '☀️ Mode clair' : '🌙 Mode sombre'}
          </button>
        </div>

        {/* Mobile burger */}
        <button
          className="md:hidden text-cyan-400 focus:outline-none"
          onClick={() => setMenuOpen(prev => !prev)}
          aria-label="Menu"
        >
          <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M3 6h18M3 12h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-gray-100 dark:bg-gray-900 px-6 pb-6 pt-4 space-y-4 transition-colors">
          <Link onClick={handleLinkClick} to="/" className="block text-gray-900 dark:text-gray-100 hover:text-cyan-400 transition-colors">Home</Link>
          <Link onClick={handleLinkClick} to="/about" className="block text-gray-900 dark:text-gray-100 hover:text-cyan-400 transition-colors">About</Link>
          <Link onClick={handleLinkClick} to="/projects" className="block text-gray-900 dark:text-gray-100 hover:text-cyan-400 transition-colors">Projects</Link>
          <Link onClick={handleLinkClick} to="/contact" className="block text-gray-900 dark:text-gray-100 hover:text-cyan-400 transition-colors">Contact</Link>

          <button
            onClick={() => setDarkMode(prev => !prev)}
            className="mt-2 px-3 py-1 border border-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-gray-900 dark:hover:text-gray-100 transition w-full text-left"
          >
            {darkMode ? '☀️ Mode clair' : '🌙 Mode sombre'}
          </button>
        </div>
      )}
    </nav>
  );
}
