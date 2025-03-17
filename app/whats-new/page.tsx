'use client';
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, ArrowRight, Search, X, ArrowUpRight, Menu, Filter } from 'lucide-react';

interface NewsItem {
  id: number;
  title: string;
  category: string;
  date: string;
  summary: string;
  imageSrc: string;
  slug: string;
  featured?: boolean;
  readTime?: string;
}

// Enhanced news data with read time
const newsItems: NewsItem[] = [
  {
    id: 1,
    title: "Tide Launches New Formula with Enhanced Stain-Fighting Technology",
    category: "Product Updates",
    date: "February 15, 2025",
    summary: "Our latest innovation delivers 50% more stain-fighting power while using less water and energy.",
    imageSrc: "/api/placeholder/600/400",
    slug: "new-stain-fighting-formula",
    featured: true,
    readTime: "4 min"
  },
  {
    id: 2,
    title: "Tide Partners with Ocean Cleanup Initiative to Reduce Plastic Waste",
    category: "Sustainability",
    date: "February 10, 2025",
    summary: "Partnering with global organizations to remove 100 tons of plastic from oceans by 2026.",
    imageSrc: "/api/placeholder/600/400",
    slug: "ocean-cleanup-partnership",
    featured: true,
    readTime: "5 min"
  },
  {
    id: 3,
    title: "How to Remove Tough Winter Stains with Tide",
    category: "Tips & Tricks",
    date: "January 28, 2025",
    summary: "Expert advice on tackling mud, salt, and hot chocolate stains during the winter season.",
    imageSrc: "/api/placeholder/600/400",
    slug: "winter-stain-removal-guide",
    readTime: "3 min"
  },
  {
    id: 4,
    title: "Tide's New Sustainable Packaging Reduces Plastic by 30%",
    category: "Sustainability",
    date: "January 20, 2025",
    summary: "Our redesigned packaging uses recycled materials and requires less plastic overall.",
    imageSrc: "/api/placeholder/600/400",
    slug: "sustainable-packaging-launch",
    readTime: "4 min"
  },
  {
    id: 5,
    title: "Tide Named #1 in Customer Satisfaction for Third Year Running",
    category: "Awards",
    date: "January 12, 2025",
    summary: "Independent consumer survey ranks Tide highest in performance and value.",
    imageSrc: "/api/placeholder/600/400",
    slug: "customer-satisfaction-award",
    readTime: "2 min"
  },
  {
    id: 6,
    title: "Introducing Tide Professional for Commercial Laundry Services",
    category: "Product Updates",
    date: "December 15, 2024",
    summary: "New industrial-strength formula designed specifically for hotels, hospitals, and laundromats.",
    imageSrc: "/api/placeholder/600/400",
    slug: "tide-professional-launch",
    readTime: "3 min"
  }
];

type FilterOption = 'all' | 'product-updates' | 'sustainability' | 'tips-tricks' | 'awards';

const WhatsNewPage: React.FC = () => {
  const [filter, setFilter] = useState<FilterOption>('all');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFilterBarOpen, setIsFilterBarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  
  // Filter news items based on current filter selection and search query
  const filteredNews = newsItems.filter(item => {
    const matchesFilter = 
      filter === 'all' || 
      (filter === 'product-updates' && item.category === 'Product Updates') ||
      (filter === 'sustainability' && item.category === 'Sustainability') ||
      (filter === 'tips-tricks' && item.category === 'Tips & Tricks') ||
      (filter === 'awards' && item.category === 'Awards');
    
    const matchesSearch = searchQuery === '' || 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesFilter && matchesSearch;
  });

  // Featured news items for the hero section
  const featuredNews = newsItems.filter(item => item.featured);

  // Format filter option text for display
  const getFilterOptionText = (option: FilterOption): string => {
    switch (option) {
      case 'all': return 'All Updates';
      case 'product-updates': return 'Product Updates';
      case 'sustainability': return 'Sustainability';
      case 'tips-tricks': return 'Tips & Tricks';
      case 'awards': return 'Awards';
    }
  };

  // Toggle body class for dark mode
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setIsDropdownOpen(false);
    };
    
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  // Render a news card with modern design
  const renderNewsCard = (item: NewsItem) => (
    <div key={item.id} className={`bg-white dark:bg-blue-900 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group ${darkMode ? 'dark-card' : ''}`}>
      <div className="relative h-56 w-full overflow-hidden">
        <Image 
          src={item.imageSrc} 
          alt={item.title} 
          layout="fill" 
          objectFit="cover"
          className="transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-orange-500 text-sm font-semibold py-1 px-3 rounded-full bg-orange-50 dark:bg-orange-900/20">{item.category}</span>
          <div className="flex items-center text-gray-500 dark:text-gray-300 text-sm">
            <Calendar className="h-3 w-3 mr-1" />
            {item.date}
          </div>
        </div>
        <h3 className="text-blue-800 dark:text-white text-xl font-bold mb-3 line-clamp-2 group-hover:text-orange-500 dark:group-hover:text-orange-300 transition-colors">{item.title}</h3>
        <p className="text-blue-800/80 dark:text-blue-50/80 mb-4 text-sm line-clamp-3">{item.summary}</p>
        <div className="flex justify-between items-center">
          <span className="text-gray-500 dark:text-gray-300 text-xs flex items-center">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            {item.readTime} read
          </span>
          <Link href={`/news/${item.slug}`}>
            <span className="inline-flex items-center text-orange-500 font-semibold hover:text-orange-600 dark:text-orange-300 dark:hover:text-orange-200">
              Read More <ArrowUpRight className="ml-1 h-4 w-4" />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );

  // Featured card with glass morphism
  const renderFeaturedCard = (item: NewsItem) => (
    <div key={item.id} className={`relative bg-white/90 dark:bg-blue-900/90 backdrop-blur-md rounded-2xl overflow-hidden shadow-lg ${darkMode ? 'dark-featured-card' : ''}`}>
      <div className="relative h-72 w-full overflow-hidden">
        <Image 
          src={item.imageSrc} 
          alt={item.title} 
          layout="fill" 
          objectFit="cover"
          className="transition-transform duration-700 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-6 w-full">
          <div className="flex items-center mb-2">
            <span className="text-white bg-orange-500 text-sm font-semibold py-1 px-3 rounded-full">{item.category}</span>
            <span className="mx-2 text-gray-300">•</span>
            <div className="flex items-center text-gray-200 text-sm">
              <Calendar className="h-3 w-3 mr-1" />
              {item.date}
            </div>
            <span className="mx-2 text-gray-300">•</span>
            <span className="text-gray-200 text-sm flex items-center">
              <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              {item.readTime} read
            </span>
          </div>
          <h3 className="text-white text-2xl md:text-3xl font-bold mb-3">{item.title}</h3>
          <p className="text-gray-200 mb-4 line-clamp-2 max-w-3xl">{item.summary}</p>
          <Link href={`/news/${item.slug}`}>
            <button className="group relative overflow-hidden bg-white text-blue-800 px-6 py-2 rounded-full hover:bg-orange-500 hover:text-white transition-colors font-bold">
              <span className="relative z-10">Read More</span>
              <span className="absolute inset-0 bg-orange-500 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-blue-950 text-white' : 'bg-white text-blue-800'}`}>
      <Head>
        <title>What's New | Tide</title>
        <meta name="description" content="Stay updated with the latest news, products, and innovations from Tide" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Modern Navbar */}
      <nav className={`sticky top-0 z-50 backdrop-blur-lg ${darkMode ? 'bg-blue-950/80' : 'bg-white/80'} border-b ${darkMode ? 'border-blue-800' : 'border-gray-100'}`}>
        <div className="container mx-auto max-w-6xl px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="md:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className={`p-2 rounded-full ${darkMode ? 'hover:bg-blue-800' : 'hover:bg-gray-100'}`}
                >
                  <Menu className={`h-6 w-6 ${darkMode ? 'text-white' : 'text-blue-800'}`} />
                </button>
              </div>
              <Link href="/">
                <span className="flex items-center">
                  <div className="h-8 w-8 rounded-full bg-orange-500 mr-2 flex items-center justify-center">
                    <span className="text-white font-bold">T</span>
                  </div>
                  <span className={`font-bold text-xl ${darkMode ? 'text-white' : 'text-blue-800'}`}>Tide</span>
                </span>
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <Link href="/products" className={`${darkMode ? 'text-white hover:text-orange-300' : 'text-blue-800 hover:text-orange-500'} transition-colors`}>Products</Link>
              <Link href="/how-to-wash" className={`${darkMode ? 'text-white hover:text-orange-300' : 'text-blue-800 hover:text-orange-500'} transition-colors`}>How to Wash</Link>
              <Link href="/sustainability" className={`${darkMode ? 'text-white hover:text-orange-300' : 'text-blue-800 hover:text-orange-500'} transition-colors`}>Sustainability</Link>
              <Link href="/whats-new" className={`${darkMode ? 'bg-blue-800 text-white' : 'bg-orange-50 text-orange-500'} px-3 py-1 rounded-full font-medium`}>What's New</Link>
            </div>
            <div className="flex items-center">
              <button 
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className={`p-2 rounded-full ${darkMode ? 'hover:bg-blue-800' : 'hover:bg-gray-100'} mr-2`}
              >
                <Search className={`h-5 w-5 ${darkMode ? 'text-white' : 'text-blue-800'}`} />
              </button>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-full ${darkMode ? 'bg-blue-800 text-white' : 'bg-gray-100 text-blue-800'}`}
              >
                {darkMode ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className={`fixed inset-0 z-40 ${darkMode ? 'bg-blue-950' : 'bg-white'}`}>
          <div className="flex justify-end p-4">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2"
            >
              <X className={`h-6 w-6 ${darkMode ? 'text-white' : 'text-blue-800'}`} />
            </button>
          </div>
          <div className="flex flex-col items-center space-y-6 p-8">
            <Link href="/products" className={`text-2xl font-medium ${darkMode ? 'text-white' : 'text-blue-800'}`} onClick={() => setIsMenuOpen(false)}>Products</Link>
            <Link href="/how-to-wash" className={`text-2xl font-medium ${darkMode ? 'text-white' : 'text-blue-800'}`} onClick={() => setIsMenuOpen(false)}>How to Wash</Link>
            <Link href="/sustainability" className={`text-2xl font-medium ${darkMode ? 'text-white' : 'text-blue-800'}`} onClick={() => setIsMenuOpen(false)}>Sustainability</Link>
            <Link href="/whats-new" className={`text-2xl font-medium ${darkMode ? 'text-white' : 'text-blue-800'}`} onClick={() => setIsMenuOpen(false)}>What's New</Link>
            <Link href="/shop-products" onClick={() => setIsMenuOpen(false)}>
              <button className="bg-orange-500 text-white font-bold text-lg px-6 py-3 rounded-full hover:bg-orange-600 transition-colors mt-6">
                Shop Tide Products
              </button>
            </Link>
          </div>
        </div>
      )}

      {/* Search Overlay */}
      {isSearchOpen && (
        <div className={`fixed inset-0 z-40 ${darkMode ? 'bg-blue-950/95' : 'bg-white/95'} backdrop-blur-md p-4 flex flex-col`}>
          <div className="flex justify-end mb-4">
            <button
              onClick={() => setIsSearchOpen(false)}
              className="p-2"
            >
              <X className={`h-6 w-6 ${darkMode ? 'text-white' : 'text-blue-800'}`} />
            </button>
          </div>
          <div className="container mx-auto max-w-3xl">
            <div className={`relative rounded-full overflow-hidden border-2 ${darkMode ? 'border-blue-700 bg-blue-900' : 'border-gray-200 bg-white'} mb-8`}>
              <input
                type="text"
                placeholder="Search news and updates..."
                className={`w-full px-6 py-4 text-lg ${darkMode ? 'bg-blue-900 text-white placeholder:text-blue-400' : 'bg-white text-blue-800 placeholder:text-gray-400'} focus:outline-none`}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
              />
              <button className={`absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full ${darkMode ? 'bg-blue-700 text-white' : 'bg-gray-100 text-blue-800'}`}>
                <Search className="h-5 w-5" />
              </button>
            </div>
            {searchQuery && (
              <div className={`${darkMode ? 'bg-blue-900' : 'bg-white'} rounded-2xl shadow-xl p-6`}>
                <div className="text-sm text-gray-500 dark:text-gray-400 mb-4">Search results for "{searchQuery}"</div>
                <div className="space-y-4">
                  {filteredNews.length > 0 ? (
                    filteredNews.map(item => (
                      <div key={item.id} className={`p-4 rounded-lg ${darkMode ? 'hover:bg-blue-800' : 'hover:bg-gray-50'} transition-colors`}>
                        <div className="flex items-center mb-1">
                          <span className={`text-xs px-2 py-0.5 rounded-full ${darkMode ? 'bg-orange-900/30 text-orange-300' : 'bg-orange-50 text-orange-500'} mr-2`}>{item.category}</span>
                          <span className="text-xs text-gray-500 dark:text-gray-400">{item.date}</span>
                        </div>
                        <h4 className={`text-lg font-semibold mb-1 ${darkMode ? 'text-white' : 'text-blue-800'}`}>{item.title}</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 line-clamp-1">{item.summary}</p>
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-8">
                      <p className="text-gray-500 dark:text-gray-400">No results found for "{searchQuery}"</p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      <main className="container mx-auto max-w-6xl px-4">
        <div className="py-4">
          <div className={`text-xs ${darkMode ? 'text-blue-300' : 'text-blue-800'} font-light mt-6`}>
            <Link href="/" className={darkMode ? 'text-blue-300 hover:text-white' : 'text-blue-800 hover:text-orange-500'}>Home</Link> / What's New
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center my-8 space-y-4 md:space-y-0">
          <h1 className="text-4xl md:text-6xl font-light text-orange-500 flex flex-col sm:flex-row sm:items-baseline space-y-2 sm:space-y-0">
            What's <span className="font-bold ml-0 sm:ml-3" style={{ fontFamily: '"Avenir Next Heavy", sans-serif' }}>New</span>
            <span className={`text-sm ml-0 sm:ml-4 ${darkMode ? 'text-blue-300' : 'text-blue-700'} font-normal self-start sm:self-center`}>Fresh updates from Tide</span>
          </h1>
          <Link href="/shop-products">
            <button className="group relative overflow-hidden bg-orange-500 text-white font-bold text-sm md:text-lg px-6 py-3 rounded-full transition-all duration-300 hover:pl-12">
              <span className="relative z-10">Shop Tide Products</span>
              <svg className="absolute left-6 top-1/2 transform -translate-y-1/2 -translate-x-8 group-hover:-translate-x-0 transition-transform duration-300 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
              </svg>
            </button>
          </Link>
        </div>

        {/* Hero Section with 3D card effect */}
        <div className="mb-16 overflow-hidden rounded-3xl relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-orange-500/20 z-0"></div>
          <div className="relative z-10 p-4">
            <h2 className={`text-2xl md:text-3xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-blue-800'} pl-2`} style={{ fontFamily: '"Avenir Next Heavy", sans-serif' }}>
              Featured Updates
              <div className="h-1 w-16 bg-orange-500 mt-2 rounded-full"></div>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 perspective-1000">
              {featuredNews.map(item => renderFeaturedCard(item))}
            </div>
          </div>
        </div>

        {/* Filter Bar */}
        <div className={`flex flex-col md:flex-row justify-between items-start md:items-center mb-6 pb-4 ${darkMode ? 'border-blue-800' : 'border-gray-200'} border-b`}>
          <div className={`flex items-center text-2xl font-bold ${darkMode ? 'text-white' : 'text-blue-800'} mb-4 md:mb-0`} style={{ fontFamily: '"Avenir Next Heavy", sans-serif' }}>
            Latest Updates
            <button 
              onClick={() => setIsFilterBarOpen(!isFilterBarOpen)}
              className={`md:hidden p-2 ml-3 rounded-full ${darkMode ? 'bg-blue-800 text-white' : 'bg-gray-100 text-blue-800'}`}
            >
              <Filter className="h-4 w-4" />
            </button>
          </div>
          
          <div className={`flex flex-wrap items-center gap-2 w-full md:w-auto overflow-x-auto ${isFilterBarOpen ? 'block' : 'hidden md:flex'}`}>
            {(['all', 'product-updates', 'sustainability', 'tips-tricks', 'awards'] as FilterOption[]).map(option => (
              <button
                key={option}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
                  filter === option 
                    ? (darkMode ? 'bg-orange-500 text-white' : 'bg-orange-500 text-white') 
                    : (darkMode ? 'bg-blue-900 text-white hover:bg-blue-800' : 'bg-gray-100 text-blue-800 hover:bg-gray-200')
                }`}
                onClick={() => setFilter(option)}
              >
                {getFilterOptionText(option)}
              </button>
            ))}
          </div>
        </div>

        {/* News Grid with Animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredNews.length > 0 ? (
            filteredNews.map(item => renderNewsCard(item))
          ) : (
            <div className={`col-span-3 py-12 text-center ${darkMode ? 'text-white' : 'text-blue-800'}`}>
              <svg className="w-16 h-16 mx-auto mb-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <h3 className="text-xl font-bold mb-2">No results found</h3>
              <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Try adjusting your filters or search query</p>
            </div>
          )}
        </div>

        {/* Newsletter with Modern Design */}
        <div className={`rounded-2xl p-6 md:p-12 mb-16 overflow-hidden relative ${darkMode ? 'bg-blue-900' : 'bg-gradient-to-r from-blue-50 to-blue-100'}`}>
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3"></div>
          
          <div className="relative z-10 md:flex md:items-center md:justify-between">
            <div className="mb-8 md:mb-0 md:w-1/2 pr-0 md:pr-8">
              <div className="inline-block px-3 py-1 rounded-full bg-orange-500/10 text-orange-500 text-sm font-semibold mb-4">Stay Connected</div>
              <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-blue-800'}`}>Get the Latest from Tide</h2>
              <p className={`mb-4 ${darkMode ? 'text-blue-200' : 'text-blue-700'}`}>Join our newsletter for exclusive offers, cleaning tips, and be the first to know about new product launches.</p>
              <div className="flex items-center">
                <div className="flex items-center mr-6">
                  <svg className="mr-2 h-5 w-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span className={`text-sm ${darkMode ? 'text-blue-200' : 'text-blue-700'}`}>Weekly Updates</span>
                </div>
                <div className="flex items-center">
                  <svg className="mr-2 h-5 w-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                  </svg>
                  <span className={`text-sm ${darkMode ? 'text-blue-200' : 'text-blue-700'}`}>Unsubscribe Anytime</span>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className={`p-1 rounded-lg ${darkMode ? 'bg-gradient-to-r from-blue-500 to-orange-500' : 'bg-gradient-to-r from-blue-500 to-orange-500'}`}>
                <div className={`p-5 rounded-lg ${darkMode ? 'bg-blue-900' : 'bg-white'}`}>
                  <div className="text-center">
                    <h3 className={`text-lg font-bold mb-4 ${darkMode ? 'text-white' : 'text-blue-800'}`}>Subscribe to Our Newsletter</h3>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <input 
                        type="text" 
                        placeholder="Your name" 
                        className={`w-full px-4 py-3 rounded-lg ${darkMode ? 'bg-blue-800 text-white border-blue-700 placeholder:text-blue-400' : 'bg-gray-50 text-blue-800 border-gray-200 placeholder:text-gray-400'} border focus:outline-none focus:ring-2 focus:ring-orange-500`}
                      />
                    </div>
                    <div>
                      <input 
                        type="email" 
                        placeholder="Enter your email" 
                        className={`w-full px-4 py-3 rounded-lg ${darkMode ? 'bg-blue-800 text-white border-blue-700 placeholder:text-blue-400' : 'bg-gray-50 text-blue-800 border-gray-200 placeholder:text-gray-400'} border focus:outline-none focus:ring-2 focus:ring-orange-500`}
                      />
                    </div>
                    <button className="w-full bg-orange-500 text-white px-4 py-3 rounded-lg hover:bg-orange-600 transition-colors font-bold flex items-center justify-center">
                      <span>Sign Up Now</span>
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </button>
                    <p className={`text-xs text-center ${darkMode ? 'text-blue-300' : 'text-blue-600'}`}>We respect your privacy. Unsubscribe at any time.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Content Section */}
        <div className="mb-16">
          <h2 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-blue-800'}`}>
            You Might Also Like
            <div className="h-1 w-16 bg-orange-500 mt-2 rounded-full"></div>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className={`rounded-xl overflow-hidden ${darkMode ? 'bg-blue-900' : 'bg-gray-50'} p-6 hover:shadow-lg transition-shadow`}>
              <div className="flex items-center mb-4">
                <svg className="h-10 w-10 text-orange-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
                </svg>
                <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-blue-800'}`}>Stain Removal Guide</h3>
              </div>
              <p className={`mb-4 ${darkMode ? 'text-blue-200' : 'text-blue-700'}`}>Learn how to tackle over 50 different stains with our comprehensive guide.</p>
              <Link href="/stain-removal-guide">
                <span className="inline-flex items-center text-orange-500 font-semibold hover:text-orange-600">
                  View Guide <ArrowRight className="ml-1 h-4 w-4" />
                </span>
              </Link>
            </div>
            
            <div className={`rounded-xl overflow-hidden ${darkMode ? 'bg-blue-900' : 'bg-gray-50'} p-6 hover:shadow-lg transition-shadow`}>
              <div className="flex items-center mb-4">
                <svg className="h-10 w-10 text-orange-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-blue-800'}`}>Sustainability Efforts</h3>
              </div>
              <p className={`mb-4 ${darkMode ? 'text-blue-200' : 'text-blue-700'}`}>Discover how we're reducing our environmental impact across our supply chain.</p>
              <Link href="/sustainability">
                <span className="inline-flex items-center text-orange-500 font-semibold hover:text-orange-600">
                  Learn More <ArrowRight className="ml-1 h-4 w-4" />
                </span>
              </Link>
            </div>
            
            <div className={`rounded-xl overflow-hidden ${darkMode ? 'bg-blue-900' : 'bg-gray-50'} p-6 hover:shadow-lg transition-shadow`}>
              <div className="flex items-center mb-4">
                <svg className="h-10 w-10 text-orange-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
                <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-blue-800'}`}>Product Catalog</h3>
              </div>
              <p className={`mb-4 ${darkMode ? 'text-blue-200' : 'text-blue-700'}`}>Browse our complete line of laundry detergents, stain removers, and fabric care.</p>
              <Link href="/products">
                <span className="inline-flex items-center text-orange-500 font-semibold hover:text-orange-600">
                  Shop Now <ArrowRight className="ml-1 h-4 w-4" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .dark-mode {
          background-color: #0f172a;
          color: white;
        }
        
        .perspective-1000 {
          perspective: 1000px;
        }
        
        .bg-grid-pattern {
          background-image: 
            linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px);
          background-size: 20px 20px;
        }
      `}</style>
    </div>
  );
};

export default WhatsNewPage;