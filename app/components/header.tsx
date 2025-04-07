  // "use client";
  // import React, { useState, useEffect, useRef } from "react";
  // import Image from "next/image";
  // import Link from "next/link";
  // import { Input } from "@/app/components/ui/input";
  // import {
  //   Search,
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
  // import MobileNavigation from "./MobileNavigation";
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
  //         <div className="container mx-auto px-4" style={{ zIndex: 111 }}>
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
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Input } from "@/app/components/ui/input";
import {
  Search,
  Menu,
  X,
  Moon,
  Sun,
  ChevronDown,
} from "lucide-react";

interface Category {
  name: string;
  slug: string;
}

interface ProductSize {
  id: number;
  name: string;
  quantity: string;
  price: string;
}

interface ProductReview {
  id: number;
  author: string;
  date: string;
  rating: number;
  title: string;
  content: string;
}

interface Product {
  id: number;
  name: string;
  subtitle: string;
  fullTitle: string;
  description: string;
  longDescription: string;
  image: string;
  color: string;
  brandName: string;
  category: string;
  features: string[];
  directions: string[];
  rating: number;
  reviews: number;
  badge: string;
  sizes: ProductSize[];
  reviewsList: ProductReview[];
}

interface ProductCategory {
  title: string;
  description: string;
  image: string;
  color: string;
  brandName: string;
  category: string;
  features: string[];
  products: Product[];
}

export default function Header() {
  const router = useRouter();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [categories, setCategories] = useState<Category[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const searchResultsRef = useRef<HTMLDivElement>(null);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);

  const navItems = [
    { name: "Главная", href: "/" },
    { name: "Продукты", href: "/shop" },
    { name: "FAQ", href: "/faq" },
    { name: "Контакты", href: "/contact-us" },
  ];

  // Handle dark mode toggle
  const toggleDarkMode = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    } else {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    }
    setIsDarkMode(!isDarkMode);
  };

  // Check initial dark mode preference
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (
        localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
      ) {
        document.documentElement.classList.add("dark");
        setIsDarkMode(true);
      } else {
        document.documentElement.classList.remove("dark");
        setIsDarkMode(false);
      }
    }
  }, []);

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close search results when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchResultsRef.current && 
        !searchResultsRef.current.contains(event.target as Node) &&
        searchInputRef.current && 
        !searchInputRef.current.contains(event.target as Node)
      ) {
        setShowSearchResults(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Focus search input when opened
  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  // Fetch products from API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/api/products", {
          cache: "no-store",
        });
        
        if (!res.ok) {
          throw new Error("Failed to fetch products");
        }
        
        const productCategories: ProductCategory[] = await res.json();
        
        // Extract all products from all categories
        const allProducts: Product[] = [];
        productCategories.forEach(category => {
          if (category.products && Array.isArray(category.products)) {
            allProducts.push(...category.products);
          }
        });
        
        setProducts(allProducts);
        
        // Extract unique categories
        const uniqueCategories = Array.from(
          new Set(allProducts.map(product => product.category))
        ).map(category => ({
          name: category,
          slug: category.toLowerCase().replace(/\s+/g, '-')
        }));
        
        setCategories(uniqueCategories);
        
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  // Handle search input changes
  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    
    if (query.trim() === "") {
      setShowSearchResults(false);
      return;
    }
    
    // Filter products based on search query
    const results = products.filter(product => 
      product.name.toLowerCase().includes(query.toLowerCase()) ||
      product.subtitle.toLowerCase().includes(query.toLowerCase()) ||
      product.fullTitle.toLowerCase().includes(query.toLowerCase()) ||
      product.description.toLowerCase().includes(query.toLowerCase()) ||
      product.brandName.toLowerCase().includes(query.toLowerCase()) ||
      product.category.toLowerCase().includes(query.toLowerCase())
    );
    
    setSearchResults(results);
    setShowSearchResults(true);
  };

  // Handle search
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim() === "") return;
    
    // Navigate to search results page (you might want to implement this)
    // For now, just redirect to shop with search query
    router.push(`/shop?search=${encodeURIComponent(searchQuery)}`);
    
    setIsSearchOpen(false);
    setShowSearchResults(false);
  };

  // Handle search result click
  const handleSearchResultClick = (productId: number) => {
    router.push(`/product-details/${productId}`);
    setSearchQuery("");
    setShowSearchResults(false);
    setIsSearchOpen(false);
  };

  return (
    <>
      <header
        className={`bg-white dark:bg-gray-900 w-full z-30 fixed top-0 left-0 right-0 transition-all duration-300 ${
          scrolled ? "shadow-lg dark:shadow-gray-800/30" : ""
        }`}
      >
        {/* Main header */}
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Left section - Logo and menu button */}
            <div className="flex items-center">
              {/* Logo */}
              <Link href="/" className="flex items-center group">
                <div className="relative overflow-hidden rounded-full h-12 w-12 md:h-14 md:w-14 border-2 border-[#fb4b06]/20 shadow-lg">
                  <Image
                    src="/images/logo/AltynGaya.png"
                    alt="Altyn Gaya Logo"
                    layout="fill"
                    objectFit="cover"
                    className="transform transition-transform group-hover:scale-110"
                  />
                </div>
                <div className="ml-2">
                  <span className="block text-lg md:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#0a0d42] to-[#2c2f7c] dark:from-white dark:to-gray-300">
                    Altyn <span className="text-[#fb4b06]">Gaya</span>
                  </span>
                  <span className="hidden xs:block text-xs text-gray-500 dark:text-gray-400">
                    Качество для жизни
                  </span>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6">
              {navItems.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.name === "Продукты" ? setIsProductsDropdownOpen(true) : null}
                  onMouseLeave={() => item.name === "Продукты" ? setIsProductsDropdownOpen(false) : null}
                >
                  {item.name === "Продукты" ? (
                    <>
                      <div className="flex items-center text-gray-700 dark:text-gray-300 hover:text-[#fb4b06] dark:hover:text-[#fb4b06] transition-colors cursor-pointer">
                        <span>{item.name}</span>
                        <ChevronDown className={`ml-1 w-4 h-4 transition-transform ${isProductsDropdownOpen ? "rotate-180" : ""}`} />
                      </div>
                      
                      {isProductsDropdownOpen && categories.length > 0 && (
                        <div className="absolute top-full left-0 mt-1 bg-white dark:bg-gray-800 shadow-xl rounded-xl overflow-hidden w-56 z-20 border dark:border-gray-700">
                          <Link
                            href="/shop"
                            className="block px-4 py-2 text-[#fb4b06] hover:bg-orange-50 dark:hover:bg-gray-700 font-medium border-b border-gray-100 dark:border-gray-700"
                          >
                            Все продукты
                          </Link>
                          <div className="py-1">
                            {categories.map((category, idx) => (
                              <Link
                                key={idx}
                                href={`/shop?category=${category.slug}`}
                                className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-orange-50 dark:hover:bg-gray-700 hover:text-[#fb4b06] transition-colors"
                              >
                                {category.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-gray-700 dark:text-gray-300 hover:text-[#fb4b06] dark:hover:text-[#fb4b06] transition-colors"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Right section - Actions */}
            <div className="flex items-center space-x-1 md:space-x-3">
              {/* Search button (mobile only) */}
              <button
                className="md:hidden p-2 text-gray-700 dark:text-gray-300 hover:text-[#fb4b06] dark:hover:text-[#fb4b06] transition-colors"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* Search input (desktop) */}
              <div className="hidden md:block relative">
                <form onSubmit={handleSearch}>
                  <Input
                    ref={searchInputRef}
                    type="search"
                    placeholder="Поиск продукции..."
                    className="w-40 lg:w-64 pl-8 rounded-full border-2 border-gray-200 dark:border-gray-700 focus:border-[#fb4b06] dark:focus:border-[#fb4b06]"
                    value={searchQuery}
                    onChange={handleSearchInputChange}
                    onFocus={() => searchQuery.trim() !== "" && setShowSearchResults(true)}
                  />
                  <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                </form>
                
                {/* Search results dropdown */}
                {showSearchResults && searchResults.length > 0 && (
                  <div 
                    ref={searchResultsRef}
                    className="absolute top-full right-0 mt-1 bg-white dark:bg-gray-800 shadow-xl rounded-xl overflow-hidden w-80 z-20 border dark:border-gray-700 max-h-96 overflow-y-auto"
                  >
                    <div className="p-2 text-sm font-medium text-gray-500 dark:text-gray-400 border-b dark:border-gray-700">
                      Результаты поиска
                    </div>
                    <div className="py-1">
                      {searchResults.map((product) => (
                        <div
                          key={product.id}
                          className="flex items-center p-2 hover:bg-orange-50 dark:hover:bg-gray-700 cursor-pointer"
                          onClick={() => handleSearchResultClick(product.id)}
                        >
                          <div className="w-12 h-12 relative flex-shrink-0 rounded border dark:border-gray-700 overflow-hidden">
                            <Image
                              src={product.image}
                              alt={product.name}
                              layout="fill"
                              objectFit="cover"
                            />
                          </div>
                          <div className="ml-3 flex-1">
                            <p className="text-sm font-medium text-gray-800 dark:text-gray-200">{product.name}</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400 truncate">{product.subtitle}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="p-2 border-t dark:border-gray-700">
                      <button
                        onClick={() => router.push(`/shop?search=${encodeURIComponent(searchQuery)}`)}
                        className="text-sm text-[#fb4b06] hover:underline w-full text-center"
                      >
                        Показать все результаты
                      </button>
                    </div>
                  </div>
                )}
                
                {showSearchResults && searchResults.length === 0 && searchQuery.trim() !== "" && (
                  <div 
                    ref={searchResultsRef}
                    className="absolute top-full right-0 mt-1 bg-white dark:bg-gray-800 shadow-xl rounded-xl overflow-hidden w-80 z-20 border dark:border-gray-700"
                  >
                    <div className="p-4 text-center text-gray-500 dark:text-gray-400">
                      По запросу «{searchQuery}» ничего не найдено
                    </div>
                  </div>
                )}
              </div>

              {/* Dark mode toggle */}
              <button
                className="p-2 text-gray-700 dark:text-gray-300 hover:text-[#fb4b06] dark:hover:text-[#fb4b06] transition-colors"
                onClick={toggleDarkMode}
                aria-label={isDarkMode ? "Light mode" : "Dark mode"}
              >
                {isDarkMode ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden mr-3 text-gray-700 dark:text-gray-300 hover:text-[#fb4b06] dark:hover:text-[#fb4b06] transition-colors"
              onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
              aria-label="Toggle menu"
            >
              {isMobileNavOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile search overlay */}
        {isSearchOpen && (
          <div className="absolute top-full left-0 w-full bg-white dark:bg-gray-900 shadow-lg border-t border-gray-200 dark:border-gray-700 p-3 z-20">
            <form onSubmit={handleSearch} className="relative">
              <Input
                ref={searchInputRef}
                type="search"
                placeholder="Поиск продукции..."
                className="pl-9 pr-9 py-2 rounded-full border-2 border-gray-200 dark:border-gray-700 focus:border-[#fb4b06] dark:focus:border-[#fb4b06]"
                value={searchQuery}
                onChange={handleSearchInputChange}
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <button
                type="button"
                onClick={() => setIsSearchOpen(false)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
              >
                <X className="h-4 w-4" />
              </button>
            </form>
            
            {/* Mobile search results */}
            {showSearchResults && searchResults.length > 0 && (
              <div className="mt-3 bg-white dark:bg-gray-800 rounded-xl overflow-hidden max-h-64 overflow-y-auto">
                {searchResults.map((product) => (
                  <div
                    key={product.id}
                    className="flex items-center p-2 border-b dark:border-gray-700 hover:bg-orange-50 dark:hover:bg-gray-700"
                    onClick={() => handleSearchResultClick(product.id)}
                  >
                    <div className="w-12 h-12 relative flex-shrink-0 rounded border dark:border-gray-700 overflow-hidden">
                      <Image
                        src={product.image}
                        alt={product.name}
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                    <div className="ml-3 flex-1">
                      <p className="text-sm font-medium text-gray-800 dark:text-gray-200">{product.name}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 truncate">{product.subtitle}</p>
                    </div>
                  </div>
                ))}
                <div className="p-2">
                  <button
                    onClick={() => {
                      router.push(`/shop?search=${encodeURIComponent(searchQuery)}`);
                      setIsSearchOpen(false);
                    }}
                    className="text-sm text-[#fb4b06] hover:underline w-full text-center"
                  >
                    Показать все результаты
                  </button>
                </div>
              </div>
            )}
            
            {showSearchResults && searchResults.length === 0 && searchQuery.trim() !== "" && (
              <div className="mt-3 p-4 text-center text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 rounded-xl">
                По запросу «{searchQuery}» ничего не найдено
              </div>
            )}
          </div>
        )}

        {/* Mobile Navigation */}
        {isMobileNavOpen && (
          <div className="lg:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
            <nav className="container mx-auto px-4 py-2">
              <ul className="space-y-1">
                {navItems.map((item) => (
                  <li key={item.name}>
                    {item.name === "Продукты" ? (
                      <div>
                        <button
                          className="flex items-center justify-between w-full py-2 text-gray-700 dark:text-gray-300 hover:text-[#fb4b06] dark:hover:text-[#fb4b06] transition-colors"
                          onClick={() => setIsProductsDropdownOpen(!isProductsDropdownOpen)}
                        >
                          <span>{item.name}</span>
                          <ChevronDown className={`w-4 h-4 transition-transform ${isProductsDropdownOpen ? "rotate-180" : ""}`} />
                        </button>
                        
                        {isProductsDropdownOpen && (
                          <div className="ml-4 mt-1 space-y-1 border-l-2 border-gray-200 dark:border-gray-700 pl-2">
                            <Link
                              href="/shop"
                              className="block py-1.5 text-[#fb4b06] font-medium"
                              onClick={() => setIsMobileNavOpen(false)}
                            >
                              Все продукты
                            </Link>
                            {categories.map((category, idx) => (
                              <Link
                                key={idx}
                                href={`/shop?category=${category.slug}`}
                                className="block py-1.5 text-gray-600 dark:text-gray-400 hover:text-[#fb4b06] dark:hover:text-[#fb4b06] transition-colors"
                                onClick={() => setIsMobileNavOpen(false)}
                              >
                                {category.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        className="block py-2 text-gray-700 dark:text-gray-300 hover:text-[#fb4b06] dark:hover:text-[#fb4b06] transition-colors"
                        onClick={() => setIsMobileNavOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
              
              {/* Mobile quick links */}
              <div className="mt-4 pt-3 border-t border-gray-200 dark:border-gray-700">
                <div className="grid grid-cols-2 gap-2">
                  {/* Mobile quick links content can go here if needed */}
                </div>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Spacer for fixed header */}
      <div className="h-16 md:h-20"></div>
    </>
  );
}



  //ishleya gowy yone search funksiya ishlanok
// "use client";
// import React, { useState, useEffect, useRef } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { Input } from "@/app/components/ui/input";
// import {
//   Search,
//   Menu,
//   X,
//   Moon,
//   Sun,
//   ChevronDown,
// } from "lucide-react";

// interface Category {
//   name: string;
//   slug: string;
// }

// interface Product {
//   id: number;
//   name: string;
//   category: string;
//   image?: string;
//   price?: string;
// }

// export default function Header() {
//   const [isSearchOpen, setIsSearchOpen] = useState(false);
//   const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
//   const [isDarkMode, setIsDarkMode] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [categories, setCategories] = useState<Category[]>([]);
//   // const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]); // ADD THIS BEFORE THE FETCH FUNCTION
//   const searchInputRef = useRef<HTMLInputElement>(null);
//   const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);

//   const navItems = [
//     { name: "Главная", href: "/" },
//     { name: "Продукты", href: "/shop" },
//     { name: "FAQ", href: "/faq" },
//     { name: "Контакты", href: "/contact-us" },
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


//   // Focus search input when opened
//   useEffect(() => {
//     if (isSearchOpen && searchInputRef.current) {
//       searchInputRef.current.focus();
//     }
//   }, [isSearchOpen]);

//   // Fetch categories from API
//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const res = await fetch("/api/products", {
//           cache: "no-store",
//         });
        
//         if (!res.ok) {
//           throw new Error("Failed to fetch products");
//         }
        
//         const data = await res.json();
        
//         // Extract unique categories
//         const uniqueCategories = Array.from(
//           new Set(data.map((item: Product) => item.category))
//         ).map((category: unknown) => ({
//           name: category as string,
//           slug: (category as string).toLowerCase().replace(/\s+/g, '-')
//         }));
        
//         setCategories(uniqueCategories as Category[]);
//       } catch (error) {
//         console.error("Error fetching products:", error);
//       }
//     };

//     fetchCategories();
//   }, []);

//   // Handle search
//   const handleSearch = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log("Searching for:", searchQuery);
//     setIsSearchOpen(false);
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
//           <div className="flex items-center justify-between h-16 md:h-20">
//             {/* Left section - Logo and menu button */}
//             <div className="flex items-center">
//               {/* Logo */}
//               <Link href="/" className="flex items-center group">
//                 <div className="relative overflow-hidden rounded-full h-12 w-12 md:h-14 md:w-14 border-2 border-[#fb4b06]/20 shadow-lg">
//                   <Image
//                     src="/images/logo/AltynGaya.png"
//                     alt="Altyn Gaya Logo"
//                     layout="fill"
//                     objectFit="cover"
//                     className="transform transition-transform group-hover:scale-110"
//                   />
//                 </div>
//                 <div className="ml-2">
//                   <span className="block text-lg md:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#0a0d42] to-[#2c2f7c] dark:from-white dark:to-gray-300">
//                     Altyn <span className="text-[#fb4b06]">Gaya</span>
//                   </span>
//                   <span className="hidden xs:block text-xs text-gray-500 dark:text-gray-400">
//                     Качество для жизни
//                   </span>
//                 </div>
//               </Link>
//             </div>

//             {/* Desktop Navigation */}
//             <nav className="hidden lg:flex items-center space-x-6">
//               {navItems.map((item) => (
//                 <div
//                   key={item.name}
//                   className="relative"
//                   onMouseEnter={() => item.name === "Продукты" ? setIsProductsDropdownOpen(true) : null}
//                   onMouseLeave={() => item.name === "Продукты" ? setIsProductsDropdownOpen(false) : null}
//                 >
//                   {item.name === "Продукты" ? (
//                     <>
//                       <div className="flex items-center text-gray-700 dark:text-gray-300 hover:text-[#fb4b06] dark:hover:text-[#fb4b06] transition-colors cursor-pointer">
//                         <span>{item.name}</span>
//                         <ChevronDown className={`ml-1 w-4 h-4 transition-transform ${isProductsDropdownOpen ? "rotate-180" : ""}`} />
//                       </div>
                      
//                       {isProductsDropdownOpen && categories.length > 0 && (
//                         <div className="absolute top-full left-0 mt-1 bg-white dark:bg-gray-800 shadow-xl rounded-xl overflow-hidden w-56 z-20 border dark:border-gray-700">
//                           <Link
//                             href="/shop"
//                             className="block px-4 py-2 text-[#fb4b06] hover:bg-orange-50 dark:hover:bg-gray-700 font-medium border-b border-gray-100 dark:border-gray-700"
//                           >
//                             Все продукты
//                           </Link>
//                           <div className="py-1">
//                             {categories.map((category, idx) => (
//                               <Link
//                                 key={idx}
//                                 href={`/shop?category=${category.slug}`}
//                                 className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-orange-50 dark:hover:bg-gray-700 hover:text-[#fb4b06] transition-colors"
//                               >
//                                 {category.name}
//                               </Link>
//                             ))}
//                           </div>
//                         </div>
//                       )}
//                     </>
//                   ) : (
//                     <Link
//                       href={item.href}
//                       className="text-gray-700 dark:text-gray-300 hover:text-[#fb4b06] dark:hover:text-[#fb4b06] transition-colors"
//                     >
//                       {item.name}
//                     </Link>
//                   )}
//                 </div>
//               ))}
//             </nav>

//             {/* Right section - Actions */}
//             <div className="flex items-center space-x-1 md:space-x-3">
//               {/* Search button (mobile only) */}
//               <button
//                 className="md:hidden p-2 text-gray-700 dark:text-gray-300 hover:text-[#fb4b06] dark:hover:text-[#fb4b06] transition-colors"
//                 onClick={() => setIsSearchOpen(!isSearchOpen)}
//                 aria-label="Search"
//               >
//                 <Search className="w-5 h-5" />
//               </button>

//               {/* Search input (desktop) */}
//               <div className="hidden md:block relative">
//                 <Input
//                   type="search"
//                   placeholder="Поиск продукции..."
//                   className="w-40 lg:w-64 pl-8 rounded-full border-2 border-gray-200 dark:border-gray-700 focus:border-[#fb4b06] dark:focus:border-[#fb4b06]"
//                   value={searchQuery}
//                   onChange={(e) => setSearchQuery(e.target.value)}
//                 />
//                 <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
//               </div>

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
//             </div>

//             {/* Mobile menu button */}
//             <button
//               className="lg:hidden mr-3 text-gray-700 dark:text-gray-300 hover:text-[#fb4b06] dark:hover:text-[#fb4b06] transition-colors"
//               onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
//               aria-label="Toggle menu"
//             >
//               {isMobileNavOpen ? (
//                 <X className="w-6 h-6" />
//               ) : (
//                 <Menu className="w-6 h-6" />
//               )}
//             </button>
//           </div>
//         </div>

//         {/* Mobile search overlay */}
//         {isSearchOpen && (
//           <div className="absolute top-full left-0 w-full bg-white dark:bg-gray-900 shadow-lg border-t border-gray-200 dark:border-gray-700 p-3 z-20">
//             <form onSubmit={handleSearch} className="relative">
//               <Input
//                 ref={searchInputRef}
//                 type="search"
//                 placeholder="Поиск продукции..."
//                 className="pl-9 pr-9 py-2 rounded-full border-2 border-gray-200 dark:border-gray-700 focus:border-[#fb4b06] dark:focus:border-[#fb4b06]"
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//               />
//               <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
//               <button
//                 type="button"
//                 onClick={() => setIsSearchOpen(false)}
//                 className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
//               >
//                 <X className="h-4 w-4" />
//               </button>
//             </form>
//           </div>
//         )}

//         {/* Mobile Navigation */}
//         {isMobileNavOpen && (
//           <div className="lg:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
//             <nav className="container mx-auto px-4 py-2">
//               <ul className="space-y-1">
//                 {navItems.map((item) => (
//                   <li key={item.name}>
//                     {item.name === "Продукты" ? (
//                       <div>
//                         <button
//                           className="flex items-center justify-between w-full py-2 text-gray-700 dark:text-gray-300 hover:text-[#fb4b06] dark:hover:text-[#fb4b06] transition-colors"
//                           onClick={() => setIsProductsDropdownOpen(!isProductsDropdownOpen)}
//                         >
//                           <span>{item.name}</span>
//                           <ChevronDown className={`w-4 h-4 transition-transform ${isProductsDropdownOpen ? "rotate-180" : ""}`} />
//                         </button>
                        
//                         {isProductsDropdownOpen && (
//                           <div className="ml-4 mt-1 space-y-1 border-l-2 border-gray-200 dark:border-gray-700 pl-2">
//                             <Link
//                               href="/shop"
//                               className="block py-1.5 text-[#fb4b06] font-medium"
//                               onClick={() => setIsMobileNavOpen(false)}
//                             >
//                               Все продукты
//                             </Link>
//                             {categories.map((category, idx) => (
//                               <Link
//                                 key={idx}
//                                 href={`/shop?category=${category.slug}`}
//                                 className="block py-1.5 text-gray-600 dark:text-gray-400 hover:text-[#fb4b06] dark:hover:text-[#fb4b06] transition-colors"
//                                 onClick={() => setIsMobileNavOpen(false)}
//                               >
//                                 {category.name}
//                               </Link>
//                             ))}
//                           </div>
//                         )}
//                       </div>
//                     ) : (
//                       <Link
//                         href={item.href}
//                         className="block py-2 text-gray-700 dark:text-gray-300 hover:text-[#fb4b06] dark:hover:text-[#fb4b06] transition-colors"
//                         onClick={() => setIsMobileNavOpen(false)}
//                       >
//                         {item.name}
//                       </Link>
//                     )}
//                   </li>
//                 ))}
//               </ul>
              
//               {/* Mobile quick links */}
//               <div className="mt-4 pt-3 border-t border-gray-200 dark:border-gray-700">
//                 <div className="grid grid-cols-2 gap-2">
//                   {/* Mobile quick links content can go here if needed */}
//                 </div>
//               </div>
//             </nav>
//           </div>
//         )}
//       </header>

//       {/* Spacer for fixed header */}
//       <div className="h-16 md:h-20"></div>
//     </>
//   );
// }



//norm version
// "use client";
// import React, { useState, useEffect, useRef } from "react";
// import { Menu, X, ChevronDown } from "lucide-react";
// import Link from "next/link";

// interface ProductSize {
//   id: number;
//   name: string;
//   quantity: string;
//   price: string;
// }

// interface ProductReview {
//   id: number;
//   author: string;
//   date: string;
//   rating: number;
//   title: string;
//   content: string;
// }

// interface Products {
//   id: number;
//   name: string;
//   subtitle: string;
//   fullTitle: string;
//   description: string;
//   longDescription: string;
//   image: string;
//   color: string;
//   brandName: string;
//   category: string;
//   features: string[];
//   directions: string[];
//   rating: number;
//   reviews: number;
//   badge: string;
//   sizes: ProductSize[];
//   reviewsList: ProductReview[];
// }

// const Header = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [categories, setCategories] = useState<string[]>([]);
//   const [isProductsHovered, setIsProductsHovered] = useState(false);
//   const dropdownRef = useRef<HTMLDivElement>(null);
//   const timeoutRef = useRef<NodeJS.Timeout | null>(null);

//   const navItems = [
//     { name: "Главная", href: "/" },
//     { name: "Продукты", href: "/shop" },
//     { name: "FAQ", href: "/faq" },
//     { name: "Контакты", href: "/contact-us" },
//   ];

//   // Improved hover handling with delay
//   const handleMouseEnter = () => {
//     if (timeoutRef.current) clearTimeout(timeoutRef.current);
//     setIsProductsHovered(true);
//   };

//   const handleMouseLeave = () => {
//     timeoutRef.current = setTimeout(() => {
//       setIsProductsHovered(false);
//     }, 300); // Small delay before hiding to improve UX
//   };

//   // Close dropdown when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
//         setIsProductsHovered(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   // Fetch categories from the API
//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const res = await fetch("/api/products", {
//           cache: "no-store",
//         });
//         if (!res.ok) {
//           throw new Error("Failed to fetch categories");
//         }
//         const data = await res.json();
        
//         // Extract unique categories with proper typing
//         const uniqueCategories = Array.from(
//           new Set(data.map((item: Products) => item.category))
//         ) as string[];
//         setCategories(uniqueCategories.slice(0, 8)); // Show up to 6 categories
//       } catch (error) {
//         console.error("Error fetching categories:", error);
//       }
//     };

//     fetchCategories();
//   }, []);

//   return (
//     <>
//       <header
//         className="bg-black/90 backdrop-blur-md fixed top-0 left-0 w-full shadow-lg"
//         style={{ zIndex: 111 }}
//       >
//         <div className="container mx-auto px-4 py-3">
//           <div className="flex items-center justify-between">
//             {/* Logo */}
//             <div className="flex items-center">
//               <div className="text-[#fb4b06] text-2xl font-bold transition-transform duration-300 hover:scale-105">
//                 <Link href="/">
//                   ALTYN GAYA
//                   <span className="text-[#fb4b06] ml-2 font-light">|</span>
//                 </Link>
//               </div>
//             </div>

//             {/* Desktop Navigation */}
//             <nav className="hidden md:flex items-center gap-8">
//               {navItems.map((item) => (
//                 <div
//                   key={item.name}
//                   className="relative group"
//                   ref={item.name === "Продукты" ? dropdownRef : null}
//                   onMouseEnter={item.name === "Продукты" ? handleMouseEnter : undefined}
//                   onMouseLeave={item.name === "Продукты" ? handleMouseLeave : undefined}
//                 >
//                   {item.name === "Продукты" ? (
//                     <div className="flex items-center cursor-pointer text-[#fb4b06] hover:text-white transition-colors duration-300 text-lg font-medium">
//                       {item.name}
//                       <ChevronDown className={`ml-1 w-4 h-4 transition-transform duration-300 ${isProductsHovered ? 'rotate-180' : ''}`} />
//                     </div>
//                   ) : (
//                     <Link 
//                       href={item.href}
//                       className="text-[#fb4b06] hover:text-white transition-colors duration-300 text-lg font-medium relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-white after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full"
//                     >
//                       {item.name}
//                     </Link>
//                   )}
                  
//                   {/* Improved dropdown for Продукты */}
//                   {item.name === "Продукты" && isProductsHovered && (
//                     <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-56 bg-white rounded-md shadow-xl overflow-hidden z-50 transition-all duration-300 ease-in-out origin-top">
//                       <div className="py-1">
//                         <Link 
//                           href="/shop"
//                           className="block px-4 py-2 text-orange-600 hover:bg-orange-50 font-medium border-b border-orange-100"
//                         >
//                           Все продукты
//                         </Link>
//                         {categories.length > 0 ? (
//                           categories.map((category, index) => (
//                             <Link
//                               key={index}
//                               href={{
//                                 pathname: '/shop',
//                                 query: { category: category }
//                               }}
//                               className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors duration-200"
//                             >
//                               {category}
//                             </Link>
//                           ))
//                         ) : (
//                           <div className="px-4 py-2 text-gray-500">
//                             Загрузка...
//                           </div>
//                         )}
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               ))}
//             </nav>

//             {/* Mobile Menu Button */}
//             <button
//               className="md:hidden text-[#fb4b06] focus:outline-none p-2 rounded-full hover:bg-orange-900/20 transition-colors duration-300"
//               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//               aria-label="Toggle menu"
//             >
//               {isMobileMenuOpen ? (
//                 <X className="w-6 h-6" />
//               ) : (
//                 <Menu className="w-6 h-6" />
//               )}
//             </button>
//           </div>

//           {/* Improved Mobile Navigation */}
//           {isMobileMenuOpen && (
//             <nav className="md:hidden mt-4 pb-2 border-t border-white/10 pt-2">
//               <div className="flex flex-col">
//                 {navItems.map((item, index) => (
//                   <div key={item.name} className={`${index > 0 ? 'border-t border-white/10' : ''}`}>
//                     {item.name === "Продукты" ? (
//                       <>
//                         <div 
//                           className="flex justify-between items-center text-[#fb4b06] py-3 text-lg font-medium"
//                           onClick={() => setIsProductsHovered(!isProductsHovered)}
//                         >
//                           <span>{item.name}</span>
//                           <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isProductsHovered ? 'rotate-180' : ''}`} />
//                         </div>
                        
//                         {isProductsHovered && (
//                           <div className="pl-4 pb-2 space-y-2">
//                             <Link
//                               href="/shop"
//                               className="block text-white hover:text-[#fb4b06] py-1 font-medium"
//                               onClick={() => setIsMobileMenuOpen(false)}
//                             >
//                               Все продукты
//                             </Link>
//                             {categories.length > 0 ? (
//                               categories.map((category, idx) => (
//                                 <Link
//                                   key={idx}
//                                   href={{
//                                     pathname: '/shop',
//                                     query: { category: category }
//                                   }}
//                                   className="block text-gray-300 hover:text-[#fb4b06] py-1"
//                                   onClick={() => setIsMobileMenuOpen(false)}
//                                 >
//                                   {category}
//                                 </Link>
//                               ))
//                             ) : (
//                               <div className="text-gray-500 py-1">
//                                 Загрузка...
//                               </div>
//                             )}
//                           </div>
//                         )}
//                       </>
//                     ) : (
//                       <Link
//                         href={item.href}
//                         className="block text-[#fb4b06] hover:text-white transition-colors duration-300 text-lg font-medium py-3"
//                         onClick={() => setIsMobileMenuOpen(false)}
//                       >
//                         {item.name}
//                       </Link>
//                     )}
//                   </div>
//                 ))}
//               </div>
//             </nav>
//           )}
//         </div>
//       </header>
//       <div className="h-10"></div>
//     </>
//   );
// };

// export default Header;