// import React from 'react';
// import { Check, ArrowRight, ArrowDown } from 'lucide-react';

// // Removed empty Props interface since no props are needed
// const HeroSection: React.FC = () => {
//   // Function to handle scroll on arrow click
//   const handleScrollDown = () => {
//     window.scrollTo({
//       top: window.innerHeight * 1.35,
//       behavior: 'smooth' // Smooth scrolling animation
//     });
//   };

//   return (
//     <section className="relative min-h-screen flex items-center overflow-hidden bg-black">
//       {/* Динамический фон с градиентом */}
//       <div 
//         className="absolute inset-0 bg-cover bg-center z-0"
//         style={{
//           backgroundImage: "url('https://i.ytimg.com/vi/gKauYJFDgwg/maxresdefault.jpg')",
//           filter: "brightness(0.9)",
//           transform: `translateY(0px)` // You might need to adjust this based on your scroll logic
//         }}
//       />
      
//       {/* Градиентный оверлей */}
//       <div className="absolute inset-0 z-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
      
//       {/* Фоновые круги */}
//       <div className="absolute inset-0 z-0 overflow-hidden">
//         <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-[#fb4b06] opacity-10 filter blur-3xl animate-pulse"></div>
//         <div className="absolute bottom-1/3 left-1/3 w-80 h-80 rounded-full bg-[#1E22AA] opacity-10 filter blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
//       </div>
      
//       <div className="container mx-auto px-4 py-12 z-10 relative">
//         <div className="max-w-2xl">
//           {/* Логотип или название компании */}
//           <div className="mb-16">
//             <div className="inline-block py-2 px-6 bg-white/5 backdrop-blur-md rounded-full mb-8">
//               <span className="text-white text-lg font-medium">ALTYN GAYA</span>
//               <span className="mx-3 text-[#fb4b06]">|</span>
//               <span className="text-gray-300 text-lg">С 2008 года</span>
//             </div>
//           </div>
          
//           <div className="space-y-10">
//             <div className="overflow-hidden">
//               <h1 
//                 className="text-5xl md:text-6xl xl:text-7xl font-bold leading-tight text-white mb-2 transform transition-all duration-1000 animate-in" 
//                 style={{ fontFamily: '"Avenir Next Heavy", sans-serif' }}
//               >
//                 <span className="inline-block">Чистота</span>
//                 <span className="inline-block ml-4">и</span>
//                 <span className="inline-block text-[#fb4b06] ml-4">комфорт</span>
//               </h1>
//               <h2 className="text-5xl md:text-6xl xl:text-7xl font-bold text-white mb-8 transform transition-all duration-1000 delay-300 animate-in"
//               style={{ fontFamily: '"Avenir Next Heavy", sans-serif' }}>
//                 ваша миссия!
//               </h2>
//             </div>
            
//             <div className="overflow-hidden">
//               <p className="text-white/90 text-xl mb-8 transform transition-all duration-1000 delay-500 translate-y-0 leading-relaxed">
//                 С 2008 года <strong className="text-[#fb4b06]">Altyn Gaya</strong> производит высококачественную туалетную бумагу, бумажные салфетки и моющие средства, которые делают каждый дом уютнее и безопаснее.
//               </p>
//             </div>
            
//             <div className="space-y-5 transition-all duration-1000 delay-700">
//               <div className="flex items-center group">
//                 <div className="w-10 h-10 bg-gradient-to-br from-[#fb4b06] to-[#f06937] rounded-lg flex items-center justify-center mr-4 shadow-lg shadow-[#fb4b06]/20 group-hover:shadow-[#fb4b06]/30 transition-all group-hover:scale-110">
//                   <Check className="text-white w-5 h-5" />
//                 </div>
//                 <span className="text-white text-lg group-hover:text-[#fb4b06] transition-colors">Экологичные материалы</span>
//               </div>
              
//               <div className="flex items-center group">
//                 <div className="w-10 h-10 bg-gradient-to-br from-[#fb4b06] to-[#f06937] rounded-lg flex items-center justify-center mr-4 shadow-lg shadow-[#fb4b06]/20 group-hover:shadow-[#fb4b06]/30 transition-all group-hover:scale-110">
//                   <Check className="text-white w-5 h-5" />
//                 </div>
//                 <span className="text-white text-lg group-hover:text-[#fb4b06] transition-colors">Современные технологии производства</span>
//               </div>
              
//               <div className="flex items-center group">
//                 <div className="w-10 h-10 bg-gradient-to-br from-[#fb4b06] to-[#f06937] rounded-lg flex items-center justify-center mr-4 shadow-lg shadow-[#fb4b06]/20 group-hover:shadow-[#fb4b06]/30 transition-all group-hover:scale-110">
//                   <Check className="text-white w-5 h-5" />
//                 </div>
//                 <span className="text-white text-lg group-hover:text-[#fb4b06] transition-colors">Надёжность и оперативность поставок</span>
//               </div>
//             </div>
            
//             <div className="mt-10 transform transition-all duration-1000 delay-1000">
//               <button className="relative overflow-hidden group bg-gradient-to-r from-[#fb4b06] to-[#E85D24] hover:from-[#E85D24] hover:to-[#fb4b06] text-white px-10 py-5 text-xl rounded-full font-semibold shadow-lg shadow-[#fb4b06]/20 hover:shadow-[#fb4b06]/40 transition-all">
//                 <span className="relative z-10 flex items-center gap-3">
//                   ЗАКАЗАТЬ ПРОДУКЦИЮ
//                   <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
//                 </span>
//               </button>
//             </div>
//           </div>
//         </div>
        
//         {/* Анимированная прокрутка вниз с добавленным обработчиком клика */}
//         <div 
//           className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:flex flex-col items-center cursor-pointer"
//           onClick={handleScrollDown}
//         >
//           <div className="text-white text-opacity-80 mb-2">Узнать больше</div>
//           <div className="animate-bounce p-2 bg-white/10 rounded-full backdrop-blur-md hover:bg-white/20 transition-colors">
//             <ArrowDown className="text-white w-5 h-5" />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;

//responsive just ru
import React from 'react';
import { Check, ArrowRight, ArrowDown } from 'lucide-react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

const HeroSection: React.FC = () => {

  const t = useTranslations('HeroSection');

  // Function to handle scroll on arrow click
  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight * 1.35,
      behavior: 'smooth' // Smooth scrolling animation
    });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-black">
      {/* Динамический фон с градиентом */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('/images/2.webp')",
          filter: "brightness(0.9)",
          transform: `translateY(0px)` // You might need to adjust this based on your scroll logic
        }}
      />
      
      {/* Градиентный оверлей */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
      
      {/* Фоновые круги */}
      {/* <div className="absolute inset-0 z-0 overflow-hidden"> */}
        {/* <div className="absolute top-1/4 right-1/4 w-32 md:w-64 h-32 md:h-64 rounded-full bg-[#fb4b06] opacity-10 filter blur-3xl animate-pulse"></div> */}
        {/* <div className="absolute bottom-1/3 left-1/3 w-40 md:w-80 h-40 md:h-80 rounded-full bg-[#1E22AA] opacity-10 filter blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div> */}
      {/* </div> */}
      
      <div className="container mx-auto px-4 py-6 md:py-10 z-10 relative">
        <div className="max-w-xl md:max-w-2xl">
          {/* Логотип или название компании */}
          <div className="mb-4 md:mb-8">
            <div className="inline-block py-1 px-4 md:py-2 md:px-6 bg-white/5 backdrop-blur-md rounded-full mb-6 md:mb-8">
              <span className="text-white text-sm md:text-lg font-medium">ALTYN GAYA</span>
              <span className="mx-2 md:mx-3 text-[#fb4b06]">|</span>
              <span className="text-gray-300 text-sm md:text-lg">{t('since')}</span>
            </div>
          </div>
          
          <div className="space-y-4 md:space-y-6">
            <div className="overflow-hidden">
              <h1 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-white mb-1 md:mb-2 transform transition-all duration-1000 animate-in" 
                style={{ fontFamily: '"Avenir Next Heavy", sans-serif' }}
              >
                <span className="inline-block">{t('title1')}</span>
                <span className="inline-block ml-2 md:ml-4">{t('title2')}</span>
                <span className="inline-block text-[#fb4b06] ml-2 md:ml-4">{t('title3')}</span>
              </h1>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 md:mb-8 transform transition-all duration-1000 delay-300 animate-in"
              style={{ fontFamily: '"Avenir Next Heavy", sans-serif' }}>
                {t('subtitle')}
              </h2>
            </div>
            
            <div className="overflow-hidden">
              <p className="text-white/90 text-base sm:text-lg md:text-xl mb-4 md:mb-6 transform transition-all duration-1000 delay-500 translate-y-0 leading-relaxed">
                {t('description')}
              </p>
            </div>
            
            <div className="space-y-3 md:space-y-5 transition-all duration-1000 delay-700">
              <div className="flex items-center group">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-[#fb4b06] to-[#f06937] rounded-xl flex items-center justify-center mr-3 md:mr-4 shadow-lg shadow-[#fb4b06]/20 group-hover:shadow-[#fb4b06]/30 transition-all group-hover:scale-110">
                  <Check className="text-white w-4 h-4 md:w-5 md:h-5" />
                </div>
                <span className="text-white text-base md:text-lg group-hover:text-[#fb4b06] transition-colors">{t('feature1')}</span>
              </div>
              
              <div className="flex items-center group">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-[#fb4b06] to-[#f06937] rounded-xl flex items-center justify-center mr-3 md:mr-4 shadow-lg shadow-[#fb4b06]/20 group-hover:shadow-[#fb4b06]/30 transition-all group-hover:scale-110">
                  <Check className="text-white w-4 h-4 md:w-5 md:h-5" />
                </div>
                <span className="text-white text-base md:text-lg group-hover:text-[#fb4b06] transition-colors">{t('feature2')}</span>
              </div>
              
              <div className="flex items-center group">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-[#fb4b06] to-[#f06937] rounded-xl flex items-center justify-center mr-3 md:mr-4 shadow-lg shadow-[#fb4b06]/20 group-hover:shadow-[#fb4b06]/30 transition-all group-hover:scale-110">
                  <Check className="text-white w-4 h-4 md:w-5 md:h-5" />
                </div>
                <span className="text-white text-base md:text-lg group-hover:text-[#fb4b06] transition-colors">{t('feature3')}</span>
              </div>
            </div>
            
            <div className="mt-6 md:mt-10 transform transition-all duration-1000 delay-1000">
              <Link href="/shop">
              <button className="relative overflow-hidden group bg-gradient-to-r from-[#fb4b06] to-[#E85D24] hover:from-[#E85D24] hover:to-[#fb4b06] text-white px-4 md:px-8 py-3 md:py-5 text-base md:text-lg rounded-full font-semibold shadow-lg shadow-[#fb4b06]/20 hover:shadow-[#fb4b06]/40 transition-all">
                <span className="relative z-10 flex items-center gap-2 md:gap-3">
                  {t('cta')}
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:translate-x-1" />
                </span>
              </button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Анимированная прокрутка вниз с добавленным обработчиком клика */}
        <div 
          className="absolute -bottom-10 md:bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer"
          onClick={handleScrollDown}
        >
          <div className="text-white text-opacity-80 text-sm md:text-base mb-1 md:mb-2">{t('scroll')}</div>
          <div className="animate-bounce p-1 md:p-2 bg-white/10 rounded-full backdrop-blur-md hover:bg-white/20 transition-colors">
            <ArrowDown className="text-white w-4 h-4 md:w-5 md:h-5" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;