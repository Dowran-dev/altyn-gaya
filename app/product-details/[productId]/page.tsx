'use client';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Star, ShoppingBag, Info, MessageCircle, List } from 'lucide-react';
import { useState, useEffect } from 'react';
import { notFound } from 'next/navigation'; // Optional

// Interface for product sizes (unchanged)
interface ProductSize {
  id: number;
  name: string;
  quantity: string;
  price: string;
}

// Interface for product reviews (unchanged)
interface ProductReview {
  id: number;
  author: string;
  date: string;
  rating: number;
  title: string;
  content: string;
}

// Interface for the nested "details" object
interface ProductDetails {
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

// Interface for the outer product object
interface Product {
  title: string;
  description: string;
  image: string;
  color: string;
  brandName: string;
  category: string;
  features: string[];
  details: ProductDetails;
}

export default function ProductDetailPage({ params }: { params: { productId: string } }) {
  const { productId } = params;
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState('description');
  const [selectedSize, setSelectedSize] = useState<number | null>(null);
  
  // Mock related products data (you can replace this with a real API fetch)
  const relatedProducts = [
    {
      id: 1,
      name: "Real Plus Чистое и уютное масло RX",
      description: "Продукт премиум-класса для готовки и улучшения вкуса.",
      rating: 4.5,
      reviews: 254,
      imageSrc: "/images/real-plus-1.jpg", // Replace with actual image path
    },
    {
      id: 2,
      name: "Real Plus Fresh Моющее средство для стирки с приятным ароматом свежести",
      description: "Моющее средство с дополнительным ароматом свежести для стирки одежды.",
      rating: 4.5,
      reviews: 255,
      imageSrc: "/images/real-plus-2.jpg", // Replace with actual image path
    },
    {
      id: 3,
      name: "Real Plus White Худкое моющее средство для белых тканей",
      description: "Эффективное моющее средство для стирки белых тканей с защитой от потемнения и с...",
      rating: 4.5,
      reviews: 312,
      imageSrc: "/images/real-plus-3.jpg", // Replace with actual image path
    },
  ];

  // Fetch data with proper error handling
  useEffect(() => {
    let isMounted = true;
    const lastFailedTime = localStorage.getItem('products_api_failed_time');
    const currentTime = new Date().getTime();
    
    if (lastFailedTime && currentTime - parseInt(lastFailedTime) < 60000) {
      const cachedData = localStorage.getItem('cached_product_' + productId);
      if (cachedData) {
        setProduct(JSON.parse(cachedData));
        setLoading(false);
        return;
      } else if (isMounted) {
        setError('API в данный момент недоступен. Пожалуйста, попробуйте позже.');
        setLoading(false);
        return;
      }
    }
    
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/products`,
          { cache: 'force-cache' }
        );
        
        if (!response.ok) {
          throw new Error(`Ошибка запроса API с кодом ${response.status}`);
        }
        
        const products = await response.json();
        const foundProduct = products.find((item: Product) => item.details.id === Number(productId));
        
        if (isMounted) {
          if (foundProduct) {
            setProduct(foundProduct);
            localStorage.setItem('cached_product_' + productId, JSON.stringify(foundProduct));
            if (foundProduct.details.sizes && foundProduct.details.sizes.length > 0) {
              setSelectedSize(foundProduct.details.sizes[0].id);
            }
          } else {
            setError('Продукт не найден');
          }
          setLoading(false);
        }
      } catch (error) {
        console.error('Ошибка загрузки продукта:', error);
        localStorage.setItem('products_api_failed_time', currentTime.toString());
        
        if (isMounted) {
          const cachedData = localStorage.getItem('cached_product_' + productId);
          if (cachedData) {
            setProduct(JSON.parse(cachedData));
            const parsedProduct = JSON.parse(cachedData);
            if (parsedProduct.details.sizes && parsedProduct.details.sizes.length > 0) {
              setSelectedSize(parsedProduct.details.sizes[0].id);
            }
          } else {
            setError('Не удалось загрузить данные о продукте. Пожалуйста, попробуйте позже.');
          }
          setLoading(false);
        }
      }
    };
    
    fetchProduct();
    
    return () => {
      isMounted = false;
    };
  }, [productId]);
  
  // Render loading state
  if (loading) {
    return (
      <div className="container mx-auto max-w-7xl px-3 sm:px-4 py-4 sm:py-6 flex justify-center items-center h-64">
        <div className="animate-pulse flex flex-col items-center">
          <div className="h-8 w-32 bg-gray-200 rounded mb-4"></div>
          <div className="text-gray-500">Загрузка информации о продукте...</div>
        </div>
      </div>
    );
  }
  
  // Render error state
  if (error) {
    return (
      <div className="container mx-auto max-w-7xl px-3 sm:px-4 py-4 sm:py-6">
        <Link href="/shop" className="flex items-center text-gray-600 hover:text-blue-800 mb-3 sm:mb-4">
          <ArrowLeft className="h-4 w-4 mr-1" />
          <span className="text-xs sm:text-sm">Вернуться в магазин</span>
        </Link>
        
        <div className="flex flex-col items-center justify-center h-64">
          <h2 className="text-xl font-bold text-red-500 mb-2">Не удалось загрузить продукт</h2>
          <p className="text-gray-600 mb-4">{error}</p>
          <Link href="/shop" className="text-blue-800 hover:underline">
            Посмотреть другие продукты
          </Link>
        </div>
      </div>
    );
  }
  
  if (!product) {
    notFound(); // Optional: Replace custom 404 UI with Next.js's notFound()
  }
  // If no product found, show 404
  // if (!product) {
  //   return (
  //     <div className="container mx-auto max-w-7xl px-3 sm:px-4 py-4 sm:py-6">
  //       <Link href="/shop" className="flex items-center text-gray-600 hover:text-blue-800 mb-3 sm:mb-4">
  //         <ArrowLeft className="h-4 w-4 mr-1" />
  //         <span className="text-xs sm:text-sm">Вернуться в магазин</span>
  //       </Link>
        
  //       <div className="flex flex-col items-center justify-center h-64">
  //         <h2 className="text-xl font-bold text-gray-800 mb-2">Продукт не найден</h2>
  //         <p className="text-gray-600 mb-4">Продукт, который вы ищете, не существует или был удален.</p>
  //         <Link href="/shop" className="text-blue-800 hover:underline">
  //           Посмотреть доступные продукты
  //         </Link>
  //       </div>
  //     </div>
  //   );
  // }

  // Render rating stars
  const renderRatingStars = (rating: number) => (
    <div className="flex text-orange-500">
      {[...Array(Math.floor(rating))].map((_, i) => (
        <Star key={i} fill="currentColor" className="h-4 w-4" />
      ))}
      {rating % 1 > 0 && (
        <Star
          key="half"
          className="h-4 w-4"
          fill="currentColor"
          strokeWidth={0}
          style={{ clipPath: 'inset(0 50% 0 0)' }}
        />
      )}
    </div>
  );

  const details = product.details;

  return (
    <main className="container mx-auto max-w-7xl px-3 sm:px-4 py-4 sm:py-6">
      {/* Header Section */}
      <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
        {/* Back Navigation */}
        <Link href="/shop" className="flex items-center text-gray-600 hover:text-blue-800 mb-3">
          <ArrowLeft className="h-4 w-4 mr-1" />
          <span className="text-xs sm:text-sm">Вернуться в магазин</span>
        </Link>

        {/* Breadcrumb Navigation */}
        <div className="py-1 mb-4">
          <div className="text-xs text-blue-800 font-light">
            <Link href="/" className="text-blue-800 hover:text-orange-500">Главная</Link> / 
            <Link href="/shop" className="text-blue-800 hover:text-orange-500 ml-1">Магазин</Link> / 
            <span className="text-gray-500 ml-1">{details.name}</span>
          </div>
        </div>
      </div>

      {/* Product Content */}
      <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
        {/* Product Layout */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Product Image - Left side */}
          <div className="md:w-1/2">
            <div className="relative rounded-xl overflow-hidden aspect-square">
              <Image
                src={product.image}
                alt={details.fullTitle}
                layout="fill"
                objectFit="cover"
                priority
                className="transition-transform duration-500 hover:scale-105"
              />
              {details.badge && (
                <span className="absolute top-3 left-3 text-xs font-medium px-3 py-1 rounded-full bg-orange-100 text-orange-500">
                  {details.badge}
                </span>
              )}
            </div>
          </div>

          {/* Product Info - Right side */}
          <div className="md:w-1/2">
            {/* Product Header */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-2">
                <div className="flex items-center text-gray-500 text-xs">
                  {renderRatingStars(details.rating)}
                  <span className="ml-2">{details.reviews} отзывов</span>
                </div>
              </div>
              <h1 className="text-xl sm:text-2xl font-bold text-blue-900 mb-3">{details.name}</h1>
              <p className="text-sm text-gray-600 border-l-2 border-blue-200 pl-3 italic">{details.description}</p>
            </div>

            {/* Sizes - Redesigned */}
            <div className="mb-6">
    <div className="flex items-center justify-between mb-3">
      <h3 className="text-sm font-semibold text-gray-700">Доступные размеры</h3>
      {/* <span className="text-xs text-blue-800 underline cursor-pointer">Таблица размеров</span> */}
    </div>
    <div className="flex flex-wrap gap-2">
      {details.sizes.map((size) => (
        <button
          key={size.id}
          onClick={() => setSelectedSize(size.id)}
          className={`px-4 py-2 rounded-full text-xs ${
            selectedSize === size.id
              ? 'bg-blue-800 text-white font-bold'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          } transition-colors`}
        >
          {size.name} – {size.price}
        </button>
      ))}
    </div>
  </div>

            {/* Key Features - Redesigned */}
            <div className="mb-6">
              <h3 className="text-sm font-semibold mb-3 text-gray-700 flex items-center">
                <span className="inline-block w-1 h-4 bg-blue-800 mr-2"></span>
                Основные характеристики
              </h3>
              <ul className="text-xs text-gray-600 space-y-2 bg-blue-50 p-3 rounded-lg">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <div className="w-1.5 h-1.5 bg-blue-800 rounded-full mr-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Button - Redesigned */}
            {/* <div className="mt-6">
              <button className="w-full bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors font-bold text-sm flex items-center justify-center gap-2 shadow-md">
                <ShoppingBag className="h-5 w-5" />
                <span>Найти магазины</span>
              </button>
            </div> */}
          </div>
        </div>
      </div>

      {/* Product Details - Tabbed Layout */}
      <div className="bg-white rounded-lg shadow-sm mb-6">
        <div className="border-b border-gray-200">
          <div className="flex overflow-x-auto no-scrollbar">
            <button
              onClick={() => setActiveTab('description')}
              className={`py-3 px-4 text-sm font-medium whitespace-nowrap border-b-2 transition-colors flex items-center ${
                activeTab === 'description'
                  ? 'text-blue-800 border-blue-800'
                  : 'text-gray-500 border-transparent hover:text-blue-800 hover:border-blue-300'
              }`}
            >
              <Info className="w-4 h-4 mr-2" />
              Описание
            </button>
            <button
              onClick={() => setActiveTab('instructions')}
              className={`py-3 px-4 text-sm font-medium whitespace-nowrap border-b-2 transition-colors flex items-center ${
                activeTab === 'instructions'
                  ? 'text-blue-800 border-blue-800'
                  : 'text-gray-500 border-transparent hover:text-blue-800 hover:border-blue-300'
              }`}
            >
              <List className="w-4 h-4 mr-2" />
              Инструкции
            </button>
            <button
              onClick={() => setActiveTab('reviews')}
              className={`py-3 px-4 text-sm font-medium whitespace-nowrap border-b-2 transition-colors flex items-center ${
                activeTab === 'reviews'
                  ? 'text-blue-800 border-blue-800'
                  : 'text-gray-500 border-transparent hover:text-blue-800 hover:border-blue-300'
              }`}
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Отзывы ({details.reviews})
            </button>
          </div>
        </div>
        
        <div className="p-4">
          {activeTab === 'description' && (
            <div className="text-sm text-gray-700">
              <p className="leading-relaxed">{details.longDescription}</p>
            </div>
          )}
          
          {activeTab === 'instructions' && (
            <div>
              <ul className="text-sm text-gray-700 space-y-2 list-disc pl-5">
                {details.directions.map((direction, index) => (
                  <li key={index} className="leading-relaxed">{direction}</li>
                ))}
              </ul>
            </div>
          )}
          
          {activeTab === 'reviews' && (
            <div>
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center">
                  <div className="mr-2 text-lg font-semibold text-blue-900">{details.rating}</div>
                  {renderRatingStars(details.rating)}
                  <span className="ml-2 text-xs text-gray-500">на основе {details.reviews} отзывов</span>
                </div>
                <button className="text-xs text-white bg-blue-800 hover:bg-blue-900 px-3 py-1 rounded-full transition-colors">
                  Написать отзыв
                </button>
              </div>
              
              <div className="space-y-4 divide-y divide-gray-100">
                {details.reviewsList.map((review) => (
                  <div key={review.id} className="pt-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        {renderRatingStars(review.rating)}
                        <span className="ml-2 font-medium text-xs">{review.author}</span>
                      </div>
                      <span className="text-xs text-gray-500">{review.date}</span>
                    </div>
                    <h4 className="text-sm font-medium text-blue-900 mb-1">{review.title}</h4>
                    <p className="text-xs text-gray-600">{review.content}</p>
                  </div>
                ))}
                
                {details.reviewsList.length > 2 && (
                  <div className="pt-4 text-center">
                    <button className="text-xs text-blue-800 hover:text-orange-500 font-medium border border-blue-800 rounded-full px-4 py-2 transition-colors hover:border-orange-500">
                      Посмотреть все отзывы
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Related Products Section - Redesigned */}
      <div className="bg-white rounded-lg shadow-sm p-4">
        <h2 className="text-lg font-bold text-blue-900 mb-4 flex items-center">
          <span className="inline-block w-1 h-5 bg-orange-500 mr-2"></span>
          Похожие продукты
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {relatedProducts.map((relatedProduct) => (
            <div
              key={relatedProduct.id}
              className="bg-white rounded-lg border border-gray-100 hover:border-blue-200 overflow-hidden h-full transition-all hover:shadow-md"
            >
              {/* Product Image */}
              <div className="relative w-full aspect-[3/2] bg-gray-50">
                <Image
                  src={relatedProduct.imageSrc}
                  alt={relatedProduct.name}
                  layout="fill"
                  objectFit="contain"
                  className="p-4"
                />
                <span className="absolute top-2 right-2 text-xs font-medium px-2 py-1 rounded-full bg-purple-600 text-white">
                  Бестселлер
                </span>
              </div>

              {/* Product Info */}
              <div className="p-4 flex flex-col justify-between">
                <div className="mb-3">
                  <h3 className="text-sm font-bold text-blue-900 line-clamp-2">{relatedProduct.name}</h3>
                  <div className="flex items-center text-gray-500 text-xs mb-1">
                    {renderRatingStars(relatedProduct.rating)}
                    <span className="ml-1">({relatedProduct.reviews})</span>
                  </div>
                </div>
                <button className="w-full bg-orange-500 text-white px-3 py-2 rounded-lg hover:bg-orange-600 transition-colors text-xs font-medium flex items-center justify-center">
                  <ShoppingBag className="h-3 w-3 mr-1" />
                  Найти магазины
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Fixed CTA */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 bg-white p-3 border-t border-gray-200 shadow-lg z-20">
        <button className="w-full bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors font-bold text-sm flex items-center justify-center gap-2">
          <ShoppingBag className="h-5 w-5" />
          <span>Найти магазины</span>
        </button>
      </div>
      <div className="h-16 sm:h-0 block sm:hidden"></div>

      {/* Add custom CSS for hiding scrollbars but allowing scroll */}
      <style jsx global>{`
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </main>
  );
}