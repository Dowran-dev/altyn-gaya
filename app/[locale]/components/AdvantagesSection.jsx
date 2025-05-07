import React from "react";
import { motion } from "framer-motion";
import { Check, Calendar, Users, UserCheck, Shield } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";

const AdvantagesSection = () => {
  const t = useTranslations();
  const locale = useLocale();

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
    <section className="py-16 md:py-24 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background decoration - Improved for responsive design and dark mode */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 md:w-1/3 md:h-1/3 bg-gradient-radial from-[#fb4b06]/5 dark:from-[#fb4b06]/10 to-transparent rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 md:w-1/2 md:h-1/2 bg-gradient-radial from-[#1E22AA]/5 dark:from-[#1E22AA]/10 to-transparent rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12 md:mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={itemVariants}
        >
          <div className="inline-block mb-4 bg-[#fb4b06]/10 dark:bg-[#fb4b06]/20 rounded-full px-4 sm:px-6 py-2">
            <span className="text-[#fb4b06] dark:text-[#ff6a2c] text-xs sm:text-sm font-medium uppercase tracking-wider">
              {t("advantagesSection.whyChooseUs")}
            </span>
          </div>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1E22AA] dark:text-blue-400 mb-4 md:mb-6 leading-tight"
            style={{ fontFamily: '"Avenir Next Heavy", sans-serif' }}
          >
            {locale === "ru" ? "НАШИ" : locale === "en" ? "OUR" : "BİZİM"}{" "}
            <span className="text-[#fb4b06] dark:text-orange-500">
              {locale === "ru"
                ? "ПРЕИМУЩЕСТВА"
                : locale === "en"
                ? "ADVANTAGES"
                : "AVANTAJLARIMIZ"}
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            {t("advantagesSection.highQualityDescription")}
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-14 mb-8 md:mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Advantage 1 */}
          <motion.div
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group flex flex-col items-center justify-between"
            variants={itemVariants}
          >
            <div className="p-5 md:p-6">
              <div className="w-12 h-12 bg-[#fb4b06]/10 dark:bg-[#fb4b06]/20 rounded-full flex items-center justify-center mb-5 md:mb-6 group-hover:bg-[#fb4b06] dark:group-hover:bg-[#ff6a2c] transition-colors duration-300">
                <span className="text-xl font-bold text-[#fb4b06] dark:text-[#ff6a2c] group-hover:text-white transition-colors">
                  1
                </span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-[#1E22AA] dark:text-blue-400 mb-3 md:mb-4">
                {t("advantagesSection.highQuality")}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {t("advantagesSection.highQualityDescription")}
              </p>
            </div>
            <div className="w-full p-5 md:p-6 bg-gray-50 dark:bg-gray-700">
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-[#fb4b06]/10 dark:bg-[#fb4b06]/20 flex items-center justify-center mr-3 flex-shrink-0">
                    <Check className="w-3 h-3 text-[#fb4b06] dark:text-[#ff6a2c]" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-200">
                    {t("advantagesSection.certifiedProduction")}
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-[#fb4b06]/10 dark:bg-[#fb4b06]/20 flex items-center justify-center mr-3 flex-shrink-0">
                    <Check className="w-3 h-3 text-[#fb4b06] dark:text-[#ff6a2c]" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-200">
                    {t("advantagesSection.manyLevelControl")}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Advantage 2 */}
          <motion.div
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group flex flex-col items-center justify-between"
            variants={itemVariants}
          >
            <div className="p-5 md:p-6">
              <div className="w-12 h-12 bg-[#fb4b06]/10 dark:bg-[#fb4b06]/20 rounded-full flex items-center justify-center mb-5 md:mb-6 group-hover:bg-[#fb4b06] dark:group-hover:bg-[#ff6a2c] transition-colors duration-300">
                <span className="text-xl font-bold text-[#fb4b06] dark:text-[#ff6a2c] group-hover:text-white transition-colors">
                  2
                </span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-[#1E22AA] dark:text-blue-400 mb-3 md:mb-4">
                {t("advantagesSection.affordablePrices")}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {t("advantagesSection.affordablePricesDescription")}
              </p>
            </div>
            <div className="w-full p-5 md:p-6 bg-gray-50 dark:bg-gray-700">
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-[#fb4b06]/10 dark:bg-[#fb4b06]/20 flex items-center justify-center mr-3 flex-shrink-0">
                    <Check className="w-3 h-3 text-[#fb4b06] dark:text-[#ff6a2c]" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-200">
                    {t("advantagesSection.flexibleDiscountSystem")}
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-[#fb4b06]/10 dark:bg-[#fb4b06]/20 flex items-center justify-center mr-3 flex-shrink-0">
                    <Check className="w-3 h-3 text-[#fb4b06] dark:text-[#ff6a2c]" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-200">
                    {t("advantagesSection.specialConditionsForWholesalers")}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Advantage 3 */}
          <motion.div
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group flex flex-col items-center justify-between"
            variants={itemVariants}
          >
            <div className="p-5 md:p-6">
              <div className="w-12 h-12 bg-[#fb4b06]/10 dark:bg-[#fb4b06]/20 rounded-full flex items-center justify-center mb-5 md:mb-6 group-hover:bg-[#fb4b06] dark:group-hover:bg-[#ff6a2c] transition-colors duration-300">
                <span className="text-xl font-bold text-[#fb4b06] dark:text-[#ff6a2c] group-hover:text-white transition-colors">
                  3
                </span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-[#1E22AA] dark:text-blue-400 mb-3 md:mb-4">
                {t("advantagesSection.reliableSupplies")}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {t("advantagesSection.reliableSuppliesDescription")}
              </p>
            </div>
            <div className="w-full p-5 md:p-6 bg-gray-50 dark:bg-gray-700">
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-[#fb4b06]/10 dark:bg-[#fb4b06]/20 flex items-center justify-center mr-3 flex-shrink-0">
                    <Check className="w-3 h-3 text-[#fb4b06] dark:text-[#ff6a2c]" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-200">
                    {t("advantagesSection.alwaysOnTime")}
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-[#fb4b06]/10 dark:bg-[#fb4b06]/20 flex items-center justify-center mr-3 flex-shrink-0">
                    <Check className="w-3 h-3 text-[#fb4b06] dark:text-[#ff6a2c]" />
                  </div>
                  <span className="text-gray-700 dark:text-gray-200">
                    {t("advantagesSection.deliveryToAllRegions")}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Stats section - Improved for mobile and dark mode */}
        <motion.div
          className="mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Stat 1 */}
          <motion.div
            className="bg-white dark:bg-gray-800 p-4 md:p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 group hover:shadow-xl transition-all duration-300"
            variants={itemVariants}
          >
            <motion.div
              className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-[#fb4b06] to-[#E85D24] dark:from-[#ff6a2c] dark:to-[#ff7a40] rounded-full flex items-center justify-center mb-4 shadow-lg shadow-[#fb4b06]/20 dark:shadow-[#ff6a2c]/20 group-hover:shadow-[#fb4b06]/30 dark:group-hover:shadow-[#ff6a2c]/30 transition-all"
              whileHover={{ scale: 1.1 }}
            >
              <Calendar className="w-6 h-6 md:w-8 md:h-8 text-white" />
            </motion.div>
            <div className="text-2xl md:text-4xl font-bold text-[#1E22AA] dark:text-blue-400 mb-1 md:mb-2">
              15+
            </div>
            <div className="text-sm md:text-base text-gray-600 dark:text-gray-300">
              {t("advantagesSection.yearsInMarket")}
            </div>
          </motion.div>

          {/* Stat 2 */}
          <motion.div
            className="bg-white dark:bg-gray-800 p-4 md:p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 group hover:shadow-xl transition-all duration-300"
            variants={itemVariants}
          >
            <motion.div
              className="w-12 h-12 md:w-16 md:h-16 bg-[#1E22AA] dark:bg-[#4b4edd] rounded-full flex items-center justify-center mb-4 shadow-lg shadow-[#1E22AA]/20 dark:shadow-[#4b4edd]/20 group-hover:shadow-[#1E22AA]/30 dark:group-hover:shadow-[#4b4edd]/30 transition-all"
              whileHover={{ scale: 1.1 }}
            >
              <Users className="w-6 h-6 md:w-8 md:h-8 text-white" />
            </motion.div>
            <div className="text-2xl md:text-4xl font-bold text-[#1E22AA] dark:text-blue-400 mb-1 md:mb-2">
              1000+
            </div>
            <div className="text-sm md:text-base text-gray-600 dark:text-gray-300">
              {t("advantagesSection.satisfiedClients")}
            </div>
          </motion.div>

          {/* Stat 3 */}
          <motion.div
            className="bg-white dark:bg-gray-800 p-4 md:p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 group hover:shadow-xl transition-all duration-300"
            variants={itemVariants}
          >
            <motion.div
              className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-[#fb4b06] to-[#E85D24] dark:from-[#ff6a2c] dark:to-[#ff7a40] rounded-full flex items-center justify-center mb-4 shadow-lg shadow-[#fb4b06]/20 dark:shadow-[#ff6a2c]/20 group-hover:shadow-[#fb4b06]/30 dark:group-hover:shadow-[#ff6a2c]/30 transition-all"
              whileHover={{ scale: 1.1 }}
            >
              <UserCheck className="w-6 h-6 md:w-8 md:h-8 text-white" />
            </motion.div>
            <div className="text-2xl md:text-4xl font-bold text-[#1E22AA] dark:text-blue-400 mb-1 md:mb-2">
              25+
            </div>
            <div className="text-sm md:text-base text-gray-600 dark:text-gray-300">
              {t("advantagesSection.professionals")}
            </div>
          </motion.div>

          {/* Stat 4 */}
          <motion.div
            className="bg-white dark:bg-gray-800 p-4 md:p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 group hover:shadow-xl transition-all duration-300"
            variants={itemVariants}
          >
            <motion.div
              className="w-12 h-12 md:w-16 md:h-16 bg-[#1E22AA] dark:bg-[#4b4edd] rounded-full flex items-center justify-center mb-4 shadow-lg shadow-[#1E22AA]/20 dark:shadow-[#4b4edd]/20 group-hover:shadow-[#1E22AA]/30 dark:group-hover:shadow-[#4b4edd]/30 transition-all"
              whileHover={{ scale: 1.1 }}
            >
              <Shield className="w-6 h-6 md:w-8 md:h-8 text-white" />
            </motion.div>
            <div className="text-2xl md:text-4xl font-bold text-[#1E22AA] dark:text-blue-400 mb-1 md:mb-2">
              100%
            </div>
            <div className="text-sm md:text-base text-gray-600 dark:text-gray-300">
              {t("advantagesSection.qualityGuarantee")}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
