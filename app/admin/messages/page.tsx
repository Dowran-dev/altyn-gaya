'use client';

import { useEffect, useState, useRef } from 'react';
import { 
  Trash2, CheckCircle, MessageCircle, Search, 
  Filter, ChevronDown, X, Clock, Calendar,
  Menu, Bell, User, Mail, Phone
} from 'lucide-react';

interface ContactMessage {
  id: number;
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
  replied: boolean;
  createdAt: string;
}

export default function AdminMessagesPage() {
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [filteredMessages, setFilteredMessages] = useState<ContactMessage[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState<'all' | 'replied' | 'unreplied'>('all');
  const [sortBy, setSortBy] = useState<'newest' | 'oldest'>('newest');
const statuses: Array<'all' | 'replied' | 'unreplied'> = ['all', 'replied', 'unreplied'];
const sortOptions: Array<'newest' | 'oldest'> = ['newest', 'oldest'];
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMessageId, setActiveMessageId] = useState<number | null>(null);
  const [messageView, setMessageView] = useState<'list' | 'grid'>('list');
  const filterRef = useRef<HTMLDivElement>(null);

  // Handle click outside to close filter dropdown
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (filterRef.current && !filterRef.current.contains(event.target as Node)) {
        setFilterOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Fetch messages
  useEffect(() => {
    fetch('/api/admin/messages')
      .then(res => res.json())
      .then(data => {
        setMessages(data);
        setFilteredMessages(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to load messages:', err);
        setLoading(false);
      });
  }, []);

  // Filter messages whenever filter criteria change
  useEffect(() => {
    let result = [...messages];
    
    // Apply search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(msg => 
        msg.name.toLowerCase().includes(term) || 
        msg.email.toLowerCase().includes(term) || 
        msg.subject?.toLowerCase().includes(term) || 
        msg.message.toLowerCase().includes(term)
      );
    }
    
    // Apply status filter
    if (selectedStatus !== 'all') {
      result = result.filter(msg => 
        (selectedStatus === 'replied' && msg.replied) || 
        (selectedStatus === 'unreplied' && !msg.replied)
      );
    }
    
    // Apply sorting
    result = result.sort((a, b) => {
      const dateA = new Date(a.createdAt).getTime();
      const dateB = new Date(b.createdAt).getTime();
      return sortBy === 'newest' ? dateB - dateA : dateA - dateB;
    });
    
    setFilteredMessages(result);
  }, [messages, searchTerm, selectedStatus, sortBy]);
  
  // Format date nicely
  const formatMessageDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffHrs = diffMs / (1000 * 60 * 60);
    
    if (diffHrs < 24) {
      // Today - show time
      return `Сегодня, ${date.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' })}`;
    } else if (diffHrs < 48) {
      // Yesterday - show "Yesterday"
      return `Вчера, ${date.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' })}`;
    } else {
      // Older - show date
      return date.toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' });
    }
  };

  // Mark message as replied
  const toggleRepliedStatus = async (id: number) => {
    const message = messages.find(m => m.id === id);
    if (!message) return;
    
    try {
      const res = await fetch(`/api/admin/messages/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ replied: !message.replied }),
      });

      if (res.ok) {
        const updated = await res.json();
        setMessages(prev =>
          prev.map(m => (m.id === updated.id ? { ...m, replied: updated.replied } : m))
        );
        // Show success notification (would be implemented with a toast system)
      }
    } catch (err) {
      console.error('Failed to update message status:', err);
      // Show error notification
    }
  };

  // Delete message
  const deleteMessage = async (id: number) => {
    if (confirm('Вы уверены, что хотите удалить это сообщение?')) {
      try {
        await fetch(`/api/admin/messages/${id}`, { method: 'DELETE' });
        setMessages(prev => prev.filter(m => m.id !== id));
        setActiveMessageId(null);
        // Show success notification
      } catch (err) {
        console.error('Failed to delete message:', err);
        // Show error notification
      }
    }
  };

  // Mobile and tablet view for detailed message
  const MessageDetailView = ({ message }: { message: ContactMessage }) => (
    <div className="fixed inset-0 bg-white z-50 overflow-auto">
      <div className="sticky top-0 bg-white border-b border-gray-100 shadow-sm px-4 py-3 flex items-center justify-between">
        <button 
          onClick={() => setActiveMessageId(null)}
          className="text-gray-600 hover:text-gray-900 transition-colors"
        >
          <X className="h-5 w-5" />
        </button>
        <h2 className="text-lg font-medium text-gray-800">Детали сообщения</h2>
        <div className="flex gap-2">
          <button
            onClick={() => toggleRepliedStatus(message.id)}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors"
          >
            <CheckCircle className="h-5 w-5" />
          </button>
          <button
            onClick={() => deleteMessage(message.id)}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors"
          >
            <Trash2 className="h-5 w-5" />
          </button>
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-gray-100 h-12 w-12 rounded-full flex items-center justify-center text-gray-700 font-medium">
            {message.name.charAt(0).toUpperCase()}
          </div>
          <div>
            <div className="font-medium text-gray-900">{message.name}</div>
            <div className="text-sm text-gray-500">{message.email}</div>
          </div>
        </div>
        
        <div className="mb-4">
          <div className="text-xs uppercase text-gray-500 font-medium mb-1">Дата</div>
          <div className="flex items-center gap-2 text-gray-700">
            <Calendar className="h-4 w-4" />
            <span>{formatMessageDate(message.createdAt)}</span>
          </div>
        </div>
        
        {message.phone && (
          <div className="mb-4">
            <div className="text-xs uppercase text-gray-500 font-medium mb-1">Телефон</div>
            <div className="flex items-center gap-2 text-gray-700">
              <Phone className="h-4 w-4" />
              <span>{message.phone}</span>
            </div>
          </div>
        )}
        
        {message.subject && (
          <div className="mb-4">
            <div className="text-xs uppercase text-gray-500 font-medium mb-1">Тема</div>
            <div className="text-gray-900 font-medium">{message.subject}</div>
          </div>
        )}
        
        <div className="mb-4">
          <div className="text-xs uppercase text-gray-500 font-medium mb-1">Сообщение</div>
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 text-gray-700 whitespace-pre-line">
            {message.message}
          </div>
        </div>
        
        <div className="mb-6">
          <div className="text-xs uppercase text-gray-500 font-medium mb-1">Статус</div>
          <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${message.replied ? 'bg-green-50 text-green-700' : 'bg-yellow-50 text-yellow-700'}`}>
            {message.replied ? 'Отвечено' : 'Ожидает ответа'}
          </div>
        </div>
        
        <div className="border-t border-gray-100 pt-6">
          <button
            onClick={() => toggleRepliedStatus(message.id)}
            className={`w-full flex items-center justify-center gap-2 px-4 py-3 mb-3 rounded-lg text-white font-medium transition-colors ${message.replied ? 'bg-gray-700 hover:bg-gray-800' : 'bg-gray-900 hover:bg-black'}`}
          >
            <CheckCircle className="h-5 w-5" />
            {message.replied ? 'Отметить как неотвеченное' : 'Отметить как отвеченное'}
          </button>
          
          <button
            onClick={() => deleteMessage(message.id)}
            className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition-colors"
          >
            <Trash2 className="h-5 w-5" />
            Удалить сообщение
          </button>
        </div>
      </div>
    </div>
  );

  // Loading state with skeleton
  if (loading) {
    return (
      <div className="p-4 md:p-6 max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <div className="h-8 bg-gray-200 rounded w-64 animate-pulse"></div>
          <div className="h-10 bg-gray-200 rounded w-32 animate-pulse"></div>
        </div>
        <div className="space-y-4">
          {[1, 2, 3].map(i => (
            <div key={i} className="bg-white rounded-lg shadow p-5 border border-gray-100">
              <div className="flex justify-between items-start mb-4">
                <div className="w-1/2">
                  <div className="h-6 bg-gray-200 rounded w-3/4 mb-3 animate-pulse"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2 animate-pulse"></div>
                </div>
                <div className="h-4 bg-gray-200 rounded w-24 animate-pulse"></div>
              </div>
              <div className="h-20 bg-gray-200 rounded w-full animate-pulse"></div>
              <div className="flex justify-end gap-3 mt-4">
                <div className="h-8 bg-gray-200 rounded w-32 animate-pulse"></div>
                <div className="h-8 bg-gray-200 rounded w-24 animate-pulse"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden" onClick={() => setMobileMenuOpen(false)}>
          <div className="absolute top-0 left-0 bottom-0 w-64 bg-white shadow-lg p-4" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-6 border-b pb-4">
              <div className="font-bold text-xl text-gray-800">Панель администратора</div>
              <button onClick={() => setMobileMenuOpen(false)}>
                <X className="h-5 w-5 text-gray-600" />
              </button>
            </div>
            <nav>
              <ul className="space-y-1">
                <li>
                  <a href="#" className="block px-3 py-2 rounded-lg bg-gray-100 text-gray-900 font-medium">
                    <MessageCircle className="h-5 w-5 inline-block mr-2" />
                    Сообщения
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors">
                    <User className="h-5 w-5 inline-block mr-2" />
                    Пользователи
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors">
                    <Mail className="h-5 w-5 inline-block mr-2" />
                    Рассылки
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}

      {/* Active message detail view for mobile and tablet */}
      {activeMessageId !== null && (
        <div className="lg:hidden">
          {MessageDetailView({message: messages.find(m => m.id === activeMessageId)!})}
        </div>
      )}
      
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <button onClick={() => setMobileMenuOpen(true)} className="lg:hidden text-gray-500 mr-4">
                <Menu className="h-6 w-6" />
              </button>
              <h1 className="text-xl font-bold text-gray-800">Входящие сообщения</h1>
            </div>
            <div className="flex items-center gap-2">
              <button className="p-2 rounded-full hover:bg-gray-100 text-gray-600 relative">
                <Bell className="h-5 w-5" />
                <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
              </button>
              <button className="flex items-center gap-2 p-1 hover:bg-gray-100 rounded-full">
                <div className="h-8 w-8 rounded-full bg-gray-800 text-white flex items-center justify-center text-sm font-medium">
                  А
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto p-4 sm:px-6 lg:px-8 py-6">
        {/* Filters and Search */}
        <div className="mb-6 flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
          <div className="relative rounded-lg shadow bg-white lg:flex-1 lg:max-w-lg w-full">
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              <Search className="h-5 w-5" />
            </div>
            <input
              type="text"
              placeholder="Поиск сообщений..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-lg border-none focus:ring-2 focus:ring-gray-300 focus:outline-none"
            />
            {searchTerm && (
              <button 
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <X className="h-5 w-5" />
              </button>
            )}
          </div>
          
          <div className="flex gap-3 w-full lg:w-auto">
            <div className="relative" ref={filterRef}>
              <button
                onClick={() => setFilterOpen(!filterOpen)}
                className="flex items-center gap-2 px-4 py-3 bg-white rounded-lg shadow text-gray-700 hover:text-gray-900 transition-colors w-full lg:w-auto justify-center"
              >
                <Filter className="h-4 w-4" />
                <span>Фильтры</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${filterOpen ? 'transform rotate-180' : ''}`} />
              </button>
              
              {filterOpen && (
                <div className="absolute right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-100 z-10 min-w-[220px]">
                  <div className="p-3 border-b border-gray-100">
                    <div className="text-sm font-medium text-gray-700 mb-2">Статус</div>
                    <div className="space-y-2">
                    {statuses.map((status) => (
                        <label key={status} className="...">
                            <input
                            type="radio"
                            name="status"
                            checked={selectedStatus === status}
                            onChange={() => setSelectedStatus(status)}
                            className="text-gray-800 focus:ring-gray-500"
                          />
                          <span className="text-sm text-gray-600">
                            {status === 'all' ? 'Все сообщения' : 
                             status === 'replied' ? 'Отвеченные' : 'Неотвеченные'}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                  
                  <div className="p-3">
                    <div className="text-sm font-medium text-gray-700 mb-2">Сортировка</div>
                    <div className="space-y-2">
                    {sortOptions.map((sort) => (
                        <label key={sort} className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name="sort"
                            checked={sortBy === sort}
                            onChange={() => setSortBy(sort as 'newest' | 'oldest')}
                            className="text-gray-800 focus:ring-gray-500"
                          />
                          <span className="text-sm text-gray-600">
                            {sort === 'newest' ? 'Сначала новые' : 'Сначала старые'}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-100 p-3 flex justify-end">
                    <button
                      onClick={() => {
                        setSelectedStatus('all');
                        setSortBy('newest');
                        setSearchTerm('');
                        setFilterOpen(false);
                      }}
                      className="text-sm text-gray-600 hover:text-gray-900"
                    >
                      Сбросить все
                    </button>
                  </div>
                </div>
              )}
            </div>
            
            {/* View switcher - list/grid */}
            <div className="bg-white rounded-lg shadow overflow-hidden flex">
              <button
                onClick={() => setMessageView('list')}
                className={`px-3 py-3 ${messageView === 'list' ? 'bg-gray-100 text-gray-800' : 'text-gray-500 hover:text-gray-700'}`}
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
              <button
                onClick={() => setMessageView('grid')}
                className={`px-3 py-3 ${messageView === 'grid' ? 'bg-gray-100 text-gray-800' : 'text-gray-500 hover:text-gray-700'}`}
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        {/* Messages Summary */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
        <div className="bg-white rounded-lg shadow px-4 py-3 flex items-center gap-3">
            <div className="bg-gray-100 p-2 rounded-full">
            <MessageCircle className="h-5 w-5 text-gray-700" />
            </div>
            <div>
            <div className="text-2xl font-bold text-gray-800">{messages.length}</div>
            <div className="text-xs text-gray-500">Всего сообщений</div>
            </div>
        </div>
        
        <div className="bg-white rounded-lg shadow px-4 py-3 flex items-center gap-3">
            <div className="bg-yellow-100 p-2 rounded-full">
            <Clock className="h-5 w-5 text-yellow-700" />
            </div>
            <div>
            <div className="text-2xl font-bold text-gray-800">{messages.filter(m => !m.replied).length}</div>
            <div className="text-xs text-gray-500">Ожидают ответа</div>
            </div>
        </div>
        
        <div className="bg-white rounded-lg shadow px-4 py-3 flex items-center gap-3">
            <div className="bg-green-100 p-2 rounded-full">
            <CheckCircle className="h-5 w-5 text-green-700" />
            </div>
            <div>
            <div className="text-2xl font-bold text-gray-800">{messages.filter(m => m.replied).length}</div>
            <div className="text-xs text-gray-500">Отвечено</div>
            </div>
        </div>
        </div>
        
        {/* Results info */}
        <div className="mb-4 text-sm text-gray-500">
          {filteredMessages.length === 0 && searchTerm 
            ? 'Сообщения не найдены. Попробуйте изменить параметры поиска.'
            : `Показано ${filteredMessages.length} из ${messages.length} сообщений`
          }
        </div>
        
        {/* Empty state */}
        {filteredMessages.length === 0 && !searchTerm && (
          <div className="bg-white rounded-lg p-12 text-center border border-gray-200 shadow-sm">
            <div className="bg-gray-100 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="h-8 w-8 text-gray-400" />
            </div>
            <h3 className="text-xl font-medium text-gray-800 mb-2">Нет полученных сообщений</h3>
            <p className="text-gray-500 max-w-md mx-auto">
              Когда пользователи будут отправлять вам сообщения, они появятся здесь.
            </p>
          </div>
        )}
        
        {/* Messages - Grid View */}
        {messageView === 'grid' && filteredMessages.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredMessages.map(msg => (
              <div
                key={msg.id}
                className={`bg-white rounded-lg shadow hover:shadow-md transition-all cursor-pointer flex flex-col justify-between ${
                  !msg.replied ? 'border-l-4 border-l-gray-400' : 'border-l-4 border-l-green-400'
                }`}
                onClick={() => setActiveMessageId(msg.id)}
              >
                <div className="p-5">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex items-center gap-3">
                      <div className="bg-gray-100 h-10 w-10 rounded-full flex items-center justify-center text-gray-700 font-medium">
                        {msg.name.charAt(0).toUpperCase()}
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">{msg.name}</div>
                        <div className="text-xs text-gray-500">{msg.email}</div>
                      </div>
                    </div>
                  </div>
                  
                  {msg.subject && (
                    <div className="font-medium text-gray-800 mb-2 truncate">
                      {msg.subject}
                    </div>
                  )}
                  
                  <div className="text-gray-600 text-sm mb-4 line-clamp-3 h-14 overflow-hidden">
                    {msg.message}
                  </div>
                  
                  <div className="flex justify-between items-center text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      <span>{formatMessageDate(msg.createdAt)}</span>
                    </div>
                    <div className={`px-2 py-1 rounded-full ${msg.replied ? 'bg-green-50 text-green-700' : 'bg-yellow-50 text-yellow-700'}`}>
                      {msg.replied ? 'Отвечено' : 'Ожидает'}
                    </div>
                  </div>
                </div>
                
                <div className="border-t border-gray-100 flex">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleRepliedStatus(msg.id);
                    }}
                    className="flex-1 py-2 text-gray-600 hover:bg-gray-50 transition-colors flex items-center justify-center gap-1 text-sm"
                  >
                    <CheckCircle className="h-4 w-4" />
                    {msg.replied ? 'Отмечено' : 'Отметить'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Messages - List View */}
        {messageView === 'list' && filteredMessages.length > 0 && (
        <div className="space-y-4">
            {filteredMessages.map(msg => (
            <div
                key={msg.id}
                className={`bg-white rounded-lg shadow hover:shadow-md transition-all cursor-pointer ${
                !msg.replied ? 'border-l-4 border-l-gray-400' : 'border-l-4 border-l-green-400'
                }`}
                onClick={() => setActiveMessageId(msg.id)}
            >
                <div className="p-5">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 mb-3">
                    <div className="flex items-center gap-3">
                    <div className="bg-gray-100 h-10 w-10 rounded-full flex items-center justify-center text-gray-700 font-medium">
                        {msg.name.charAt(0).toUpperCase()}
                    </div>
                    <div>
                        <div className="font-medium text-gray-900">{msg.name}</div>
                        <div className="text-xs text-gray-500">{msg.email}</div>
                    </div>
                    </div>
                    <div className="flex items-center justify-between sm:justify-end gap-4">
                    <div className={`text-xs px-2 py-1 rounded-full ${msg.replied ? 'bg-green-50 text-green-700' : 'bg-yellow-50 text-yellow-700'}`}>
                        {msg.replied ? 'Отвечено' : 'Ожидает'}
                    </div>
                    <div className="text-xs text-gray-500 whitespace-nowrap">
                        {formatMessageDate(msg.createdAt)}
                    </div>
                    </div>
                </div>
                
                {msg.subject && (
                    <div className="font-medium text-gray-800 mb-2">
                    {msg.subject}
                    </div>
                )}
                
                <div className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {msg.message}
                </div>
                
                <div className="flex justify-end gap-2">
                    <button
                    onClick={(e) => {
                        e.stopPropagation();
                        toggleRepliedStatus(msg.id);
                    }}
                    className="px-3 py-1.5 text-sm rounded-lg flex items-center gap-1.5 text-gray-700 hover:bg-gray-100 transition-colors"
                    >
                    <CheckCircle className="h-4 w-4" />
                    {msg.replied ? 'Отмечено' : 'Отметить'}
                    </button>
                    <button
                    onClick={(e) => {
                        e.stopPropagation();
                        deleteMessage(msg.id);
                    }}
                    className="px-3 py-1.5 text-sm rounded-lg flex items-center gap-1.5 text-gray-700 hover:bg-gray-100 transition-colors"
                    >
                    <Trash2 className="h-4 w-4" />
                    Удалить
                    </button>
                </div>
                </div>
            </div>
            ))}
        </div>
        )}

        {activeMessageId && messageView === 'list' && (
        <div className="hidden lg:block">
            <MessageDetailView
            message={filteredMessages.find(msg => msg.id === activeMessageId)!}
            />
        </div>
        )}
        </main>
      </div>    
  );
}   