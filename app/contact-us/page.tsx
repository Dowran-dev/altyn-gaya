'use client';
import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Send, Phone, MapPin, Mail, Instagram, Youtube, MessageCircle } from 'lucide-react';

const ContactUsPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
    
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setFormSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Contact Us | Tide</title>
        <meta name="description" content="Get in touch with Tide customer support" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto max-w-6xl px-4 py-8">
        <div className="py-4">
          <div className="text-xs text-blue-800 font-light mt-2">
            <Link href="/">Home</Link> / Contact Us
          </div>
        </div>

        <div className="my-8">
          <h1 className="text-4xl md:text-5xl font-light text-orange-500">
            Contact <span className="font-bold">Us</span>
          </h1>
          <p className="text-blue-800 mt-4 max-w-3xl">
            Have questions about our products or need assistance? We&apos;re here to help! Fill out the form below or reach out through one of our social channels.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 my-12">
          <div className="w-full lg:w-2/3">
            <div className="bg-white rounded-lg p-6 md:p-8 shadow-md border border-gray-100">
              <h2 className="text-2xl text-blue-800 font-bold mb-6">Send Us a Message</h2>
              
              {formSubmitted ? (
                <div className="bg-green-100 text-green-800 p-4 rounded-md mb-6">
                  Thank you for your message! Our team will get back to you shortly.
                </div>
              ) : null}
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-blue-800 mb-2">Your Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-blue-800 mb-2">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                      required
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-blue-800 mb-2">Subject</label>
                  <select 
                    id="subject" 
                    name="subject" 
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="product-inquiry">Product Inquiry</option>
                    <option value="customer-support">Customer Support</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-blue-800 mb-2">Your Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={6} 
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    required
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="bg-orange-500 text-white font-bold text-lg px-8 py-3 rounded-full hover:bg-orange-600 transition-colors flex items-center"
                >
                  Send Message
                  <Send className="ml-2 h-5 w-5" />
                </button>
              </form>
            </div>
          </div>
          
          <div className="w-full lg:w-1/3">
            <div className="bg-blue-800 text-white rounded-lg p-6 md:p-8 shadow-md h-full">
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-orange-500 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Phone</h3>
                    <p className="mt-1">1-800-879-8433</p>
                    <p className="text-sm text-blue-200 mt-2">Monday - Friday: 9am - 6pm EST</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-orange-500 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Email</h3>
                    <p className="mt-1">support@tide.com</p>
                    <p className="text-sm text-blue-200 mt-2">We&apos;ll respond within 24 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-orange-500 p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Office</h3>
                    <p className="mt-1">One Procter & Gamble Plaza</p>
                    <p>Cincinnati, OH 45202</p>
                  </div>
                </div>
                
                <div className="pt-6">
                  <h3 className="font-bold text-lg mb-4">Connect With Us</h3>
                  <div className="flex space-x-4">
                    <a href="https://www.instagram.com/tidelaundry/" target="_blank" rel="noopener noreferrer" className="bg-white p-3 rounded-full text-blue-800 hover:bg-orange-500 hover:text-white transition-colors">
                      <Instagram className="h-6 w-6" />
                    </a>
                    <a href="https://www.youtube.com/user/tide" target="_blank" rel="noopener noreferrer" className="bg-white p-3 rounded-full text-blue-800 hover:bg-orange-500 hover:text-white transition-colors">
                      <Youtube className="h-6 w-6" />
                    </a>
                    <a href="https://wa.me/18008798433" target="_blank" rel="noopener noreferrer" className="bg-white p-3 rounded-full text-blue-800 hover:bg-orange-500 hover:text-white transition-colors">
                      <MessageCircle className="h-6 w-6" />
                    </a>
                    <a href="https://t.me/tidelaundry" target="_blank" rel="noopener noreferrer" className="bg-white p-3 rounded-full text-blue-800 hover:bg-orange-500 hover:text-white transition-colors">
                      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm-3.5 12.5l11-6.5-6.5 11v-4.5l-4.5 4.5v-4.5z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="my-16">
          <h2 className="text-3xl text-blue-800 font-bold mb-8">Frequently Asked Questions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl text-blue-800 font-bold mb-3">How do I find the right Tide product?</h3>
              <p className="text-blue-800">Visit our shop page to browse all Tide products or use our Product Selector tool to get personalized recommendations based on your laundry needs.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl text-blue-800 font-bold mb-3">Where can I buy Tide products?</h3>
              <p className="text-blue-800">Tide products are available at most major retailers. Use our &quot;Find Retailers&quot; button on any product page to locate stores near you.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl text-blue-800 font-bold mb-3">How do I remove specific stains?</h3>
              <p className="text-blue-800">Check out our Stain Removal Guide for step-by-step instructions on removing specific stains with Tide products.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl text-blue-800 font-bold mb-3">What&apos;s the difference between Tide PODS and liquid?</h3>
              <p className="text-blue-800">Tide PODS offer pre-measured convenience while liquid detergents allow you to adjust the amount based on load size and soil level. Both provide Tide&apos;s superior cleaning power.</p>
            </div>
          </div>
        </div>
      </main>
      
      <div className="bg-blue-800 py-12">
        <div className="container mx-auto max-w-6xl px-4 text-center">
          <h2 className="text-3xl text-white font-bold mb-6">Need More Help?</h2>
          <p className="text-blue-100 mb-8 max-w-3xl mx-auto">Our customer support team is always ready to assist you with any questions or concerns about Tide products.</p>
          <button className="bg-orange-500 text-white font-bold text-lg px-8 py-3 rounded-full hover:bg-orange-600 transition-colors">
            Browse Our Help Center
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;