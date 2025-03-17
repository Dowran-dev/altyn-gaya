// 'use client';
// import React, { useState, useEffect } from 'react';
// import Head from 'next/head';
// import Image from 'next/image';
// import Link from 'next/link';
// import { Star, ChevronDown, Grid, List } from 'lucide-react';

// interface Product {
//   id: number;
//   name: string;
//   subtitle: string;
//   description: string;
//   rating: number;
//   reviews: number;
//   imageSrc: string;
//   badge?: string;
//   slug: string;
// } 

// type SortOption = 'popularity' | 'rating' | 'a-z' | 'z-a';
// type ViewMode = 'grid' | 'list';

// const ShopProductsPage: React.FC = () => {

//   const [products, setProducts] = useState<Product[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [sortBy, setSortBy] = useState<SortOption>('popularity');
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [viewMode, setViewMode] = useState<ViewMode>('grid');

//   useEffect(() => {
//     fetch('/api/products')
//       .then((res) => res.json())
//       .then((data) => {
//         setProducts(data);
//         setLoading(false);
//       })
//       .catch((err) => console.error(err));
//   }, []);

//   if (loading) return <div>Loading...</div>;

  

//   // Sort products based on current sort selection
//   const sortedProducts = [...products].sort((a, b) => {
//     switch (sortBy) {
//       case 'rating':
//         return b.rating - a.rating;
//       case 'a-z':
//         return a.subtitle.localeCompare(b.subtitle);
//       case 'z-a':
//         return b.subtitle.localeCompare(a.subtitle);
//       case 'popularity':
//       default:
//         return b.reviews - a.reviews;
//     }
//   });

//   // Format sort option text for display
//   const getSortOptionText = (option: SortOption): string => {
//     switch (option) {
//       case 'popularity': return 'Popularity';
//       case 'rating': return 'Product Rating';
//       case 'a-z': return 'Product A-Z';
//       case 'z-a': return 'Product Z-A';
//     }
//   };

//   // Render rating stars
//   const renderRatingStars = (rating: number) => {
//     return (
//       <div className="flex text-orange-500">
//         {[...Array(Math.floor(rating))].map((_, i) => (
//           <Star key={i} fill="currentColor" className="h-4 w-4" />
//         ))}
//         {rating % 1 > 0 && (
//           <Star key="half" className="h-4 w-4" fill="currentColor" strokeWidth={0} style={{ clipPath: 'inset(0 50% 0 0)' }} />
//         )}
//       </div>
//     );
//   };

//   // Render product grid item
//   const renderGridItem = (product: Product) => (
//     <Link href={`/product-details/${product.slug}`} key={product.id}>
//       <div key={product.id} className="bg-white p-4 rounded">
//         <div className="relative h-64 w-full mb-4">
//           {product.badge && (
//             <div className="absolute top-0 right-0 w-16 h-16 z-10">
//               <div className="w-16 h-16 rounded-full bg-purple-900 flex flex-col items-center justify-center text-white text-xs font-bold text-center p-1">
//                 <span>{product.badge.split(' ')[0]}</span>
//                 <span>{product.badge.split(' ')[1]}</span>
//                 <span>{product.badge.split(' ')[2]}</span>
//               </div>
//             </div>
//           )}
//           <div className="w-full h-full relative">
//             <Image 
//               src={product.imageSrc} 
//               alt={`${product.name} ${product.subtitle}`} 
//               layout="fill" 
//               objectFit="contain"
//             />
//           </div>
//         </div>
//         <div className="text-left">
//           <h2 className="text-xl mb-1">
//             <span className="text-blue-800">{product.name} </span>
//             <span className="text-blue-800 font-bold">{product.subtitle}</span>
//           </h2>
//           <div className="flex justify-start items-center mb-3">
//             {renderRatingStars(product.rating)}
//             <span className="text-blue-800 ml-2 text-xs font-normal">({product.reviews})</span>
//           </div>
//           {/* <p className="text-blue-800 mb-4">{product.description}</p> */}
//           <button className="bg-orange-500 text-white px-8 py-2 my-4 rounded-full hover:bg-orange-600 transition-colors font-bold text-lg">
//             Find Retailers
//           </button>
//         </div>
//       </div>
//     </Link>
//   );

//   // Render product list item
//   const renderListItem = (product: Product) => (
//     <div key={product.id} className="border-b border-gray-200 pb-8 mb-8">
//       <div className="flex">
//         <div className="w-1/3 relative">
//       <Link href={`/product/${product.slug}`} className="w-1/3 relative">
//           {product.badge && (
//             <div className="absolute top-0 right-12 w-20 h-20">
//               <div className="w-20 h-20 rounded-full bg-purple-900 flex flex-col items-center justify-center text-white text-xs font-bold text-center p-1">
//                 <span>{product.badge.split(' ')[0]}</span>
//                 <span>{product.badge.split(' ')[1]}</span>
//                 <span>{product.badge.split(' ')[2]}</span>
//               </div>
//             </div>
//           )}
//           <div className="relative h-72 w-72">
//             <div className="w-full h-full relative">
//               <Image 
//                 src={product.imageSrc} 
//                 alt={`${product.name} ${product.subtitle}`} 
//                 layout="fill" 
//                 objectFit="contain"
//               />
//             </div>
//           </div>
//         </Link>
//         </div>
//         <div className="w-2/3 pl-4">
//         <Link href={`/product/${product.slug}`}>
//             <h2 className="text-2xl mb-1">
//               <span className="text-blue-800">{product.name} </span>
//               <span className="text-blue-800 font-bold">{product.subtitle}</span>
//               {product.subtitle === 'OXI Boost' && (
//                 <span className="text-blue-800"> Power PODS<sup>®</sup></span>
//               )}
//               {product.subtitle === 'Original Scent' && (
//                 <span className="text-blue-800"> Liquid Laundry Detergent</span>
//               )}
//             </h2>
//           </Link>
//           <div className="flex items-center mb-3">
//             {renderRatingStars(product.rating)}
//             <span className="text-blue-800 ml-2">({product.reviews})</span>
//           </div>
//           <p className="text-blue-800 mb-6" style={{ fontFamily: '"Kamber Medium", sans-serif' }}>{product.description}</p>
//           <button className="bg-orange-500 text-white px-8 py-3 rounded-full hover:bg-orange-600 transition-colors font-bold text-lg">
//             Find Retailers
//           </button>
//         </div>
//       </div>
//     </div>
//   );

//   return (
//     <div className="min-h-screen bg-white">
//       <Head>
//         <title>Shop Tide Products</title>
//         <meta name="description" content="Browse the complete line of Tide laundry products" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <main className="container mx-auto max-w-6xl px-4">
//         <div className="py-4">
//           <div className="text-xs text-blue-800 font-light mt-6">Shop Products</div>
//         </div>

//         <div className="flex justify-between items-center my-8">
//           <h1 className="text-5xl font-light text-orange-500">
//             Shop <span className="font-bold" style={{ fontFamily: '"Avenir Next Heavy", sans-serif' }}>Tide Products</span>
//           </h1>
//           <button className="bg-orange-500 text-white font-bold text-lg px-6 py-3 rounded-full hover:bg-orange-600 transition-colors">
//             Browse other products
//           </button>
//         </div>

//         <div className="flex justify-between items-center mb-6 border-b border-gray-200 pb-4">
//           <div className="text-blue-800 font-bold text-xl" style={{ fontFamily: '"Avenir Next Heavy", sans-serif' }}>57 Products</div>
//           <div className="flex items-center gap-6">
//             <div className="flex items-center gap-2 relative">
//               <span className="text-blue-900 font-semibold" style={{ fontFamily: '"Avenir Next Heavy", sans-serif' }}>Sort by:</span>
//               <div 
//                 className="flex items-center cursor-pointer" 
//                 onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//               >
//                 <span className="text-blue-900">{getSortOptionText(sortBy)}</span>
//                 <ChevronDown className="text-orange-500 ml-1 h-4 w-4" />
//               </div>
              
//               {/* Dropdown menu */}
//               {isDropdownOpen && (
//                 <div className="absolute top-full right-0 mt-1 bg-white border border-gray-200 shadow-lg z-10 w-40">
//                   {(['popularity', 'rating', 'a-z', 'z-a'] as SortOption[]).map(option => (
//                     <div 
//                       key={option} 
//                       className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-blue-900"
//                       onClick={() => {
//                         setSortBy(option);
//                         setIsDropdownOpen(false);
//                       }}
//                     >
//                       {getSortOptionText(option)}
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>
//             <div className="flex border-2 border-gray-200">
//               <button 
//                 className={`p-2 ${viewMode === 'grid' ? 'bg-orange-100' : ''}`}
//                 onClick={() => setViewMode('grid')}
//               >
//                 <Grid className={`h-5 w-5 ${viewMode === 'grid' ? 'text-orange-500' : 'text-gray-400'}`} />
//               </button>
//               <button 
//                 className={`p-2 ${viewMode === 'list' ? 'bg-orange-100' : ''}`}
//                 onClick={() => setViewMode('list')}
//               >
//                 <List className={`h-5 w-5 ${viewMode === 'list' ? 'text-orange-500' : 'text-gray-400'}`} />
//               </button>
//             </div>
//           </div>
//         </div>

//         {viewMode === 'grid' ? (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
//             {sortedProducts.map(product => renderGridItem(product))}
//           </div>
//         ) : (
//           <div className="space-y-8">
//             {sortedProducts.map(product => renderListItem(product))}
//           </div>
//         )}
//       </main>
//     </div>
//   );
// };

// export default ShopProductsPage;


import ShopProductsPage from './ShopProductsPage';

export default function ShopPage() {
  return <ShopProductsPage />;
}