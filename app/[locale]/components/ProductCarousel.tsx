'use client'
import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { Button } from './ui/button';
import { ChevronLeft, ChevronRight, Check, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useLocale } from 'next-intl';


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


// interface Product {
//   title: string;
//   description: string;
//   image: string;
//   color: string;
//   features?: string[];
//   brandName: string;
//   category: string;
// }

// Company interface to organize brands and their product categories
// interface Company {
//   name: string;
//   color: string;
//   logoUrl: string;
//   categories: string[];
// }

interface Translation {
  ru: string;
  en: string;
  tr: string;
}

interface Product {
  title: Translation;
  description: Translation;
  image: string;
  color: string;
  features: Translation[];
  brandName: string;
  category: Translation;
}


interface Company {
  name: string;
  color: string;
  logoUrl: string;
  categories: Translation[];
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
    
    const locale = useLocale();
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
                alt={product.title[locale as keyof Translation] || product.title.ru}
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
              {product.title[locale as keyof Translation] || product.title.ru}
            </h3>
            
            <p className="text-gray-600 dark:text-gray-300 text-xs mb-3 line-clamp-2">
              {product.description[locale as keyof Translation] || product.description.ru}
            </p>
            
            <div className="space-y-1.5 mb-3">
              {product.features && product.features.length > 0 ? (
                // Show only the first feature on mobile to save space
                <div className="flex items-center">
                  <div className="bg-[#fb4b06]/10 flex-shrink-0 rounded-full p-1 mr-2">
                    <Check className="text-[#fb4b06] w-3 h-3" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-200 text-xs">
                    {product.features[0][locale as keyof Translation] || product.features[0].ru}
                  </span>
                </div>
              ) : (
                // Show only one default feature to save space
                <div className="flex items-center">
                  <div className="bg-[#fb4b06]/10 flex-shrink-0 rounded-full p-1 mr-2">
                    <Check className="text-[#fb4b06] w-3 h-3" />
                  </div>
                  <span className="text-gray-700 text-xs">{locale === 'ru' ? 'Быстрое действие' : locale === 'en' ? 'Quick action' : 'Hızlı etki'}</span>
                </div>
              )}
            </div>
            
            {/* Smaller button with tighter padding */}
            <Link href={{pathname: '/shop', query: { category: product.category[locale as keyof Translation] }}} 
                className="bg-[#1E22AA] hover:bg-[#1E22AA]/90 rounded-full text-white px-4 py-2 text-xs font-semibold group overflow-hidden relative w-full text-center mt-auto">
              <span className="relative z-10 flex items-center justify-center gap-1">
                {locale === 'ru' ? 'Подробнее' : locale === 'en' ? 'More details' : 'Daha fazla bilgi'}
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
                    alt={product.title[locale as keyof Translation] || product.title.ru}
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
                  {product.title[locale as keyof Translation] || product.title.ru}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 md:text-lg mb-6 line-clamp-3 min-h-[4.5rem]">
                  {product.description[locale as keyof Translation] || product.description.ru}
                </p>
              </div>
              
              <div className="space-y-4 mb-8">
                {product.features && product.features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <div className="bg-[#fb4b06]/10 dark:bg-[#fb4b06]/20 flex-shrink-0 rounded-full p-2 mr-3 group-hover:bg-[#fb4b06] transition-colors duration-300">
                      <Check className="text-[#fb4b06] w-4 h-4 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <span className="text-gray-700 dark:text-gray-200 text-base">{feature[locale as keyof Translation] || feature.ru}</span>
                  </div>
                ))}
                {!product.features && (
                  <>
                    <div className="flex items-center group">
                      <div className="bg-[#fb4b06]/10 dark:bg-[#fb4b06]/20 flex-shrink-0 rounded-full p-2 mr-3 group-hover:bg-[#fb4b06] transition-colors duration-300">
                        <Check className="text-[#fb4b06] w-4 h-4 group-hover:text-white transition-colors duration-300" />
                      </div>
                      <span className="text-gray-700 dark:text-gray-200 text-base">{locale === 'ru' ? 'Быстрое действие' : locale === 'en' ? 'Quick action' : 'Hızlı etki'}</span>
                    </div>
                    <div className="flex items-center group">
                      <div className="bg-[#fb4b06]/10 dark:bg-[#fb4b06]/20 flex-shrink-0 rounded-full p-2 mr-3 group-hover:bg-[#fb4b06] transition-colors duration-300">
                        <Check className="text-[#fb4b06] w-4 h-4 group-hover:text-white transition-colors duration-300" />
                      </div>
                      <span className="text-gray-700 dark:text-gray-200 text-base">{locale === 'ru' ? 'Делает ткани мягкими и свежими' : locale === 'en' ? 'Makes fabrics soft and fresh' : 'Kumaşları yumuşak ve ferah yapar'} </span>
                    </div>
                    <div className="flex items-center group">
                      <div className="bg-[#fb4b06]/10 dark:bg-[#fb4b06]/20 flex-shrink-0 rounded-full p-2 mr-3 group-hover:bg-[#fb4b06] transition-colors duration-300">
                        <Check className="text-[#fb4b06] w-4 h-4 group-hover:text-white transition-colors duration-300" />
                      </div>
                      <span className="text-gray-700 dark:text-gray-200 text-base">{locale === 'ru' ? 'Удаляет стойкие пятна' : locale === 'en' ? 'Removes stubborn stains' : 'İnatçı lekeleri çıkarır'} </span>
                    </div>
                    <div className="flex items-center group">
                      <div className="bg-[#fb4b06]/10 dark:bg-[#fb4b06]/20 flex-shrink-0 rounded-full p-2 mr-3 group-hover:bg-[#fb4b06] transition-colors duration-300">
                        <Check className="text-[#fb4b06] w-4 h-4 group-hover:text-white transition-colors duration-300" />
                      </div>
                      <span className="text-gray-700 dark:text-gray-200 text-base">{locale === 'ru' ? 'Подходит для ручной и машинной стирки' : locale === 'en' ? 'Suitable for hand and machine washing' : 'Elde ve makinede yıkamaya uygundur'} </span>
                    </div>
                  </>
                )}
              </div>
              
              {/* Enhanced button with animated gradient hover effect */}
              <Link href={{pathname: '/shop', query: { category: product.category[locale as keyof Translation] }}} 
                  className="bg-[#1E22AA] hover:bg-[#1E22AA]/90 rounded-full text-white px-8 py-4 text-base font-semibold group overflow-hidden relative md:w-auto self-start">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {locale === 'ru' ? 'Подробнее' : locale === 'en' ? 'More' : 'Detaylı'}
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
  // const t = useTranslations('ProductCarousel');

  const locale = useLocale();
  // Use useMemo to prevent recreating companies array on each render
  // const companies = useMemo<Company[]>(() => [
  //   {
  //     name: "Real Plus",
  //     color: "#3538C8",
  //     logoUrl: "/images/logo/RealPlus.png",
  //     categories: [
  //       "Стиральные порошки",
  //       "Универсальные жидкие моющие средства с кондиционером",
  //       "Жидкие средства для стирки",
  //       "Освежители воздуха",
  //       "Жидкое мыло",
  //       "Универсальный гель для стирки",
  //       "Гели для стирки",
  //       "Универсальные жидкие моющие средства с кондиционером"
  //     ]
  //   },
  //   {
  //     name: "Wim",
  //     color: "#03a31e",
  //     logoUrl: "/images/logo/Wim.png",
  //     categories: [
  //       "Универсальные чистящие средства",
  //       "Бытовые чистящие спреи",
  //       "Средства для мытья посуды",
  //       "Универсальные чистящие средства спрей"
  //     ]
  //   },
  //   {
  //     name: "Yumşa Plus",
  //     color: "#1138b7",
  //     logoUrl: "/images/logo/Yumsa.png",
  //     categories: [
  //       "Универсальные жидкие моющие средства с кондиционером",
  //       "Спреи-освежители для тканей",
  //       "Спреи-освежители для тканей",
  //       "Кондиционеры и ополаскиватели"
  //     ]
  //   },
  //   {
  //     name: "Awen",
  //     color: "#ff3e1c",
  //     logoUrl: "/images/logo/Awen.png",
  //     categories: [
  //       "Жидкости для мытья посуды"
  //     ]
  //   },
  //   {
  //     name: "Glass Plus",
  //     color: "#e80c00",
  //     logoUrl: "/images/logo/Glass.png",
  //     categories: [
  //       "Средства для чистки стекол и поверхностей"
  //     ]
  //   },
  //   {
  //     name: "Lagis",
  //     color: "#00cdd1",
  //     logoUrl: "/images/logo/Lagis.png",
  //     categories: [
  //       "Порошки"
  //     ]
  //   }
  // ], []);
  //with translate in three languages
  const companies = useMemo<Company[]>(() => [
    {
      name: "Real Plus",
      color: "#3538C8",
      logoUrl: "/images/logo/RealPlus.png",
      categories: [
        {
          ru: "Стиральные порошки",
          en: "Laundry Detergents",
          tr: "Çamaşır Deterjanları"
        },
        {
          ru: "Универсальные жидкие моющие средства с кондиционером",
          en: "Universal Liquid Detergents with Conditioner",
          tr: "Yumuşatıcılı Çok Amaçlı Sıvı Deterjanlar"
        },
        {
          ru: "Жидкие средства для стирки",
          en: "Liquid Laundry Detergents",
          tr: "Sıvı Çamaşır Deterjanları"
        },
        {
          ru: "Освежители воздуха",
          en: "Air Fresheners",
          tr: "Oda Kokuları"
        },
        {
          ru: "Жидкое мыло",
          en: "Liquid Soap",
          tr: "Sıvı Sabun"
        },
        {
          ru: "Универсальный гель для стирки",
          en: "Universal Laundry Gel",
          tr: "Çok Amaçlı Çamaşır Jeli"
        },
        {
          ru: "Гели для стирки",
          en: "Laundry Gels",
          tr: "Çamaşır Jelleri"
        }
      ]
    },
    {
      name: "Wim",
      color: "#03a31e",
      logoUrl: "/images/logo/Wim.png",
      categories: [
        {
          ru: "Универсальные чистящие средства",
          en: "Universal Cleaning Products",
          tr: "Çok Amaçlı Temizlik Ürünleri"
        },
        {
          ru: "Бытовые чистящие спреи",
          en: "Household Cleaning Sprays",
          tr: "Ev Temizlik Spreyleri"
        },
        {
          ru: "Средства для мытья посуды",
          en: "Dishwashing Detergents",
          tr: "Bulaşık Deterjanları"
        },
        {
          ru: "Универсальные чистящие средства спрей",
          en: "Universal Cleaning Sprays",
          tr: "Çok Amaçlı Temizlik Spreyleri"
        }
      ]
    },
    {
      name: "Yumşa Plus",
      color: "#1138b7",
      logoUrl: "/images/logo/Yumsa.png",
      categories: [
        {
          ru: "Универсальные жидкие моющие средства с кондиционером",
          en: "Universal Liquid Detergents with Conditioner",
          tr: "Yumuşatıcılı Çok Amaçlı Sıvı Deterjanlar"
        },
        {
          ru: "Спреи-освежители для тканей",
          en: "Fabric Refresher Sprays",
          tr: "Kumaş Tazeleyici Spreyler"
        },
        {
          ru: "Кондиционеры и ополаскиватели",
          en: "Fabric Softeners and Conditioners",
          tr: "Kumaş Yumuşatıcılar ve Durulayıcılar"
        }
      ]
    },
    {
      name: "Awen",
      color: "#ff3e1c",
      logoUrl: "/images/logo/Awen.png",
      categories: [
        {
          ru: "Жидкости для мытья посуды",
          en: "Dishwashing Liquids",
          tr: "Bulaşık Yıkama Sıvıları"
        }
      ]
    },
    {
      name: "Glass Plus",
      color: "#e80c00",
      logoUrl: "/images/logo/Glass.png",
      categories: [
        {
          ru: "Средства для чистки стекол и поверхностей",
          en: "Glass and Surface Cleaning Products",
          tr: "Cam ve Yüzey Temizleme Ürünleri"
        }
      ]
    },
    {
      name: "Lagis",
      color: "#00cdd1",
      logoUrl: "/images/logo/Lagis.png",
      categories: [
        {
          ru: "Порошки",
          en: "Powders",
          tr: "Tozlar"
        }
      ]
    }
  ], []);

  // Use useMemo to prevent recreating products array on each render
  // const products = useMemo<Product[]>(() => [
  //         // Real Plus
  //         {
  //           title: "Real Plus Порошок для стирки",
  //           description: "Мощный стиральный порошок для белого и цветного белья, эффективно удаляет загрязнения.",
  //           image: "/images/category_pictures/RealPlus_Soda.png",
  //           color: "#3538C8",
  //           brandName: "Real Plus",
  //           category: "Стиральные порошки",
  //           features: [
  //             "Глубокая очистка тканей",
  //             "Сохранение цвета",
  //             "Эффективен даже при низких температурах"
  //           ]
  //         },
  //         {
  //           title: "Real Plus Универсальные гели для стирки",
  //           description: "Эффективные жидкие средства для стирки с кондиционером, удаляющие пятна и неприятные запахи, придающие одежде мягкость и свежесть.",
  //           image: "/images/category_pictures/RealPlus_SuwukSoda_3l.png",
  //           color: "#3538C8",
  //           brandName: "Real Plus",
  //           category: "Гели для стирки",
  //           features: [
  //             "Универсальное средство для стирки",
  //             "Удаляет пятна и неприятные запахи",
  //             "Обладает кондиционирующим эффектом",
  //           ]
  //         },
  //         {
  //           title: "Real Plus Универсальное жидкое моющее средство с кондиционером",
  //           description: "Многофункциональное средство для бережного ухода за тканями с эффектом кондиционирования.",
  //           image: "/images/category_pictures/RealPlus_SuwukSoda_3l_.png",
  //           color: "#3538C8",
  //           brandName: "Real Plus",
  //           category: "Жидкие средства для стирки",
  //           features: [
  //             "Делает ткани мягкими и свежими",
  //             "Удаляет стойкие пятна",
  //             "Подходит для ручной и машинной стирки"
  //           ]
  //         },
  //         {
  //           title: "Real Plus Освежитель воздуха",
  //           description: "Долговременная свежесть и приятный аромат в вашем доме.",
  //           image: "/images/category_pictures/RealPlus_Sprey.png",
  //           color: "#3538C8",
  //           brandName: "Real Plus",
  //           category: "Освежители воздуха",
  //           features: [
  //             "Нейтрализует неприятные запахи",
  //             "Долговременный эффект",
  //             "Разнообразие ароматов"
  //           ]
  //         },
  //         {
  //           title: "Real Plus универсальные жидкие моющие средства с кондиционером",
  //           description: "Суперконцентрированное средство 2-в-1: для стирки и кондиционирования одежды.",
  //           image: "/images/category_pictures/RealPlus_perfume_collection.png",
  //           color: "#3538C8",
  //           brandName: "Real Plus",
  //           category: "Универсальные жидкие моющие средства с кондиционером",
  //           features: [
  //             "Содержит кондиционер для мягкости ткани",
  //   "Яркие и стойкие ароматы",
  //   "Эффективен даже при низких температурах",
  //   "Экономичный расход — суперконцентрат"
  //           ]
  //         },
  //         {
  //           title: "Real Plus Универсальные гели для стирки",
  //           description: "Эффективный гель для стирки, придающий белью свежесть и мягкость.",
  //           image: "/images/category_pictures/RealPlus_SuwukSoda_1l.png",
  //           color: "#3538C8",
  //           brandName: "Real Plus",
  //           category: "Универсальные гели для стирки",
  //           features: [
  //             "Глубокая очистка тканей",
  //             "Экономичный расход",
  //             "Подходит для всех типов тканей"
  //           ]
  //         },
        
  //         // Vim
  //         {
  //           title: "Wim Универсальное чистящее средство",
  //           description: "Эффективное средство для борьбы с загрязнениями на любых поверхностях.",
  //           image: "/images/category_pictures/Wim_domestos.png",
  //           color: "#03a31e",
  //           brandName: "Wim",
  //           category: "Универсальные чистящие средства",
  //           features: [
  //             "Быстрое удаление грязи",
  //             "Безопасный состав",
  //             "Не оставляет разводов"
  //           ]
  //         },
  //         {
  //           title: "Wim Моющие средства",
  //           description: "Высококачественные моющие средства Wim для эффективной очистки и блеска.",
  //           image: "/images/category_pictures/Wim_moyussy.png",
  //           color: "#03a31e",
  //           brandName: "Wim",
  //           category: "Средства для мытья посуды",
  //           features: [
  //             "Удаляет жир и загрязнения",
  //             "Придает блеск",
  //             "Приятный фруктовый аромат"
  //           ]
  //         },
  //         {
  //           title: "Wim Бытовой чистящий спрей",
  //           description: "Спрей для моментального очищения поверхностей от загрязнений.",
  //           image: "/images/category_pictures/Wim_antizir_450ml.png",
  //           color: "#03a31e",
  //           brandName: "Wim",
  //           category: "Бытовые чистящие спреи",
  //           features: [
  //             "Подходит для кухни и ванной",
  //             "Антибактериальный эффект",
  //             "Быстрое испарение без следов"
  //           ]
  //         },
  //         {
  //           title: "Wim Универсальные чистящие средства",
  //           description: "Эффективные средства для борьбы с загрязнениями на кухне, в ванной и на тканях. Подходят для любых поверхностей.",
  //           image: "/images/category_pictures/Wim_antizir.png",
  //           color: "#03a31e",
  //           brandName: "Wim",
  //           category: "Бытовые чистящие спреи",
  //           features: [
  //             "Удаляет жир, пятна и известковый налет",
  //             "Безопасный состав без разводов",
  //             "Подходит для кухни, ванной и тканей"
  //           ]
  //         },
  //         // Yumşa Plus
  //         {
  //           title: "Yumşa Plus Универсальное жидкое моющее средство с кондиционером",
  //           description: "Мягкое моющее средство с кондиционером для деликатных тканей.",
  //           image: "/images/category_pictures/YumsaPlus_uly.png",
  //           color: "#1138b7",
  //           brandName: "Yumşa Plus",
  //           category: "Универсальные жидкие моющие средства с кондиционером",
  //           features: [
  //             "Мягкий эффект на ткани",
  //             "Сохранение формы одежды",
  //             "Освежающий аромат"
  //           ]
  //         },
  //         {
  //           title: "Yumşa Plus Спрей-освежитель для тканей",
  //           description: "Освежает и удаляет запахи с одежды и текстиля.",
  //           image: "/images/category_pictures/YumsaPlus_sprey2.png",
  //           color: "#1138b7",
  //           brandName: "Yumşa Plus",
  //           category: "Ароматизаторы для дома и белья",
  //           features: [
  //             "Быстрое действие",
  //             "Не оставляет следов",
  //             "Гипоаллергенный состав"
  //           ]
  //         },
  //         {
  //           title: "Yumşa Plus Спреи-освежители для тканей",
  //           description: "Придает белью мягкость и приятный аромат.",
  //           image: "/images/category_pictures/YumsaPlus_sprey.png",
  //           color: "#1138b7",
  //           brandName: "Yumşa Plus",
  //           category: "Спреи-освежители для тканей",
  //           features: [
  //             "Антистатический эффект",
  //             "Долговременная свежесть",
  //             "Экономичный расход"
  //           ]
  //         },
  //         {
  //           title: "Yumşa Plus Кондиционеры и ополаскиватели",
  //           description: "Мягкость, свежесть и приятный аромат для вашей одежды с кондиционерами Yumşa.",
  //           image: "/images/category_pictures/YumsaPlus_kici.png",
  //           color: "#1138b7",
  //           brandName: "Yumşa Plus",
  //           category: "Кондиционеры и ополаскиватели",
  //           features: [
  //             "Придает ткани мягкость и свежесть",
  //   "Облегчает глажение одежды",
  //   "Придает одежде приятный и стойкий аромат",
  //           ]
  //         },

  //         // Awen
  //         {
  //           title: "Awen Жидкость для мытья посуды",
  //           description: "Эффективное средство для удаления жира и загрязнений.",
  //           image: "/images/category_pictures/Awen.png",
  //           color: "#ff3e1c",
  //           brandName: "Awen",
  //           category: "Жидкости для мытья посуды",
  //           features: [
  //             "Обильная пена",
  //             "Мягкое воздействие на кожу рук",
  //             "Удаление жира даже в холодной воде"
  //           ]
  //         },
        
  //         // Glass Plus
  //         {
  //           title: "Glass Plus Средство для очистки стекол и поверхностей",
  //           description: "Средство для сияющей чистоты стекол без разводов.",
  //           image: "/images/category_pictures/GlassPlus_category.png",
  //           color: "#e80c00",
  //           brandName: "Glass Plus",
  //           category: "Средства для чистки стекол и поверхностей",
  //           features: [
  //             "Быстрое испарение",
  //             "Удаление пыли и грязи",
  //             "Не оставляет разводов"
  //           ]
  //         },

  //         // Lagis
  //         {
  //           title: "Lagis Стиральный порошок для ручной стирки",
  //           description: "Стиральный порошок с насыщенным ароматом и лёгкой стиркой.",
  //           image: "/images/category_pictures/Lagis.png",
  //           color: "#00cdd1",
  //           brandName: "Lagis",
  //           category: "Стиральные порошки",
  //           features: [
  //             "Подходит для ручной стирки",
  //             "Лёгкое полоскание и отстирывание",
  //             "Долговечный аромат",
  //             "Эффективен даже в холодной воде"
  //           ]
  //         }
  // ], []);
  //with translate in three languages
  const products = useMemo<Product[]>(() => [
    // Real Plus
    {
      title: {
        ru: "Real Plus Порошок для стирки",
        en: "Real Plus Laundry Detergent",
        tr: "Real Plus Çamaşır Deterjanı"
      },
      description: {
        ru: "Мощный стиральный порошок для белого и цветного белья, эффективно удаляет загрязнения.",
        en: "Powerful laundry detergent for white and colored clothes, effectively removes stains.",
        tr: "Beyaz ve renkli çamaşırlar için güçlü deterjan, lekeleri etkili bir şekilde çıkarır."
      },
      image: "/images/category_pictures/RealPlus_Soda.png",
      color: "#3538C8",
      brandName: "Real Plus",
      category: {
        ru: "Стиральные порошки",
        en: "Laundry Detergents",
        tr: "Çamaşır Deterjanları"
      },
      features: [
        {
          ru: "Глубокая очистка тканей",
          en: "Deep fabric cleaning",
          tr: "Derinlemesine kumaş temizliği"
        },
        {
          ru: "Сохранение цвета",
          en: "Color preservation",
          tr: "Renk koruma"
        },
        {
          ru: "Эффективен даже при низких температурах",
          en: "Effective even at low temperatures",
          tr: "Düşük sıcaklıklarda bile etkili"
        }
      ]
    },
    {
      title: {
        ru: "Real Plus Универсальные гели для стирки",
        en: "Real Plus Universal Laundry Gels",
        tr: "Real Plus Çok Amaçlı Çamaşır Jelleri"
      },
      description: {
        ru: "Эффективные жидкие средства для стирки с кондиционером, удаляющие пятна и неприятные запахи, придающие одежде мягкость и свежесть.",
        en: "Effective liquid detergents with conditioner that remove stains and unpleasant odors, giving clothes softness and freshness.",
        tr: "Lekeleri ve hoş olmayan kokuları gideren, giysilere yumuşaklık ve tazelik veren etkili sıvı deterjanlar."
      },
      image: "/images/category_pictures/RealPlus_SuwukSoda_3l.png",
      color: "#3538C8",
      brandName: "Real Plus",
      category: {
        ru: "Гели для стирки",
        en: "Laundry Gels",
        tr: "Çamaşır Jelleri"
      },
      features: [
        {
          ru: "Универсальное средство для стирки",
          en: "Universal laundry detergent",
          tr: "Çok amaçlı çamaşır deterjanı"
        },
        {
          ru: "Удаляет пятна и неприятные запахи",
          en: "Removes stains and unpleasant odors",
          tr: "Lekeleri ve hoş olmayan kokuları giderir"
        },
        {
          ru: "Обладает кондиционирующим эффектом",
          en: "Has conditioning effect",
          tr: "Yumuşatıcı etkisine sahiptir"
        }
      ]
    },
    {
      title: {
        ru: "Real Plus Универсальное жидкое моющее средство с кондиционером",
        en: "Real Plus Universal Liquid Detergent with Conditioner",
        tr: "Real Plus Yumuşatıcılı Çok Amaçlı Sıvı Deterjan"
      },
      description: {
        ru: "Многофункциональное средство для бережного ухода за тканями с эффектом кондиционирования.",
        en: "Multifunctional product for gentle fabric care with conditioning effect.",
        tr: "Yumuşatma etkisi ile kumaşlar için çok fonksiyonlu nazik bakım ürünü."
      },
      image: "/images/category_pictures/RealPlus_SuwukSoda_3l_.png",
      color: "#3538C8",
      brandName: "Real Plus",
      category: {
        ru: "Жидкие средства для стирки",
        en: "Liquid Laundry Detergents",
        tr: "Sıvı Çamaşır Deterjanları"
      },
      features: [
        {
          ru: "Делает ткани мягкими и свежими",
          en: "Makes fabrics soft and fresh",
          tr: "Kumaşları yumuşak ve taze yapar"
        },
        {
          ru: "Удаляет стойкие пятна",
          en: "Removes stubborn stains",
          tr: "İnatçı lekeleri çıkarır"
        },
        {
          ru: "Подходит для ручной и машинной стирки",
          en: "Suitable for hand and machine washing",
          tr: "Elde ve makinede yıkama için uygundur"
        }
      ]
    },
    {
      title: {
        ru: "Real Plus Освежитель воздуха",
        en: "Real Plus Air Freshener",
        tr: "Real Plus Oda Kokusu"
      },
      description: {
        ru: "Долговременная свежесть и приятный аромат в вашем доме.",
        en: "Long-lasting freshness and pleasant fragrance in your home.",
        tr: "Evinizde uzun süreli tazelik ve hoş koku."
      },
      image: "/images/category_pictures/RealPlus_Sprey.png",
      color: "#3538C8",
      brandName: "Real Plus",
      category: {
        ru: "Освежители воздуха",
        en: "Air Fresheners",
        tr: "Oda Kokuları"
      },
      features: [
        {
          ru: "Нейтрализует неприятные запахи",
          en: "Neutralizes unpleasant odors",
          tr: "Hoş olmayan kokuları nötralize eder"
        },
        {
          ru: "Долговременный эффект",
          en: "Long-lasting effect",
          tr: "Uzun süreli etki"
        },
        {
          ru: "Разнообразие ароматов",
          en: "Variety of fragrances",
          tr: "Çeşitli kokular"
        }
      ]
    },
    {
      title: {
        ru: "Real Plus универсальные жидкие моющие средства с кондиционером",
        en: "Real Plus Universal Liquid Detergents with Conditioner",
        tr: "Real Plus Yumuşatıcılı Çok Amaçlı Sıvı Deterjanlar"
      },
      description: {
        ru: "Суперконцентрированное средство 2-в-1: для стирки и кондиционирования одежды.",
        en: "Super-concentrated 2-in-1 product: for washing and conditioning clothes.",
        tr: "Süper konsantre 2'si 1 arada ürün: çamaşır yıkama ve yumuşatma için."
      },
      image: "/images/category_pictures/RealPlus_perfume_collection.png",
      color: "#3538C8",
      brandName: "Real Plus",
      category: {
        ru: "Универсальные жидкие моющие средства с кондиционером",
        en: "Universal Liquid Detergents with Conditioner",
        tr: "Yumuşatıcılı Çok Amaçlı Sıvı Deterjanlar"
      },
      features: [
        {
          ru: "Содержит кондиционер для мягкости ткани",
          en: "Contains conditioner for fabric softness",
          tr: "Kumaş yumuşaklığı için yumuşatıcı içerir"
        },
        {
          ru: "Яркие и стойкие ароматы",
          en: "Bright and lasting fragrances",
          tr: "Parlak ve kalıcı kokular"
        },
        {
          ru: "Эффективен при низких температурах",
          en: "Effective at low temperatures",
          tr: "Düşük sıcaklıklarda etkili"
        },
        {
          ru: "Экономичный расход — суперконцентрат",
          en: "Economical consumption — super concentrate",
          tr: "Ekonomik tüketim — süper konsantre"
        }
      ]
    },
    {
      title: {
        ru: "Real Plus Универсальные гели для стирки",
        en: "Real Plus Universal Laundry Gels",
        tr: "Real Plus Çok Amaçlı Çamaşır Jelleri"
      },
      description: {
        ru: "Эффективный гель для стирки, придающий белью свежесть и мягкость.",
        en: "Effective laundry gel that gives laundry freshness and softness.",
        tr: "Çamaşırlara tazelik ve yumuşaklık veren etkili çamaşır jeli."
      },
      image: "/images/category_pictures/RealPlus_SuwukSoda_1l.png",
      color: "#3538C8",
      brandName: "Real Plus",
      category: {
        ru: "Универсальные гели для стирки",
        en: "Universal Laundry Gels",
        tr: "Çok Amaçlı Çamaşır Jelleri"
      },
      features: [
        {
          ru: "Глубокая очистка тканей",
          en: "Deep fabric cleaning",
          tr: "Derinlemesine kumaş temizliği"
        },
        {
          ru: "Экономичный расход",
          en: "Economical consumption",
          tr: "Ekonomik tüketim"
        },
        {
          ru: "Подходит для всех типов тканей",
          en: "Suitable for all fabric types",
          tr: "Tüm kumaş türleri için uygundur"
        }
      ]
    },
  
    // Wim
    {
      title: {
        ru: "Wim Универсальное чистящее средство",
        en: "Wim Universal Cleaning Product",
        tr: "Wim Çok Amaçlı Temizlik Ürünü"
      },
      description: {
        ru: "Эффективное средство для борьбы с загрязнениями на любых поверхностях.",
        en: "Effective product for fighting dirt on any surface.",
        tr: "Her türlü yüzeydeki kirlere karşı etkili ürün."
      },
      image: "/images/category_pictures/Wim_domestos.png",
      color: "#03a31e",
      brandName: "Wim",
      category: {
        ru: "Универсальные чистящие средства",
        en: "Universal Cleaning Products",
        tr: "Çok Amaçlı Temizlik Ürünleri"
      },
      features: [
        {
          ru: "Быстрое удаление грязи",
          en: "Quick dirt removal",
          tr: "Hızlı kir giderme"
        },
        {
          ru: "Безопасный состав",
          en: "Safe formula",
          tr: "Güvenli formül"
        },
        {
          ru: "Не оставляет разводов",
          en: "Does not leave streaks",
          tr: "İz bırakmaz"
        }
      ]
    },
    {
      title: {
        ru: "Wim Моющие средства",
        en: "Wim Washing Products",
        tr: "Wim Yıkama Ürünleri"
      },
      description: {
        ru: "Высококачественные моющие средства Wim для эффективной очистки и блеска.",
        en: "High-quality Wim washing products for effective cleaning and shine.",
        tr: "Etkili temizlik ve parlaklık için yüksek kaliteli Wim yıkama ürünleri."
      },
      image: "/images/category_pictures/Wim_moyussy.png",
      color: "#03a31e",
      brandName: "Wim",
      category: {
        ru: "Средства для мытья посуды",
        en: "Dishwashing Detergents",
        tr: "Bulaşık Deterjanları"
      },
      features: [
        {
          ru: "Удаляет жир и загрязнения",
          en: "Removes grease and dirt",
          tr: "Yağ ve kiri temizler"
        },
        {
          ru: "Придает блеск",
          en: "Gives shine",
          tr: "Parlaklık verir"
        },
        {
          ru: "Приятный фруктовый аромат",
          en: "Pleasant fruit fragrance",
          tr: "Hoş meyve kokusu"
        }
      ]
    },
    {
      title: {
        ru: "Wim Бытовой чистящий спрей",
        en: "Wim Household Cleaning Spray",
        tr: "Wim Ev Temizlik Spreyi"
      },
      description: {
        ru: "Спрей для моментального очищения поверхностей от загрязнений.",
        en: "Spray for instant surface cleaning from dirt.",
        tr: "Yüzeyleri kirden anında temizleyen sprey."
      },
      image: "/images/category_pictures/Wim_antizir_450ml.png",
      color: "#03a31e",
      brandName: "Wim",
      category: {
        ru: "Бытовые чистящие спреи",
        en: "Household Cleaning Sprays",
        tr: "Ev Temizlik Spreyleri"
      },
      features: [
        {
          ru: "Подходит для кухни и ванной",
          en: "Suitable for kitchen and bathroom",
          tr: "Mutfak ve banyo için uygundur"
        },
        {
          ru: "Антибактериальный эффект",
          en: "Antibacterial effect",
          tr: "Antibakteriyel etki"
        },
        {
          ru: "Быстрое испарение без следов",
          en: "Quick evaporation without traces",
          tr: "İz bırakmadan hızlı buharlaşma"
        }
      ]
    },
    {
      title: {
        ru: "Wim Универсальные чистящие средства",
        en: "Wim Universal Cleaning Products",
        tr: "Wim Çok Amaçlı Temizlik Ürünleri"
      },
      description: {
        ru: "Эффективные средства для борьбы с загрязнениями на кухне, в ванной и на тканях. Подходят для любых поверхностей.",
        en: "Effective products for fighting dirt in the kitchen, bathroom, and on fabrics. Suitable for any surface.",
        tr: "Mutfak, banyo ve kumaşlardaki kirlerle mücadele için etkili ürünler. Her türlü yüzey için uygundur."
      },
      image: "/images/category_pictures/Wim_antizir.png",
      color: "#03a31e",
      brandName: "Wim",
      category: {
        ru: "Бытовые чистящие спреи",
        en: "Household Cleaning Sprays",
        tr: "Ev Temizlik Spreyleri"
      },
      features: [
        {
          ru: "Удаляет жир, пятна и известковый налет",
          en: "Removes grease, stains, and limescale",
          tr: "Yağ, leke ve kireç kalıntılarını çıkarır"
        },
        {
          ru: "Безопасный состав без разводов",
          en: "Safe formula without streaks",
          tr: "İz bırakmayan güvenli formül"
        },
        {
          ru: "Подходит для кухни, ванной и тканей",
          en: "Suitable for kitchen, bathroom, and fabrics",
          tr: "Mutfak, banyo ve kumaşlar için uygundur"
        }
      ]
    },
  
    // Yumşa Plus
    {
      title: {
        ru: "Yumşa Plus Универсальное жидкое моющее средство с кондиционером",
        en: "Yumşa Plus Universal Liquid Detergent with Conditioner",
        tr: "Yumşa Plus Yumuşatıcılı Çok Amaçlı Sıvı Deterjan"
      },
      description: {
        ru: "Мягкое моющее средство с кондиционером для деликатных тканей.",
        en: "Gentle detergent with conditioner for delicate fabrics.",
        tr: "Hassas kumaşlar için yumuşatıcılı nazik deterjan."
      },
      image: "/images/category_pictures/YumsaPlus_uly.png",
      color: "#1138b7",
      brandName: "Yumşa Plus",
      category: {
        ru: "Универсальные жидкие моющие средства с кондиционером",
        en: "Universal Liquid Detergents with Conditioner",
        tr: "Yumuşatıcılı Çok Amaçlı Sıvı Deterjanlar"
      },
      features: [
        {
          ru: "Мягкий эффект на ткани",
          en: "Gentle effect on fabrics",
          tr: "Kumaşlar üzerinde nazik etki"
        },
        {
          ru: "Сохранение формы одежды",
          en: "Preserving the shape of clothes",
          tr: "Giysilerin şeklini koruma"
        },
        {
          ru: "Освежающий аромат",
          en: "Refreshing fragrance",
          tr: "Ferahlatıcı koku"
        }
      ]
    },
    {
      title: {
        ru: "Yumşa Plus Спрей-освежитель для тканей",
        en: "Yumşa Plus Fabric Refresher Spray",
        tr: "Yumşa Plus Kumaş Tazeleyici Sprey"
      },
      description: {
        ru: "Освежает и удаляет запахи с одежды и текстиля.",
        en: "Refreshes and removes odors from clothes and textiles.",
        tr: "Giysileri ve tekstilleri tazeler ve kokuları giderir."
      },
      image: "/images/category_pictures/YumsaPlus_sprey2.png",
      color: "#1138b7",
      brandName: "Yumşa Plus",
      category: {
        ru: "Ароматизаторы для дома и белья",
        en: "Home and Linen Fragrances",
        tr: "Ev ve Çamaşır Kokuları"
      },
      features: [
        {
          ru: "Быстрое действие",
          en: "Quick action",
          tr: "Hızlı etki"
        },
        {
          ru: "Не оставляет следов",
          en: "Leaves no traces",
          tr: "İz bırakmaz"
        },
        {
          ru: "Гипоаллергенный состав",
          en: "Hypoallergenic formula",
          tr: "Hipoalerjenik formül"
        }
      ]
    },
    {
      title: {
        ru: "Yumşa Plus Спреи-освежители для тканей",
        en: "Yumşa Plus Fabric Refresher Sprays",
        tr: "Yumşa Plus Kumaş Tazeleyici Spreyler"
      },
      description: {
        ru: "Придает белью мягкость и приятный аромат.",
        en: "Gives linen softness and pleasant fragrance.",
        tr: "Çamaşırlara yumuşaklık ve hoş koku verir."
      },
      image: "/images/category_pictures/YumsaPlus_sprey.png",
      color: "#1138b7",
      brandName: "Yumşa Plus",
      category: {
        ru: "Спреи-освежители для тканей",
        en: "Fabric Refresher Sprays",
        tr: "Kumaş Tazeleyici Spreyler"
      },
      features: [
        {
          ru: "Антистатический эффект",
          en: "Antistatic effect",
          tr: "Antistatik etki"
        },
        {
          ru: "Долговременная свежесть",
          en: "Long-lasting freshness",
          tr: "Uzun süreli tazelik"
        },
        {
          ru: "Экономичный расход",
          en: "Economical consumption",
          tr: "Ekonomik tüketim"
        }
      ]
    },
    {
      title: {
        ru: "Yumşa Plus Кондиционеры и ополаскиватели",
        en: "Yumşa Plus Fabric Softeners and Conditioners",
        tr: "Yumşa Plus Kumaş Yumuşatıcılar ve Durulayıcılar"
      },
      description: {
        ru: "Мягкость, свежесть и приятный аромат для вашей одежды с кондиционерами Yumşa.",
        en: "Softness, freshness, and pleasant fragrance for your clothes with Yumşa conditioners.",
        tr: "Yumşa yumuşatıcıları ile giysilerinize yumuşaklık, tazelik ve hoş koku."
      },
      image: "/images/category_pictures/YumsaPlus_kici.png",
      color: "#1138b7",
      brandName: "Yumşa Plus",
      category: {
        ru: "Кондиционеры и ополаскиватели",
        en: "Fabric Softeners and Conditioners",
        tr: "Kumaş Yumuşatıcılar ve Durulayıcılar"
      },
      features: [
        {
          ru: "Придает ткани мягкость и свежесть",
          en: "Gives fabric softness and freshness",
          tr: "Kumaşa yumuşaklık ve tazelik verir"
        },
        {
          ru: "Облегчает глажение одежды",
          en: "Makes ironing clothes easier",
          tr: "Giysilerin ütülenmesini kolaylaştırır"
        },
        {
          ru: "Придает одежде приятный и стойкий аромат",
          en: "Gives clothes a pleasant and lasting fragrance",
          tr: "Giysilere hoş ve kalıcı koku verir"
        }
      ]
    },
  
    // Awen
    {
      title: {
        ru: "Awen Жидкость для мытья посуды",
        en: "Awen Dishwashing Liquid",
        tr: "Awen Bulaşık Yıkama Sıvısı"
      },
      description: {
        ru: "Эффективное средство для удаления жира и загрязнений.",
        en: "Effective product for removing grease and dirt.",
        tr: "Yağ ve kiri çıkarmak için etkili ürün."
      },
      image: "/images/category_pictures/Awen.png",
      color: "#ff3e1c",
      brandName: "Awen",
      category: {
        ru: "Жидкости для мытья посуды",
        en: "Dishwashing Liquids",
        tr: "Bulaşık Yıkama Sıvıları"
      },
      features: [
        {
          ru: "Обильная пена",
          en: "Abundant foam",
          tr: "Bol köpük"
        },
        {
          ru: "Мягкое воздействие на кожу рук",
          en: "Gentle on hand skin",
          tr: "El cildi için nazik"
        },
        {
          ru: "Удаление жира даже в холодной воде",
          en: "Removes grease even in cold water",
          tr: "Soğuk suda bile yağı çıkarır"
        }
      ]
    },
  
    // Glass Plus
    {
      title: {
        ru: "Glass Plus Средство для очистки стекол и поверхностей",
        en: "Glass Plus Glass and Surface Cleaner",
        tr: "Glass Plus Cam ve Yüzey Temizleyici"
      },
      description: {
        ru: "Средство для сияющей чистоты стекол без разводов.",
        en: "Product for shining clean glass without streaks.",
        tr: "İz bırakmadan camları parlak temizleyen ürün."
      },
      image: "/images/category_pictures/GlassPlus_category.png",
      color: "#e80c00",
      brandName: "Glass Plus",
      category: {
        ru: "Средства для чистки стекол и поверхностей",
        en: "Glass and Surface Cleaning Products",
        tr: "Cam ve Yüzey Temizleme Ürünleri"
      },
      features: [
        {
          ru: "Быстрое испарение",
          en: "Quick evaporation",
          tr: "Hızlı buharlaşma"
        },
        {
          ru: "Удаление пыли и грязи",
          en: "Removes dust and dirt",
          tr: "Toz ve kiri temizler"
        },
        {
          ru: "Не оставляет разводов",
          en: "Leaves no streaks",
          tr: "İz bırakmaz"
        }
      ]
    },
  
    // Lagis
    {
      title: {
        ru: "Lagis Стиральный порошок для ручной стирки",
        en: "Lagis Hand Washing Detergent Powder",
        tr: "Lagis El Yıkama Deterjan Tozu"
      },
      description: {
        ru: "Стиральный порошок с насыщенным ароматом и лёгкой стиркой.",
        en: "Laundry detergent with rich fragrance and easy washing.",
        tr: "Zengin kokusu ve kolay yıkama özelliği ile çamaşır deterjanı."
      },
      image: "/images/category_pictures/Lagis.png",
      color: "#00cdd1",
      brandName: "Lagis",
      category: {
        ru: "Стиральные порошки",
        en: "Laundry Detergents",
        tr: "Çamaşır Deterjanları"
      },
      features: [
        {
          ru: "Подходит для ручной стирки",
          en: "Suitable for hand washing",
          tr: "El yıkaması için uygundur"
        },
        {
          ru: "Лёгкое полоскание и отстирывание",
          en: "Easy rinsing and washing",
          tr: "Kolay durulama ve yıkama"
        },
        {
          ru: "Долговечный аромат",
          en: "Long-lasting fragrance",
          tr: "Kalıcı koku"
        },
        {
          ru: "Эффективен даже в холодной воде",
          en: "Effective even in cold water",
          tr: "Soğuk suda bile etkili"
        }
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
      filtered = filtered.filter(product => 
        product.category[locale as keyof Translation] === filterCategory ||
        product.category.ru === filterCategory
      );
    }
    
    setFilteredProducts(filtered);
    setActiveProductIndex(0);
  }, [filterBrand, filterCategory, products, locale]);

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
              <span className="text-[#fb4b06] text-xs md:text-sm font-medium uppercase tracking-wider">{locale === 'ru' ? 'Наша продукция' : locale === 'en' ? 'Our products' : 'Ürünlerimiz'}</span>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold mb-2 sm:mb-4 md:mb-6 leading-tight" style={{ fontFamily: '"Avenir Next Heavy", system-ui, sans-serif' }}>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#1E22AA] to-[#3538C8] dark:from-blue-500 dark:to-blue-400">{locale === 'ru' ? 'КАЧЕСТВО, СОЗДАННОЕ' : locale === 'en' ? 'QUALITY CREATED' : 'SİZİ DÜŞÜNEREK'}</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#fb4b06] to-[#E85D24] dark:from-orange-500 dark:to-orange-400">{locale === 'ru' ? ' С ЗАБОТОЙ О ВАС' : locale === 'en' ? ' WITH YOU IN MIND' : ' YARATILAN KALİTE'}</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              {locale === 'ru' ? 'Каждый продукт компании Altyn Gaya разработан с заботой о комфорте и здоровье наших клиентов. Мы используем только лучшие материалы и современные технологии производства.' : locale === 'en' ? 'Each Altyn Gaya product is designed with our customers comfort and health in mind. We use only the best materials and modern manufacturing technologies.' : locale === 'tr' ? 'Altyn Gaya şirketi müşterilerimizin komforu ve sağlığına dikkatle geliştirilen her ürün. En iyi malzemeler ve modern üretim teknolojilerini kullanıyoruz.' : ''}
            </p>
          </FadeInView>
        </div>
        
        {/* Brands section - horizontal scrolling on mobile */}
        <div className="my-2 sm:my-4 md:my-8">
          <FadeInView>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-3 sm:mb-6 md:mb-10">
              <span className="text-[#1E22AA]">{locale === 'ru' ? 'Наш' : locale === 'en' ? 'Our' : 'Bizim'}</span> <span className="text-[#fb4b06]">{locale === 'ru' ? 'Бренды' : locale === 'en' ? 'Brands' : 'Markalarımız'}</span>
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
                      {company.categories.length} {' '}
                      {/* {company.categories.length === 1 ? 'категория' : company.categories.length < 5 ? 'категории' : 'категорий'} */}
                      {locale === 'ru' 
                        ? company.categories.length === 1 
                          ? 'категория' 
                          : company.categories.length < 5 
                            ? 'категории' 
                            : 'категорий'
                        : locale === 'en' 
                          ? company.categories.length === 1 
                            ? 'category' 
                            : 'categories'
                          : locale === 'tr' 
                            ? company.categories.length === 1 
                              ? 'kategori' 
                              : 'kategoriler'
                            : ''
                      }
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
                    key={`${product.brandName}-${product.title[locale as keyof Translation] || product.title.ru}`}
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
                  <h3 className="text-xl font-bold text-gray-700 dark:text-gray-200 mb-2">{locale === 'ru' ? 'Продукты не найдены' : locale === 'en' ? 'Products not found' : 'Ürünler bulunamadı'}</h3>
                  <p className="text-gray-500 dark:text-gray-400">{locale === 'ru' ? 'Попробуйте изменить параметры фильтра' : locale === 'en' ? 'Try changing the filter parameters' : 'Filtre parametrelerini değiştirmeyi deneyin'}</p>
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