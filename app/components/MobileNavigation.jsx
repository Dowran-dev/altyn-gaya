"use client";
// import React, { useState } from "react";
// import Link from "next/link";
// import { ChevronDown } from "lucide-react";

// export default function Navigation() {
//   const [mobileNavOpen, setMobileNavOpen] = useState(false);

//   const navItems = [
//     { name: "Магазин продуктов", href: "/shop" },
//     { name: "Что нового", href: "/whats-new" },
//     { name: "FAQ", href: "/faq" },
//     { name: "О компании", href: "/about-us" },
//     { name: "Контакты", href: "/contacts" }
//   ];

//   return (
//     <nav className="bg-[#0a0d42] text-white py-2">
//       <div className="container mx-auto px-4">
//         {/* Mobile nav toggle */}
//         <div className="md:hidden flex justify-between items-center">
//           <span className="font-bold">Меню</span>
//           <button
//             onClick={() => setMobileNavOpen(!mobileNavOpen)}
//             className="flex items-center"
//           >
//             <span className="mr-1">{mobileNavOpen ? "Скрыть" : "Показать"}</span>
//             <ChevronDown className={`w-5 h-5 transition-transform ${mobileNavOpen ? "transform rotate-180" : ""}`} />
//           </button>
//         </div>

//         {/* Desktop navigation */}
//         <ul className="hidden md:flex justify-center space-x-8 items-center">
//           {navItems.map((item) => (
//             <li key={item.href} className="relative group">
//               <Link href={item.href} className="py-2 block font-medium hover:text-[#fb4b06] transition-colors">
//                 {item.name}
//               </Link>
//               {/* Hover indicator line */}
//               <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#fb4b06] transition-all group-hover:w-full"></span>
//             </li>
//           ))}
//         </ul>

//         {/* Mobile navigation dropdown */}
//         {mobileNavOpen && (
//           <ul className="mt-2 md:hidden flex flex-col space-y-3 border-t border-white/10 pt-2">
//             {navItems.map((item) => (
//               <li key={item.href}>
//                 <Link href={item.href} className="py-2 block hover:text-[#fb4b06] transition-colors">
//                   {item.name}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//     </nav>
//   );
// }

//second
// import React, { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { X, Phone, Mail, ChevronRight } from "lucide-react";

// export default function MobileNavigation({ isOpen, onClose }) {
//   // Contact information (matching what's used in the footer)
//   const contactInfo = {
//     phone: "+993 61 64 09 21",
//     email: "altyngaya2008@gmail.com"
//   };

//   const navItems = [
//     { name: "Главная", href: "/" },
//     { name: "Магазин продуктов", href: "/shop" },
//     { name: "Что нового", href: "/whats-new" },
//     { name: "FAQ", href: "/faq" },
//     { name: "О компании", href: "/about-us" },
//     { name: "Контакты", href: "/contacts" }
//   ];

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 bg-white z-50 overflow-y-auto">
//       <div className="p-4">
//         {/* Header with close button */}
//         <div className="flex justify-between items-center pb-4 border-b border-gray-200">
//           <div className="flex items-center">
//             <Image
//               src="/image/logo.png"
//               alt="Altyn Gaya Logo"
//               width={40}
//               height={40}
//               className="rounded-full"
//             />
//             <span className="ml-2 text-xl font-bold text-[#0a0d42]">
//               Altyn <span className="text-[#fb4b06]">Gaya</span>
//             </span>
//           </div>
//           <button onClick={onClose} aria-label="Close menu">
//             <X className="w-6 h-6 text-[#0a0d42]" />
//           </button>
//         </div>

//         {/* Navigation items */}
//         <nav className="py-6">
//           <ul className="space-y-4">
//             {navItems.map((item) => (
//               <li key={item.href}>
//                 <Link
//                   href={item.href}
//                   className="flex items-center justify-between py-3 text-[#0a0d42] font-medium text-lg border-b border-gray-100"
//                   onClick={onClose}
//                 >
//                   {item.name}
//                   <ChevronRight className="w-5 h-5 text-[#fb4b06]" />
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </nav>

//         {/* Contact info */}
//         <div className="mt-6 space-y-4 py-6 border-t border-gray-200">
//           <h3 className="font-bold text-[#0a0d42]">Связаться с нами</h3>
//           <div className="flex items-center">
//             <Phone className="w-4 h-4 text-[#fb4b06] mr-3" />
//             <span className="text-[#0a0d42]">{contactInfo.phone}</span>
//           </div>
//           <div className="flex items-center">
//             <Mail className="w-4 h-4 text-[#fb4b06] mr-3" />
//             <span className="text-[#0a0d42]">{contactInfo.email}</span>
//           </div>
//         </div>

//         {/* CTA Button */}
//         <button className="w-full bg-[#fb4b06] text-white font-medium py-3 px-4 rounded mt-6">
//           Найти магазины
//         </button>
//       </div>
//     </div>
//   );
// }

//last
// import React, { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { X, Phone, Mail, Sun, Moon, ChevronRight, ChevronDown, ShoppingBag, Home, Info, HelpCircle, MessageSquare } from "lucide-react";

// export default function MobileNavigation({
//   isOpen,
//   onClose,
//   isDarkMode,
//   toggleDarkMode,
//   categories,
//   currentCategory,
//   setCurrentCategory
// }) {
//   const [isCategoryOpen, setIsCategoryOpen] = useState(false);

//   // Handle category selection
//   const handleCategorySelect = (category) => {
//     setCurrentCategory(category);
//     setIsCategoryOpen(false);
//     // You might want to keep the mobile nav open after selecting a category
//     // or close it based on your UX preference
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 z-50 lg:hidden">
//       {/* Backdrop */}
//       <div
//         className="absolute inset-0 bg-black/50 backdrop-blur-sm"
//         onClick={onClose}
//       ></div>

//       {/* Sidebar */}
//       <div className="absolute top-0 left-0 w-[85%] max-w-sm h-full bg-white dark:bg-gray-900 shadow-xl flex flex-col transition-transform duration-300 transform">
//         {/* Header */}
//         <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-800">
//           {/* Logo */}
//           <Link href="/" className="flex items-center" onClick={onClose}>
//             <div className="relative overflow-hidden rounded-full h-10 w-10">
//               <Image
//                 src="/image/logo.png"
//                 alt="Altyn Gaya Logo"
//                 layout="fill"
//                 objectFit="cover"
//               />
//             </div>
//             <div className="ml-2">
//               <span className="block text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#0a0d42] to-[#2c2f7c] dark:from-white dark:to-gray-300">
//                 Altyn <span className="text-[#fb4b06]">Gaya</span>
//               </span>
//               <span className="text-xs text-gray-500 dark:text-gray-400">Качество для жизни</span>
//             </div>
//           </Link>

//           {/* Close button */}
//           <button
//             className="p-2 text-gray-500 dark:text-gray-400 hover:text-[#fb4b06] dark:hover:text-[#fb4b06]"
//             onClick={onClose}
//           >
//             <X className="w-6 h-6" />
//           </button>
//         </div>

//         {/* Navigation content */}
//         <div className="flex-1 overflow-y-auto">
//           {/* Categories */}
//           <div className="p-4 border-b border-gray-200 dark:border-gray-800">
//             <div
//               className="flex items-center justify-between py-2 px-1"
//               onClick={() => setIsCategoryOpen(!isCategoryOpen)}
//             >
//               <span className="font-medium text-gray-700 dark:text-gray-300">Категории</span>
//               <ChevronDown className={`w-5 h-5 text-gray-500 dark:text-gray-400 transition-transform ${isCategoryOpen ? 'rotate-180' : ''}`} />
//             </div>

//             {isCategoryOpen && (
//               <div className="mt-2 pl-2 space-y-2">
//                 {categories.map((category) => (
//                   <button
//                     key={category}
//                     className={`block w-full text-left py-2 px-3 rounded-lg ${
//                       category === currentCategory
//                         ? 'bg-orange-100 dark:bg-gray-800 text-[#fb4b06] font-medium'
//                         : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
//                     }`}
//                     onClick={() => handleCategorySelect(category)}
//                   >
//                     {category}
//                   </button>
//                 ))}
//               </div>
//             )}
//           </div>

//           {/* Main navigation */}
//           <nav className="p-4">
//             <ul className="space-y-1">
//               <li>
//                 <Link
//                   href="/"
//                   className="flex items-center py-3 px-4 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
//                   onClick={onClose}
//                 >
//                   <Home className="w-5 h-5 mr-3 text-gray-500 dark:text-gray-400" />
//                   <span>Главная</span>
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href="/shop"
//                   className="flex items-center py-3 px-4 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
//                   onClick={onClose}
//                 >
//                   <ShoppingBag className="w-5 h-5 mr-3 text-gray-500 dark:text-gray-400" />
//                   <span>Магазин продуктов</span>
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href="/whats-new"
//                   className="flex items-center py-3 px-4 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
//                   onClick={onClose}
//                 >
//                   <ChevronRight className="w-5 h-5 mr-3 text-gray-500 dark:text-gray-400" />
//                   <span>Что нового</span>
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href="/faq"
//                   className="flex items-center py-3 px-4 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
//                   onClick={onClose}
//                 >
//                   <HelpCircle className="w-5 h-5 mr-3 text-gray-500 dark:text-gray-400" />
//                   <span>FAQ</span>
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href="/about-us"
//                   className="flex items-center py-3 px-4 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
//                   onClick={onClose}
//                 >
//                   <Info className="w-5 h-5 mr-3 text-gray-500 dark:text-gray-400" />
//                   <span>О компании</span>
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href="/contacts"
//                   className="flex items-center py-3 px-4 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
//                   onClick={onClose}
//                 >
//                   <MessageSquare className="w-5 h-5 mr-3 text-gray-500 dark:text-gray-400" />
//                   <span>Контакты</span>
//                 </Link>
//               </li>
//             </ul>
//           </nav>
//         </div>

//         {/* Footer actions */}
//         <div className="p-4 border-t border-gray-200 dark:border-gray-800">
//           {/* Contact info */}
//           <div className="mb-4 space-y-2">
//             <a
//               href="tel:+77471234567"
//               className="flex items-center text-gray-700 dark:text-gray-300 hover:text-[#fb4b06] dark:hover:text-[#fb4b06]"
//             >
//               <Phone className="w-4 h-4 mr-2" />
//               <span>+7 (747) 123-45-67</span>
//             </a>
//             <a
//               href="mailto:info@altyngaya.kz"
//               className="flex items-center text-gray-700 dark:text-gray-300 hover:text-[#fb4b06] dark:hover:text-[#fb4b06]"
//             >
//               <Mail className="w-4 h-4 mr-2" />
//               <span>info@altyngaya.kz</span>
//             </a>
//           </div>

//           {/* Find stores button */}
//           <Link
//             href="/store-locator"
//             className="block w-full bg-gradient-to-r from-[#fb4b06] to-[#ff7e46] hover:from-[#e04201] hover:to-[#f17441] text-white py-3 px-4 rounded-lg text-center font-medium mb-4"
//             onClick={onClose}
//           >
//             Найти магазины
//           </Link>

//           {/* Dark mode toggle */}
//           <div className="flex items-center justify-between">
//             <span className="text-gray-700 dark:text-gray-300">Темный режим</span>
//             <button
//               className="p-2 text-gray-700 dark:text-gray-300 hover:text-[#fb4b06] dark:hover:text-[#fb4b06]"
//               onClick={toggleDarkMode}
//               aria-label="Toggle dark mode"
//             >
//               {isDarkMode ? (
//                 <Sun className="w-5 h-5" />
//               ) : (
//                 <Moon className="w-5 h-5" />
//               )}
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// MobileNavigation.jsx
// import React, { useState, useEffect } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import {
//   X,
//   Phone,
//   Mail,
//   Sun,
//   Moon,
//   ChevronDown,
//   Home,
//   ShoppingBag,
//   Info,
// } from "lucide-react";
// import { motion } from "framer-motion";

// export default function MobileNavigation({
//   onClose,
//   categories,
//   currentCategory,
//   setCurrentCategory,
// }) {
//   const [isCategoryOpen, setIsCategoryOpen] = useState(false);
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   useEffect(() => {
//     const isDark =
//       localStorage.theme === "dark" ||
//       (!("theme" in localStorage) &&
//         window.matchMedia("(prefers-color-scheme: dark)").matches);
//     setIsDarkMode(isDark);
//   }, []);

//   const toggleDarkMode = () => {
//     setIsDarkMode((prev) => {
//       const newMode = !prev;
//       localStorage.theme = newMode ? "dark" : "light";
//       document.documentElement.classList.toggle("dark", newMode);
//       return newMode;
//     });
//   };

//   const navItems = [
//     { href: "/", icon: Home, label: "Главная" },
//     { href: "/shop", icon: ShoppingBag, label: "Магазин" },
//     { href: "/about", icon: Info, label: "О нас" },
//   ];

//   return (
//     <>
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         exit={{ opacity: 0 }}
//         className="fixed inset-0 bg-black/60 z-50"
//         onClick={onClose}
//       />
//       <motion.div
//         initial={{ x: "-100%" }}
//         animate={{ x: 0 }}
//         exit={{ x: "-100%" }}
//         className="fixed top-0 left-0 w-80 h-full bg-white dark:bg-gray-900 z-50 shadow-xl"
//       >
//         <div className="flex flex-col h-full">
//           {/* Header */}
//           <div className="p-4 flex items-center justify-between border-b dark:border-gray-800">
//             <Link
//               href="/"
//               className="flex items-center gap-2"
//               onClick={onClose}
//             >
//               <Image
//                 src="/image/logo.png"
//                 alt="Altyn Gaya"
//                 width={36}
//                 height={36}
//                 className="rounded-full border-2 border-orange-500/20"
//               />
//               <span className="font-bold text-lg text-gray-800 dark:text-white">
//                 Altyn <span className="text-orange-600">Gaya</span>
//               </span>
//             </Link>
//             <button onClick={onClose} className="p-2 hover:text-orange-600">
//               <X className="w-6 h-6" />
//             </button>
//           </div>

//           {/* Navigation */}
//           <div className="flex-1 overflow-y-auto p-4">
//             <button
//               className="flex items-center justify-between w-full p-2"
//               onClick={() => setIsCategoryOpen(!isCategoryOpen)}
//             >
//               <span className="font-medium">Категории</span>
//               <ChevronDown
//                 className={`w-5 h-5 ${isCategoryOpen ? "rotate-180" : ""}`}
//               />
//             </button>
//             {isCategoryOpen && (
//               <div className="mt-2 space-y-1">
//                 {categories.map((cat) => (
//                   <button
//                     key={cat.name}
//                     onClick={() => {
//                       setCurrentCategory(cat.name);
//                       onClose();
//                     }}
//                     className={`w-full text-left p-2 rounded-lg ${
//                       cat.name === currentCategory
//                         ? "bg-orange-50 text-orange-600"
//                         : "hover:bg-gray-100 dark:hover:bg-gray-800"
//                     }`}
//                   >
//                     {cat.name}
//                   </button>
//                 ))}
//               </div>
//             )}
//             <nav className="mt-6 space-y-1">
//               {navItems.map((item) => (
//                 <Link
//                   key={item.href}
//                   href={item.href}
//                   className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100
//                     dark:hover:bg-gray-800"
//                   onClick={onClose}
//                 >
//                   <item.icon className="w-5 h-5 text-orange-600" />
//                   {item.label}
//                 </Link>
//               ))}
//             </nav>
//           </div>

//           {/* Footer */}
//           <div className="p-4 border-t dark:border-gray-800">
//             <div className="space-y-3">
//               <a
//                 href="tel:+77471234567"
//                 className="flex items-center gap-2 hover:text-orange-600"
//               >
//                 <Phone className="w-4 h-4 text-orange-600" />
//                 +7 (747) 123-45-67
//               </a>
//               <a
//                 href="mailto:info@altyngaya.kz"
//                 className="flex items-center gap-2 hover:text-orange-600"
//               >
//                 <Mail className="w-4 h-4 text-orange-600" />
//                 info@altyngaya.kz
//               </a>
//             </div>
//             <button
//               onClick={toggleDarkMode}
//               className="flex items-center justify-between w-full p-2 mt-4"
//             >
//               <span>Темный режим</span>
//               {isDarkMode ? (
//                 <Sun className="w-5 h-5" />
//               ) : (
//                 <Moon className="w-5 h-5" />
//               )}
//             </button>
//           </div>
//         </div>
//       </motion.div>
//     </>
//   );
// }
