'use client'
import React, { useState, useEffect, useRef } from 'react';
import { Button } from './ui/button';
import { ChevronLeft, ChevronRight, Check, ArrowRight, Filter } from 'lucide-react';
import Image from 'next/image';

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
  // index: number;
  // activeIndex: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, isActive }) => {

  const cardPosition = isActive ? 
    "opacity-100 z-20 transform-none" : 
    "opacity-0 z-0 scale-95";

  return (
    <div className={`absolute inset-0 transition-all duration-700 ease-out ${cardPosition}`}>
      <div className="bg-white rounded-3xl overflow-hidden shadow-2xl mx-auto h-full border border-gray-100 hover:shadow-[0_20px_50px_rgba(30,34,170,0.1)] transition-shadow duration-500">
        <div className="flex flex-col md:flex-row h-full">
          <div className="md:w-3/5 relative overflow-hidden group">
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

              {/* Category badge in top right */}
              <div className="absolute top-4 right-4 z-20 bg-black/30 backdrop-blur-sm px-3 py-1.5 rounded-full">
                <span className="text-white text-xs">{product.category}</span>
              </div>
              
              {/* 3D perspective container for product image */}
              <div className="relative z-10 transform transition-transform duration-700 group-hover:scale-110 group-hover:rotate-2 perspective-1000">
                <div className="absolute inset-0 bg-white/10 rounded-full filter blur-xl transform scale-75 group-hover:scale-100 transition-transform duration-700"></div>
                <Image
                  src={product.image}
                  alt={product.title}
                  width={400}
                  height={400}
                  className="w-4/5 h-4/5 object-contain p-8 drop-shadow-lg"
                />
              </div>
              
              {/* Enhanced animated decorative elements */}
              <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-white/10 animate-pulse"></div>
                <div className="absolute bottom-10 right-10 w-16 h-16 rounded-full bg-white/10 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute top-1/3 right-1/4 w-12 h-12 rounded-full bg-white/10 animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-white/5 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
                
                {/* Dynamic floating particles */}
                <div className="absolute w-3 h-3 rounded-full bg-white/20 animate-float" style={{ top: '20%', left: '30%', animationDuration: '6s', animationDelay: '0s' }}></div>
                <div className="absolute w-2 h-2 rounded-full bg-white/20 animate-float" style={{ top: '70%', left: '20%', animationDuration: '8s', animationDelay: '1s' }}></div>
                <div className="absolute w-4 h-4 rounded-full bg-white/20 animate-float" style={{ top: '40%', left: '80%', animationDuration: '7s', animationDelay: '2s' }}></div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
            {/* Enhanced category tag with gradient */}
            <div className="inline-flex items-center bg-gradient-to-r from-[#fb4b06]/10 to-[#fb4b06]/5 rounded-full px-4 py-1.5 mb-3">
              <span className="text-[#fb4b06] text-sm py-2 font-semibold tracking-wide">Продукция Altyn Gaya</span>
            </div>
            
            <h3 className="text-[#1E22AA] text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: '"Avenir Next Heavy", system-ui, sans-serif' }}>
              {product.title}
            </h3>
            <p className="text-gray-600 text-base md:text-lg mb-6 md:mb-8 leading-relaxed">
              {product.description}
            </p>
            <ul className="mb-6 md:mb-8 space-y-3 md:space-y-4">
              {product.features && product.features.map((feature, index) => (
                <li key={index} className="flex items-start group">
                  <div className="bg-[#fb4b06]/10 p-2 rounded-full mr-3 group-hover:bg-[#fb4b06] transition-colors duration-300 mt-0.5">
                    <Check className="text-[#fb4b06] w-4 h-4 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
              {!product.features && (
                <>
                  <li className="flex items-start group">
                    <div className="bg-[#fb4b06]/10 p-2 rounded-full mr-3 group-hover:bg-[#fb4b06] transition-colors duration-300 mt-0.5">
                      <Check className="text-[#fb4b06] w-4 h-4 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <span className="text-gray-700">Высокое качество</span>
                  </li>
                  <li className="flex items-start group">
                    <div className="bg-[#fb4b06]/10 p-2 rounded-full mr-3 group-hover:bg-[#fb4b06] transition-colors duration-300 mt-0.5">
                      <Check className="text-[#fb4b06] w-4 h-4 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <span className="text-gray-700">Экологичные материалы</span>
                  </li>
                  <li className="flex items-start group">
                    <div className="bg-[#fb4b06]/10 p-2 rounded-full mr-3 group-hover:bg-[#fb4b06] transition-colors duration-300 mt-0.5">
                      <Check className="text-[#fb4b06] w-4 h-4 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <span className="text-gray-700">Оптимальная цена</span>
                  </li>
                </>
              )}
            </ul>
            
            {/* Enhanced button with animated gradient hover effect */}
            <Button className="bg-[#1E22AA] hover:bg-[#1E22AA]/90 rounded-full text-white px-6 py-2 md:px-8 md:py-6 text-sm md:text-md font-semibold group overflow-hidden relative w-full md:w-auto">
              <span className="relative z-10 flex items-center justify-center gap-2">
                Подробнее
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-[#fb4b06] to-[#fb4b06]/90 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductCarousel: React.FC = () => {
  const companies: Company[] = [
    {
      name: "Real Plus",
      color: "#3538C8",
      logoUrl: "/images/logo/RealPlus.png", // Add path to your logo image
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
      logoUrl: "/images/logo/Wim.png", // Add path to your logo image
      categories: [
        "Универсальные чистящие средства",
        "Бытовые чистящие спреи"
      ]
    },
    {
      name: "Yumşa Plus",
      color: "#1138b7",
      logoUrl: "/images/logo/Yumsa.png", // Add path to your logo image
      categories: [
        "Универсальные жидкие моющие средства с кондиционером",
        "Спреи-освежители для тканей",
        "Кондиционеры для белья"
      ]
    },
    {
      name: "Awen",
      color: "#ff3e1c",
      logoUrl: "/images/logo/Awen.png", // Add path to your logo image
      categories: [
        "Жидкости для мытья посуды"
      ]
    },
    {
      name: "Glass Plus",
      color: "#e80c00",
      logoUrl: "/images/logo/Glass.png", // Add path to your logo image
      categories: [
        "Средства для очистки стекол и поверхностей"
      ]
    }
  ];

  // Enhanced product data array with brand and category
  const products = [
    // Real Plus
    {
      title: "Real Plus Порошок для стирки",
      description: "Мощный стиральный порошок для белого и цветного белья, эффективно удаляет загрязнения.",
      image: "/images/RealPlus_Powder.png",
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
      image: "/images/RealPlus_Liquid.png",
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
      title: "Real Plus Стиральный порошок",
      description: "Специальный стиральный порошок для сохранения цвета и структуры ткани.",
      image: "/images/RealPlus_Detergent.png",
      color: "#3538C8",
      brandName: "Real Plus",
      category: "Стиральные порошки",
      features: [
        "Защита цвета тканей",
        "Эффективен при любых температурах",
        "Подходит для всех типов стиральных машин"
      ]
    },
    {
      title: "Real Plus Освежитель воздуха",
      description: "Долговременная свежесть и приятный аромат в вашем доме.",
      image: "/images/RealPlus_AirFreshener.png",
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
      image: "/images/RealPlus_Soap.png",
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
      image: "/images/RealPlus_Gel.png",
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
      image: "/images/Vim_Cleaner.png",
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
      image: "/images/Wim_Spray.png",
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
      image: "/images/Yumsa_Liquid.png",
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
      image: "/images/Yumsa_FabricSpray.png",
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
      image: "/images/Yumsa_Softener.png",
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
      image: "/images/Awen_Dishwashing.png",
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
      image: "/images/GlassPlus_Cleaner.png",
      color: "#e80c00",
      brandName: "Glass Plus",
      category: "Средства для очистки стекол и поверхностей",
      features: [
        "Быстрое испарение",
        "Удаление пыли и грязи",
        "Не оставляет разводов"
      ]
    }
  ];

  const [activeProductIndex, setActiveProductIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStartX, setTouchStartX] = useState(0);
  const [filterBrand, setFilterBrand] = useState<string | null>(null);
  const [filterCategory, setFilterCategory] = useState<string | null>(null);
  const [filteredProducts, setFilteredProducts] = useState(products);

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
  // Reset active product to first item when filters change
  setActiveProductIndex(0);
}, [filterBrand, filterCategory]);

  // Slider navigation handlers
  const nextProduct = () => {
    setActiveProductIndex((prev) => (prev === filteredProducts.length - 1 ? 0 : prev + 1));
  };
  
  const prevProduct = () => {
    setActiveProductIndex((prev) => (prev === 0 ? filteredProducts.length - 1 : prev - 1));
  };

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
  }, [activeProductIndex, isPaused, filteredProducts]);

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
  }, []);

  return (
    <section className="relative py-14 md:pb-32 bg-white overflow-hidden">
      
      {/* Enhanced background elements with animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-32 md:w-64 h-32 md:h-64 rounded-full bg-[#1E22AA]/5 filter blur-xl md:blur-3xl animate-pulse" style={{ animationDuration: '8s' }}></div>
        <div className="absolute bottom-1/3 right-1/4 w-40 md:w-80 h-40 md:h-80 rounded-full bg-[#fb4b06]/5 filter blur-xl md:blur-3xl animate-pulse" style={{ animationDuration: '12s', animationDelay: '2s' }}></div>
        <div className="absolute top-2/3 left-1/2 w-24 md:w-48 h-24 md:h-48 rounded-full bg-[#E85D24]/5 filter blur-xl md:blur-3xl animate-pulse" style={{ animationDuration: '10s', animationDelay: '1s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
          <FadeInView>
            <div className="inline-block mb-4 bg-gradient-to-r from-[#fb4b06]/20 to-[#fb4b06]/10 rounded-full px-4 md:px-6 py-2">
              <span className="text-[#fb4b06] text-xs md:text-sm font-medium uppercase tracking-wider">Наша продукция</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight" style={{ fontFamily: '"Avenir Next Heavy", system-ui, sans-serif' }}>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#1E22AA] to-[#3538C8]">КАЧЕСТВО, КОТОРОЕ </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#fb4b06] to-[#E85D24]">ЗАБОТИТСЯ О ВАС</span>
            </h2>
            <p className="text-base md:text-xl text-gray-600 leading-relaxed">
              Каждый продукт компании Altyn Gaya разработан с заботой о комфорте и здоровье наших клиентов. Мы используем только лучшие материалы и современные технологии производства.
            </p>
          </FadeInView>
        </div>
        
          {/* Brands section */}
      <div className="my-4 md:my-8">
        <FadeInView>
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-10">
            <span className="text-[#1E22AA]">Наши</span> <span className="text-[#fb4b06]">бренды</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {companies.map((company) => (
              <div
                key={company.name}
                onClick={() => setFilterBrand(company.name === filterBrand ? null : company.name)}
                className={`flex flex-col items-center p-4 md:p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                  company.name === filterBrand
                    ? 'bg-white shadow-lg transform scale-105'
                    : 'bg-white/50 hover:bg-white hover:shadow-md'
                }`}
              >
                <div 
                  className="w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mb-3 overflow-hidden"
                  style={{ backgroundColor: `${company.color}20` }}
                >
                  <img 
                    src={company.logoUrl} 
                    alt={`${company.name} logo`} 
                    className="w-12 h-12 md:w-16 md:h-16 object-contain"
                  />
                </div>
                <h4 className="font-semibold text-lg" style={{ color: company.color }}>{company.name}</h4>
                <p className="text-xs text-gray-500 mt-1">{company.categories.length} категорий</p>
              </div>
            ))}
          </div>
        </FadeInView>
      </div>
      </div>

        <div 
          className="relative max-w-5xl mx-auto h-[500px] md:h-[560px]"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          role="region"
          aria-label="Продуктовая карусель"
          aria-roledescription="carousel"
        >
          {filteredProducts.length === 0 ? (
            <div className="flex items-center justify-center h-full">
              <div className="text-center p-6 rounded-lg bg-gray-50 shadow-inner">
                <div className="flex justify-center mb-4">
                  <Filter className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">Нет результатов</h3>
                <p className="text-gray-600">Попробуйте изменить параметры фильтрации для отображения продуктов</p>
                <Button
                  onClick={() => {
                    setFilterBrand(null);
                    setFilterCategory(null);
                  }}
                  className="mt-4 bg-[#1E22AA] hover:bg-[#1E22AA]/90 text-white rounded-full px-4 py-2"
                >
                  Сбросить фильтры
                </Button>
              </div>
            </div>
          ) : (
            <div className="relative h-full perspective-1000">
              {filteredProducts.map((product, index) => (
                <ProductCard 
                  key={index} 
                  product={product}
                  isActive={index === activeProductIndex} 
                  index={index}
                  activeIndex={activeProductIndex}
                />
              ))}
            </div>
          )}
          
          {/* Enhanced slider navigation with animations */}
          {filteredProducts.length > 0 && (
            <div className="flex justify-center gap-14 items-center mt-6 md:mt-10">
              <Button 
                onClick={prevProduct} 
                className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-white shadow-xl border border-gray-100 hover:bg-gradient-to-r from-[#fb4b06] to-[#E85D24] hover:border-transparent hover:text-white transition-colors flex items-center justify-center group"
                variant="outline"
                aria-label="Previous product"
              >
                <ChevronLeft className="w-8 h-8 md:w-12 md:h-12 text-gray-400 group-hover:text-white transition-colors" />
              </Button>
              
              <div className="flex space-x-2 md:space-x-3">
                {filteredProducts.map((_, index) => (
                  <button 
                    key={index}
                    onClick={() => setActiveProductIndex(index)}
                    className={`h-3 rounded-full transition-all duration-300 ${
                      index === activeProductIndex 
                        ? "bg-gradient-to-r from-[#fb4b06] to-[#E85D24] w-8 md:w-10" 
                        : "bg-gray-300 hover:bg-gray-400 w-3"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                    aria-current={index === activeProductIndex ? "true" : "false"}
                  />
                ))}
              </div>
              
              <Button 
                onClick={nextProduct} 
                className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-white shadow-xl border border-gray-100 hover:bg-gradient-to-r from-[#fb4b06] to-[#E85D24] hover:border-transparent hover:text-white transition-colors flex items-center justify-center group"
                variant="outline"
                aria-label="Next product"
              >
                <ChevronRight className="w-8 h-8 md:w-12 md:h-12 text-gray-400 group-hover:text-white transition-colors" />
              </Button>
            </div>
          )}
        </div>

      
      {/* Add custom keyframe animations to stylesheet */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          25% { transform: translateY(-10px) translateX(5px); }
          50% { transform: translateY(0) translateX(10px); }
          75% { transform: translateY(10px) translateX(5px); }
        }
        .animate-float {
          animation: float 7s ease-in-out infinite;
        }
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </section>
  );
};

export default ProductCarousel;