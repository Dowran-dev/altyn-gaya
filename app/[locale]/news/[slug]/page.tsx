'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Calendar, Clock, ArrowLeft, Share2, 
  Facebook, Twitter, Linkedin, Mail, ChevronRight,
  Eye, MessageCircle, Copy, 
  ArrowUpRight, ChevronDown, AlertTriangle
} from 'lucide-react';

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

const NewsletterForm = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [subscriptionStatus, setSubscriptionStatus] = useState<null | 'success' | 'error'>(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) return;
    
    setIsSubmitting(true);
    setSubscriptionStatus(null);
    
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong');
      }
      
      setSubscriptionStatus('success');
      setEmail('');
    } catch (error) {
      console.error('Error subscribing:', error);
      setSubscriptionStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Failed to subscribe');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-6 sm:p-8 shadow-xl overflow-hidden relative">
      <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-blue-500 opacity-20"></div>
      <div className="absolute -left-10 -bottom-10 w-40 h-40 rounded-full bg-orange-500 opacity-20"></div>
      
      <div className="relative">
        <h2 className="text-2xl font-bold text-white mb-3">Оставайтесь в курсе событий</h2>
        <p className="text-blue-100 mb-6">Получайте последние новости и обновления прямо на свою электронную почту.</p>
        
        <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
          <input 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address" 
            className="flex-grow px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-opacity-50"
            required
          />
          <button 
            type="submit" 
            className={`px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-lg transition-colors shadow-lg hover:shadow-xl ${
              isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
            }`}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Подписка...' : 'Подписаться'}
          </button>
        </form>
        
        {subscriptionStatus === 'success' && (
          <p className="text-white bg-green-500/20 px-4 py-2 rounded-lg mt-4">
            Спасибо за подписку на нашу рассылку!
          </p>
        )}

        {subscriptionStatus === 'error' && (
          <p className="text-white bg-red-500/20 px-4 py-2 rounded-lg mt-4">
            {errorMessage || 'Failed to subscribe. Please try again.'}
          </p>
        )}
        
        <p className="text-blue-200 text-sm mt-4">
          Подписываясь, вы соглашаетесь с нашей <Link href="/privacy" className="text-white underline">Политикой конфиденциальности</Link> и даете согласие на получение обновлений от нашей компании.
        </p>
      </div>
    </div>
  );
};

// Расширенная анимация загрузки
const NewsDetailLoading = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-white">
    <div className="flex flex-col items-center">
      <div className="relative w-16 h-16 mb-4">
        <div className="absolute top-0 left-0 w-full h-full border-4 border-blue-200 rounded-full animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full border-4 border-transparent border-t-orange-500 rounded-full animate-spin"></div>
      </div>
      <div className="text-blue-800 font-bold text-xl">Загрузка статьи...</div>
    </div>
  </div>
);

// Вспомогательная функция для форматирования даты
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

// Элемент связанных новостей с анимацией
const RelatedNewsItem = ({ item, index }: { item: News, index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link href={`/news/${item.slug}`}>
      <div 
        className="flex flex-col h-full overflow-hidden bg-white rounded-xl shadow-lg transition-all duration-500 transform hover:-translate-y-2"
        style={{ animationDelay: `${index * 0.1}s` }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative h-56 w-full overflow-hidden">
          <div className={`relative w-full h-full transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`}>
            <Image 
              src={item.imageSrc} 
              alt={item.title} 
              layout="fill" 
              objectFit="cover" 
              className="transition-opacity duration-500"
            />
            <div className={`absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent transition-opacity duration-300 ${isHovered ? 'opacity-70' : 'opacity-50'}`}></div>
          </div>
          <div className="absolute top-4 left-4 z-10">
            <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold backdrop-blur-sm bg-opacity-80">
              {item.category}
            </div>
          </div>
          <div className={`absolute inset-0 flex items-center justify-center opacity-0 ${isHovered ? 'opacity-100' : ''} transition-opacity duration-300`}>
            <div className="bg-orange-500 text-white p-3 rounded-full transform transition-transform duration-300">
              <ArrowUpRight className="h-6 w-6" />
            </div>
          </div>
        </div>
        <div className="p-5 flex flex-col flex-grow bg-gradient-to-br from-white to-blue-50">
          <h3 className="text-lg font-bold text-blue-800 mb-3 line-clamp-2 group-hover:text-orange-500 transition-colors">
            {item.title}
          </h3>
          <p className="text-blue-700 text-sm line-clamp-2 mb-4">{item.summary}</p>
          <div className="flex items-center text-gray-500 text-xs mt-auto">
            <Calendar className="h-3 w-3 mr-1"/>
            <span>{formatDate(item.date)}</span>
            <span className="mx-2">•</span>
            <Clock className="h-3 w-3 mr-1"/>
            <span>{item.readTime}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default function NewsDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [newsItem, setNewsItem] = useState<News | null>(null);
  const [relatedNews, setRelatedNews] = useState<News[]>([]);
  const [loading, setLoading] = useState(true);
  const [imageError, setImageError] = useState(false);
  const [shareMenuOpen, setShareMenuOpen] = useState(false);
  // const [isBookmarked, setIsBookmarked] = useState(false);
  // const [isLiked, setIsLiked] = useState(false);
  // const [likeCount, setLikeCount] = useState(Math.floor(Math.random() * 50) + 10);
  const [viewCount, _setViewCount] = useState(Math.floor(Math.random() * 1000) + 100);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showTableOfContents, setShowTableOfContents] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [headings, setHeadings] = useState<{id: string, text: string}[]>([]);
  const [activeHeading, setActiveHeading] = useState("");
  const [copySuccess, setCopySuccess] = useState(false);
  const slug = params.slug as string;

  // Обработка прокрутки и расчет прогресса чтения
  useEffect(() => {
    const handleScroll = () => {
      if (!contentRef.current) return;
      
      const scrollTop = window.scrollY;
      const docHeight = document.body.offsetHeight;
      const winHeight = window.innerHeight;
      const scrollPercent = scrollTop / (docHeight - winHeight);
      setScrollProgress(scrollPercent * 100);
      
      // Обновление активного заголовка на основе позиции прокрутки
      if (headings.length > 0) {
        for (let i = headings.length - 1; i >= 0; i--) {
          const element = document.getElementById(headings[i].id);
          if (element && element.offsetTop <= scrollTop + 100) {
            setActiveHeading(headings[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [headings]);

  // Извлечение заголовков из содержимого для оглавления
  useEffect(() => {
    if (contentRef.current && newsItem) {
      const headingElements = contentRef.current.querySelectorAll('h2');
      const extractedHeadings = Array.from(headingElements).map((el, index) => {
        const id = `heading-${index}`;
        el.id = id;
        return { id, text: el.textContent || '' };
      });
      setHeadings(extractedHeadings);
      
      // Если есть заголовки, установить первый как активный по умолчанию
      if (extractedHeadings.length > 0) {
        setActiveHeading(extractedHeadings[0].id);
      }
    }
  }, [newsItem, loading]);

  useEffect(() => {
    const fetchNewsItem = async () => {
      try {
        const res = await fetch('/api/news');
        if (!res.ok) throw new Error(`Ошибка API запроса со статусом: ${res.status}`);
        const allNews: News[] = await res.json();
        
        // Найти текущую новость на основе параметра slug
        const currentNewsItem = allNews.find(item => item.slug === slug);
        
        if (!currentNewsItem) {
          // Обработка случая, когда новость не найдена
          router.push('/news');
          return;
        }
        
        setNewsItem(currentNewsItem);
        
        // Получить связанные новости
        if (currentNewsItem.relatedItems && currentNewsItem.relatedItems.length > 0) {
          const related = allNews.filter(item => 
            currentNewsItem.relatedItems.includes(item.id) && item.id !== currentNewsItem.id
          );
          setRelatedNews(related);
        }
        
        // Имитация загрузки для лучшего пользовательского опыта
        setTimeout(() => {
          setLoading(false);
        }, 800);
      } catch (err) {
        console.error('Ошибка при загрузке новости:', err);
        setLoading(false);
      }
    };

    if (slug) {
      fetchNewsItem();
    }
  }, [slug, router]);

  const handleImageError = () => {
    setImageError(true);
  };

  const renderNewsImage = () => {
    if (!newsItem) return null;
    
    return imageError ? (
      <div className="relative w-full h-full bg-blue-900 flex items-center justify-center overflow-hidden">
        <div className="w-3/4 h-3/4 relative opacity-30">
          <Image src="/images/logo/default.png" alt="По умолчанию" layout="fill" objectFit="contain" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-0 w-full text-center p-4 text-sm text-gray-300">Изображение недоступно</div>
      </div>
    ) : (
      <div className="relative w-full h-full">
        <Image 
          src={newsItem.imageSrc} 
          alt={newsItem.title} 
          layout="fill" 
          objectFit="cover" 
          className="object-center"
          onError={handleImageError} 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-900/30 to-transparent"></div>
      </div>
    );
  };

  const handleShare = (platform: string) => {
    let shareUrl = '';
    const url = typeof window !== 'undefined' ? window.location.href : '';
    const title = newsItem?.title || 'Посмотрите эту статью';

    switch (platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
        break;
      case 'email':
        shareUrl = `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(`Посмотрите эту статью: ${url}`)}`;
        break;
      case 'copy':
        navigator.clipboard.writeText(url);
        setCopySuccess(true);
        setTimeout(() => setCopySuccess(false), 2000);
        break;
      default:
        break;
    }

    if (shareUrl) {
      window.open(shareUrl, '_blank');
    }
    
    if (platform !== 'copy') {
      setShareMenuOpen(false);
    }
  };

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  if (loading) return <NewsDetailLoading />;
  if (!newsItem) return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-50">
      <AlertTriangle className="h-16 w-16 text-orange-500 mb-4" />
      <h2 className="text-2xl font-bold text-blue-800 mb-2">Статья не найдена</h2>
      <p className="text-blue-600 mb-6">Статья, которую вы ищете, не существует или была удалена.</p>
      <Link href="/news" className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors shadow-lg">
        Вернуться к новостям
      </Link>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-black text-gray-800 dark:text-gray-100">
      <Head>
        <title>{newsItem.title}</title>
        <meta name="description" content={newsItem.summary} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="fixed top-0 left-0 w-full h-1 z-50 bg-gray-200 dark:bg-gray-700">
        <div 
          className="h-full bg-orange-500 transition-all duration-200 ease-out"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>

      <div className="relative h-screen max-h-[600px] overflow-hidden">
        <div className="absolute inset-0 bg-blue-900 dark:bg-gray-800">
          {renderNewsImage()}
        </div>

        <div className="container mx-auto px-4 sm:px-6 h-full flex flex-col justify-end pb-16 relative z-10">
          <div className="animate-fadeIn">
            <Link href="/news" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors group">
              <div className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center mr-2 group-hover:bg-white/20 transition-colors">
                <ArrowLeft className="h-4 w-4" />
              </div>
              Назад к новостям
            </Link>
            
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <div className="bg-blue-700 text-white px-4 py-1 rounded-full text-sm font-medium backdrop-blur-sm bg-opacity-70">
                {newsItem.category}
              </div>
              {newsItem.featured && (
                <div className="bg-orange-500 text-white px-4 py-1 text-sm font-bold rounded-full backdrop-blur-sm bg-opacity-80">
                  Рекомендуемое
                </div>
              )}
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-7 leading-tight">
              {newsItem.title}
            </h1>
            
            <div className="flex flex-wrap items-center text-white/80 text-sm gap-6 mb-6">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2"/>
                <span>{formatDate(newsItem.date)}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2"/>
                <span>{newsItem.readTime} чтения</span>
              </div>
              <div className="flex items-center">
                <Eye className="h-4 w-4 mr-2"/>
                <span>{viewCount} просмотров</span>
              </div>
            </div>
            
            <p className="text-xl text-white/90 font-medium max-w-3xl">{newsItem.summary}</p>
          </div>
        </div>
        
        {/* Плавающие кнопки действий */}
        <div className="hidden md:flex fixed right-6 top-1/3 flex-col gap-3 z-20">
          
          <button 
            onClick={() => setShareMenuOpen(!shareMenuOpen)}
            className="group p-3 rounded-full shadow-lg backdrop-blur-md bg-white/90 text-blue-800 hover:bg-orange-500 hover:text-white transition-all duration-300 relative"
          >
            <Share2 className="h-5 w-5" />
            <span className="absolute right-full mr-2 bg-white/90 text-blue-800 rounded-md px-2 py-1 text-sm opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap shadow-md">
              Поделиться статьей
            </span>
            
            {shareMenuOpen && (
              <div className="absolute top-0 right-full mr-3 bg-white border border-gray-200 shadow-xl rounded-xl z-10 p-2 min-w-[180px]">
                <button 
                  className="flex items-center gap-2 w-full px-4 py-2 text-left hover:bg-blue-50 rounded-lg transition-colors"
                  onClick={() => handleShare('facebook')}
                >
                  <Facebook className="h-4 w-4 text-blue-600" />
                  <span>Facebook</span>
                </button>
                <button 
                  className="flex items-center gap-2 w-full px-4 py-2 text-left hover:bg-blue-50 rounded-lg transition-colors"
                  onClick={() => handleShare('twitter')}
                >
                  <Twitter className="h-4 w-4 text-blue-400" />
                  <span>Twitter</span>
                </button>
                <button 
                  className="flex items-center gap-2 w-full px-4 py-2 text-left hover:bg-blue-50 rounded-lg transition-colors"
                  onClick={() => handleShare('linkedin')}
                >
                  <Linkedin className="h-4 w-4 text-blue-700" />
                  <span>LinkedIn</span>
                </button>
                <button 
                  className="flex items-center gap-2 w-full px-4 py-2 text-left hover:bg-blue-50 rounded-lg transition-colors"
                  onClick={() => handleShare('email')}
                >
                  <Mail className="h-4 w-4 text-gray-600" />
                  <span>Email</span>
                </button>
                <div className="h-px bg-gray-200 my-2"></div>
                <button 
                  className="flex items-center gap-2 w-full px-4 py-2 text-left hover:bg-blue-50 rounded-lg transition-colors"
                  onClick={() => handleShare('copy')}
                >
                  <Copy className="h-4 w-4 text-gray-600" />
                  <span>{copySuccess ? 'Скопировано!' : 'Копировать ссылку'}</span>
                </button>
              </div>
            )}
          </button>
          
          {headings.length > 0 && (
            <button 
              onClick={() => setShowTableOfContents(!showTableOfContents)}
              className="group p-3 rounded-full shadow-lg backdrop-blur-md bg-white/90 text-blue-800 hover:bg-blue-600 hover:text-white transition-all duration-300"
            >
              <MessageCircle className="h-5 w-5" />
              <span className="absolute right-full mr-2 bg-white/90 text-blue-800 rounded-md px-2 py-1 text-sm opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap shadow-md">
                Содержание
              </span>
              
              {showTableOfContents && (
                <div className="absolute top-0 right-full mr-3 bg-white border border-gray-200 shadow-xl rounded-xl z-10 p-4 min-w-[250px] max-w-[320px]">
                  <h3 className="font-bold text-blue-800 mb-3 border-b pb-2">В этой статье</h3>
                  <ul className="space-y-2">
                    {headings.map((heading) => (
                      <li key={heading.id}>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            scrollToHeading(heading.id);
                          }}
                          className={`text-left w-full px-2 py-1 rounded text-sm transition-colors ${
                            activeHeading === heading.id 
                              ? 'bg-blue-100 text-blue-800 font-medium' 
                              : 'text-blue-600 hover:bg-blue-50'
                          }`}
                        >
                          {heading.text}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </button>
          )}
        </div>
      </div>

      {/* Мобильная панель действий */}
      <div className="md:hidden flex items-center justify-between bg-white dark:bg-gray-900 sticky top-0 z-30 px-4 py-3 border-b border-gray-200 dark:border-gray-700 shadow-sm">
        <div className="flex gap-2">
          {/* <button 
            onClick={() => {setIsLiked(!isLiked); setLikeCount(isLiked ? likeCount - 1 : likeCount + 1)}}
            className={`flex items-center gap-1 px-3 py-1 rounded-full text-sm ${
              isLiked ? 'bg-red-100 text-red-500' : 'bg-gray-100 text-gray-600'
            }`}
          >
            <Heart className="h-4 w-4" fill={isLiked ? "#ef4444" : "none"} />
            <span>{likeCount}</span>
          </button> */}
          
          {/* <button 
            onClick={() => setIsBookmarked(!isBookmarked)}
            className={`flex items-center gap-1 px-3 py-1 rounded-full text-sm ${
              isBookmarked ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'
            }`}
          >
            {isBookmarked ? <BookmarkPlus className="h-4 w-4" /> : <Bookmark className="h-4 w-4" />}
          </button> */}
        </div>
        
        <div className="flex gap-2">
          <button 
            onClick={() => setShareMenuOpen(!shareMenuOpen)}
            className="flex items-center gap-1 px-3 py-1 rounded-full text-sm bg-orange-100 text-orange-500 relative"
          >
            <Share2 className="h-4 w-4" />
            <span>Поделиться</span>
            
            {shareMenuOpen && (
              <div className="absolute top-full right-0 mt-1 bg-white border border-gray-200 shadow-lg rounded-lg z-10 p-2 w-40">
                <button 
                  className="flex items-center gap-2 w-full px-3 py-2 text-left hover:bg-gray-100 rounded text-sm"
                  onClick={() => handleShare('facebook')}
                >
                  <Facebook className="h-4 w-4 text-blue-600" />
                  <span>Facebook</span>
                </button>
                <button 
                  className="flex items-center gap-2 w-full px-3 py-2 text-left hover:bg-gray-100 rounded text-sm"
                  onClick={() => handleShare('twitter')}
                >
                  <Twitter className="h-4 w-4 text-blue-400" />
                  <span>Twitter</span>
                </button>
                <button 
                  className="flex items-center gap-2 w-full px-3 py-2 text-left hover:bg-gray-100 rounded text-sm"
                  onClick={() => handleShare('copy')}
                >
                  <Copy className="h-4 w-4 text-gray-600" />
                  <span>{copySuccess ? 'Скопировано!' : 'Копировать ссылку'}</span>
                </button>
              </div>
            )}
          </button>
          
          {headings.length > 0 && (
            <button 
              onClick={() => setShowTableOfContents(!showTableOfContents)}
              className="flex items-center gap-1 px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-600"
            >
              <MessageCircle className="h-4 w-4" />
              <ChevronDown className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>
      
      {/* Мобильное содержание */}
      {showTableOfContents && (
        <div className="md:hidden bg-blue-50 dark:bg-gray-800 border-b border-blue-100 dark:border-gray-700">
          <div className="container mx-auto px-4 py-3">
            <h3 className="font-bold text-blue-800 mb-2">В этой статье</h3>
            <ul className="space-y-2 pb-1">
              {headings.map((heading) => (
                <li key={heading.id}>
                  <button
                    onClick={() => {
                      scrollToHeading(heading.id);
                      setShowTableOfContents(false);
                    }}
                    className={`text-left w-full px-2 py-1 rounded text-sm transition-colors ${
                      activeHeading === heading.id 
                        ? 'bg-blue-200 text-blue-800 font-medium' 
                        : 'text-blue-600 hover:bg-blue-100'
                    }`}
                  >
                    {heading.text}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Основное содержимое */}
      <main className="container mx-auto max-w-4xl px-4 sm:px-6 py-8 relative">
        <article className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 sm:p-8 lg:p-10 mb-12">
          <div 
            ref={contentRef}
            className="prose prose-blue lg:prose-lg max-w-none prose-headings:text-blue-800 dark:prose-headings:text-blue-100 prose-headings:font-bold prose-p:text-blue-800/80 dark:prose-p:text-blue-300 prose-a:text-orange-500 prose-a:font-medium prose-img:rounded-lg prose-img:shadow-md prose-li:text-blue-800/80 dark:prose-li:text-blue-300"
          >
            <div dangerouslySetInnerHTML={{ __html: newsItem.content }} />
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <div className="flex flex-wrap justify-between items-center gap-4">
              <div className="flex items-center gap-4">
                {/* <button 
                  onClick={() => {setIsLiked(!isLiked); setLikeCount(isLiked ? likeCount - 1 : likeCount + 1)}}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full transition-colors ${
                    isLiked 
                      ? 'bg-red-500 text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-red-100 hover:text-red-500'
                  }`}
                >
                  <Heart className="h-5 w-5" fill={isLiked ? "white" : "none"} />
                  <span>{likeCount} лайков</span>
                </button> */}
                
                <div className="flex items-center text-gray-500">
                  <Eye className="h-5 w-5 mr-1" />
                  <span>{viewCount} просмотров</span>
                </div>
              </div>
              
              <div className="flex gap-3">
                {/* <button 
                  onClick={() => setIsBookmarked(!isBookmarked)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full transition-colors ${
                    isBookmarked 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-blue-100 hover:text-blue-600'
                  }`}
                >
                  {isBookmarked ? <BookmarkPlus className="h-5 w-5" /> : <Bookmark className="h-5 w-5" />}
                  <span>{isBookmarked ? 'Сохранено' : 'Сохранить статью'}</span>
                </button> */}
                
                <button 
                  onClick={() => setShareMenuOpen(!shareMenuOpen)}
                  className="relative flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-orange-500 hover:bg-orange-500 hover:text-white transition-colors"
                >
                  <Share2 className="h-5 w-5" />
                  <span>Поделиться</span>
                </button>
              </div>
            </div>
          </div>
        </article>
        
        {/* Related articles section */}
        {relatedNews.length > 0 && (
          <div className="mb-16">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-blue-800 dark:text-blue-100">Связанные статьи</h2>
              <Link href="/news-page" className="flex items-center text-orange-500 font-medium hover:text-orange-600 transition-colors">
                Все новости
                <ChevronRight className="h-5 w-5 ml-1" />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedNews.slice(0, 3).map((item, index) => (
                <RelatedNewsItem key={item.id} item={item} index={index} />
              ))}
            </div>
          </div>
        )}
        
        {/* Newsletter signup */}
        {/* <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-6 sm:p-8 shadow-xl overflow-hidden relative">
          <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-blue-500 opacity-20"></div>
          <div className="absolute -left-10 -bottom-10 w-40 h-40 rounded-full bg-orange-500 opacity-20"></div>
          
          <div className="relative">
            <h2 className="text-2xl font-bold text-white mb-3">Оставайтесь в курсе событий</h2>
            <p className="text-blue-100 mb-6">Получайте последние новости и обновления непосредственно в вашу почту.</p>
            
            <form className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                placeholder="Ваш email" 
                className="flex-grow px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300 focus:ring-opacity-50"
              />
              <button 
                type="submit" 
                className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-lg transition-colors shadow-lg hover:shadow-xl"
              >
                Подписаться
              </button>
            </form>
            
            <p className="text-blue-200 text-sm mt-4">
              Подписываясь, вы соглашаетесь с <Link href="/privacy" className="text-white underline">политикой конфиденциальности</Link> и принимаете, что получаете обновления от нашей компании.
            </p>
          </div>
        </div> */}

        <NewsletterForm />
      </main>
    </div>
  );
}

