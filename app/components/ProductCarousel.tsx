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
      className={`${className} transition-all duration-1000 ease-out dark:text-gray-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
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
      <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-3xl overflow-hidden shadow-lg sm:shadow-2xl mx-auto h-full border border-gray-100 dark:border-gray-700 hover:shadow-[0_20px_50px_rgba(30,34,170,0.1)] dark:hover:shadow-[0_20px_50px_rgba(30,34,170,0.2)] transition-shadow duration-500">
        {isMobile ? (
          // Mobile view with consistent alignment
          <div className="flex flex-col h-full">
          {/* Product image area - slightly reduced height */}
          <div 
            className="h-56 w-full relative flex items-center justify-center"
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
            
            {/* Simplified decorative elements for mobile */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
              <div className="absolute top-10 left-10 w-6 h-6 rounded-full bg-white/10 animate-pulse"></div>
              <div className="absolute bottom-10 right-10 w-4 h-4 rounded-full bg-white/10 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            </div>
          </div>
          
          {/* Product information with auto height */}
          <div className="p-4 flex flex-col flex-grow">
            <h3 className="text-[#1E22AA] dark:text-blue-400 text-lg font-bold mb-2 line-clamp-1" style={{ fontFamily: '"Avenir Next Heavy", system-ui, sans-serif' }}>
              {product.title}
            </h3>
            
            <p className="text-gray-600 dark:text-gray-300 text-xs mb-3 line-clamp-2">
              {product.description}
            </p>
            
            <div className="space-y-1.5 mb-3">
              {product.features && product.features.length > 0 ? (
                // Show only the first feature on mobile to save space
                <div className="flex items-center">
                  <div className="bg-[#fb4b06]/10 flex-shrink-0 rounded-full p-1 mr-2">
                    <Check className="text-[#fb4b06] w-3 h-3" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-200 text-xs">{product.features[0]}</span>
                </div>
              ) : (
                // Show only one default feature to save space
                <div className="flex items-center">
                  <div className="bg-[#fb4b06]/10 flex-shrink-0 rounded-full p-1 mr-2">
                    <Check className="text-[#fb4b06] w-3 h-3" />
                  </div>
                  <span className="text-gray-700 text-xs">Быстрое действие</span>
                </div>
              )}
            </div>
            
            {/* Smaller button with tighter padding */}
            <Link href={{pathname: '/shop', query: { category: product.category }}} 
                className="bg-[#1E22AA] hover:bg-[#1E22AA]/90 rounded-full text-white px-4 py-2 text-xs font-semibold group overflow-hidden relative w-full text-center mt-auto">
              <span className="relative z-10 flex items-center justify-center gap-1">
                Подробнее
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-[#fb4b06] to-[#fb4b06]/90 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></span>
            </Link>
          </div>
        </div>
        ) : (
          // Desktop view with consistent alignment
          <div className="flex flex-col md:flex-row h-full">
            <div className="md:w-2/3 relative overflow-hidden group">
              <div 
                className="h-64 md:h-full w-full relative flex items-center justify-center"
                style={{ 
                  background: `linear-gradient(135deg, ${product.color} 30%, ${product.color}CC 100%)` 
                }}
              >
                {/* Brand badge in top left */}
                <div className="absolute top-4 left-4 z-20 bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-full">
                  <span className="font-bold text-sm" style={{ color: product.color }}>{product.brandName}</span>
                </div>
                
                {/* 3D perspective container for product image */}
                <div className="relative z-10 transform transition-transform duration-700 group-hover:scale-110 group-hover:rotate-2 perspective-1000 flex items-center justify-center w-full h-full">
                  <div className="absolute inset-0 bg-white/10 rounded-full filter blur-xl transform scale-75 group-hover:scale-100 transition-transform duration-700"></div>
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={1000}
                    height={1000}
                    className="w-5/5 h-5/5 object-contain p-6 drop-shadow-lg mx-auto"
                  />
                </div>
                
                {/* Enhanced animated decorative elements */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                  <div className="absolute top-10 left-10 w-16 h-16 rounded-full bg-white/10 animate-pulse"></div>
                  <div className="absolute bottom-10 right-10 w-12 h-12 rounded-full bg-white/10 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                  <div className="absolute top-1/3 right-1/4 w-10 h-10 rounded-full bg-white/10 animate-pulse" style={{ animationDelay: '1s' }}></div>
                  <div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-white/5 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
                  
                  {/* Dynamic floating particles */}
                  <div className="absolute w-3 h-3 rounded-full bg-white/20 animate-float" style={{ top: '20%', left: '30%', animationDuration: '6s', animationDelay: '0s' }}></div>
                  <div className="absolute w-2 h-2 rounded-full bg-white/20 animate-float" style={{ top: '70%', left: '20%', animationDuration: '8s', animationDelay: '1s' }}></div>
                  <div className="absolute w-4 h-4 rounded-full bg-white/20 animate-float" style={{ top: '40%', left: '80%', animationDuration: '7s', animationDelay: '2s' }}></div>
                </div>
              </div>
            </div>
            
            <div className="md:w-2/4 p-6 md:p-8 flex flex-col justify-between dark:bg-gray-800">
              <div>
                <h3 className="text-[#1E22AA] dark:text-blue-400 text-2xl md:text-3xl font-bold mb-3 line-clamp-2 min-h-[4rem]" style={{ fontFamily: '"Avenir Next Heavy", system-ui, sans-serif' }}>
                  {product.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 md:text-lg mb-6 line-clamp-3 min-h-[4.5rem]">
                  {product.description}
                </p>
              </div>
              
              <div className="space-y-4 mb-8">
                {product.features && product.features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <div className="bg-[#fb4b06]/10 dark:bg-[#fb4b06]/20 flex-shrink-0 rounded-full p-2 mr-3 group-hover:bg-[#fb4b06] transition-colors duration-300">
                      <Check className="text-[#fb4b06] w-4 h-4 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <span className="text-gray-700 dark:text-gray-200 text-base">{feature}</span>
                  </div>
                ))}
                {!product.features && (
                  <>
                    <div className="flex items-center group">
                      <div className="bg-[#fb4b06]/10 dark:bg-[#fb4b06]/20 flex-shrink-0 rounded-full p-2 mr-3 group-hover:bg-[#fb4b06] transition-colors duration-300">
                        <Check className="text-[#fb4b06] w-4 h-4 group-hover:text-white transition-colors duration-300" />
                      </div>
                      <span className="text-gray-700 dark:text-gray-200 text-base">Делает ткани мягкими и свежими</span>
                    </div>
                    <div className="flex items-center group">
                      <div className="bg-[#fb4b06]/10 dark:bg-[#fb4b06]/20 flex-shrink-0 rounded-full p-2 mr-3 group-hover:bg-[#fb4b06] transition-colors duration-300">
                        <Check className="text-[#fb4b06] w-4 h-4 group-hover:text-white transition-colors duration-300" />
                      </div>
                      <span className="text-gray-700 dark:text-gray-200 text-base">Удаляет стойкие пятна</span>
                    </div>
                    <div className="flex items-center group">
                      <div className="bg-[#fb4b06]/10 dark:bg-[#fb4b06]/20 flex-shrink-0 rounded-full p-2 mr-3 group-hover:bg-[#fb4b06] transition-colors duration-300">
                        <Check className="text-[#fb4b06] w-4 h-4 group-hover:text-white transition-colors duration-300" />
                      </div>
                      <span className="text-gray-700 dark:text-gray-200 text-base">Подходит для ручной и машинной стирки</span>
                    </div>
                  </>
                )}
              </div>
              
              {/* Enhanced button with animated gradient hover effect */}
              <Link href={{pathname: '/shop', query: { category: product.category }}} 
                  className="bg-[#1E22AA] hover:bg-[#1E22AA]/90 rounded-full text-white px-8 py-4 text-base font-semibold group overflow-hidden relative md:w-auto self-start">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Подробнее
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
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
        "Стиральные порошки",
        "Универсальные жидкие моющие средства с кондиционером",
        "Жидкие средства для стирки",
        "Освежители воздуха",
        "Жидкое мыло",
        "Универсальный гель для стирки",
        "Гели для стирки",
        "Универсальные жидкие моющие средства с кондиционером"
      ]
    },
    {
      name: "Wim",
      color: "#03a31e",
      logoUrl: "/images/logo/Wim.png",
      categories: [
        "Универсальные чистящие средства",
        "Бытовые чистящие спреи",
        "Средства для мытья посуды",
        "Универсальные чистящие средства спрей"
      ]
    },
    {
      name: "Yumşa Plus",
      color: "#1138b7",
      logoUrl: "/images/logo/Yumsa.png",
      categories: [
        "Универсальные жидкие моющие средства с кондиционером",
        "Спреи-освежители для тканей",
        "Спреи-освежители для тканей",
        "Кондиционеры и ополаскиватели"
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
        "Средства для чистки стекол и поверхностей"
      ]
    },
    {
      name: "Lagis",
      color: "#00cdd1",
      logoUrl: "/images/logo/Lagis.png",
      categories: [
        "Порошки"
      ]
    }
  ], []);

  // Use useMemo to prevent recreating products array on each render
  const products = useMemo<Product[]>(() => [
          // Real Plus
          {
            title: "Real Plus Порошок для стирки",
            description: "Мощный стиральный порошок для белого и цветного белья, эффективно удаляет загрязнения.",
            image: "/images/category_pictures/RealPlus_Soda.png",
            color: "#3538C8",
            brandName: "Real Plus",
            category: "Стиральные порошки",
            features: [
              "Глубокая очистка тканей",
              "Сохранение цвета",
              "Эффективен даже при низких температурах"
            ]
          },
          {
            title: "Real Plus Универсальные гели для стирки",
            description: "Эффективные жидкие средства для стирки с кондиционером, удаляющие пятна и неприятные запахи, придающие одежде мягкость и свежесть.",
            image: "/images/category_pictures/RealPlus_SuwukSoda_3l.png",
            color: "#3538C8",
            brandName: "Real Plus",
            category: "Гели для стирки",
            features: [
              "Универсальное средство для стирки",
              "Удаляет пятна и неприятные запахи",
              "Обладает кондиционирующим эффектом",
            ]
          },
          {
            title: "Real Plus Универсальное жидкое моющее средство с кондиционером",
            description: "Многофункциональное средство для бережного ухода за тканями с эффектом кондиционирования.",
            image: "/images/category_pictures/RealPlus_SuwukSoda_3l_.png",
            color: "#3538C8",
            brandName: "Real Plus",
            category: "Жидкие средства для стирки",
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
            title: "Real Plus универсальные жидкие моющие средства с кондиционером",
            description: "Суперконцентрированное средство 2-в-1: для стирки и кондиционирования одежды.",
            image: "/images/category_pictures/RealPlus_perfume_collection.png",
            color: "#3538C8",
            brandName: "Real Plus",
            category: "Универсальные жидкие моющие средства с кондиционером",
            features: [
              "Содержит кондиционер для мягкости ткани",
    "Яркие и стойкие ароматы",
    "Эффективен при низких температурах",
    "Экономичный расход — суперконцентрат"
            ]
          },
          {
            title: "Real Plus Универсальные гели для стирки",
            description: "Эффективный гель для стирки, придающий белью свежесть и мягкость.",
            image: "/images/category_pictures/RealPlus_SuwukSoda_1l.png",
            color: "#3538C8",
            brandName: "Real Plus",
            category: "Универсальные гели для стирки",
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
            title: "Wim Моющие средства",
            description: "Высококачественные моющие средства Wim для эффективной очистки и блеска.",
            image: "/images/category_pictures/Wim_moyussy.png",
            color: "#03a31e",
            brandName: "Wim",
            category: "Средства для мытья посуды",
            features: [
              "Удаляет жир и загрязнения",
              "Придает блеск",
              "Приятный фруктовый аромат"
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
          {
            title: "Wim Универсальные чистящие средства",
            description: "Эффективные средства для борьбы с загрязнениями на кухне, в ванной и на тканях. Подходят для любых поверхностей.",
            image: "/images/category_pictures/Wim_antizir.png",
            color: "#03a31e",
            brandName: "Wim",
            category: "Бытовые чистящие спреи",
            features: [
              "Удаляет жир, пятна и известковый налет",
              "Безопасный состав без разводов",
              "Подходит для кухни, ванной и тканей"
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
            category: "Ароматизаторы для дома и белья",
            features: [
              "Быстрое действие",
              "Не оставляет следов",
              "Гипоаллергенный состав"
            ]
          },
          {
            title: "Yumşa Plus Спреи-освежители для тканей",
            description: "Придает белью мягкость и приятный аромат.",
            image: "/images/category_pictures/YumsaPlus_sprey.png",
            color: "#1138b7",
            brandName: "Yumşa Plus",
            category: "Спреи-освежители для тканей",
            features: [
              "Антистатический эффект",
              "Долговременная свежесть",
              "Экономичный расход"
            ]
          },
          {
            title: "Yumşa Plus Кондиционеры и ополаскиватели",
            description: "Мягкость, свежесть и приятный аромат для вашей одежды с кондиционерами Yumşa.",
            image: "/images/category_pictures/YumsaPlus_kici.png",
            color: "#1138b7",
            brandName: "Yumşa Plus",
            category: "Кондиционеры и ополаскиватели",
            features: [
              "Придает ткани мягкость и свежесть",
    "Облегчает глажение одежды",
    "Придает одежде приятный и стойкий аромат",
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
            category: "Средства для чистки стекол и поверхностей",
            features: [
              "Быстрое испарение",
              "Удаление пыли и грязи",
              "Не оставляет разводов"
            ]
          },

          // Lagis
          {
            title: "Lagis Стиральный порошок для ручной стирки",
            description: "Стиральный порошок с насыщенным ароматом и лёгкой стиркой.",
            image: "/images/category_pictures/Lagis.png",
            color: "#00cdd1",
            brandName: "Lagis",
            category: "Стиральные порошки",
            features: [
              "Подходит для ручной стирки",
              "Лёгкое полоскание и отстирывание",
              "Долговечный аромат",
              "Эффективен даже в холодной воде"
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
    <section className="relative py-8 sm:py-10 md:py-14 md:pb-20 lg:pb-32 bg-white dark:bg-gray-900 overflow-hidden">
      
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
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#1E22AA] to-[#3538C8] dark:from-blue-500 dark:to-blue-400">КАЧЕСТВО, СОЗДАННОЕ </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#fb4b06] to-[#E85D24] dark:from-orange-500 dark:to-orange-400">С ЗАБОТОЙ О ВАС</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
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
                        ? 'bg-white dark:bg-gray-800 shadow-lg transform scale-105'
                        : 'bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800 hover:shadow-md hover:scale-105'
                    }`}
                    style={{
                      width: isMobile ? '120px' : 'auto',
                      minWidth: isMobile ? '120px' : '150px'
                    }}
                  >
                    <div
                      className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full mb-2 sm:mb-3 flex items-center justify-center bg-white dark:bg-gray-700 shadow-sm"
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
                    <span className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      {company.categories.length} {company.categories.length === 1 ? 'категория' : company.categories.length < 5 ? 'категории' : 'категорий'}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </FadeInView>
        </div>

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
  className="bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shadow-md hover:shadow-lg transform hover:scale-110 transition-all"
>
  <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
</Button>

<Button 
  onClick={nextProduct}
  className="bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200 w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shadow-md hover:shadow-lg transform hover:scale-110 transition-all"
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
              <div className="flex items-center justify-center h-full bg-white/50 dark:bg-gray-800/50 rounded-lg">
                <div className="text-center p-6">
                  <div className="text-5xl mb-4">🔍</div>
                  <h3 className="text-xl font-bold text-gray-700 dark:text-gray-200 mb-2">Продукты не найдены</h3>
                  <p className="text-gray-500 dark:text-gray-400">Попробуйте изменить параметры фильтра</p>
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