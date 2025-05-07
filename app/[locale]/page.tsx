'use client';
import { useState } from "react";
import ProcessSection from "./components/ProcessSection";
import ProductCarousel from "./components/ProductCarousel";
import AboutCompanySection from "./components/AboutCompanySection";
import HeroSection from "./components/HeroSection";
import FAQSection from "./components/FAQSection";
import AdvancedWaveSeparator from "./components/BrushWaveSeparator";
import { FaInstagram, FaYoutube, FaTiktok, FaWhatsapp } from 'react-icons/fa';
import AdvantagesSection from "./components/AdvantagesSection";
import ContactSection from "./components/ContactSection";
import { useTranslations } from "next-intl";

interface SocialLink {
  href: string;
  icon: React.ElementType;
}

const socialLinks: SocialLink[] = [
  { href: 'https://wa.me/99361640921', icon: FaWhatsapp },
  { href: 'https://www.tiktok.com/@altyngaya.tm', icon: FaTiktok },
  { href: 'https://www.instagram.com/altyngaya.tm/', icon: FaInstagram },
  { href: 'https://www.youtube.com/@altyngaya4738', icon: FaYoutube },
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
                  ${link.href.includes('wa.me') ? 'bg-[#36f149]' : ''}
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



export default function Page() {

  const t = useTranslations();

// Contact information
const contactInfo = {
  phone: "+993 61 64 09 21",
  email: "altyngaya2008@gmail.com",
  address: t("contactSection.address")
};
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

      <ProcessSection />

      <ContactSection contactInfo={contactInfo} />


      <AdvancedWaveSeparator
        color="#1E22AA"
        secondaryColor="#3D41CC"
        height={100}
        animationSpeed={14}
        complexity={3}
        layers={3}
      />

      <AdvantagesSection />

      <FAQSection />
    </div>
  );
}
