'use client';
import { useState, useEffect, useRef } from "react";
import { Button } from "@/app/components/ui/button";
import { Check, ArrowRight, Phone, Mail, MapPin, Calendar, Users, UserCheck, Shield } from "lucide-react";
import ProcessSection from "./components/ProcessSection";
import ProductCarousel from "./components/ProductCarousel";
import AboutCompanySection from "./components/AboutCompanySection";
import HeroSection from "./components/HeroSection";
import FAQSection from "./components/FAQSection";
import AdvancedWaveSeparator from "./components/BrushWaveSeparator";
import { FaInstagram, FaYoutube, FaTiktok, FaWhatsapp } from 'react-icons/fa';

export const runtime = 'edge';

interface SocialLink {
  href: string;
  icon: React.ElementType;
}

const socialLinks: SocialLink[] = [
  { href: 'https://www.whatsapp.com', icon: FaWhatsapp },
  { href: 'https://www.tiktok.com', icon: FaTiktok },
  { href: 'https://www.instagram.com', icon: FaInstagram },
  { href: 'https://www.youtube.com', icon: FaYoutube },
];

const SocialMediaIcons: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="fixed bottom-[10px] right-[10px] sm:bottom-[15px] sm:right-[15px] z-[100]">
      <ul className="list-none flex flex-col p-0 m-0">
        {socialLinks.map((link, index) => {
          const IconComponent = link.icon;
          const isHovered = hoveredIndex === index;
          
          return (
            <li 
              key={index}
              className="transform transition-all duration-300 hover:-translate-x-1"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                animation: `fadeSlideIn 0.3s ease ${index * 0.1}s both`
              }}
            >
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  text-white rounded-full w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] mt-[5px] 
                  flex items-center justify-center no-underline 
                  transition-all duration-300 ease-in-out
                  hover:shadow-lg hover:shadow-black/20
                  ${isHovered ? 'scale-110' : ''}
                  ${link.href.includes('whatsapp') ? 'bg-[#31d642]' : ''}
                  ${link.href.includes('instagram') ? 'bg-[radial-gradient(circle_at_30%_107%,#fdf497_0%,#fdf497_5%,#fd5949_45%,#d6249f_60%,#285AEB_90%)]' : ''}
                  ${link.href.includes('youtube') ? 'bg-[#ff403a]' : ''}
                  ${link.href.includes('tiktok') ? 'bg-[#000000]' : ''}
                `}
                style={{
                  transform: isHovered ? 'scale(1.1)' : 'scale(1)',
                  boxShadow: isHovered ? '0 4px 10px rgba(0,0,0,0.25)' : 'none'
                }}
              >
                <IconComponent 
                  className={`
                    w-4 h-4 sm:w-6 sm:h-6 
                    transition-all duration-300 
                    ${isHovered ? 'animate-pulse scale-110' : ''}
                  `} 
                />
              </a>
            </li>
          );
        })}
      </ul>

      {/* Add global styles for animations */}
      <style jsx>{`
        @keyframes fadeSlideIn {
          from {
            opacity: 0;
            transform: translateX(10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-5px);
          }
          100% {
            transform: translateY(0px);
          }
        }
      `}</style>
    </div>
  );
};


// Contact information
const contactInfo = {
  phone: "+993 61 64 09 21",
  email: "altyngaya2008@gmail.com",
  address: "г. Мары, ул. Шаджахан, 22, велаят Мары, Туркменистан"
};

// Component for smooth element appearance
const FadeInView = ({ children, delay = 0, className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        observer.unobserve(domRef.current);
      }
    });
    
    observer.observe(domRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={domRef}
      className={`${className} transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default function Page() {
  
  return (
    <div className="min-h-screen overflow-hidden">
      <SocialMediaIcons />
      <HeroSection />
      <AdvancedWaveSeparator 
        color="#1E22AA" 
        secondaryColor="#3D41CC"
        height={120} 
        animationSpeed={8}
        complexity={1}
        layers={3}
      />
      <ProductCarousel />

      <AboutCompanySection />
      

    {/* НАШИ ПРЕИМУЩЕСТВА - Redesigned to match previous sections' style */}
  <section className="py-24 bg-white relative overflow-hidden">
    {/* Background decoration */}
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-radial from-[#fb4b06]/5 to-transparent rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-radial from-[#1E22AA]/5 to-transparent rounded-full"></div>
    </div>
    
    <div className="container mx-auto px-4 relative z-10">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <FadeInView>
          <div className="inline-block mb-4 bg-[#fb4b06]/10 rounded-full px-6 py-2">
            <span className="text-[#fb4b06] text-sm font-medium uppercase tracking-wider">Почему выбирают нас</span>
          </div>
          <h2 className="text-5xl font-bold text-[#1E22AA] mb-6 leading-tight" style={{ fontFamily: '"Avenir Next Heavy", sans-serif' }}>
            НАШИ <span className="text-[#fb4b06]">ПРЕИМУЩЕСТВА</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Мы стремимся к совершенству на всех этапах производства и доставки нашей продукции, 
            гарантируя удовлетворение потребностей даже самых требовательных клиентов.
          </p>
        </FadeInView>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Advantage 1 */}
        <FadeInView delay={100}>
          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
            <div className="border-b border-gray-100 p-6">
              <div className="w-12 h-12 bg-[#fb4b06]/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#fb4b06] transition-colors duration-300">
                <span className="text-xl font-bold text-[#fb4b06] group-hover:text-white transition-colors">1</span>
              </div>
              <h3 className="text-2xl font-bold text-[#1E22AA] mb-4">Высокое качество</h3>
              <p className="text-gray-600 leading-relaxed">
                Мы используем только экологически чистые материалы и современное оборудование, 
                обеспечивая превосходное качество нашей продукции.
              </p>
            </div>
            <div className="p-6 bg-gray-50">
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-[#fb4b06]/10 flex items-center justify-center mr-3">
                    <Check className="w-3 h-3 text-[#fb4b06]" />
                  </div>
                  <span className="text-gray-700">Сертифицированное производство</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-[#fb4b06]/10 flex items-center justify-center mr-3">
                    <Check className="w-3 h-3 text-[#fb4b06]" />
                  </div>
                  <span className="text-gray-700">Многоуровневый контроль</span>
                </div>
              </div>
            </div>
          </div>
        </FadeInView>
        
        {/* Advantage 2 */}
        <FadeInView delay={200}>
          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
            <div className="border-b border-gray-100 p-6">
              <div className="w-12 h-12 bg-[#fb4b06]/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#fb4b06] transition-colors duration-300">
                <span className="text-xl font-bold text-[#fb4b06] group-hover:text-white transition-colors">2</span>
              </div>
              <h3 className="text-2xl font-bold text-[#1E22AA] mb-4">Доступные цены</h3>
              <p className="text-gray-600 leading-relaxed">
                Благодаря оптимизации производства и прямым поставкам, 
                мы предлагаем конкурентные цены без потери качества.
              </p>
            </div>
            <div className="p-6 bg-gray-50">
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-[#fb4b06]/10 flex items-center justify-center mr-3">
                    <Check className="w-3 h-3 text-[#fb4b06]" />
                  </div>
                  <span className="text-gray-700">Гибкая система скидок</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-[#fb4b06]/10 flex items-center justify-center mr-3">
                    <Check className="w-3 h-3 text-[#fb4b06]" />
                  </div>
                  <span className="text-gray-700">Специальные условия для оптовиков</span>
                </div>
              </div>
            </div>
          </div>
        </FadeInView>
        
        {/* Advantage 3 */}
        <FadeInView delay={300}>
          <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
            <div className="border-b border-gray-100 p-6">
              <div className="w-12 h-12 bg-[#fb4b06]/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#fb4b06] transition-colors duration-300">
                <span className="text-xl font-bold text-[#fb4b06] group-hover:text-white transition-colors">3</span>
              </div>
              <h3 className="text-2xl font-bold text-[#1E22AA] mb-4">Надежные поставки</h3>
              <p className="text-gray-600 leading-relaxed">
                Оперативная логистика и строгое соблюдение сроков доставки 
                делают нас надежным партнером для наших клиентов.
              </p>
            </div>
            <div className="p-6 bg-gray-50">
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-[#fb4b06]/10 flex items-center justify-center mr-3">
                    <Check className="w-3 h-3 text-[#fb4b06]" />
                  </div>
                  <span className="text-gray-700">Всегда в срок</span>
                </div>
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full bg-[#fb4b06]/10 flex items-center justify-center mr-3">
                    <Check className="w-3 h-3 text-[#fb4b06]" />
                  </div>
                  <span className="text-gray-700">Доставка по всему Туркменистану и России</span>
                </div>
              </div>
            </div>
          </div>
        </FadeInView>
      </div>
      
      {/* Stats section */}
      <FadeInView delay={400}>
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Stat 1 */}
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 group hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-[#fb4b06] to-[#E85D24] rounded-full flex items-center justify-center mb-4 shadow-lg shadow-[#fb4b06]/20 group-hover:shadow-[#fb4b06]/30 group-hover:scale-110 transition-all">
              <Calendar className="w-8 h-8 text-white" />
            </div>
            <div className="text-4xl font-bold text-[#1E22AA] mb-2">15+</div>
            <div className="text-gray-600">лет на рынке</div>
          </div>
          
          {/* Stat 2 */}
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 group hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-[#1E22AA] to-[#1E22AA]/80 rounded-full flex items-center justify-center mb-4 shadow-lg shadow-[#1E22AA]/20 group-hover:shadow-[#1E22AA]/30 group-hover:scale-110 transition-all">
              <Users className="w-8 h-8 text-white" />
            </div>
            <div className="text-4xl font-bold text-[#1E22AA] mb-2">1000+</div>
            <div className="text-gray-600">довольных клиентов</div>
          </div>
          
          {/* Stat 3 */}
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 group hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-[#fb4b06] to-[#E85D24] rounded-full flex items-center justify-center mb-4 shadow-lg shadow-[#fb4b06]/20 group-hover:shadow-[#fb4b06]/30 group-hover:scale-110 transition-all">
              <UserCheck className="w-8 h-8 text-white" />
            </div>
            <div className="text-4xl font-bold text-[#1E22AA] mb-2">25+</div>
            <div className="text-gray-600">профессионалов в команде</div>
          </div>
          
          {/* Stat 4 */}
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 group hover:shadow-xl transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-[#1E22AA] to-[#1E22AA]/80 rounded-full flex items-center justify-center mb-4 shadow-lg shadow-[#1E22AA]/20 group-hover:shadow-[#1E22AA]/30 group-hover:scale-110 transition-all">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <div className="text-4xl font-bold text-[#1E22AA] mb-2">100%</div>
            <div className="text-gray-600">гарантия качества</div>
          </div>
        </div>
      </FadeInView>
      
      {/* CTA Button */}
      <FadeInView delay={500}>
        <div className="mt-16 text-center">
          <button className="relative overflow-hidden group bg-gradient-to-r from-[#fb4b06] to-[#E85D24] hover:from-[#E85D24] hover:to-[#fb4b06] text-white px-10 py-5 text-xl rounded-full font-semibold shadow-lg shadow-[#fb4b06]/20 hover:shadow-[#fb4b06]/40 transition-all">
            <span className="relative z-10 flex items-center gap-3">
              УЗНАТЬ БОЛЬШЕ О НАШЕЙ ПРОДУКЦИИ
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </span>
          </button>
        </div>
      </FadeInView>
    </div>
  </section>


      <ProcessSection />

      {/* Contact section */}
      <section className="py-24 bg-gradient-to-r from-[#1E22AA] to-[#1E22AA]/90 relative overflow-hidden">

        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-[#fb4b06]/20 blur-3xl"></div>
          <div className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-[#fb4b06]/10 blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <FadeInView>
                <div className="inline-block mb-4 bg-white/10 backdrop-blur-sm rounded-full px-6 py-2">
                  <span className="text-white text-sm font-medium uppercase tracking-wider">Свяжитесь с нами</span>
                </div>
                <h2 className="text-5xl font-bold text-white mb-8 leading-tight" style={{ fontFamily: '"Avenir Next Heavy", sans-serif' }}>
                  ОСТАЛИСЬ <span className="text-[#fb4b06]">ВОПРОСЫ?</span>
                </h2>
                <p className="text-xl text-white/90 leading-relaxed mb-12">
                  Наши специалисты готовы ответить на все ваши вопросы о продукции и условиях сотрудничества. Заполните форму или свяжитесь с нами любым удобным способом.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-center group">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mr-4 group-hover:bg-[#fb4b06] transition-colors duration-300">
                      <Phone className="text-white w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-white/70 text-sm">Телефон</p>
                      <p className="text-white font-medium">{contactInfo.phone}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center group">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mr-4 group-hover:bg-[#fb4b06] transition-colors duration-300">
                      <Mail className="text-white w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-white/70 text-sm">Email</p>
                      <p className="text-white font-medium">{contactInfo.email}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center group">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mr-4 group-hover:bg-[#fb4b06] transition-colors duration-300">
                      <MapPin className="text-white w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-white/70 text-sm">Адрес</p>
                      <p className="text-white font-medium">{contactInfo.address}</p>
                    </div>
                  </div>
                </div>
              </FadeInView>
            </div>
            
            <FadeInView delay={300}>
              <div className="bg-white rounded-2xl p-8 shadow-2xl">
                <h3 className="text-2xl font-bold text-[#1E22AA] mb-6">Отправить сообщение</h3>
                
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Ваше имя
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#fb4b06] focus:border-[#fb4b06] outline-none transition-colors"
                      placeholder="Введите ваше имя"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#fb4b06] focus:border-[#fb4b06] outline-none transition-colors"
                      placeholder="Введите ваш email"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Сообщение
                    </label>
                    <textarea
                      id="message"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#fb4b06] focus:border-[#fb4b06] outline-none transition-colors"
                      placeholder="Введите ваше сообщение"
                    ></textarea>
                  </div>
                  
                  <Button className="w-full bg-gradient-to-r from-[#1E22AA] to-[#1E22AA]/90 hover:from-[#fb4b06] hover:to-[#E85D24] rounded-full text-white px-8 py-8 text-md font-semibold transition-all duration-300">
                    Отправить сообщение
                  </Button>
                </form>
              </div>
            </FadeInView>
          </div>
        </div>
      </section>

      <FAQSection />
    </div>
  );
}