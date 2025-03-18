// {/* Process section */}
// <section className="py-24 bg-white relative overflow-hidden">
// {/* Background decoration */}
// <div className="absolute inset-0 overflow-hidden">
//   <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-radial from-[#fb4b06]/5 to-transparent rounded-full"></div>
//   <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-radial from-[#1E22AA]/5 to-transparent rounded-full"></div>
// </div>

// <div className="container mx-auto px-4 relative z-10">
//   <div className="text-center max-w-3xl mx-auto mb-20">
//     <FadeInView>
//       <div className="inline-block mb-4 bg-[#fb4b06]/10 rounded-full px-6 py-2">
//         <span className="text-[#fb4b06] text-sm font-medium uppercase tracking-wider">Как мы работаем</span>
//       </div>
//       <h2 className="text-5xl font-bold text-[#1E22AA] mb-6 leading-tight" style={{ fontFamily: '"Avenir Next Heavy", sans-serif' }}>
//         ПРОИЗВОДСТВЕННЫЙ <span className="text-[#fb4b06]">ПРОЦЕСС</span>
//       </h2>
//       <p className="text-xl text-gray-600 leading-relaxed">
//         От закупки сырья до доставки готовой продукции - каждый этап производства контролируется нашими экспертами для обеспечения наивысшего качества.
//       </p>
//     </FadeInView>
//   </div>
  
//   <div className="relative">
//     {/* Process timeline */}
//     <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gray-200 transform -translate-x-1/2"></div>
    
//     <div className="space-y-24 relative">
//       {/* Step 1 */}
//       <FadeInView className="relative">
//         <div className="absolute left-1/2 top-0 w-12 h-12 bg-[#fb4b06] rounded-full transform -translate-x-1/2 flex items-center justify-center text-xl font-bold text-white shadow-lg z-20">1</div>
        
//         <div className="grid md:grid-cols-2 gap-16 items-center">
//           <div className="md:text-right md:pr-16">
//             <h3 className="text-2xl font-bold text-[#1E22AA] mb-4">Закупка сырья</h3>
//             <p className="text-gray-600 leading-relaxed mb-6">
//               Мы используем только высококачественное сырье от проверенных поставщиков, которое проходит строгий контроль перед поступлением в производство.
//             </p>
//             <ul className="space-y-2 text-gray-600">
//               <li className="flex items-center md:justify-end">
//                 <span>Экологически чистые материалы</span>
//                 <div className="w-6 h-6 rounded-full bg-[#fb4b06]/10 flex items-center justify-center ml-2">
//                   <Check className="w-3 h-3 text-[#fb4b06]" />
//                 </div>
//               </li>
//               <li className="flex items-center md:justify-end">
//                 <span>Сертифицированные поставщики</span>
//                 <div className="w-6 h-6 rounded-full bg-[#fb4b06]/10 flex items-center justify-center ml-2">
//                   <Check className="w-3 h-3 text-[#fb4b06]" />
//                 </div>
//               </li>
//             </ul>
//           </div>
          
//           <div className="rounded-xl overflow-hidden shadow-xl">
//             <Image
//               src="/api/placeholder/600/400"
//               alt="Закупка сырья"
//               width={600}
//               height={400}
//               className="w-full h-full object-cover"
//             />
//           </div>
//         </div>
//       </FadeInView>
      
//       {/* Step 2 */}
//       <FadeInView className="relative">
//         <div className="absolute left-1/2 top-0 w-12 h-12 bg-[#fb4b06] rounded-full transform -translate-x-1/2 flex items-center justify-center text-xl font-bold text-white shadow-lg z-20">2</div>
        
//         <div className="grid md:grid-cols-2 gap-16 items-center">
//           <div className="md:order-2 md:pl-16">
//             <h3 className="text-2xl font-bold text-[#1E22AA] mb-4">Производство</h3>
//             <p className="text-gray-600 leading-relaxed mb-6">
//               Современное оборудование и автоматизированные линии производства позволяют нам создавать продукцию высочайшего качества с минимальным воздействием на окружающую среду.
//             </p>
//             <ul className="space-y-2 text-gray-600">
//               <li className="flex items-center">
//                 <div className="w-6 h-6 rounded-full bg-[#fb4b06]/10 flex items-center justify-center mr-2">
//                   <Check className="w-3 h-3 text-[#fb4b06]" />
//                 </div>
//                 <span>Автоматизированные процессы</span>
//               </li>
//               <li className="flex items-center">
//                 <div className="w-6 h-6 rounded-full bg-[#fb4b06]/10 flex items-center justify-center mr-2">
//                   <Check className="w-3 h-3 text-[#fb4b06]" />
//                 </div>
//                 <span>Многоуровневый контроль качества</span>
//               </li>
//             </ul>
//           </div>
          
//           <div className="md:order-1 rounded-xl overflow-hidden shadow-xl">
//             <Image
//               src="/api/placeholder/600/400"
//               alt="Производство"
//               width={600}
//               height={400}
//               className="w-full h-full object-cover"
//             />
//           </div>
//         </div>
//       </FadeInView>
      
//       {/* Step 3 */}
//       <FadeInView className="relative">
//         <div className="absolute left-1/2 top-0 w-12 h-12 bg-[#fb4b06] rounded-full transform -translate-x-1/2 flex items-center justify-center text-xl font-bold text-white shadow-lg z-20">3</div>
        
//         <div className="grid md:grid-cols-2 gap-16 items-center">
//           <div className="md:text-right md:pr-16">
//             <h3 className="text-2xl font-bold text-[#1E22AA] mb-4">Упаковка и доставка</h3>
//             <p className="text-gray-600 leading-relaxed mb-6">
//               Наша продукция упаковывается в экологичные материалы и доставляется клиентам с соблюдением всех необходимых условий хранения и транспортировки.
//             </p>
//             <ul className="space-y-2 text-gray-600">
//               <li className="flex items-center md:justify-end">
//                 <span>Экологичная упаковка</span>
//                 <div className="w-6 h-6 rounded-full bg-[#fb4b06]/10 flex items-center justify-center ml-2">
//                   <Check className="w-3 h-3 text-[#fb4b06]" />
//                 </div>
//               </li>
//               <li className="flex items-center md:justify-end">
//                 <span>Оперативная логистика</span>
//                 <div className="w-6 h-6 rounded-full bg-[#fb4b06]/10 flex items-center justify-center ml-2">
//                   <Check className="w-3 h-3 text-[#fb4b06]" />
//                 </div>
//               </li>
//             </ul>
//           </div>
          
//           <div className="rounded-xl overflow-hidden shadow-xl">
//             <Image
//               src="/api/placeholder/600/400"
//               alt="Упаковка и доставка"
//               width={600}
//               height={400}
//               className="w-full h-full object-cover"
//             />
//           </div>
//         </div>
//       </FadeInView>
//     </div>
//   </div>
// </div>
// </section>

// import React from 'react';
// import Image from 'next/image';
// import { Check } from 'lucide-react';
// // import { useState, useEffect, useRef } from "react";


// // Component for smooth element appearance
// // const FadeInView = ({ children, delay = 0, className = "" }) => {
// //     const [isVisible, setIsVisible] = useState(false);
// //     const domRef = useRef(null);
  
// //     useEffect(() => {
// //       const observer = new IntersectionObserver(entries => {
// //         if (entries[0].isIntersecting) {
// //           setIsVisible(true);
// //           observer.unobserve(domRef.current);
// //         }
// //       });
      
// //       observer.observe(domRef.current);
// //       return () => observer.disconnect();
// //     }, []);
  
// //     return (
// //       <div
// //         ref={domRef}
// //         className={`${className} transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
// //         style={{ transitionDelay: `${delay}ms` }}
// //       >
// //         {children}
// //       </div>
// //     );
// //   };

// const ProcessSection: React.FC = () => {
//   return (
//     <section className="py-24 bg-white relative overflow-hidden">
//       {/* Background decoration */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-radial from-[#fb4b06]/5 to-transparent rounded-full"></div>
//         <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-radial from-[#1E22AA]/5 to-transparent rounded-full"></div>
//       </div>

//       <div className="container mx-auto px-4 relative z-10">
//         <div className="text-center max-w-3xl mx-auto mb-20">
//           {/* <FadeInView> */}
//             <div className="inline-block mb-4 bg-[#fb4b06]/10 rounded-full px-6 py-2">
//               <span className="text-[#fb4b06] text-sm font-medium uppercase tracking-wider">Как мы работаем</span>
//             </div>
//             <h2 className="text-5xl font-bold text-[#1E22AA] mb-6 leading-tight" style={{ fontFamily: '"Avenir Next Heavy", sans-serif' }}>
//               ПРОИЗВОДСТВЕННЫЙ <span className="text-[#fb4b06]">ПРОЦЕСС</span>
//             </h2>
//             <p className="text-xl text-gray-600 leading-relaxed">
//               От закупки сырья до доставки готовой продукции - каждый этап производства контролируется нашими экспертами для обеспечения наивысшего качества.
//             </p>
//           {/* </FadeInView> */}
//         </div>

//         <div className="relative">
//           {/* Process timeline */}
//           <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gray-200 transform -translate-x-1/2"></div>

//           <div className="space-y-24 relative">
//             {/* Step 1 */}
//             {/* <FadeInView className="relative"> */}
//               <div className="absolute left-1/2 top-0 w-12 h-12 bg-[#fb4b06] rounded-full transform -translate-x-1/2 flex items-center justify-center text-xl font-bold text-white shadow-lg z-20">1</div>

//               <div className="grid md:grid-cols-2 gap-16 items-center">
//                 <div className="md:text-right md:pr-16">
//                   <h3 className="text-2xl font-bold text-[#1E22AA] mb-4">Закупка сырья</h3>
//                   <p className="text-gray-600 leading-relaxed mb-6">
//                     Мы используем только высококачественное сырье от проверенных поставщиков, которое проходит строгий контроль перед поступлением в производство.
//                   </p>
//                   <ul className="space-y-2 text-gray-600">
//                     <li className="flex items-center md:justify-end">
//                       <span>Экологически чистые материалы</span>
//                       <div className="w-6 h-6 rounded-full bg-[#fb4b06]/10 flex items-center justify-center ml-2">
//                         <Check className="w-3 h-3 text-[#fb4b06]" />
//                       </div>
//                     </li>
//                     <li className="flex items-center md:justify-end">
//                       <span>Сертифицированные поставщики</span>
//                       <div className="w-6 h-6 rounded-full bg-[#fb4b06]/10 flex items-center justify-center ml-2">
//                         <Check className="w-3 h-3 text-[#fb4b06]" />
//                       </div>
//                     </li>
//                   </ul>
//                 </div>

//                 <div className="rounded-xl overflow-hidden shadow-xl">
//                   <Image
//                     src="https://www.techkorm.ru/wp-content/uploads/2024/04/raw-1024x536.jpg"
//                     alt="Закупка сырья"
//                     width={600}
//                     height={400}
//                     className="w-full h-[350px] object-cover"
//                   />
//                 </div>
//               </div>
//             {/* </FadeInView> */}

//             {/* Step 2 */}
//             {/* <FadeInView className="relative"> */}
//               <div className="absolute left-1/2 top-0 w-12 h-12 bg-[#fb4b06] rounded-full transform -translate-x-1/2 flex items-center justify-center text-xl font-bold text-white shadow-lg z-20">2</div>

//               <div className="grid md:grid-cols-2 gap-16 items-center">
//                 <div className="md:order-2 md:pl-16">
//                   <h3 className="text-2xl font-bold text-[#1E22AA] mb-4">Производство</h3>
//                   <p className="text-gray-600 leading-relaxed mb-6">
//                     Современное оборудование и автоматизированные линии производства позволяют нам создавать продукцию высочайшего качества с минимальным воздействием на окружающую среду.
//                   </p>
//                   <ul className="space-y-2 text-gray-600">
//                     <li className="flex items-center">
//                       <div className="w-6 h-6 rounded-full bg-[#fb4b06]/10 flex items-center justify-center mr-2">
//                         <Check className="w-3 h-3 text-[#fb4b06]" />
//                       </div>
//                       <span>Автоматизированные процессы</span>
//                     </li>
//                     <li className="flex items-center">
//                       <div className="w-6 h-6 rounded-full bg-[#fb4b06]/10 flex items-center justify-center mr-2">
//                         <Check className="w-3 h-3 text-[#fb4b06]" />
//                       </div>
//                       <span>Многоуровневый контроль качества</span>
//                     </li>
//                   </ul>
//                 </div>

//                 <div className="md:order-1 rounded-xl overflow-hidden shadow-xl">
//                   <Image
//                     src="https://termobrest.ru/sitefiles/1/76/77/225/714/715/150841dsc_1611_novyi_razmer.jpg"
//                     alt="Производство"
//                     width={600}
//                     height={400}
//                     className="w-full h-[350px] object-cover"
//                   />
//                 </div>
//               </div>
//             {/* </FadeInView> */}

//             {/* Step 3 */}
//             {/* <FadeInView className="relative"> */}
//               <div className="absolute left-1/2 top-0 w-12 h-12 bg-[#fb4b06] rounded-full transform -translate-x-1/2 flex items-center justify-center text-xl font-bold text-white shadow-lg z-20">3</div>

//               <div className="grid md:grid-cols-2 gap-16 items-center">
//                 <div className="md:text-right md:pr-16">
//                   <h3 className="text-2xl font-bold text-[#1E22AA] mb-4">Упаковка и доставка</h3>
//                   <p className="text-gray-600 leading-relaxed mb-6">
//                     Наша продукция упаковывается в экологичные материалы и доставляется клиентам с соблюдением всех необходимых условий хранения и транспортировки.
//                   </p>
//                   <ul className="space-y-2 text-gray-600">
//                     <li className="flex items-center md:justify-end">
//                       <span>Экологичная упаковка</span>
//                       <div className="w-6 h-6 rounded-full bg-[#fb4b06]/10 flex items-center justify-center ml-2">
//                         <Check className="w-3 h-3 text-[#fb4b06]" />
//                       </div>
//                     </li>
//                     <li className="flex items-center md:justify-end">
//                       <span>Оперативная логистика</span>
//                       <div className="w-6 h-6 rounded-full bg-[#fb4b06]/10 flex items-center justify-center ml-2">
//                         <Check className="w-3 h-3 text-[#fb4b06]" />
//                       </div>
//                     </li>
//                   </ul>
//                 </div>

//                 <div className="rounded-xl overflow-hidden shadow-xl">
//                   <Image
//                     src="https://evopack.com.ua/wp-content/uploads/2020/07/streych-plivka.jpg"
//                     alt="Упаковка и доставка"
//                     width={600}
//                     height={400}
//                     className="w-full h-[350px] object-cover"
//                   />
//                 </div>
//               </div>
//             {/* </FadeInView> */}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProcessSection;

import React from 'react';
import Image from 'next/image';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

// Define types for process step
type ProcessStep = {
  id: number;
  title: string;
  description: string;
  features: string[];
  imageSrc: string;
  imageAlt: string;
};

const ProcessSection: React.FC = () => {
  // Process steps data
  const processSteps: ProcessStep[] = [
    {
      id: 1,
      title: "Закупка сырья",
      description: "Мы используем только высококачественное сырье от проверенных поставщиков, которое проходит строгий контроль перед поступлением в производство.",
      features: ["Экологически чистые материалы", "Сертифицированные поставщики"],
      imageSrc: "https://www.techkorm.ru/wp-content/uploads/2024/04/raw-1024x536.jpg",
      imageAlt: "Закупка сырья"
    },
    {
      id: 2,
      title: "Производство",
      description: "Современное оборудование и автоматизированные линии производства позволяют нам создавать продукцию высочайшего качества с минимальным воздействием на окружающую среду.",
      features: ["Автоматизированные процессы", "Многоуровневый контроль качества"],
      imageSrc: "https://termobrest.ru/sitefiles/1/76/77/225/714/715/150841dsc_1611_novyi_razmer.jpg",
      imageAlt: "Производство"
    },
    {
      id: 3,
      title: "Упаковка и доставка",
      description: "Наша продукция упаковывается в экологичные материалы и доставляется клиентам с соблюдением всех необходимых условий хранения и транспортировки.",
      features: ["Экологичная упаковка", "Оперативная логистика"],
      imageSrc: "https://evopack.com.ua/wp-content/uploads/2020/07/streych-plivka.jpg",
      imageAlt: "Упаковка и доставка"
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-12 md:py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-radial from-[#fb4b06]/5 to-transparent rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-radial from-[#1E22AA]/5 to-transparent rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-12 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block mb-4 bg-[#fb4b06]/10 rounded-full px-6 py-2">
            <span className="text-[#fb4b06] text-sm font-medium uppercase tracking-wider">Как мы работаем</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-[#1E22AA] mb-6 leading-tight" style={{ fontFamily: '"Avenir Next Heavy", sans-serif' }}>
            ПРОИЗВОДСТВЕННЫЙ <span className="text-[#fb4b06]">ПРОЦЕСС</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            От закупки сырья до доставки готовой продукции - каждый этап производства контролируется нашими экспертами для обеспечения наивысшего качества.
          </p>
        </motion.div>

        <div className="relative">
          {/* Process timeline - hidden on mobile */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gray-200 transform -translate-x-1/2"></div>

          <motion.div 
            className="space-y-16 md:space-y-24 relative"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {processSteps.map((step, index) => (
              <div className="relative" key={step.id}>
                <motion.div
                  variants={itemVariants}
                  className="w-full"
                >
                  <div className="hidden md:flex absolute left-1/2 top-0 w-12 h-12 bg-[#fb4b06] rounded-full transform -translate-x-1/2 items-center justify-center text-xl font-bold text-white shadow-lg z-20">
                    {step.id}
                  </div>

                  <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-16 items-center">
                    <div className={`w-full ${index % 2 === 0 ? 'md:text-right md:pr-16 order-2 md:order-1' : 'md:order-2 md:pl-16 order-2'}`}>
                      <div className="flex items-center md:hidden mb-4">
                        <div className="w-10 h-10 bg-[#fb4b06] rounded-full flex items-center justify-center text-lg font-bold text-white shadow-lg mr-3">
                          {step.id}
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold text-[#1E22AA]">{step.title}</h3>
                      </div>
                      <h3 className="hidden md:block text-2xl font-bold text-[#1E22AA] mb-4">{step.title}</h3>
                      <p className="text-gray-600 leading-relaxed mb-6">
                        {step.description}
                      </p>
                      <ul className="space-y-2 text-gray-600">
                        {step.features.map((feature, featIndex) => (
                          <li key={featIndex} className={`flex items-center ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                            {index % 2 !== 0 && (
                              <div className="w-6 h-6 rounded-full bg-[#fb4b06]/10 flex items-center justify-center mr-2">
                                <Check className="w-3 h-3 text-[#fb4b06]" />
                              </div>
                            )}
                            <span>{feature}</span>
                            {index % 2 === 0 && (
                              <div className="w-6 h-6 rounded-full bg-[#fb4b06]/10 flex items-center justify-center ml-2">
                                <Check className="w-3 h-3 text-[#fb4b06]" />
                              </div>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className={`w-full rounded-xl overflow-hidden shadow-xl ${index % 2 === 0 ? 'order-1 md:order-2' : 'md:order-1 order-1'}`}>
                      <Image
                        src={step.imageSrc}
                        alt={step.imageAlt}
                        width={600}
                        height={400}
                        className="w-full h-[250px] md:h-[350px] object-cover"
                      />
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;