'use client';
import React from 'react';
import Link from 'next/link';
import FAQSection from '../components/FAQSection';


const FAQPage: React.FC = () => {

  return (
    <div className={"min-h-screen transition-colors duration-300 bg-white text-blue-800"}>
      {/* Main Content */}
      <main className="container mx-auto max-w-6xl px-4">
        {/* Breadcrumb */}
        <div className="py-4">
          <div className={`text-xs text-blue-800 font-light mt-6`}>
            <Link href="/" className={"text-blue-800 hover:text-orange-500"}>Home</Link> / FAQ
          </div>
        </div>
      </main>

      <FAQSection />
    </ div>
  );
};

export default FAQPage;