import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactSection = ({ contactInfo }) => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-r from-[#1E22AA] to-[#1E22AA]/90 relative overflow-hidden">
      {/* Background decoration with improved positioning */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 rounded-full bg-[#fb4b06]/20 blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 rounded-full bg-[#fb4b06]/10 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-start">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={itemVariants}
          >
            <div className="inline-block mb-3 sm:mb-4 bg-white/10 backdrop-blur-sm rounded-full px-4 sm:px-6 py-1.5 sm:py-2">
              <span className="text-white text-xs sm:text-sm font-medium uppercase tracking-wider">Свяжитесь с нами</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 md:mb-8 leading-tight" style={{ fontFamily: '"Avenir Next Heavy", sans-serif' }}>
              ОСТАЛИСЬ <span className="text-[#fb4b06]">ВОПРОСЫ?</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed mb-8 sm:mb-10 md:mb-12">
              Наши специалисты готовы ответить на все ваши вопросы о продукции и условиях сотрудничества. Заполните форму или свяжитесь с нами любым удобным способом.
            </p>
            
            <motion.div 
              className="space-y-4 sm:space-y-6"
              variants={containerVariants}
            >
              <motion.div 
                className="flex items-center group"
                variants={itemVariants}
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 flex items-center justify-center mr-3 sm:mr-4 group-hover:bg-[#fb4b06] transition-colors duration-300">
                  <Phone className="text-white w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <p className="text-white/70 text-xs sm:text-sm">Телефон</p>
                  <p className="text-white font-medium text-sm sm:text-base">{contactInfo?.phone || "+7 (XXX) XXX-XX-XX"}</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-center group"
                variants={itemVariants}
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 flex items-center justify-center mr-3 sm:mr-4 group-hover:bg-[#fb4b06] transition-colors duration-300">
                  <Mail className="text-white w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <p className="text-white/70 text-xs sm:text-sm">Email</p>
                  <p className="text-white font-medium text-sm sm:text-base">{contactInfo?.email || "info@example.com"}</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-center group"
                variants={itemVariants}
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 flex items-center justify-center mr-3 sm:mr-4 group-hover:bg-[#fb4b06] transition-colors duration-300">
                  <MapPin className="text-white w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <p className="text-white/70 text-xs sm:text-sm">Адрес</p>
                  <p className="text-white font-medium text-sm sm:text-base">{contactInfo?.address || "ул. Примерная, 123, г. Москва"}</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 shadow-xl sm:shadow-2xl mt-6 md:mt-0"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-[#1E22AA] mb-4 sm:mb-6">Отправить сообщение</h3>
            
            <form className="space-y-4 sm:space-y-6">
              <div>
                <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                  Ваше имя
                </label>
                <motion.input
                  whileFocus={{ scale: 1.005 }}
                  type="text"
                  id="name"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#fb4b06] focus:border-[#fb4b06] outline-none transition-colors"
                  placeholder="Введите ваше имя"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                  Email
                </label>
                <motion.input
                  whileFocus={{ scale: 1.005 }}
                  type="email"
                  id="email"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#fb4b06] focus:border-[#fb4b06] outline-none transition-colors"
                  placeholder="Введите ваш email"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                  Сообщение
                </label>
                <motion.textarea
                  whileFocus={{ scale: 1.005 }}
                  id="message"
                  rows="4"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#fb4b06] focus:border-[#fb4b06] outline-none transition-colors"
                  placeholder="Введите ваше сообщение"
                ></motion.textarea>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="w-full bg-gradient-to-r from-[#1E22AA] to-[#1E22AA]/90 hover:from-[#fb4b06] hover:to-[#E85D24] rounded-full text-white px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold transition-all duration-300"
                type="submit"
              >
                Отправить сообщение
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;