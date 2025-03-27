// import React from 'react';
// import { useState, useEffect, useRef } from "react";
// import Image from 'next/image';

// // Component for smooth element appearance
// const FadeInView = ({ children, delay = 0, className = "" }) => {
//   const [isVisible, setIsVisible] = useState(false);
//   const domRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(entries => {
//       if (entries[0].isIntersecting) {
//         setIsVisible(true);
//         observer.unobserve(domRef.current);
//       }
//     });

//     observer.observe(domRef.current);
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

// const AboutCompanySection = () => {
//   return (
//     <section className="bg-[#1E22AA] text-white py-16 min-h-screen flex items-center relative overflow-hidden">
//       {/* Background decorative elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-[#fb4b06]/10 blur-3xl"></div>
//         <div className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-[#fb4b06]/10 blur-3xl"></div>
//       </div>

//       <div className="container mx-auto px-16 relative z-10">
//         <div className="grid md:grid-cols-2 gap-8 items-center">
//           <div className="space-y-8">
//             <FadeInView>
//               <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight" style={{ fontFamily: '"Avenir Next Heavy", sans-serif' }}>
//                 О КОМПАНИИ <span className="text-[#fb4b06]">ALTYN GAYA</span>
//               </h2>
//               <div className="bg-[#fb4b06]/10 rounded-full px-6 py-2 inline-block mb-6">
//                 <span className="text-white text-sm font-medium">С 2008 ГОДА НА РЫНКЕ</span>
//               </div>
//               <p className="text-lg text-white/90 leading-relaxed max-w-lg mb-8">
//                 Лидер в производстве бумажной продукции и бытовой химии с 2008 года.
//                 Мы создаём продукты, способные удовлетворить самые высокие стандарты качества и экологичности.
//               </p>
//             </FadeInView>

//             <div className="space-y-6">
//               <FadeInView delay={200} className="group">
//                 <div className="p-6 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/10">
//                   <div className="flex items-start">
//                     <div className="w-16 h-16 bg-[#fb4b06] rounded-lg flex items-center justify-center shrink-0 mr-6 group-hover:scale-105 transition-all">
//                       <span className="text-white text-2xl font-bold">16+</span>
//                     </div>
//                     <div>
//                       <h4 className="text-xl text-white font-bold mb-2">Наша история</h4>
//                       <p className="text-white/80">
//                         Более 16 лет успешной работы на рынке и постоянного совершенствования производственных процессов
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </FadeInView>

//               <FadeInView delay={400} className="group">
//                 <div className="p-6 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/10">
//                   <div className="flex items-start">
//                     <div className="w-16 h-16 bg-[#fb4b06] rounded-lg flex items-center justify-center shrink-0 mr-6 group-hover:scale-105 transition-all">
//                       <span className="text-white text-2xl font-bold">99%</span>
//                     </div>
//                     <div>
//                       <h4 className="text-xl text-white font-bold mb-2">Наши ценности</h4>
//                       <p className="text-white/80">
//                         Качество, инновации и экологичность во всех аспектах деятельности компании
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </FadeInView>

//               <FadeInView delay={600} className="group">
//                 <div className="p-6 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/10">
//                   <div className="flex items-start">
//                     <div className="w-16 h-16 bg-[#fb4b06] rounded-lg flex items-center justify-center shrink-0 mr-6 group-hover:scale-105 transition-all">
//                       <span className="text-white text-2xl font-bold">24/7</span>
//                     </div>
//                     <div>
//                       <h4 className="text-xl text-white font-bold mb-2">Наш подход</h4>
//                       <p className="text-white/80">
//                         Современные технологии и строгий контроль качества на каждом этапе производства
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </FadeInView>
//             </div>

//             <FadeInView delay={800}>
//               <button className="bg-[#fb4b06] hover:bg-[#f06937] rounded-full text-white px-8 py-4 text-lg font-semibold mt-6 flex items-center gap-2">
//                 Узнать больше
//                 <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="ml-2">
//                   <path d="M5 12h14M12 5l7 7-7 7" />
//                 </svg>
//               </button>
//             </FadeInView>
//           </div>

//           <FadeInView delay={300}>
//             <div className="relative">
//               <div className="absolute -inset-4 bg-[#fb4b06] rounded-lg blur-xl opacity-20 animate-pulse"></div>
//               <div className="relative h-full md:h-96 w-full rounded-lg overflow-hidden shadow-lg border border-white/20">
//                 <Image
//                   src="https://i.ytimg.com/vi/gKauYJFDgwg/maxresdefault.jpg"
//                   alt="Производство Altyn Gaya"
//                   width={600}
//                   height={500}
//                   className="w-full h-full object-cover"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-[#1E22AA]/80 to-transparent"></div>

//                 {/* Statistics on photo */}
//                 <div className="absolute bottom-0 left-0 right-0 p-6">
//                   <div className="flex justify-between items-center">
//                     <div className="text-center">
//                       <div className="text-[#fb4b06] text-3xl font-bold mb-1">16+</div>
//                       <div className="text-white text-sm">Лет опыта</div>
//                     </div>
//                     <div className="text-center">
//                       <div className="text-[#fb4b06] text-3xl font-bold mb-1">50+</div>
//                       <div className="text-white text-sm">Сотрудников</div>
//                     </div>
//                     <div className="text-center">
//                       <div className="text-[#fb4b06] text-3xl font-bold mb-1">95%</div>
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

// import React from "react";
// import { useState, useEffect, useRef } from "react";
// import Image from "next/image";

// // Component for smooth element appearance
// // const FadeInView = ({ children, delay = 0, className = "" }) => {
// //   const [isVisible, setIsVisible] = useState(false);
// //   const domRef = useRef(null);

// //   useEffect(() => {
// //     const observer = new IntersectionObserver((entries) => {
// //       if (entries[0].isIntersecting) {
// //         setIsVisible(true);
// //         if (domRef.current) {
// //           observer.unobserve(domRef.current);
// //         }
// //       }
// //     });

// //     if (domRef.current) {
// //       observer.observe(domRef.current);
// //     }

// //     return () => observer.disconnect();
// //   }, []);

// //   return (
// //     <div
// //       ref={domRef}
// //       className={`${className} transition-all duration-1000 ease-out ${
// //         isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
// //       }`}
// //       style={{ transitionDelay: `${delay}ms` }}
// //     >
// //       {children}
// //     </div>
// //   );
// // };

// const AboutCompanySection = () => {
//   return (
//     <section className="bg-[#1E22AA] text-white py-16 min-h-screen flex items-center relative overflow-hidden">
//       {/* Background decorative elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-[#fb4b06]/10 blur-3xl"></div>
//         <div className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-[#fb4b06]/10 blur-3xl"></div>
//       </div>

//       <div className="container mx-auto px-16 relative z-10">
//         <div className="grid md:grid-cols-2 gap-8 items-center">
//           <div className="space-y-8">
//             {/* <FadeInView> */}
//             <h2
//               className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight"
//               style={{ fontFamily: '"Avenir Next Heavy", sans-serif' }}
//             >
//               О КОМПАНИИ <span className="text-[#fb4b06]">ALTYN GAYA</span>
//             </h2>
//             <div className="bg-[#fb4b06]/10 rounded-full px-6 py-2 inline-block mb-6">
//               <span className="text-white text-sm font-medium">
//                 С 2008 ГОДА НА РЫНКЕ
//               </span>
//             </div>
//             <p className="text-lg text-white/90 leading-relaxed max-w-lg mb-8">
//               Лидер в производстве бумажной продукции и бытовой химии с 2008
//               года. Мы создаём продукты, способные удовлетворить самые высокие
//               стандарты качества и экологичности.
//             </p>
//             {/* </FadeInView> */}

//             <div className="space-y-6">
//               {/* <FadeInView delay={200} className="group"> */}
//               <div className="p-6 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/10">
//                 <div className="flex items-start">
//                   <div className="w-16 h-16 bg-[#fb4b06] rounded-lg flex items-center justify-center shrink-0 mr-6 group-hover:scale-105 transition-all">
//                     <span className="text-white text-2xl font-bold">16+</span>
//                   </div>
//                   <div>
//                     <h4 className="text-xl text-white font-bold mb-2">
//                       Наша история
//                     </h4>
//                     <p className="text-white/80">
//                       Более 16 лет успешной работы на рынке и постоянного
//                       совершенствования производственных процессов
//                     </p>
//                   </div>
//                 </div>
//               </div>
//               {/* </FadeInView> */}

//               {/* <FadeInView delay={400} className="group"> */}
//               <div className="p-6 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/10">
//                 <div className="flex items-start">
//                   <div className="w-16 h-16 bg-[#fb4b06] rounded-lg flex items-center justify-center shrink-0 mr-6 group-hover:scale-105 transition-all">
//                     <span className="text-white text-2xl font-bold">99%</span>
//                   </div>
//                   <div>
//                     <h4 className="text-xl text-white font-bold mb-2">
//                       Наши ценности
//                     </h4>
//                     <p className="text-white/80">
//                       Качество, инновации и экологичность во всех аспектах
//                       деятельности компании
//                     </p>
//                   </div>
//                 </div>
//               </div>
//               {/* </FadeInView> */}

//               {/* <FadeInView delay={600} className="group"> */}
//               <div className="p-6 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/10">
//                 <div className="flex items-start">
//                   <div className="w-16 h-16 bg-[#fb4b06] rounded-lg flex items-center justify-center shrink-0 mr-6 group-hover:scale-105 transition-all">
//                     <span className="text-white text-2xl font-bold">24/7</span>
//                   </div>
//                   <div>
//                     <h4 className="text-xl text-white font-bold mb-2">
//                       Наш подход
//                     </h4>
//                     <p className="text-white/80">
//                       Современные технологии и строгий контроль качества на
//                       каждом этапе производства
//                     </p>
//                   </div>
//                 </div>
//               </div>
//               {/* </FadeInView> */}
//             </div>

//             {/* <FadeInView delay={800}> */}
//             <button className="bg-[#fb4b06] hover:bg-[#f06937] rounded-full text-white px-8 py-4 text-lg font-semibold mt-6 flex items-center gap-2">
//               Узнать больше
//               <svg
//                 width="20"
//                 height="20"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 className="ml-2"
//               >
//                 <path d="M5 12h14M12 5l7 7-7 7" />
//               </svg>
//             </button>
//             {/* </FadeInView> */}
//           </div>

//           {/* <FadeInView delay={300}> */}
//           <div className="relative">
//             <div className="absolute -inset-4 bg-[#fb4b06] rounded-lg blur-xl opacity-20 animate-pulse"></div>
//             <div className="relative h-full md:h-96 w-full rounded-lg overflow-hidden shadow-lg border border-white/20">
//               <Image
//                 src="/api/placeholder/600/500"
//                 alt="Производство Altyn Gaya"
//                 width={600}
//                 height={500}
//                 className="w-full h-full object-cover"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-[#1E22AA]/80 to-transparent"></div>

//               {/* Statistics on photo */}
//               <div className="absolute bottom-0 left-0 right-0 p-6">
//                 <div className="flex justify-between items-center">
//                   <div className="text-center">
//                     <div className="text-[#fb4b06] text-3xl font-bold mb-1">
//                       16+
//                     </div>
//                     <div className="text-white text-sm">Лет опыта</div>
//                   </div>
//                   <div className="text-center">
//                     <div className="text-[#fb4b06] text-3xl font-bold mb-1">
//                       50+
//                     </div>
//                     <div className="text-white text-sm">Сотрудников</div>
//                   </div>
//                   <div className="text-center">
//                     <div className="text-[#fb4b06] text-3xl font-bold mb-1">
//                       95%
//                     </div>
//                     <div className="text-white text-sm">Довольных клиентов</div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           {/* </FadeInView> */}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutCompanySection;

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const AboutCompanySection = () => {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section className="bg-[#1E22AA] text-white py-12 md:py-16 min-h-screen flex items-center relative overflow-hidden">
      {/* Enhanced background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 0.8 }}
          transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
          className="absolute -top-20 -right-20 w-64 md:w-96 h-64 md:h-96 rounded-full bg-[#fb4b06]/10 blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 0.8 }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 2,
          }}
          className="absolute -bottom-20 -left-20 w-64 md:w-96 h-64 md:h-96 rounded-full bg-[#fb4b06]/10 blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0.3 }}
          animate={{ opacity: 0.6 }}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1,
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 md:w-96 h-64 md:h-96 rounded-full bg-[#fb4b06]/5 blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 md:px-16 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center"
        >
          <motion.div
            variants={staggerChildren}
            className="space-y-6 md:space-y-8"
          >
            <motion.div variants={fadeInUp}>
              <h2
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight"
                style={{ fontFamily: '"Avenir Next Heavy", sans-serif' }}
              >
                О КОМПАНИИ <span className="text-[#fb4b06]">ALTYN GAYA</span>
              </h2>
              <div className="bg-[#fb4b06]/10 rounded-full px-4 md:px-6 py-2 inline-block mb-4 md:mb-6">
                <span className="text-white text-xs md:text-sm font-medium">
                  С 2008 ГОДА НА РЫНКЕ
                </span>
              </div>
              <p className="text-base md:text-lg text-white/90 leading-relaxed max-w-lg mb-6 md:mb-8">
                Лидер в производстве бумажной продукции и бытовой химии с 2008
                года. Мы создаём продукты, способные удовлетворить самые высокие
                стандарты качества и экологичности.
              </p>
            </motion.div>

            <motion.div
              variants={staggerChildren}
              className="space-y-4 md:space-y-6"
            >
              <motion.div
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
                className="p-4 md:p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/10"
              >
                <div className="flex items-start">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-12 h-12 md:w-16 md:h-16 bg-[#fb4b06] rounded-xl flex items-center justify-center shrink-0 mr-4 md:mr-6 transition-all"
                  >
                    <span className="text-white text-xl md:text-2xl font-bold px-2 md:px-4">
                      16+
                    </span>
                  </motion.div>
                  <div>
                    <h4 className="text-lg md:text-xl text-white font-bold mb-1 md:mb-2">
                      Наша история
                    </h4>
                    <p className="text-sm md:text-base text-white/80">
                      Более 16 лет успешной работы на рынке и постоянного
                      совершенствования производственных процессов
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
                className="p-4 md:p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/10"
              >
                <div className="flex items-start">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-12 h-12 md:w-16 md:h-16 bg-[#fb4b06] rounded-xl flex items-center justify-center shrink-0 mr-4 md:mr-6 transition-all"
                  >
                    <span className="text-white text-xl md:text-2xl font-bold px-2 md:px-4">
                      99%
                    </span>
                  </motion.div>
                  <div>
                    <h4 className="text-lg md:text-xl text-white font-bold mb-1 md:mb-2">
                      Наши ценности
                    </h4>
                    <p className="text-sm md:text-base text-white/80">
                      Качество, инновации и экологичность во всех аспектах
                      деятельности компании
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
                className="p-4 md:p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 border border-white/10"
              >
                <div className="flex items-start">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-12 h-12 md:w-16 md:h-16 bg-[#fb4b06] rounded-xl flex items-center justify-center shrink-0 mr-4 md:mr-6 transition-all"
                  >
                    <span className="text-white text-xl md:text-2xl font-bold px-2 md:px-4">
                      24/7
                    </span>
                  </motion.div>
                  <div>
                    <h4 className="text-lg md:text-xl text-white font-bold mb-1 md:mb-2">
                      Наш подход
                    </h4>
                    <p className="text-sm md:text-base text-white/80">
                      Современные технологии и строгий контроль качества на
                      каждом этапе производства
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="bg-[#fb4b06] hover:bg-[#f06937] rounded-full text-white px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold mt-4 md:mt-6 flex items-center gap-2"
              >
                Узнать больше
                <motion.svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="ml-2"
                  initial={{ x: 0 }}
                  whileHover={{ x: 3 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </motion.svg>
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div variants={fadeInUp} className="relative mt-8 md:mt-0">
            <motion.div
              animate={{
                opacity: [0.2, 0.4, 0.2],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 4,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="absolute -inset-4 bg-[#fb4b06] rounded-xl blur-xl opacity-20"
            />
            <div className="relative h-80 sm:h-80 md:h-96 w-full rounded-xl overflow-hidden shadow-lg border border-white/20">
              <Image
                src="/images/3D_model.jpg"
                alt="Производство Altyn Gaya"
                width={600}
                height={500}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E22AA]/80 to-transparent"></div>

              {/* Statistics on photo */}
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                <div className="flex justify-between items-center">
                  <motion.div whileHover={{ y: -5 }} className="text-center">
                    <div className="text-[#fb4b06] text-2xl md:text-3xl font-bold mb-1">
                      16+
                    </div>
                    <div className="text-white text-xs md:text-sm">
                      Лет опыта
                    </div>
                  </motion.div>
                  <motion.div whileHover={{ y: -5 }} className="text-center">
                    <div className="text-[#fb4b06] text-2xl md:text-3xl font-bold mb-1">
                      50+
                    </div>
                    <div className="text-white text-xs md:text-sm">
                      Сотрудников
                    </div>
                  </motion.div>
                  <motion.div whileHover={{ y: -5 }} className="text-center">
                    <div className="text-[#fb4b06] text-2xl md:text-3xl font-bold mb-1">
                      95%
                    </div>
                    <div className="text-white text-xs md:text-sm">
                      Довольных клиентов
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutCompanySection;
