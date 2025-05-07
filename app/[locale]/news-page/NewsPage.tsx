'use client';
import React, { useState, useEffect, Suspense } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Search, Calendar, Clock, ChevronDown, Grid, List, Filter, X, ChevronUp, Check, ArrowRight } from 'lucide-react';

interface News {
  id: number;
  title: string;
  category: string;
  date: string;
  summary: string;
  imageSrc: string;
  slug: string;
  featured?: boolean;
  readTime: string;
  content: string;
  relatedItems: number[];
}

interface FilterOptions {
  categories: string[];
  dateRange: string;
}

type SortOption = 'newest' | 'oldest' | 'a-z' | 'z-a';
type ViewMode = 'grid' | 'list';

// Loading component to display while suspense is active
const NewsLoading = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="text-blue-800 dark:text-white text-xl">Загрузка новостных статей...</div>
  </div>
);

// Separate the search params logic into a client component
const NewsPageContent = () => {
  const searchParams = useSearchParams();
  const [news, setNews] = useState<News[]>([]);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState<SortOption>('newest');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const [imageError, setImageError] = useState<Record<string, boolean>>({});
  const [searchTerm, setSearchTerm] = useState('');
  
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [availableCategories, setAvailableCategories] = useState<string[]>([]);
  const [filterOptions, setFilterOptions] = useState<FilterOptions>({
    categories: [],
    dateRange: 'all'
  });
  
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch('/api/news');
        if (!res.ok) throw new Error(`Ошибка загрузки API с кодом: ${res.status}`);
        const data: News[] = await res.json();
        console.log('Загруженные новости:', data);
        setNews(data);
        
        const categories = [...new Set(data.map(item => item.category))];
        
        setAvailableCategories(categories);
        
        const categoryParam = searchParams.get('category');
        if (categoryParam && categories.includes(categoryParam)) {
          setFilterOptions(prev => ({
            ...prev,
            categories: [categoryParam]
          }));
        }
        setLoading(false);
      } catch (err) {
        console.error('Ошибка загрузки новостей:', err);
        setLoading(false);
      }
    };

    fetchNews();

    const handleResize = () => {
      setIsFilterOpen(window.innerWidth >= 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [searchParams]);

  const handleImageError = (newsId: number) => {
    setImageError(prev => ({
      ...prev,
      [newsId]: true
    }));
  };

  if (loading) return <NewsLoading />;

  const toggleCategoryFilter = (category: string) => {
    setFilterOptions(prev => ({
      ...prev,
      categories: prev.categories.includes(category) ? prev.categories.filter(c => c !== category) : [...prev.categories, category]
    }));
  };

  const setDateRangeFilter = (range: string) => {
    setFilterOptions(prev => ({
      ...prev,
      dateRange: range
    }));
  };

  const clearAllFilters = () => {
    setFilterOptions({ categories: [], dateRange: 'all' });
    setSearchTerm('');
  };

  // Filter news based on selected criteria
  const filteredNews = news.filter(item => {
    // Filter by search term
    if (searchTerm && !item.title.toLowerCase().includes(searchTerm.toLowerCase()) && 
        !item.summary.toLowerCase().includes(searchTerm.toLowerCase())) {
      return false;
    }
    
    // Filter by categories
    if (filterOptions.categories.length > 0 && !filterOptions.categories.includes(item.category)) {
      return false;
    }
    
    // Filter by date range
    if (filterOptions.dateRange !== 'all') {
      const itemDate = new Date(item.date);
      const _currentDate = new Date();
      
      if (filterOptions.dateRange === 'week') {
        const weekAgo = new Date();
        weekAgo.setDate(weekAgo.getDate() - 7);
        if (itemDate < weekAgo) return false;
      } else if (filterOptions.dateRange === 'month') {
        const monthAgo = new Date();
        monthAgo.setMonth(monthAgo.getMonth() - 1);
        if (itemDate < monthAgo) return false;
      } else if (filterOptions.dateRange === 'year') {
        const yearAgo = new Date();
        yearAgo.setFullYear(yearAgo.getFullYear() - 1);
        if (itemDate < yearAgo) return false;
      }
    }
    
    return true;
  });

  // Sort the filtered news
  const sortedNews = [...filteredNews].sort((a, b) => {
    switch (sortBy) {
      case 'newest': 
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      case 'oldest': 
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      case 'a-z': 
        return a.title.localeCompare(b.title);
      case 'z-a': 
        return b.title.localeCompare(a.title);
      default: 
        return new Date(b.date).getTime() - new Date(a.date).getTime();
    }
  });

  // Get featured news items
  const featuredNews = sortedNews.filter(item => item.featured);

  const getSortOptionText = (option: SortOption): string => {
    switch (option) {
      case 'newest': return 'Сначала новые';
      case 'oldest': return 'Сначала старые';
      case 'a-z': return 'По заголовку А-Я';
      case 'z-a': return 'По заголовку Я-А';
    }
  };

  const formatDate = (dateString: string) => {
    // Check if the date string format is valid
    // Try different formats based on your data
    
    try {
      // First, check if the date is in a standard format
      const date = new Date(dateString);
      
      // Check if the date is valid
      if (isNaN(date.getTime())) {
        // If the standard parsing fails, try to parse manually
        // This assumes your date might be in format 'DD.MM.YYYY' or similar
        const parts = dateString.split(/[./-]/);
        
        // Check if we have the expected parts (day, month, year)
        if (parts.length === 3) {
          // Try to rearrange to YYYY-MM-DD for proper parsing
          // This depends on your actual date format
          const year = parts[2].length === 4 ? parts[2] : `20${parts[2]}`;
          const month = parts[1].padStart(2, '0');
          const day = parts[0].padStart(2, '0');
          
          const reformattedDate = new Date(`${year}-${month}-${day}`);
          
          if (!isNaN(reformattedDate.getTime())) {
            return reformattedDate.toLocaleDateString('ru-RU', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            });
          }
        }
        
        // If all parsing attempts fail, return a placeholder
        return 'Дата не указана';
      }
      
      return date.toLocaleDateString('ru-RU', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      });
    } catch (error) {
      console.error('Error formatting date:', error);
      return 'Дата не указана';
    }
  };

  const renderNewsImage = (newsItem: News) => {
    const showError = imageError[newsItem.id];
    return showError ? (
      <div className="relative w-full h-full bg-gray-50 flex items-center justify-center overflow-hidden">
        <div className="w-3/4 h-3/4 relative opacity-30">
          <Image src="/images/logo/default.png" alt="Default" layout="fill" objectFit="contain" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" style={{ backgroundColor: `#3538C810` }}></div>
        <div className="absolute bottom-0 w-full text-center p-4 text-sm text-gray-500">Изображение недоступно</div>
      </div>
    ) : (
      <Image src={newsItem.imageSrc} alt={newsItem.title} layout="fill" objectFit="cover" onError={() => handleImageError(newsItem.id)} />
    );
  };

  const renderFeaturedBadge = () => (
    <div className="absolute top-4 left-4 z-10 bg-orange-500 text-white px-3 py-1 text-xs font-bold rounded-full">
      Избранное
    </div>
  );

  const renderCategoryFilter = () => (
    <div className="mb-6">
      <h3 className="font-bold text-blue-800 dark:text-white mb-3">Категории</h3>
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
            <span className="text-blue-800 dark:text-white text-sm">{category}</span>
          </div>
        ))}
      </div>
    </div>
  );

  const renderDateFilter = () => (
    <div className="mb-6">
      <h3 className="font-bold text-blue-800 dark:text-white mb-3">Период времени</h3>
      <div className="space-y-2">
        {['all', 'week', 'month', 'year'].map(range => (
          <div 
            key={range} 
            className="flex items-center cursor-pointer"
            onClick={() => setDateRangeFilter(range)}
          >
            <div className={`w-5 h-5 mr-2 border rounded-full flex items-center justify-center ${
              filterOptions.dateRange === range 
                ? 'bg-orange-500 border-orange-500' 
                : 'border-gray-300'
            }`}>
              {filterOptions.dateRange === range && <div className="w-3 h-3 rounded-full bg-white dark:bg-gray-800"></div>}
            </div>
            <span className="text-blue-800 dark:text-white text-sm">
              {range === 'all' ? 'За всё время' : 
               range === 'week' ? 'За неделю' : 
               range === 'month' ? 'За месяц' : 'За год'}
            </span>
          </div>
        ))}
      </div>
    </div>
  );

  const renderSearchFilter = () => (
    <div className="mb-6">
      <h3 className="font-bold text-blue-800 dark:text-white mb-3">Поиск</h3>
      <div className="relative">
        <input
          type="text"
          placeholder="Поиск новостей..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-full text-blue-800 dark:text-blue-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
      </div>
    </div>
  );

  const renderFilterPanel = () => {
    if (!isFilterOpen) return null;
    return (
      <div className="p-5 bg-white dark:bg-gray-800 shadow rounded-lg border border-gray-100 md:sticky md:top-16 dark:border-gray-700">
        <div className="flex justify-between items-center mb-5 pb-3 border-b border-gray-100">
          <h2 className="text-xl font-bold text-blue-800 dark:text-white">Фильтры</h2>
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
        {renderSearchFilter()}
        {renderCategoryFilter()}
        {renderDateFilter()}
      </div>
    );
  };

  const renderMobileFilterPanel = () => {
    if (!isMobileFilterOpen) return null;
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-40 flex justify-end">
        <div className="bg-white dark:bg-gray-800 w-4/5 max-w-sm h-full overflow-y-auto p-4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-blue-800 dark:text-white">Фильтры</h2>
            <X 
              className="w-6 h-6 text-blue-800 dark:text-white cursor-pointer" 
              onClick={() => setIsMobileFilterOpen(false)}
            />
          </div>
          {renderSearchFilter()}
          {renderCategoryFilter()}
          {renderDateFilter()}
          <div className="mt-6 flex justify-between">
            <button 
              className="px-4 py-2 bg-gray-200 text-blue-800 dark:text-white rounded-full"
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

  const renderGridItem = (newsItem: News) => (
    <Link href={`/news/${newsItem.slug}`} key={newsItem.id}>
      <div className="bg-white dark:bg-gray-800 p-4 rounded shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
        <div className="relative h-48 sm:h-56 md:h-64 w-full mb-4 flex-shrink-0">
          {newsItem.featured && renderFeaturedBadge()}
          <div className="w-full h-full relative rounded-lg overflow-hidden">
            {renderNewsImage(newsItem)}
          </div>
        </div>
        <div className="text-left flex-grow flex flex-col">
          <div className="flex justify-between items-center mb-2">
            <div className="bg-blue-50 dark:bg-blue-900 text-blue-600 px-3 py-1 rounded-full text-xs">{newsItem.category}</div>
            <div className="flex items-center text-gray-500 text-xs">
              <Clock className="h-3 w-3 mr-1"/>
              <span>{newsItem.readTime}</span>
            </div>
          </div>
          <h2 className="text-lg font-bold text-blue-800 dark:text-white mb-2 line-clamp-2">{newsItem.title}</h2>
          <div className="flex items-center text-gray-500 text-xs mb-3">
            <Calendar className="h-3 w-3 mr-1"/>
            <span>{formatDate(newsItem.date)}</span>
          </div>
          <p className="text-blue-800 dark:text-white mb-4 text-sm line-clamp-3 flex-grow">{newsItem.summary}</p>
          <div className="flex items-center text-orange-500 font-medium text-sm hover:text-orange-600 transition-colors">
          Читать далее <ArrowRight className="ml-1 h-4 w-4" />
          </div>
        </div>
      </div>
    </Link>
  );

  const renderListItem = (newsItem: News) => (
    <div key={newsItem.id} className="border-b border-gray-200 pb-6 mb-6">
      <div className="flex flex-col sm:flex-row">
        <div className="w-full sm:w-1/3 relative mb-4 sm:mb-0">
          <Link href={`/news/${newsItem.slug}`} className="block relative">
            <div className="relative h-56 sm:h-52 md:h-48 w-full rounded-lg overflow-hidden">
              {newsItem.featured && renderFeaturedBadge()}
              {renderNewsImage(newsItem)}
            </div>
          </Link>
        </div>
        <div className="w-full sm:w-2/3 sm:pl-6">
          <div className="flex flex-wrap justify-between items-center mb-2">
            <div className="bg-blue-50 dark:bg-blue-900 text-blue-600 px-3 py-1 rounded-full text-xs mb-2 sm:mb-0">{newsItem.category}</div>
            <div className="flex items-center text-gray-500 text-xs">
              <Calendar className="h-3 w-3 mr-1"/>
              <span>{formatDate(newsItem.date)}</span>
            </div>
          </div>
          <Link href={`/news/${newsItem.slug}`}>
            <h2 className="text-xl font-bold text-blue-800 dark:text-white mb-2">{newsItem.title}</h2>
          </Link>
          <div className="flex items-center text-gray-500 text-xs mb-3">
            <Clock className="h-3 w-3 mr-1"/>
            <span>{newsItem.readTime}</span>
          </div>
          <p className="text-blue-800 dark:text-white mb-4" style={{ fontFamily: '"Kamber Medium", sans-serif' }}>{newsItem.summary}</p>
          <Link href={`/news/${newsItem.slug}`}>
            <div className="flex items-center text-orange-500 font-medium hover:text-orange-600 transition-colors">
              Читать далее <ArrowRight className="ml-1 h-4 w-4" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );

  const renderFeaturedSection = () => {
    if (featuredNews.length === 0) return null;
    
    return (
      <div className="mb-12">
        <h2 className="text-2xl sm:text-3xl font-light text-blue-800 dark:text-white mb-6">
        Избранные <span className="font-bold" style={{ fontFamily: '"Avenir Next Heavy", sans-serif' }}>Истории</span>
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {featuredNews.slice(0, 2).map((item) => (
            <Link href={`/news/${item.slug}`} key={item.id}>
              <div className="relative h-64 sm:h-80 rounded-lg overflow-hidden group">
                <div className="absolute inset-0">
                  {renderNewsImage(item)}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                <div className="absolute top-4 left-4">
                  <div className="bg-orange-500 text-white px-3 py-1 text-xs font-bold rounded-full">
                    Избранные
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 p-4 sm:p-6 w-full">
                  <div className="bg-blue-700 text-white inline-block px-3 py-1 rounded-full text-xs mb-2">{item.category}</div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-orange-300 transition-colors">{item.title}</h3>
                  <div className="flex items-center text-gray-300 text-xs">
                    <Calendar className="h-3 w-3 mr-1"/>
                    <span>{formatDate(item.date)}</span>
                    <span className="mx-2">•</span>
                    <Clock className="h-3 w-3 mr-1"/>
                    <span>{item.readTime}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
  };

  const renderMobileSortAndView = () => (
    <div className="md:hidden mb-6">
      <div className="flex justify-between items-center">
        <div 
          className="flex items-center cursor-pointer bg-blue-50 dark:bg-blue-900 px-3 py-2 rounded-lg"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <span className="text-blue-800 dark:text-white text-sm mr-1">Сортировать по:</span>
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
        <div className="absolute mt-1 bg-white dark:bg-gray-800 border border-gray-200 shadow-lg z-10 w-full left-0 px-4">
          {(['newest', 'oldest', 'a-z', 'z-a'] as SortOption[]).map(option => (
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
    <div className="min-h-screen bg-white dark:bg-gray-900 ">
      <Head>
        <title>Новости & Обновления</title>
        <meta name="description" content="Будьте в курсе последних новостей, инноваций и обновлений" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto max-w-7xl px-4 sm:px-6">
        <div className="py-4">
          <div className="text-xs text-blue-800 dark:text-white font-light mt-4">Новости & Обновления</div>
        </div>

        <div className="flex flex-col md:flex-row md:justify-between md:items-center my-2 md:my-6">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-light text-orange-500 mb-4 md:mb-0">
            Новости & <span className="font-bold" style={{ fontFamily: '"Avenir Next Heavy", sans-serif' }}>Обновления</span>
          </h1>
        </div>

        {renderFeaturedSection()}

        <div className="md:hidden mb-4">
          <button 
            className="w-full bg-blue-50 dark:bg-blue-900 text-blue-800 dark:text-white py-3 rounded flex items-center justify-center font-bold"
            onClick={() => setIsMobileFilterOpen(true)}
          >
            <Filter className="mr-2 h-5 w-5" />
            Фильтры и сортировка
          </button>
        </div>

        <div className="flex flex-col md:flex-row md:space-x-6 pb-8">
          <div className="hidden md:block w-64 flex-shrink-0">
            {!isFilterOpen && (
              <button
                className="mb-4 bg-blue-50 dark:bg-blue-900 text-blue-800 dark:text-white py-2 px-4 rounded flex items-center font-bold"
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
              <div className="text-blue-800 dark:text-white font-bold text-lg sm:text-xl mb-2 md:mb-0" style={{ fontFamily: '"Avenir Next Heavy", sans-serif' }}>
                {sortedNews.length} Статьи
              </div>
              <div className="hidden md:flex items-center gap-6">
                <div className="flex items-center gap-2 relative">
                  <span className="text-blue-900 font-semibold" style={{ fontFamily: '"Avenir Next Heavy", sans-serif' }}>Сортировать по:</span>
                  <div className="flex items-center cursor-pointer" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                    <span className="text-blue-900">{getSortOptionText(sortBy)}</span>
                    {isDropdownOpen ? <ChevronUp className="text-orange-500 ml-1 h-4 w-4" /> : <ChevronDown className="text-orange-500 ml-1 h-4 w-4" />}
                  </div>
                  {isDropdownOpen && (
                    <div className="absolute top-full right-0 mt-1 bg-white dark:bg-gray-800 border border-gray-200 shadow-lg z-10 w-40">
                      {(['newest', 'oldest', 'a-z', 'z-a'] as SortOption[]).map(option => (
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

            {sortedNews.length === 0 ? (
              <div className="text-center py-10 sm:py-16 bg-gray-50 dark:bg-gray-800 rounded">
                <div className="text-4xl sm:text-5xl text-gray-300 dark:text-white mb-4">¯\_(ツ)_/¯</div>
                <p className="text-lg sm:text-xl text-blue-800 dark:text-white mb-2">Нет новостей, соответствующих вашим фильтрам</p>
                <button 
                  onClick={clearAllFilters}
                  className="mt-4 px-6 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition-colors"
                >
                  Очистить все фильтры
                </button>
              </div>
            ) : (
              <div className={viewMode === 'grid' ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6' : 'flex flex-col'}>
                {sortedNews.map(item => (
                  viewMode === 'grid' ? renderGridItem(item) : renderListItem(item)
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
const NewsPage: React.FC = () => {
  return (
    <Suspense fallback={<NewsLoading />}>
      <NewsPageContent />
    </Suspense>
  );
};

export default NewsPage;