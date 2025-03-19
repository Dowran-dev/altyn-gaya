// 'use client'
// import React, { useState, useEffect, useRef } from 'react';
// import { Button } from './ui/button';
// import { ChevronLeft, ChevronRight, Check, ArrowRight, Filter } from 'lucide-react';
// import Image from 'next/image';

// type ProductPageProps = {
//   params: {
//     productId: string;
//   };
// };


// // Component for smooth element appearance
// const FadeInView: React.FC<{
//   children: React.ReactNode;
//   delay?: number;
//   className?: string;
// }> = ({ children, delay = 0, className = "" }) => {
//   const [isVisible, setIsVisible] = useState(false);
//   const domRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(entries => {
//       if (entries[0].isIntersecting) {
//         setIsVisible(true);
//         if (domRef.current) {
//           observer.unobserve(domRef.current);
//         }
//       }
//     });
    
//     if (domRef.current) {
//       observer.observe(domRef.current);
//     }
    
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <div
//       ref={domRef}
//       className={`${className} transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
//       style={{ transitionDelay: `${delay}ms` }}
//     >
//       {children}
//     </div>
//   );
// };


// interface Product {
//   title: string;
//   description: string;
//   image: string;
//   color: string;
//   features?: string[];
//   brandName: string;
//   category: string;
// }

// // Company interface to organize brands and their product categories
// interface Company {
//   name: string;
//   color: string;
//   logoUrl: string;
//   categories: string[];
// }

// // Animated product card component
// interface ProductCardProps {
//   product: Product;
//   isActive: boolean;
//   // index: number;
//   // activeIndex: number;
// }

// const ProductCard: React.FC<ProductCardProps> = ({ product, isActive }) => {

//   const cardPosition = isActive ? 
//     "opacity-100 z-20 transform-none" : 
//     "opacity-0 z-0 scale-95";

//   return (
//     <div className={`absolute inset-0 transition-all duration-700 ease-out ${cardPosition}`}>
//       <div className="bg-white rounded-3xl overflow-hidden shadow-2xl mx-auto h-full border border-gray-100 hover:shadow-[0_20px_50px_rgba(30,34,170,0.1)] transition-shadow duration-500">
//         <div className="flex flex-col md:flex-row h-full">
//           <div className="md:w-3/5 relative overflow-hidden group">
//             <div 
//               className="h-64 md:h-full w-full relative flex items-center justify-center"
//               style={{ 
//                 background: `linear-gradient(135deg, ${product.color} 30%, ${product.color}CC 100%)` 
//               }}
//             >
//               {/* Brand badge in top left */}
//               <div className="absolute top-4 left-4 z-20 bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-full">
//                 <span className="font-bold text-sm" style={{ color: product.color }}>{product.brandName}</span>
//               </div>

//               {/* Category badge in top right */}
//               <div className="absolute top-4 right-4 z-20 bg-black/30 backdrop-blur-sm px-3 py-1.5 rounded-full">
//                 <span className="text-white text-xs">{product.category}</span>
//               </div>
              
//               {/* 3D perspective container for product image */}
//               <div className="relative z-10 transform transition-transform duration-700 group-hover:scale-110 group-hover:rotate-2 perspective-1000">
//                 <div className="absolute inset-0 bg-white/10 rounded-full filter blur-xl transform scale-75 group-hover:scale-100 transition-transform duration-700"></div>
//                 <Image
//                   src={product.image}
//                   alt={product.title}
//                   width={400}
//                   height={400}
//                   className="w-4/5 h-4/5 object-contain p-8 drop-shadow-lg"
//                 />
//               </div>
              
//               {/* Enhanced animated decorative elements */}
//               <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
//                 <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-white/10 animate-pulse"></div>
//                 <div className="absolute bottom-10 right-10 w-16 h-16 rounded-full bg-white/10 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
//                 <div className="absolute top-1/3 right-1/4 w-12 h-12 rounded-full bg-white/10 animate-pulse" style={{ animationDelay: '1s' }}></div>
//                 <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-white/5 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
                
//                 {/* Dynamic floating particles */}
//                 <div className="absolute w-3 h-3 rounded-full bg-white/20 animate-float" style={{ top: '20%', left: '30%', animationDuration: '6s', animationDelay: '0s' }}></div>
//                 <div className="absolute w-2 h-2 rounded-full bg-white/20 animate-float" style={{ top: '70%', left: '20%', animationDuration: '8s', animationDelay: '1s' }}></div>
//                 <div className="absolute w-4 h-4 rounded-full bg-white/20 animate-float" style={{ top: '40%', left: '80%', animationDuration: '7s', animationDelay: '2s' }}></div>
//               </div>
//             </div>
//           </div>
//           <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
//             {/* Enhanced category tag with gradient */}
//             <div className="inline-flex items-center bg-gradient-to-r from-[#fb4b06]/10 to-[#fb4b06]/5 rounded-full px-4 py-1.5 mb-3">
//               <span className="text-[#fb4b06] text-sm py-2 font-semibold tracking-wide">Продукция Altyn Gaya</span>
//             </div>
            
//             <h3 className="text-[#1E22AA] text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: '"Avenir Next Heavy", system-ui, sans-serif' }}>
//               {product.title}
//             </h3>
//             <p className="text-gray-600 text-base md:text-lg mb-6 md:mb-8 leading-relaxed">
//               {product.description}
//             </p>
//             <ul className="mb-6 md:mb-8 space-y-3 md:space-y-4">
//               {product.features && product.features.map((feature, index) => (
//                 <li key={index} className="flex items-start group">
//                   <div className="bg-[#fb4b06]/10 p-2 rounded-full mr-3 group-hover:bg-[#fb4b06] transition-colors duration-300 mt-0.5">
//                     <Check className="text-[#fb4b06] w-4 h-4 group-hover:text-white transition-colors duration-300" />
//                   </div>
//                   <span className="text-gray-700">{feature}</span>
//                 </li>
//               ))}
//               {!product.features && (
//                 <>
//                   <li className="flex items-start group">
//                     <div className="bg-[#fb4b06]/10 p-2 rounded-full mr-3 group-hover:bg-[#fb4b06] transition-colors duration-300 mt-0.5">
//                       <Check className="text-[#fb4b06] w-4 h-4 group-hover:text-white transition-colors duration-300" />
//                     </div>
//                     <span className="text-gray-700">Высокое качество</span>
//                   </li>
//                   <li className="flex items-start group">
//                     <div className="bg-[#fb4b06]/10 p-2 rounded-full mr-3 group-hover:bg-[#fb4b06] transition-colors duration-300 mt-0.5">
//                       <Check className="text-[#fb4b06] w-4 h-4 group-hover:text-white transition-colors duration-300" />
//                     </div>
//                     <span className="text-gray-700">Экологичные материалы</span>
//                   </li>
//                   <li className="flex items-start group">
//                     <div className="bg-[#fb4b06]/10 p-2 rounded-full mr-3 group-hover:bg-[#fb4b06] transition-colors duration-300 mt-0.5">
//                       <Check className="text-[#fb4b06] w-4 h-4 group-hover:text-white transition-colors duration-300" />
//                     </div>
//                     <span className="text-gray-700">Оптимальная цена</span>
//                   </li>
//                 </>
//               )}
//             </ul>
            
//             {/* Enhanced button with animated gradient hover effect */}
//             <Button className="bg-[#1E22AA] hover:bg-[#1E22AA]/90 rounded-full text-white px-6 py-2 md:px-8 md:py-6 text-sm md:text-md font-semibold group overflow-hidden relative w-full md:w-auto">
//               <span className="relative z-10 flex items-center justify-center gap-2">
//                 Подробнее
//                 <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//               </span>
//               <span className="absolute inset-0 bg-gradient-to-r from-[#fb4b06] to-[#fb4b06]/90 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></span>
//             </Button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const ProductCarousel: React.FC = () => {
//   const companies: Company[] = [
//     {
//       name: "Real Plus",
//       color: "#3538C8",
//       logoUrl: "/images/logo/RealPlus.png", // Add path to your logo image
//       categories: [
//         "Порошки",
//         "Универсальные жидкие моющие средства с кондиционером",
//         "Стиральные порошки",
//         "Освежители воздуха",
//         "Жидкое мыло",
//         "Универсальный гель для стирки"
//       ]
//     },
//     {
//       name: "Wim",
//       color: "#03a31e",
//       logoUrl: "/images/logo/Wim.png", // Add path to your logo image
//       categories: [
//         "Универсальные чистящие средства",
//         "Бытовые чистящие спреи"
//       ]
//     },
//     {
//       name: "Yumşa Plus",
//       color: "#1138b7",
//       logoUrl: "/images/logo/Yumsa.png", // Add path to your logo image
//       categories: [
//         "Универсальные жидкие моющие средства с кондиционером",
//         "Спреи-освежители для тканей",
//         "Кондиционеры для белья"
//       ]
//     },
//     {
//       name: "Awen",
//       color: "#ff3e1c",
//       logoUrl: "/images/logo/Awen.png", // Add path to your logo image
//       categories: [
//         "Жидкости для мытья посуды"
//       ]
//     },
//     {
//       name: "Glass Plus",
//       color: "#e80c00",
//       logoUrl: "/images/logo/Glass.png", // Add path to your logo image
//       categories: [
//         "Средства для очистки стекол и поверхностей"
//       ]
//     }
//   ];

//   // Enhanced product data array with brand and category
//   const products = [
//     // Real Plus
//     {
//       title: "Real Plus Порошок для стирки",
//       description: "Мощный стиральный порошок для белого и цветного белья, эффективно удаляет загрязнения.",
//       image: "/images/RealPlus_Powder.png",
//       color: "#3538C8",
//       brandName: "Real Plus",
//       category: "Порошки",
//       features: [
//         "Глубокая очистка тканей",
//         "Сохранение цвета",
//         "Эффективен даже при низких температурах"
//       ]
//     },
//     {
//       title: "Real Plus Универсальное жидкое моющее средство с кондиционером",
//       description: "Многофункциональное средство для бережного ухода за тканями с эффектом кондиционирования.",
//       image: "/images/RealPlus_Liquid.png",
//       color: "#3538C8",
//       brandName: "Real Plus",
//       category: "Универсальные жидкие моющие средства с кондиционером",
//       features: [
//         "Делает ткани мягкими и свежими",
//         "Удаляет стойкие пятна",
//         "Подходит для ручной и машинной стирки"
//       ]
//     },
//     {
//       title: "Real Plus Стиральный порошок",
//       description: "Специальный стиральный порошок для сохранения цвета и структуры ткани.",
//       image: "/images/RealPlus_Detergent.png",
//       color: "#3538C8",
//       brandName: "Real Plus",
//       category: "Стиральные порошки",
//       features: [
//         "Защита цвета тканей",
//         "Эффективен при любых температурах",
//         "Подходит для всех типов стиральных машин"
//       ]
//     },
//     {
//       title: "Real Plus Освежитель воздуха",
//       description: "Долговременная свежесть и приятный аромат в вашем доме.",
//       image: "/images/RealPlus_AirFreshener.png",
//       color: "#3538C8",
//       brandName: "Real Plus",
//       category: "Освежители воздуха",
//       features: [
//         "Нейтрализует неприятные запахи",
//         "Долговременный эффект",
//         "Разнообразие ароматов"
//       ]
//     },
//     {
//       title: "Real Plus Жидкое мыло",
//       description: "Увлажняющее жидкое мыло с мягким очищающим эффектом.",
//       image: "/images/RealPlus_Soap.png",
//       color: "#3538C8",
//       brandName: "Real Plus",
//       category: "Жидкое мыло",
//       features: [
//         "Гипоаллергенный состав",
//         "Не сушит кожу",
//         "Приятный аромат"
//       ]
//     },
//     {
//       title: "Real Plus Универсальный гель для стирки",
//       description: "Эффективный гель для стирки, придающий белью свежесть и мягкость.",
//       image: "/images/RealPlus_Gel.png",
//       color: "#3538C8",
//       brandName: "Real Plus",
//       category: "Универсальный гель для стирки",
//       features: [
//         "Глубокая очистка тканей",
//         "Экономичный расход",
//         "Подходит для всех типов тканей"
//       ]
//     },
  
//     // Vim
//     {
//       title: "Wim Универсальное чистящее средство",
//       description: "Эффективное средство для борьбы с загрязнениями на любых поверхностях.",
//       image: "/images/Vim_Cleaner.png",
//       color: "#03a31e",
//       brandName: "Wim",
//       category: "Универсальные чистящие средства",
//       features: [
//         "Быстрое удаление грязи",
//         "Безопасный состав",
//         "Не оставляет разводов"
//       ]
//     },
//     {
//       title: "Wim Бытовой чистящий спрей",
//       description: "Спрей для моментального очищения поверхностей от загрязнений.",
//       image: "/images/Wim_Spray.png",
//       color: "#03a31e",
//       brandName: "Wim",
//       category: "Бытовые чистящие спреи",
//       features: [
//         "Подходит для кухни и ванной",
//         "Антибактериальный эффект",
//         "Быстрое испарение без следов"
//       ]
//     },
  
//     // Yumşa Plus
//     {
//       title: "Yumşa Plus Универсальное жидкое моющее средство с кондиционером",
//       description: "Мягкое моющее средство с кондиционером для деликатных тканей.",
//       image: "/images/Yumsa_Liquid.png",
//       color: "#1138b7",
//       brandName: "Yumşa Plus",
//       category: "Универсальные жидкие моющие средства с кондиционером",
//       features: [
//         "Мягкий эффект на ткани",
//         "Сохранение формы одежды",
//         "Освежающий аромат"
//       ]
//     },
//     {
//       title: "Yumşa Plus Спрей-освежитель для тканей",
//       description: "Освежает и удаляет запахи с одежды и текстиля.",
//       image: "/images/Yumsa_FabricSpray.png",
//       color: "#1138b7",
//       brandName: "Yumşa Plus",
//       category: "Спреи-освежители для тканей",
//       features: [
//         "Быстрое действие",
//         "Не оставляет следов",
//         "Гипоаллергенный состав"
//       ]
//     },
//     {
//       title: "Yumşa Plus Кондиционер для белья",
//       description: "Придает белью мягкость и приятный аромат.",
//       image: "/images/Yumsa_Softener.png",
//       color: "#1138b7",
//       brandName: "Yumşa Plus",
//       category: "Кондиционеры для белья",
//       features: [
//         "Антистатический эффект",
//         "Долговременная свежесть",
//         "Экономичный расход"
//       ]
//     },
  
//     // Awen
//     {
//       title: "Awen Жидкость для мытья посуды",
//       description: "Эффективное средство для удаления жира и загрязнений.",
//       image: "/images/Awen_Dishwashing.png",
//       color: "#ff3e1c",
//       brandName: "Awen",
//       category: "Жидкости для мытья посуды",
//       features: [
//         "Обильная пена",
//         "Мягкое воздействие на кожу рук",
//         "Удаление жира даже в холодной воде"
//       ]
//     },
  
//     // Glass Plus
//     {
//       title: "Glass Plus Средство для очистки стекол и поверхностей",
//       description: "Средство для сияющей чистоты стекол без разводов.",
//       image: "/images/GlassPlus_Cleaner.png",
//       color: "#e80c00",
//       brandName: "Glass Plus",
//       category: "Средства для очистки стекол и поверхностей",
//       features: [
//         "Быстрое испарение",
//         "Удаление пыли и грязи",
//         "Не оставляет разводов"
//       ]
//     }
//   ];

//   const [activeProductIndex, setActiveProductIndex] = useState(0);
//   const [isPaused, setIsPaused] = useState(false);
//   const [touchStartX, setTouchStartX] = useState(0);
//   const [filterBrand, setFilterBrand] = useState<string | null>(null);
//   const [filterCategory, setFilterCategory] = useState<string | null>(null);
//   const [filteredProducts, setFilteredProducts] = useState(products);

//   // Apply filters
//   useEffect(() => {
//     let filtered = products;
    
//     if (filterBrand) {
//       filtered = filtered.filter(product => product.brandName === filterBrand);
//     }
    
//     if (filterCategory) {
//       filtered = filtered.filter(product => product.category === filterCategory);
//     }
    
//     setFilteredProducts(filtered);
//     setActiveProductIndex(0);
//   }, [filterBrand, filterCategory, products]);

//   // Slider navigation handlers
//   const nextProduct = () => {
//     setActiveProductIndex((prev) => (prev === filteredProducts.length - 1 ? 0 : prev + 1));
//   };
  
//   const prevProduct = () => {
//     setActiveProductIndex((prev) => (prev === 0 ? filteredProducts.length - 1 : prev - 1));
//   };

//   // Touch event handlers for mobile swipe
//   const handleTouchStart = (e: React.TouchEvent) => {
//     setIsPaused(true);
//     setTouchStartX(e.touches[0].clientX);
//   };

//   const handleTouchEnd = (e: React.TouchEvent) => {
//     setIsPaused(false);
//     const touchEndX = e.changedTouches[0].clientX;
//     const diffX = touchEndX - touchStartX;
    
//     // Detect swipe with threshold of 50px
//     if (diffX > 50) {
//       prevProduct();
//     } else if (diffX < -50) {
//       nextProduct();
//     }
//   };

//   // Auto-advance slider with pause on hover or touch
//   useEffect(() => {
//     if (isPaused || filteredProducts.length === 0) return;
    
//     const interval = setInterval(() => {
//       nextProduct();
//     }, 5000);
    
//     return () => clearInterval(interval);
//   }, [activeProductIndex, isPaused, filteredProducts, nextProduct]);

//   // Keyboard navigation
//   useEffect(() => {
//     const handleKeyDown = (e: KeyboardEvent) => {
//       if (e.key === 'ArrowLeft') {
//         prevProduct();
//       } else if (e.key === 'ArrowRight') {
//         nextProduct();
//       }
//     };
    
//     window.addEventListener('keydown', handleKeyDown);
//     return () => window.removeEventListener('keydown', handleKeyDown);
//   }, [nextProduct, prevProduct]);

//   return (
//     <section className="relative py-14 md:pb-32 bg-white overflow-hidden">
      
//       {/* Enhanced background elements with animation */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute top-1/3 left-1/4 w-32 md:w-64 h-32 md:h-64 rounded-full bg-[#1E22AA]/5 filter blur-xl md:blur-3xl animate-pulse" style={{ animationDuration: '8s' }}></div>
//         <div className="absolute bottom-1/3 right-1/4 w-40 md:w-80 h-40 md:h-80 rounded-full bg-[#fb4b06]/5 filter blur-xl md:blur-3xl animate-pulse" style={{ animationDuration: '12s', animationDelay: '2s' }}></div>
//         <div className="absolute top-2/3 left-1/2 w-24 md:w-48 h-24 md:h-48 rounded-full bg-[#E85D24]/5 filter blur-xl md:blur-3xl animate-pulse" style={{ animationDuration: '10s', animationDelay: '1s' }}></div>
//       </div>
      
//       <div className="container mx-auto px-4 relative z-10">
//         <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
//           <FadeInView>
//             <div className="inline-block mb-4 bg-gradient-to-r from-[#fb4b06]/20 to-[#fb4b06]/10 rounded-full px-4 md:px-6 py-2">
//               <span className="text-[#fb4b06] text-xs md:text-sm font-medium uppercase tracking-wider">Наша продукция</span>
//             </div>
//             <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight" style={{ fontFamily: '"Avenir Next Heavy", system-ui, sans-serif' }}>
//               <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#1E22AA] to-[#3538C8]">КАЧЕСТВО, КОТОРОЕ </span>
//               <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#fb4b06] to-[#E85D24]">ЗАБОТИТСЯ О ВАС</span>
//             </h2>
//             <p className="text-base md:text-xl text-gray-600 leading-relaxed">
//               Каждый продукт компании Altyn Gaya разработан с заботой о комфорте и здоровье наших клиентов. Мы используем только лучшие материалы и современные технологии производства.
//             </p>
//           </FadeInView>
//         </div>
        
//           {/* Brands section */}
//       <div className="my-4 md:my-8">
//         <FadeInView>
//           <h3 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-10">
//             <span className="text-[#1E22AA]">Наши</span> <span className="text-[#fb4b06]">бренды</span>
//           </h3>
//           <div className="flex flex-wrap justify-center gap-4 md:gap-8">
//             {companies.map((company) => (
//               <div
//                 key={company.name}
//                 onClick={() => setFilterBrand(company.name === filterBrand ? null : company.name)}
//                 className={`flex flex-col items-center p-4 md:p-6 rounded-xl cursor-pointer transition-all duration-300 ${
//                   company.name === filterBrand
//                     ? 'bg-white shadow-lg transform scale-105'
//                     : 'bg-white/50 hover:bg-white hover:shadow-md'
//                 }`}
//               >
//                 <div 
//                   className="w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mb-3 overflow-hidden"
//                   style={{ backgroundColor: `${company.color}20` }}
//                 >
//                   <Image 
//                     src={company.logoUrl} 
//                     alt={`${company.name} logo`}
//                     width={64}
//   height={64} 
//                     className="w-12 h-12 md:w-16 md:h-16 object-contain"
//                   />
//                 </div>
//                 <h4 className="font-semibold text-lg" style={{ color: company.color }}>{company.name}</h4>
//                 <p className="text-xs text-gray-500 mt-1">{company.categories.length} категорий</p>
//               </div>
//             ))}
//           </div>
//         </FadeInView>
//       </div>
//       </div>

//         <div 
//           className="relative max-w-5xl mx-auto h-[500px] md:h-[560px]"
//           onMouseEnter={() => setIsPaused(true)}
//           onMouseLeave={() => setIsPaused(false)}
//           onTouchStart={handleTouchStart}
//           onTouchEnd={handleTouchEnd}
//           role="region"
//           aria-label="Продуктовая карусель"
//           aria-roledescription="carousel"
//         >
//           {filteredProducts.length === 0 ? (
//             <div className="flex items-center justify-center h-full">
//               <div className="text-center p-6 rounded-lg bg-gray-50 shadow-inner">
//                 <div className="flex justify-center mb-4">
//                   <Filter className="w-12 h-12 text-gray-400" />
//                 </div>
//                 <h3 className="text-xl font-semibold text-gray-700 mb-2">Нет результатов</h3>
//                 <p className="text-gray-600">Попробуйте изменить параметры фильтрации для отображения продуктов</p>
//                 <Button
//                   onClick={() => {
//                     setFilterBrand(null);
//                     setFilterCategory(null);
//                   }}
//                   className="mt-4 bg-[#1E22AA] hover:bg-[#1E22AA]/90 text-white rounded-full px-4 py-2"
//                 >
//                   Сбросить фильтры
//                 </Button>
//               </div>
//             </div>
//           ) : (
//             <div className="relative h-full perspective-1000">
//               {filteredProducts.map((product, index) => (
//                 <ProductCard 
//                   key={index} 
//                   product={product}
//                   isActive={index === activeProductIndex} 
//                   index={index}
//                   activeIndex={activeProductIndex}
//                 />
//               ))}
//             </div>
//           )}
          
//           {/* Enhanced slider navigation with animations */}
//           {filteredProducts.length > 0 && (
//             <div className="flex justify-center gap-14 items-center mt-6 md:mt-10">
//               <Button 
//                 onClick={prevProduct} 
//                 className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-white shadow-xl border border-gray-100 hover:bg-gradient-to-r from-[#fb4b06] to-[#E85D24] hover:border-transparent hover:text-white transition-colors flex items-center justify-center group"
//                 variant="outline"
//                 aria-label="Previous product"
//               >
//                 <ChevronLeft className="w-8 h-8 md:w-12 md:h-12 text-gray-400 group-hover:text-white transition-colors" />
//               </Button>
              
//               <div className="flex space-x-2 md:space-x-3">
//                 {filteredProducts.map((_, index) => (
//                   <button 
//                     key={index}
//                     onClick={() => setActiveProductIndex(index)}
//                     className={`h-3 rounded-full transition-all duration-300 ${
//                       index === activeProductIndex 
//                         ? "bg-gradient-to-r from-[#fb4b06] to-[#E85D24] w-8 md:w-10" 
//                         : "bg-gray-300 hover:bg-gray-400 w-3"
//                     }`}
//                     aria-label={`Go to slide ${index + 1}`}
//                     aria-current={index === activeProductIndex ? "true" : "false"}
//                   />
//                 ))}
//               </div>
              
//               <Button 
//                 onClick={nextProduct} 
//                 className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-white shadow-xl border border-gray-100 hover:bg-gradient-to-r from-[#fb4b06] to-[#E85D24] hover:border-transparent hover:text-white transition-colors flex items-center justify-center group"
//                 variant="outline"
//                 aria-label="Next product"
//               >
//                 <ChevronRight className="w-8 h-8 md:w-12 md:h-12 text-gray-400 group-hover:text-white transition-colors" />
//               </Button>
//             </div>
//           )}
//         </div>

      
//       {/* Add custom keyframe animations to stylesheet */}
//       <style jsx global>{`
//         @keyframes float {
//           0%, 100% { transform: translateY(0) translateX(0); }
//           25% { transform: translateY(-10px) translateX(5px); }
//           50% { transform: translateY(0) translateX(10px); }
//           75% { transform: translateY(10px) translateX(5px); }
//         }
//         .animate-float {
//           animation: float 7s ease-in-out infinite;
//         }
//         .perspective-1000 {
//           perspective: 1000px;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default ProductCarousel;


// 'use client'
// import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
// import { Button } from './ui/button';
// import { ChevronLeft, ChevronRight, Check, ArrowRight, Filter } from 'lucide-react';
// import Image from 'next/image';

// // Removed unused ProductPageProps type

// // Component for smooth element appearance
// const FadeInView: React.FC<{
//   children: React.ReactNode;
//   delay?: number;
//   className?: string;
// }> = ({ children, delay = 0, className = "" }) => {
//   const [isVisible, setIsVisible] = useState(false);
//   const domRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(entries => {
//       if (entries[0].isIntersecting) {
//         setIsVisible(true);
//         if (domRef.current) {
//           observer.unobserve(domRef.current);
//         }
//       }
//     });
    
//     if (domRef.current) {
//       observer.observe(domRef.current);
//     }
    
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <div
//       ref={domRef}
//       className={`${className} transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
//       style={{ transitionDelay: `${delay}ms` }}
//     >
//       {children}
//     </div>
//   );
// };


// interface Product {
//   title: string;
//   description: string;
//   image: string;
//   color: string;
//   features?: string[];
//   brandName: string;
//   category: string;
// }

// // Company interface to organize brands and their product categories
// interface Company {
//   name: string;
//   color: string;
//   logoUrl: string;
//   categories: string[];
// }

// // Animated product card component
// interface ProductCardProps {
//   product: Product;
//   isActive: boolean;
//   index: number;
//   activeIndex: number;
// }

// const ProductCard: React.FC<ProductCardProps> = ({ product, isActive }) => {

//   const cardPosition = isActive ? 
//     "opacity-100 z-20 transform-none" : 
//     "opacity-0 z-0 scale-95";

//   return (
//     <div className={`absolute inset-0 transition-all duration-700 ease-out ${cardPosition}`}>
//       <div className="bg-white rounded-3xl overflow-hidden shadow-2xl mx-auto h-full border border-gray-100 hover:shadow-[0_20px_50px_rgba(30,34,170,0.1)] transition-shadow duration-500">
//         <div className="flex flex-col md:flex-row h-full">
//           <div className="md:w-3/5 relative overflow-hidden group">
//             <div 
//               className="h-64 md:h-full w-full relative flex items-center justify-center"
//               style={{ 
//                 background: `linear-gradient(135deg, ${product.color} 30%, ${product.color}CC 100%)` 
//               }}
//             >
//               {/* Brand badge in top left */}
//               <div className="absolute top-4 left-4 z-20 bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-full">
//                 <span className="font-bold text-sm" style={{ color: product.color }}>{product.brandName}</span>
//               </div>

//               {/* Category badge in top right */}
//               <div className="absolute top-4 right-4 z-20 bg-black/30 backdrop-blur-sm px-3 py-1.5 rounded-full">
//                 <span className="text-white text-xs">{product.category}</span>
//               </div>
              
//               {/* 3D perspective container for product image */}
//               <div className="relative z-10 transform transition-transform duration-700 group-hover:scale-110 group-hover:rotate-2 perspective-1000">
//                 <div className="absolute inset-0 bg-white/10 rounded-full filter blur-xl transform scale-75 group-hover:scale-100 transition-transform duration-700"></div>
//                 <Image
//                   src={product.image}
//                   alt={product.title}
//                   width={400}
//                   height={400}
//                   className="w-4/5 h-4/5 object-contain p-8 drop-shadow-lg"
//                 />
//               </div>
              
//               {/* Enhanced animated decorative elements */}
//               <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
//                 <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-white/10 animate-pulse"></div>
//                 <div className="absolute bottom-10 right-10 w-16 h-16 rounded-full bg-white/10 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
//                 <div className="absolute top-1/3 right-1/4 w-12 h-12 rounded-full bg-white/10 animate-pulse" style={{ animationDelay: '1s' }}></div>
//                 <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-white/5 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
                
//                 {/* Dynamic floating particles */}
//                 <div className="absolute w-3 h-3 rounded-full bg-white/20 animate-float" style={{ top: '20%', left: '30%', animationDuration: '6s', animationDelay: '0s' }}></div>
//                 <div className="absolute w-2 h-2 rounded-full bg-white/20 animate-float" style={{ top: '70%', left: '20%', animationDuration: '8s', animationDelay: '1s' }}></div>
//                 <div className="absolute w-4 h-4 rounded-full bg-white/20 animate-float" style={{ top: '40%', left: '80%', animationDuration: '7s', animationDelay: '2s' }}></div>
//               </div>
//             </div>
//           </div>
//           <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
//             {/* Enhanced category tag with gradient */}
//             <div className="inline-flex items-center bg-gradient-to-r from-[#fb4b06]/10 to-[#fb4b06]/5 rounded-full px-4 py-1.5 mb-3">
//               <span className="text-[#fb4b06] text-sm py-2 font-semibold tracking-wide">Продукция Altyn Gaya</span>
//             </div>
            
//             <h3 className="text-[#1E22AA] text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: '"Avenir Next Heavy", system-ui, sans-serif' }}>
//               {product.title}
//             </h3>
//             <p className="text-gray-600 text-base md:text-lg mb-6 md:mb-8 leading-relaxed">
//               {product.description}
//             </p>
//             <ul className="mb-6 md:mb-8 space-y-3 md:space-y-4">
//               {product.features && product.features.map((feature, index) => (
//                 <li key={index} className="flex items-start group">
//                   <div className="bg-[#fb4b06]/10 p-2 rounded-full mr-3 group-hover:bg-[#fb4b06] transition-colors duration-300 mt-0.5">
//                     <Check className="text-[#fb4b06] w-4 h-4 group-hover:text-white transition-colors duration-300" />
//                   </div>
//                   <span className="text-gray-700">{feature}</span>
//                 </li>
//               ))}
//               {!product.features && (
//                 <>
//                   <li className="flex items-start group">
//                     <div className="bg-[#fb4b06]/10 p-2 rounded-full mr-3 group-hover:bg-[#fb4b06] transition-colors duration-300 mt-0.5">
//                       <Check className="text-[#fb4b06] w-4 h-4 group-hover:text-white transition-colors duration-300" />
//                     </div>
//                     <span className="text-gray-700">Высокое качество</span>
//                   </li>
//                   <li className="flex items-start group">
//                     <div className="bg-[#fb4b06]/10 p-2 rounded-full mr-3 group-hover:bg-[#fb4b06] transition-colors duration-300 mt-0.5">
//                       <Check className="text-[#fb4b06] w-4 h-4 group-hover:text-white transition-colors duration-300" />
//                     </div>
//                     <span className="text-gray-700">Экологичные материалы</span>
//                   </li>
//                   <li className="flex items-start group">
//                     <div className="bg-[#fb4b06]/10 p-2 rounded-full mr-3 group-hover:bg-[#fb4b06] transition-colors duration-300 mt-0.5">
//                       <Check className="text-[#fb4b06] w-4 h-4 group-hover:text-white transition-colors duration-300" />
//                     </div>
//                     <span className="text-gray-700">Оптимальная цена</span>
//                   </li>
//                 </>
//               )}
//             </ul>
            
//             {/* Enhanced button with animated gradient hover effect */}
//             <Button className="bg-[#1E22AA] hover:bg-[#1E22AA]/90 rounded-full text-white px-6 py-2 md:px-8 md:py-6 text-sm md:text-md font-semibold group overflow-hidden relative w-full md:w-auto">
//               <span className="relative z-10 flex items-center justify-center gap-2">
//                 Подробнее
//                 <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
//               </span>
//               <span className="absolute inset-0 bg-gradient-to-r from-[#fb4b06] to-[#fb4b06]/90 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></span>
//             </Button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const ProductCarousel: React.FC = () => {
//   // Use useMemo to prevent recreating companies array on each render
//   const companies = useMemo<Company[]>(() => [
//     {
//       name: "Real Plus",
//       color: "#3538C8",
//       logoUrl: "/images/logo/RealPlus.png",
//       categories: [
//         "Порошки",
//         "Универсальные жидкие моющие средства с кондиционером",
//         "Стиральные порошки",
//         "Освежители воздуха",
//         "Жидкое мыло",
//         "Универсальный гель для стирки"
//       ]
//     },
//     {
//       name: "Wim",
//       color: "#03a31e",
//       logoUrl: "/images/logo/Wim.png",
//       categories: [
//         "Универсальные чистящие средства",
//         "Бытовые чистящие спреи"
//       ]
//     },
//     {
//       name: "Yumşa Plus",
//       color: "#1138b7",
//       logoUrl: "/images/logo/Yumsa.png",
//       categories: [
//         "Универсальные жидкие моющие средства с кондиционером",
//         "Спреи-освежители для тканей",
//         "Кондиционеры для белья"
//       ]
//     },
//     {
//       name: "Awen",
//       color: "#ff3e1c",
//       logoUrl: "/images/logo/Awen.png",
//       categories: [
//         "Жидкости для мытья посуды"
//       ]
//     },
//     {
//       name: "Glass Plus",
//       color: "#e80c00",
//       logoUrl: "/images/logo/Glass.png",
//       categories: [
//         "Средства для очистки стекол и поверхностей"
//       ]
//     }
//   ], []);

//   // Use useMemo to prevent recreating products array on each render
//   const products = useMemo<Product[]>(() => [
//           // Real Plus
//           {
//             title: "Real Plus Порошок для стирки",
//             description: "Мощный стиральный порошок для белого и цветного белья, эффективно удаляет загрязнения.",
//             image: "/images/RealPlus_Soda.png",
//             color: "#3538C8",
//             brandName: "Real Plus",
//             category: "Порошки",
//             features: [
//               "Глубокая очистка тканей",
//               "Сохранение цвета",
//               "Эффективен даже при низких температурах"
//             ]
//           },
//           {
//             title: "Real Plus Универсальное жидкое моющее средство с кондиционером",
//             description: "Многофункциональное средство для бережного ухода за тканями с эффектом кондиционирования.",
//             image: "/images/category_pictures/RealPlus_SuwukSoda_3l_.png",
//             color: "#3538C8",
//             brandName: "Real Plus",
//             category: "Универсальные жидкие моющие средства с кондиционером",
//             features: [
//               "Делает ткани мягкими и свежими",
//               "Удаляет стойкие пятна",
//               "Подходит для ручной и машинной стирки"
//             ]
//           },
//           {
//             title: "Real Plus Освежитель воздуха",
//             description: "Долговременная свежесть и приятный аромат в вашем доме.",
//             image: "/images/category_pictures/RealPlus_Sprey.png",
//             color: "#3538C8",
//             brandName: "Real Plus",
//             category: "Освежители воздуха",
//             features: [
//               "Нейтрализует неприятные запахи",
//               "Долговременный эффект",
//               "Разнообразие ароматов"
//             ]
//           },
//           {
//             title: "Real Plus Жидкое мыло",
//             description: "Увлажняющее жидкое мыло с мягким очищающим эффектом.",
//             image: "/images/category_pictures/RealPlus_ElSabyn.png",
//             color: "#3538C8",
//             brandName: "Real Plus",
//             category: "Жидкое мыло",
//             features: [
//               "Гипоаллергенный состав",
//               "Не сушит кожу",
//               "Приятный аромат"
//             ]
//           },
//           {
//             title: "Real Plus Универсальный гель для стирки",
//             description: "Эффективный гель для стирки, придающий белью свежесть и мягкость.",
//             image: "/images/category_pictures/RealPlus_SuwukSoda_1l.png",
//             color: "#3538C8",
//             brandName: "Real Plus",
//             category: "Универсальный гель для стирки",
//             features: [
//               "Глубокая очистка тканей",
//               "Экономичный расход",
//               "Подходит для всех типов тканей"
//             ]
//           },
        
//           // Vim
//           {
//             title: "Wim Универсальное чистящее средство",
//             description: "Эффективное средство для борьбы с загрязнениями на любых поверхностях.",
//             image: "/images/category_pictures/Wim_domestos.png",
//             color: "#03a31e",
//             brandName: "Wim",
//             category: "Универсальные чистящие средства",
//             features: [
//               "Быстрое удаление грязи",
//               "Безопасный состав",
//               "Не оставляет разводов"
//             ]
//           },
//           {
//             title: "Wim Бытовой чистящий спрей",
//             description: "Спрей для моментального очищения поверхностей от загрязнений.",
//             image: "/images/category_pictures/Wim_antizir.png",
//             color: "#03a31e",
//             brandName: "Wim",
//             category: "Бытовые чистящие спреи",
//             features: [
//               "Подходит для кухни и ванной",
//               "Антибактериальный эффект",
//               "Быстрое испарение без следов"
//             ]
//           },
        
//           // Yumşa Plus
//           {
//             title: "Yumşa Plus Универсальное жидкое моющее средство с кондиционером",
//             description: "Мягкое моющее средство с кондиционером для деликатных тканей.",
//             image: "/images/category_pictures/Yumsa_uly.png",
//             color: "#1138b7",
//             brandName: "Yumşa Plus",
//             category: "Универсальные жидкие моющие средства с кондиционером",
//             features: [
//               "Мягкий эффект на ткани",
//               "Сохранение формы одежды",
//               "Освежающий аромат"
//             ]
//           },
//           {
//             title: "Yumşa Plus Спрей-освежитель для тканей",
//             description: "Освежает и удаляет запахи с одежды и текстиля.",
//             image: "/images/category_pictures/Yumsa_sprey2.png",
//             color: "#1138b7",
//             brandName: "Yumşa Plus",
//             category: "Спреи-освежители для тканей",
//             features: [
//               "Быстрое действие",
//               "Не оставляет следов",
//               "Гипоаллергенный состав"
//             ]
//           },
//           {
//             title: "Yumşa Plus Кондиционер для белья",
//             description: "Придает белью мягкость и приятный аромат.",
//             image: "/images/category_pictures/Yumsa_sprey.png",
//             color: "#1138b7",
//             brandName: "Yumşa Plus",
//             category: "Кондиционеры для белья",
//             features: [
//               "Антистатический эффект",
//               "Долговременная свежесть",
//               "Экономичный расход"
//             ]
//           },
        
//           // Awen
//           {
//             title: "Awen Жидкость для мытья посуды",
//             description: "Эффективное средство для удаления жира и загрязнений.",
//             image: "/images/category_pictures/Awen.png",
//             color: "#ff3e1c",
//             brandName: "Awen",
//             category: "Жидкости для мытья посуды",
//             features: [
//               "Обильная пена",
//               "Мягкое воздействие на кожу рук",
//               "Удаление жира даже в холодной воде"
//             ]
//           },
        
//           // Glass Plus
//           {
//             title: "Glass Plus Средство для очистки стекол и поверхностей",
//             description: "Средство для сияющей чистоты стекол без разводов.",
//             image: "/images/category_pictures/GlassPlus.png",
//             color: "#e80c00",
//             brandName: "Glass Plus",
//             category: "Средства для очистки стекол и поверхностей",
//             features: [
//               "Быстрое испарение",
//               "Удаление пыли и грязи",
//               "Не оставляет разводов"
//             ]
//           }
//   ], []);

//   const [activeProductIndex, setActiveProductIndex] = useState(0);
//   const [isPaused, setIsPaused] = useState(false);
//   const [touchStartX, setTouchStartX] = useState(0);
//   const [filterBrand, setFilterBrand] = useState<string | null>(null);
//   const [filterCategory, setFilterCategory] = useState<string | null>(null);
//   const [filteredProducts, setFilteredProducts] = useState(products);

//   // Use useCallback for nextProduct and prevProduct to prevent recreation on each render
//   const nextProduct = useCallback(() => {
//     setActiveProductIndex((prev) => (prev === filteredProducts.length - 1 ? 0 : prev + 1));
//   }, [filteredProducts.length]);
  
//   const prevProduct = useCallback(() => {
//     setActiveProductIndex((prev) => (prev === 0 ? filteredProducts.length - 1 : prev - 1));
//   }, [filteredProducts.length]);

//   // Apply filters
//   useEffect(() => {
//     let filtered = products;
    
//     if (filterBrand) {
//       filtered = filtered.filter(product => product.brandName === filterBrand);
//     }
    
//     if (filterCategory) {
//       filtered = filtered.filter(product => product.category === filterCategory);
//     }
    
//     setFilteredProducts(filtered);
//     setActiveProductIndex(0);
//   }, [filterBrand, filterCategory, products]);

//   // Touch event handlers for mobile swipe
//   const handleTouchStart = (e: React.TouchEvent) => {
//     setIsPaused(true);
//     setTouchStartX(e.touches[0].clientX);
//   };

//   const handleTouchEnd = (e: React.TouchEvent) => {
//     setIsPaused(false);
//     const touchEndX = e.changedTouches[0].clientX;
//     const diffX = touchEndX - touchStartX;
    
//     // Detect swipe with threshold of 50px
//     if (diffX > 50) {
//       prevProduct();
//     } else if (diffX < -50) {
//       nextProduct();
//     }
//   };

//   // Auto-advance slider with pause on hover or touch
//   useEffect(() => {
//     if (isPaused || filteredProducts.length === 0) return;
    
//     const interval = setInterval(() => {
//       nextProduct();
//     }, 5000);
    
//     return () => clearInterval(interval);
//   }, [isPaused, filteredProducts.length, nextProduct]);

//   // Keyboard navigation
//   useEffect(() => {
//     const handleKeyDown = (e: KeyboardEvent) => {
//       if (e.key === 'ArrowLeft') {
//         prevProduct();
//       } else if (e.key === 'ArrowRight') {
//         nextProduct();
//       }
//     };
    
//     window.addEventListener('keydown', handleKeyDown);
//     return () => window.removeEventListener('keydown', handleKeyDown);
//   }, [nextProduct, prevProduct]);

//   return (
//     <section className="relative py-14 md:pb-32 bg-white overflow-hidden">
      
//       {/* Enhanced background elements with animation */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute top-1/3 left-1/4 w-32 md:w-64 h-32 md:h-64 rounded-full bg-[#1E22AA]/5 filter blur-xl md:blur-3xl animate-pulse" style={{ animationDuration: '8s' }}></div>
//         <div className="absolute bottom-1/3 right-1/4 w-40 md:w-80 h-40 md:h-80 rounded-full bg-[#fb4b06]/5 filter blur-xl md:blur-3xl animate-pulse" style={{ animationDuration: '12s', animationDelay: '2s' }}></div>
//         <div className="absolute top-2/3 left-1/2 w-24 md:w-48 h-24 md:h-48 rounded-full bg-[#E85D24]/5 filter blur-xl md:blur-3xl animate-pulse" style={{ animationDuration: '10s', animationDelay: '1s' }}></div>
//       </div>
      
//       <div className="container mx-auto px-4 relative z-10">
//         <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
//           <FadeInView>
//             <div className="inline-block mb-4 bg-gradient-to-r from-[#fb4b06]/20 to-[#fb4b06]/10 rounded-full px-4 md:px-6 py-2">
//               <span className="text-[#fb4b06] text-xs md:text-sm font-medium uppercase tracking-wider">Наша продукция</span>
//             </div>
//             <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight" style={{ fontFamily: '"Avenir Next Heavy", system-ui, sans-serif' }}>
//               <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#1E22AA] to-[#3538C8]">КАЧЕСТВО, КОТОРОЕ </span>
//               <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#fb4b06] to-[#E85D24]">ЗАБОТИТСЯ О ВАС</span>
//             </h2>
//             <p className="text-base md:text-xl text-gray-600 leading-relaxed">
//               Каждый продукт компании Altyn Gaya разработан с заботой о комфорте и здоровье наших клиентов. Мы используем только лучшие материалы и современные технологии производства.
//             </p>
//           </FadeInView>
//         </div>
        
//         {/* Brands section */}
//         <div className="my-4 md:my-8">
//           <FadeInView>
//             <h3 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-10">
//               <span className="text-[#1E22AA]">Наши</span> <span className="text-[#fb4b06]">бренды</span>
//             </h3>
//             <div className="flex flex-wrap justify-center gap-4 md:gap-8">
//               {companies.map((company) => (
//                 <div
//                   key={company.name}
//                   onClick={() => setFilterBrand(company.name === filterBrand ? null : company.name)}
//                   className={`flex flex-col items-center p-4 md:p-6 rounded-xl cursor-pointer transition-all duration-300 ${
//                     company.name === filterBrand
//                       ? 'bg-white shadow-lg transform scale-105'
//                       : 'bg-white/50 hover:bg-white hover:shadow-md'
//                   }`}
//                 >
//                   <div 
//                     className="w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mb-3 overflow-hidden"
//                     style={{ backgroundColor: `${company.color}20` }}
//                   >
//                     <Image 
//                       src={company.logoUrl} 
//                       alt={`${company.name} logo`}
//                       width={64}
//                       height={64} 
//                       className="w-12 h-12 md:w-16 md:h-16 object-contain"
//                     />
//                   </div>
//                   <h4 className="font-semibold text-lg" style={{ color: company.color }}>{company.name}</h4>
//                   <p className="text-xs text-gray-500 mt-1">{company.categories.length} категорий</p>
//                 </div>
//               ))}
//             </div>
//           </FadeInView>
//         </div>
//       </div>

//       <div 
//         className="relative max-w-5xl mx-auto h-[500px] md:h-[560px]"
//         onMouseEnter={() => setIsPaused(true)}
//         onMouseLeave={() => setIsPaused(false)}
//         onTouchStart={handleTouchStart}
//         onTouchEnd={handleTouchEnd}
//         role="region"
//         aria-label="Продуктовая карусель"
//         aria-roledescription="carousel"
//       >
//         {filteredProducts.length === 0 ? (
//           <div className="flex items-center justify-center h-full">
//             <div className="text-center p-6 rounded-lg bg-gray-50 shadow-inner">
//               <div className="flex justify-center mb-4">
//                 <Filter className="w-12 h-12 text-gray-400" />
//               </div>
//               <h3 className="text-xl font-semibold text-gray-700 mb-2">Нет результатов</h3>
//               <p className="text-gray-600">Попробуйте изменить параметры фильтрации для отображения продуктов</p>
//               <Button
//                 onClick={() => {
//                   setFilterBrand(null);
//                   setFilterCategory(null);
//                 }}
//                 className="mt-4 bg-[#1E22AA] hover:bg-[#1E22AA]/90 text-white rounded-full px-4 py-2"
//               >
//                 Сбросить фильтры
//               </Button>
//             </div>
//           </div>
//         ) : (
//           <div className="relative h-full perspective-1000">
//             {filteredProducts.map((product, index) => (
//               <ProductCard 
//                 key={index} 
//                 product={product}
//                 isActive={index === activeProductIndex} 
//                 index={index}
//                 activeIndex={activeProductIndex}
//               />
//             ))}
//           </div>
//         )}
        
//         {/* Enhanced slider navigation with animations */}
//         {filteredProducts.length > 0 && (
//           <div className="flex justify-center gap-14 items-center mt-6 md:mt-10">
//             <Button 
//               onClick={prevProduct} 
//               className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-white shadow-xl border border-gray-100 hover:bg-gradient-to-r from-[#fb4b06] to-[#E85D24] hover:border-transparent hover:text-white transition-colors flex items-center justify-center group"
//               variant="outline"
//               aria-label="Previous product"
//             >
//               <ChevronLeft className="w-8 h-8 md:w-12 md:h-12 text-gray-400 group-hover:text-white transition-colors" />
//             </Button>
            
//             <div className="flex space-x-2 md:space-x-3">
//               {filteredProducts.map((_, index) => (
//                 <button 
//                   key={index}
//                   onClick={() => setActiveProductIndex(index)}
//                   className={`h-3 rounded-full transition-all duration-300 ${
//                     index === activeProductIndex 
//                       ? "bg-gradient-to-r from-[#fb4b06] to-[#E85D24] w-8 md:w-10" 
//                       : "bg-gray-300 hover:bg-gray-400 w-3"
//                   }`}
//                   aria-label={`Go to slide ${index + 1}`}
//                   aria-current={index === activeProductIndex ? "true" : "false"}
//                 />
//               ))}
//             </div>
            
//             <Button 
//               onClick={nextProduct} 
//               className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-white shadow-xl border border-gray-100 hover:bg-gradient-to-r from-[#fb4b06] to-[#E85D24] hover:border-transparent hover:text-white transition-colors flex items-center justify-center group"
//               variant="outline"
//               aria-label="Next product"
//             >
//               <ChevronRight className="w-8 h-8 md:w-12 md:h-12 text-gray-400 group-hover:text-white transition-colors" />
//             </Button>
//           </div>
//         )}
//       </div>

//       {/* Add custom keyframe animations to stylesheet */}
//       <style jsx global>{`
//         @keyframes float {
//           0%, 100% { transform: translateY(0) translateX(0); }
//           25% { transform: translateY(-10px) translateX(5px); }
//           50% { transform: translateY(0) translateX(10px); }
//           75% { transform: translateY(10px) translateX(5px); }
//         }
//         .animate-float {
//           animation: float 7s ease-in-out infinite;
//         }
//         .perspective-1000 {
//           perspective: 1000px;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default ProductCarousel;


'use client'
import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { Button } from './ui/button';
import { ChevronLeft, ChevronRight, Check, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

// Component for smooth element appearance
const FadeInView: React.FC<{
  children: React.ReactNode;
  delay?: number;
  className?: string;
}> = ({ children, delay = 0, className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        if (domRef.current) {
          observer.unobserve(domRef.current);
        }
      }
    });
    
    if (domRef.current) {
      observer.observe(domRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={domRef}
      className={`${className} transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};


interface Product {
  title: string;
  description: string;
  image: string;
  color: string;
  features?: string[];
  brandName: string;
  category: string;
}

// Company interface to organize brands and their product categories
interface Company {
  name: string;
  color: string;
  logoUrl: string;
  categories: string[];
}

// Animated product card component
interface ProductCardProps {
  product: Product;
  isActive: boolean;
  index: number;
  activeIndex: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, isActive }) => {
  const cardPosition = isActive ? 
    "opacity-100 z-20 transform-none" : 
    "opacity-0 z-0 scale-95";
    
  // Check if we're on mobile
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className={`absolute inset-0 transition-all duration-700 ease-out ${cardPosition}`}>
      <div className="bg-white rounded-xl sm:rounded-3xl overflow-hidden shadow-lg sm:shadow-2xl mx-auto h-full border border-gray-100 hover:shadow-[0_20px_50px_rgba(30,34,170,0.1)] transition-shadow duration-500">
        {isMobile ? (
          // Mobile view with bigger image and simplified info
          <div className="flex flex-col h-full">
            {/* Product image takes up more space */}
            <div 
              className="h-72 w-full relative flex items-center justify-center"
              style={{ 
                background: `linear-gradient(135deg, ${product.color} 30%, ${product.color}CC 100%)` 
              }}
            >
              
              {/* Product image */}
              <div className="relative z-10 transform transition-transform duration-700 perspective-1000 flex items-center justify-center w-full h-full">
                <div className="absolute inset-0 bg-white/10 rounded-full filter blur-xl transform scale-75 transition-transform duration-700"></div>
                <Image
                  src={product.image}
                  alt={product.title}
                  width={400}
                  height={400}
                  className="w-5/5 h-5/5 object-contain p-4 drop-shadow-lg mx-auto"
                />
              </div>
              
              {/* Animated decorative elements */}
              <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                <div className="absolute top-10 left-10 w-10 h-10 rounded-full bg-white/10 animate-pulse"></div>
                <div className="absolute bottom-10 right-10 w-8 h-8 rounded-full bg-white/10 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute top-1/3 right-1/4 w-6 h-6 rounded-full bg-white/10 animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute -bottom-10 -left-10 w-20 h-20 rounded-full bg-white/5 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
                
                {/* Dynamic floating particles */}
                <div className="absolute w-2 h-2 rounded-full bg-white/20 animate-float" style={{ top: '20%', left: '30%', animationDuration: '6s', animationDelay: '0s' }}></div>
                <div className="absolute w-1 h-1 rounded-full bg-white/20 animate-float" style={{ top: '70%', left: '20%', animationDuration: '8s', animationDelay: '1s' }}></div>
                <div className="absolute w-2 h-2 rounded-full bg-white/20 animate-float" style={{ top: '40%', left: '80%', animationDuration: '7s', animationDelay: '2s' }}></div>
              </div>
            </div>
            
            {/* Just show title and button for mobile */}
            <div className="p-4 flex flex-col justify-center">
              {/* Enhanced category tag with gradient */}
              <div className="inline-flex items-center bg-gradient-to-r from-[#fb4b06]/10 to-[#fb4b06]/5 rounded-full px-3 py-1.5 mb-2">
                <span className="text-[#fb4b06] text-xs font-semibold tracking-wide">Продукция Altyn Gaya</span>
              </div>
              
              <h3 className="text-[#1E22AA] text-xl font-bold mb-4" style={{ fontFamily: '"Avenir Next Heavy", system-ui, sans-serif' }}>
                {product.title}
              </h3>
              
              {/* Button with animated gradient hover effect */}
              <Link href={'/shop'} className="bg-[#1E22AA] hover:bg-[#1E22AA]/90 rounded-full text-white px-6 py-2 text-sm font-semibold group overflow-hidden relative w-full">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Подробнее
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-[#fb4b06] to-[#fb4b06]/90 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></span>
              </Link>
            </div>
          </div>
        ) : (
          // Desktop view remains the same
          <div className="flex flex-col md:flex-row h-full">
            <div className="md:w-3/5 relative overflow-hidden group">
            <div 
                className="h-48 sm:h-64 md:h-full w-full relative flex items-center justify-center"
                style={{ 
                  background: `linear-gradient(135deg, ${product.color} 30%, ${product.color}CC 100%)` 
                }}
              >
                {/* Brand badge in top left */}
                <div className="absolute top-2 sm:top-4 left-2 sm:left-4 z-20 bg-white/80 backdrop-blur-sm px-2 sm:px-3 py-1 sm:py-1.5 rounded-full">
                  <span className="font-bold text-xs sm:text-sm" style={{ color: product.color }}>{product.brandName}</span>
                </div>
                
                {/* 3D perspective container for product image */}
                <div className="relative z-10 transform transition-transform duration-700 group-hover:scale-110 group-hover:rotate-2 perspective-1000 flex items-center justify-center w-full h-full">
                  <div className="absolute inset-0 bg-white/10 rounded-full filter blur-xl transform scale-75 group-hover:scale-100 transition-transform duration-700"></div>
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={isMobile ? 400 : 800}
                    height={isMobile ? 400 : 800}
                    className="w-5/5 h-5/5 object-contain p-4 sm:p-8 drop-shadow-lg mx-auto"
                  />
                </div>
                
                {/* Enhanced animated decorative elements */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                  <div className="absolute top-10 left-10 w-10 sm:w-20 h-10 sm:h-20 rounded-full bg-white/10 animate-pulse"></div>
                  <div className="absolute bottom-10 right-10 w-8 sm:w-16 h-8 sm:h-16 rounded-full bg-white/10 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                  <div className="absolute top-1/3 right-1/4 w-6 sm:w-12 h-6 sm:h-12 rounded-full bg-white/10 animate-pulse" style={{ animationDelay: '1s' }}></div>
                  <div className="absolute -bottom-10 -left-10 w-20 sm:w-40 h-20 sm:h-40 rounded-full bg-white/5 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
                  
                  {/* Dynamic floating particles */}
                  <div className="absolute w-2 sm:w-3 h-2 sm:h-3 rounded-full bg-white/20 animate-float" style={{ top: '20%', left: '30%', animationDuration: '6s', animationDelay: '0s' }}></div>
                  <div className="absolute w-1 sm:w-2 h-1 sm:h-2 rounded-full bg-white/20 animate-float" style={{ top: '70%', left: '20%', animationDuration: '8s', animationDelay: '1s' }}></div>
                  <div className="absolute w-2 sm:w-4 h-2 sm:h-4 rounded-full bg-white/20 animate-float" style={{ top: '40%', left: '80%', animationDuration: '7s', animationDelay: '2s' }}></div>
                </div>
              </div>
            </div>
            <div className="md:w-3/6 p-4 sm:p-6 md:p-8 lg:p-10 flex flex-col justify-center">
              {/* Enhanced category tag with gradient */}
              <div className="inline-flex items-center bg-gradient-to-r from-[#fb4b06]/10 to-[#fb4b06]/5 rounded-full px-3 sm:px-4 py-1 sm:py-1.5 mb-2 sm:mb-3">
                <span className="text-[#fb4b06] text-xs sm:text-sm py-1 sm:py-2 font-semibold tracking-wide">Продукция Altyn Gaya</span>
              </div>
              
              <h3 className="text-[#1E22AA] text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-2 sm:mb-4 overflow-hidden" style={{ fontFamily: '"Avenir Next Heavy", system-ui, sans-serif',
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 2, }}>
                {product.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base md:text-lg mb-3 sm:mb-6 md:mb-8 leading-relaxed line-clamp-3 sm:line-clamp-none">
                {product.description}
              </p>
              <ul className="mb-3 sm:mb-6 md:mb-8 space-y-2 sm:space-y-3 md:space-y-4">
                {product.features && product.features.map((feature, index) => (
                  <li key={index} className="flex items-start group">
                    <div className="bg-[#fb4b06]/10 p-1 sm:p-2 rounded-full mr-2 sm:mr-3 group-hover:bg-[#fb4b06] transition-colors duration-300 mt-0.5">
                      <Check className="text-[#fb4b06] w-3 h-3 sm:w-4 sm:h-4 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <span className="text-gray-700 text-xs sm:text-sm md:text-base">{feature}</span>
                  </li>
                ))}
                {!product.features && (
                  <>
                    <li className="flex items-start group">
                      <div className="bg-[#fb4b06]/10 p-1 sm:p-2 rounded-full mr-2 sm:mr-3 group-hover:bg-[#fb4b06] transition-colors duration-300 mt-0.5">
                        <Check className="text-[#fb4b06] w-3 h-3 sm:w-4 sm:h-4 group-hover:text-white transition-colors duration-300" />
                      </div>
                      <span className="text-gray-700 text-xs sm:text-sm md:text-base">Высокое качество</span>
                    </li>
                    <li className="flex items-start group">
                      <div className="bg-[#fb4b06]/10 p-1 sm:p-2 rounded-full mr-2 sm:mr-3 group-hover:bg-[#fb4b06] transition-colors duration-300 mt-0.5">
                        <Check className="text-[#fb4b06] w-3 h-3 sm:w-4 sm:h-4 group-hover:text-white transition-colors duration-300" />
                      </div>
                      <span className="text-gray-700 text-xs sm:text-sm md:text-base">Экологичные материалы</span>
                    </li>
                    <li className="flex items-start group">
                      <div className="bg-[#fb4b06]/10 p-1 sm:p-2 rounded-full mr-2 sm:mr-3 group-hover:bg-[#fb4b06] transition-colors duration-300 mt-0.5">
                        <Check className="text-[#fb4b06] w-3 h-3 sm:w-4 sm:h-4 group-hover:text-white transition-colors duration-300" />
                      </div>
                      <span className="text-gray-700 text-xs sm:text-sm md:text-base">Оптимальная цена</span>
                    </li>
                  </>
                )}
              </ul>
              
              {/* Enhanced button with animated gradient hover effect */}
              <Link href={"/shop"} className="bg-[#1E22AA] hover:bg-[#1E22AA]/90 rounded-full text-white px-4 sm:px-6 md:px-8 py-1.5 sm:py-2 md:py-6 text-xs sm:text-sm md:text-md font-semibold group overflow-hidden relative w-full md:w-auto">
                <span className="relative z-10 flex items-center justify-center gap-1 sm:gap-2">
                  Подробнее
                  <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-[#fb4b06] to-[#fb4b06]/90 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const ProductCarousel: React.FC = () => {
  // Use useMemo to prevent recreating companies array on each render
  const companies = useMemo<Company[]>(() => [
    {
      name: "Real Plus",
      color: "#3538C8",
      logoUrl: "/images/logo/RealPlus.png",
      categories: [
        "Порошки",
        "Универсальные жидкие моющие средства с кондиционером",
        "Стиральные порошки",
        "Освежители воздуха",
        "Жидкое мыло",
        "Универсальный гель для стирки"
      ]
    },
    {
      name: "Wim",
      color: "#03a31e",
      logoUrl: "/images/logo/Wim.png",
      categories: [
        "Универсальные чистящие средства",
        "Бытовые чистящие спреи"
      ]
    },
    {
      name: "Yumşa Plus",
      color: "#1138b7",
      logoUrl: "/images/logo/Yumsa.png",
      categories: [
        "Универсальные жидкие моющие средства с кондиционером",
        "Спреи-освежители для тканей",
        "Кондиционеры для белья"
      ]
    },
    {
      name: "Awen",
      color: "#ff3e1c",
      logoUrl: "/images/logo/Awen.png",
      categories: [
        "Жидкости для мытья посуды"
      ]
    },
    {
      name: "Glass Plus",
      color: "#e80c00",
      logoUrl: "/images/logo/Glass.png",
      categories: [
        "Средства для очистки стекол и поверхностей"
      ]
    }
  ], []);

  // Use useMemo to prevent recreating products array on each render
  const products = useMemo<Product[]>(() => [
          // Real Plus
          {
            title: "Real Plus Порошок для стирки",
            description: "Мощный стиральный порошок для белого и цветного белья, эффективно удаляет загрязнения.",
            image: "/images/RealPlus_Soda.png",
            color: "#3538C8",
            brandName: "Real Plus",
            category: "Порошки",
            features: [
              "Глубокая очистка тканей",
              "Сохранение цвета",
              "Эффективен даже при низких температурах"
            ]
          },
          {
            title: "Real Plus Универсальное жидкое моющее средство с кондиционером",
            description: "Многофункциональное средство для бережного ухода за тканями с эффектом кондиционирования.",
            image: "/images/category_pictures/RealPlus_SuwukSoda_3l_.png",
            color: "#3538C8",
            brandName: "Real Plus",
            category: "Универсальные жидкие моющие средства с кондиционером",
            features: [
              "Делает ткани мягкими и свежими",
              "Удаляет стойкие пятна",
              "Подходит для ручной и машинной стирки"
            ]
          },
          {
            title: "Real Plus Освежитель воздуха",
            description: "Долговременная свежесть и приятный аромат в вашем доме.",
            image: "/images/category_pictures/RealPlus_Sprey.png",
            color: "#3538C8",
            brandName: "Real Plus",
            category: "Освежители воздуха",
            features: [
              "Нейтрализует неприятные запахи",
              "Долговременный эффект",
              "Разнообразие ароматов"
            ]
          },
          {
            title: "Real Plus Жидкое мыло",
            description: "Увлажняющее жидкое мыло с мягким очищающим эффектом.",
            image: "/images/category_pictures/RealPlus_ElSabyn.png",
            color: "#3538C8",
            brandName: "Real Plus",
            category: "Жидкое мыло",
            features: [
              "Гипоаллергенный состав",
              "Не сушит кожу",
              "Приятный аромат"
            ]
          },
          {
            title: "Real Plus Универсальный гель для стирки",
            description: "Эффективный гель для стирки, придающий белью свежесть и мягкость.",
            image: "/images/category_pictures/RealPlus_SuwukSoda_1l.png",
            color: "#3538C8",
            brandName: "Real Plus",
            category: "Универсальный гель для стирки",
            features: [
              "Глубокая очистка тканей",
              "Экономичный расход",
              "Подходит для всех типов тканей"
            ]
          },
        
          // Vim
          {
            title: "Wim Универсальное чистящее средство",
            description: "Эффективное средство для борьбы с загрязнениями на любых поверхностях.",
            image: "/images/category_pictures/Wim_domestos.png",
            color: "#03a31e",
            brandName: "Wim",
            category: "Универсальные чистящие средства",
            features: [
              "Быстрое удаление грязи",
              "Безопасный состав",
              "Не оставляет разводов"
            ]
          },
          {
            title: "Wim Бытовой чистящий спрей",
            description: "Спрей для моментального очищения поверхностей от загрязнений.",
            image: "/images/category_pictures/Wim_antizir_450ml.png",
            color: "#03a31e",
            brandName: "Wim",
            category: "Бытовые чистящие спреи",
            features: [
              "Подходит для кухни и ванной",
              "Антибактериальный эффект",
              "Быстрое испарение без следов"
            ]
          },
        
          // Yumşa Plus
          {
            title: "Yumşa Plus Универсальное жидкое моющее средство с кондиционером",
            description: "Мягкое моющее средство с кондиционером для деликатных тканей.",
            image: "/images/category_pictures/YumsaPlus_uly.png",
            color: "#1138b7",
            brandName: "Yumşa Plus",
            category: "Универсальные жидкие моющие средства с кондиционером",
            features: [
              "Мягкий эффект на ткани",
              "Сохранение формы одежды",
              "Освежающий аромат"
            ]
          },
          {
            title: "Yumşa Plus Спрей-освежитель для тканей",
            description: "Освежает и удаляет запахи с одежды и текстиля.",
            image: "/images/category_pictures/YumsaPlus_sprey2.png",
            color: "#1138b7",
            brandName: "Yumşa Plus",
            category: "Спреи-освежители для тканей",
            features: [
              "Быстрое действие",
              "Не оставляет следов",
              "Гипоаллергенный состав"
            ]
          },
          {
            title: "Yumşa Plus Кондиционер для белья",
            description: "Придает белью мягкость и приятный аромат.",
            image: "/images/category_pictures/YumsaPlus_sprey.png",
            color: "#1138b7",
            brandName: "Yumşa Plus",
            category: "Кондиционеры для белья",
            features: [
              "Антистатический эффект",
              "Долговременная свежесть",
              "Экономичный расход"
            ]
          },
        
          // Awen
          {
            title: "Awen Жидкость для мытья посуды",
            description: "Эффективное средство для удаления жира и загрязнений.",
            image: "/images/category_pictures/Awen.png",
            color: "#ff3e1c",
            brandName: "Awen",
            category: "Жидкости для мытья посуды",
            features: [
              "Обильная пена",
              "Мягкое воздействие на кожу рук",
              "Удаление жира даже в холодной воде"
            ]
          },
        
          // Glass Plus
          {
            title: "Glass Plus Средство для очистки стекол и поверхностей",
            description: "Средство для сияющей чистоты стекол без разводов.",
            image: "/images/category_pictures/GlassPlus_category.png",
            color: "#e80c00",
            brandName: "Glass Plus",
            category: "Средства для очистки стекол и поверхностей",
            features: [
              "Быстрое испарение",
              "Удаление пыли и грязи",
              "Не оставляет разводов"
            ]
          }
  ], []);

  const [activeProductIndex, setActiveProductIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStartX, setTouchStartX] = useState(0);
  const [filterBrand, setFilterBrand] = useState<string | null>(null);
  const [filterCategory, setFilterCategory] = useState<string | null>(null);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [isMobile, setIsMobile] = useState(false);

  // Check if we're on mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    console.log(setFilterCategory);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Use useCallback for nextProduct and prevProduct to prevent recreation on each render
  const nextProduct = useCallback(() => {
    setActiveProductIndex((prev) => (prev === filteredProducts.length - 1 ? 0 : prev + 1));
  }, [filteredProducts.length]);
  
  const prevProduct = useCallback(() => {
    setActiveProductIndex((prev) => (prev === 0 ? filteredProducts.length - 1 : prev - 1));
  }, [filteredProducts.length]);

  // Apply filters
  useEffect(() => {
    let filtered = products;
    
    if (filterBrand) {
      filtered = filtered.filter(product => product.brandName === filterBrand);
    }
    
    if (filterCategory) {
      filtered = filtered.filter(product => product.category === filterCategory);
    }
    
    setFilteredProducts(filtered);
    setActiveProductIndex(0);
  }, [filterBrand, filterCategory, products]);

  // Touch event handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsPaused(true);
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    setIsPaused(false);
    const touchEndX = e.changedTouches[0].clientX;
    const diffX = touchEndX - touchStartX;
    
    // Detect swipe with threshold of 50px
    if (diffX > 50) {
      prevProduct();
    } else if (diffX < -50) {
      nextProduct();
    }
  };

  // Auto-advance slider with pause on hover or touch
  useEffect(() => {
    if (isPaused || filteredProducts.length === 0) return;
    
    const interval = setInterval(() => {
      nextProduct();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isPaused, filteredProducts.length, nextProduct]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        prevProduct();
      } else if (e.key === 'ArrowRight') {
        nextProduct();
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextProduct, prevProduct]);

  return (
    <section className="relative py-8 sm:py-10 md:py-14 md:pb-20 lg:pb-32 bg-white overflow-hidden">
      
      {/* Enhanced background elements with animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-16 sm:w-32 md:w-64 h-16 sm:h-32 md:h-64 rounded-full bg-[#1E22AA]/5 filter blur-md sm:blur-xl md:blur-3xl animate-pulse" style={{ animationDuration: '8s' }}></div>
        <div className="absolute bottom-1/3 right-1/4 w-20 sm:w-40 md:w-80 h-20 sm:h-40 md:h-80 rounded-full bg-[#fb4b06]/5 filter blur-md sm:blur-xl md:blur-3xl animate-pulse" style={{ animationDuration: '12s', animationDelay: '2s' }}></div>
        <div className="absolute top-2/3 left-1/2 w-12 sm:w-24 md:w-48 h-12 sm:h-24 md:h-48 rounded-full bg-[#E85D24]/5 filter blur-md sm:blur-xl md:blur-3xl animate-pulse" style={{ animationDuration: '10s', animationDelay: '1s' }}></div>
      </div>
      
      <div className="container mx-auto px-3 sm:px-4 relative z-10">
        <div className="text-center max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto mb-4 sm:mb-6 md:mb-8 lg:mb-12">
          <FadeInView>
            <div className="inline-block mb-2 sm:mb-4 bg-gradient-to-r from-[#fb4b06]/20 to-[#fb4b06]/10 rounded-full px-2 sm:px-4 md:px-6 py-1 sm:py-2">
              <span className="text-[#fb4b06] text-xs md:text-sm font-medium uppercase tracking-wider">Наша продукция</span>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold mb-2 sm:mb-4 md:mb-6 leading-tight" style={{ fontFamily: '"Avenir Next Heavy", system-ui, sans-serif' }}>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#1E22AA] to-[#3538C8]">КАЧЕСТВО, КОТОРОЕ </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#fb4b06] to-[#E85D24]">ЗАБОТИТСЯ О ВАС</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed">
              Каждый продукт компании Altyn Gaya разработан с заботой о комфорте и здоровье наших клиентов. Мы используем только лучшие материалы и современные технологии производства.
            </p>
          </FadeInView>
        </div>
        
        {/* Brands section - horizontal scrolling on mobile */}
        <div className="my-2 sm:my-4 md:my-8">
          <FadeInView>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-3 sm:mb-6 md:mb-10">
              <span className="text-[#1E22AA]">Наши</span> <span className="text-[#fb4b06]">бренды</span>
            </h3>
              <style jsx>{`
                .hide-scrollbar::-webkit-scrollbar {
                  display: none;
                }
              `}</style>
            <div className="overflow-x-auto hide-scrollbar pb-2 sm:pb-4 -mx-3 px-3 sm:mx-0 sm:px-0">
              <div className={`flex ${isMobile ? 'space-x-3' : 'flex-wrap justify-center gap-4 md:gap-8'}`}
                   style={isMobile ? { minWidth: 'max-content' } : {}}>
                {companies.map((company) => (
                  <div
                    key={company.name}
                    onClick={() => setFilterBrand(company.name === filterBrand ? null : company.name)}
                    className={`flex flex-col items-center p-2 sm:p-4 md:p-6 rounded-lg sm:rounded-xl cursor-pointer transition-all duration-300 ${
                      company.name === filterBrand
                        ? 'bg-white shadow-lg transform scale-105'
                        : 'bg-white/50 hover:bg-white hover:shadow-md hover:scale-105'
                    }`}
                    style={{
                      width: isMobile ? '120px' : 'auto',
                      minWidth: isMobile ? '120px' : '150px'
                    }}
                  >
                    <div
                      className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full mb-2 sm:mb-3 flex items-center justify-center bg-white shadow-sm"
                      style={{
                        border: `2px solid ${company.color}`,
                      }}
                    >
                      <Image
                        src={company.logoUrl}
                        alt={company.name}
                        width={60}
                        height={60}
                        className="w-9 h-9 sm:w-12 sm:h-12 md:w-14 md:h-14 object-contain"
                      />
                    </div>
                    <h4 className="text-xs sm:text-sm md:text-base font-semibold text-center" style={{ color: company.color }}>
                      {company.name}
                    </h4>
                    <span className="text-xs text-gray-500 mt-1">
                      {company.categories.length} {company.categories.length === 1 ? 'категория' : company.categories.length < 5 ? 'категории' : 'категорий'}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </FadeInView>
        </div>
        
        {/* Categories section - when a brand is selected */}
        {/* {filterBrand && (
          <div className="my-2 sm:my-4 md:my-8">
            <FadeInView delay={200}>
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-center mb-3 sm:mb-4">
                <span className="text-gray-700">Категории</span> <span style={{ color: companies.find(c => c.name === filterBrand)?.color }}>{filterBrand}</span>
              </h3>
              
              <div className="overflow-x-auto pb-2 sm:pb-4 -mx-3 px-3 sm:mx-0 sm:px-0">
                <div className={`flex ${isMobile ? 'space-x-2' : 'flex-wrap justify-center gap-2 md:gap-4'}`}
                     style={isMobile ? { minWidth: 'max-content' } : {}}>
                  {companies
                    .find(company => company.name === filterBrand)
                    ?.categories.map((category) => (
                      <div
                        key={category}
                        onClick={() => setFilterCategory(category === filterCategory ? null : category)}
                        className={`p-2 sm:p-3 rounded-full cursor-pointer transition-all duration-200 text-xs sm:text-sm md:text-base ${
                          category === filterCategory
                            ? 'bg-[#1E22AA] text-white'
                            : 'bg-white/80 text-gray-700 hover:bg-white hover:shadow-md'
                        }`}
                      >
                        {category}
                      </div>
                    ))}
                </div>
              </div>
            </FadeInView>
          </div>
        )} */}
        
        {/* Filter reset button */}
        {/* {(filterBrand || filterCategory) && (
          <div className="text-center mb-6 sm:mb-8 md:mb-10">
            <Button
              onClick={() => { setFilterBrand(null); setFilterCategory(null); }}
              className="text-xs sm:text-sm bg-white text-gray-600 hover:bg-gray-100 flex items-center gap-1 mx-auto rounded-full px-4 py-2"
            >
              <Filter className="w-3 h-3 sm:w-4 sm:h-4" />
              Сбросить фильтры
            </Button>
          </div>
        )} */}

        {/* Product cards */}
        <FadeInView delay={300}>
          <div 
            className="relative h-[420px] sm:h-[500px] md:h-[600px] max-w-5xl mx-auto"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {filteredProducts.length > 0 ? (
              <>
                {filteredProducts.map((product, index) => (
                  <ProductCard 
                    key={`${product.brandName}-${product.title}`}
                    product={product}
                    isActive={index === activeProductIndex}
                    index={index}
                    activeIndex={activeProductIndex}
                  />
                ))}
              
                {/* Navigation buttons */}
                <div className="absolute z-30 w-full top-1/2 left-0 transform -translate-y-1/2 flex justify-between px-0 sm:px-4">
                  <Button 
                    onClick={prevProduct}
                    className="bg-white/80 hover:bg-white text-gray-700 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shadow-md hover:shadow-lg transform hover:scale-110 transition-all"
                  >
                    <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
                  </Button>
                  <Button 
                    onClick={nextProduct}
                    className="bg-white/80 hover:bg-white text-gray-700 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shadow-md hover:shadow-lg transform hover:scale-110 transition-all"
                  >
                    <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
                  </Button>
                </div>
              
                {/* Pagination dots */}
                <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-1 sm:gap-2 mb-2 sm:mb-4">
                  {filteredProducts.map((_, index) => (
                    <Button 
                      key={index}
                      onClick={() => setActiveProductIndex(index)}
                      className={`w-2 h-2 sm:w-3 sm:h-3 p-0 rounded-full transition-all ${
                        index === activeProductIndex 
                          ? 'bg-[#1E22AA] scale-125' 
                          : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                    >
                      <span className="sr-only">Slide {index + 1}</span>
                    </Button>
                  ))}
                </div>
              </>
            ) : (
              <div className="flex items-center justify-center h-full bg-white/50 rounded-lg">
                <div className="text-center p-6">
                  <div className="text-5xl mb-4">🔍</div>
                  <h3 className="text-xl font-bold text-gray-700 mb-2">Продукты не найдены</h3>
                  <p className="text-gray-500">Попробуйте изменить параметры фильтра</p>
                </div>
              </div>
            )}
          </div>
        </FadeInView>
      </div>
    </section>
  );
};

export default ProductCarousel;