'use client';
import React, { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import { useTranslations } from "next-intl";

// interface FAQItem {
//   question: string;
//   answer: string;
// }

// const faqItems: FAQItem[] = [
//   {
//     question: "Как оформить заказ?",
//     answer: "Свяжитесь с нами по телефону или через форму на сайте. Наши менеджеры помогут подобрать оптимальный ассортимент и рассчитают стоимость с учетом объема заказа и условий доставки."
//   },
//   {
//     question: "Есть ли скидки для оптовых заказов?",
//     answer: "Да, мы предлагаем индивидуальные условия для каждого партнёра. Размер скидки зависит от объема заказа, периодичности поставок и длительности сотрудничества."
//   },
//   {
//     question: "Какие сертификаты качества есть у продукции?",
//     answer: "Вся наша продукция имеет необходимые сертификаты качества и соответствует международным стандартам. По запросу мы предоставляем полный пакет документации."
//   }
// ];

const FAQSection = () => {
  const t = useTranslations();

  // Retrieve individual FAQ question and answer keys
  const faqItems = [
    {
      question: t('faqSection.question1'),
      answer: t('faqSection.answer1'),
    },
    {
      question: t('faqSection.question2'),
      answer: t('faqSection.answer2'),
    },
    {
      question: t('faqSection.question3'),
      answer: t('faqSection.answer3'),
    },
  ];


  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState({
    'faq-title': false,
    'faq-accordion': false,
    'faq-button': false
  });

  useEffect(() => {
    // Simulate visibility on mount
    setTimeout(() => {
      setIsVisible({
        'faq-title': true,
        'faq-accordion': true,
        'faq-button': true
      });
    }, 300);
  }, []);

  return (
    <section className="bg-white dark:bg-gray-900 py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" id="faq-title">
          <div className={`transition-all duration-1000 transform ${isVisible['faq-title'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-[#fb4b06] dark:text-[#fb4b06] mb-4" style={{ fontFamily: '"Avenir Next Heavy", sans-serif' }}>
              {t("faqSection.title")}
            </h2>
            <p className="text-[#1E22AA] dark:text-[#E5E5E5] text-xl max-w-3xl mx-auto">
              {t("faqSection.description")}
            </p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto" id="faq-accordion">
          <div className={`space-y-4 transition-all duration-1000 transform ${isVisible['faq-accordion'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden bg-white dark:bg-gray-800 hover:shadow-md transition-all"
              >
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                >
                  <span className="font-bold text-lg text-[#1E22AA] dark:text-[#E5E5E5]">{item.question}</span>
                  <ChevronRight
                    className={`transition-transform duration-300 text-[#fb4b06] dark:text-[#fb4b06] ${expandedFaq === index ? 'rotate-90' : 'rotate-0'}`}
                  />
                </button>
                <div
                  className={`px-6 transition-all duration-300 ${expandedFaq === index ? 'max-h-96 py-4' : 'max-h-0 overflow-hidden'}`}
                >
                  <p className="text-gray-700 dark:text-gray-300">{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
