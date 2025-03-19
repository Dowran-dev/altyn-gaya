// "use client";
// import React, { useState, useEffect, useRef } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { Input } from "@/app/components/ui/input";
// import {
//   Search,
//   ShoppingBag,
//   Menu,
//   X,
//   Moon,
//   Sun,
//   ChevronDown,
//   Bell,
//   User,
//   Heart,
//   MapPin,
//   ShoppingCart,
//   Layers,
//   ArrowRight,
//   Phone,
//   ChevronRight,
// } from "lucide-react";
// import MobileNavigation from "./navigation";
// import { AnimatePresence, motion } from "framer-motion";
// import DesktopNavigation from "./DesktopNavigation";

// export default function Header() {
//   const [isSearchOpen, setIsSearchOpen] = useState(false);
//   const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
//   const [isDarkMode, setIsDarkMode] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [currentCategory, setCurrentCategory] = useState("Все продукты");
//   const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [isSearching, setIsSearching] = useState(false);
//   const searchInputRef = useRef(null);
//   const userMenuRef = useRef(null);

//   // Categories dropdown
//   const categories = [
//     { name: "Все продукты", icon: <Layers size={16} /> },
//     { name: "Туалетная бумага", icon: <ChevronRight size={16} /> },
//     { name: "Бумажные салфетки", icon: <ChevronRight size={16} /> },
//     { name: "Моющие средства", icon: <ChevronRight size={16} /> },
//     { name: "Бумажные полотенца", icon: <ChevronRight size={16} /> },
//   ];

//   // Featured products (for search dropdown)
//   const featuredProducts = [
//     {
//       id: 1,
//       name: "Туалетная бумага Deluxe",
//       image: "/image/product-1.jpg",
//       price: "-",
//       category: "Туалетная бумага",
//     },
//     {
//       id: 2,
//       name: "Бумажные полотенца Premium",
//       image: "/image/product-2.jpg",
//       price: "-",
//       category: "Бумажные полотенца",
//     },
//     {
//       id: 3,
//       name: "Моющее средство Ultra Clean",
//       image: "/image/product-3.jpg",
//       price: "-",
//       category: "Моющие средства",
//     },
//   ];

//   // Handle dark mode toggle
//   const toggleDarkMode = () => {
//     if (isDarkMode) {
//       document.documentElement.classList.remove("dark");
//       localStorage.theme = "light";
//     } else {
//       document.documentElement.classList.add("dark");
//       localStorage.theme = "dark";
//     }
//     setIsDarkMode(!isDarkMode);
//   };

//   // Check initial dark mode preference
//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       if (
//         localStorage.theme === "dark" ||
//         (!("theme" in localStorage) &&
//           window.matchMedia("(prefers-color-scheme: dark)").matches)
//       ) {
//         document.documentElement.classList.add("dark");
//         setIsDarkMode(true);
//       } else {
//         document.documentElement.classList.remove("dark");
//         setIsDarkMode(false);
//       }
//     }
//   }, []);

//   // Handle scroll effects
//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 10) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   // Close user menu when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
//         setIsUserMenuOpen(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   // Focus search input when opened
//   useEffect(() => {
//     if (isSearchOpen && searchInputRef.current) {
//       searchInputRef.current.focus();
//     }
//   }, [isSearchOpen]);

//   // Handle search
//   const handleSearch = (e) => {
//     e.preventDefault();
//     console.log("Searching for:", searchQuery);
//     setIsSearching(false);
//     // Implement actual search functionality here
//   };

//   return (
//     <>
//       <header
//         className={`bg-white dark:bg-gray-900 w-full z-30 fixed top-0 left-0 right-0 transition-all duration-300 ${
//           scrolled ? "shadow-lg dark:shadow-gray-800/30" : ""
//         }`}
//       >
//         {/* Main header */}
//         <div className="container mx-auto px-4">
//           <div className="flex items-center justify-between h-20">
//             {/* Left section - Logo and categories */}
//             <div className="flex items-center">
//               {/* Mobile menu button */}
//               <button
//                 className="lg:hidden mr-4 text-gray-700 dark:text-gray-300 hover:text-[#fb4b06] dark:hover:text-[#fb4b06] transition-colors"
//                 onClick={() => {
//                   console.log(
//                     "Menu clicked, isMobileNavOpen:",
//                     !isMobileNavOpen
//                   );
//                   setIsMobileNavOpen(true);
//                 }}
//                 aria-label="Open menu"
//               >
//                 <Menu className="w-6 h-6" />
//               </button>

//               {/* Logo */}
//               <Link href="/" className="flex items-center group">
//                 <div className="relative overflow-hidden rounded-full h-10 w-10 lg:h-12 lg:w-12 border-2 border-[#fb4b06]/20 shadow-lg">
//                   <Image
//                     src="/image/logo.png"
//                     alt="Altyn Gaya Logo"
//                     layout="fill"
//                     objectFit="cover"
//                     className="transform transition-transform group-hover:scale-110"
//                   />
//                 </div>
//                 <div className="ml-2 lg:ml-3">
//                   <span className="block text-xl lg:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#0a0d42] to-[#2c2f7c] dark:from-white dark:to-gray-300">
//                     Altyn <span className="text-[#fb4b06]">Gaya</span>
//                   </span>
//                   <span className="text-xs text-gray-500 dark:text-gray-400">
//                     Качество для жизни
//                   </span>
//                 </div>
//               </Link>

//               {/* Categories dropdown - desktop only */}
//               <div className="hidden lg:flex ml-8 relative group">
//                 <button className="flex items-center space-x-1 text-gray-700 dark:text-gray-300 hover:text-[#fb4b06] dark:hover:text-[#fb4b06] transition-colors py-2 px-3 rounded-full group-hover:bg-gray-100 dark:group-hover:bg-gray-800">
//                   <Layers className="w-4 h-4 mr-1.5" />
//                   <span className="font-medium">{currentCategory}</span>
//                   <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
//                 </button>

//                 {/* Dropdown menu */}
//                 <div className="absolute top-full left-0 mt-1 bg-white dark:bg-gray-800 shadow-xl rounded-xl overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 w-64 z-20 border dark:border-gray-700 transform -translate-y-2 group-hover:translate-y-0">
//                   {categories.map((category) => (
//                     <button
//                       key={category.name}
//                       className={`flex items-center w-full text-left px-5 py-3 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors ${
//                         category.name === currentCategory
//                           ? "text-[#fb4b06] font-medium bg-orange-50 dark:bg-gray-700/50"
//                           : "text-gray-700 dark:text-gray-300"
//                       }`}
//                       onClick={() => setCurrentCategory(category.name)}
//                     >
//                       <span className="mr-2 text-[#fb4b06]">
//                         {category.icon}
//                       </span>
//                       {category.name}
//                       {category.name === currentCategory && (
//                         <span className="ml-auto">
//                           <ArrowRight size={14} className="text-[#fb4b06]" />
//                         </span>
//                       )}
//                     </button>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             {/* Center section - Search */}
//             <div className="hidden md:block max-w-md w-full mx-4 relative">
//               <div className="relative group">
//                 <Input
//                   type="search"
//                   placeholder="Поиск продукции..."
//                   className="pl-10 pr-4 py-2 rounded-full border-2 border-gray-200 dark:border-gray-700 focus:border-[#fb4b06] dark:focus:border-[#fb4b06] bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 group-hover:border-[#fb4b06] dark:group-hover:border-[#fb4b06] transition-colors"
//                   value={searchQuery}
//                   onChange={(e) => setSearchQuery(e.target.value)}
//                   onFocus={() => setIsSearching(true)}
//                   onBlur={() => setTimeout(() => setIsSearching(false), 200)}
//                 />
//                 <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 dark:text-gray-500 group-hover:text-[#fb4b06] dark:group-hover:text-[#fb4b06] transition-colors" />

//                 {/* Search dropdown results */}
//                 {isSearching && (
//                   <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 z-20 overflow-hidden">
//                     <div className="p-4">
//                       <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-3">
//                         Популярные товары
//                       </h4>
//                       <div className="space-y-3">
//                         {featuredProducts.map((product) => (
//                           <div
//                             key={product.id}
//                             className="flex items-center gap-3 p-2 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg cursor-pointer transition-colors"
//                           >
//                             <div className="relative h-12 w-12 rounded-md overflow-hidden bg-gray-100 dark:bg-gray-700 flex-shrink-0">
//                               <div className="bg-gray-200 dark:bg-gray-600 h-full w-full animate-pulse"></div>
//                             </div>
//                             <div className="flex-1 min-w-0">
//                               <p className="font-medium text-gray-800 dark:text-gray-200 truncate">
//                                 {product.name}
//                               </p>
//                               <div className="flex items-center justify-between mt-1">
//                                 <span className="text-sm text-gray-500 dark:text-gray-400">
//                                   {product.category}
//                                 </span>
//                                 <span className="text-sm font-semibold text-[#fb4b06]">
//                                   {product.price}
//                                 </span>
//                               </div>
//                             </div>
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                     <div className="px-4 py-3 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
//                       <button
//                         className="w-full text-center text-[#fb4b06] font-medium text-sm hover:underline"
//                         onClick={handleSearch}
//                       >
//                         Показать все результаты
//                       </button>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </div>

//             {/* Right section - Actions */}
//             <div className="flex items-center space-x-1 lg:space-x-3">
//               {/* Search button (mobile only) */}
//               <button
//                 className="md:hidden p-2 text-gray-700 dark:text-gray-300 hover:text-[#fb4b06] dark:hover:text-[#fb4b06] transition-colors"
//                 onClick={() => setIsSearchOpen(!isSearchOpen)}
//                 aria-label="Search"
//               >
//                 <Search className="w-5 h-5" />
//               </button>

//               {/* Wishlist button */}
//               <Link
//                 href="/wishlist"
//                 className="hidden sm:flex p-2 text-gray-700 dark:text-gray-300 hover:text-[#fb4b06] dark:hover:text-[#fb4b06] transition-colors relative"
//                 aria-label="Wishlist"
//               >
//                 <Heart className="w-5 h-5" />
//                 <span className="absolute -top-1 -right-1 bg-[#fb4b06] text-white text-xs font-bold rounded-full h-4 w-4 flex items-center justify-center">
//                   3
//                 </span>
//               </Link>

//               {/* Cart button */}
//               <Link
//                 href="/cart"
//                 className="p-2 text-gray-700 dark:text-gray-300 hover:text-[#fb4b06] dark:hover:text-[#fb4b06] transition-colors relative"
//                 aria-label="Cart"
//               >
//                 <ShoppingCart className="w-5 h-5" />
//                 <span className="absolute -top-1 -right-1 bg-[#fb4b06] text-white text-xs font-bold rounded-full h-4 w-4 flex items-center justify-center">
//                   2
//                 </span>
//               </Link>

//               {/* Dark mode toggle */}
//               <button
//                 className="p-2 text-gray-700 dark:text-gray-300 hover:text-[#fb4b06] dark:hover:text-[#fb4b06] transition-colors"
//                 onClick={toggleDarkMode}
//                 aria-label={isDarkMode ? "Light mode" : "Dark mode"}
//               >
//                 {isDarkMode ? (
//                   <Sun className="w-5 h-5" />
//                 ) : (
//                   <Moon className="w-5 h-5" />
//                 )}
//               </button>

//               {/* User menu */}
//               <div className="relative" ref={userMenuRef}>
//                 <button
//                   className="p-2 text-gray-700 dark:text-gray-300 hover:text-[#fb4b06] dark:hover:text-[#fb4b06] transition-colors"
//                   onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
//                   aria-label="User menu"
//                 >
//                   <User className="w-5 h-5" />
//                 </button>

//                 {/* User dropdown menu */}
//                 {isUserMenuOpen && (
//                   <div className="absolute top-full right-0 mt-2 bg-white dark:bg-gray-800 shadow-xl rounded-xl overflow-hidden w-64 z-20 border dark:border-gray-700">
//                     <div className="p-4">
//                       <div className="flex items-center space-x-3 mb-3">
//                         <div className="h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
//                           <User className="w-5 h-5 text-gray-500 dark:text-gray-400" />
//                         </div>
//                         <div>
//                           <p className="font-medium text-gray-800 dark:text-gray-200">
//                             Гость
//                           </p>
//                           <p className="text-sm text-gray-500 dark:text-gray-400">
//                             Войдите в аккаунт
//                           </p>
//                         </div>
//                       </div>
//                       <div className="space-y-1">
//                         <Link
//                           href="/login"
//                           className="flex items-center p-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
//                         >
//                           Вход / Регистрация
//                         </Link>
//                         <Link
//                           href="/orders"
//                           className="flex items-center p-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
//                         >
//                           История заказов
//                         </Link>
//                         <Link
//                           href="/profile"
//                           className="flex items-center p-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
//                         >
//                           Настройки профиля
//                         </Link>
//                         <Link
//                           href="/addresses"
//                           className="flex items-center p-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
//                         >
//                           Мои адреса
//                         </Link>
//                       </div>
//                     </div>
//                     <div className="border-t border-gray-200 dark:border-gray-700 p-3">
//                       <Link
//                         href="/support"
//                         className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 hover:text-[#fb4b06] dark:hover:text-[#fb4b06] transition-colors"
//                       >
//                         <span>Нужна помощь?</span>
//                         <Phone className="w-4 h-4" />
//                       </Link>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Mobile search overlay */}
//         <AnimatePresence>
//           {isSearchOpen && (
//             <motion.div
//               initial={{ opacity: 0, y: -20 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -20 }}
//               className="absolute top-full left-0 w-full bg-white dark:bg-gray-900 shadow-lg border-t border-gray-200 dark:border-gray-700 p-4 z-20"
//             >
//               <form onSubmit={handleSearch} className="relative">
//                 <Input
//                   ref={searchInputRef}
//                   type="search"
//                   placeholder="Поиск продукции..."
//                   className="pl-10 pr-4 py-2 rounded-full border-2 border-gray-200 dark:border-gray-700 focus:border-[#fb4b06] dark:focus:border-[#fb4b06]"
//                   value={searchQuery}
//                   onChange={(e) => setSearchQuery(e.target.value)}
//                 />
//                 <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
//                 <button
//                   type="button"
//                   onClick={() => setIsSearchOpen(false)}
//                   className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
//                 >
//                   <X className="h-5 w-5" />
//                 </button>
//               </form>
//               <div className="mt-4">
//                 {featuredProducts.slice(0, 2).map((product) => (
//                   <div
//                     key={product.id}
//                     className="flex items-center gap-3 p-2 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg cursor-pointer mb-2 transition-colors"
//                   >
//                     <div className="relative h-12 w-12 rounded-md overflow-hidden bg-gray-100 dark:bg-gray-700 flex-shrink-0">
//                       <div className="bg-gray-200 dark:bg-gray-600 h-full w-full animate-pulse"></div>
//                     </div>
//                     <div className="flex-1">
//                       <p className="font-medium text-gray-800 dark:text-gray-200">
//                         {product.name}
//                       </p>
//                       <div className="flex items-center justify-between mt-1">
//                         <span className="text-sm text-gray-500 dark:text-gray-400">
//                           {product.category}
//                         </span>
//                         <span className="text-sm font-semibold text-[#fb4b06]">
//                           {product.price}
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </header>
//       {/* Mobile Navigation */}
//       <AnimatePresence>
//         {isMobileNavOpen && (
//           <MobileNavigation
//             onClose={() => setIsMobileNavOpen(false)}
//             categories={categories}
//             currentCategory={currentCategory}
//             setCurrentCategory={setCurrentCategory}
//           />
//         )}
//       </AnimatePresence>

//       {/* Spacer for fixed header */}
//       <div className="h-20 pt-8"></div>

//       <DesktopNavigation currentCategory={currentCategory} />
//     </>
//   );
// }

"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const Header = () => {
  // Removed React.FC and just using a regular function component
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Главная", href: "/" },
    { name: "Продукты", href: "/shop" },
    { name: "FAQ", href: "/faq" },
    { name: "Контакты", href: "/contact-us" },
  ];

  return (
    <header className="z-100 bg-black/80 backdrop-blur-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <div className="text-[#fb4b06] text-xl font-bold">
              <Link href="/">ALTYN GAYA</Link>
              <span className="text-[#fb4b06] ml-2">|</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-[#fb4b06] hover:text-white transition-colors duration-300 text-lg font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#fb4b06] focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-[#fb4b06] hover:text-white transition-colors duration-300 text-lg font-medium py-2 border-b border-white/10"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
