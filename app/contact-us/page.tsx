// 'use client';
// import React, { useState } from 'react';
// import Head from 'next/head';
// import Link from 'next/link';
// import Image from 'next/image';
// import { Mail, Phone, MapPin, Send, Instagram, Youtube } from 'lucide-react';
// // import { FaWhatsapp, FaTelegram } from 'react-icons/fa';

// const ContactUsPage: React.FC = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     subject: '',
//     message: ''
//   });
  
//   const [submitted, setSubmitted] = useState(false);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // Here you would typically send the form data to your backend
//     console.log('Form submitted:', formData);
//     setSubmitted(true);
    
//     // Auto scroll to top of success message
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   return (
//     <div className="min-h-screen bg-white">
//       <Head>
//         <title>Contact Us | Tide</title>
//         <meta name="description" content="Get in touch with Tide customer service" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <main className="container mx-auto max-w-6xl px-4 py-8">
//         {/* Breadcrumb */}
//         <div className="flex items-center mb-8 text-sm">
//           <Link href="/" className="text-blue-800 hover:underline">Home</Link>
//           <span className="mx-2 text-gray-400">/</span>
//           <span className="text-blue-800 font-medium">Contact Us</span>
//         </div>

//         {/* Hero Section */}
//         <div className="bg-gradient-to-r from-blue-800 to-blue-900 rounded-lg overflow-hidden mb-12">
//           <div className="flex flex-col md:flex-row">
//             <div className="p-8 md:p-12 md:w-3/5">
//               <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
//                 Get in Touch <span className="text-orange-500">With Us</span>
//               </h1>
//               <p className="text-blue-100 text-lg mb-8">
//                 We'd love to hear from you! Whether you have a question about our products, 
//                 need support, or just want to share your experience, our team is here for you.
//               </p>
//               <div className="flex flex-wrap gap-4">
//                 <a href="#contact-form" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-full transition-colors inline-flex items-center">
//                   <Send className="mr-2 h-5 w-5" />
//                   Send a Message
//                 </a>
//                 <a href="tel:18008798433" className="bg-white hover:bg-gray-100 text-blue-800 font-bold py-3 px-6 rounded-full transition-colors inline-flex items-center">
//                   <Phone className="mr-2 h-5 w-5 text-orange-500" />
//                   Call Us
//                 </a>
//               </div>
//             </div>
//             <div className="hidden md:block md:w-2/5 relative">
//               <div className="absolute inset-0 bg-blue-800 opacity-20"></div>
//               <Image 
//                 src="/api/placeholder/600/400" 
//                 alt="Customer support" 
//                 width={600} 
//                 height={400}
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           </div>
//         </div>

//         {/* Success Message */}
//         {submitted && (
//           <div className="bg-green-50 border-l-4 border-green-500 p-8 rounded-lg mb-12 animate-fadeIn">
//             <div className="flex">
//               <div className="flex-shrink-0">
//                 <svg className="h-12 w-12 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//                 </svg>
//               </div>
//               <div className="ml-4">
//                 <h2 className="text-2xl font-bold text-blue-800 mb-2">Message Sent Successfully!</h2>
//                 <p className="text-blue-800 mb-4">Thank you for reaching out to Tide. We've received your message and will get back to you as soon as possible.</p>
//                 <button 
//                   onClick={() => setSubmitted(false)}
//                   className="bg-orange-500 text-white font-bold px-6 py-2 rounded-full hover:bg-orange-600 transition-colors"
//                 >
//                   Send Another Message
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Contact Information Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
//           <div className="bg-white shadow-md rounded-lg p-6 border-t-4 border-orange-500 hover:shadow-lg transition-shadow">
//             <div className="flex items-center mb-4">
//               <div className="bg-orange-100 p-3 rounded-full mr-4">
//                 <Phone className="text-orange-500 h-6 w-6" />
//               </div>
//               <h3 className="text-xl font-bold text-blue-800">Call Us</h3>
//             </div>
//             <p className="text-blue-800 font-semibold">Customer Service</p>
//             <a href="tel:18008798433" className="text-blue-800 text-lg hover:text-orange-500 transition-colors">1-800-879-8433</a>
//             <p className="text-gray-500 mt-2">Mon-Fri: 9am - 6pm EST</p>
//           </div>
          
//           <div className="bg-white shadow-md rounded-lg p-6 border-t-4 border-orange-500 hover:shadow-lg transition-shadow">
//             <div className="flex items-center mb-4">
//               <div className="bg-orange-100 p-3 rounded-full mr-4">
//                 <Mail className="text-orange-500 h-6 w-6" />
//               </div>
//               <h3 className="text-xl font-bold text-blue-800">Email Us</h3>
//             </div>
//             <p className="text-blue-800 font-semibold">Customer Support</p>
//             <a href="mailto:support@tide.com" className="text-blue-800 text-lg hover:text-orange-500 transition-colors break-all">support@tide.com</a>
//             <p className="text-gray-500 mt-2">We'll respond within 24 hours</p>
//           </div>
          
//           <div className="bg-white shadow-md rounded-lg p-6 border-t-4 border-orange-500 hover:shadow-lg transition-shadow">
//             <div className="flex items-center mb-4">
//               <div className="bg-orange-100 p-3 rounded-full mr-4">
//                 <MapPin className="text-orange-500 h-6 w-6" />
//               </div>
//               <h3 className="text-xl font-bold text-blue-800">Visit Us</h3>
//             </div>
//             <p className="text-blue-800 font-semibold">Headquarters</p>
//             <p className="text-blue-800">One P&G Plaza</p>
//             <p className="text-blue-800">Cincinnati, OH 45202</p>
//             <p className="text-gray-500 mt-2">United States</p>
//           </div>
//         </div>

//         {/* Social Media Section */}
//         <div className="bg-blue-50 rounded-lg p-8 mb-12">
//           <h2 className="text-3xl font-bold text-blue-800 mb-6 text-center">Connect With Us</h2>
//           <p className="text-blue-800 text-center mb-8 max-w-2xl mx-auto">
//             Follow us on social media for product updates, cleaning tips, and special promotions.
//           </p>
          
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
//             <a 
//               href="https://instagram.com/tide" 
//               target="_blank" 
//               rel="noopener noreferrer"
//               className="flex flex-col items-center p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow"
//             >
//               <div className="bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 p-3 rounded-full mb-3">
//                 <Instagram className="text-white h-6 w-6" />
//               </div>
//               <span className="text-blue-800 font-medium">Instagram</span>
//               <span className="text-gray-500 text-sm">@tide</span>
//             </a>
            
//             <a 
//               href="https://youtube.com/tide" 
//               target="_blank" 
//               rel="noopener noreferrer"
//               className="flex flex-col items-center p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow"
//             >
//               <div className="bg-red-600 p-3 rounded-full mb-3">
//                 <Youtube className="text-white h-6 w-6" />
//               </div>
//               <span className="text-blue-800 font-medium">YouTube</span>
//               <span className="text-gray-500 text-sm">Tide Official</span>
//             </a>
            
//             <a 
//               href="https://wa.me/18008798433" 
//               target="_blank" 
//               rel="noopener noreferrer"
//               className="flex flex-col items-center p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow"
//             >
//               <div className="bg-green-500 p-3 rounded-full mb-3">
//                 {/* <FaWhatsapp className="text-white h-6 w-6" /> */}
//               </div>
//               <span className="text-blue-800 font-medium">WhatsApp</span>
//               <span className="text-gray-500 text-sm">Chat Support</span>
//             </a>
            
//             <a 
//               href="https://t.me/tide" 
//               target="_blank" 
//               rel="noopener noreferrer"
//               className="flex flex-col items-center p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow"
//             >
//               <div className="bg-blue-500 p-3 rounded-full mb-3">
//                 {/* <FaTelegram className="text-white h-6 w-6" /> */}
//               </div>
//               <span className="text-blue-800 font-medium">Telegram</span>
//               <span className="text-gray-500 text-sm">@tide</span>
//             </a>
//           </div>
//         </div>

//         {/* Contact Form Section */}
//         <div id="contact-form" className="flex flex-col md:flex-row gap-8 mb-12">
//           <div className="w-full md:w-2/3">
//             <div className="bg-white shadow-lg rounded-lg overflow-hidden">
//               <div className="bg-blue-800 p-6">
//                 <h2 className="text-2xl font-bold text-white">Send Us a Message</h2>
//                 <p className="text-blue-100">We'll get back to you as soon as possible</p>
//               </div>
              
//               {!submitted && (
//                 <form onSubmit={handleSubmit} className="p-6 md:p-8">
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//                     <div>
//                       <label htmlFor="name" className="block text-blue-800 font-semibold mb-2">Full Name *</label>
//                       <input
//                         type="text"
//                         id="name"
//                         name="name"
//                         required
//                         value={formData.name}
//                         onChange={handleChange}
//                         placeholder="Your name"
//                         className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
//                       />
//                     </div>
//                     <div>
//                       <label htmlFor="email" className="block text-blue-800 font-semibold mb-2">Email Address *</label>
//                       <input
//                         type="email"
//                         id="email"
//                         name="email"
//                         required
//                         value={formData.email}
//                         onChange={handleChange}
//                         placeholder="your.email@example.com"
//                         className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
//                       />
//                     </div>
//                   </div>

//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//                     <div>
//                       <label htmlFor="phone" className="block text-blue-800 font-semibold mb-2">Phone Number</label>
//                       <input
//                         type="tel"
//                         id="phone"
//                         name="phone"
//                         value={formData.phone}
//                         onChange={handleChange}
//                         placeholder="(123) 456-7890 (Optional)"
//                         className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
//                       />
//                     </div>
//                     <div>
//                       <label htmlFor="subject" className="block text-blue-800 font-semibold mb-2">Subject *</label>
//                       <select
//                         id="subject"
//                         name="subject"
//                         required
//                         value={formData.subject}
//                         onChange={handleChange}
//                         className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent appearance-none bg-white"
//                         style={{ 
//                           backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23E85D24'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
//                           backgroundRepeat: 'no-repeat',
//                           backgroundPosition: 'right 1rem center',
//                           backgroundSize: '1.5em 1.5em',
//                           paddingRight: '3rem'
//                         }}
//                       >
//                         <option value="">Please select</option>
//                         <option value="product-info">Product Information</option>
//                         <option value="order-help">Order Assistance</option>
//                         <option value="product-feedback">Product Feedback</option>
//                         <option value="partnership">Partnership Inquiries</option>
//                         <option value="others">Other</option>
//                       </select>
//                     </div>
//                   </div>

//                   <div className="mb-6">
//                     <label htmlFor="message" className="block text-blue-800 font-semibold mb-2">Your Message *</label>
//                     <textarea
//                       id="message"
//                       name="message"
//                       required
//                       rows={6}
//                       value={formData.message}
//                       onChange={handleChange}
//                       placeholder="Please describe how we can help you..."
//                       className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-y"
//                     ></textarea>
//                   </div>

//                   <button 
//                     type="submit"
//                     className="bg-orange-500 text-white font-bold text-lg px-8 py-3 rounded-full hover:bg-orange-600 transition-colors flex items-center justify-center w-full md:w-auto"
//                   >
//                     Send Message
//                     <Send className="ml-2 h-5 w-5" />
//                   </button>
//                 </form>
//               )}
//             </div>
//           </div>

//           <div className="w-full md:w-1/3">
//             <div className="bg-orange-500 rounded-lg overflow-hidden shadow-lg mb-6">
//               <div className="p-6 text-white">
//                 <h3 className="text-2xl font-bold mb-4">Frequently Asked Questions</h3>
//                 <p className="mb-6">Find answers to our most commonly asked questions.</p>
//                 <ul className="space-y-4">
//                   <li className="flex items-start">
//                     <svg className="h-6 w-6 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//                     </svg>
//                     <span>How to remove tough stains with Tide?</span>
//                   </li>
//                   <li className="flex items-start">
//                     <svg className="h-6 w-6 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//                     </svg>
//                     <span>Which Tide product is right for my washing machine?</span>
//                   </li>
//                   <li className="flex items-start">
//                     <svg className="h-6 w-6 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//                     </svg>
//                     <span>Where to buy Tide products online?</span>
//                   </li>
//                 </ul>
//                 <a 
//                   href="/faq" 
//                   className="inline-block bg-white text-orange-500 font-bold text-lg px-6 py-2 rounded-full hover:bg-gray-100 transition-colors mt-6"
//                 >
//                   View All FAQs
//                 </a>
//               </div>
//             </div>
            
//             <div className="bg-white shadow-lg rounded-lg overflow-hidden">
//               <div className="p-6">
//                 <h3 className="text-xl font-bold text-blue-800 mb-4">Business Hours</h3>
//                 <div className="space-y-3">
//                   <div className="flex justify-between">
//                     <span className="text-blue-800">Monday - Friday:</span>
//                     <span className="text-blue-800 font-medium">9:00 AM - 6:00 PM</span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span className="text-blue-800">Saturday:</span>
//                     <span className="text-blue-800 font-medium">10:00 AM - 4:00 PM</span>
//                   </div>
//                   <div className="flex justify-between">
//                     <span className="text-blue-800">Sunday:</span>
//                     <span className="text-blue-800 font-medium">Closed</span>
//                   </div>
//                   <div className="border-t border-gray-200 pt-3 mt-3">
//                     <p className="text-blue-800 font-semibold">Holiday hours may vary</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Map Section */}
//         <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-12">
//           <div className="p-6 md:p-8 text-center">
//             <h2 className="text-2xl font-bold text-blue-800 mb-2">Visit Our Headquarters</h2>
//             <p className="text-blue-800 mb-6">One P&G Plaza, Cincinnati, OH 45202, United States</p>
            
//             {/* Map placeholder - in a real implementation, you would embed an actual map here */}
//             <div className="relative h-64 md:h-96 bg-gray-200 rounded-lg overflow-hidden">
//               <div className="absolute inset-0 flex flex-col items-center justify-center">
//                 <MapPin className="text-blue-800 h-10 w-10 mb-2" />
//                 <p className="text-blue-800 font-medium">Map view placeholder</p>
//                 <p className="text-gray-500">In a real implementation, an actual map would be embedded here</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Newsletter Section */}
//         <div className="bg-gradient-to-r from-blue-800 to-blue-900 rounded-lg p-8 md:p-12 mb-12">
//           <div className="max-w-3xl mx-auto text-center">
//             <h2 className="text-3xl font-bold text-white mb-4">Stay Updated with Tide</h2>
//             <p className="text-blue-100 mb-8">
//               Subscribe to our newsletter for the latest product news, laundry tips, and exclusive offers.
//             </p>
//             <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
//               <input 
//                 type="email" 
//                 placeholder="Your email address" 
//                 className="flex-grow py-3 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500"
//               />
//               <button 
//                 type="submit"
//                 className="bg-orange-500 text-white font-bold px-6 py-3 rounded-full hover:bg-orange-600 transition-colors"
//               >
//                 Subscribe
//               </button>
//             </form>
//           </div>
//         </div>
//       </main>

//       {/* Footer banner */}
//       <div className="bg-blue-50 py-6">
//         <div className="container mx-auto max-w-6xl px-4 text-center">
//           <p className="text-blue-800">
//             © {new Date().getFullYear()} Tide. All rights reserved. 
//             <span className="hidden md:inline"> | </span>
//             <br className="md:hidden" />
//             <a href="/privacy-policy" className="hover:underline">Privacy Policy</a> | 
//             <a href="/terms-of-service" className="hover:underline"> Terms of Service</a>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactUsPage;


'use client';
import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Send, Phone, MapPin, Mail, Instagram, Youtube, MessageCircle } from 'lucide-react';

const ContactUsPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // In a real implementation, you would send this data to your backend
    setFormSubmitted(true);
    
    // Reset form after submission
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setFormSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Contact Us | Tide</title>
        <meta name="description" content="Get in touch with Tide customer support" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto max-w-6xl px-4 py-8">
        {/* Breadcrumb */}
        <div className="py-4">
          <div className="text-xs text-blue-800 font-light mt-2">
            <Link href="/">Home</Link> / Contact Us
          </div>
        </div>

        {/* Header */}
        <div className="my-8">
          <h1 className="text-4xl md:text-5xl font-light text-orange-500">
            Contact <span className="font-bold">Us</span>
          </h1>
          <p className="text-blue-800 mt-4 max-w-3xl">
            Have questions about our products or need assistance? We're here to help! Fill out the form below or reach out through one of our social channels.
          </p>
        </div>

        {/* Main content */}
        <div className="flex flex-col lg:flex-row gap-12 my-12">
          {/* Contact Form */}
          <div className="w-full lg:w-2/3">
            <div className="bg-white rounded-lg p-6 md:p-8 shadow-md border border-gray-100">
              <h2 className="text-2xl text-blue-800 font-bold mb-6">Send Us a Message</h2>
              
              {formSubmitted ? (
                <div className="bg-green-100 text-green-800 p-4 rounded-md mb-6">
                  Thank you for your message! Our team will get back to you shortly.
                </div>
              ) : null}
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-blue-800 mb-2">Your Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-blue-800 mb-2">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                      required
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-blue-800 mb-2">Subject</label>
                  <select 
                    id="subject" 
                    name="subject" 
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="product-inquiry">Product Inquiry</option>
                    <option value="customer-support">Customer Support</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-blue-800 mb-2">Your Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={6} 
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    required
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="bg-orange-500 text-white font-bold text-lg px-8 py-3 rounded-full hover:bg-orange-600 transition-colors flex items-center"
                >
                  Send Message
                  <Send className="ml-2 h-5 w-5" />
                </button>
              </form>
            </div>
          </div>
          
          {/* Contact Information */}
          <div className="w-full lg:w-1/3">
            <div className="bg-blue-800 text-white rounded-lg p-6 md:p-8 shadow-md h-full">
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-orange-500 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Phone</h3>
                    <p className="mt-1">1-800-879-8433</p>
                    <p className="text-sm text-blue-200 mt-2">Monday - Friday: 9am - 6pm EST</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-orange-500 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Email</h3>
                    <p className="mt-1">support@tide.com</p>
                    <p className="text-sm text-blue-200 mt-2">We'll respond within 24 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-orange-500 p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Office</h3>
                    <p className="mt-1">One Procter & Gamble Plaza</p>
                    <p>Cincinnati, OH 45202</p>
                  </div>
                </div>
                
                <div className="pt-6">
                  <h3 className="font-bold text-lg mb-4">Connect With Us</h3>
                  <div className="flex space-x-4">
                    <a href="https://www.instagram.com/tidelaundry/" target="_blank" rel="noopener noreferrer" className="bg-white p-3 rounded-full text-blue-800 hover:bg-orange-500 hover:text-white transition-colors">
                      <Instagram className="h-6 w-6" />
                    </a>
                    <a href="https://www.youtube.com/user/tide" target="_blank" rel="noopener noreferrer" className="bg-white p-3 rounded-full text-blue-800 hover:bg-orange-500 hover:text-white transition-colors">
                      <Youtube className="h-6 w-6" />
                    </a>
                    <a href="https://wa.me/18008798433" target="_blank" rel="noopener noreferrer" className="bg-white p-3 rounded-full text-blue-800 hover:bg-orange-500 hover:text-white transition-colors">
                      <MessageCircle className="h-6 w-6" />
                    </a>
                    <a href="https://t.me/tidelaundry" target="_blank" rel="noopener noreferrer" className="bg-white p-3 rounded-full text-blue-800 hover:bg-orange-500 hover:text-white transition-colors">
                      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm-3.5 12.5l11-6.5-6.5 11v-4.5l-4.5 4.5v-4.5z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* FAQ Section */}
        <div className="my-16">
          <h2 className="text-3xl text-blue-800 font-bold mb-8">Frequently Asked Questions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl text-blue-800 font-bold mb-3">How do I find the right Tide product?</h3>
              <p className="text-blue-800">Visit our shop page to browse all Tide products or use our Product Selector tool to get personalized recommendations based on your laundry needs.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl text-blue-800 font-bold mb-3">Where can I buy Tide products?</h3>
              <p className="text-blue-800">Tide products are available at most major retailers. Use our "Find Retailers" button on any product page to locate stores near you.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl text-blue-800 font-bold mb-3">How do I remove specific stains?</h3>
              <p className="text-blue-800">Check out our Stain Removal Guide for step-by-step instructions on removing specific stains with Tide products.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl text-blue-800 font-bold mb-3">What's the difference between Tide PODS and liquid?</h3>
              <p className="text-blue-800">Tide PODS offer pre-measured convenience while liquid detergents allow you to adjust the amount based on load size and soil level. Both provide Tide's superior cleaning power.</p>
            </div>
          </div>
        </div>
      </main>
      
      {/* Footer with call to action */}
      <div className="bg-blue-800 py-12">
        <div className="container mx-auto max-w-6xl px-4 text-center">
          <h2 className="text-3xl text-white font-bold mb-6">Need More Help?</h2>
          <p className="text-blue-100 mb-8 max-w-3xl mx-auto">Our customer support team is always ready to assist you with any questions or concerns about Tide products.</p>
          <button className="bg-orange-500 text-white font-bold text-lg px-8 py-3 rounded-full hover:bg-orange-600 transition-colors">
            Browse Our Help Center
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;