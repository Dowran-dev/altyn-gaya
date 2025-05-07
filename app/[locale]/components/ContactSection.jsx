"use client";
import { useState, useEffect, useRef } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { useTranslations } from "next-intl";

// FadeInView component implementation
const FadeInView = ({ children, delay = 0, className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      // If the element is visible
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        // No need to keep observing after element is visible
        observer.unobserve(domRef.current);
      }
    });

    observer.observe(domRef.current);

    return () => {
      if (domRef.current) {
        observer.unobserve(domRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={domRef}
      className={`transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

// Floating Balloon Animation Component
const FloatingBalloon = ({
  color,
  darkColor,
  size,
  top,
  left,
  duration,
  delay,
}) => {
  return (
    <div
      className="absolute rounded-full bg-opacity-10 blur-lg animate-pulse dark:bg-opacity-15"
      style={{
        background: `radial-gradient(circle at center, ${color}40, ${color}10)`,
        "--tw-dark-background": `radial-gradient(circle at center, ${
          darkColor || color
        }50, ${darkColor || color}20)`,
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

// Main component
const ContactSection = ({ contactInfo }) => {
  const t = useTranslations();

  // Define colors for consistent use
  const primaryColor = "#1E22AA";
  const secondaryColor = "#fb4b06";
  const accentColor = "#E85D24";
  // Dark mode variants
  const primaryColorDark = "#4b4edd"; // Lighter blue for dark mode
  const secondaryColorDark = "#ff6a2c"; // Brighter orange for dark mode
  const accentColorDark = "#ff7a40"; // Brighter accent for dark mode

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus({
          type: "success",
          message: t("contactSection.successMessage"),
        });
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        const { error } = await res.json();
        setStatus({
          type: "error",
          message: error || t("contactSection.errorMessage"),
        });
      }
    } catch (error) {
      setStatus({
        type: "error",
        message: t("contactSection.errorMessage"),
      });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setStatus(null), 5000);
    }
  };

  // Array of balloons with different properties
  const balloons = [
    {
      color: primaryColor,
      darkColor: primaryColorDark,
      size: 180,
      top: 10,
      left: 5,
      duration: 20,
      delay: 0,
    },
    {
      color: secondaryColor,
      darkColor: secondaryColorDark,
      size: 150,
      top: 70,
      left: 80,
      duration: 25,
      delay: 2,
    },
    {
      color: primaryColor,
      darkColor: primaryColorDark,
      size: 120,
      top: 30,
      left: 85,
      duration: 18,
      delay: 1,
    },
    {
      color: secondaryColor,
      darkColor: secondaryColorDark,
      size: 200,
      top: 60,
      left: 15,
      duration: 22,
      delay: 3,
    },
    {
      color: primaryColor,
      darkColor: primaryColorDark,
      size: 160,
      top: 15,
      left: 40,
      duration: 24,
      delay: 4,
    },
    {
      color: secondaryColor,
      darkColor: secondaryColorDark,
      size: 140,
      top: 80,
      left: 60,
      duration: 19,
      delay: 2.5,
    },
  ];

  // CSS for balloon animation
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
      
      @media (prefers-color-scheme: dark) {
        .dark .absolute.rounded-full.bg-opacity-10.blur-lg.animate-pulse {
          background: var(--tw-dark-background) !important;
        }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      {/* Background balloons */}
      <div className="absolute inset-0 overflow-hidden">
        {balloons.map((balloon, index) => (
          <FloatingBalloon
            key={index}
            color={balloon.color}
            darkColor={balloon.darkColor}
            size={balloon.size}
            top={balloon.top}
            left={balloon.left}
            duration={balloon.duration}
            delay={balloon.delay}
          />
        ))}

        {/* Original background elements with dark mode support */}
        <div
          className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-opacity-5 dark:bg-opacity-10"
          style={{ backgroundColor: `${primaryColor}10` }}
        ></div>
        <div
          className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-opacity-5 dark:bg-opacity-10"
          style={{ backgroundColor: `${secondaryColor}10` }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <FadeInView>
            <div className="space-y-8">
              <div>
                <div
                  className="inline-block mb-4 rounded-full px-6 py-2 dark:bg-[#fb4b06]/20"
                  style={{ backgroundColor: `${secondaryColor}10` }}
                >
                  <span className="text-sm font-medium uppercase tracking-wider text-[#fb4b06] dark:text-[#ff6a2c]">
                    {t("contactSection.title")}
                  </span>
                </div>
                <h2
                  className="text-5xl font-bold mb-6 leading-tight text-[#1E22AA] dark:text-blue-400"
                  style={{
                    fontFamily: '"Avenir Next Heavy", sans-serif',
                  }}
                >
                  {t("contactSection.title1")}{" "}
                  <span className="text-[#fb4b06] dark:text-orange-500">
                    {t("contactSection.title2")}
                  </span>
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                  {t("contactSection.description")}
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center group">
                  <div className="w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-lg border border-gray-100 dark:border-gray-700 flex items-center justify-center mr-4 group-hover:bg-[#fb4b06] dark:group-hover:bg-[#ff6a2c] transition-colors">
                    <Phone className="w-5 h-5 text-[#fb4b06] dark:text-[#ff6a2c] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <div className="text-gray-500 dark:text-gray-400 text-sm mb-1">
                      {t("contactSection.phoneLabel")}
                    </div>
                    <div className="text-lg font-semibold text-[#1E22AA] dark:text-blue-400">
                      {contactInfo.phone}
                    </div>
                  </div>
                </div>

                <div className="flex items-center group">
                  <div className="w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-lg border border-gray-100 dark:border-gray-700 flex items-center justify-center mr-4 group-hover:bg-[#fb4b06] dark:group-hover:bg-[#ff6a2c] transition-colors">
                    <Mail className="w-5 h-5 text-[#fb4b06] dark:text-[#ff6a2c] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <div className="text-gray-500 dark:text-gray-400 text-sm mb-1">
                      Email
                    </div>
                    <div className="text-lg font-semibold text-[#1E22AA] dark:text-blue-400">
                      {contactInfo.email}
                    </div>
                  </div>
                </div>

                <div className="flex items-center group">
                  <div className="w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-lg border border-gray-100 dark:border-gray-700 flex items-center justify-center mr-4 group-hover:bg-[#fb4b06] dark:group-hover:bg-[#ff6a2c] transition-colors">
                    <MapPin className="w-5 h-5 text-[#fb4b06] dark:text-[#ff6a2c] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <div className="text-gray-500 dark:text-gray-400 text-sm mb-1">
                      {t("contactSection.addressLabel")}
                    </div>
                    <div className="text-lg font-semibold text-[#1E22AA] dark:text-blue-400">
                      {contactInfo.address}
                    </div>
                  </div>
                </div>
              </div>

              {/* <div className="pt-6">
                <button
                  className="text-white rounded-full px-10 py-5 text-xl font-bold shadow-lg transition-all duration-500 flex items-center gap-3 bg-gradient-to-r from-[#1E22AA] to-[#1E22AADD] dark:from-[#4b4edd] dark:to-[#4b4eddDD] hover:from-[#fb4b06] hover:to-[#E85D24] dark:hover:from-[#ff6a2c] dark:hover:to-[#ff7a40]"
                  style={{
                    background: `linear-gradient(to right, ${primaryColor}, ${primaryColor}DD)`,
                    boxShadow: `0 10px 15px -3px ${primaryColor}33`,
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.background = `linear-gradient(to right, ${secondaryColor}, ${accentColor})`;
                    e.currentTarget.style.boxShadow = `0 10px 15px -3px ${secondaryColor}4D`;
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.background = `linear-gradient(to right, ${primaryColor}, ${primaryColor}DD)`;
                    e.currentTarget.style.boxShadow = `0 10px 15px -3px ${primaryColor}33`;
                  }}
                >
                  <span>Связаться с нами</span>
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </button>
              </div> */}
            </div>
          </FadeInView>

          <FadeInView delay={300}>
            <div className="relative">
              <div
                className="absolute -inset-4 rounded-2xl blur-xl opacity-20 animate-pulse dark:opacity-30"
                style={{
                  background: `linear-gradient(to right, ${primaryColor}, ${secondaryColor})`,
                }}
              ></div>
              <div className="relative p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-700">
                <h3 className="text-2xl font-bold mb-6 text-[#1E22AA] dark:text-blue-400">
                  {t("contactSection.sendMessage")}
                </h3>

                <form className="space-y-4" onSubmit={handleSubmit}>
                  {status && (
                    <div
                      className={`p-3 rounded-lg text-sm font-medium ${
                        status.type === "success"
                          ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300"
                          : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300"
                      }`}
                    >
                      {status.message}
                    </div>
                  )}

                  <div>
                    <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
                      {t("contactSection.yourName")}
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                      placeholder={t("contactSection.yourName")}
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                      placeholder={t("contactSection.emailPlaceholder")}
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
                      {t("contactSection.phoneLabel")}
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                      placeholder={t("contactSection.phonePlaceholder")}
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
                      {t("contactSection.messageLabel")}
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white min-h-[120px]"
                      placeholder={t("contactSection.messagePlaceholder")}
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full text-white rounded-full py-4 text-lg font-semibold shadow-lg transition-all duration-500 bg-gradient-to-r from-[#fb4b06] to-[#E85D24] dark:from-[#ff6a2c] dark:to-[#ff7a40] hover:from-[#E85D24] hover:to-[#fb4b06] dark:hover:from-[#ff7a40] dark:hover:to-[#ff6a2c]"
                    style={{
                      boxShadow: `0 10px 15px -3px ${secondaryColor}33`,
                    }}
                  >
                    {isSubmitting
                      ? t("contactSection.sendingMessage")
                      : t("contactSection.submitMessage")}
                  </button>
                </form>
              </div>
            </div>
          </FadeInView>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
