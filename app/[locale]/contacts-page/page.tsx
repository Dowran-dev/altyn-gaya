'use client';
import React, { useState, useEffect, useRef, FormEvent } from 'react';
import { Phone, Mail, MapPin, Clock, Send, ChevronRight, Loader2 } from 'lucide-react';
import { FaWhatsapp, FaTiktok, FaInstagram, FaYoutube } from 'react-icons/fa';
import { useTranslations } from 'next-intl';

// Animation component for elements that fade in on scroll
const FadeInView: React.FC<{
    children: React.ReactNode;
    delay?: number;
    className?: string;
  }> = ({ children, delay = 0, className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   const observer = new IntersectionObserver(entries => {
  //     if (entries[0].isIntersecting) {
  //       setIsVisible(true);
  //       // Ensure domRef.current is not null before unobserving
  //       if (domRef.current) {
  //         observer.unobserve(domRef.current);
  //       }
  //     }
  //   });
  
  //   if (domRef.current) {
  //     observer.observe(domRef.current);
  //   }
  
  //   return () => {
  //     if (domRef.current) {
  //       observer.unobserve(domRef.current);
  //     }
  //   };
  // }, []);

  useEffect(() => {
    const el = domRef.current;
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        if (el) observer.unobserve(el);
      }
    });
  
    if (el) observer.observe(el);
  
    return () => {
      if (el) observer.unobserve(el);
    };
  }, []);

  
  return (
    <div
      ref={domRef}
      className={`transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

interface FloatingElementProps {
    color: string;
    size: number;
    top: number;
    left: number;
    duration: number;
    delay: number;
  }
  
  const FloatingElement: React.FC<FloatingElementProps> = ({ color, size, top, left, duration, delay }) => {
    return (
      <div
        className="absolute rounded-full bg-opacity-10 blur-xl animate-pulse"
        style={{
          background: `radial-gradient(circle at center, ${color}40, ${color}10)`,
          width: `${size}px`,
          height: `${size}px`,
          top: `${top}%`,
          left: `${left}%`,
          animation: `float ${duration}s ease-in-out infinite ${delay}s, pulse ${
            duration * 0.7
          }s ease-in-out infinite ${delay * 1.3}s`,
        }}
      ></div>
    );
  };

// Social Media Icons component
const SocialLinks = () => {
  const socialLinks = [
    { href: 'https://wa.me/99361640921', icon: FaWhatsapp, color: '#25D366', label: 'WhatsApp' },
    { href: 'https://www.tiktok.com/@altyngaya.tm', icon: FaTiktok, color: '#000000', label: 'TikTok' },
    { href: 'https://www.instagram.com/altyngaya.tm/', icon: FaInstagram, color: '#E1306C', label: 'Instagram' },
    { href: 'https://www.youtube.com/@altyngaya4738', icon: FaYoutube, color: '#FF0000', label: 'YouTube' }
  ];

  return (
    <div className="flex items-center space-x-4 mt-6">
      {socialLinks.map((link, index) => {
        const Icon = link.icon;
        return (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group"
            aria-label={link.label}
          >
            <div className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 bg-white shadow-md group-hover:shadow-lg group-hover:scale-110 group-hover:shadow-[#fb4b06]/20">
              <Icon className="w-6 h-6 text-gray-700 group-hover:text-[#fb4b06] transition-colors" />
            </div>
          </a>
        );
      })}
    </div>
  );
};

// Static location component to replace Google Maps
const LocationDisplay = () => {
  const t = useTranslations();
  return (
    <div className="relative w-full h-[400px] md:h-[500px] bg-gray-100 dark:bg-gray-700 rounded-xl overflow-hidden">
      {/* Static map design */}
      <div className="absolute inset-0 bg-[#f5f7fa] dark:bg-gray-800">
        {/* Simple map styling with grid lines */}
        <div className="w-full h-full grid grid-cols-8 grid-rows-8">
          {Array(64).fill(0).map((_, i) => (
            <div 
              key={i} 
              className="border border-gray-200 dark:border-gray-700"
            ></div>
          ))}
        </div>
        
        {/* Roads */}
        <div className="absolute top-1/2 left-0 right-0 h-8 bg-gray-300 dark:bg-gray-600 transform -translate-y-1/2"></div>
        <div className="absolute top-0 bottom-0 left-1/3 w-6 bg-gray-300 dark:bg-gray-600"></div>
        
        {/* Company location marker */}
        <div className="absolute top-1/2 left-1/3 transform -translate-y-1/2 -translate-x-1/2">
          <div className="relative">
            <div className="w-8 h-8 bg-[#fb4b06] rounded-full animate-pulse"></div>
            <div className="absolute -top-16 -left-24 w-48 bg-white dark:bg-gray-900 p-3 rounded-lg shadow-lg">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-8 h-8 bg-[#fb4b06]/20 rounded-full flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-[#fb4b06]" />
                </div>
                <h3 className="font-bold text-sm text-[#0a0d42] dark:text-white">Altyn Gaya</h3>
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-300">
                {t('footer.address')}
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Location details overlay */}
      <div className="absolute top-4 left-4 bg-white dark:bg-gray-900 rounded-lg shadow-lg p-4 max-w-xs">
        <div className="flex items-center space-x-3 mb-2">
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#fb4b06]/20 bg-white flex items-center justify-center">
            <MapPin className="w-6 h-6 text-[#fb4b06]" />
          </div>
          <h3 className="font-bold text-lg text-[#0a0d42] dark:text-white">Altyn Gaya</h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          {t('footer.address')}
        </p>
      </div>
      
      {/* How to get there button */}
      <div className="absolute bottom-4 right-4">
        <a 
          href="https://maps.app.goo.gl/Q5Q4E9FbFgVLjj8d6" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-[#0a0d42] hover:bg-[#fb4b06] text-white px-4 py-2 rounded-full transition-colors flex items-center space-x-2 shadow-lg"
        >
          <MapPin className="w-4 h-4" />
          <span>{t('contact.howToGetThere')}</span>
        </a>
      </div>
    </div>
  );
};

// Main Contact Page Component
const Page = () => {
  const t = useTranslations();
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  interface FormStatus {
    type: 'success' | 'error';
    message: string;
  }
  const [formStatus, setFormStatus] = useState<FormStatus | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Colors for consistent styling
  const primaryColor = "#0a0d42";
  const accentColor = "#fb4b06";
  
  // Contact info
  const contactInfo = {
    phone: "+993 61 64 09 21",
    email: "altyngaya2008@gmail.com",
    address: t('footer.address'),
    hours: "Пн-Пт: 9:00 - 18:00, Сб: 10:00 - 15:00"
  };
  
  // Background animation elements
  const bgElements = [
    { color: primaryColor, size: 250, top: 5, left: 0, duration: 25, delay: 0 },
    { color: accentColor, size: 180, top: 70, left: 80, duration: 22, delay: 2 },
    { color: primaryColor, size: 150, top: 40, left: 90, duration: 18, delay: 1 },
    { color: accentColor, size: 220, top: 75, left: 10, duration: 20, delay: 3 },
  ];
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  // const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   setIsSubmitting(true);
  
  //   // Simulate form submission
  //   try {
  //     // The await here is allowed because handleSubmit is now async
  //     await new Promise(resolve => setTimeout(resolve, 1500));
  //     setFormStatus({
  //       type: 'success',
  //       message: 'Сообщение успешно отправлено! Мы свяжемся с вами в ближайшее время.'
  //     });
  //     setFormData({
  //       name: '',
  //       email: '',
  //       phone: '',
  //       subject: '',
  //       message: ''
  //     });
  //   } catch (_error) {
  //     setFormStatus({
  //       type: 'error',
  //       message: 'Произошла ошибка при отправке сообщения. Пожалуйста, попробуйте еще раз.'
  //     });
  //   } finally {
  //     setIsSubmitting(false);
  //     setTimeout(() => setFormStatus(null), 5000);
  //   }
  // };
  
  // Add animation keyframes
  
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
  
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (res.ok) {
        setFormStatus({
          type: 'success',
          message: t('contact.successMessage')
        });
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      } else {
        setFormStatus({
          type: 'error',
          message: t('contact.errorMessage')
        });
      }
    } catch (_error) {
      setFormStatus({
        type: 'error',
        message: t('contact.errorMessage')
      });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setFormStatus(null), 5000);
    }
  };
  
  
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      @keyframes float {
        0% { transform: translate(0, 0) rotate(0deg); }
        25% { transform: translate(10px, -15px) rotate(5deg); }
        50% { transform: translate(-5px, 10px) rotate(-5deg); }
        75% { transform: translate(-15px, -10px) rotate(3deg); }
        100% { transform: translate(0, 0) rotate(0deg); }
      }
      
      @keyframes pulse {
        0% { opacity: 0.1; }
        50% { opacity: 0.2; }
        100% { opacity: 0.1; }
      }
      
      @keyframes shimmer {
        0% { background-position: -200% 0; }
        100% { background-position: 200% 0; }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-20 overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {bgElements.map((el, index) => (
            <FloatingElement
              key={index}
              color={el.color}
              size={el.size}
              top={el.top}
              left={el.left}
              duration={el.duration}
              delay={el.delay}
            />
          ))}
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <FadeInView>
              <div className="inline-block mb-4 rounded-full px-6 py-2 bg-[#fb4b06]/10">
                <span className="text-sm font-medium uppercase tracking-wider text-[#fb4b06]">
                  {t('contact.contactUs')}
                </span>
              </div>
            </FadeInView>
            
            <FadeInView delay={100}>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#0a0d42] to-[#2c2f7c] dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              {t('contact.title1')} <span className="text-[#fb4b06]">{t('contact.title2')}</span>
              </h1>
            </FadeInView>
            
            <FadeInView delay={200}>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                {t('contact.description')}
              </p>
            </FadeInView>
            
            <FadeInView delay={300}>
              <div className="mt-10 inline-flex items-center justify-center">
                <div className="animate-bounce bg-[#fb4b06]/20 p-2 w-10 h-10 ring-1 ring-[#fb4b06]/30 shadow-lg rounded-full flex items-center justify-center">
                  <ChevronRight className="w-6 h-6 text-[#fb4b06] rotate-90" />
                </div>
              </div>
            </FadeInView>
          </div>
        </div>
      </section>
      
      {/* Contact Info and Form Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Information */}
            <FadeInView delay={100}>
              <div className="space-y-8">
                <h2 className="text-3xl md:text-4xl font-bold text-[#0a0d42] dark:text-white mb-8">
                {t('contact.title3')} <span className="text-[#fb4b06]"> {t('contact.title4')}</span>
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start group">
                    <div className="w-12 h-12 rounded-full bg-[#fb4b06]/10 flex items-center justify-center mr-4 group-hover:bg-[#fb4b06] transition-colors">
                      <Phone className="w-5 h-5 text-[#fb4b06] group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <div className="text-gray-500 dark:text-gray-400 text-sm mb-1">{t('contact.phone')}</div>
                      <a 
                        href={`tel:${contactInfo.phone}`} 
                        className="text-lg font-semibold text-[#0a0d42] dark:text-white hover:text-[#fb4b06] dark:hover:text-[#fb4b06] transition-colors"
                      >
                        {contactInfo.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start group">
                    <div className="w-12 h-12 rounded-full bg-[#fb4b06]/10 flex items-center justify-center mr-4 group-hover:bg-[#fb4b06] transition-colors">
                      <Mail className="w-5 h-5 text-[#fb4b06] group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <div className="text-gray-500 dark:text-gray-400 text-sm mb-1">Email</div>
                      <a 
                        href={`mailto:${contactInfo.email}`} 
                        className="text-lg font-semibold text-[#0a0d42] dark:text-white hover:text-[#fb4b06] dark:hover:text-[#fb4b06] transition-colors"
                      >
                        {contactInfo.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start group">
                    <div className="w-12 h-12 rounded-full bg-[#fb4b06]/10 flex items-center justify-center mr-4 group-hover:bg-[#fb4b06] transition-colors">
                      <MapPin className="w-5 h-5 text-[#fb4b06] group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <div className="text-gray-500 dark:text-gray-400 text-sm mb-1">{t('contact.address')}</div>
                      <div className="text-lg font-semibold text-[#0a0d42] dark:text-white">
                        {contactInfo.address}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start group">
                    <div className="w-12 h-12 rounded-full bg-[#fb4b06]/10 flex items-center justify-center mr-4 group-hover:bg-[#fb4b06] transition-colors">
                      <Clock className="w-5 h-5 text-[#fb4b06] group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <div className="text-gray-500 dark:text-gray-400 text-sm mb-1">{t('contact.workingHours')}</div>
                      <div className="text-lg font-semibold text-[#0a0d42] dark:text-white">
                        {t('contact.workingTimes')}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="pt-6">
                  <h3 className="text-xl font-semibold text-[#0a0d42] dark:text-white mb-4">
                    {t('contact.weInMedia')}
                  </h3>
                  <SocialLinks />
                </div>
              </div>
            </FadeInView>
            
            {/* Contact Form */}
            <FadeInView delay={300}>
              <div className="relative">
                <div className="absolute -inset-4 rounded-2xl blur-xl opacity-20 animate-pulse bg-gradient-to-r from-[#0a0d42] to-[#fb4b06]"></div>
                <div className="relative p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700">
                  <h3 className="text-2xl font-bold mb-6 text-[#0a0d42] dark:text-white">
                    {t('contact.sendMessage')}
                  </h3>
                  
                  {formStatus && (
                    <div className={`mb-6 p-4 rounded-lg ${
                      formStatus.type === 'success' 
                        ? 'bg-green-50 text-green-800 border border-green-200' 
                        : 'bg-red-50 text-red-800 border border-red-200'
                    }`}>
                      {formStatus.message}
                    </div>
                  )}
                  
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
                          {t('contact.yourName')}
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#fb4b06]/50 focus:border-transparent dark:bg-gray-700 dark:text-white"
                          placeholder={t('contact.yourNamePlaceholder')}
                        />
                      </div>
                      
                      <div>
                        <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
                          {t('contact.yourEmail')}
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#fb4b06]/50 focus:border-transparent dark:bg-gray-700 dark:text-white"
                          placeholder={t('contact.yourEmailPlaceholder')}
                        />
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
                        {t('contact.yourPhone')}
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#fb4b06]/50 focus:border-transparent dark:bg-gray-700 dark:text-white"
                          placeholder={t('contact.yourPhonePlaceholder')}
                        />
                      </div>
                      
                      <div>
                        <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
                          {t('contact.subject')}
                        </label>
                        <input
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#fb4b06]/50 focus:border-transparent dark:bg-gray-700 dark:text-white"
                          placeholder={t('contact.subjectPlaceholder')}
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
                        {t('contact.yourMessage')}
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#fb4b06]/50 focus:border-transparent min-h-[120px] dark:bg-gray-700 dark:text-white"
                        placeholder={t('contact.yourMessagePlaceholder')}
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full text-white rounded-full py-4 text-lg font-semibold shadow-lg transition-all duration-300 flex items-center justify-center bg-gradient-to-r from-[#0a0d42] to-[#2c2f7c] hover:from-[#fb4b06] hover:to-[#ff7a45]"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                          {t('contact.sending')}
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          {t('contact.sendMessage')}
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </div>
            </FadeInView>
          </div>
        </div>
      </section>
      
      {/* Map Section - Replaced with static location display */}
      <section className="bg-gray-50 dark:bg-gray-800 py-16">
        <div className="container mx-auto px-4">
          <FadeInView>
            <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0a0d42] dark:text-white mb-12">
              {t('contact.title5')} <span className="text-[#fb4b06]">{t('contact.title6')}</span>
            </h2>
          </FadeInView>
          
          <FadeInView delay={200}>
            <div className="relative rounded-xl overflow-hidden shadow-xl">
            {/* <MapView /> */}
              <LocationDisplay /> 
            </div>
          </FadeInView>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <FadeInView>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0a0d42] dark:text-white mb-4">
                {t('faq.faq')}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                {t('faq.faqDescription')}
              </p>
            </div>
          </FadeInView>
          
          <div className="max-w-3xl mx-auto">
            <div className="grid gap-6">
              {[
                {
                  q: t('faq.question1'),
                  a: t('faq.answer1')
                },
                {
                  q: t('faq.question2'),
                  a: t('faq.answer2')
                },
                {
                  q: t('faq.question3'),
                  a: t('faq.answer3')
                }
              ].map((faq, index) => (
                <FadeInView key={index} delay={index * 100}>
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
                    <h3 className="font-bold text-lg text-[#0a0d42] dark:text-white mb-3">{faq.q}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{faq.a}</p>
                  </div>
                </FadeInView>
              ))}
            </div>
            
            <FadeInView delay={500}>
              <div className="mt-12 text-center">
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {t('contact.notFoundAnswer')}
                </p>
                <a 
                  href={`tel:${contactInfo.phone}`}
                  className="inline-flex items-center px-8 py-3 bg-[#fb4b06] text-white rounded-full shadow-lg hover:bg-[#0a0d42] transition-colors"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  {t('contact.callUs')}
                </a>
              </div>
            </FadeInView>
          </div>
        </div>
      </section>
      
      </main>
    );
  };

export default Page;
