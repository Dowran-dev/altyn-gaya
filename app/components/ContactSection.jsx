// import React from "react";
// import { motion } from "framer-motion";
// import { Phone, Mail, MapPin } from "lucide-react";

// const ContactSection = ({ contactInfo }) => {
//   // Animation variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.5,
//       },
//     },
//   };

//   return (
//     <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-r from-[#1E22AA] to-[#1E22AA]/90 relative overflow-hidden">
//       {/* Background decoration with improved positioning */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute -top-20 -right-20 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 rounded-full bg-[#fb4b06]/20 blur-3xl"></div>
//         <div className="absolute -bottom-20 -left-20 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 rounded-full bg-[#fb4b06]/10 blur-3xl"></div>
//       </div>

//       <div className="container mx-auto px-4 sm:px-6 relative z-10">
//         <div className="grid md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-start">
//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, margin: "-100px" }}
//             variants={itemVariants}
//           >
//             <div className="inline-block mb-3 sm:mb-4 bg-white/10 backdrop-blur-sm rounded-full px-4 sm:px-6 py-1.5 sm:py-2">
//               <span className="text-white text-xs sm:text-sm font-medium uppercase tracking-wider">
//                 Свяжитесь с нами
//               </span>
//             </div>
//             <h2
//               className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 md:mb-8 leading-tight"
//               style={{ fontFamily: '"Avenir Next Heavy", sans-serif' }}
//             >
//               ОСТАЛИСЬ <span className="text-[#fb4b06]">ВОПРОСЫ?</span>
//             </h2>
//             <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed mb-8 sm:mb-10 md:mb-12">
//               Наши специалисты готовы ответить на все ваши вопросы о продукции и
//               условиях сотрудничества. Заполните форму или свяжитесь с нами
//               любым удобным способом.
//             </p>

//             <motion.div
//               className="space-y-4 sm:space-y-6"
//               variants={containerVariants}
//             >
//               <motion.div
//                 className="flex items-center group"
//                 variants={itemVariants}
//               >
//                 <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 flex items-center justify-center mr-3 sm:mr-4 group-hover:bg-[#fb4b06] transition-colors duration-300">
//                   <Phone className="text-white w-4 h-4 sm:w-5 sm:h-5" />
//                 </div>
//                 <div>
//                   <p className="text-white/70 text-xs sm:text-sm">Телефон</p>
//                   <p className="text-white font-medium text-sm sm:text-base">
//                     {contactInfo?.phone || "+7 (XXX) XXX-XX-XX"}
//                   </p>
//                 </div>
//               </motion.div>

//               <motion.div
//                 className="flex items-center group"
//                 variants={itemVariants}
//               >
//                 <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 flex items-center justify-center mr-3 sm:mr-4 group-hover:bg-[#fb4b06] transition-colors duration-300">
//                   <Mail className="text-white w-4 h-4 sm:w-5 sm:h-5" />
//                 </div>
//                 <div>
//                   <p className="text-white/70 text-xs sm:text-sm">Email</p>
//                   <p className="text-white font-medium text-sm sm:text-base">
//                     {contactInfo?.email || "info@example.com"}
//                   </p>
//                 </div>
//               </motion.div>

//               <motion.div
//                 className="flex items-center group"
//                 variants={itemVariants}
//               >
//                 <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 flex items-center justify-center mr-3 sm:mr-4 group-hover:bg-[#fb4b06] transition-colors duration-300">
//                   <MapPin className="text-white w-4 h-4 sm:w-5 sm:h-5" />
//                 </div>
//                 <div>
//                   <p className="text-white/70 text-xs sm:text-sm">Адрес</p>
//                   <p className="text-white font-medium text-sm sm:text-base">
//                     {contactInfo?.address || "ул. Примерная, 123, г. Москва"}
//                   </p>
//                 </div>
//               </motion.div>
//             </motion.div>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             viewport={{ once: true, margin: "-100px" }}
//             className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-2xl mt-6 md:mt-0 border border-white/20"
//           >
//             <h3 className="text-xl sm:text-2xl font-bold text-[#0b0f4a] mb-6">
//               Отправить сообщение
//             </h3>

//             <form className="space-y-5 sm:space-y-6">
//               <div>
//                 <label
//                   htmlFor="name"
//                   className="block text-sm font-medium text-gray-700 mb-2"
//                 >
//                   Ваше имя
//                 </label>
//                 <motion.div whileFocus={{ scale: 1.005 }} className="relative">
//                   <input
//                     type="text"
//                     id="name"
//                     className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#fb4b06]/50 focus:border-[#fb4b06] outline-none transition-all shadow-sm bg-white/80"
//                     placeholder="Введите ваше имя"
//                   />
//                   <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#fb4b06]/0 via-[#fb4b06]/0 to-[#fb4b06]/0 group-focus-within:from-[#0b0f4a]/20 group-focus-within:via-[#fb4b06]/40 group-focus-within:to-[#0b0f4a]/20 transition-all duration-300 rounded-b-lg"></div>
//                 </motion.div>
//               </div>

//               <div>
//                 <label
//                   htmlFor="email"
//                   className="block text-sm font-medium text-gray-700 mb-2"
//                 >
//                   Email
//                 </label>
//                 <motion.div whileFocus={{ scale: 1.005 }} className="relative">
//                   <input
//                     type="email"
//                     id="email"
//                     className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#fb4b06]/50 focus:border-[#fb4b06] outline-none transition-all shadow-sm bg-white/80"
//                     placeholder="Введите ваш email"
//                   />
//                   <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#fb4b06]/0 via-[#fb4b06]/0 to-[#fb4b06]/0 group-focus-within:from-[#0b0f4a]/20 group-focus-within:via-[#fb4b06]/40 group-focus-within:to-[#0b0f4a]/20 transition-all duration-300 rounded-b-lg"></div>
//                 </motion.div>
//               </div>

//               <div>
//                 <label
//                   htmlFor="message"
//                   className="block text-sm font-medium text-gray-700 mb-2"
//                 >
//                   Сообщение
//                 </label>
//                 <motion.div whileFocus={{ scale: 1.005 }} className="relative">
//                   <textarea
//                     id="message"
//                     rows="4"
//                     className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#fb4b06]/50 focus:border-[#fb4b06] outline-none transition-all shadow-sm bg-white/80"
//                     placeholder="Введите ваше сообщение"
//                   ></textarea>
//                   <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#fb4b06]/0 via-[#fb4b06]/0 to-[#fb4b06]/0 group-focus-within:from-[#0b0f4a]/20 group-focus-within:via-[#fb4b06]/40 group-focus-within:to-[#0b0f4a]/20 transition-all duration-300 rounded-b-lg"></div>
//                 </motion.div>
//               </div>

//               <motion.button
//                 whileHover={{ scale: 1.02 }}
//                 whileTap={{ scale: 0.98 }}
//                 className="w-full bg-gradient-to-r from-[#0b0f4a] to-[#131870] hover:from-[#fb4b06] hover:to-[#E85D24] rounded-full text-white px-6 py-4 text-base font-semibold transition-all duration-300 shadow-lg shadow-blue-900/20 hover:shadow-orange-600/30 flex items-center justify-center"
//                 type="submit"
//               >
//                 <span>Отправить сообщение</span>
//                 <svg
//                   className="ml-2 w-5 h-5"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M14 5l7 7m0 0l-7 7m7-7H3"
//                   ></path>
//                 </svg>
//               </motion.button>
//             </form>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactSection;

import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";

const ContactSection = ({ contactInfo }) => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-[#1E22AA] relative overflow-hidden">
      {/* Enhanced background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gradient-to-r from-[#fb4b06]/30 to-[#ff6b3d]/10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-gradient-to-r from-[#fb4b06]/20 to-[#ff6b3d]/5 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 rounded-full bg-[#3f43ff]/20 blur-3xl"></div>

        {/* Subtle mesh gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-bl from-[#1E22AA]/0 via-[#2A2DC8]/5 to-[#3C40E7]/10 mix-blend-overlay"></div>

        {/* Grain texture */}
        <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={itemVariants}
          >
            <motion.div
              className="inline-block mb-4 bg-white/10 backdrop-blur-md rounded-full px-5 py-2 border border-white/20"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-white p-4 text-sm font-medium uppercase tracking-wider">
                Свяжитесь с нами
              </span>
            </motion.div>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 md:mb-8 leading-tight"
              style={{ fontFamily: '"Avenir Next Heavy", sans-serif' }}
            >
              ОСТАЛИСЬ{" "}
              <span className="bg-[#fb4b06] bg-clip-text text-transparent">
                ВОПРОСЫ?
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed mb-10 md:mb-12">
              Наши специалисты готовы ответить на все ваши вопросы о продукции и
              условиях сотрудничества. Заполните форму или свяжитесь с нами
              любым удобным способом.
            </p>

            <motion.div
              className="space-y-5 sm:space-y-6"
              variants={containerVariants}
            >
              <motion.div
                className="flex items-center group"
                variants={itemVariants}
                whileHover={{ x: 5 }}
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-white/15 to-white/5 flex items-center justify-center mr-4 group-hover:bg-gradient-to-r group-hover:from-[#fb4b06] group-hover:to-[#ff6b3d] transition-all duration-300 shadow-lg shadow-blue-900/10">
                  <Phone className="text-white w-5 h-5" />
                </div>
                <div>
                  <p className="text-white/70 text-sm">Телефон</p>
                  <p className="text-white font-medium text-base">
                    {contactInfo?.phone || "+7 (XXX) XXX-XX-XX"}
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center group"
                variants={itemVariants}
                whileHover={{ x: 5 }}
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-white/15 to-white/5 flex items-center justify-center mr-4 group-hover:bg-gradient-to-r group-hover:from-[#fb4b06] group-hover:to-[#ff6b3d] transition-all duration-300 shadow-lg shadow-blue-900/10">
                  <Mail className="text-white w-5 h-5" />
                </div>
                <div>
                  <p className="text-white/70 text-sm">Email</p>
                  <p className="text-white font-medium text-base">
                    {contactInfo?.email || "info@example.com"}
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center group"
                variants={itemVariants}
                whileHover={{ x: 5 }}
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-white/15 to-white/5 flex items-center justify-center mr-4 group-hover:bg-gradient-to-r group-hover:from-[#fb4b06] group-hover:to-[#ff6b3d] transition-all duration-300 shadow-lg shadow-blue-900/10">
                  <MapPin className="text-white w-5 h-5" />
                </div>
                <div>
                  <p className="text-white/70 text-sm">Адрес</p>
                  <p className="text-white font-medium text-base">
                    {contactInfo?.address || "ул. Примерная, 123, г. Москва"}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-white/90 backdrop-blur-md rounded-xl p-8 shadow-2xl mt-6 md:mt-0 border border-white/30"
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              Отправить сообщение
            </h3>

            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-white mb-2"
                >
                  Ваше имя
                </label>
                <motion.div
                  whileFocus={{ scale: 1.005 }}
                  className="relative group"
                >
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#fb4b06]/50 focus:border-[#fb4b06] outline-none transition-all shadow-sm bg-white/80"
                    placeholder="Введите ваше имя"
                  />
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#fb4b06]/0 via-[#fb4b06]/0 to-[#fb4b06]/0 group-focus-within:from-[#0b0f4a]/20 group-focus-within:via-[#fb4b06]/40 group-focus-within:to-[#0b0f4a]/20 transition-all duration-300 rounded-b-lg"></div>
                </motion.div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-white mb-2"
                >
                  Email
                </label>
                <motion.div
                  whileFocus={{ scale: 1.005 }}
                  className="relative group"
                >
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#fb4b06]/50 focus:border-[#fb4b06] outline-none transition-all shadow-sm bg-white/80"
                    placeholder="Введите ваш email"
                  />
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#fb4b06]/0 via-[#fb4b06]/0 to-[#fb4b06]/0 group-focus-within:from-[#0b0f4a]/20 group-focus-within:via-[#fb4b06]/40 group-focus-within:to-[#0b0f4a]/20 transition-all duration-300 rounded-b-lg"></div>
                </motion.div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-white mb-2"
                >
                  Сообщение
                </label>
                <motion.div
                  whileFocus={{ scale: 1.005 }}
                  className="relative group"
                >
                  <textarea
                    id="message"
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#fb4b06]/50 focus:border-[#fb4b06] outline-none transition-all shadow-sm bg-white/80"
                    placeholder="Введите ваше сообщение"
                  ></textarea>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#fb4b06]/0 via-[#fb4b06]/0 to-[#fb4b06]/0 group-focus-within:from-[#0b0f4a]/20 group-focus-within:via-[#fb4b06]/40 group-focus-within:to-[#0b0f4a]/20 transition-all duration-300 rounded-b-lg"></div>
                </motion.div>
              </div>

              <motion.button
                whileHover={{
                  scale: 1.03,
                  boxShadow: "0 10px 25px -5px rgba(251, 75, 6, 0.4)",
                }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-[#fb4b06] hover:from-[#0b0f4a] hover:to-[#131870] rounded-full text-white px-6 py-4 text-base font-semibold transition-all duration-300 shadow-lg shadow-orange-600/20 hover:shadow-blue-900/30 flex items-center justify-center"
                type="submit"
              >
                <span>Отправить сообщение</span>
                <ArrowRight className="ml-2 w-5 h-5" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
