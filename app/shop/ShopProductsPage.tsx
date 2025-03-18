// 'use client';
// import React, { useState, useEffect } from 'react';
// import Head from 'next/head';
// import Image from 'next/image';
// import Link from 'next/link';
// import { Star, ChevronDown, Grid, List, Filter, X, ChevronUp, Check } from 'lucide-react';

// // Updated interfaces (matching the new structure)
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

// interface FilterOptions {
//   brands: string[];
//   categories: string[];
//   minRating: number;
//   hasBadge: boolean;
// }

// type SortOption = 'popularity' | 'rating' | 'a-z' | 'z-a';
// type ViewMode = 'grid' | 'list';

// const ShopProductsPage: React.FC = () => {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [sortBy, setSortBy] = useState<SortOption>('popularity');
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [viewMode, setViewMode] = useState<ViewMode>('grid');
  
//   // Filter states
//   const [isFilterOpen, setIsFilterOpen] = useState(true); // Changed default to true for desktop
//   const [availableBrands, setAvailableBrands] = useState<string[]>([]);
//   const [availableCategories, setAvailableCategories] = useState<string[]>([]);
//   const [filterOptions, setFilterOptions] = useState<FilterOptions>({
//     brands: [],
//     categories: [],
//     minRating: 0,
//     hasBadge: false
//   });
  
//   // Mobile filter panel
//   const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

//   useEffect(() => {
//     fetch('/api/products')
//       .then((res) => res.json())
//       .then((data) => {
//         setProducts(data);
        
//         // Use Set<string> to ensure the type
//         const brands = [...new Set<string>(data.map((product: Product) => product.details.brandName))];
//         const categories = [...new Set<string>(data.map((product: Product) => product.details.category))];
        
//         setAvailableBrands(brands);
//         setAvailableCategories(categories);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error('Ошибка при загрузке продуктов:', err);
//         setLoading(false);
//       });
//   }, []);

//   if (loading) return (
//     <div className="min-h-screen flex items-center justify-center">
//       <div className="text-blue-800 text-xl">Загрузка продуктов...</div>
//     </div>
//   );

//   const toggleBrandFilter = (brand: string) => {
//     setFilterOptions(prev => {
//       if (prev.brands.includes(brand)) {
//         return { ...prev, brands: prev.brands.filter(b => b !== brand) };
//       } else {
//         return { ...prev, brands: [...prev.brands, brand] };
//       }
//     });
//   };

//   const toggleCategoryFilter = (category: string) => {
//     setFilterOptions(prev => {
//       if (prev.categories.includes(category)) {
//         return { ...prev, categories: prev.categories.filter(c => c !== category) };
//       } else {
//         return { ...prev, categories: [...prev.categories, category] };
//       }
//     });
//   };

//   const clearAllFilters = () => {
//     setFilterOptions({
//       brands: [],
//       categories: [],
//       minRating: 0,
//       hasBadge: false
//     });
//   };

//   const filteredProducts = products.filter(product => {
//     // Brand filter
//     if (filterOptions.brands.length > 0 && !filterOptions.brands.includes(product.details.brandName)) {
//       return false;
//     }
    
//     // Category filter
//     if (filterOptions.categories.length > 0 && !filterOptions.categories.includes(product.details.category)) {
//       return false;
//     } 
    
//     return true;
//   });

//   const sortedProducts = [...filteredProducts].sort((a, b) => {
//     switch (sortBy) {
//       case 'rating':
//         return b.details.rating - a.details.rating;
//       case 'a-z':
//         return a.details.subtitle.localeCompare(b.details.subtitle);
//       case 'z-a':
//         return b.details.subtitle.localeCompare(a.details.subtitle);
//       case 'popularity':
//       default:
//         return b.details.reviews - a.details.reviews;
//     }
//   });

//   const getSortOptionText = (option: SortOption): string => {
//     switch (option) {
//       case 'popularity': return 'Популярность';
//       case 'rating': return 'Рейтинг продукта';
//       case 'a-z': return 'Продукты А-Я';
//       case 'z-a': return 'Продукты Я-А';
//     }
//   };

//   const renderRatingStars = (rating: number) => {
//     return (
//       <div className="flex text-orange-500">
//         {[...Array(5)].map((_, i) => (
//           <Star 
//             key={i} 
//             fill={i < Math.floor(rating) ? "currentColor" : "none"} 
//             className="h-4 w-4" 
//           />
//         ))}
//  bikes       <span className="text-blue-800 ml-2 text-xs font-normal">({rating})</span>
//       </div>
//     );
//   };

//   const renderBrandFilter = () => {
//     return (
//       <div className="mb-6">
//         <h3 className="font-bold text-blue-800 mb-3">Бренд</h3>
//         <div className="space-y-2 max-h-40 overflow-y-auto">
//           {availableBrands.map(brand => (
//             <div 
//               key={brand} 
//               className="flex items-center cursor-pointer"
//               onClick={() => toggleBrandFilter(brand)}
//             >
//               <div className={`w-5 h-5 mr-2 border rounded flex items-center justify-center ${filterOptions.brands.includes(brand) ? 'bg-orange-500 border-orange-500' : 'border-gray-300'}`}>
//                 {filterOptions.brands.includes(brand) && <Check className="w-4 h-4 text-white" />}
//               </div>
//               <span className="text-blue-800">{brand}</span>
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   };

//   const renderCategoryFilter = () => {
//     return (
//       <div className="mb-6">
//         <h3 className="font-bold text-blue-800 mb-3">Категория</h3>
//         <div className="space-y-2 max-h-40 overflow-y-auto">
//           {availableCategories.map(category => (
//             <div 
//               key={category} 
//               className="flex items-center cursor-pointer"
//               onClick={() => toggleCategoryFilter(category)}
//             >
//               <div className={`w-5 h-5 mr-2 border rounded flex items-center justify-center ${filterOptions.categories.includes(category) ? 'bg-orange-500 border-orange-500' : 'border-gray-300'}`}>
//                 {filterOptions.categories.includes(category) && <Check className="w-4 h-4 text-white" />}
//               </div>
//               <span className="text-blue-800">{category}</span>
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   };

//   const renderFilterPanel = () => {
//     if (!isFilterOpen) return null;
    
//     return (
//       <div className="p-5 bg-white shadow rounded-lg border border-gray-100">
//         <div className="flex justify-between items-center mb-5 pb-3 border-b border-gray-100">
//           <h2 className="text-xl font-bold text-blue-800">Фильтры</h2>
//           <div className="flex gap-2">
//             <button 
//               className="text-blue-600 hover:text-orange-500 text-sm font-medium transition-colors" 
//               onClick={clearAllFilters}
//             >
//               Очистить все
//             </button>
//             <button
//               className="text-blue-600 hover:text-orange-500 text-sm font-medium transition-colors"
//               onClick={() => setIsFilterOpen(false)}
//             >
//               <X className="w-5 h-5" />
//             </button>
//           </div>
//         </div>
        
//         {/* Brand filter section */}
//         <div className="mb-7">
//           <h3 className="font-bold text-blue-800 mb-3">Бренд</h3>
//           <div className="space-y-2 max-h-44 overflow-y-auto pr-1">
//             {availableBrands.map(brand => (
//               <div 
//                 key={brand} 
//                 className="flex items-center cursor-pointer"
//                 onClick={() => toggleBrandFilter(brand)}
//               >
//                 <div className={`w-5 h-5 min-w-5 mr-2 border rounded flex items-center justify-center ${
//                   filterOptions.brands.includes(brand) 
//                     ? 'bg-orange-500 border-orange-500' 
//                     : 'border-gray-300'
//                 }`}>
//                   {filterOptions.brands.includes(brand) && <Check className="w-3 h-3 text-white" />}
//                 </div>
//                 <span className="text-blue-800 text-sm">{brand}</span>
//               </div>
//             ))}
//           </div>
//         </div>
        
//         {/* Category filter section with better styling */}
//         <div className="mb-6">
//           <h3 className="font-bold text-blue-800 mb-3">Категория</h3>
//           <div className="space-y-2 max-h-44 overflow-y-auto pr-1">
//             {availableCategories.map(category => (
//               <div 
//                 key={category} 
//                 className="flex items-center cursor-pointer"
//                 onClick={() => toggleCategoryFilter(category)}
//               >
//                 <div className={`w-5 h-5 min-w-5 mr-2 border rounded flex items-center justify-center ${
//                   filterOptions.categories.includes(category) 
//                     ? 'bg-orange-500 border-orange-500' 
//                     : 'border-gray-300'
//                 }`}>
//                   {filterOptions.categories.includes(category) && <Check className="w-3 h-3 text-white" />}
//                 </div>
//                 <span className="text-blue-800 text-sm">{category}</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     );
//   };

//   const renderMobileFilterPanel = () => {
//     if (!isMobileFilterOpen) return null;
    
//     return (
//       <div className="fixed inset-0 bg-black bg-opacity-50 z-40 flex justify-end">
//         <div className="bg-white w-80 h-full overflow-y-auto p-4">
//           <div className="flex justify-between items-center mb-6">
//             <h2 className="text-xl font-bold text-blue-800">Фильтры</h2>
//             <X 
//               className="w-6 h-6 text-blue-800 cursor-pointer" 
//               onClick={() => setIsMobileFilterOpen(false)}
//             />
//           </div>
          
//           {renderBrandFilter()}
//           {renderCategoryFilter()}
          
//           <div className="mt-6 flex justify-between">
//             <button 
//               className="px-4 py-2 bg-gray-200 text-blue-800 rounded-full"
//               onClick={clearAllFilters}
//             >
//               Очистить все
//             </button>
//             <button 
//               className="px-4 py-2 bg-orange-500 text-white rounded-full"
//               onClick={() => setIsMobileFilterOpen(false)}
//             >
//               Применить
//             </button>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   const renderGridItem = (product: Product) => (
//     <Link href={`/product-details/${product.details.id}`} key={product.details.id}>
//       <div className="bg-white p-4 rounded shadow-sm hover:shadow-md transition-shadow">
//         <div className="relative h-64 w-full mb-4">
//           {product.details.badge && (
//             <div className="absolute top-0 right-0 w-16 h-16 z-10">
//               <div className="w-16 h-16 rounded-full bg-purple-900 flex flex-col items-center justify-center text-white text-xs font-bold text-center p-1">
//                 {product.details.badge.split(' ').map((word, index) => (
//                   <span key={index}>{word}</span>
//                 ))}
//               </div>
//             </div>
//           )}
//           <div className="w-full h-full relative">
//             <Image 
//               src={product.details.image} 
//               alt={product.details.fullTitle} 
//               layout="fill" 
//               objectFit="contain"
//             />
//           </div>
//         </div>
//         <div className="text-left">
//           <div className="text-xs text-blue-600 mb-1">{product.details.brandName}</div>
//           <h2 className="text-xl mb-1">
//             <span className="text-blue-800">{product.details.name} </span>
//             <span className="text-blue-800 font-bold">{product.details.subtitle}</span>
//           </h2>
//           <div className="flex justify-start items-center mb-3">
//             {renderRatingStars(product.details.rating)}
//             <span className="text-blue-800 ml-2 text-xs font-normal">({product.details.reviews})</span>
//           </div>
//           <p className="text-blue-800 mb-4 text-sm line-clamp-2">{product.details.description}</p>
//           <button className="bg-orange-500 text-white px-8 py-2 my-4 rounded-full hover:bg-orange-600 transition-colors font-bold text-lg">
//             Найти магазины
//           </button>
//         </div>
//       </div>
//     </Link>
//   );

//   const renderListItem = (product: Product) => (
//     <div key={product.details.id} className="border-b border-gray-200 pb-8 mb-8">
//       <div className="flex flex-col md:flex-row">
//         <div className="w-full md:w-1/3 relative mb-4 md:mb-0">
//           <Link href={`/product-details/${product.details.id}`} className="block relative">
//             {product.details.badge && (
//               <div className="absolute top-0 right-12 w-20 h-20">
//                 <div className="w-20 h-20 rounded-full bg-purple-900 flex flex-col items-center justify-center text-white text-xs font-bold text-center p-1">
//                   {product.details.badge.split(' ').map((word, index) => (
//                     <span key={index}>{word}</span>
//                   ))}
//                 </div>
//               </div>
//             )}
//             <div className="relative h-72 w-72 mx-auto">
//               <Image 
//                 src={product.details.image} 
//                 alt={product.details.fullTitle} 
//                 layout="fill" 
//                 objectFit="contain"
//               />
//             </div>
//           </Link>
//         </div>
//         <div className="w-full md:w-2/3 md:pl-4">
//           <div className="text-xs text-blue-600 mb-1">{product.details.brandName} | {product.details.category}</div>
//           <Link href={`/product-details/${product.details.id}`}>
//             <h2 className="text-2xl mb-1">
//               <span className="text-blue-800">{product.details.name} </span>
//               <span className="text-blue-800 font-bold">{product.details.subtitle}</span>
//             </h2>
//           </Link>
//           <div className="flex items-center mb-3">
//             {renderRatingStars(product.details.rating)}
//             <span className="text-blue-800 ml-2">({product.details.reviews})</span>
//           </div>
//           <p className="text-blue-800 mb-6" style={{ fontFamily: '"Kamber Medium", sans-serif' }}>
//             {product.details.description}
//           </p>
//           <div className="mb-4">
//             <h3 className="font-bold text-blue-800 mb-2">Доступные размеры:</h3>
//             <div className="flex flex-wrap gap-2">
//               {product.details.sizes.map(size => (
//                 <span key={size.id} className="bg-blue-50 text-blue-800 px-3 py-1 rounded-full text-sm">
//                   {size.name}
//                 </span>
//               ))}
//             </div>
//           </div>
//           <button className="bg-orange-500 text-white px-8 py-3 rounded-full hover:bg-orange-600 transition-colors font-bold text-lg">
//             Найти магазины
//           </button>
//         </div>
//       </div>
//     </div>
//   );

//   return (
//     <div className="min-h-screen bg-white">
//       <Head>
//         <title>Магазин продуктов</title>
//         <meta name="description" content="Просмотрите нашу полную линейку продуктов" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <main className="container mx-auto max-w-7xl px-4">
//         <div className="py-4">
//           <div className="text-xs text-blue-800 font-light mt-6">Магазин продуктов</div>
//         </div>

//         <div className="flex flex-col md:flex-row md:justify-between md:items-center my-8">
//           <h1 className="text-4xl md:text-5xl font-light text-orange-500 mb-4 md:mb-0">
//             Магазин <span className="font-bold" style={{ fontFamily: '"Avenir Next Heavy", sans-serif' }}>Продуктов</span>
//           </h1>
//           <button className="bg-orange-500 text-white font-bold text-lg px-6 py-3 rounded-full hover:bg-orange-600 transition-colors">
//             Просмотреть другие продукты
//           </button>
//         </div>

//         {/* Mobile filter button */}
//         <div className="md:hidden mb-4">
//           <button 
//             className="w-full bg-blue-50 text-blue-800 py-3 rounded flex items-center justify-center font-bold"
//             onClick={() => setIsMobileFilterOpen(true)}
//           >
//             <Filter className="mr-2 h-5 w-5" />
//             Фильтры и сортировка
//           </button>
//         </div>

//         <div className="flex flex-col md:flex-row md:space-x-6 mb-8">
//           {/* Desktop filters panel */}
//           <div className="hidden md:block w-64 flex-shrink-0">
//             {!isFilterOpen && (
//               <button
//                 className="mb-4 bg-blue-50 text-blue-800 py-2 px-4 rounded flex items-center font-bold"
//                 onClick={() => setIsFilterOpen(true)}
//               >
//                 <Filter className="mr-2 h-5 w-5" />
//                 Показать фильтры
//               </button>
//             )}
//             {renderFilterPanel()}
//           </div>

//           {/* Mobile filter panel */}
//           {renderMobileFilterPanel()}

//           {/* Product listing */}
//           <div className="flex-grow">
//             <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6 border-b border-gray-200 pb-4">
//               <div className="text-blue-800 font-bold text-xl mb-4 md:mb-0" style={{ fontFamily: '"Avenir Next Heavy", sans-serif' }}>
//                 {sortedProducts.length} Продуктов
//               </div>
//               <div className="flex items-center gap-6">
//                 <div className="flex items-center gap-2 relative">
//                   <span className="text-blue-900 font-semibold" style={{ fontFamily: '"Avenir Next Heavy", sans-serif' }}>Сортировать по:</span>
//                   <div 
//                     className="flex items-center cursor-pointer" 
//                     onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//                   >
//                     <span className="text-blue-900">{getSortOptionText(sortBy)}</span>
//                     {isDropdownOpen ? (
//                       <ChevronUp className="text-orange-500 ml-1 h-4 w-4" />
//                     ) : (
//                       <ChevronDown className="text-orange-500 ml-1 h-4 w-4" />
//                     )}
//                   </div>
                  
//                   {isDropdownOpen && (
//                     <div className="absolute top-full right-0 mt-1 bg-white border border-gray-200 shadow-lg z-10 w-40">
//                       {(['popularity', 'rating', 'a-z', 'z-a'] as SortOption[]).map(option => (
//                         <div 
//                           key={option} 
//                           className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-blue-900"
//                           onClick={() => {
//                             setSortBy(option);
//                             setIsDropdownOpen(false);
//                           }}
//                         >
//                           {getSortOptionText(option)}
//                         </div>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//                 <div className="flex border-2 border-gray-200">
//                   <button 
//                     className={`p-2 ${viewMode === 'grid' ? 'bg-orange-100' : ''}`}
//                     onClick={() => setViewMode('grid')}
//                   >
//                     <Grid className={`h-5 w-5 ${viewMode === 'grid' ? 'text-orange-500' : 'text-gray-400'}`} />
//                   </button>
//                   <button 
//                     className={`p-2 ${viewMode === 'list' ? 'bg-orange-100' : ''}`}
//                     onClick={() => setViewMode('list')}
//                   >
//                     <List className={`h-5 w-5 ${viewMode === 'list' ? 'text-orange-500' : 'text-gray-400'}`} />
//                   </button>
//                 </div>
//               </div>
//             </div>

//             {sortedProducts.length === 0 ? (
//               <div className="text-center py-16 bg-gray-50 rounded">
//                 <div className="text-5xl text-gray-300 mb-4">¯\_(ツ)_/¯</div>
//                 <p className="text-xl text-blue-800 mb-2">Продукты не найдены.</p>
//                 <p className="text-blue-800">Попробуйте изменить параметры фильтра.</p>
//                 <button 
//                   className="mt-4 px-6 py-2 bg-blue-800 text-white rounded-full"
//                   onClick={clearAllFilters}
//                 >
//                   Сбросить все фильтры
//                 </button>
//               </div>
//             ) : viewMode === 'grid' ? (
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
//                 {sortedProducts.map(product => renderGridItem(product))}
//               </div>
//             ) : (
//               <div className="space-y-8">
//                 {sortedProducts.map(product => renderListItem(product))}
//               </div>
//             )}
            
//             {sortedProducts.length > 0 && (
//               <div className="flex justify-center my-8">
//                 <button className="bg-blue-800 text-white px-8 py-3 rounded-full hover:bg-blue-900 transition-colors font-bold">
//                   Загрузить еще
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default ShopProductsPage;


// 'use client';
// import React, { useState, useEffect } from 'react';
// import Head from 'next/head';
// import Image from 'next/image';
// import Link from 'next/link';
// import { Star, ChevronDown, Grid, List, Filter, X, ChevronUp, Check } from 'lucide-react';

// // Updated interfaces (matching the new structure)
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

// interface FilterOptions {
//   brands: string[];
//   categories: string[];
//   minRating: number;
//   hasBadge: boolean;
// }

// interface BrandInfo {
//   name: string;
//   color: string;
//   logoUrl: string;
// }

// type SortOption = 'popularity' | 'rating' | 'a-z' | 'z-a';
// type ViewMode = 'grid' | 'list';

// const ShopProductsPage: React.FC = () => {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [sortBy, setSortBy] = useState<SortOption>('popularity');
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [viewMode, setViewMode] = useState<ViewMode>('grid');
//   const [imageError, setImageError] = useState<Record<string, boolean>>({});
  
//   // Filter states
//   const [isFilterOpen, setIsFilterOpen] = useState(false); // Mobile-first approach: default to closed on small screens
//   const [availableBrands, setAvailableBrands] = useState<string[]>([]);
//   const [availableCategories, setAvailableCategories] = useState<string[]>([]);
//   const [filterOptions, setFilterOptions] = useState<FilterOptions>({
//     brands: [],
//     categories: [],
//     minRating: 0,
//     hasBadge: false
//   });
  
//   // Mobile filter panel
//   const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

//   // Brand information for placeholders
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

//   useEffect(() => {
//     fetch('/api/products')
//       .then((res) => res.json())
//       .then((data) => {
//         setProducts(data);
        
//         // Use Set<string> to ensure the type
//         const brands = [...new Set<string>(data.map((product: Product) => product.details.brandName))];
//         const categories = [...new Set<string>(data.map((product: Product) => product.details.category))];
        
//         setAvailableBrands(brands);
//         setAvailableCategories(categories);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error('Ошибка при загрузке продуктов:', err);
//         setLoading(false);
//       });
      
//     // Set filter panel based on screen size
//     const handleResize = () => {
//       setIsFilterOpen(window.innerWidth >= 768);
//     };
    
//     // Initialize filter panel state based on current screen size
//     handleResize();
    
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   // Handle image loading errors
//   const handleImageError = (productId: number) => {
//     setImageError(prev => ({
//       ...prev,
//       [productId]: true
//     }));
//   };

//   // Get brand info for placeholder
//   const getBrandInfo = (brandName: string): BrandInfo => {
//     return brandsInfo.find(brand => brand.name === brandName) || {
//       name: brandName,
//       color: "#000000",
//       logoUrl: "/images/logo/default.png"
//     };
//   };

//   if (loading) return (
//     <div className="min-h-screen flex items-center justify-center">
//       <div className="text-blue-800 text-xl">Загрузка продуктов...</div>
//     </div>
//   );

//   const toggleBrandFilter = (brand: string) => {
//     setFilterOptions(prev => {
//       if (prev.brands.includes(brand)) {
//         return { ...prev, brands: prev.brands.filter(b => b !== brand) };
//       } else {
//         return { ...prev, brands: [...prev.brands, brand] };
//       }
//     });
//   };

//   const toggleCategoryFilter = (category: string) => {
//     setFilterOptions(prev => {
//       if (prev.categories.includes(category)) {
//         return { ...prev, categories: prev.categories.filter(c => c !== category) };
//       } else {
//         return { ...prev, categories: [...prev.categories, category] };
//       }
//     });
//   };

//   const clearAllFilters = () => {
//     setFilterOptions({
//       brands: [],
//       categories: [],
//       minRating: 0,
//       hasBadge: false
//     });
//   };

//   const filteredProducts = products.filter(product => {
//     // Brand filter
//     if (filterOptions.brands.length > 0 && !filterOptions.brands.includes(product.details.brandName)) {
//       return false;
//     }
    
//     // Category filter
//     if (filterOptions.categories.length > 0 && !filterOptions.categories.includes(product.details.category)) {
//       return false;
//     } 
    
//     return true;
//   });

//   const sortedProducts = [...filteredProducts].sort((a, b) => {
//     switch (sortBy) {
//       case 'rating':
//         return b.details.rating - a.details.rating;
//       case 'a-z':
//         return a.details.subtitle.localeCompare(b.details.subtitle);
//       case 'z-a':
//         return b.details.subtitle.localeCompare(a.details.subtitle);
//       case 'popularity':
//       default:
//         return b.details.reviews - a.details.reviews;
//     }
//   });

//   const getSortOptionText = (option: SortOption): string => {
//     switch (option) {
//       case 'popularity': return 'Популярность';
//       case 'rating': return 'Рейтинг продукта';
//       case 'a-z': return 'Продукты А-Я';
//       case 'z-a': return 'Продукты Я-А';
//     }
//   };

//   const renderRatingStars = (rating: number) => {
//     return (
//       <div className="flex text-orange-500">
//         {[...Array(5)].map((_, i) => (
//           <Star 
//             key={i} 
//             fill={i < Math.floor(rating) ? "currentColor" : "none"} 
//             className="h-4 w-4" 
//           />
//         ))}
//         <span className="text-blue-800 ml-2 text-xs font-normal">({rating})</span>
//       </div>
//     );
//   };

//   const renderBrandFilter = () => {
//     return (
//       <div className="mb-6">
//         <h3 className="font-bold text-blue-800 mb-3">Бренд</h3>
//         <div className="space-y-2 max-h-40 overflow-y-auto">
//           {availableBrands.map(brand => (
//             <div 
//               key={brand} 
//               className="flex items-center cursor-pointer"
//               onClick={() => toggleBrandFilter(brand)}
//             >
//               <div className={`w-5 h-5 mr-2 border rounded flex items-center justify-center ${filterOptions.brands.includes(brand) ? 'bg-orange-500 border-orange-500' : 'border-gray-300'}`}>
//                 {filterOptions.brands.includes(brand) && <Check className="w-4 h-4 text-white" />}
//               </div>
//               <span className="text-blue-800">{brand}</span>
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   };

//   const renderCategoryFilter = () => {
//     return (
//       <div className="mb-6">
//         <h3 className="font-bold text-blue-800 mb-3">Категория</h3>
//         <div className="space-y-2 max-h-40 overflow-y-auto">
//           {availableCategories.map(category => (
//             <div 
//               key={category} 
//               className="flex items-center cursor-pointer"
//               onClick={() => toggleCategoryFilter(category)}
//             >
//               <div className={`w-5 h-5 mr-2 border rounded flex items-center justify-center ${filterOptions.categories.includes(category) ? 'bg-orange-500 border-orange-500' : 'border-gray-300'}`}>
//                 {filterOptions.categories.includes(category) && <Check className="w-4 h-4 text-white" />}
//               </div>
//               <span className="text-blue-800">{category}</span>
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   };

//   const renderFilterPanel = () => {
//     if (!isFilterOpen) return null;
    
//     return (
//       <div className="p-5 bg-white shadow rounded-lg border border-gray-100">
//         <div className="flex justify-between items-center mb-5 pb-3 border-b border-gray-100">
//           <h2 className="text-xl font-bold text-blue-800">Фильтры</h2>
//           <div className="flex gap-2">
//             <button 
//               className="text-blue-600 hover:text-orange-500 text-sm font-medium transition-colors" 
//               onClick={clearAllFilters}
//             >
//               Очистить все
//             </button>
//             <button
//               className="text-blue-600 hover:text-orange-500 text-sm font-medium md:hidden"
//               onClick={() => setIsFilterOpen(false)}
//             >
//               <X className="w-5 h-5" />
//             </button>
//           </div>
//         </div>
        
//         {/* Brand filter section */}
//         <div className="mb-7">
//           <h3 className="font-bold text-blue-800 mb-3">Бренд</h3>
//           <div className="space-y-2 max-h-44 overflow-y-auto pr-1">
//             {availableBrands.map(brand => (
//               <div 
//                 key={brand} 
//                 className="flex items-center cursor-pointer"
//                 onClick={() => toggleBrandFilter(brand)}
//               >
//                 <div className={`w-5 h-5 min-w-5 mr-2 border rounded flex items-center justify-center ${
//                   filterOptions.brands.includes(brand) 
//                     ? 'bg-orange-500 border-orange-500' 
//                     : 'border-gray-300'
//                 }`}>
//                   {filterOptions.brands.includes(brand) && <Check className="w-3 h-3 text-white" />}
//                 </div>
//                 <span className="text-blue-800 text-sm">{brand}</span>
//               </div>
//             ))}
//           </div>
//         </div>
        
//         {/* Category filter section with better styling */}
//         <div className="mb-6">
//           <h3 className="font-bold text-blue-800 mb-3">Категория</h3>
//           <div className="space-y-2 max-h-44 overflow-y-auto pr-1">
//             {availableCategories.map(category => (
//               <div 
//                 key={category} 
//                 className="flex items-center cursor-pointer"
//                 onClick={() => toggleCategoryFilter(category)}
//               >
//                 <div className={`w-5 h-5 min-w-5 mr-2 border rounded flex items-center justify-center ${
//                   filterOptions.categories.includes(category) 
//                     ? 'bg-orange-500 border-orange-500' 
//                     : 'border-gray-300'
//                 }`}>
//                   {filterOptions.categories.includes(category) && <Check className="w-3 h-3 text-white" />}
//                 </div>
//                 <span className="text-blue-800 text-sm">{category}</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     );
//   };

//   const renderMobileFilterPanel = () => {
//     if (!isMobileFilterOpen) return null;
    
//     return (
//       <div className="fixed inset-0 bg-black bg-opacity-50 z-40 flex justify-end">
//         <div className="bg-white w-4/5 max-w-sm h-full overflow-y-auto p-4">
//           <div className="flex justify-between items-center mb-6">
//             <h2 className="text-xl font-bold text-blue-800">Фильтры</h2>
//             <X 
//               className="w-6 h-6 text-blue-800 cursor-pointer" 
//               onClick={() => setIsMobileFilterOpen(false)}
//             />
//           </div>
          
//           {renderBrandFilter()}
//           {renderCategoryFilter()}
          
//           <div className="mt-6 flex justify-between">
//             <button 
//               className="px-4 py-2 bg-gray-200 text-blue-800 rounded-full"
//               onClick={clearAllFilters}
//             >
//               Очистить все
//             </button>
//             <button 
//               className="px-4 py-2 bg-orange-500 text-white rounded-full"
//               onClick={() => setIsMobileFilterOpen(false)}
//             >
//               Применить
//             </button>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   const renderProductImage = (product: Product) => {
//     const showError = imageError[product.details.id];
//     const brandInfo = getBrandInfo(product.details.brandName);
    
//     if (showError) {
//       // Render brand logo as placeholder with gradient overlay
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
//           <div className="absolute bottom-0 w-full text-center p-4 text-sm text-gray-500">
//             Изображение недоступно
//           </div>
//         </div>
//       );
//     } else {
//       // Regular product image with error handling
//       return (
//         <Image 
//           src={product.details.image} 
//           alt={product.details.fullTitle} 
//           layout="fill" 
//           objectFit="contain"
//           onError={() => handleImageError(product.details.id)}
//         />
//       );
//     }
//   };

//   const renderGridItem = (product: Product) => (
//     <Link href={`/product-details/${product.details.id}`} key={product.details.id}>
//       <div className="bg-white p-4 rounded shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
//         <div className="relative h-48 sm:h-56 md:h-64 w-full mb-4 flex-shrink-0">
//           {product.details.badge && (
//             <div className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 z-10">
//               <div className="w-full h-full rounded-full bg-purple-900 flex flex-col items-center justify-center text-white text-xs font-bold text-center p-1">
//                 {product.details.badge.split(' ').map((word, index) => (
//                   <span className="" key={index}>{word}</span>
//                 ))}
//               </div>
//             </div>
//           )}
//           <div className="w-full h-full relative">
//             {renderProductImage(product)}
//           </div>
//         </div>
//         <div className="text-left flex-grow flex flex-col">
//           <div className="text-xs text-blue-600 mb-1">{product.details.brandName}</div>
//           <h2 className="text-lg sm:text-xl mb-1">
//             <span className="text-blue-800">{product.details.name} </span>
//             <span className="text-blue-800 font-bold">{product.details.subtitle}</span>
//           </h2>
//           <div className="flex justify-start items-center mb-3">
//             {renderRatingStars(product.details.rating)}
//             <span className="text-blue-800 ml-2 text-xs font-normal">({product.details.reviews})</span>
//           </div>
//           <p className="text-blue-800 mb-4 text-sm line-clamp-2 flex-grow">{product.details.description}</p>
//           <button className="bg-orange-500 text-white px-4 sm:px-8 py-2 w-full sm:w-auto my-2 rounded-full hover:bg-orange-600 transition-colors font-bold text-lg">
//             Найти магазины
//           </button>
//         </div>
//       </div>
//     </Link>
//   );

//   const renderListItem = (product: Product) => (
//     <div key={product.details.id} className="border-b border-gray-200 pb-6 mb-6">
//       <div className="flex flex-col sm:flex-row">
//         <div className="w-full sm:w-1/3 relative mb-4 sm:mb-0">
//           <Link href={`/product-details/${product.details.id}`} className="block relative">
//             {product.details.badge && (
//               <div className="absolute top-0 right-0 sm:right-6 w-16 h-16 sm:w-20 sm:h-20 z-10">
//                 <div className="w-full h-full rounded-full bg-purple-900 flex flex-col items-center justify-center text-white text-xs font-bold text-center p-1">
//                   {product.details.badge.split(' ').map((word, index) => (
//                     <span key={index}>{word}</span>
//                   ))}
//                 </div>
//               </div>
//             )}
//             <div className="relative h-56 sm:h-64 md:h-72 w-full sm:w-56 md:w-72 mx-auto">
//               {renderProductImage(product)}
//             </div>
//           </Link>
//         </div>
//         <div className="w-full sm:w-2/3 sm:pl-4">
//           <div className="text-xs text-blue-600 mb-1">{product.details.brandName} | {product.details.category}</div>
//           <Link href={`/product-details/${product.details.id}`}>
//             <h2 className="text-xl sm:text-2xl mb-1">
//               <span className="text-blue-800">{product.details.name} </span>
//               <span className="text-blue-800 font-bold">{product.details.subtitle}</span>
//             </h2>
//           </Link>
//           <div className="flex items-center mb-3">
//             {renderRatingStars(product.details.rating)}
//             <span className="text-blue-800 ml-2">({product.details.reviews})</span>
//           </div>
//           <p className="text-blue-800 mb-4 sm:mb-6" style={{ fontFamily: '"Kamber Medium", sans-serif' }}>
//             {product.details.description}
//           </p>
//           <div className="mb-4">
//             <h3 className="font-bold text-blue-800 mb-2">Доступные размеры:</h3>
//             <div className="flex flex-wrap gap-2">
//               {/* {product.details.sizes.map(size => (
//                 <span key={size.id} className="bg-blue-50 text-blue-800 px-3 py-1 rounded-full text-sm">
//                   {size.name}
//                 </span>
//               ))} */}
//               <span className="bg-blue-50 text-blue-800 px-3 py-1 rounded-full text-sm">
//                   -
//                 </span>
//             </div>
//           </div>
//           <button className="bg-orange-500 text-white w-full sm:w-auto px-4 sm:px-8 py-3 rounded-full hover:bg-orange-600 transition-colors font-bold text-lg">
//             Найти магазины
//           </button>
//         </div>
//       </div>
//     </div>
//   );

//   // Mobile sort & view toggles component
//   const renderMobileSortAndView = () => {
//     return (
//       <div className="md:hidden mb-6">
//         <div className="flex justify-between items-center">
//           <div 
//             className="flex items-center cursor-pointer bg-blue-50 px-3 py-2 rounded-lg"
//             onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//           >
//             <span className="text-blue-800 text-sm mr-1">Сортировка:</span>
//             <span className="text-blue-900 text-sm font-medium">{getSortOptionText(sortBy)}</span>
//             {isDropdownOpen ? 
//               <ChevronUp className="text-orange-500 ml-1 h-4 w-4" /> : 
//               <ChevronDown className="text-orange-500 ml-1 h-4 w-4" />
//             }
//           </div>
          
//           <div className="flex border-2 border-gray-200">
//             <button 
//               className={`p-2 ${viewMode === 'grid' ? 'bg-orange-100' : ''}`}
//               onClick={() => setViewMode('grid')}
//             >
//               <Grid className={`h-5 w-5 ${viewMode === 'grid' ? 'text-orange-500' : 'text-gray-400'}`} />
//             </button>
//             <button 
//               className={`p-2 ${viewMode === 'list' ? 'bg-orange-100' : ''}`}
//               onClick={() => setViewMode('list')}
//             >
//               <List className={`h-5 w-5 ${viewMode === 'list' ? 'text-orange-500' : 'text-gray-400'}`} />
//             </button>
//           </div>
//         </div>
        
//         {isDropdownOpen && (
//           <div className="absolute mt-1 bg-white border border-gray-200 shadow-lg z-10 w-full left-0 px-4">
//             {(['popularity', 'rating', 'a-z', 'z-a'] as SortOption[]).map(option => (
//               <div 
//                 key={option} 
//                 className="px-4 py-3 border-b border-gray-100 hover:bg-gray-50 cursor-pointer text-blue-900"
//                 onClick={() => {
//                   setSortBy(option);
//                   setIsDropdownOpen(false);
//                 }}
//               >
//                 {getSortOptionText(option)}
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     );
//   };

//   return (
//     <div className="min-h-screen bg-white">
//       <Head>
//         <title>Магазин продуктов</title>
//         <meta name="description" content="Просмотрите нашу полную линейку продуктов" />
//         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <main className="container mx-auto max-w-7xl px-4 sm:px-6">
//         <div className="py-4">
//           <div className="text-xs text-blue-800 font-light mt-4">Магазин продуктов</div>
//         </div>

//         <div className="flex flex-col md:flex-row md:justify-between md:items-center my-2 md:my-6">
//           <h1 className="text-2xl sm:text-3xl md:text-5xl font-light text-orange-500 mb-4 md:mb-0">
//             Магазин <span className="font-bold" style={{ fontFamily: '"Avenir Next Heavy", sans-serif' }}>Продуктов</span>
//           </h1>
//         </div>

//         {/* Mobile filter button */}
//         <div className="md:hidden mb-4">
//           <button 
//             className="w-full bg-blue-50 text-blue-800 py-3 rounded flex items-center justify-center font-bold"
//             onClick={() => setIsMobileFilterOpen(true)}
//           >
//             <Filter className="mr-2 h-5 w-5" />
//             Фильтры и сортировка
//           </button>
//         </div>

//         <div className="flex flex-col md:flex-row md:space-x-6 mb-8">
//           {/* Desktop filters panel */}
//           <div className="hidden md:block w-64 flex-shrink-0">
//             {!isFilterOpen && (
//               <button
//                 className="mb-4 bg-blue-50 text-blue-800 py-2 px-4 rounded flex items-center font-bold"
//                 onClick={() => setIsFilterOpen(true)}
//               >
//                 <Filter className="mr-2 h-5 w-5" />
//                 Показать фильтры
//               </button>
//             )}
//             {renderFilterPanel()}
//           </div>

//           {/* Mobile filter panel */}
//           {renderMobileFilterPanel()}

//           {/* Product listing */}
//           <div className="flex-grow relative">
//             <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4 md:mb-6 border-b border-gray-200 pb-4">
//               <div className="text-blue-800 font-bold text-lg sm:text-xl mb-2 md:mb-0" style={{ fontFamily: '"Avenir Next Heavy", sans-serif' }}>
//                 {sortedProducts.length} Продуктов
//               </div>
              
//               {/* Desktop sort and view toggles */}
//               <div className="hidden md:flex items-center gap-6">
//                 <div className="flex items-center gap-2 relative">
//                   <span className="text-blue-900 font-semibold" style={{ fontFamily: '"Avenir Next Heavy", sans-serif' }}>Сортировать по:</span>
//                   <div 
//                     className="flex items-center cursor-pointer" 
//                     onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//                   >
//                     <span className="text-blue-900">{getSortOptionText(sortBy)}</span>
//                     {isDropdownOpen ? (
//                       <ChevronUp className="text-orange-500 ml-1 h-4 w-4" />
//                     ) : (
//                       <ChevronDown className="text-orange-500 ml-1 h-4 w-4" />
//                     )}
//                   </div>
                  
//                   {isDropdownOpen && (
//                     <div className="absolute top-full right-0 mt-1 bg-white border border-gray-200 shadow-lg z-10 w-40">
//                       {(['popularity', 'rating', 'a-z', 'z-a'] as SortOption[]).map(option => (
//                         <div 
//                           key={option} 
//                           className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-blue-900"
//                           onClick={() => {
//                             setSortBy(option);
//                             setIsDropdownOpen(false);
//                           }}
//                         >
//                           {getSortOptionText(option)}
//                         </div>
//                       ))}
//                     </div>
//                   )}
//                 </div>
//                 <div className="flex border-2 border-gray-200">
//                   <button 
//                     className={`p-2 ${viewMode === 'grid' ? 'bg-orange-100' : ''}`}
//                     onClick={() => setViewMode('grid')}
//                   >
//                     <Grid className={`h-5 w-5 ${viewMode === 'grid' ? 'text-orange-500' : 'text-gray-400'}`} />
//                   </button>
//                   <button 
//                     className={`p-2 ${viewMode === 'list' ? 'bg-orange-100' : ''}`}
//                     onClick={() => setViewMode('list')}
//                   >
//                     <List className={`h-5 w-5 ${viewMode === 'list' ? 'text-orange-500' : 'text-gray-400'}`} />
//                   </button>
//                 </div>
//               </div>
//             </div>
            
//             {/* Mobile sort and view toggles */}
//             {renderMobileSortAndView()}

//             {sortedProducts.length === 0 ? (
//                 <div className="text-center py-10 sm:py-16 bg-gray-50 rounded">
//                   <div className="text-4xl sm:text-5xl text-gray-300 mb-4">¯\_(ツ)_/¯</div>
//                   <p className="text-lg sm:text-xl text-blue-800 mb-2">Не найдено продуктов, соответствующих вашим фильтрам</p>
//                   <button 
//                     onClick={clearAllFilters}
//                     className="mt-4 px-6 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors"
//                   >
//                     Очистить все фильтры
//                   </button>
//                 </div>
//               ) : (
//                 <div className={viewMode === 'grid' 
//                   ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6' 
//                   : 'flex flex-col'
//                 }>
//                   {sortedProducts.map(product => (
//                     viewMode === 'grid' 
//                       ? renderGridItem(product) 
//                       : renderListItem(product)
//                   ))}
//                 </div>
//               )}
//         </div>
//     </div>
//   </main>
// </div>
// );
// };

// export default ShopProductsPage;


'use client';
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Star, ChevronDown, Grid, List, Filter, X, ChevronUp, Check } from 'lucide-react';

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

interface FilterOptions {
  brands: string[];
  categories: string[];
  minRating: number;
  hasBadge: boolean;
}

interface BrandInfo {
  name: string;
  color: string;
  logoUrl: string;
}

type SortOption = 'popularity' | 'rating' | 'a-z' | 'z-a';
type ViewMode = 'grid' | 'list';

const ShopProductsPage: React.FC = () => {
  const [productCategories, setProductCategories] = useState<ProductCategories[]>([]);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState<SortOption>('popularity');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const [imageError, setImageError] = useState<Record<string, boolean>>({});
  
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [availableBrands, setAvailableBrands] = useState<string[]>([]);
  const [availableCategories, setAvailableCategories] = useState<string[]>([]);
  const [filterOptions, setFilterOptions] = useState<FilterOptions>({
    brands: [],
    categories: [],
    minRating: 0,
    hasBadge: false
  });
  
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  const brandsInfo: BrandInfo[] = [
    { name: "Real Plus", color: "#3538C8", logoUrl: "/images/logo/RealPlus.png" },
    { name: "Wim", color: "#03a31e", logoUrl: "/images/logo/Wim.png" },
    { name: "Yumşa Plus", color: "#1138b7", logoUrl: "/images/logo/Yumsa.png" },
    { name: "Awen", color: "#ff3e1c", logoUrl: "/images/logo/Awen.png" },
    { name: "Glass Plus", color: "#e80c00", logoUrl: "/images/logo/Glass.png" }
  ];

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('/api/products');
        if (!res.ok) throw new Error(`API fetch failed with status: ${res.status}`);
        const data: ProductCategories[] = await res.json();
        console.log('Fetched products:', data);
        setProductCategories(data);
        
        const brands = [...new Set(data.flatMap(category => category.products.map(product => product.brandName)))];
        const categories = [...new Set(data.flatMap(category => category.products.map(product => product.category)))];
        
        setAvailableBrands(brands);
        setAvailableCategories(categories);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching products:', err);
        setLoading(false);
      }
    };

    fetchProducts();

    const handleResize = () => {
      setIsFilterOpen(window.innerWidth >= 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleImageError = (productId: number) => {
    setImageError(prev => ({
      ...prev,
      [productId]: true
    }));
  };

  const getBrandInfo = (brandName: string): BrandInfo => {
    return brandsInfo.find(brand => brand.name === brandName) || {
      name: brandName,
      color: "#000000",
      logoUrl: "/images/logo/default.png"
    };
  };

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-blue-800 text-xl">Загрузка продуктов...</div>
    </div>
  );

  const toggleBrandFilter = (brand: string) => {
    setFilterOptions(prev => ({
      ...prev,
      brands: prev.brands.includes(brand) ? prev.brands.filter(b => b !== brand) : [...prev.brands, brand]
    }));
  };

  const toggleCategoryFilter = (category: string) => {
    setFilterOptions(prev => ({
      ...prev,
      categories: prev.categories.includes(category) ? prev.categories.filter(c => c !== category) : [...prev.categories, category]
    }));
  };

  const clearAllFilters = () => {
    setFilterOptions({ brands: [], categories: [], minRating: 0, hasBadge: false });
  };

  const allProducts = productCategories.flatMap(category => category.products);

  const filteredProducts = allProducts.filter(product => {
    if (filterOptions.brands.length > 0 && !filterOptions.brands.includes(product.brandName)) return false;
    if (filterOptions.categories.length > 0 && !filterOptions.categories.includes(product.category)) return false;
    return true;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'rating': return b.rating - a.rating;
      case 'a-z': return a.subtitle.localeCompare(b.subtitle);
      case 'z-a': return b.subtitle.localeCompare(a.subtitle);
      case 'popularity':
      default: return b.reviews - a.reviews;
    }
  });

  const getSortOptionText = (option: SortOption): string => {
    switch (option) {
      case 'popularity': return 'Популярность';
      case 'rating': return 'Рейтинг продукта';
      case 'a-z': return 'Продукты А-Я';
      case 'z-a': return 'Продукты Я-А';
    }
  };

  const renderRatingStars = (rating: number) => (
    <div className="flex text-orange-500">
      {[...Array(5)].map((_, i) => (
        <Star 
          key={i} 
          fill={i < Math.floor(rating) ? "currentColor" : "none"} 
          className="h-4 w-4" 
        />
      ))}
      <span className="text-blue-800 ml-2 text-xs font-normal">({rating})</span>
    </div>
  );

  const renderBrandFilter = () => (
    <div className="mb-6">
      <h3 className="font-bold text-blue-800 mb-3">Бренд</h3>
      <div className="space-y-2 max-h-40 overflow-y-auto">
        {availableBrands.map(brand => (
          <div 
            key={brand} 
            className="flex items-center cursor-pointer"
            onClick={() => toggleBrandFilter(brand)}
          >
            <div className={`w-5 h-5 mr-2 border rounded flex items-center justify-center ${filterOptions.brands.includes(brand) ? 'bg-orange-500 border-orange-500' : 'border-gray-300'}`}>
              {filterOptions.brands.includes(brand) && <Check className="w-4 h-4 text-white" />}
            </div>
            <span className="text-blue-800">{brand}</span>
          </div>
        ))}
      </div>
    </div>
  );

  const renderCategoryFilter = () => (
    <div className="mb-6">
           <h3 className="font-bold text-blue-800 mb-3">Категория</h3>
           <div className="space-y-2 max-h-64 overflow-y-auto pr-1">
             {availableCategories.map(category => (
               <div 
                 key={category} 
                 className="flex items-center cursor-pointer"
                 onClick={() => toggleCategoryFilter(category)}
               >
                 <div className={`w-5 h-5 min-w-5 mr-2 border rounded flex items-center justify-center ${
                   filterOptions.categories.includes(category) 
                     ? 'bg-orange-500 border-orange-500' 
                     : 'border-gray-300'
                 }`}>
                   {filterOptions.categories.includes(category) && <Check className="w-3 h-3 text-white" />}
                 </div>
                 <span className="text-blue-800 text-sm">{category}</span>
               </div>
             ))}
           </div>
      </div>
  );

  const renderFilterPanel = () => {
    if (!isFilterOpen) return null;
    return (
      <div className="p-5 bg-white shadow rounded-lg border border-gray-100 md:sticky md:top-4">
        <div className="flex justify-between items-center mb-5 pb-3 border-b border-gray-100">
          <h2 className="text-xl font-bold text-blue-800">Фильтры</h2>
          <div className="flex gap-2">
            <button 
              className="text-blue-600 hover:text-orange-500 text-sm font-medium transition-colors" 
              onClick={clearAllFilters}
            >
              Очистить все
            </button>
            <button
              className="text-blue-600 hover:text-orange-500 text-sm font-medium md:hidden"
              onClick={() => setIsFilterOpen(false)}
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
        {renderBrandFilter()}
        {renderCategoryFilter()}
      </div>
    );
  };

  const renderMobileFilterPanel = () => {
    if (!isMobileFilterOpen) return null;
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-40 flex justify-end">
        <div className="bg-white w-4/5 max-w-sm h-full overflow-y-auto p-4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-blue-800">Фильтры</h2>
            <X 
              className="w-6 h-6 text-blue-800 cursor-pointer" 
              onClick={() => setIsMobileFilterOpen(false)}
            />
          </div>
          {renderBrandFilter()}
          {renderCategoryFilter()}
          <div className="mt-6 flex justify-between">
            <button 
              className="px-4 py-2 bg-gray-200 text-blue-800 rounded-full"
              onClick={clearAllFilters}
            >
              Очистить все
            </button>
            <button 
              className="px-4 py-2 bg-orange-500 text-white rounded-full"
              onClick={() => setIsMobileFilterOpen(false)}
            >
              Применить
            </button>
          </div>
        </div>
      </div>
    );
  };

  const renderProductImage = (product: Products) => {
    const showError = imageError[product.id];
    const brandInfo = getBrandInfo(product.brandName);
    return showError ? (
      <div className="relative w-full h-full bg-gray-50 flex items-center justify-center overflow-hidden">
        <div className="w-3/4 h-3/4 relative opacity-30">
          <Image src={brandInfo.logoUrl} alt={brandInfo.name} layout="fill" objectFit="contain" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" style={{ backgroundColor: `${brandInfo.color}10` }}></div>
        <div className="absolute bottom-0 w-full text-center p-4 text-sm text-gray-500">Изображение недоступно</div>
      </div>
    ) : (
      <Image src={product.image} alt={product.fullTitle} layout="fill" objectFit="contain" onError={() => handleImageError(product.id)} />
    );
  };

  const ProductBadge = ({ badgeText }: { badgeText: string }) => {
    return (
      <div className="absolute top-0 right-0 z-10">
        {/* Corner ribbon container */}
        <div className="w-40 h-40 overflow-hidden absolute -top-6 -right-4">
          {/* Ribbon with correct orientation */}
          <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white font-bold 
                        text-xs tracking-wider shadow-lg text-center w-56 absolute top-10 right-[-60px] 
                        transform rotate-45">
            {/* Inner border for depth */}
            <div className="border-t border-b border-white border-opacity-20 py-1.5 px-1">
              {/* Text with decorative elements */}
              <span className="flex justify-center items-center">
                <span className="mr-1 text-purple-300">✦</span>
                <span className="uppercase tracking-widest">{badgeText}</span>
                <span className="ml-1 text-purple-300">✦</span>
              </span>
            </div>
            
            {/* Shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20"></div>
          </div>
        </div>
        
        {/* Ribbon fold shadow - left side */}
        {/* <div className="absolute top-0 right-0 w-6 h-6 bg-purple-900 transform origin-bottom-left rotate-45"></div> */}
      </div>
    );
  };


  const renderGridItem = (product: Products) => (
    <Link href={`/product-details/${product.id}`} key={product.id}> {/* Still using product.id */}
      <div className="bg-white p-4 rounded shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
        <div className="relative h-48 sm:h-56 md:h-64 w-full mb-4 flex-shrink-0">
        {product.badge && <ProductBadge badgeText={product.badge} />}
          <div className="w-full h-full relative">
            {renderProductImage(product)}
          </div>
        </div>
        <div className="text-left flex-grow flex flex-col">
          <div className="text-xs text-blue-600 mb-1">{product.brandName}</div>
          <h2 className="text-lg sm:text-xl mb-1">
            <span className="text-blue-800">{product.name} </span>
            <span className="text-blue-800 font-bold">{product.subtitle}</span>
          </h2>
          <div className="flex justify-start items-center mb-3">
            {renderRatingStars(product.rating)}
            <span className="text-blue-800 ml-2 text-xs font-normal">({product.reviews})</span>
          </div>
          <p className="text-blue-800 mb-4 text-sm line-clamp-2 flex-grow">{product.description}</p>
          <button className="bg-orange-500 text-white px-4 sm:px-8 py-2 w-full sm:w-auto my-2 rounded-full hover:bg-orange-600 transition-colors font-bold text-lg">
            Найти магазины
          </button>
        </div>
      </div>
    </Link>
  );

  const renderListItem = (product: Products) => (
    <div key={product.id} className="border-b border-gray-200 pb-6 mb-6">
      <div className="flex flex-col sm:flex-row">
        <div className="w-full sm:w-1/3 relative mb-4 sm:mb-0">
          <Link href={`/product-details/${product.id}`} className="block relative"> {/* Still using product.id */}
          {product.badge && <ProductBadge badgeText={product.badge} />}
            <div className="relative h-56 sm:h-64 md:h-72 w-full sm:w-56 md:w-72 mx-auto">
              {renderProductImage(product)}
            </div>
          </Link>
        </div>
        <div className="w-full sm:w-2/3 sm:pl-4">
          <div className="text-xs text-blue-600 mb-1">{product.brandName} | {product.category}</div>
          <Link href={`/product-details/${product.id}`}> {/* Still using product.id */}
            <h2 className="text-xl sm:text-2xl mb-1">
              <span className="text-blue-800">{product.name} </span>
              <span className="text-blue-800 font-bold">{product.subtitle}</span>
            </h2>
          </Link>
          <div className="flex items-center mb-3">
            {renderRatingStars(product.rating)}
            <span className="text-blue-800 ml-2">({product.reviews})</span>
          </div>
          <p className="text-blue-800 mb-4 sm:mb-6" style={{ fontFamily: '"Kamber Medium", sans-serif' }}>{product.description}</p>
          <div className="mb-4">
            <h3 className="font-bold text-blue-800 mb-2">Доступные размеры:</h3>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map(size => (
                <span key={size.id} className="bg-blue-50 text-blue-800 px-3 py-1 rounded-full text-sm">{size.name}</span>
              ))}
            </div>
          </div>
          <button className="bg-orange-500 text-white w-full sm:w-auto px-4 sm:px-8 py-3 rounded-full hover:bg-orange-600 transition-colors font-bold text-lg">
            Найти магазины
          </button>
        </div>
      </div>
    </div>
  );

  const renderMobileSortAndView = () => (
    <div className="md:hidden mb-6">
      <div className="flex justify-between items-center">
        <div 
          className="flex items-center cursor-pointer bg-blue-50 px-3 py-2 rounded-lg"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <span className="text-blue-800 text-sm mr-1">Сортировка:</span>
          <span className="text-blue-900 text-sm font-medium">{getSortOptionText(sortBy)}</span>
          {isDropdownOpen ? <ChevronUp className="text-orange-500 ml-1 h-4 w-4" /> : <ChevronDown className="text-orange-500 ml-1 h-4 w-4" />}
        </div>
        <div className="flex border-2 border-gray-200">
          <button className={`p-2 ${viewMode === 'grid' ? 'bg-orange-100' : ''}`} onClick={() => setViewMode('grid')}>
            <Grid className={`h-5 w-5 ${viewMode === 'grid' ? 'text-orange-500' : 'text-gray-400'}`} />
          </button>
          <button className={`p-2 ${viewMode === 'list' ? 'bg-orange-100' : ''}`} onClick={() => setViewMode('list')}>
            <List className={`h-5 w-5 ${viewMode === 'list' ? 'text-orange-500' : 'text-gray-400'}`} />
          </button>
        </div>
      </div>
      {isDropdownOpen && (
        <div className="absolute mt-1 bg-white border border-gray-200 shadow-lg z-10 w-full left-0 px-4">
          {(['popularity', 'rating', 'a-z', 'z-a'] as SortOption[]).map(option => (
            <div 
              key={option} 
              className="px-4 py-3 border-b border-gray-100 hover:bg-gray-50 cursor-pointer text-blue-900"
              onClick={() => {
                setSortBy(option);
                setIsDropdownOpen(false);
              }}
            >
              {getSortOptionText(option)}
            </div>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Магазин продуктов</title>
        <meta name="description" content="Просмотрите нашу полную линейку продуктов" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto max-w-7xl px-4 sm:px-6">
        <div className="py-4">
          <div className="text-xs text-blue-800 font-light mt-4">Магазин продуктов</div>
        </div>

        <div className="flex flex-col md:flex-row md:justify-between md:items-center my-2 md:my-6">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-light text-orange-500 mb-4 md:mb-0">
            Магазин <span className="font-bold" style={{ fontFamily: '"Avenir Next Heavy", sans-serif' }}>Продуктов</span>
          </h1>
        </div>

        <div className="md:hidden mb-4">
          <button 
            className="w-full bg-blue-50 text-blue-800 py-3 rounded flex items-center justify-center font-bold"
            onClick={() => setIsMobileFilterOpen(true)}
          >
            <Filter className="mr-2 h-5 w-5" />
            Фильтры и сортировка
          </button>
        </div>

        <div className="flex flex-col md:flex-row md:space-x-6 mb-8">
          <div className="hidden md:block w-64 flex-shrink-0">
            {!isFilterOpen && (
              <button
                className="mb-4 bg-blue-50 text-blue-800 py-2 px-4 rounded flex items-center font-bold"
                onClick={() => setIsFilterOpen(true)}
              >
                <Filter className="mr-2 h-5 w-5" />
                Показать фильтры
              </button>
            )}
            {renderFilterPanel()}
          </div>

          {renderMobileFilterPanel()}

          <div className="flex-grow relative">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4 md:mb-6 border-b border-gray-200 pb-4">
              <div className="text-blue-800 font-bold text-lg sm:text-xl mb-2 md:mb-0" style={{ fontFamily: '"Avenir Next Heavy", sans-serif' }}>
                {sortedProducts.length} Продуктов
              </div>
              <div className="hidden md:flex items-center gap-6">
                <div className="flex items-center gap-2 relative">
                  <span className="text-blue-900 font-semibold" style={{ fontFamily: '"Avenir Next Heavy", sans-serif' }}>Сортировать по:</span>
                  <div className="flex items-center cursor-pointer" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                    <span className="text-blue-900">{getSortOptionText(sortBy)}</span>
                    {isDropdownOpen ? <ChevronUp className="text-orange-500 ml-1 h-4 w-4" /> : <ChevronDown className="text-orange-500 ml-1 h-4 w-4" />}
                  </div>
                  {isDropdownOpen && (
                    <div className="absolute top-full right-0 mt-1 bg-white border border-gray-200 shadow-lg z-10 w-40">
                      {(['popularity', 'rating', 'a-z', 'z-a'] as SortOption[]).map(option => (
                        <div 
                          key={option} 
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-blue-900"
                          onClick={() => {
                            setSortBy(option);
                            setIsDropdownOpen(false);
                          }}
                        >
                          {getSortOptionText(option)}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <div className="flex border-2 border-gray-200">
                  <button className={`p-2 ${viewMode === 'grid' ? 'bg-orange-100' : ''}`} onClick={() => setViewMode('grid')}>
                    <Grid className={`h-5 w-5 ${viewMode === 'grid' ? 'text-orange-500' : 'text-gray-400'}`} />
                  </button>
                  <button className={`p-2 ${viewMode === 'list' ? 'bg-orange-100' : ''}`} onClick={() => setViewMode('list')}>
                    <List className={`h-5 w-5 ${viewMode === 'list' ? 'text-orange-500' : 'text-gray-400'}`} />
                  </button>
                </div>
              </div>
            </div>
            
            {renderMobileSortAndView()}

            {sortedProducts.length === 0 ? (
              <div className="text-center py-10 sm:py-16 bg-gray-50 rounded">
                <div className="text-4xl sm:text-5xl text-gray-300 mb-4">¯\_(ツ)_/¯</div>
                <p className="text-lg sm:text-xl text-blue-800 mb-2">Не найдено продуктов, соответствующих вашим фильтрам</p>
                <button 
                  onClick={clearAllFilters}
                  className="mt-4 px-6 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors"
                >
                  Очистить все фильтры
                </button>
              </div>
            ) : (
              <div className={viewMode === 'grid' ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6' : 'flex flex-col'}>
                {sortedProducts.map(product => (
                  viewMode === 'grid' ? renderGridItem(product) : renderListItem(product)
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ShopProductsPage;