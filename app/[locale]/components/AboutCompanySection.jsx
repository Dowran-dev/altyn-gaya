// import React from "react";
// import Image from "next/image";
// import { motion } from "framer-motion";

// const AboutCompanySection = () => {
//   // Animation variants
//   const fadeInUp = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.6, ease: "easeOut" },
//     },
//   };

//   const staggerChildren = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//       },
//     },
//   };

//   return (
//     <section className="bg-[#1E22AA] text-white py-12 md:py-16 min-h-screen flex items-center relative overflow-hidden">
//       {/* Enhanced background decorative elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         <motion.div
//           initial={{ opacity: 0.5 }}
//           animate={{ opacity: 0.8 }}
//           transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
//           className="absolute -top-20 -right-20 w-64 md:w-96 h-64 md:h-96 rounded-full blur-3xl"
//           style={{ backgroundColor: "rgba(251, 75, 6, 0.1)" }}
//         />
//         <motion.div
//           initial={{ opacity: 0.5 }}
//           animate={{ opacity: 0.8 }}
//           transition={{
//             duration: 8,
//             repeat: Infinity,
//             repeatType: "reverse",
//             delay: 2,
//           }}
//           className="absolute -bottom-20 -left-20 w-64 md:w-96 h-64 md:h-96 rounded-full blur-3xl"
//           style={{ backgroundColor: "rgba(251, 75, 6, 0.1)" }}
//         />
//         <motion.div
//           initial={{ opacity: 0.3 }}
//           animate={{ opacity: 0.6 }}
//           transition={{
//             duration: 6,
//             repeat: Infinity,
//             repeatType: "reverse",
//             delay: 1,
//           }}
//           className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 md:w-96 h-64 md:h-96 rounded-full blur-3xl"
//           style={{ backgroundColor: "rgba(251, 75, 6, 0.05)" }}
//         />
//       </div>

//       <div className="container mx-auto px-4 md:px-16 relative z-10">
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-100px" }}
//           className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center"
//         >
//           <motion.div
//             variants={staggerChildren}
//             className="space-y-6 md:space-y-8"
//           >
//             <motion.div variants={fadeInUp}>
//               <h2
//                 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight"
//                 style={{ fontFamily: '"Avenir Next Heavy", sans-serif' }}
//               >
//                 О КОМПАНИИ <span style={{ color: "#fb4b06" }}>ALTYN GAYA</span>
//               </h2>
//               <div
//                 className="rounded-full px-4 md:px-6 py-2 inline-block mb-4 md:mb-6"
//                 style={{ backgroundColor: "rgba(251, 75, 6, 0.1)" }}
//               >
//                 <span className="text-white text-xs md:text-sm font-medium">
//                   С 2008 ГОДА НА РЫНКЕ
//                 </span>
//               </div>
//               <p
//                 className="text-base md:text-lg mb-6 md:mb-8 leading-relaxed max-w-lg"
//                 style={{ color: "rgba(255, 255, 255, 0.9)" }}
//               >
//                 Лидер в производстве бумажной продукции и бытовой химии с 2008
//                 года. Мы создаём продукты, способные удовлетворить самые высокие
//                 стандарты качества и экологичности.
//               </p>
//             </motion.div>

//             <motion.div
//               variants={staggerChildren}
//               className="space-y-4 md:space-y-6"
//             >
//               <motion.div
//                 variants={fadeInUp}
//                 whileHover={{ scale: 1.02 }}
//                 className="p-4 md:p-6 rounded-xl transition-all duration-300 border"
//                 style={{
//                   backgroundColor: "rgba(255, 255, 255, 0.05)",
//                   borderColor: "rgba(255, 255, 255, 0.1)",
//                 }}
//               >
//                 <div className="flex items-start">
//                   <motion.div
//                     whileHover={{ scale: 1.1 }}
//                     className="w-12 h-12 md:w-16 md:h-16 rounded-xl flex items-center justify-center shrink-0 mr-4 md:mr-6 transition-all"
//                     style={{ backgroundColor: "#fb4b06" }}
//                   >
//                     <span className="text-white text-xl md:text-2xl font-bold px-2 md:px-4">
//                       16+
//                     </span>
//                   </motion.div>
//                   <div>
//                     <h4 className="text-lg md:text-xl text-white font-bold mb-1 md:mb-2">
//                       Наша история
//                     </h4>
//                     <p
//                       className="text-sm md:text-base"
//                       style={{ color: "rgba(255, 255, 255, 0.8)" }}
//                     >
//                       Более 16 лет успешной работы на рынке и постоянного
//                       совершенствования производственных процессов
//                     </p>
//                   </div>
//                 </div>
//               </motion.div>

//               <motion.div
//                 variants={fadeInUp}
//                 whileHover={{ scale: 1.02 }}
//                 className="p-4 md:p-6 rounded-xl transition-all duration-300 border"
//                 style={{
//                   backgroundColor: "rgba(255, 255, 255, 0.05)",
//                   borderColor: "rgba(255, 255, 255, 0.1)",
//                 }}
//               >
//                 <div className="flex items-start">
//                   <motion.div
//                     whileHover={{ scale: 1.1 }}
//                     className="w-12 h-12 md:w-16 md:h-16 rounded-xl flex items-center justify-center shrink-0 mr-4 md:mr-6 transition-all"
//                     style={{ backgroundColor: "#fb4b06" }}
//                   >
//                     <span className="text-white text-xl md:text-2xl font-bold px-2 md:px-4">
//                       99%
//                     </span>
//                   </motion.div>
//                   <div>
//                     <h4 className="text-lg md:text-xl text-white font-bold mb-1 md:mb-2">
//                       Наши ценности
//                     </h4>
//                     <p
//                       className="text-sm md:text-base"
//                       style={{ color: "rgba(255, 255, 255, 0.8)" }}
//                     >
//                       Качество, инновации и экологичность во всех аспектах
//                       деятельности компании
//                     </p>
//                   </div>
//                 </div>
//               </motion.div>

//               <motion.div
//                 variants={fadeInUp}
//                 whileHover={{ scale: 1.02 }}
//                 className="p-4 md:p-6 rounded-xl transition-all duration-300 border"
//                 style={{
//                   backgroundColor: "rgba(255, 255, 255, 0.05)",
//                   borderColor: "rgba(255, 255, 255, 0.1)",
//                 }}
//               >
//                 <div className="flex items-start">
//                   <motion.div
//                     whileHover={{ scale: 1.1 }}
//                     className="w-12 h-12 md:w-16 md:h-16 rounded-xl flex items-center justify-center shrink-0 mr-4 md:mr-6 transition-all"
//                     style={{ backgroundColor: "#fb4b06" }}
//                   >
//                     <span className="text-white text-xl md:text-2xl font-bold px-2 md:px-4">
//                       24/7
//                     </span>
//                   </motion.div>
//                   <div>
//                     <h4 className="text-lg md:text-xl text-white font-bold mb-1 md:mb-2">
//                       Наш подход
//                     </h4>
//                     <p
//                       className="text-sm md:text-base"
//                       style={{ color: "rgba(255, 255, 255, 0.8)" }}
//                     >
//                       Современные технологии и строгий контроль качества на
//                       каждом этапе производства
//                     </p>
//                   </div>
//                 </div>
//               </motion.div>
//             </motion.div>

//             <motion.div variants={fadeInUp}>
//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.98 }}
//                 className="rounded-full text-white px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold mt-4 md:mt-6 flex items-center gap-2"
//                 style={{
//                   backgroundColor: "#fb4b06",
//                   transition: "background-color 0.3s ease",
//                 }}
//                 onMouseEnter={(e) =>
//                   (e.currentTarget.style.backgroundColor = "#f06937")
//                 }
//                 onMouseLeave={(e) =>
//                   (e.currentTarget.style.backgroundColor = "#fb4b06")
//                 }
//               >
//                 Узнать больше
//                 <motion.svg
//                   width="20"
//                   height="20"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   className="ml-2"
//                   initial={{ x: 0 }}
//                   whileHover={{ x: 3 }}
//                   transition={{ type: "spring", stiffness: 400 }}
//                 >
//                   <path d="M5 12h14M12 5l7 7-7 7" />
//                 </motion.svg>
//               </motion.button>
//             </motion.div>
//           </motion.div>

//           <motion.div variants={fadeInUp} className="relative mt-8 md:mt-0">
//             <motion.div
//               animate={{
//                 opacity: [0.2, 0.4, 0.2],
//                 scale: [1, 1.05, 1],
//               }}
//               transition={{
//                 duration: 4,
//                 ease: "easeInOut",
//                 repeat: Infinity,
//                 repeatType: "reverse",
//               }}
//               className="absolute -inset-4 rounded-xl blur-xl opacity-10"
//               style={{ backgroundColor: "#f7895d" }}
//             />
//             <div
//               className="relative h-80 sm:h-80 md:h-96 w-full rounded-xl overflow-hidden shadow-lg border"
//               style={{ borderColor: "rgba(255, 255, 255, 0.2)" }}
//             >
//               <Image
//                 src="/images/3D_model.jpg"
//                 alt="Производство Altyn Gaya"
//                 width={600}
//                 height={500}
//                 className="w-full h-full object-cover"
//               />
//               <div
//                 className="absolute inset-0"
//                 style={{
//                   background:
//                     "linear-gradient(to top, rgba(30, 34, 170, 0.8), transparent)",
//                 }}
//               ></div>

//               {/* Statistics on photo */}
//               <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
//                 <div className="flex justify-between items-center">
//                   <motion.div whileHover={{ y: -5 }} className="text-center">
//                     <div
//                       className="text-2xl md:text-3xl font-bold mb-1"
//                       style={{ color: "#fb4b06" }}
//                     >
//                       16+
//                     </div>
//                     <div className="text-white text-xs md:text-sm">
//                       Лет опыта
//                     </div>
//                   </motion.div>
//                   <motion.div whileHover={{ y: -5 }} className="text-center">
//                     <div
//                       className="text-2xl md:text-3xl font-bold mb-1"
//                       style={{ color: "#fb4b06" }}
//                     >
//                       50+
//                     </div>
//                     <div className="text-white text-xs md:text-sm">
//                       Сотрудников
//                     </div>
//                   </motion.div>
//                   <motion.div whileHover={{ y: -5 }} className="text-center">
//                     <div
//                       className="text-2xl md:text-3xl font-bold mb-1"
//                       style={{ color: "#fb4b06" }}
//                     >
//                       95%
//                     </div>
//                     <div className="text-white text-xs md:text-sm">
//                       Довольных клиентов
//                     </div>
//                   </motion.div>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default AboutCompanySection;

"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl"; // Import useTranslations hook

const AboutCompanySection = () => {
  const t = useTranslations(); // Use translations from the language files

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
          className="absolute -top-20 -right-20 w-64 md:w-96 h-64 md:h-96 rounded-full blur-3xl"
          style={{ backgroundColor: "rgba(251, 75, 6, 0.1)" }}
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
          className="absolute -bottom-20 -left-20 w-64 md:w-96 h-64 md:h-96 rounded-full blur-3xl"
          style={{ backgroundColor: "rgba(251, 75, 6, 0.1)" }}
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
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 md:w-96 h-64 md:h-96 rounded-full blur-3xl"
          style={{ backgroundColor: "rgba(251, 75, 6, 0.05)" }}
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
                {t("aboutCompany.title")}{" "}
                <span style={{ color: "#fb4b06" }}>
                  {t("aboutCompany.companyName")}
                </span>
              </h2>
              <div
                className="rounded-full px-4 md:px-6 py-2 inline-block mb-4 md:mb-6"
                style={{ backgroundColor: "rgba(251, 75, 6, 0.1)" }}
              >
                <span className="text-white text-xs md:text-sm font-medium">
                  {t("aboutCompany.since")}
                </span>
              </div>
              <p
                className="text-base md:text-lg mb-6 md:mb-8 leading-relaxed max-w-lg"
                style={{ color: "rgba(255, 255, 255, 0.9)" }}
              >
                {t("aboutCompany.description")}
              </p>
            </motion.div>

            <motion.div
              variants={staggerChildren}
              className="space-y-4 md:space-y-6"
            >
              <motion.div
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
                className="p-4 md:p-6 rounded-xl transition-all duration-300 border"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  borderColor: "rgba(255, 255, 255, 0.1)",
                }}
              >
                <div className="flex items-start">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-12 h-12 md:w-16 md:h-16 rounded-xl flex items-center justify-center shrink-0 mr-4 md:mr-6 transition-all"
                    style={{ backgroundColor: "#fb4b06" }}
                  >
                    <span className="text-white text-xl md:text-2xl font-bold px-2 md:px-4">
                      16+
                    </span>
                  </motion.div>
                  <div>
                    <h4 className="text-lg md:text-xl text-white font-bold mb-1 md:mb-2">
                      {t("aboutCompany.ourHistory")}
                    </h4>
                    <p
                      className="text-sm md:text-base"
                      style={{ color: "rgba(255, 255, 255, 0.8)" }}
                    >
                      {t("aboutCompany.historyDescription")}
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
                className="p-4 md:p-6 rounded-xl transition-all duration-300 border"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  borderColor: "rgba(255, 255, 255, 0.1)",
                }}
              >
                <div className="flex items-start">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-12 h-12 md:w-16 md:h-16 rounded-xl flex items-center justify-center shrink-0 mr-4 md:mr-6 transition-all"
                    style={{ backgroundColor: "#fb4b06" }}
                  >
                    <span className="text-white text-xl md:text-2xl font-bold px-2 md:px-4">
                      99%
                    </span>
                  </motion.div>
                  <div>
                    <h4 className="text-lg md:text-xl text-white font-bold mb-1 md:mb-2">
                      {t("aboutCompany.ourValues")}
                    </h4>
                    <p
                      className="text-sm md:text-base"
                      style={{ color: "rgba(255, 255, 255, 0.8)" }}
                    >
                      {t("aboutCompany.valuesDescription")}
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
                className="p-4 md:p-6 rounded-xl transition-all duration-300 border"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  borderColor: "rgba(255, 255, 255, 0.1)",
                }}
              >
                <div className="flex items-start">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-12 h-12 md:w-16 md:h-16 rounded-xl flex items-center justify-center shrink-0 mr-4 md:mr-6 transition-all"
                    style={{ backgroundColor: "#fb4b06" }}
                  >
                    <span className="text-white text-xl md:text-2xl font-bold px-2 md:px-4">
                      24/7
                    </span>
                  </motion.div>
                  <div>
                    <h4 className="text-lg md:text-xl text-white font-bold mb-1 md:mb-2">
                      {t("aboutCompany.ourApproach")}
                    </h4>
                    <p
                      className="text-sm md:text-base"
                      style={{ color: "rgba(255, 255, 255, 0.8)" }}
                    >
                      {t("aboutCompany.approachDescription")}
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="rounded-full text-white px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold mt-4 md:mt-6 flex items-center gap-2"
                style={{
                  backgroundColor: "#fb4b06",
                  transition: "background-color 0.3s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = "#f06937")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = "#fb4b06")
                }
              >
                {t("aboutCompany.learnMore")}
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
              className="absolute -inset-4 rounded-xl blur-xl opacity-10"
              style={{ backgroundColor: "#f7895d" }}
            />
            <div
              className="relative h-80 sm:h-80 md:h-96 w-full rounded-xl overflow-hidden shadow-lg border"
              style={{ borderColor: "rgba(255, 255, 255, 0.2)" }}
            >
              <Image
                src="/images/3D_model.jpg"
                alt="Производство Altyn Gaya"
                width={600}
                height={500}
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(30, 34, 170, 0.8), transparent)",
                }}
              ></div>

              {/* Statistics on photo */}
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                <div className="flex justify-between items-center">
                  <motion.div whileHover={{ y: -5 }} className="text-center">
                    <div
                      className="text-2xl md:text-3xl font-bold mb-1"
                      style={{ color: "#fb4b06" }}
                    >
                      16+
                    </div>
                    <div className="text-white text-xs md:text-sm">
                      {t("aboutCompany.experience")}
                    </div>
                  </motion.div>
                  <motion.div whileHover={{ y: -5 }} className="text-center">
                    <div
                      className="text-2xl md:text-3xl font-bold mb-1"
                      style={{ color: "#fb4b06" }}
                    >
                      50+
                    </div>
                    <div className="text-white text-xs md:text-sm">
                      {t("aboutCompany.employees")}
                    </div>
                  </motion.div>
                  <motion.div whileHover={{ y: -5 }} className="text-center">
                    <div
                      className="text-2xl md:text-3xl font-bold mb-1"
                      style={{ color: "#fb4b06" }}
                    >
                      95%
                    </div>
                    <div className="text-white text-xs md:text-sm">
                      {t("aboutCompany.satisfiedClients")}
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
