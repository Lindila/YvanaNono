import { useState, useEffect } from 'react';

export default function Footer() {
  // State qui suit la présence de la classe 'dark' sur <html>
  const [darkMode, setDarkMode] = useState(
    document.documentElement.classList.contains('dark')
  );

  useEffect(() => {
    // Observer les changements de la classe 'dark'
    const observer = new MutationObserver(() => {
      setDarkMode(document.documentElement.classList.contains('dark'));
    });

    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    return () => observer.disconnect();
  }, []);

  return (
    <footer
      className="transition-colors duration-300 py-8 mt-16 shadow-inner"
      style={{
        backgroundColor: darkMode ? '#111827' : '#f3f4f6', // gray-900 / gray-100
        color: darkMode ? '#f3f4f6' : '#111827',           // texte principal
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p
          className="text-sm md:text-base transition-colors duration-300"
          style={{ color: darkMode ? '#d1d5db' : '#374151' }} // texte secondaire gray-300 / gray-700
        >
          © {new Date().getFullYear()} Yvana Nono. Tous droits réservés.
        </p>

        <div className="flex gap-4">
          {['GitHub', 'LinkedIn', 'Twitter'].map((name) => (
            <a
              key={name}
              href="#"
              className="transition-colors duration-300 hover:text-cyan-400"
              style={{ color: darkMode ? '#f3f4f6' : '#111827' }}
            >
              {name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
