// import { useState, useEffect, useRef } from "react";
// import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";

// // FadeInView component implementation
// const FadeInView = ({ children, delay = 0, className = "" }) => {
//   const [isVisible, setIsVisible] = useState(false);
//   const domRef = useRef();

//   useEffect(() => {
//     const observer = new IntersectionObserver((entries) => {
//       // If the element is visible
//       if (entries[0].isIntersecting) {
//         setIsVisible(true);
//         // No need to keep observing after element is visible
//         observer.unobserve(domRef.current);
//       }
//     });

//     observer.observe(domRef.current);

//     return () => {
//       if (domRef.current) {
//         observer.unobserve(domRef.current);
//       }
//     };
//   }, []);

//   return (
//     <div
//       ref={domRef}
//       className={`transition-opacity duration-1000 ${
//         isVisible ? "opacity-100" : "opacity-0"
//       } ${className}`}
//       style={{ transitionDelay: `${delay}ms` }}
//     >
//       {children}
//     </div>
//   );
// };

// // Floating Balloon Animation Component
// const FloatingBalloon = ({ color, size, top, left, duration, delay }) => {
//   return (
//     <div
//       className="absolute rounded-full bg-opacity-10 blur-lg animate-pulse"
//       style={{
//         background: `radial-gradient(circle at center, ${color}40, ${color}10)`,
//         width: `${size}px`,
//         height: `${size}px`,
//         top: `${top}%`,
//         left: `${left}%`,
//         animation: `float ${duration}s ease-in-out infinite ${delay}s, pulse ${
//           duration * 0.7
//         }s ease-in-out infinite ${delay * 1.3}s`,
//       }}
//     ></div>
//   );
// };

// // Main component
// const ContactSection = ({ contactInfo }) => {
//   // Define colors for consistent use
//   const primaryColor = "#1E22AA";
//   const secondaryColor = "#fb4b06";
//   const accentColor = "#E85D24";
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     message: "",
//   });
//   // const [status, setStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
//   const [status, setStatus] = useState(null);
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     try {
//       const res = await fetch("/api/contact", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       if (res.ok) {
//         setStatus({
//           type: "success",
//           message: "Сообщение успешно отправлено!",
//         });
//         setFormData({ name: "", email: "", phone: "", message: "" });
//       } else {
//         const { error } = await res.json();
//         setStatus({ type: "error", message: error || "Ошибка при отправке" });
//       }
//     } catch (error) {
//       setStatus({
//         type: "error",
//         message: "Сетевая ошибка. Попробуйте позже.",
//       });
//     } finally {
//       setIsSubmitting(false);
//       setTimeout(() => setStatus(null), 5000);
//     }
//   };

//   // Array of balloons with different properties
//   const balloons = [
//     {
//       color: primaryColor,
//       size: 180,
//       top: 10,
//       left: 5,
//       duration: 20,
//       delay: 0,
//     },
//     {
//       color: secondaryColor,
//       size: 150,
//       top: 70,
//       left: 80,
//       duration: 25,
//       delay: 2,
//     },
//     {
//       color: primaryColor,
//       size: 120,
//       top: 30,
//       left: 85,
//       duration: 18,
//       delay: 1,
//     },
//     {
//       color: secondaryColor,
//       size: 200,
//       top: 60,
//       left: 15,
//       duration: 22,
//       delay: 3,
//     },
//     {
//       color: primaryColor,
//       size: 160,
//       top: 15,
//       left: 40,
//       duration: 24,
//       delay: 4,
//     },
//     {
//       color: secondaryColor,
//       size: 140,
//       top: 80,
//       left: 60,
//       duration: 19,
//       delay: 2.5,
//     },
//   ];

//   // CSS for balloon animation
//   useEffect(() => {
//     const style = document.createElement("style");
//     style.textContent = `
//       @keyframes float {
//         0% { transform: translate(0, 0) rotate(0deg); }
//         25% { transform: translate(10px, -15px) rotate(5deg); }
//         50% { transform: translate(-5px, 10px) rotate(-5deg); }
//         75% { transform: translate(-15px, -10px) rotate(3deg); }
//         100% { transform: translate(0, 0) rotate(0deg); }
//       }

//       @keyframes pulse {
//         0% { opacity: 0.1; }
//         50% { opacity: 0.2; }
//         100% { opacity: 0.1; }
//       }
//     `;
//     document.head.appendChild(style);

//     return () => {
//       document.head.removeChild(style);
//     };
//   }, []);

//   return (
//     <section className="py-24 bg-gray-50 relative overflow-hidden">
//       {/* Background balloons */}
//       <div className="absolute inset-0 overflow-hidden">
//         {balloons.map((balloon, index) => (
//           <FloatingBalloon
//             key={index}
//             color={balloon.color}
//             size={balloon.size}
//             top={balloon.top}
//             left={balloon.left}
//             duration={balloon.duration}
//             delay={balloon.delay}
//           />
//         ))}

//         {/* Original background elements */}
//         <div
//           className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-opacity-5"
//           style={{ backgroundColor: `${primaryColor}10` }}
//         ></div>
//         <div
//           className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-opacity-5"
//           style={{ backgroundColor: `${secondaryColor}10` }}
//         ></div>
//       </div>

//       <div className="container mx-auto px-4 relative z-10">
//         <div className="grid md:grid-cols-2 gap-16 items-center">
//           <FadeInView>
//             <div className="space-y-8">
//               <div>
//                 <div
//                   className="inline-block mb-4 rounded-full px-6 py-2"
//                   style={{ backgroundColor: `${secondaryColor}10` }}
//                 >
//                   <span
//                     className="text-sm font-medium uppercase tracking-wider"
//                     style={{ color: secondaryColor }}
//                   >
//                     Наши контакты
//                   </span>
//                 </div>
//                 <h2
//                   className="text-5xl font-bold mb-6 leading-tight"
//                   style={{
//                     fontFamily: '"Avenir Next Heavy", sans-serif',
//                     color: primaryColor,
//                   }}
//                 >
//                   СВЯЖИТЕСЬ С{" "}
//                   <span style={{ color: secondaryColor }}>НАМИ</span>
//                 </h2>
//                 <p className="text-xl text-gray-600 leading-relaxed">
//                   Мы всегда открыты для сотрудничества и готовы ответить на все
//                   ваши вопросы. Наши специалисты проконсультируют вас по любому
//                   вопросу, связанному с нашей продукцией.
//                 </p>
//               </div>

//               <div className="space-y-6">
//                 <div className="flex items-center group">
//                   <div
//                     className="w-12 h-12 rounded-full bg-white shadow-lg border border-gray-100 flex items-center justify-center mr-4 group-hover:bg-opacity-100 transition-colors"
//                     style={{
//                       backgroundColor: "white",
//                       "--tw-group-hover-bg-opacity": "1",
//                       "--tw-group-hover-bg": secondaryColor,
//                     }}
//                   >
//                     <Phone
//                       className="w-5 h-5 group-hover:text-white transition-colors"
//                       style={{ color: secondaryColor }}
//                     />
//                   </div>
//                   <div>
//                     <div className="text-gray-500 text-sm mb-1">Телефон</div>
//                     <div
//                       className="text-lg font-semibold"
//                       style={{ color: primaryColor }}
//                     >
//                       {contactInfo.phone}
//                     </div>
//                   </div>
//                 </div>

//                 <div className="flex items-center group">
//                   <div
//                     className="w-12 h-12 rounded-full bg-white shadow-lg border border-gray-100 flex items-center justify-center mr-4 group-hover:bg-opacity-100 transition-colors"
//                     style={{
//                       backgroundColor: "white",
//                       "--tw-group-hover-bg-opacity": "1",
//                       "--tw-group-hover-bg": secondaryColor,
//                     }}
//                   >
//                     <Mail
//                       className="w-5 h-5 group-hover:text-white transition-colors"
//                       style={{ color: secondaryColor }}
//                     />
//                   </div>
//                   <div>
//                     <div className="text-gray-500 text-sm mb-1">Email</div>
//                     <div
//                       className="text-lg font-semibold"
//                       style={{ color: primaryColor }}
//                     >
//                       {contactInfo.email}
//                     </div>
//                   </div>
//                 </div>

//                 <div className="flex items-center group">
//                   <div
//                     className="w-12 h-12 rounded-full bg-white shadow-lg border border-gray-100 flex items-center justify-center mr-4 group-hover:bg-opacity-100 transition-colors"
//                     style={{
//                       backgroundColor: "white",
//                       "--tw-group-hover-bg-opacity": "1",
//                       "--tw-group-hover-bg": secondaryColor,
//                     }}
//                   >
//                     <MapPin
//                       className="w-5 h-5 group-hover:text-white transition-colors"
//                       style={{ color: secondaryColor }}
//                     />
//                   </div>
//                   <div>
//                     <div className="text-gray-500 text-sm mb-1">Адрес</div>
//                     <div
//                       className="text-lg font-semibold"
//                       style={{ color: primaryColor }}
//                     >
//                       {contactInfo.address}
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div className="pt-6">
//                 <button
//                   className="text-white rounded-full px-10 py-5 text-xl font-bold shadow-lg transition-all duration-500 flex items-center gap-3"
//                   style={{
//                     background: `linear-gradient(to right, ${primaryColor}, ${primaryColor}DD)`,
//                     boxShadow: `0 10px 15px -3px ${primaryColor}33`,
//                   }}
//                   onMouseOver={(e) => {
//                     e.currentTarget.style.background = `linear-gradient(to right, ${secondaryColor}, ${accentColor})`;
//                     e.currentTarget.style.boxShadow = `0 10px 15px -3px ${secondaryColor}4D`;
//                   }}
//                   onMouseOut={(e) => {
//                     e.currentTarget.style.background = `linear-gradient(to right, ${primaryColor}, ${primaryColor}DD)`;
//                     e.currentTarget.style.boxShadow = `0 10px 15px -3px ${primaryColor}33`;
//                   }}
//                 >
//                   <span>Связаться с нами</span>
//                   <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
//                 </button>
//               </div>
//             </div>
//           </FadeInView>

//           <FadeInView delay={300}>
//             <div className="relative">
//               <div
//                 className="absolute -inset-4 rounded-2xl blur-xl opacity-20 animate-pulse"
//                 style={{
//                   background: `linear-gradient(to right, ${primaryColor}, ${secondaryColor})`,
//                 }}
//               ></div>
//               <div className="relative p-8 bg-white rounded-2xl shadow-2xl border border-gray-100">
//                 <h3
//                   className="text-2xl font-bold mb-6"
//                   style={{ color: primaryColor }}
//                 >
//                   Отправить сообщение
//                 </h3>

//                 <form className="space-y-4" onSubmit={handleSubmit}>
//                   {status && (
//                     <div
//                       className={`p-3 rounded-lg text-sm font-medium ${
//                         status.type === "success"
//                           ? "bg-green-100 text-green-700"
//                           : "bg-red-100 text-red-700"
//                       }`}
//                     >
//                       {status.message}
//                     </div>
//                   )}

//                   <div>
//                     <label className="block text-gray-700 text-sm font-medium mb-2">
//                       Ваше имя
//                     </label>
//                     <input
//                       type="text"
//                       name="name"
//                       value={formData.name}
//                       onChange={handleChange}
//                       required
//                       className="w-full px-4 py-3 rounded-lg border border-gray-300"
//                       placeholder="Введите ваше имя"
//                     />
//                   </div>

//                   <div>
//                     <label className="block text-gray-700 text-sm font-medium mb-2">
//                       Email
//                     </label>
//                     <input
//                       type="email"
//                       name="email"
//                       value={formData.email}
//                       onChange={handleChange}
//                       required
//                       className="w-full px-4 py-3 rounded-lg border border-gray-300"
//                       placeholder="Введите ваш email"
//                     />
//                   </div>

//                   <div>
//                     <label className="block text-gray-700 text-sm font-medium mb-2">
//                       Телефон
//                     </label>
//                     <input
//                       type="tel"
//                       name="phone"
//                       value={formData.phone}
//                       onChange={handleChange}
//                       className="w-full px-4 py-3 rounded-lg border border-gray-300"
//                       placeholder="Введите ваш телефон"
//                     />
//                   </div>

//                   <div>
//                     <label className="block text-gray-700 text-sm font-medium mb-2">
//                       Сообщение
//                     </label>
//                     <textarea
//                       name="message"
//                       value={formData.message}
//                       onChange={handleChange}
//                       required
//                       className="w-full px-4 py-3 rounded-lg border border-gray-300 min-h-[120px]"
//                       placeholder="Введите ваше сообщение"
//                     ></textarea>
//                   </div>

//                   <button
//                     type="submit"
//                     disabled={isSubmitting}
//                     className="w-full text-white rounded-full py-4 text-lg font-semibold shadow-lg transition-all duration-500"
//                     style={{
//                       background: `linear-gradient(to right, ${secondaryColor}, ${accentColor})`,
//                       boxShadow: `0 10px 15px -3px ${secondaryColor}33`,
//                     }}
//                   >
//                     {isSubmitting ? "Отправка..." : "Отправить сообщение"}
//                   </button>
//                 </form>
//               </div>
//             </div>
//           </FadeInView>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactSection;

import { useState, useEffect, useRef } from "react";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";

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
          message: "Сообщение успешно отправлено!",
        });
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        const { error } = await res.json();
        setStatus({ type: "error", message: error || "Ошибка при отправке" });
      }
    } catch (error) {
      setStatus({
        type: "error",
        message: "Сетевая ошибка. Попробуйте позже.",
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
                    Наши контакты
                  </span>
                </div>
                <h2
                  className="text-5xl font-bold mb-6 leading-tight text-[#1E22AA] dark:text-blue-400"
                  style={{
                    fontFamily: '"Avenir Next Heavy", sans-serif',
                  }}
                >
                  СВЯЖИТЕСЬ С{" "}
                  <span className="text-[#fb4b06] dark:text-orange-500">
                    НАМИ
                  </span>
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                  Мы всегда открыты для сотрудничества и готовы ответить на все
                  ваши вопросы. Наши специалисты проконсультируют вас по любому
                  вопросу, связанному с нашей продукцией.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center group">
                  <div className="w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-lg border border-gray-100 dark:border-gray-700 flex items-center justify-center mr-4 group-hover:bg-[#fb4b06] dark:group-hover:bg-[#ff6a2c] transition-colors">
                    <Phone className="w-5 h-5 text-[#fb4b06] dark:text-[#ff6a2c] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <div className="text-gray-500 dark:text-gray-400 text-sm mb-1">
                      Телефон
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
                      Адрес
                    </div>
                    <div className="text-lg font-semibold text-[#1E22AA] dark:text-blue-400">
                      {contactInfo.address}
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6">
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
              </div>
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
                  Отправить сообщение
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
                      Ваше имя
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                      placeholder="Введите ваше имя"
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
                      placeholder="Введите ваш email"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
                      Телефон
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                      placeholder="Введите ваш телефон"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">
                      Сообщение
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white min-h-[120px]"
                      placeholder="Введите ваше сообщение"
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
                    {isSubmitting ? "Отправка..." : "Отправить сообщение"}
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

// import { useState, useEffect, useRef } from "react";
// import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";

// // FadeInView component implementation
// const FadeInView = ({ children, delay = 0, className = "" }) => {
//   const [isVisible, setIsVisible] = useState(false);
//   const domRef = useRef();

//   useEffect(() => {
//     const observer = new IntersectionObserver((entries) => {
//       // If the element is visible
//       if (entries[0].isIntersecting) {
//         setIsVisible(true);
//         // No need to keep observing after element is visible
//         observer.unobserve(domRef.current);
//       }
//     });

//     observer.observe(domRef.current);

//     return () => {
//       if (domRef.current) {
//         observer.unobserve(domRef.current);
//       }
//     };
//   }, []);

//   return (
//     <div
//       ref={domRef}
//       className={`transition-opacity duration-1000 ${
//         isVisible ? "opacity-100" : "opacity-0"
//       } ${className}`}
//       style={{ transitionDelay: `${delay}ms` }}
//     >
//       {children}
//     </div>
//   );
// };

// // Main component
// const ContactSection = ({ contactInfo }) => {
//   // Define colors for consistent use
//   const primaryColor = "#1E22AA";
//   const secondaryColor = "#fb4b06";
//   const accentColor = "#E85D24";

//   return (
//     <section className="py-24 bg-gray-50 relative overflow-hidden">
//       {/* Фоновые элементы */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div
//           className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-opacity-5"
//           style={{ backgroundColor: `${primaryColor}10` }}
//         ></div>
//         <div
//           className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-opacity-5"
//           style={{ backgroundColor: `${secondaryColor}10` }}
//         ></div>
//       </div>

//       <div className="container mx-auto px-4 relative z-10">
//         <div className="grid md:grid-cols-2 gap-16 items-center">
//           <FadeInView>
//             <div className="space-y-8">
//               <div>
//                 <div
//                   className="inline-block mb-4 rounded-full px-6 py-2"
//                   style={{ backgroundColor: `${secondaryColor}10` }}
//                 >
//                   <span
//                     className="text-sm font-medium uppercase tracking-wider"
//                     style={{ color: secondaryColor }}
//                   >
//                     Наши контакты
//                   </span>
//                 </div>
//                 <h2
//                   className="text-5xl font-bold mb-6 leading-tight"
//                   style={{
//                     fontFamily: '"Avenir Next Heavy", sans-serif',
//                     color: primaryColor,
//                   }}
//                 >
//                   СВЯЖИТЕСЬ С{" "}
//                   <span style={{ color: secondaryColor }}>НАМИ</span>
//                 </h2>
//                 <p className="text-xl text-gray-600 leading-relaxed">
//                   Мы всегда открыты для сотрудничества и готовы ответить на все
//                   ваши вопросы. Наши специалисты проконсультируют вас по любому
//                   вопросу, связанному с нашей продукцией.
//                 </p>
//               </div>

//               <div className="space-y-6">
//                 <div className="flex items-center group">
//                   <div
//                     className="w-12 h-12 rounded-full bg-white shadow-lg border border-gray-100 flex items-center justify-center mr-4 group-hover:bg-opacity-100 transition-colors"
//                     style={{
//                       backgroundColor: "white",
//                       "--tw-group-hover-bg-opacity": "1",
//                       "--tw-group-hover-bg": secondaryColor,
//                     }}
//                   >
//                     <Phone
//                       className="w-5 h-5 group-hover:text-white transition-colors"
//                       style={{ color: secondaryColor }}
//                     />
//                   </div>
//                   <div>
//                     <div className="text-gray-500 text-sm mb-1">Телефон</div>
//                     <div
//                       className="text-lg font-semibold"
//                       style={{ color: primaryColor }}
//                     >
//                       {contactInfo.phone}
//                     </div>
//                   </div>
//                 </div>

//                 <div className="flex items-center group">
//                   <div
//                     className="w-12 h-12 rounded-full bg-white shadow-lg border border-gray-100 flex items-center justify-center mr-4 group-hover:bg-opacity-100 transition-colors"
//                     style={{
//                       backgroundColor: "white",
//                       "--tw-group-hover-bg-opacity": "1",
//                       "--tw-group-hover-bg": secondaryColor,
//                     }}
//                   >
//                     <Mail
//                       className="w-5 h-5 group-hover:text-white transition-colors"
//                       style={{ color: secondaryColor }}
//                     />
//                   </div>
//                   <div>
//                     <div className="text-gray-500 text-sm mb-1">Email</div>
//                     <div
//                       className="text-lg font-semibold"
//                       style={{ color: primaryColor }}
//                     >
//                       {contactInfo.email}
//                     </div>
//                   </div>
//                 </div>

//                 <div className="flex items-center group">
//                   <div
//                     className="w-12 h-12 rounded-full bg-white shadow-lg border border-gray-100 flex items-center justify-center mr-4 group-hover:bg-opacity-100 transition-colors"
//                     style={{
//                       backgroundColor: "white",
//                       "--tw-group-hover-bg-opacity": "1",
//                       "--tw-group-hover-bg": secondaryColor,
//                     }}
//                   >
//                     <MapPin
//                       className="w-5 h-5 group-hover:text-white transition-colors"
//                       style={{ color: secondaryColor }}
//                     />
//                   </div>
//                   <div>
//                     <div className="text-gray-500 text-sm mb-1">Адрес</div>
//                     <div
//                       className="text-lg font-semibold"
//                       style={{ color: primaryColor }}
//                     >
//                       {contactInfo.address}
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div className="pt-6">
//                 <button
//                   className="text-white rounded-full px-10 py-5 text-xl font-bold shadow-lg transition-all duration-500 flex items-center gap-3"
//                   style={{
//                     background: `linear-gradient(to right, ${primaryColor}, ${primaryColor}DD)`,
//                     boxShadow: `0 10px 15px -3px ${primaryColor}33`,
//                   }}
//                   onMouseOver={(e) => {
//                     e.currentTarget.style.background = `linear-gradient(to right, ${secondaryColor}, ${accentColor})`;
//                     e.currentTarget.style.boxShadow = `0 10px 15px -3px ${secondaryColor}4D`;
//                   }}
//                   onMouseOut={(e) => {
//                     e.currentTarget.style.background = `linear-gradient(to right, ${primaryColor}, ${primaryColor}DD)`;
//                     e.currentTarget.style.boxShadow = `0 10px 15px -3px ${primaryColor}33`;
//                   }}
//                 >
//                   <span>Связаться с нами</span>
//                   <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
//                 </button>
//               </div>
//             </div>
//           </FadeInView>

//           <FadeInView delay={300}>
//             <div className="relative">
//               <div
//                 className="absolute -inset-4 rounded-2xl blur-xl opacity-20 animate-pulse"
//                 style={{
//                   background: `linear-gradient(to right, ${primaryColor}, ${secondaryColor})`,
//                 }}
//               ></div>
//               <div className="relative p-8 bg-white rounded-2xl shadow-2xl border border-gray-100">
//                 <h3
//                   className="text-2xl font-bold mb-6"
//                   style={{ color: primaryColor }}
//                 >
//                   Отправить сообщение
//                 </h3>

//                 <div className="space-y-4">
//                   <div>
//                     <label className="block text-gray-700 text-sm font-medium mb-2">
//                       Ваше имя
//                     </label>
//                     <input
//                       type="text"
//                       className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:border-transparent"
//                       style={{
//                         "--tw-focus-ring-color": `${secondaryColor}80`,
//                         "--tw-focus-border-color": secondaryColor,
//                       }}
//                       placeholder="Введите ваше имя"
//                     />
//                   </div>

//                   <div>
//                     <label className="block text-gray-700 text-sm font-medium mb-2">
//                       Email
//                     </label>
//                     <input
//                       type="email"
//                       className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:border-transparent"
//                       style={{
//                         "--tw-focus-ring-color": `${secondaryColor}80`,
//                         "--tw-focus-border-color": secondaryColor,
//                       }}
//                       placeholder="Введите ваш email"
//                     />
//                   </div>

//                   <div>
//                     <label className="block text-gray-700 text-sm font-medium mb-2">
//                       Телефон
//                     </label>
//                     <input
//                       type="tel"
//                       className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:border-transparent"
//                       style={{
//                         "--tw-focus-ring-color": `${secondaryColor}80`,
//                         "--tw-focus-border-color": secondaryColor,
//                       }}
//                       placeholder="Введите ваш телефон"
//                     />
//                   </div>

//                   <div>
//                     <label className="block text-gray-700 text-sm font-medium mb-2">
//                       Сообщение
//                     </label>
//                     <textarea
//                       className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:border-transparent min-h-[120px]"
//                       style={{
//                         "--tw-focus-ring-color": `${secondaryColor}80`,
//                         "--tw-focus-border-color": secondaryColor,
//                       }}
//                       placeholder="Введите ваше сообщение"
//                     ></textarea>
//                   </div>

//                   <button
//                     className="w-full text-white rounded-full py-4 text-lg font-semibold shadow-lg transition-all duration-500"
//                     style={{
//                       background: `linear-gradient(to right, ${secondaryColor}, ${accentColor})`,
//                       boxShadow: `0 10px 15px -3px ${secondaryColor}33`,
//                     }}
//                     onMouseOver={(e) => {
//                       e.currentTarget.style.background = `linear-gradient(to right, ${accentColor}, ${secondaryColor})`;
//                       e.currentTarget.style.boxShadow = `0 10px 15px -3px ${secondaryColor}4D`;
//                     }}
//                     onMouseOut={(e) => {
//                       e.currentTarget.style.background = `linear-gradient(to right, ${secondaryColor}, ${accentColor})`;
//                       e.currentTarget.style.boxShadow = `0 10px 15px -3px ${secondaryColor}33`;
//                     }}
//                   >
//                     Отправить сообщение
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </FadeInView>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactSection;

// import React from "react";
// import { motion } from "framer-motion";
// import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";

// const ContactSection = ({ contactInfo }) => {
//   // Animation variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.5,
//       },
//     },
//   };

//   return (
//     <section className="py-16 sm:py-20 md:py-24 bg-[#1E22AA] relative overflow-hidden">
//       {/* Enhanced background decorations */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gradient-to-r from-[#fb4b06]/30 to-[#ff6b3d]/10 blur-3xl"></div>
//         <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-gradient-to-r from-[#fb4b06]/20 to-[#ff6b3d]/5 blur-3xl"></div>
//         <div className="absolute top-1/2 left-1/4 w-64 h-64 rounded-full bg-[#3f43ff]/20 blur-3xl"></div>

//         {/* Subtle mesh gradient overlay */}
//         <div className="absolute inset-0 bg-gradient-to-bl from-[#1E22AA]/0 via-[#2A2DC8]/5 to-[#3C40E7]/10 mix-blend-overlay"></div>

//         {/* Grain texture */}
//         <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')]"></div>
//       </div>

//       <div className="container mx-auto px-4 sm:px-6 relative z-10">
//         <div className="grid md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
//           <motion.div
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, margin: "-100px" }}
//             variants={itemVariants}
//           >
//             <motion.div
//               className="inline-block mb-4 bg-white/10 backdrop-blur-md rounded-full px-5 py-2 border border-white/20"
//               whileHover={{ scale: 1.05 }}
//             >
//               <span className="text-white p-4 text-sm font-medium uppercase tracking-wider">
//                 Свяжитесь с нами
//               </span>
//             </motion.div>
//             <h2
//               className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 md:mb-8 leading-tight"
//               style={{ fontFamily: '"Avenir Next Heavy", sans-serif' }}
//             >
//               ОСТАЛИСЬ{" "}
//               <span className="bg-[#fb4b06] bg-clip-text text-transparent">
//                 ВОПРОСЫ?
//               </span>
//             </h2>
//             <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed mb-10 md:mb-12">
//               Наши специалисты готовы ответить на все ваши вопросы о продукции и
//               условиях сотрудничества. Заполните форму или свяжитесь с нами
//               любым удобным способом.
//             </p>

//             <motion.div
//               className="space-y-5 sm:space-y-6"
//               variants={containerVariants}
//             >
//               <motion.div
//                 className="flex items-center group"
//                 variants={itemVariants}
//                 whileHover={{ x: 5 }}
//               >
//                 <div className="w-12 h-12 rounded-full bg-gradient-to-br from-white/15 to-white/5 flex items-center justify-center mr-4 group-hover:bg-gradient-to-r group-hover:from-[#fb4b06] group-hover:to-[#ff6b3d] transition-all duration-300 shadow-lg shadow-blue-900/10">
//                   <Phone className="text-white w-5 h-5" />
//                 </div>
//                 <div>
//                   <p className="text-white/70 text-sm">Телефон</p>
//                   <p className="text-white font-medium text-base">
//                     {contactInfo?.phone || "+7 (XXX) XXX-XX-XX"}
//                   </p>
//                 </div>
//               </motion.div>

//               <motion.div
//                 className="flex items-center group"
//                 variants={itemVariants}
//                 whileHover={{ x: 5 }}
//               >
//                 <div className="w-12 h-12 rounded-full bg-gradient-to-br from-white/15 to-white/5 flex items-center justify-center mr-4 group-hover:bg-gradient-to-r group-hover:from-[#fb4b06] group-hover:to-[#ff6b3d] transition-all duration-300 shadow-lg shadow-blue-900/10">
//                   <Mail className="text-white w-5 h-5" />
//                 </div>
//                 <div>
//                   <p className="text-white/70 text-sm">Email</p>
//                   <p className="text-white font-medium text-base">
//                     {contactInfo?.email || "info@example.com"}
//                   </p>
//                 </div>
//               </motion.div>

//               <motion.div
//                 className="flex items-center group"
//                 variants={itemVariants}
//                 whileHover={{ x: 5 }}
//               >
//                 <div className="w-12 h-12 rounded-full bg-gradient-to-br from-white/15 to-white/5 flex items-center justify-center mr-4 group-hover:bg-gradient-to-r group-hover:from-[#fb4b06] group-hover:to-[#ff6b3d] transition-all duration-300 shadow-lg shadow-blue-900/10">
//                   <MapPin className="text-white w-5 h-5" />
//                 </div>
//                 <div>
//                   <p className="text-white/70 text-sm">Адрес</p>
//                   <p className="text-white font-medium text-base">
//                     {contactInfo?.address || "ул. Примерная, 123, г. Москва"}
//                   </p>
//                 </div>
//               </motion.div>
//             </motion.div>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             viewport={{ once: true, margin: "-100px" }}
//             className="bg-white/90 backdrop-blur-md p-8 shadow-2xl mt-6 md:mt-0"
//           >
//             <h3 className="text-2xl font-bold text-white mb-6">
//               Отправить сообщение
//             </h3>

//             <form className="space-y-6">
//               <div>
//                 <label
//                   htmlFor="name"
//                   className="block text-sm font-medium text-white mb-2"
//                 >
//                   Ваше имя
//                 </label>
//                 <motion.div
//                   whileFocus={{ scale: 1.005 }}
//                   className="relative group"
//                 >
//                   <input
//                     type="text"
//                     id="name"
//                     className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#fb4b06]/50 focus:border-[#fb4b06] outline-none transition-all shadow-sm bg-white"
//                     placeholder="Введите ваше имя"
//                   />
//                   <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#fb4b06]/0 via-[#fb4b06]/0 to-[#fb4b06]/0 group-focus-within:from-[#0b0f4a]/20 group-focus-within:via-[#fb4b06]/40 group-focus-within:to-[#0b0f4a]/20 transition-all duration-300 rounded-b-xl"></div>
//                 </motion.div>
//               </div>

//               <div>
//                 <label
//                   htmlFor="email"
//                   className="block text-sm font-medium text-white mb-2"
//                 >
//                   Email
//                 </label>
//                 <motion.div
//                   whileFocus={{ scale: 1.005 }}
//                   className="relative group"
//                 >
//                   <input
//                     type="email"
//                     id="email"
//                     className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#fb4b06]/50 focus:border-[#fb4b06] outline-none transition-all shadow-sm bg-white"
//                     placeholder="Введите ваш email"
//                   />
//                   <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#fb4b06]/0 via-[#fb4b06]/0 to-[#fb4b06]/0 group-focus-within:from-[#0b0f4a]/20 group-focus-within:via-[#fb4b06]/40 group-focus-within:to-[#0b0f4a]/20 transition-all duration-300 rounded-b-xl"></div>
//                 </motion.div>
//               </div>

//               <div>
//                 <label
//                   htmlFor="message"
//                   className="block text-sm font-medium text-white mb-2"
//                 >
//                   Сообщение
//                 </label>
//                 <motion.div
//                   whileFocus={{ scale: 1.005 }}
//                   className="relative group"
//                 >
//                   <textarea
//                     id="message"
//                     rows="4"
//                     className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#fb4b06]/50 focus:border-[#fb4b06] outline-none transition-all shadow-sm bg-white"
//                     placeholder="Введите ваше сообщение"
//                   ></textarea>
//                   <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#fb4b06]/0 via-[#fb4b06]/0 to-[#fb4b06]/0 group-focus-within:from-[#0b0f4a]/20 group-focus-within:via-[#fb4b06]/40 group-focus-within:to-[#0b0f4a]/20 transition-all duration-300 rounded-b-xl"></div>
//                 </motion.div>
//               </div>

//               <motion.button
//                 whileHover={{
//                   scale: 1.03,
//                   boxShadow: "0 10px 25px -5px rgba(251, 75, 6, 0.4)",
//                 }}
//                 whileTap={{ scale: 0.98 }}
//                 className="w-full bg-[#fb4b06] hover:from-[#0b0f4a] hover:to-[#131870] rounded-full text-white px-6 py-4 text-base font-semibold transition-all duration-300 shadow-lg shadow-orange-600/20 hover:shadow-blue-900/30 flex items-center justify-center"
//                 type="submit"
//               >
//                 <span>Отправить сообщение</span>
//                 <ArrowRight className="ml-2 w-5 h-5" />
//               </motion.button>
//             </form>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactSection;
