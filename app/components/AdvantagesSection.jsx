import React from "react";
import { motion } from "framer-motion";
import {
  Check,
  Calendar,
  Users,
  UserCheck,
  Shield,
  ArrowRight,
} from "lucide-react";

const AdvantagesSection = () => {
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
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Background decoration - Improved for responsive design */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 md:w-1/3 md:h-1/3 bg-gradient-radial from-[#fb4b06]/5 to-transparent rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 md:w-1/2 md:h-1/2 bg-gradient-radial from-[#1E22AA]/5 to-transparent rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12 md:mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={itemVariants}
        >
          <div className="inline-block mb-4 bg-[#fb4b06]/10 rounded-full px-4 sm:px-6 py-2">
            <span className="text-[#fb4b06] text-xs sm:text-sm font-medium uppercase tracking-wider">
              Почему выбирают нас
            </span>
          </div>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1E22AA] mb-4 md:mb-6 leading-tight"
            style={{ fontFamily: '"Avenir Next Heavy", sans-serif' }}
          >
            НАШИ <span className="text-[#fb4b06]">ПРЕИМУЩЕСТВА</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Мы стремимся к совершенству на всех этапах производства и доставки
            нашей продукции, гарантируя удовлетворение потребностей даже самых
            требовательных клиентов.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Advantage 1 */}
          <motion.div
            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            variants={itemVariants}
          >
            <div className="border-b border-gray-100 p-5 md:p-6">
              <div className="w-12 h-12 bg-[#fb4b06]/10 rounded-full flex items-center justify-center mb-5 md:mb-6 group-hover:bg-[#fb4b06] transition-colors duration-300">
                <span className="text-xl font-bold text-[#fb4b06] group-hover:text-white transition-colors">
                  1
                </span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-[#1E22AA] mb-3 md:mb-4">
                Высокое качество
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Мы используем только экологически чистые материалы и современное
                оборудование, обеспечивая превосходное качество нашей продукции.
              </p>
            </div>
            <div className="p-5 md:p-6 bg-gray-50">
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-[#fb4b06]/10 flex items-center justify-center mr-3 flex-shrink-0">
                    <Check className="w-3 h-3 text-[#fb4b06]" />
                  </div>
                  <span className="text-gray-700">
                    Сертифицированное производство
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-[#fb4b06]/10 flex items-center justify-center mr-3 flex-shrink-0">
                    <Check className="w-3 h-3 text-[#fb4b06]" />
                  </div>
                  <span className="text-gray-700">Многоуровневый контроль</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Advantage 2 */}
          <motion.div
            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            variants={itemVariants}
          >
            <div className="border-b border-gray-100 p-5 md:p-6">
              <div className="w-12 h-12 bg-[#fb4b06]/10 rounded-full flex items-center justify-center mb-5 md:mb-6 group-hover:bg-[#fb4b06] transition-colors duration-300">
                <span className="text-xl font-bold text-[#fb4b06] group-hover:text-white transition-colors">
                  2
                </span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-[#1E22AA] mb-3 md:mb-4">
                Доступные цены
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Благодаря оптимизации производства и прямым поставкам, мы
                предлагаем конкурентные цены без потери качества.
              </p>
            </div>
            <div className="p-5 md:p-6 bg-gray-50">
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-[#fb4b06]/10 flex items-center justify-center mr-3 flex-shrink-0">
                    <Check className="w-3 h-3 text-[#fb4b06]" />
                  </div>
                  <span className="text-gray-700">Гибкая система скидок</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-[#fb4b06]/10 flex items-center justify-center mr-3 flex-shrink-0">
                    <Check className="w-3 h-3 text-[#fb4b06]" />
                  </div>
                  <span className="text-gray-700">
                    Специальные условия для оптовиков
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Advantage 3 */}
          <motion.div
            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
            variants={itemVariants}
          >
            <div className="border-b border-gray-100 p-5 md:p-6">
              <div className="w-12 h-12 bg-[#fb4b06]/10 rounded-full flex items-center justify-center mb-5 md:mb-6 group-hover:bg-[#fb4b06] transition-colors duration-300">
                <span className="text-xl font-bold text-[#fb4b06] group-hover:text-white transition-colors">
                  3
                </span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-[#1E22AA] mb-3 md:mb-4">
                Надежные поставки
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Оперативная логистика и строгое соблюдение сроков доставки
                делают нас надежным партнером для наших клиентов.
              </p>
            </div>
            <div className="p-5 md:p-6 bg-gray-50">
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-[#fb4b06]/10 flex items-center justify-center mr-3 flex-shrink-0">
                    <Check className="w-3 h-3 text-[#fb4b06]" />
                  </div>
                  <span className="text-gray-700">Всегда в срок</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-[#fb4b06]/10 flex items-center justify-center mr-3 flex-shrink-0">
                    <Check className="w-3 h-3 text-[#fb4b06]" />
                  </div>
                  <span className="text-gray-700">Доставка во все регионы</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Stats section - Improved for mobile */}
        <motion.div
          className="mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Stat 1 */}
          <motion.div
            className="bg-white p-4 md:p-6 rounded-xl shadow-lg border border-gray-100 group hover:shadow-xl transition-all duration-300"
            variants={itemVariants}
          >
            <motion.div
              className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-[#fb4b06] to-[#E85D24] rounded-full flex items-center justify-center mb-4 shadow-lg shadow-[#fb4b06]/20 group-hover:shadow-[#fb4b06]/30 transition-all"
              whileHover={{ scale: 1.1 }}
            >
              <Calendar className="w-6 h-6 md:w-8 md:h-8 text-white" />
            </motion.div>
            <div className="text-2xl md:text-4xl font-bold text-[#1E22AA] mb-1 md:mb-2">
              15+
            </div>
            <div className="text-sm md:text-base text-gray-600">
              лет на рынке
            </div>
          </motion.div>

          {/* Stat 2 */}
          <motion.div
            className="bg-white p-4 md:p-6 rounded-xl shadow-lg border border-gray-100 group hover:shadow-xl transition-all duration-300"
            variants={itemVariants}
          >
            <motion.div
              className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-[#1E22AA] to-[#1E22AA]/80 rounded-full flex items-center justify-center mb-4 shadow-lg shadow-[#1E22AA]/20 group-hover:shadow-[#1E22AA]/30 transition-all"
              whileHover={{ scale: 1.1 }}
            >
              <Users className="w-6 h-6 md:w-8 md:h-8 text-white" />
            </motion.div>
            <div className="text-2xl md:text-4xl font-bold text-[#1E22AA] mb-1 md:mb-2">
              1000+
            </div>
            <div className="text-sm md:text-base text-gray-600">
              довольных клиентов
            </div>
          </motion.div>

          {/* Stat 3 */}
          <motion.div
            className="bg-white p-4 md:p-6 rounded-xl shadow-lg border border-gray-100 group hover:shadow-xl transition-all duration-300"
            variants={itemVariants}
          >
            <motion.div
              className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-[#fb4b06] to-[#E85D24] rounded-full flex items-center justify-center mb-4 shadow-lg shadow-[#fb4b06]/20 group-hover:shadow-[#fb4b06]/30 transition-all"
              whileHover={{ scale: 1.1 }}
            >
              <UserCheck className="w-6 h-6 md:w-8 md:h-8 text-white" />
            </motion.div>
            <div className="text-2xl md:text-4xl font-bold text-[#1E22AA] mb-1 md:mb-2">
              25+
            </div>
            <div className="text-sm md:text-base text-gray-600">
              профессионалов
            </div>
          </motion.div>

          {/* Stat 4 */}
          <motion.div
            className="bg-white p-4 md:p-6 rounded-xl shadow-lg border border-gray-100 group hover:shadow-xl transition-all duration-300"
            variants={itemVariants}
          >
            <motion.div
              className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-[#1E22AA] to-[#1E22AA]/80 rounded-full flex items-center justify-center mb-4 shadow-lg shadow-[#1E22AA]/20 group-hover:shadow-[#1E22AA]/30 transition-all"
              whileHover={{ scale: 1.1 }}
            >
              <Shield className="w-6 h-6 md:w-8 md:h-8 text-white" />
            </motion.div>
            <div className="text-2xl md:text-4xl font-bold text-[#1E22AA] mb-1 md:mb-2">
              100%
            </div>
            <div className="text-sm md:text-base text-gray-600">
              гарантия качества
            </div>
          </motion.div>
        </motion.div>

        {/* CTA Button - Improved with animation */}
        <motion.div
          className="mt-12 md:mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="relative overflow-hidden group bg-gradient-to-r from-[#fb4b06] to-[#E85D24] hover:from-[#E85D24] hover:to-[#fb4b06] text-white px-6 sm:px-10 py-3 sm:py-5 text-base sm:text-xl rounded-full font-semibold shadow-lg shadow-[#fb4b06]/20 hover:shadow-[#fb4b06]/40 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3">
              УЗНАТЬ БОЛЬШЕ О НАШЕЙ ПРОДУКЦИИ
              <motion.span initial={{ x: 0 }} whileHover={{ x: 5 }}>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.span>
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
