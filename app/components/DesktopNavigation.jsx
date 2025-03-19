import React from "react";
import Link from "next/link";
import {
  Home,
  ShoppingBag,
  ChevronRight,
  HelpCircle,
  Info,
  MessageSquare,
  MapPin,
  Phone,
} from "lucide-react";

export default function DesktopNavigation({ currentCategory }) {
  return (
    <div className="hidden lg:block bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          {/* Navigation Links */}
          <ul className="flex items-center space-x-10">
            {[
              { href: "/", icon: Home, label: "Главная" },
              { href: "/shop", icon: ShoppingBag, label: "Магазин" },
              { href: "/whats-new", icon: ChevronRight, label: "Что нового" },
              { href: "/faq", icon: HelpCircle, label: "FAQ" },
              { href: "/about-us", icon: Info, label: "О компании" },
              { href: "/contacts", icon: MessageSquare, label: "Контакты" },
            ].map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  className="group flex items-center py-2 px-1 text-sm font-semibold text-gray-700 dark:text-gray-200 hover:text-[#fb4b06] dark:hover:text-[#fb4b06] transition-colors duration-200 relative"
                >
                  <item.icon className="w-4 h-4 mr-2 text-gray-500 dark:text-gray-400 group-hover:text-[#fb4b06] transition-colors duration-200" />
                  <span>{item.label}</span>
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#fb4b06] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Right Section - Contact and Store Locator */}
          <div className="flex items-center space-x-8">
            <a
              href="tel:+77471234567"
              className="flex items-center text-gray-700 dark:text-gray-200 hover:text-[#fb4b06] dark:hover:text-[#fb4b06] transition-colors duration-200"
            >
              <Phone className="w-4 h-4 mr-2 text-[#fb4b06]" />
              <span className="text-sm font-medium">+7 (747) 123-45-67</span>
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
}
