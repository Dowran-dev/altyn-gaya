// 'use client';
// import React from 'react';
// import Image from 'next/image';
// import { useState, useEffect, useRef } from "react";
// import { ArrowRight } from 'lucide-react';

// // Component for smooth element appearance
// const FadeInView = ({ children, delay = 0, className = "" }) => {
//     const [isVisible, setIsVisible] = useState(false);
//     const domRef = useRef(null);
  
//     useEffect(() => {
//       const observer = new IntersectionObserver(entries => {
//         if (entries[0].isIntersecting) {
//           setIsVisible(true);
//           observer.unobserve(domRef.current);
//         }
//       });
      
//       observer.observe(domRef.current);
//       return () => observer.disconnect();
//     }, []);
  
//     return (
//       <div
//         ref={domRef}
//         className={`${className} transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
//         style={{ transitionDelay: `${delay}ms` }}
//       >
//         {children}
//       </div>
//     );
//   };

// const AboutCompanySection = () => {
//   return (
//     <section className="relative py-24 min-h-screen flex items-center">
//       {/* Wave separator between sections */}
//       <div className="absolute top-0 left-0 w-full h-20 overflow-hidden">
//         <svg 
//           viewBox="0 0 1200 120" 
//           preserveAspectRatio="none" 
//           className="absolute bottom-0 left-0 w-full h-full"
//           fill="#000000"
//         >
//           <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0H1000C934.18,2.37,870.42,13.91,821.39,56.44Z"></path>
//         </svg>
//       </div>
      
//       {/* Background image with gradient overlay */}
//       <div className="absolute inset-0">
//         <div className="absolute inset-0 bg-gradient-to-br from-[#1E22AA] to-[#1E22AA]/90 opacity-95"></div>
//         <div 
//           className="absolute inset-0" 
//           style={{ 
//             backgroundImage: "url('/api/placeholder/1200/800')", 
//             backgroundSize: "cover", 
//             mixBlendMode: "overlay", 
//             opacity: 0.1 
//           }}
//         ></div>
//       </div>
      
//       {/* Background decorative elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-[#fb4b06]/10 blur-3xl"></div>
//         <div className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-[#fb4b06]/10 blur-3xl"></div>
//       </div>
      
//       <div className="container mx-auto px-4 relative z-10">
//         <div className="grid md:grid-cols-2 gap-16 items-center">
//           <div className="space-y-12">
//             <FadeInView>
//               <div className="inline-block mb-4 bg-[#fb4b06]/10 backdrop-blur-sm rounded-full px-6 py-2">
//                 <span className="text-white text-sm font-medium uppercase tracking-wider">С 2008 года на рынке</span>
//               </div>
//               <h2 
//                 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight" 
//                 style={{ fontFamily: '"Avenir Next Heavy", sans-serif' }}
//               >
//                 О КОМПАНИИ <span className="text-[#fb4b06]">ALTYN GAYA</span>
//               </h2>
//               <p className="text-xl text-white/90 leading-relaxed">
//                 Лидер в производстве бумажной продукции и бытовой химии с 2008 года. 
//                 Мы создаём продукты, способные удовлетворить самые высокие стандарты качества и экологичности.
//               </p>
//             </FadeInView>
            
//             <div className="space-y-8">
//               <FadeInView delay={300} className="group">
//                 <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all duration-300 border border-white/10">
//                   <div className="flex items-start">
//                     <div className="w-16 h-16 bg-gradient-to-br from-[#fb4b06] to-[#f06937] rounded-xl flex items-center justify-center shrink-0 mr-6 shadow-lg group-hover:scale-105 transition-all">
//                       <span className="text-white text-2xl font-bold">16+</span>
//                     </div>
//                     <div>
//                       <h4 className="text-xl text-white font-bold mb-2">Наша история</h4>
//                       <p className="text-white/80 leading-relaxed">
//                         Более 16 лет успешной работы на рынке и постоянного совершенствования производственных процессов
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </FadeInView>
              
//               <FadeInView delay={500} className="group">
//                 <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all duration-300 border border-white/10">
//                   <div className="flex items-start">
//                     <div className="w-16 h-16 bg-gradient-to-br from-[#fb4b06] to-[#f06937] rounded-xl flex items-center justify-center shrink-0 mr-6 shadow-lg group-hover:scale-105 transition-all">
//                       <span className="text-white text-2xl font-bold">99%</span>
//                     </div>
//                     <div>
//                       <h4 className="text-xl text-white font-bold mb-2">Наши ценности</h4>
//                       <p className="text-white/80 leading-relaxed">
//                         Качество, инновации и экологичность во всех аспектах деятельности компании
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </FadeInView>
              
//               <FadeInView delay={700} className="group">
//                 <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all duration-300 border border-white/10">
//                   <div className="flex items-start">
//                     <div className="w-16 h-16 bg-gradient-to-br from-[#fb4b06] to-[#f06937] rounded-xl flex items-center justify-center shrink-0 mr-6 shadow-lg group-hover:scale-105 transition-all">
//                       <span className="text-white text-2xl font-bold">24/7</span>
//                     </div>
//                     <div>
//                       <h4 className="text-xl text-white font-bold mb-2">Наш подход</h4>
//                       <p className="text-white/80 leading-relaxed">
//                         Современные технологии и строгий контроль качества на каждом этапе производства
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </FadeInView>
//             </div>
            
//             <FadeInView delay={900}>
//               <button className="group bg-gradient-to-r from-[#fb4b06] to-[#E85D24] hover:from-white hover:to-white rounded-full transition-all duration-500 text-white hover:text-[#fb4b06] px-10 py-5 text-xl font-bold flex items-center gap-3 shadow-lg">
//                 Узнать больше
//                 <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
//               </button>
//             </FadeInView>
//           </div>
          
//           <FadeInView delay={300}>
//             <div className="relative">
//               <div className="absolute -inset-4 bg-gradient-to-r from-[#fb4b06] to-[#E85D24] rounded-2xl blur-xl opacity-20 animate-pulse"></div>
//               <div className="relative h-full md:h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl border border-white/20">
//                 <Image
//                   src="/api/placeholder/600/500"
//                   alt="Производство Altyn Gaya"
//                   width={600}
//                   height={500}
//                   className="w-full h-full object-cover brightness-90"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-[#1E22AA]/50 to-transparent"></div>
                
//                 {/* Graphic overlay */}
//                 <div className="absolute inset-0 bg-[url('/api/placeholder/400/400')] bg-repeat opacity-5"></div>
                
//                 {/* Statistics on photo */}
//                 <div className="absolute bottom-0 left-0 right-0 p-8">
//                   <div className="flex justify-between items-center">
//                     <div className="text-center">
//                       <div className="text-[#fb4b06] text-4xl font-bold mb-1">16+</div>
//                       <div className="text-white text-sm">Лет опыта</div>
//                     </div>
//                     <div className="text-center">
//                       <div className="text-[#fb4b06] text-4xl font-bold mb-1">50+</div>
//                       <div className="text-white text-sm">Сотрудников</div>
//                     </div>
//                     <div className="text-center">
//                       <div className="text-[#fb4b06] text-4xl font-bold mb-1">95%</div>
//                       <div className="text-white text-sm">Довольных клиентов</div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </FadeInView>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutCompanySection;



import React from 'react';
import { useState, useEffect, useRef } from "react";
import Image from 'next/image';

// Component for smooth element appearance
const FadeInView = ({ children, delay = 0, className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        observer.unobserve(domRef.current);
      }
    });
    
    observer.observe(domRef.current);
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

const AboutCompanySection = () => {
  return (
    <section className="bg-[#1E22AA] text-white py-16 min-h-screen flex items-center relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-[#fb4b06]/10 blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-[#fb4b06]/10 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-16 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-8">
            <FadeInView>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight" style={{ fontFamily: '"Avenir Next Heavy", sans-serif' }}>
                О КОМПАНИИ <span className="text-[#fb4b06]">ALTYN GAYA</span>
              </h2>
              <div className="bg-[#fb4b06]/10 rounded-full px-6 py-2 inline-block mb-6">
                <span className="text-white text-sm font-medium">С 2008 ГОДА НА РЫНКЕ</span>
              </div>
              <p className="text-lg text-white/90 leading-relaxed max-w-lg mb-8">
                Лидер в производстве бумажной продукции и бытовой химии с 2008 года. 
                Мы создаём продукты, способные удовлетворить самые высокие стандарты качества и экологичности.
              </p>
            </FadeInView>
            
            <div className="space-y-6">
              <FadeInView delay={200} className="group">
                <div className="p-6 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/10">
                  <div className="flex items-start">
                    <div className="w-16 h-16 bg-[#fb4b06] rounded-lg flex items-center justify-center shrink-0 mr-6 group-hover:scale-105 transition-all">
                      <span className="text-white text-2xl font-bold">16+</span>
                    </div>
                    <div>
                      <h4 className="text-xl text-white font-bold mb-2">Наша история</h4>
                      <p className="text-white/80">
                        Более 16 лет успешной работы на рынке и постоянного совершенствования производственных процессов
                      </p>
                    </div>
                  </div>
                </div>
              </FadeInView>
              
              <FadeInView delay={400} className="group">
                <div className="p-6 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/10">
                  <div className="flex items-start">
                    <div className="w-16 h-16 bg-[#fb4b06] rounded-lg flex items-center justify-center shrink-0 mr-6 group-hover:scale-105 transition-all">
                      <span className="text-white text-2xl font-bold">99%</span>
                    </div>
                    <div>
                      <h4 className="text-xl text-white font-bold mb-2">Наши ценности</h4>
                      <p className="text-white/80">
                        Качество, инновации и экологичность во всех аспектах деятельности компании
                      </p>
                    </div>
                  </div>
                </div>
              </FadeInView>
              
              <FadeInView delay={600} className="group">
                <div className="p-6 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/10">
                  <div className="flex items-start">
                    <div className="w-16 h-16 bg-[#fb4b06] rounded-lg flex items-center justify-center shrink-0 mr-6 group-hover:scale-105 transition-all">
                      <span className="text-white text-2xl font-bold">24/7</span>
                    </div>
                    <div>
                      <h4 className="text-xl text-white font-bold mb-2">Наш подход</h4>
                      <p className="text-white/80">
                        Современные технологии и строгий контроль качества на каждом этапе производства
                      </p>
                    </div>
                  </div>
                </div>
              </FadeInView>
            </div>
            
            <FadeInView delay={800}>
              <button className="bg-[#fb4b06] hover:bg-[#f06937] rounded-full text-white px-8 py-4 text-lg font-semibold mt-6 flex items-center gap-2">
                Узнать больше
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="ml-2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </FadeInView>
          </div>
          
          <FadeInView delay={300}>
            <div className="relative">
              <div className="absolute -inset-4 bg-[#fb4b06] rounded-lg blur-xl opacity-20 animate-pulse"></div>
              <div className="relative h-full md:h-96 w-full rounded-lg overflow-hidden shadow-lg border border-white/20">
                <Image
                  src="https://i.ytimg.com/vi/gKauYJFDgwg/maxresdefault.jpg"
                  alt="Производство Altyn Gaya"
                  width={600}
                  height={500}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E22AA]/80 to-transparent"></div>
                
                {/* Statistics on photo */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex justify-between items-center">
                    <div className="text-center">
                      <div className="text-[#fb4b06] text-3xl font-bold mb-1">16+</div>
                      <div className="text-white text-sm">Лет опыта</div>
                    </div>
                    <div className="text-center">
                      <div className="text-[#fb4b06] text-3xl font-bold mb-1">50+</div>
                      <div className="text-white text-sm">Сотрудников</div>
                    </div>
                    <div className="text-center">
                      <div className="text-[#fb4b06] text-3xl font-bold mb-1">95%</div>
                      <div className="text-white text-sm">Довольных клиентов</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeInView>
        </div>
      </div>
    </section>
  );
};

export default AboutCompanySection;