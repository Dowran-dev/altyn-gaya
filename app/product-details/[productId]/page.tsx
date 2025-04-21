// 'use client';
// import Image from 'next/image';
// import Link from 'next/link';
// import { ArrowLeft, Star, ShoppingBag, Info, MessageCircle, List } from 'lucide-react';
// import { useState, useEffect } from 'react';
// import { notFound } from 'next/navigation';
// import { use } from 'react'; // Import the use hook

// // Interface definitions remain the same
// interface ProductSize {
//   id: number;
//   name: string;
//   quantity: string;
//   price: string;
// }

// interface ProductReview {
//   id: number;
//   author: string;
//   date: string;
//   rating: number;
//   title: string;
//   content: string;
// }

// interface ProductDetails {
//   id: number;
//   name: string;
//   subtitle: string;
//   fullTitle: string;
//   description: string;
//   longDescription: string;
//   image: string;
//   color: string;
//   brandName: string;
//   category: string;
//   features: string[];
//   directions: string[];
//   rating: number;
//   reviews: number;
//   badge: string;
//   sizes: ProductSize[];
//   reviewsList: ProductReview[];
// }

// interface Product {
//   title: string;
//   description: string;
//   image: string;
//   color: string;
//   brandName: string;
//   category: string;
//   features: string[];
//   details: ProductDetails;
// }

// type ProductDetailPageProps = {
//   params: {
//     productId: string;
//   };
//   searchParams?: { [key: string]: string | string[] | undefined };
// };

// // Use NextPage type or directly define the component with the props
// const ProductDetailPage = ({ params, searchParams }: ProductDetailPageProps) => {
//   // Unwrap the params object using React.use()
//   const resolvedParams = use(params);
//   const productId = resolvedParams.productId;
//   const [product, setProduct] = useState<Product | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const [activeTab, setActiveTab] = useState('description');
//   const [selectedSize, setSelectedSize] = useState<number | null>(null);

//   console.log(searchParams);
//   // Mock related products data (unchanged)
//   const relatedProducts = [
//     {
//       id: 1,
//       name: "Real Plus Чистое и уютное масло RX",
//       description: "Продукт премиум-класса для готовки и улучшения вкуса.",
//       rating: 4.5,
//       reviews: 254,
//       imageSrc: "/images/real-plus-1.jpg",
//     },
//     {
//       id: 2,
//       name: "Real Plus Fresh Моющее средство для стирки с приятным ароматом свежести",
//       description: "Моющее средство с дополнительным ароматом свежести для стирки одежды.",
//       rating: 4.5,
//       reviews: 255,
//       imageSrc: "/images/real-plus-2.jpg",
//     },
//     {
//       id: 3,
//       name: "Real Plus White Худкое моющее средство для белых тканей",
//       description: "Эффективное моющее средство для стирки белых тканей с защитой от потемнения и с...",
//       rating: 4.5,
//       reviews: 312,
//       imageSrc: "/images/real-plus-3.jpg",
//     },
//   ];

//   // Fetch data with proper error handling (unchanged)
//   useEffect(() => {
//     let isMounted = true;
//     const lastFailedTime = localStorage.getItem('products_api_failed_time');
//     const currentTime = new Date().getTime();

//     if (lastFailedTime && currentTime - parseInt(lastFailedTime) < 60000) {
//       const cachedData = localStorage.getItem('cached_product_' + productId);
//       if (cachedData) {
//         setProduct(JSON.parse(cachedData));
//         setLoading(false);
//         return;
//       } else if (isMounted) {
//         setError('API в данный момент недоступен. Пожалуйста, попробуйте позже.');
//         setLoading(false);
//         return;
//       }
//     }

//     const fetchProduct = async () => {
//       try {
//         const response = await fetch(
//           `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/products`,
//           { cache: 'force-cache' }
//         );

//         if (!response.ok) {
//           throw new Error(`Ошибка запроса API с кодом ${response.status}`);
//         }

//         const products = await response.json();
//         const foundProduct = products.find((item: Product) => item.details.id === Number(productId));

//         if (isMounted) {
//           if (foundProduct) {
//             setProduct(foundProduct);
//             localStorage.setItem('cached_product_' + productId, JSON.stringify(foundProduct));
//             if (foundProduct.details.sizes && foundProduct.details.sizes.length > 0) {
//               setSelectedSize(foundProduct.details.sizes[0].id);
//             }
//           } else {
//             setError('Продукт не найден');
//           }
//           setLoading(false);
//         }
//       } catch (error) {
//         console.error('Ошибка загрузки продукта:', error);
//         localStorage.setItem('products_api_failed_time', currentTime.toString());

//         if (isMounted) {
//           const cachedData = localStorage.getItem('cached_product_' + productId);
//           if (cachedData) {
//             setProduct(JSON.parse(cachedData));
//             const parsedProduct = JSON.parse(cachedData);
//             if (parsedProduct.details.sizes && parsedProduct.details.sizes.length > 0) {
//               setSelectedSize(parsedProduct.details.sizes[0].id);
//             }
//           } else {
//             setError('Не удалось загрузить данные о продукте. Пожалуйста, попробуйте позже.');
//           }
//           setLoading(false);
//         }
//       }
//     };

//     fetchProduct();

//     return () => {
//       isMounted = false;
//     };
//   }, [productId]);

//   // Render loading state (unchanged)
//   if (loading) {
//     return (
//       <div className="container mx-auto max-w-7xl px-3 sm:px-4 py-4 sm:py-6 flex justify-center items-center h-64">
//         <div className="animate-pulse flex flex-col items-center">
//           <div className="h-8 w-32 bg-gray-200 rounded mb-4"></div>
//           <div className="text-gray-500 dark:text-gray-400">Загрузка информации о продукте...</div>
//         </div>
//       </div>
//     );
//   }

//   // Render error state (unchanged)
//   if (error) {
//     return (
//       <div className="container mx-auto max-w-7xl px-3 sm:px-4 py-4 sm:py-6">
//         <Link href="/shop" className="flex items-center text-gray-600 hover:text-blue-800 dark:text-blue-100 mb-3 sm:mb-4">
//           <ArrowLeft className="h-4 w-4 mr-1" />
//           <span className="text-xs sm:text-sm">Вернуться в магазин</span>
//         </Link>

//         <div className="flex flex-col items-center justify-center h-64">
//           <h2 className="text-xl font-bold text-red-500 mb-2">Не удалось загрузить продукт</h2>
//           <p className="text-gray-600 mb-4">{error}</p>
//           <Link href="/shop" className="text-blue-800 dark:text-blue-100 hover:underline">
//             Посмотреть другие продукты
//           </Link>
//         </div>
//       </div>
//     );
//   }

//   if (!product) {
//     notFound();
//   }

//   // Render rating stars (unchanged)
//   const renderRatingStars = (rating: number) => (
//     <div className="flex text-orange-500">
//       {[...Array(Math.floor(rating))].map((_, i) => (
//         <Star key={i} fill="currentColor" className="h-4 w-4" />
//       ))}
//       {rating % 1 > 0 && (
//         <Star
//           key="half"
//           className="h-4 w-4"
//           fill="currentColor"
//           strokeWidth={0}
//           style={{ clipPath: 'inset(0 50% 0 0)' }}
//         />
//       )}
//     </div>
//   );

//   const details = product.details;

//   // Rest of the JSX remains unchanged
//   return (
//     <main className="container mx-auto max-w-7xl px-3 sm:px-4 py-4 sm:py-6">
//       <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
//         <Link href="/shop" className="flex items-center text-gray-600 hover:text-blue-800 dark:text-blue-100 mb-3">
//           <ArrowLeft className="h-4 w-4 mr-1" />
//           <span className="text-xs sm:text-sm">Вернуться в магазин</span>
//         </Link>
//         <div className="py-1 mb-4">
//           <div className="text-xs text-blue-800 dark:text-blue-100 font-light">
//             <Link href="/" className="text-blue-800 dark:text-blue-100 hover:text-orange-500">Главная</Link> / 
//             <Link href="/shop" className="text-blue-800 dark:text-blue-100 hover:text-orange-500 ml-1">Магазин</Link> / 
//             <span className="text-gray-500 dark:text-gray-400 ml-1">{details.name}</span>
//           </div>
//         </div>
//       </div>

//       <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
//         <div className="flex flex-col md:flex-row gap-6">
//           <div className="md:w-1/2">
//             <div className="relative rounded-xl overflow-hidden aspect-square">
//               <Image
//                 src={product.image}
//                 alt={details.fullTitle}
//                 layout="fill"
//                 objectFit="cover"
//                 priority
//                 className="transition-transform duration-500 hover:scale-105"
//               />
//               {details.badge && (
//                 <span className="absolute top-3 left-3 text-xs font-medium px-3 py-1 rounded-full bg-orange-100 text-orange-500">
//                   {details.badge}
//                 </span>
//               )}
//             </div>
//           </div>

//           <div className="md:w-1/2">
//             <div className="mb-6">
//               <div className="flex items-center gap-2 mb-2">
//                 <div className="flex items-center text-gray-500 dark:text-gray-400 text-xs">
//                   {renderRatingStars(details.rating)}
//                   <span className="ml-2">{details.reviews} отзывов</span>
//                 </div>
//               </div>
//               <h1 className="text-xl sm:text-2xl font-bold text-blue-900 mb-3">{details.name}</h1>
//               <p className="text-sm text-gray-600 border-l-2 border-blue-200 pl-3 italic">{details.description}</p>
//             </div>

//             <div className="mb-6">
//               <div className="flex items-center justify-between mb-3">
//                 <h3 className="text-sm font-semibold text-gray-700">Доступные размеры</h3>
//               </div>
//               <div className="flex flex-wrap gap-2">
//                 {details.sizes.map((size) => (
//                   <button
//                     key={size.id}
//                     onClick={() => setSelectedSize(size.id)}
//                     className={`px-4 py-2 rounded-full text-xs ${
//                       selectedSize === size.id
//                         ? 'bg-blue-800 text-white font-bold'
//                         : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//                     } transition-colors`}
//                   >
//                     {size.name} – {size.price}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             <div className="mb-6">
//               <h3 className="text-sm font-semibold mb-3 text-gray-700 flex items-center">
//                 <span className="inline-block w-1 h-4 bg-blue-800 mr-2"></span>
//                 Основные характеристики
//               </h3>
//               <ul className="text-xs text-gray-600 space-y-2 bg-blue-50 p-3 rounded-lg">
//                 {product.features.map((feature, index) => (
//                   <li key={index} className="flex items-center">
//                     <div className="w-1.5 h-1.5 bg-blue-800 rounded-full mr-2"></div>
//                     {feature}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="bg-white rounded-lg shadow-sm mb-6">
//         <div className="border-b border-gray-200">
//           <div className="flex overflow-x-auto no-scrollbar">
//             <button
//               onClick={() => setActiveTab('description')}
//               className={`py-3 px-4 text-sm font-medium whitespace-nowrap border-b-2 transition-colors flex items-center ${
//                 activeTab === 'description'
//                   ? 'text-blue-800 dark:text-blue-100 border-blue-800'
//                   : 'text-gray-500 dark:text-gray-400 border-transparent hover:text-blue-800 dark:text-blue-100 hover:border-blue-300'
//               }`}
//             >
//               <Info className="w-4 h-4 mr-2" />
//               Описание
//             </button>
//             <button
//               onClick={() => setActiveTab('instructions')}
//               className={`py-3 px-4 text-sm font-medium whitespace-nowrap border-b-2 transition-colors flex items-center ${
//                 activeTab === 'instructions'
//                   ? 'text-blue-800 dark:text-blue-100 border-blue-800'
//                   : 'text-gray-500 dark:text-gray-400 border-transparent hover:text-blue-800 dark:text-blue-100 hover:border-blue-300'
//               }`}
//             >
//               <List className="w-4 h-4 mr-2" />
//               Инструкции
//             </button>
//             <button
//               onClick={() => setActiveTab('reviews')}
//               className={`py-3 px-4 text-sm font-medium whitespace-nowrap border-b-2 transition-colors flex items-center ${
//                 activeTab === 'reviews'
//                   ? 'text-blue-800 dark:text-blue-100 border-blue-800'
//                   : 'text-gray-500 dark:text-gray-400 border-transparent hover:text-blue-800 dark:text-blue-100 hover:border-blue-300'
//               }`}
//             >
//               <MessageCircle className="w-4 h-4 mr-2" />
//               Отзывы ({details.reviews})
//             </button>
//           </div>
//         </div>

//         <div className="p-4">
//           {activeTab === 'description' && (
//             <div className="text-sm text-gray-700">
//               <p className="leading-relaxed">{details.longDescription}</p>
//             </div>
//           )}

//           {activeTab === 'instructions' && (
//             <div>
//               <ul className="text-sm text-gray-700 space-y-2 list-disc pl-5">
//                 {details.directions.map((direction, index) => (
//                   <li key={index} className="leading-relaxed">{direction}</li>
//                 ))}
//               </ul>
//             </div>
//           )}

//           {activeTab === 'reviews' && (
//             <div>
//               <div className="mb-4 flex items-center justify-between">
//                 <div className="flex items-center">
//                   <div className="mr-2 text-lg font-semibold text-blue-900">{details.rating}</div>
//                   {renderRatingStars(details.rating)}
//                   <span className="ml-2 text-xs text-gray-500 dark:text-gray-400">на основе {details.reviews} отзывов</span>
//                 </div>
//                 <button className="text-xs text-white bg-blue-800 hover:bg-blue-900 px-3 py-1 rounded-full transition-colors">
//                   Написать отзыв
//                 </button>
//               </div>

//               <div className="space-y-4 divide-y divide-gray-100">
//                 {details.reviewsList.map((review) => (
//                   <div key={review.id} className="pt-4">
//                     <div className="flex items-center justify-between mb-2">
//                       <div className="flex items-center">
//                         {renderRatingStars(review.rating)}
//                         <span className="ml-2 font-medium text-xs">{review.author}</span>
//                       </div>
//                       <span className="text-xs text-gray-500 dark:text-gray-400">{review.date}</span>
//                     </div>
//                     <h4 className="text-sm font-medium text-blue-900 mb-1">{review.title}</h4>
//                     <p className="text-xs text-gray-600">{review.content}</p>
//                   </div>
//                 ))}

//                 {details.reviewsList.length > 2 && (
//                   <div className="pt-4 text-center">
//                     <button className="text-xs text-blue-800 dark:text-blue-100 hover:text-orange-500 font-medium border border-blue-800 rounded-full px-4 py-2 transition-colors hover:border-orange-500">
//                       Посмотреть все отзывы
//                     </button>
//                   </div>
//                 )}
//               </div>
//             </div>
//           )}
//         </div>
//       </div>

//       <div className="bg-white rounded-lg shadow-sm p-4">
//         <h2 className="text-lg font-bold text-blue-900 mb-4 flex items-center">
//           <span className="inline-block w-1 h-5 bg-orange-500 mr-2"></span>
//           Похожие продукты
//         </h2>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//           {relatedProducts.map((relatedProduct) => (
//             <div
//               key={relatedProduct.id}
//               className="bg-white rounded-lg border border-gray-100 hover:border-blue-200 overflow-hidden h-full transition-all hover:shadow-md"
//             >
//               <div className="relative w-full aspect-[3/2] bg-gray-50">
//                 <Image
//                   src={relatedProduct.imageSrc}
//                   alt={relatedProduct.name}
//                   layout="fill"
//                   objectFit="contain"
//                   className="p-4"
//                 />
//                 <span className="absolute top-2 right-2 text-xs font-medium px-2 py-1 rounded-full bg-purple-600 text-white">
//                   Бестселлер
//                 </span>
//               </div>

//               <div className="p-4 flex flex-col justify-between">
//                 <div className="mb-3">
//                   <h3 className="text-sm font-bold text-blue-900 line-clamp-2">{relatedProduct.name}</h3>
//                   <div className="flex items-center text-gray-500 dark:text-gray-400 text-xs mb-1">
//                     {renderRatingStars(relatedProduct.rating)}
//                     <span className="ml-1">({relatedProduct.reviews})</span>
//                   </div>
//                 </div>
//                 <button className="w-full bg-orange-500 text-white px-3 py-2 rounded-lg hover:bg-orange-600 transition-colors text-xs font-medium flex items-center justify-center">
//                   <ShoppingBag className="h-3 w-3 mr-1" />
//                   Найти магазины
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="sm:hidden fixed bottom-0 left-0 right-0 bg-white p-3 border-t border-gray-200 shadow-lg z-20">
//         <button className="w-full bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors font-bold text-sm flex items-center justify-center gap-2">
//           <ShoppingBag className="h-5 w-5" />
//           <span>Найти магазины</span>
//         </button>
//       </div>
//       <div className="h-16 sm:h-0 block sm:hidden"></div>

//       <style jsx global>{`
//         .no-scrollbar {
//           -ms-overflow-style: none;
//           scrollbar-width: none;
//         }
//         .no-scrollbar::-webkit-scrollbar {
//           display: none;
//         }
//         .line-clamp-2 {
//           display: -webkit-box;
//           -webkit-line-clamp: 2;
//           -webkit-box-orient: vertical;
//           overflow: hidden;
//         }
//       `}</style>
//     </main>
//   );
// };

// export default ProductDetailPage;



// 'use client';
// import React, { useState, useEffect } from 'react';
// import Head from 'next/head';
// import Image from 'next/image';
// import Link from 'next/link';
// import { useParams, useRouter } from 'next/navigation';
// import { Star, ChevronLeft, Check, Info, ChevronDown, ChevronUp, Share2 } from 'lucide-react';

// // Interfaces (matching the structure from shop products page)
// interface ProductSize {
//   id: number;
//   name: string;
//   quantity: string;
//   price: string;
// }

// interface ProductReview {
//   id: number;
//   author: string;
//   date: string;
//   rating: number;
//   title: string;
//   content: string;
// }

// interface ProductDetails {
//   id: number;
//   name: string;
//   subtitle: string;
//   fullTitle: string;
//   description: string;
//   longDescription: string;
//   image: string;
//   color: string;
//   brandName: string;
//   category: string;
//   features: string[];
//   directions: string[];
//   rating: number;
//   reviews: number;
//   badge: string;
//   sizes: ProductSize[];
//   reviewsList: ProductReview[];
// }

// interface Product {
//   title: string;
//   description: string;
//   image: string;
//   color: string;
//   brandName: string;
//   category: string;
//   features: string[];
//   details: ProductDetails;
// }

// interface BrandInfo {
//   name: string;
//   color: string;
//   logoUrl: string;
// }

// type TabType = 'description' | 'features' | 'directions' | 'reviews';

// const ProductDetailsPage: React.FC = () => {
//   const params = useParams();
//   const router = useRouter();
//   const productId = params.productId as string;
  
//   const [product, setProduct] = useState<Product | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [activeTab, setActiveTab] = useState<TabType>('description');
//   const [imageError, setImageError] = useState(false);
//   const [expandedReviews, setExpandedReviews] = useState<number[]>([]);
//   const [expandedSection, setExpandedSection] = useState<string | null>(null);
  
//   // Brand information for placeholders (same as in shop page)
//   const brandsInfo: BrandInfo[] = [
//     {
//       name: "Real Plus",
//       color: "#3538C8",
//       logoUrl: "/images/logo/RealPlus.png"
//     },
//     {
//       name: "Wim",
//       color: "#03a31e",
//       logoUrl: "/images/logo/Wim.png"
//     },
//     {
//       name: "Yumşa Plus",
//       color: "#1138b7",
//       logoUrl: "/images/logo/Yumsa.png"
//     },
//     {
//       name: "Awen",
//       color: "#ff3e1c",
//       logoUrl: "/images/logo/Awen.png"
//     },
//     {
//       name: "Glass Plus",
//       color: "#e80c00",
//       logoUrl: "/images/logo/Glass.png"
//     }
//   ];

  
//   const fetchProduct = async () => {
//     try {
//       const response = await fetch(
//         `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/products`,
//         { cache: 'force-cache' }
//       );
  
//       if (!response.ok) {
//         throw new Error(`Ошибка запроса API с кодом ${response.status}`);
//       }
  
//       const products = await response.json();
//       const foundProduct = products.find((item: Product) => item.details.id === Number(productId));
  
//       if (isMounted) {
//         if (foundProduct) {
//           setProduct(foundProduct);
//           localStorage.setItem('cached_product_' + productId, JSON.stringify(foundProduct));
//           if (foundProduct.details.sizes && foundProduct.details.sizes.length > 0) {
//             setSelectedSize(foundProduct.details.sizes[0].id);
//           }
//         } else {
//             console.log('Product not found');
//         }
//         setLoading(false);
//       }
//     } catch (error) {
//       console.log(error);
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchProduct();
//   }, [productId]);

//   // Handle image loading errors
//   const handleImageError = () => {
//     setImageError(true);
//   };

//   // Get brand info for placeholder
//   const getBrandInfo = (brandName: string): BrandInfo => {
//     return brandsInfo.find(brand => brand.name === brandName) || {
//       name: brandName,
//       color: "#000000",
//       logoUrl: "/images/logo/default.png"
//     };
//   };

//   const toggleReviewExpand = (reviewId: number) => {
//     setExpandedReviews(prev => 
//       prev.includes(reviewId)
//         ? prev.filter(id => id !== reviewId)
//         : [...prev, reviewId]
//     );
//   };

//   const toggleSection = (section: string) => {
//     setExpandedSection(expandedSection === section ? null : section);
//   };

//   const renderRatingStars = (rating: number, size: 'sm' | 'md' = 'sm') => {
//     return (
//       <div className="flex text-orange-500">
//         {[...Array(5)].map((_, i) => (
//           <Star 
//             key={i} 
//             fill={i < Math.floor(rating) ? "currentColor" : "none"} 
//             className={size === 'sm' ? "h-4 w-4" : "h-5 w-5"} 
//           />
//         ))}
//       </div>
//     );
//   };

//   const renderProductImage = () => {
//     if (!product) return null;
    
//     if (imageError) {
//       // Render brand logo as placeholder with gradient overlay
//       const brandInfo = getBrandInfo(product.details.brandName);
//       return (
//         <div className="relative w-full h-full bg-gray-50 flex items-center justify-center overflow-hidden">
//           {/* Brand logo with reduced opacity */}
//           <div className="w-3/4 h-3/4 relative opacity-30">
//             <Image 
//               src={brandInfo.logoUrl} 
//               alt={brandInfo.name} 
//               layout="fill" 
//               objectFit="contain"
//             />
//           </div>
//           {/* Gradient overlay */}
//           <div 
//             className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"
//             style={{ backgroundColor: `${brandInfo.color}10` }}
//           ></div>
//           <div className="absolute bottom-0 w-full text-center p-4 text-sm text-gray-500 dark:text-gray-400">
//             Изображение недоступно
//           </div>
//         </div>
//       );
//     } else {
//       return (
//         <Image 
//           src={product.details.image} 
//           alt={product.details.fullTitle} 
//           layout="fill" 
//           objectFit="contain"
//           onError={handleImageError}
//         />
//       );
//     }
//   };

//   const renderTabs = () => {
//     return (
//       <div className="border-b border-gray-200 mb-6">
//         <div className="flex overflow-x-auto scrollbar-hide">
//           <button
//             className={`px-4 py-3 font-bold text-lg whitespace-nowrap ${
//               activeTab === 'description' 
//                 ? 'text-orange-500 border-b-2 border-orange-500' 
//                 : 'text-blue-800 dark:text-blue-100 hover:text-orange-400'
//             }`}
//             onClick={() => setActiveTab('description')}
//           >
//             Описание
//           </button>
//           <button
//             className={`px-4 py-3 font-bold text-lg whitespace-nowrap ${
//               activeTab === 'features' 
//                 ? 'text-orange-500 border-b-2 border-orange-500' 
//                 : 'text-blue-800 dark:text-blue-100 hover:text-orange-400'
//             }`}
//             onClick={() => setActiveTab('features')}
//           >
//             Особенности
//           </button>
//           <button
//             className={`px-4 py-3 font-bold text-lg whitespace-nowrap ${
//               activeTab === 'directions' 
//                 ? 'text-orange-500 border-b-2 border-orange-500' 
//                 : 'text-blue-800 dark:text-blue-100 hover:text-orange-400'
//             }`}
//             onClick={() => setActiveTab('directions')}
//           >
//             Инструкция
//           </button>
//           <button
//             className={`px-4 py-3 font-bold text-lg whitespace-nowrap ${
//               activeTab === 'reviews' 
//                 ? 'text-orange-500 border-b-2 border-orange-500' 
//                 : 'text-blue-800 dark:text-blue-100 hover:text-orange-400'
//             }`}
//             onClick={() => setActiveTab('reviews')}
//           >
//             Отзывы ({product?.details.reviews || 0})
//           </button>
//         </div>
//       </div>
//     );
//   };

//   const renderTabContent = () => {
//     if (!product) return null;

//     switch (activeTab) {
//       case 'description':
//         return (
//           <div className="text-blue-800 dark:text-blue-100">
//             <p className="mb-4">{product.details.longDescription}</p>
//           </div>
//         );
//       case 'features':
//         return (
//           <div className="text-blue-800 dark:text-blue-100">
//             <ul className="list-disc pl-5 space-y-2">
//               {product.details.features.map((feature, index) => (
//                 <li key={index}>{feature}</li>
//               ))}
//             </ul>
//           </div>
//         );
//       case 'directions':
//         return (
//           <div className="text-blue-800 dark:text-blue-100">
//             <ol className="list-decimal pl-5 space-y-2">
//               {product.details.directions.map((direction, index) => (
//                 <li key={index}>{direction}</li>
//               ))}
//             </ol>
//           </div>
//         );
//       case 'reviews':
//         return (
//           <div>
//             {product.details.reviewsList && product.details.reviewsList.length > 0 ? (
//               <div className="space-y-6">
//                 {product.details.reviewsList.map((review) => {
//                   const isExpanded = expandedReviews.includes(review.id);
//                   const reviewContent = isExpanded || review.content.length <= 200 
//                     ? review.content 
//                     : `${review.content.substring(0, 200)}...`;
                  
//                   return (
//                     <div key={review.id} className="border-b border-gray-200 pb-6">
//                       <div className="flex items-center mb-2">
//                         <div className="bg-blue-100 text-blue-800 dark:text-blue-100 rounded-full w-10 h-10 flex items-center justify-center mr-3 font-bold">
//                           {review.author.substring(0, 1).toUpperCase()}
//                         </div>
//                         <div>
//                           <div className="font-bold text-blue-800 dark:text-blue-100">{review.author}</div>
//                           <div className="text-sm text-gray-500 dark:text-gray-400">{review.date}</div>
//                         </div>
//                       </div>
//                       <div className="mb-2">{renderRatingStars(review.rating)}</div>
//                       <h4 className="font-bold text-blue-800 dark:text-blue-100 mb-2">{review.title}</h4>
//                       <p className="text-blue-800 dark:text-blue-100 mb-2">{reviewContent}</p>
//                       {review.content.length > 200 && (
//                         <button 
//                           className="text-orange-500 font-medium"
//                           onClick={() => toggleReviewExpand(review.id)}
//                         >
//                           {isExpanded ? 'Показать меньше' : 'Читать больше'}
//                         </button>
//                       )}
//                     </div>
//                   );
//                 })}
//               </div>
//             ) : (
//               <div className="text-center py-8">
//                 <p className="text-lg text-blue-800 dark:text-blue-100 mb-4">Нет отзывов для этого продукта</p>
//                 <button className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-colors">
//                   Написать отзыв
//                 </button>
//               </div>
//             )}
//           </div>
//         );
//       default:
//         return null;
//     }
//   };

//   // Mobile accordion sections
//   const renderMobileAccordion = () => {
//     if (!product) return null;
    
//     return (
//       <div className="md:hidden divide-y divide-gray-200">
//         <div className="py-4">
//           <button 
//             className="w-full flex justify-between items-center text-left" 
//             onClick={() => toggleSection('description')}
//           >
//             <h3 className="font-bold text-lg text-blue-800 dark:text-blue-100">Описание</h3>
//             {expandedSection === 'description' ? 
//               <ChevronUp className="h-5 w-5 text-orange-500" /> : 
//               <ChevronDown className="h-5 w-5 text-orange-500" />
//             }
//           </button>
//           {expandedSection === 'description' && (
//             <div className="mt-4 text-blue-800 dark:text-blue-100">
//               <p>{product.details.longDescription}</p>
//             </div>
//           )}
//         </div>
        
//         <div className="py-4">
//           <button 
//             className="w-full flex justify-between items-center text-left" 
//             onClick={() => toggleSection('features')}
//           >
//             <h3 className="font-bold text-lg text-blue-800 dark:text-blue-100">Особенности</h3>
//             {expandedSection === 'features' ? 
//               <ChevronUp className="h-5 w-5 text-orange-500" /> : 
//               <ChevronDown className="h-5 w-5 text-orange-500" />
//             }
//           </button>
//           {expandedSection === 'features' && (
//             <div className="mt-4 text-blue-800 dark:text-blue-100">
//               <ul className="list-disc pl-5 space-y-2">
//                 {product.details.features.map((feature, index) => (
//                   <li key={index}>{feature}</li>
//                 ))}
//               </ul>
//             </div>
//           )}
//         </div>
        
//         <div className="py-4">
//           <button 
//             className="w-full flex justify-between items-center text-left" 
//             onClick={() => toggleSection('directions')}
//           >
//             <h3 className="font-bold text-lg text-blue-800 dark:text-blue-100">Инструкция</h3>
//             {expandedSection === 'directions' ? 
//               <ChevronUp className="h-5 w-5 text-orange-500" /> : 
//               <ChevronDown className="h-5 w-5 text-orange-500" />
//             }
//           </button>
//           {expandedSection === 'directions' && (
//             <div className="mt-4 text-blue-800 dark:text-blue-100">
//               <ol className="list-decimal pl-5 space-y-2">
//                 {product.details.directions.map((direction, index) => (
//                   <li key={index}>{direction}</li>
//                 ))}
//               </ol>
//             </div>
//           )}
//         </div>
        
//         <div className="py-4">
//           <button 
//             className="w-full flex justify-between items-center text-left" 
//             onClick={() => toggleSection('reviews')}
//           >
//             <h3 className="font-bold text-lg text-blue-800 dark:text-blue-100">
//               Отзывы ({product.details.reviews})
//             </h3>
//             {expandedSection === 'reviews' ? 
//               <ChevronUp className="h-5 w-5 text-orange-500" /> : 
//               <ChevronDown className="h-5 w-5 text-orange-500" />
//             }
//           </button>
//           {expandedSection === 'reviews' && (
//             <div className="mt-4">
//               {product.details.reviewsList && product.details.reviewsList.length > 0 ? (
//                 <div className="space-y-6">
//                   {product.details.reviewsList.map((review) => {
//                     const isExpanded = expandedReviews.includes(review.id);
//                     const reviewContent = isExpanded || review.content.length <= 200 
//                       ? review.content 
//                       : `${review.content.substring(0, 200)}...`;
                    
//                     return (
//                       <div key={review.id} className="border-b border-gray-200 pb-6 last:border-0">
//                         <div className="flex items-center mb-2">
//                           <div className="bg-blue-100 text-blue-800 dark:text-blue-100 rounded-full w-10 h-10 flex items-center justify-center mr-3 font-bold">
//                             {review.author.substring(0, 1).toUpperCase()}
//                           </div>
//                           <div>
//                             <div className="font-bold text-blue-800 dark:text-blue-100">{review.author}</div>
//                             <div className="text-sm text-gray-500 dark:text-gray-400">{review.date}</div>
//                           </div>
//                         </div>
//                         <div className="mb-2">{renderRatingStars(review.rating)}</div>
//                         <h4 className="font-bold text-blue-800 dark:text-blue-100 mb-2">{review.title}</h4>
//                         <p className="text-blue-800 dark:text-blue-100 mb-2">{reviewContent}</p>
//                         {review.content.length > 200 && (
//                           <button 
//                             className="text-orange-500 font-medium"
//                             onClick={() => toggleReviewExpand(review.id)}
//                           >
//                             {isExpanded ? 'Показать меньше' : 'Читать больше'}
//                           </button>
//                         )}
//                       </div>
//                     );
//                   })}
//                 </div>
//               ) : (
//                 <div className="text-center py-4">
//                   <p className="text-lg text-blue-800 dark:text-blue-100 mb-4">Нет отзывов для этого продукта</p>
//                   <button className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-colors">
//                     Написать отзыв
//                   </button>
//                 </div>
//               )}
//             </div>
//           )}
//         </div>
//       </div>
//     );
//   };

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <div className="text-blue-800 dark:text-blue-100 text-xl">Загрузка продукта...</div>
//       </div>
//     );
//   }

//   if (!product) {
//     return (
//       <div className="min-h-screen flex flex-col items-center justify-center">
//         <div className="text-blue-800 dark:text-blue-100 text-2xl mb-4">Продукт не найден</div>
//         <button 
//           className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-colors"
//           onClick={() => router.push('/shop-products')}
//         >
//           Вернуться в магазин
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-white">
//       <Head>
//         <title>{product.details.fullTitle} | Магазин продуктов</title>
//         <meta name="description" content={product.details.description} />
//         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <main className="container mx-auto max-w-7xl px-4 sm:px-6">
//         {/* Breadcrumbs */}
//         <div className="py-4">
//           <div className="flex items-center text-xs text-blue-800 dark:text-blue-100 font-light">
//             <Link href="/shop-products" className="hover:text-orange-500">
//               Магазин продуктов
//             </Link>
//             <span className="mx-2">/</span>
//             <span className="text-blue-800 dark:text-blue-100">{product.details.fullTitle}</span>
//           </div>
//         </div>

//         {/* Back button (mobile) */}
//         <div className="md:hidden mb-4">
//           <button
//             onClick={() => router.back()}
//             className="flex items-center text-blue-800 dark:text-blue-100 font-medium hover:text-orange-500"
//           >
//             <ChevronLeft className="h-5 w-5 mr-1" />
//             Назад
//           </button>
//         </div>

//         {/* Product Main Section */}
//         <div className="flex flex-col md:flex-row md:space-x-8 mb-8">
//           {/* Product Image */}
//           <div className="w-full md:w-1/2 mb-6 md:mb-0">
//             <div className="relative bg-white rounded-lg shadow-sm h-64 sm:h-80 md:h-96 lg:h-[500px]">
//               {product.details.badge && (
//                 <div className="absolute top-4 right-4 w-16 h-16 sm:w-20 sm:h-20 z-10">
//                   <div className="w-full h-full rounded-full bg-purple-900 flex flex-col items-center justify-center text-white text-xs font-bold text-center p-1">
//                     {product.details.badge.split(' ').map((word, index) => (
//                       <span key={index}>{word}</span>
//                     ))}
//                   </div>
//                 </div>
//               )}
//               <div className="w-full h-full relative">
//                 {renderProductImage()}
//               </div>
//             </div>
//           </div>

//           {/* Product Info */}
//           <div className="w-full md:w-1/2">
//             <div className="mb-1 text-sm text-blue-600">
//               {product.details.brandName} | {product.details.category}
//             </div>
            
//             <h1 className="text-2xl sm:text-3xl mb-2 text-blue-800 dark:text-blue-100">
//               <span>{product.details.name} </span>
//               <span className="font-bold">{product.details.subtitle}</span>
//             </h1>
            
//             <div className="flex items-center mb-4">
//               {renderRatingStars(product.details.rating, 'md')}
//               <span className="text-blue-800 dark:text-blue-100 ml-2">({product.details.reviews} отзывов)</span>
//             </div>
            
//             <p className="text-lg text-blue-800 dark:text-blue-100 mb-6">
//               {product.details.description}
//             </p>
            
//             {/* Sizes Section */}
//             <div className="mb-6">
//               <h3 className="font-bold text-blue-800 dark:text-blue-100 text-lg mb-3">Доступные размеры:</h3>
//               <div className="flex flex-wrap gap-2">
//                 {product.details.sizes && product.details.sizes.length > 0 ? (
//                   product.details.sizes.map(size => (
//                     <div key={size.id} className="border border-gray-200 rounded-lg p-4 flex-grow max-w-[150px]">
//                       <div className="font-bold text-blue-800 dark:text-blue-100 mb-1">{size.name}</div>
//                       <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">{size.quantity}</div>
//                       <div className="text-sm font-bold text-blue-800 dark:text-blue-100">{size.price}</div>
//                     </div>
//                   ))
//                 ) : (
//                   <span className="bg-blue-50 text-blue-800 dark:text-blue-100 px-4 py-2 rounded-lg">
//                     Нет доступных размеров
//                   </span>
//                 )}
//               </div>
//             </div>
            
//             {/* Find Stores Button */}
//             <button className="w-full md:w-auto bg-orange-500 text-white px-8 py-3 rounded-full hover:bg-orange-600 transition-colors font-bold text-lg mb-6">
//               Найти магазины
//             </button>
            
//             {/* Share Button */}
//             <button className="flex items-center text-blue-800 dark:text-blue-100 hover:text-orange-500 font-medium">
//               <Share2 className="h-5 w-5 mr-2" />
//               Поделиться
//             </button>
//           </div>
//         </div>

//         {/* Product Details Tabs (Desktop) */}
//         <div className="hidden md:block mb-16">
//           {renderTabs()}
//           <div className="bg-white p-6 rounded-lg">
//             {renderTabContent()}
//           </div>
//         </div>

//         {/* Product Details Accordion (Mobile) */}
//         <div className="md:hidden mb-16">
//           {renderMobileAccordion()}
//         </div>

//         {/* Related Products Section Placeholder */}
//         <div className="mb-16">
//           <h2 className="text-2xl font-bold text-blue-800 dark:text-blue-100 mb-6">Похожие продукты</h2>
//           <div className="text-center py-10 bg-gray-50 rounded">
//             <p className="text-lg text-blue-800 dark:text-blue-100">Похожие продукты будут здесь</p>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default ProductDetailsPage;


// // Main page component that follows Next.js conventions
// const ProductDetailPage = ({ params, searchParams }: ProductDetailPageProps) => {
//   // Extract the productId directly here
//   return <ProductDetailClient productId={params.productId} searchParams={searchParams} />;
// };

// export default ProductDetailPage;




// interface ProductDetailPageProps {
//   params: { productId: string };
// }

// export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
//   const { productId } = params;
//   return <div>Product ID: {productId}</div>;
// }



// 'use client';
// import React, { useState, useEffect } from 'react';
// import Head from 'next/head';
// import Image from 'next/image';
// import { useParams } from 'next/navigation';
// import { Star, ChevronLeft } from 'lucide-react';
// import Link from 'next/link';

// // Interfaces (same as ShopProductsPage)
// interface ProductSize {
//   id: number;
//   name: string;
//   quantity: string;
//   price: string;
// }

// interface ProductReview {
//   id: number;
//   author: string;
//   date: string;
//   rating: number;
//   title: string;
//   content: string;
// }

// interface Products {
//   id: number;
//   name: string;
//   subtitle: string;
//   fullTitle: string;
//   description: string;
//   longDescription: string;
//   image: string;
//   color: string;
//   brandName: string;
//   category: string;
//   features: string[];
//   directions: string[];
//   rating: number;
//   reviews: number;
//   badge: string;
//   sizes: ProductSize[];
//   reviewsList: ProductReview[];
// }

// interface ProductCategories {
//   title: string;
//   description: string;
//   image: string;
//   color: string;
//   brandName: string;
//   category: string;
//   features: string[];
//   products: Products[];
// }

// interface BrandInfo {
//   name: string;
//   color: string;
//   logoUrl: string;
// }

// const ProductDetailsPage: React.FC = () => {
//   const { id } = useParams(); // Get product ID from URL
//   const [product, setProduct] = useState<Products | null>(null);
//   const [loading, setLoading] = useState(true);
//   const [imageError, setImageError] = useState(false);

//   // Brand info for fallback images
//   const brandsInfo: BrandInfo[] = [
//     { name: "Real Plus", color: "#3538C8", logoUrl: "/images/logo/RealPlus.png" },
//     { name: "Wim", color: "#03a31e", logoUrl: "/images/logo/Wim.png" },
//     { name: "Yumşa Plus", color: "#1138b7", logoUrl: "/images/logo/Yumsa.png" },
//     { name: "Awen", color: "#ff3e1c", logoUrl: "/images/logo/Awen.png" },
//     { name: "Glass Plus", color: "#e80c00", logoUrl: "/images/logo/Glass.png" }
//   ];

//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const res = await fetch('/api/products');
//         const data: ProductCategories[] = await res.json();
        
//         // Find the product by ID across all categories
//         const foundProduct = data
//           .flatMap(category => category.products)
//           .find(p => p.id === Number(id));
        
//         setProduct(foundProduct || null);
//         setLoading(false);
//       } catch (err) {
//         console.error('Ошибка при загрузке продукта:', err);
//         setLoading(false);
//       }
//     };

//     fetchProduct();
//   }, [id]);

//   const getBrandInfo = (brandName: string): BrandInfo => {
//     return brandsInfo.find(brand => brand.name === brandName) || {
//       name: brandName,
//       color: "#000000",
//       logoUrl: "/images/logo/default.png"
//     };
//   };

//   const handleImageError = () => {
//     setImageError(true);
//   };

//   const renderRatingStars = (rating: number) => {
//     return (
//       <div className="flex text-orange-500">
//         {[...Array(5)].map((_, i) => (
//           <Star 
//             key={i} 
//             fill={i < Math.floor(rating) ? "currentColor" : "none"} 
//             className="h-5 w-5" 
//           />
//         ))}
//         <span className="text-blue-800 dark:text-blue-100 ml-2 text-sm font-normal">({rating})</span>
//       </div>
//     );
//   };

//   const renderProductImage = () => {
//     if (!product) return null;

//     const brandInfo = getBrandInfo(product.brandName);

//     if (imageError) {
//       return (
//         <div className="relative w-full h-full bg-gray-50 flex items-center justify-center overflow-hidden">
//           <div className="w-3/4 h-3/4 relative opacity-30">
//             <Image 
//               src={brandInfo.logoUrl} 
//               alt={brandInfo.name} 
//               layout="fill" 
//               objectFit="contain"
//             />
//           </div>
//           <div 
//             className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"
//             style={{ backgroundColor: `${brandInfo.color}10` }}
//           ></div>
//           <div className="absolute bottom-0 w-full text-center p-4 text-sm text-gray-500 dark:text-gray-400">
//             Изображение недоступно
//           </div>
//         </div>
//       );
//     }

//     return (
//       <Image 
//         src={product.image} 
//         alt={product.fullTitle} 
//         layout="fill" 
//         objectFit="contain"
//         onError={handleImageError}
//       />
//     );
//   };

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <div className="text-blue-800 dark:text-blue-100 text-xl">Загрузка продукта...</div>
//       </div>
//     );
//   }

//   if (!product) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <div className="text-blue-800 dark:text-blue-100 text-xl">Продукт не найден</div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-white">
//       <Head>
//         <title>{product.fullTitle}</title>
//         <meta name="description" content={product.description} />
//         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <main className="container mx-auto max-w-7xl px-4 sm:px-6 py-6">
//         {/* Breadcrumb */}
//         <div className="flex items-center text-sm text-blue-800 dark:text-blue-100 mb-6">
//           <Link href="/" className="hover:text-orange-500">Главная</Link>
//           <span className="mx-2">/</span>
//           <Link href="/shop" className="hover:text-orange-500">Магазин</Link>
//           <span className="mx-2">/</span>
//           <span>{product.name}</span>
//         </div>

//         {/* Back Button */}
//         <Link href="/shop" className="flex items-center text-blue-600 hover:text-orange-500 mb-6">
//           <ChevronLeft className="w-5 h-5 mr-1" />
//           Назад к продуктам
//         </Link>

//         {/* Product Details */}
//         <div className="flex flex-col md:flex-row md:space-x-8">
//           {/* Product Image */}
//           <div className="w-full md:w-1/2 relative mb-6 md:mb-0">
//             <div className="relative h-64 sm:h-96 md:h-[500px] w-full">
//               {product.badge && (
//                 <div className="absolute top-0 right-0 w-20 h-20 z-10">
//                   <div className="w-full h-full rounded-full bg-purple-900 flex flex-col items-center justify-center text-white text-xs font-bold text-center p-1">
//                     {product.badge.split(' ').map((word, index) => (
//                       <span key={index}>{word}</span>
//                     ))}
//                   </div>
//                 </div>
//               )}
//               {renderProductImage()}
//             </div>
//           </div>

//           {/* Product Info */}
//           <div className="w-full md:w-1/2">
//             <div className="text-xs text-blue-600 mb-2">{product.brandName} | {product.category}</div>
//             <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-800 dark:text-blue-100 mb-4">
//               {product.name} {product.subtitle}
//             </h1>
            
//             {/* Rating */}
//             <div className="flex items-center mb-4">
//               {renderRatingStars(product.rating)}
//               <span className="text-blue-800 dark:text-blue-100 ml-2">({product.reviews} отзывов)</span>
//             </div>

//             {/* Description */}
//             <p className="text-blue-800 dark:text-blue-100 mb-6 text-lg" style={{ fontFamily: '"Kamber Medium", sans-serif' }}>
//               {product.longDescription}
//             </p>

//             {/* Features */}
//             <div className="mb-6">
//               <h3 className="font-bold text-blue-800 dark:text-blue-100 mb-3 text-lg">Особенности:</h3>
//               <ul className="list-disc pl-5 text-blue-800 dark:text-blue-100">
//                 {product.features.map((feature, index) => (
//                   <li key={index} className="mb-2">{feature}</li>
//                 ))}
//               </ul>
//             </div>

//             {/* Sizes */}
//             <div className="mb-6">
//               <h3 className="font-bold text-blue-800 dark:text-blue-100 mb-3 text-lg">Доступные размеры:</h3>
//               <div className="flex flex-wrap gap-3">
//                 {product.sizes.map(size => (
//                   <div 
//                     key={size.id} 
//                     className="bg-blue-50 text-blue-800 dark:text-blue-100 px-4 py-2 rounded-full text-sm flex items-center"
//                   >
//                     <span>{size.name}</span>
//                     <span className="ml-2 font-bold">{size.price}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Directions */}
//             {product.directions.length > 0 && (
//               <div className="mb-6">
//                 <h3 className="font-bold text-blue-800 dark:text-blue-100 mb-3 text-lg">Инструкции:</h3>
//                 <ul className="list-decimal pl-5 text-blue-800 dark:text-blue-100">
//                   {product.directions.map((direction, index) => (
//                     <li key={index} className="mb-2">{direction}</li>
//                   ))}
//                 </ul>
//               </div>
//             )}

//             {/* Action Button */}
//             <button className="bg-orange-500 text-white w-full md:w-auto px-8 py-3 rounded-full hover:bg-orange-600 transition-colors font-bold text-lg">
//               Найти магазины
//             </button>
//           </div>
//         </div>

//         {/* Reviews */}
//         {product.reviewsList.length > 0 && (
//           <div className="mt-12">
//             <h2 className="text-2xl font-bold text-blue-800 dark:text-blue-100 mb-6" style={{ fontFamily: '"Avenir Next Heavy", sans-serif' }}>
//               Отзывы ({product.reviewsList.length})
//             </h2>
//             <div className="space-y-6">
//               {product.reviewsList.map(review => (
//                 <div key={review.id} className="border-b border-gray-200 pb-6">
//                   <div className="flex items-center mb-2">
//                     {renderRatingStars(review.rating)}
//                     <span className="text-blue-800 dark:text-blue-100 ml-2 font-bold">{review.author}</span>
//                   </div>
//                   <h4 className="text-blue-800 dark:text-blue-100 font-semibold mb-1">{review.title}</h4>
//                   <p className="text-blue-800 dark:text-blue-100">{review.content}</p>
//                   <span className="text-xs text-gray-500 dark:text-gray-400">{review.date}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}
//       </main>
//     </div>
//   );
// };

// export default ProductDetailsPage;

'use client';
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { Star, ChevronLeft } from 'lucide-react';
import Link from 'next/link';

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

interface ProductCategories {
  title: string;
  description: string;
  image: string;
  color: string;
  brandName: string;
  category: string;
  features: string[];
  products: Products[];
}

interface BrandInfo {
  name: string;
  color: string;
  logoUrl: string;
}

const ProductDetailsPage: React.FC = () => {
  const { productId } = useParams(); // Changed from 'id' to 'productId'
  const [product, setProduct] = useState<Products | null>(null);
  const [loading, setLoading] = useState(true);
  const [imageError, setImageError] = useState(false);

  const brandsInfo: BrandInfo[] = [
    { name: "Real Plus", color: "#3538C8", logoUrl: "/images/logo/RealPlus.png" },
    { name: "Wim", color: "#03a31e", logoUrl: "/images/logo/Wim.png" },
    { name: "Yumşa Plus", color: "#1138b7", logoUrl: "/images/logo/Yumsa.png" },
    { name: "Awen", color: "#ff3e1c", logoUrl: "/images/logo/Awen.png" },
    { name: "Glass Plus", color: "#e80c00", logoUrl: "/images/logo/Glass.png" }
  ];

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        console.log('Fetching product for productId:', productId); // Debug
        const res = await fetch('/api/products');
        if (!res.ok) throw new Error('API request failed');
        const data: ProductCategories[] = await res.json();
        
        const foundProduct = data
          .flatMap(category => category.products)
          .find(p => p.id === Number(productId)); // Still using 'id' from data
        
        console.log('Found product:', foundProduct); // Debug
        setProduct(foundProduct || null);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching product:', err);
        setLoading(false);
      }
    };

    if (productId) fetchProduct();
  }, [productId]); // Changed dependency from 'id' to 'productId'

  const getBrandInfo = (brandName: string): BrandInfo => {
    return brandsInfo.find(brand => brand.name === brandName) || {
      name: brandName,
      color: "#000000",
      logoUrl: "/images/logo/default.png"
    };
  };

  const handleImageError = () => {
    setImageError(true);
  };

  const renderRatingStars = (rating: number) => {
    return (
      <div className="flex text-orange-500">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            fill={i < Math.floor(rating) ? "currentColor" : "none"} 
            className="h-5 w-5" 
          />
        ))}
        <span className="text-blue-800 dark:text-blue-100 ml-2 text-sm font-normal">({rating})</span>
      </div>
    );
  };

  const renderProductImage = () => {
    if (!product) return null;

    const brandInfo = getBrandInfo(product.brandName);

    if (imageError) {
      return (
        <div className="relative w-full h-full bg-gray-50 flex items-center justify-center overflow-hidden">
          <div className="w-3/4 h-3/4 relative opacity-30">
            <Image 
              src={brandInfo.logoUrl} 
              alt={brandInfo.name} 
              layout="fill" 
              objectFit="contain"
            />
          </div>
          <div 
            className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"
            style={{ backgroundColor: `${brandInfo.color}10` }}
          ></div>
          <div className="absolute bottom-0 w-full text-center p-4 text-sm text-gray-500 dark:text-gray-400">
            Изображение недоступно
          </div>
        </div>
      );
    }

    return (
      <Image 
        src={product.image} 
        alt={product.fullTitle} 
        layout="fill" 
        objectFit="contain"
        onError={handleImageError}
      />
    );
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-blue-800 dark:text-blue-100 text-xl">Загрузка продукта...</div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-blue-800 dark:text-blue-100 text-xl">Продукт не найден</div>
      </div>
    );
  }

  // const ProductBadge = ({ badgeText }: { badgeText: string }) => {
  //   return (
  //     <div className="absolute top-0 right-0 z-10">
  //       {/* Corner ribbon container */}
  //       <div className="w-40 h-40 overflow-hidden absolute top-0 right-0">
  //         {/* Ribbon with correct orientation */}
  //         <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white font-bold 
  //                       text-xs tracking-wider shadow-lg text-center w-56 absolute top-10 right-[-60px] 
  //                       transform rotate-45">
  //           {/* Inner border for depth */}
  //           <div className="border-t border-b border-white border-opacity-20 py-1.5 px-1">
  //             {/* Text with decorative elements */}
  //             <span className="flex justify-center items-center">
  //               <span className="mr-1 text-purple-300">✦</span>
  //               <span className="uppercase tracking-widest">{badgeText}</span>
  //               <span className="ml-1 text-purple-300">✦</span>
  //             </span>
  //           </div>
            
  //           {/* Shine effect */}
  //           <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20"></div>
  //         </div>
  //       </div>
        
  //       {/* Ribbon fold shadow - left side */}
  //       {/* <div className="absolute top-0 right-0 w-6 h-6 bg-purple-900 transform origin-bottom-left rotate-45"></div> */}
  //     </div>
  //   );
  // };

  const ProductBadge = ({ badgeText }: { badgeText: string }) => {
    // Slower animation speed with more reasonable duration
    const animationDuration = Math.max(badgeText.length * 0.5, 10);
    
    return (
      <div className="absolute top-0 right-0 z-10">
        {/* Corner ribbon container */}
        <div className="w-40 h-40 overflow-hidden absolute -top-6 -right-4">
          {/* Ribbon with correct orientation */}
          <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white font-bold 
                        text-xs shadow-lg text-center w-56 absolute top-10 right-[-60px] 
                        transform rotate-45">
            {/* Inner border for depth */}
            <div className="border-t border-b border-white border-opacity-20 py-1 overflow-hidden">
              {/* Animated text container with masked edges */}
              <div className="relative overflow-hidden w-full">
                {/* Text with decorative elements - duplicate for seamless loop */}
                <div 
                  className="inline-block uppercase tracking-wide text-xs whitespace-nowrap"
                  style={{
                    animation: `scrollBadge ${animationDuration}s linear infinite`,
                    paddingLeft: "0", // Remove padding
                  }}
                >
                  <span className="text-purple-300">★</span> {badgeText} <span className="text-purple-300">✦</span> {badgeText} <span className="text-purple-300">★</span>
                  <span className="text-purple-300"></span> {badgeText} <span className="text-purple-300">✦</span> {badgeText} <span className="text-purple-300">★</span>
                </div>
              </div>
            </div>
            
            {/* Shine effect with animation */}
            <div 
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20"
              style={{
                animation: "shimmerEffect 3s infinite linear",
              }}
            ></div>
            
            {/* Gradient mask for smooth edges */}
            <div className="absolute inset-y-0 left-0 w-6 bg-gradient-to-r from-purple-700 to-transparent z-10"></div>
            <div className="absolute inset-y-0 right-0 w-6 bg-gradient-to-l from-purple-700 to-transparent z-10"></div>
          </div>
        </div>
        
        {/* Global CSS for the animations */}
        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes scrollBadge {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); } /* Only move half the distance for seamless loop */
          }
          
          @keyframes shimmerEffect {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
        `}} />
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <Head>
        <title>{product.fullTitle}</title>
        <meta name="description" content={product.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto max-w-7xl px-4 sm:px-6 py-6">
        <div className="flex items-center text-sm text-blue-800 dark:text-blue-100 mb-6">
          <Link href="/" className="hover:text-orange-500">Главная</Link>
          <span className="mx-2">/</span>
          <Link href="/shop" className="hover:text-orange-500">Магазин</Link>
          <span className="mx-2">/</span>
          <span>{product.name}</span>
        </div>

        <Link href="/shop" className="flex items-center text-blue-600 hover:text-orange-500 mb-6">
          <ChevronLeft className="w-5 h-5 mr-1" />
          Назад к продуктам
        </Link>

        <div className="flex flex-col md:flex-row md:space-x-8">
          <div className="w-full md:w-1/2 relative mb-6 md:mb-0">
            <div className="relative h-64 sm:h-96 md:h-[500px] w-full">
              {product.badge && <ProductBadge badgeText={product.badge} />}
              {renderProductImage()}
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <div className="text-xs text-blue-600 mb-2">{product.brandName} | {product.category}</div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-800 dark:text-blue-100 mb-4">
              {product.name} {product.subtitle}
            </h1>
            <div className="flex items-center mb-4">
              {renderRatingStars(product.rating)}
              <span className="text-blue-800 dark:text-blue-100 ml-2">({product.reviews} отзывов)</span>
            </div>
            <p className="text-blue-800 dark:text-blue-100 mb-6 text-lg" style={{ fontFamily: '"Kamber Medium", sans-serif' }}>
              {product.longDescription}
            </p>
            <div className="mb-6">
              <h3 className="font-bold text-blue-800 dark:text-blue-100 mb-3 text-lg">Особенности:</h3>
              <ul className="list-disc pl-5 text-blue-800 dark:text-blue-100">
                {product.features.map((feature, index) => (
                  <li key={index} className="mb-2">{feature}</li>
                ))}
              </ul>
            </div>
            <div className="mb-6">
              <h3 className="font-bold text-blue-800 dark:text-blue-100 mb-3 text-lg">Доступные размеры:</h3>
              <div className="flex flex-wrap gap-3">
                {/* {product.sizes.map(size => (
                  <div 
                    key={size.id} 
                    className="bg-blue-50 text-blue-800 dark:text-blue-100 px-4 py-2 rounded-full text-sm flex items-center"
                  >
                    <span>{size.name}</span>
                    <span className="ml-2 font-bold">{size.price}</span>
                  </div>
                ))} */}
                <div 
                    className="bg-blue-50 text-blue-800 dark:text-blue-100 px-4 py-2 rounded-full text-sm flex items-center"
                  >
                    <span>-</span>
                  </div>
              </div>
            </div>
            {product.directions.length > 0 && (
              <div className="mb-6">
                <h3 className="font-bold text-blue-800 dark:text-blue-100 mb-3 text-lg">Инструкции:</h3>
                <ul className="list-decimal pl-5 text-blue-800 dark:text-blue-100">
                  {product.directions.map((direction, index) => (
                    <li key={index} className="mb-2">{direction}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {product.reviewsList.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-blue-800 dark:text-blue-100 mb-6" style={{ fontFamily: '"Avenir Next Heavy", sans-serif' }}>
              Отзывы ({product.reviewsList.length})
            </h2>
            <div className="space-y-6">
              {product.reviewsList.map(review => (
                <div key={review.id} className="border-b border-gray-200 dark:border-gray-700 pb-6">
                  <div className="flex items-center mb-2">
                    {renderRatingStars(review.rating)}
                    <span className="text-blue-800 dark:text-blue-100 ml-2 font-bold">{review.author}</span>
                  </div>
                  <h4 className="text-blue-800 dark:text-blue-100 font-semibold mb-1">{review.title}</h4>
                  <p className="text-blue-800 dark:text-blue-100">{review.content}</p>
                  <span className="text-xs text-gray-500 dark:text-gray-400">{review.date}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default ProductDetailsPage;