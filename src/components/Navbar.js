import React from 'react';

function Navbar({ setIsDarkMode }) {
  const [isDarkModeLocal, setIsDarkModeLocal] = React.useState(false);

  React.useEffect(() => {
    setIsDarkMode(isDarkModeLocal);
  }, [isDarkModeLocal, setIsDarkMode]);

  return (
    <nav className={`flex items-center justify-between p-4 sm:p-6 ${isDarkModeLocal ? 'bg-primary-bg-dark' : 'bg-primary-bg'}`}>
      <div className="flex items-center">
      <img src="/image.jpg" alt="Logo" className="h-6 w-6 sm:h-8 sm:w-8 mr-2 sm:mr-3 rounded-full" />

        <span className="text-lg sm:text-xl font-bold text-text-primary">BookAI</span>
      </div>
      <ul className="hidden sm:flex space-x-4 md:space-x-6 text-text-primary">
        <li><a href="#features" className="hover:text-text-secondary">Features</a></li>
        <li><a href="#how-it-works" className="hover:text-text-secondary">How It Works</a></li>
        <li><a href="#roadmap" className="hover:text-text-secondary">Roadmap</a></li>
        <li><a href="#api" className="hover:text-text-secondary">API</a></li>
        <li><a href="#price" className="hover:text-text-secondary">Price</a></li>
        <li><a href="#models" className="hover:text-text-secondary">Models</a></li>
      </ul>
      <div className="flex items-center space-x-2 sm:space-x-4">
        <button
          onClick={() => setIsDarkModeLocal(prev => !prev)}
          aria-label={isDarkModeLocal ? "Switch to Light Mode" : "Switch to Dark Mode"}
          className="focus:outline-none text-text-primary"
        >
          {isDarkModeLocal ? 'Light Mode' : 'Dark Mode'}
        </button>
        <button
          onClick={() => { /* handle login/signup */ }}
          className="px-4 py-2 sm:px-6 sm:py-3 bg-accent text-white rounded-md hover:bg-blue-700 transition duration-300"
        >
          Login / Sign Up
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
