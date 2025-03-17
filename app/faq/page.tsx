'use client';
import React, { useState } from 'react';
import FAQSection from '../components/FAQSection';
import { Search } from 'lucide-react';


const FAQPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-blue-950 text-white' : 'bg-white text-blue-800'}`}>
      {/* Main Content */}
      <main className="container mx-auto max-w-6xl px-4">
        {/* Breadcrumb */}
        <div className="py-4">
          <div className={`text-xs text-blue-800 font-light mt-6`}>
            <a href="/" className={"text-blue-800 hover:text-orange-500"}>Home</a> / FAQ
          </div>
        </div>
      </main>

      <FAQSection />
    </ div>
  );
};

export default FAQPage;