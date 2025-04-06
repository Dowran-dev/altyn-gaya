'use client';
import { useState, useEffect } from "react";
import { Phone, Mail, MapPin } from "lucide-react"
import Link from "next/link";

interface ProductSize {
  id: number;
  name: string;
  quantity: string;
  price: string;
}

interface ProductReview {
  id: number;
  author: string;
  date: string;
  rating: number;
  title: string;
  content: string;
}

interface Products {
  id: number;
  name: string;
  subtitle: string;
  fullTitle: string;
  description: string;
  longDescription: string;
  image: string;
  color: string;
  brandName: string;
  category: string;
  features: string[];
  directions: string[];
  rating: number;
  reviews: number;
  badge: string;
  sizes: ProductSize[];
  reviewsList: ProductReview[];
}

export default function Footer() {

  const [categories, setCategories] = useState<string[]>([]);

    // Contact information
  const contactInfo = {
    phone: "+993 61 64 09 21",
    email: "altyngaya2008@gmail.com",
    address: "г. Мары, ул. Шаджахан, 22, велаят Мары, Туркменистан"
  };

  // Fetch categories from the API - similar to Header component
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch("/api/products", {
          cache: "no-store",
        });
        if (!res.ok) {
          throw new Error("Failed to fetch categories");
        }
        const data = await res.json();
        
        // Extract unique categories with proper typing
        const uniqueCategories = Array.from(
          new Set(data.map((item: Products) => item.category))
        ) as string[];
        setCategories(uniqueCategories.slice(0, 5)); // Show up to 6 categories
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <>
        {/* Footer */}
        <div className="bg-[#0a0d42] py-4">
          <div className="container mx-auto px-4">
            {/* <div className="flex items-center gap-4">
              <span className="text-white font-bold text-lg" style={{ fontFamily: '"Avenir Next Heavy", sans-serif' }}>Способы связи с нами:</span>
              <div className="flex gap-4">
                <a href="#" className="text-white hover:opacity-80">
                  <div className="bg-[#0a0d42] rounded-full p-2">
                    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </div>
                </a>
                <a href="#" className="text-white hover:opacity-80">
                  <div className="bg-[#0a0d42] rounded-full p-2">
                  
                  </div>
                </a>
                <a href="#" className="text-white hover:opacity-80">
                  <div className="bg-[#0a0d42] rounded-full p-2">
                    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </div>
                </a>
              </div>
            </div> */}
          </div>
        </div>
      <footer className="bg-[#0a0d42] py-12 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-6">О компании</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-white/70 hover:text-[#fb4b06] transition-colors">История</a></li>
                <li><a href="#" className="text-white/70 hover:text-[#fb4b06] transition-colors">Миссия и ценности</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-bold mb-6">Продукция</h4>
              <ul className="space-y-3">
                {/* Dynamically generated category links */}
                {categories.length > 0 ? (
                  categories.map((category, idx) => (
                    <li key={idx}>
                      <Link 
                        href={{
                          pathname: '/shop',
                          query: { category: category }
                        }}
                        className="text-white/70 hover:text-[#fb4b06] transition-colors"
                      >
                        {category}
                      </Link>
                    </li>
                  ))
                ) : (
                  <li className="text-white/50">Загрузка...</li>
                )}
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-6">Информация</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-white/70 hover:text-[#fb4b06] transition-colors">Новости</a></li>
                <li><a href="#" className="text-white/70 hover:text-[#fb4b06] transition-colors">FAQ</a></li>
                <li><a href="#" className="text-white/70 hover:text-[#fb4b06] transition-colors">Контакты</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-bold mb-6">Контакты</h4>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Phone className="w-4 h-4 text-[#fb4b06] mr-2" />
                  <span className="text-white/70">{contactInfo.phone}</span>
                </li>
                <li className="flex items-center">
                  <Mail className="w-4 h-4 text-[#fb4b06] mr-2" />
                  <span className="text-white/70">{contactInfo.email}</span>
                </li>
                <li className="flex items-center">
                  <MapPin className="w-4 h-4 text-[#fb4b06] mr-2" />
                  <span className="text-white/70">{contactInfo.address}</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/50 text-sm mb-4 md:mb-0">
              © 2025 Altyn Gaya. Все права защищены.
            </p>
            
            <div className="flex space-x-6">
              <a href="#" className="text-white/50 hover:text-[#fb4b06] transition-colors">Политика конфиденциальности</a>
              <a href="#" className="text-white/50 hover:text-[#fb4b06] transition-colors">Условия использования</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}