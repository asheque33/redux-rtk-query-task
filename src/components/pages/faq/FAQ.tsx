import { useState } from 'react';
import FAQList from './FAQList';

const FAQ = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div
      className={`${isDarkMode ? 'dark' : ''} min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300`}
    >
      <div className='px-4'>
        <FAQList isDarkMode={isDarkMode} />
      </div>
    </div>
  );
};

export default FAQ;
