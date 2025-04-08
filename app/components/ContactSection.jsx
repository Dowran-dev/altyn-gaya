// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import {
//   Phone,
//   Mail,
//   MapPin,
//   ArrowRight,
//   CheckCircle,
//   Loader2,
// } from "lucide-react";

// const ContactSection = ({
//   contactInfo = {
//     phone: "+993 61 64 09 21",
//     email: "altyngaya2008@gmail.com",
//     address: "г. Мары, ул. Шаджахан, 22, велаят Мары, Туркменистан",
//   },
// }) => {
//   const [formState, setFormState] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   // Animation variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.15,
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

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     // Simulate form submission
//     setTimeout(() => {
//       setIsSubmitting(false);
//       setIsSubmitted(true);

//       // Reset form after showing success message
//       setTimeout(() => {
//         setIsSubmitted(false);
//         setFormState({ name: "", email: "", message: "" });
//       }, 3000);
//     }, 1500);
//   };

//   const handleChange = (e) => {
//     setFormState({
//       ...formState,
//       [e.target.id]: e.target.value,
//     });
//   };

//   return (
//     <section className="py-16 sm:py-20 md:py-24 bg-[#1E22AA] relative overflow-hidden">
//       {/* Enhanced background decorations */}
//       <div className="absolute inset-0 overflow-hidden">
//         {/* Animated gradient blobs */}
//         <motion.div
//           className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gradient-to-r from-[#fb4b06]/30 to-[#ff6b3d]/10 blur-3xl"
//           animate={{
//             x: [0, 20, 0],
//             y: [0, -20, 0],
//             scale: [1, 1.05, 1],
//           }}
//           transition={{
//             repeat: Infinity,
//             duration: 15,
//             ease: "easeInOut",
//           }}
//         />
//         <motion.div
//           className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-gradient-to-r from-[#fb4b06]/20 to-[#ff6b3d]/5 blur-3xl"
//           animate={{
//             x: [0, -20, 0],
//             y: [0, 20, 0],
//             scale: [1, 1.1, 1],
//           }}
//           transition={{
//             repeat: Infinity,
//             duration: 18,
//             ease: "easeInOut",
//             delay: 1,
//           }}
//         />
//         <motion.div
//           className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-[#3f43ff]/20 blur-3xl"
//           animate={{
//             x: [0, 30, 0],
//             y: [0, 15, 0],
//             scale: [1, 1.15, 1],
//           }}
//           transition={{
//             repeat: Infinity,
//             duration: 20,
//             ease: "easeInOut",
//             delay: 2,
//           }}
//         />

//         {/* Enhanced mesh gradient overlay */}
//         <div className="absolute inset-0 bg-gradient-to-bl from-[#1E22AA]/0 via-[#2A2DC8]/5 to-[#3C40E7]/10 mix-blend-overlay"></div>

//         {/* Enhanced grain texture with animated opacity */}
//         <motion.div
//           className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')]"
//           animate={{ opacity: [0.03, 0.06, 0.03] }}
//           transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
//         />

//         {/* Subtle line patterns */}
//         <svg
//           className="absolute inset-0 w-full h-full opacity-10"
//           width="100%"
//           height="100%"
//         >
//           <pattern
//             id="grid"
//             width="40"
//             height="40"
//             patternUnits="userSpaceOnUse"
//           >
//             <path
//               d="M 40 0 L 0 0 0 40"
//               fill="none"
//               stroke="white"
//               strokeWidth="0.5"
//               strokeOpacity="0.2"
//             />
//           </pattern>
//           <rect width="100%" height="100%" fill="url(#grid)" />
//         </svg>
//       </div>

//       <div className="container mx-auto px-4 sm:px-6 relative z-10">
//         <div className="grid md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, margin: "-100px" }}
//             variants={itemVariants}
//             className="relative"
//           >
//             {/* Decorative elements */}
//             <div className="absolute -left-4 -top-4 w-16 h-16 border-l-2 border-t-2 border-white/20 rounded-tl-xl" />
//             <div className="absolute -right-4 -bottom-4 w-16 h-16 border-r-2 border-b-2 border-white/20 rounded-br-xl" />

//             <motion.div
//               className="inline-block mb-4 bg-white/10 backdrop-blur-md rounded-full px-5 py-2 border border-white/20 overflow-hidden relative"
//               whileHover={{ scale: 1.05 }}
//             >
//               <span className="text-white text-sm font-medium uppercase tracking-wider relative z-10">
//                 Свяжитесь с нами
//               </span>
//               <motion.div
//                 className="absolute inset-0 bg-gradient-to-r from-[#fb4b06]/0 to-[#fb4b06]/30"
//                 animate={{ x: ["-100%", "100%"] }}
//                 transition={{
//                   repeat: Infinity,
//                   duration: 2,
//                   ease: "easeInOut",
//                 }}
//               />
//             </motion.div>

//             <h2
//               className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 md:mb-8 leading-tight relative"
//               style={{ fontFamily: '"Avenir Next Heavy", sans-serif' }}
//             >
//               ОСТАЛИСЬ{" "}
//               <span className="relative inline-block">
//                 <span className="bg-[#fb4b06] bg-clip-text text-transparent relative z-10">
//                   ВОПРОСЫ?
//                 </span>
//                 <motion.span
//                   className="absolute -bottom-1 left-0 h-2 bg-[#fb4b06]/60 w-full rounded-full blur-sm"
//                   animate={{ opacity: [0.4, 0.7, 0.4] }}
//                   transition={{
//                     duration: 3,
//                     repeat: Infinity,
//                     ease: "easeInOut",
//                   }}
//                 />
//               </span>
//             </h2>

//             <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed mb-10 md:mb-12">
//               Наши специалисты готовы ответить на все ваши вопросы о продукции и
//               условиях сотрудничества. Заполните форму или свяжитесь с нами
//               любым удобным способом.
//             </p>

//             <motion.div
//               className="space-y-5 sm:space-y-6"
//               variants={containerVariants}
//             >
//               <motion.div
//                 className="flex items-center group"
//                 variants={itemVariants}
//                 whileHover={{ x: 5 }}
//               >
//                 <div className="w-12 h-12 rounded-full bg-gradient-to-br from-white/15 to-white/5 flex items-center justify-center mr-4 group-hover:bg-gradient-to-r group-hover:from-[#fb4b06] group-hover:to-[#ff6b3d] transition-all duration-300 shadow-lg shadow-blue-900/10 relative overflow-hidden">
//                   <Phone className="text-white w-5 h-5 relative z-10" />
//                   <motion.div
//                     className="absolute inset-0 bg-white/10 rounded-full"
//                     animate={{
//                       scale: [1, 1.5, 1],
//                       opacity: [0, 0.5, 0],
//                     }}
//                     transition={{
//                       repeat: Infinity,
//                       duration: 2,
//                       repeatDelay: 2,
//                     }}
//                   />
//                 </div>
//                 <div>
//                   <p className="text-white/70 text-sm">Телефон</p>
//                   <p className="text-white font-medium text-base">
//                     {contactInfo?.phone}
//                   </p>
//                 </div>
//               </motion.div>

//               <motion.div
//                 className="flex items-center group"
//                 variants={itemVariants}
//                 whileHover={{ x: 5 }}
//               >
//                 <div className="w-12 h-12 rounded-full bg-gradient-to-br from-white/15 to-white/5 flex items-center justify-center mr-4 group-hover:bg-gradient-to-r group-hover:from-[#fb4b06] group-hover:to-[#ff6b3d] transition-all duration-300 shadow-lg shadow-blue-900/10 relative overflow-hidden">
//                   <Mail className="text-white w-5 h-5 relative z-10" />
//                   <motion.div
//                     className="absolute inset-0 bg-white/10 rounded-full"
//                     animate={{
//                       scale: [1, 1.5, 1],
//                       opacity: [0, 0.5, 0],
//                     }}
//                     transition={{
//                       repeat: Infinity,
//                       duration: 2,
//                       repeatDelay: 3,
//                     }}
//                   />
//                 </div>
//                 <div>
//                   <p className="text-white/70 text-sm">Email</p>
//                   <p className="text-white font-medium text-base">
//                     {contactInfo?.email}
//                   </p>
//                 </div>
//               </motion.div>

//               <motion.div
//                 className="flex items-center group"
//                 variants={itemVariants}
//                 whileHover={{ x: 5 }}
//               >
//                 <div className="w-12 h-12 rounded-full bg-gradient-to-br from-white/15 to-white/5 flex items-center justify-center mr-4 group-hover:bg-gradient-to-r group-hover:from-[#fb4b06] group-hover:to-[#ff6b3d] transition-all duration-300 shadow-lg shadow-blue-900/10 relative overflow-hidden">
//                   <MapPin className="text-white w-5 h-5 relative z-10" />
//                   <motion.div
//                     className="absolute inset-0 bg-white/10 rounded-full"
//                     animate={{
//                       scale: [1, 1.5, 1],
//                       opacity: [0, 0.5, 0],
//                     }}
//                     transition={{
//                       repeat: Infinity,
//                       duration: 2,
//                       repeatDelay: 4,
//                     }}
//                   />
//                 </div>
//                 <div>
//                   <p className="text-white/70 text-sm">Адрес</p>
//                   <p className="text-white font-medium text-base">
//                     {contactInfo?.address}
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
//             className="bg-white/10 backdrop-blur-md rounded-xl p-8 shadow-2xl mt-6 md:mt-0 border border-white/30 relative overflow-hidden"
//           >
//             {/* Decorative elements */}
//             <div className="absolute -right-16 -top-16 w-32 h-32 rounded-full bg-gradient-to-br from-[#fb4b06]/20 to-[#fb4b06]/5 blur-xl"></div>
//             <div className="absolute -left-16 -bottom-16 w-32 h-32 rounded-full bg-[#3C40E7]/20 blur-xl"></div>

//             <h3 className="text-2xl font-bold text-white mb-6 relative">
//               Отправить сообщение
//               <motion.div
//                 className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-[#fb4b06] to-[#fb4b06]/0 rounded-full w-24"
//                 animate={{ width: ["30%", "70%", "30%"] }}
//                 transition={{
//                   duration: 4,
//                   repeat: Infinity,
//                   ease: "easeInOut",
//                 }}
//               />
//             </h3>

//             {isSubmitted ? (
//               <motion.div
//                 initial={{ opacity: 0, y: 10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 className="bg-[#fb4b06]/20 backdrop-blur-md rounded-xl p-8 border border-[#fb4b06]/30 flex flex-col items-center justify-center h-64"
//               >
//                 <CheckCircle className="text-[#fb4b06] w-16 h-16 mb-4" />
//                 <h4 className="text-xl font-semibold text-white mb-2">
//                   Сообщение отправлено!
//                 </h4>
//                 <p className="text-white/80 text-center">
//                   Мы свяжемся с вами в ближайшее время.
//                 </p>
//               </motion.div>
//             ) : (
//               <form className="space-y-6" onSubmit={handleSubmit}>
//                 <div>
//                   <label
//                     htmlFor="name"
//                     className="block text-sm font-medium text-white mb-2"
//                   >
//                     Ваше имя
//                   </label>
//                   <motion.div
//                     whileFocus={{ scale: 1.005 }}
//                     className="relative group"
//                   >
//                     <input
//                       type="text"
//                       id="name"
//                       value={formState.name}
//                       onChange={handleChange}
//                       className="w-full px-4 py-3 border border-white/20 rounded-xl focus:ring-2 focus:ring-[#fb4b06]/50 focus:border-[#fb4b06] outline-none transition-all shadow-sm bg-white/10 backdrop-blur-md text-white"
//                       placeholder="Введите ваше имя"
//                       required
//                     />
//                     <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#fb4b06]/0 via-[#fb4b06]/0 to-[#fb4b06]/0 group-focus-within:from-[#0b0f4a]/20 group-focus-within:via-[#fb4b06]/40 group-focus-within:to-[#0b0f4a]/20 transition-all duration-300 rounded-b-xl"></div>
//                   </motion.div>
//                 </div>

//                 <div>
//                   <label
//                     htmlFor="email"
//                     className="block text-sm font-medium text-white mb-2"
//                   >
//                     Email
//                   </label>
//                   <motion.div
//                     whileFocus={{ scale: 1.005 }}
//                     className="relative group"
//                   >
//                     <input
//                       type="email"
//                       id="email"
//                       value={formState.email}
//                       onChange={handleChange}
//                       className="w-full px-4 py-3 border border-white/20 rounded-xl focus:ring-2 focus:ring-[#fb4b06]/50 focus:border-[#fb4b06] outline-none transition-all shadow-sm bg-white/10 backdrop-blur-md text-white"
//                       placeholder="Введите ваш email"
//                       required
//                     />
//                     <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#fb4b06]/0 via-[#fb4b06]/0 to-[#fb4b06]/0 group-focus-within:from-[#0b0f4a]/20 group-focus-within:via-[#fb4b06]/40 group-focus-within:to-[#0b0f4a]/20 transition-all duration-300 rounded-b-xl"></div>
//                   </motion.div>
//                 </div>

//                 <div>
//                   <label
//                     htmlFor="message"
//                     className="block text-sm font-medium text-white mb-2"
//                   >
//                     Сообщение
//                   </label>
//                   <motion.div
//                     whileFocus={{ scale: 1.005 }}
//                     className="relative group"
//                   >
//                     <textarea
//                       id="message"
//                       rows="4"
//                       value={formState.message}
//                       onChange={handleChange}
//                       className="w-full px-4 py-3 border border-white/20 rounded-xl focus:ring-2 focus:ring-[#fb4b06]/50 focus:border-[#fb4b06] outline-none transition-all shadow-sm bg-white/10 backdrop-blur-md text-white"
//                       placeholder="Введите ваше сообщение"
//                       required
//                     ></textarea>
//                     <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#fb4b06]/0 via-[#fb4b06]/0 to-[#fb4b06]/0 group-focus-within:from-[#0b0f4a]/20 group-focus-within:via-[#fb4b06]/40 group-focus-within:to-[#0b0f4a]/20 transition-all duration-300 rounded-b-xl"></div>
//                   </motion.div>
//                 </div>

//                 <motion.button
//                   whileHover={{
//                     scale: 1.03,
//                     boxShadow: "0 10px 25px -5px rgba(251, 75, 6, 0.4)",
//                   }}
//                   whileTap={{ scale: 0.98 }}
//                   className="w-full bg-gradient-to-r from-[#fb4b06] to-[#fb4b06] hover:from-[#fb4b06] hover:to-[#ff6b3d] rounded-full text-white px-6 py-4 text-base font-semibold transition-all duration-300 shadow-lg shadow-orange-600/20 hover:shadow-orange-600/30 flex items-center justify-center relative overflow-hidden"
//                   type="submit"
//                   disabled={isSubmitting}
//                 >
//                   {isSubmitting ? (
//                     <>
//                       <Loader2 className="w-5 h-5 mr-2 animate-spin" />
//                       <span>Отправка...</span>
//                     </>
//                   ) : (
//                     <>
//                       <span className="relative z-10">Отправить сообщение</span>
//                       <ArrowRight className="ml-2 w-5 h-5 relative z-10" />
//                       <motion.div
//                         className="absolute inset-0 bg-white/10"
//                         animate={{ x: ["-100%", "100%"] }}
//                         transition={{
//                           repeat: Infinity,
//                           duration: 1.5,
//                           ease: "easeInOut",
//                         }}
//                       />
//                     </>
//                   )}
//                 </motion.button>
//               </form>
//             )}

//             {/* Decorative circles */}
//             <svg
//               className="absolute -bottom-2 -right-2 w-12 h-12 text-white/5"
//               viewBox="0 0 100 100"
//               fill="none"
//             >
//               <circle
//                 cx="50"
//                 cy="50"
//                 r="40"
//                 stroke="currentColor"
//                 strokeWidth="1"
//               />
//             </svg>
//             <svg
//               className="absolute -top-2 -left-2 w-8 h-8 text-white/5"
//               viewBox="0 0 100 100"
//               fill="none"
//             >
//               <circle
//                 cx="50"
//                 cy="50"
//                 r="40"
//                 stroke="currentColor"
//                 strokeWidth="1"
//               />
//             </svg>
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
            className="bg-white/90 backdrop-blur-md p-8 shadow-2xl mt-6 md:mt-0"
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
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#fb4b06]/50 focus:border-[#fb4b06] outline-none transition-all shadow-sm bg-white"
                    placeholder="Введите ваше имя"
                  />
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#fb4b06]/0 via-[#fb4b06]/0 to-[#fb4b06]/0 group-focus-within:from-[#0b0f4a]/20 group-focus-within:via-[#fb4b06]/40 group-focus-within:to-[#0b0f4a]/20 transition-all duration-300 rounded-b-xl"></div>
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
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#fb4b06]/50 focus:border-[#fb4b06] outline-none transition-all shadow-sm bg-white"
                    placeholder="Введите ваш email"
                  />
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#fb4b06]/0 via-[#fb4b06]/0 to-[#fb4b06]/0 group-focus-within:from-[#0b0f4a]/20 group-focus-within:via-[#fb4b06]/40 group-focus-within:to-[#0b0f4a]/20 transition-all duration-300 rounded-b-xl"></div>
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
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#fb4b06]/50 focus:border-[#fb4b06] outline-none transition-all shadow-sm bg-white"
                    placeholder="Введите ваше сообщение"
                  ></textarea>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#fb4b06]/0 via-[#fb4b06]/0 to-[#fb4b06]/0 group-focus-within:from-[#0b0f4a]/20 group-focus-within:via-[#fb4b06]/40 group-focus-within:to-[#0b0f4a]/20 transition-all duration-300 rounded-b-xl"></div>
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
