'use client';
import React, { useState, useEffect, Suspense } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Star, ChevronDown, Grid, List, Filter, X, ChevronUp, Check } from 'lucide-react';
import { useTranslations } from 'next-intl';

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

// Loading component to display while suspense is active
const ProductsLoading = () => (
  <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900">
    <div className="text-blue-800 dark:text-blue-100 text-xl">Loading products...</div>
  </div>
);

// Separate the search params logic into a client component
const ShopProductsContent = () => {
  const searchParams = useSearchParams();
  const [productCategories, setProductCategories] = useState<ProductCategories[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
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
  const t = useTranslations();
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
        if (!res.ok) {
          throw new Error(`API fetch failed with status: ${res.status}`);
        }
        const data: ProductCategories[] = await res.json();
        console.log('Fetched products:', data);
        setProductCategories(data);
        
        // Extract unique brands and categories
        const brands = [...new Set(data.flatMap(category => 
          category.products.map(product => product.brandName)
        ))];
        
        const categories = [...new Set(data.flatMap(category => 
          category.products.map(product => product.category)
        ))];
        
        setAvailableBrands(brands);
        setAvailableCategories(categories);
        
        // Apply category filter from URL if present
        const categoryParam = searchParams.get('category');
        if (categoryParam && categories.includes(categoryParam)) {
          setFilterOptions(prev => ({
            ...prev,
            categories: [categoryParam]
          }));
        }
      } catch (err) {
        console.error('Error fetching products:', err);
        setError(err instanceof Error ? err.message : 'Failed to fetch products');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();

    // Set filter panel visibility based on screen size
    const handleResize = () => {
      setIsFilterOpen(window.innerWidth >= 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [searchParams]);

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

  if (loading) return <ProductsLoading />;
  
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center p-8">
          <div className="text-red-500 text-xl mb-4">{t('errorLoadingData')}</div>
          <p className="text-blue-800 dark:text-blue-100 mb-4">{error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition-colors"
          >
            {t('tryAgain')}
          </button>
        </div>
      </div>
    );
  }

  const toggleBrandFilter = (brand: string) => {
    setFilterOptions(prev => ({
      ...prev,
      brands: prev.brands.includes(brand) 
        ? prev.brands.filter(b => b !== brand) 
        : [...prev.brands, brand]
    }));
  };

  const toggleCategoryFilter = (category: string) => {
    setFilterOptions(prev => ({
      ...prev,
      categories: prev.categories.includes(category) 
        ? prev.categories.filter(c => c !== category) 
        : [...prev.categories, category]
    }));
  };

  const clearAllFilters = () => {
    setFilterOptions({ brands: [], categories: [], minRating: 0, hasBadge: false });
  };

  // Extract all products from categories
  const allProducts = productCategories.flatMap(category => category.products);

  // Apply filters
  const filteredProducts = allProducts.filter(product => {
    if (filterOptions.brands.length > 0 && !filterOptions.brands.includes(product.brandName)) return false;
    if (filterOptions.categories.length > 0 && !filterOptions.categories.includes(product.category)) return false;
    if (filterOptions.minRating > 0 && product.rating < filterOptions.minRating) return false;
    if (filterOptions.hasBadge && !product.badge) return false;
    return true;
  });

  // Sort products
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
      case 'popularity': return t('productPage.popularity');
      case 'rating': return t('productPage.product_rating');
      case 'a-z': return t('productPage.a-z');
      case 'z-a': return t('productPage.z-a');
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
      <span className="text-blue-800 dark:text-blue-100 ml-2 text-xs font-normal">({rating})</span>
    </div>
  );

  const renderBrandFilter = () => (
    <div className="mb-6">
      <h3 className="font-bold text-blue-800 dark:text-blue-100 mb-3">{t('productPage.brand')}</h3>
      <div className="space-y-2 max-h-56 overflow-y-auto">
        {availableBrands.map(brand => (
          <div 
            key={brand} 
            className="flex items-center cursor-pointer"
            onClick={() => toggleBrandFilter(brand)}
          >
            <div className={`w-5 h-5 mr-2 border rounded flex items-center justify-center ${filterOptions.brands.includes(brand) ? 'bg-orange-500 border-orange-500' : 'border-gray-300'}`}>
              {filterOptions.brands.includes(brand) && <Check className="w-4 h-4 text-white" />}
            </div>
            <span className="text-blue-800 dark:text-blue-100 text-sm">{brand}</span>
          </div>
        ))}
      </div>
    </div>
  );

  const renderCategoryFilter = () => (
    <div className="mb-6">
      <h3 className="font-bold text-blue-800 dark:text-blue-100 mb-3">{t('productPage.category')}</h3>
      <div className="space-y-2 max-h-96 overflow-y-auto pr-1">
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
            <span className="text-blue-800 dark:text-blue-100 text-sm">{category}</span>
          </div>
        ))}
      </div>
    </div>
  );

  const renderFilterPanel = () => {
    if (!isFilterOpen) return null;
    return (
      <div className="p-5 bg-white dark:bg-gray-800 shadow rounded-lg border border-gray-100 md:sticky md:top-16">
        <div className="flex justify-between items-center mb-5 pb-3 border-b border-gray-100">
          <h2 className="text-xl font-bold text-blue-800 dark:text-blue-100">{t('productPage.filters')}</h2>
          <div className="flex gap-2">
            <button 
              className="text-blue-600 hover:text-orange-500 text-sm font-medium transition-colors" 
              onClick={clearAllFilters}
            >
              {t('productPage.clearFilters')}
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
        <div className="bg-white dark:bg-gray-800 w-4/5 max-w-sm h-full overflow-y-auto p-4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-blue-800 dark:text-blue-100">Фильтры</h2>
            <X 
              className="w-6 h-6 text-blue-800 dark:text-blue-100 cursor-pointer" 
              onClick={() => setIsMobileFilterOpen(false)}
            />
          </div>
          {renderBrandFilter()}
          {renderCategoryFilter()}
          <div className="mt-6 flex justify-between">
            <button 
              className="px-4 py-2 bg-gray-200 text-blue-800 dark:text-blue-100 rounded-full"
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
        <div className="absolute bottom-0 w-full text-center p-4 text-sm text-gray-500 dark:text-gray-400">Изображение недоступно</div>
      </div>
    ) : (
      <Image src={product.image} alt={product.fullTitle} layout="fill" objectFit="contain" onError={() => handleImageError(product.id)} />
    );
  };

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

  const renderGridItem = (product: Products) => (
    <Link href={`/product-details/${product.id}`} key={product.id}>
      <div className="bg-white dark:bg-gray-800 p-4 rounded shadow-sm hover:shadow-md transition-shadow h-full flex flex-col dark:bg-gray-800">
        <div className="relative h-48 sm:h-56 md:h-64 w-full mb-4 flex-shrink-0">
          {product.badge && <ProductBadge badgeText={product.badge} />}
          <div className="w-full h-full relative">
            {renderProductImage(product)}
          </div>
        </div>
        <div className="text-left flex-grow flex flex-col">
          <div className="text-xs text-blue-600 mb-1">{product.brandName}</div>
          <h2 className="text-lg sm:text-xl mb-1">
            <span className="text-blue-800 dark:text-blue-100">{product.name} </span>
            <span className="text-blue-800 dark:text-blue-100 font-bold">{product.subtitle}</span>
          </h2>
          <div className="flex justify-start items-center mb-3">
            {renderRatingStars(product.rating)}
            <span className="text-blue-800 dark:text-blue-100 ml-2 text-xs font-normal">({product.reviews})</span>
          </div>
          <p className="text-blue-800 dark:text-blue-100 mb-4 text-sm line-clamp-2 flex-grow">{product.description}</p>
          <button className="bg-orange-500 text-white px-4 sm:px-8 py-2 w-full sm:w-auto my-2 rounded-full hover:bg-orange-600 transition-colors font-bold text-lg">
            {t('productPage.productDetails')}
          </button>
        </div>
      </div>
    </Link>
  );

  const renderListItem = (product: Products) => (
    <div key={product.id} className="border-b border-gray-200 dark:border-gray-700 pb-6 mb-6">
      <div className="flex flex-col sm:flex-row">
        <div className="w-full sm:w-1/3 relative mb-4 sm:mb-0">
          <Link href={`/product-details/${product.id}`} className="block relative">
            <div className="relative h-56 sm:h-64 md:h-72 w-full sm:w-56 md:w-72 mx-auto">
              {product.badge && <ProductBadge badgeText={product.badge} />}
              {renderProductImage(product)}
            </div>
          </Link>
        </div>
        <div className="w-full sm:w-2/3 sm:pl-4">
          <div className="text-xs text-blue-600 mb-1">{product.brandName} | {product.category}</div>
          <Link href={`/product-details/${product.id}`}>
            <h2 className="text-xl sm:text-2xl mb-1">
              <span className="text-blue-800 dark:text-blue-100">{product.name} </span>
              <span className="text-blue-800 dark:text-blue-100 font-bold">{product.subtitle}</span>
            </h2>
          </Link>
          <div className="flex items-center mb-3">
            {renderRatingStars(product.rating)}
            <span className="text-blue-800 dark:text-blue-100 ml-2">({product.reviews})</span>
          </div>
          <p className="text-blue-800 dark:text-blue-100 mb-4 sm:mb-6" style={{ fontFamily: '"Kamber Medium", sans-serif' }}>{product.description}</p>
          <div className="mb-4">
            <h3 className="font-bold text-blue-800 dark:text-blue-100 mb-2">{t('productPage.availableSizes')}</h3>
            <div className="flex flex-wrap gap-2">
              <span className="bg-blue-50 text-blue-800 dark:text-blue-100 px-3 py-1 rounded-full text-sm">-</span>
            </div>
          </div>
          <button className="bg-orange-500 text-white w-full sm:w-auto px-4 sm:px-8 py-3 rounded-full hover:bg-orange-600 transition-colors font-bold text-lg">
            Подробнее о товаре
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
          <span className="text-blue-800 dark:text-blue-100 text-sm mr-1">Сортировка:</span>
          <span className="text-blue-900 text-sm font-medium">{getSortOptionText(sortBy)}</span>
          {isDropdownOpen ? <ChevronUp className="text-orange-500 ml-1 h-4 w-4" /> : <ChevronDown className="text-orange-500 ml-1 h-4 w-4" />}
        </div>
        <div className="flex border-2 border-gray-200 dark:border-gray-700">
          <button className={`p-2 ${viewMode === 'grid' ? 'bg-orange-100' : ''}`} onClick={() => setViewMode('grid')}>
            <Grid className={`h-5 w-5 ${viewMode === 'grid' ? 'text-orange-500' : 'text-gray-400'}`} />
          </button>
          <button className={`p-2 ${viewMode === 'list' ? 'bg-orange-100' : ''}`} onClick={() => setViewMode('list')}>
            <List className={`h-5 w-5 ${viewMode === 'list' ? 'text-orange-500' : 'text-gray-400'}`} />
          </button>
        </div>
      </div>
      {isDropdownOpen && (
        <div className="absolute mt-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg z-10 w-full left-0 px-4">
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
    <div className="min-h-screen bg-white dark:bg-gray-800 dark:bg-gray-900 text-gray-800 dark:text-gray-100 dark:text-gray-100">
      <Head>
        <title>{t('productPage.catalog')}</title>
        <meta name="description" content="Просмотрите нашу полную линейку продуктов" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto max-w-7xl px-4 sm:px-6">
        <div className="py-4">
          <div className="text-xs text-blue-800 dark:text-blue-100 font-light mt-4">{t('productPage.catalog')}</div>
        </div>

        <div className="flex flex-col md:flex-row md:justify-between md:items-center my-2 md:my-6">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-light text-orange-500 mb-4 md:mb-0">
            {t('productPage.title1')} <span className="font-bold" style={{ fontFamily: '"Avenir Next Heavy", sans-serif' }}>{t('productPage.title2')}</span>
          </h1>
        </div>

        <div className="md:hidden mb-4">
          <button 
            className="w-full bg-blue-50 text-blue-800 dark:text-blue-100 py-3 rounded flex items-center justify-center font-bold"
            onClick={() => setIsMobileFilterOpen(true)}
          >
            <Filter className="mr-2 h-5 w-5" />
            {t('productPage.filters_and_sorting')}
          </button>
        </div>

        <div className="flex flex-col md:flex-row md:space-x-6 mb-8">
          <div className="hidden md:block w-64 flex-shrink-0">
            {!isFilterOpen && (
              <button
                className="mb-4 bg-blue-50 text-blue-800 dark:text-blue-100 py-2 px-4 rounded flex items-center font-bold"
                onClick={() => setIsFilterOpen(true)}
              >
                <Filter className="mr-2 h-5 w-5" />
                {t('productPage.show_filters')}
              </button>
            )}
            {renderFilterPanel()}
          </div>

          {renderMobileFilterPanel()}

          <div className="flex-grow relative">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4 md:mb-6 border-b border-gray-200 dark:border-gray-700 pb-4">
              <div className="text-blue-800 dark:text-blue-100 font-bold text-lg sm:text-xl mb-2 md:mb-0" style={{ fontFamily: '"Avenir Next Heavy", sans-serif' }}>
                {sortedProducts.length} {t('productPage.products')}
              </div>
              <div className="hidden md:flex items-center gap-6">
                <div className="flex items-center gap-2 relative">
                  <span className="text-blue-900 dark:text-gray-100 font-semibold" style={{ fontFamily: '"Avenir Next Heavy", sans-serif' }}>{t('productPage.sortBy')}:</span>
                  <div className="flex items-center cursor-pointer" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                    <span className="text-blue-900 dark:text-gray-100">{getSortOptionText(sortBy)}</span>
                    {isDropdownOpen ? <ChevronUp className="text-orange-500 ml-1 h-4 w-4" /> : <ChevronDown className="text-orange-500 ml-1 h-4 w-4" />}
                  </div>
                  {isDropdownOpen && (
                    <div className="absolute top-full right-0 mt-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg z-10 w-40">
                      {(['popularity', 'rating', 'a-z', 'z-a'] as SortOption[]).map(option => (
                        <div 
                          key={option} 
                          className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer text-blue-900 dark:text-gray-100"
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
                <div className="flex border-2 border-gray-200 dark:border-gray-700">
                  <button className={`p-2 ${viewMode === 'grid' ? 'bg-orange-100 dark:bg-gray-700' : ''}`} onClick={() => setViewMode('grid')}>
                    <Grid className={`h-5 w-5 ${viewMode === 'grid' ? 'text-orange-500' : 'text-gray-400'}`} />
                  </button>
                  <button className={`p-2 ${viewMode === 'list' ? 'bg-orange-100 dark:bg-gray-700' : ''}`} onClick={() => setViewMode('list')}>
                    <List className={`h-5 w-5 ${viewMode === 'list' ? 'text-orange-500' : 'text-gray-400'}`} />
                  </button>
                </div>
              </div>
            </div>
            
            {renderMobileSortAndView()}

            {sortedProducts.length === 0 ? (
              <div className="text-center py-10 sm:py-16 bg-gray-50 rounded">
                <div className="text-4xl sm:text-5xl text-gray-300 mb-4">¯\_(ツ)_/¯</div>
                <p className="text-lg sm:text-xl text-blue-800 dark:text-blue-100 mb-2">{t('productPage.noResults')}</p>
                <button 
                  onClick={clearAllFilters}
                  className="mt-4 px-6 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors"
                >
                  {t('productPage.clearFilters')}
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

// Main component that wraps the content with Suspense
const ShopProductsPage: React.FC = () => {
  return (
    <Suspense fallback={<ProductsLoading />}>
      <ShopProductsContent />
    </Suspense>
  );
};

export default ShopProductsPage;