import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  return (
    <div className={`min-h-screen flex flex-col ${isDarkMode ? 'bg-primary-bg-dark' : 'bg-primary-bg'}`}>
      <Navbar setIsDarkMode={setIsDarkMode} />
      <main className="flex-grow p-4 sm:p-8 text-text-primary dark:text-text-secondary">
        <h1 className="text-3xl sm:text-4xl mb-3 sm:mb-4">Welcome to BookAI</h1>
        <p className="text-base sm:text-lg">
          Unleash the power of AI to create captivating books in minutes. Download, distribute wherever you want, and generate unlimited free books.
        </p>
        {/* Add more sections/content as needed */}
      </main>
    </div>
  );
}

export default App;
