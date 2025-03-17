import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Calendar, ArrowRight, ArrowLeft, Share2, Bookmark, Heart } from 'lucide-react';
import ClientFeatures from './ClientFeatures';

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

export default async function NewsItemPage({ params }: { params: { slug: string } }) {
 const { slug } = params;

 // Fetch data from the API on the server
 const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/news`, {
 cache: 'no-store', // Ensure fresh data on each request
 });
 const news: News[] = await response.json();

 // Find the news item by slug
 const newsItem = news.find((item) => item.slug === slug);
 if (!newsItem) {
 notFound(); // Trigger Next.js 404 page if no matching news item
 }

 // Filter related news items
 const relatedNews = news.filter((item) => newsItem.relatedItems.includes(item.id));

 return (
 <ClientFeatures>
 <main className="container mx-auto max-w-4xl px-4 py-8">
 {/* Back Navigation */}
 <Link href="/whats-new" className="flex items-center text-gray-600 hover:text-blue-800 mb-6">
 <ArrowLeft className="h-4 w-4 mr-1" />
 <span>Back to News</span>
 </Link>

 {/* Article Header */}
 <div className="mb-8">
 <div className="flex items-center mb-3">
 <span className="text-sm font-medium px-3 py-1 rounded-full bg-orange-100 text-orange-500">
 {newsItem.category}
 </span>
 <span className="text-sm ml-3 flex items-center text-gray-500">
 <Calendar className="h-4 w-4 mr-1" />
 {newsItem.date}
 </span>
 <span className="text-sm ml-3 flex items-center text-gray-500">
 <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
 </svg>
 {newsItem.readTime}
 </span>
 </div>
 <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4 text-blue-900">
 {newsItem.title}
 </h1>
 <p className="text-lg text-gray-600">
 {newsItem.summary}
 </p>
 </div>

 {/* Featured Image */}
 <div className="relative rounded-xl overflow-hidden mb-8 aspect-video">
 <Image
 src={newsItem.imageSrc}
 alt={newsItem.title}
 layout="fill"
 objectFit="cover"
 className="transition-transform duration-500 hover:scale-105"
 />
 </div>

 {/* Social Share */}
 <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-200">
 <div className="flex items-center">
 <button className="mr-3 flex items-center text-gray-600 hover:text-blue-800">
 <Share2 className="h-5 w-5 mr-1" />
 <span className="hidden md:inline">Share</span>
 </button>
 <button className="mr-3 flex items-center text-gray-600 hover:text-blue-800">
 <Bookmark className="h-5 w-5 mr-1" />
 <span className="hidden md:inline">Save</span>
 </button>
 <button className="flex items-center text-gray-600 hover:text-blue-800">
 <Heart className="h-5 w-5 mr-1" />
 <span className="hidden md:inline">Like</span>
 </button>
 </div>
 <div className="flex space-x-2">
 {['facebook', 'twitter', 'linkedin', 'email'].map((platform) => (
 <button
 key={platform}
 className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-100 text-blue-800 hover:bg-gray-200"
 >
 {platform === 'facebook' && (
 <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
 <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
 </svg>
 )}
 {platform === 'twitter' && (
 <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
 <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
 </svg>
 )}
 {platform === 'linkedin' && (
 <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
 <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
 </svg>
 )}
 {platform === 'email' && (
 <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
 </svg>
 )}
 </button>
 ))}
 </div>
 </div>

 {/* Article Content */}
 <article className="prose prose-blue max-w-none mb-12">
 <div dangerouslySetInnerHTML={{ __html: newsItem.content }} />
 </article>

 {/* Tags */}
 <div className="mb-12">
 <h3 className="text-lg font-medium mb-3 text-gray-700">Related Topics</h3>
 <div className="flex flex-wrap gap-2">
 {['Tide', 'Laundry', 'Sustainability', 'Stain Removal', 'Innovation', newsItem.category].map((tag) => (
 <span
 key={tag}
 className="px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-700 hover:bg-gray-200 cursor-pointer transition-colors"
 >
 {tag}
 </span>
 ))}
 </div>
 </div>

 {/* Related Articles */}
 {relatedNews.length > 0 && (
 <div className="mb-12">
 <h3 className="text-xl font-bold mb-6 text-blue-900">Related Articles</h3>
 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
 {relatedNews.map((item) => (
 <Link href={`/news/${item.slug}`} key={item.id}>
 <div className="group cursor-pointer h-full flex flex-col rounded-xl overflow-hidden shadow-sm bg-white hover:shadow-md transition-all">
 <div className="relative w-full aspect-video">
 <Image
 src={item.imageSrc}
 alt={item.title}
 layout="fill"
 objectFit="cover"
 className="transition-transform duration-500 group-hover:scale-105"
 />
 </div>
 <div className="p-4 flex-grow flex flex-col">
 <span className="text-xs font-medium mb-2 text-gray-500">{item.category}</span>
 <h4 className="font-bold mb-2 group-hover:text-orange-500 transition-colors text-blue-900">{item.title}</h4>
 <p className="text-sm line-clamp-2 mb-4 text-gray-600">{item.summary}</p>
 <div className="mt-auto flex items-center">
 <span className="text-xs text-gray-500">{item.date}</span>
 <span className="text-xs ml-auto flex items-center text-orange-500">
 Read more
 <ArrowRight className="h-3 w-3 ml-1" />
 </span>
 </div>
 </div>
 </div>
 </Link>
 ))}
 </div>
 </div>
 )}

 {/* Newsletter Signup */}
 <div className="rounded-2xl overflow-hidden bg-orange-50 p-8 mb-12">
 <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
 <div>
 <h3 className="text-2xl font-bold mb-3 text-blue-900">Stay up to date with Tide news</h3>
 <p className="mb-4 text-gray-700">Get the latest product updates, washing tips, and sustainability initiatives delivered to your inbox.</p>
 <div className="flex">
 <input
 type="email"
 placeholder="Your email address"
 className="flex-grow px-4 py-3 rounded-l-lg outline-none bg-white border-gray-200 border"
 />
 <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-6 py-3 rounded-r-lg transition-colors">
 Subscribe
 </button>
 </div>
 <p className="text-xs mt-2 text-gray-500">By subscribing, you agree to our Privacy Policy and consent to receive updates from Tide.</p>
 </div>
 <div className="hidden md:block">
 <div className="relative h-40">
 <Image src="/api/placeholder/500/300" alt="Newsletter illustration" layout="fill" objectFit="contain" />
 </div>
 </div>
 </div>
 </div>
 </main>
 </ClientFeatures>
 );
}