// 'use client';

// import Link from 'next/link';
// import { useRouter } from 'next/navigation';
// import { useEffect, useState } from 'react';

// export default function AdminDashboardPage() {

//   interface ActivityItem {
//     id: number;
//     name: string;
//     subtitle: string;
//     createdAt: string;
//     updatedAt: string;
//   }
//   const router = useRouter();
//   const [recentProducts, setRecentProducts] = useState<ActivityItem[]>([]);

//   useEffect(() => {
//     fetch('/api/admin/products/recent')
//       .then(res => res.json())
//       .then(setRecentProducts)
//       .catch(() => console.error('Failed to fetch recent products'));
//   }, []);
  

//   const handleLogout = async () => {
//     await fetch('/api/logout', { method: 'POST' });
//     router.push('/login');
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-8">
//       <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-md p-6">
//         <div className="flex justify-between items-center border-b pb-4 mb-6">
//           <h1 className="text-3xl font-bold text-blue-800">Панель администратора</h1>
//           <button
//             onClick={handleLogout}
//             className="text-white bg-red-500 hover:bg-red-600 px-4 py-2 rounded"
//           >
//             Выйти
//           </button>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <Link href="/admin/products" className="block bg-blue-100 p-6 rounded-lg shadow hover:bg-blue-200 transition">
//             <h2 className="text-xl font-semibold text-blue-900 mb-2">📦 Управление продуктами</h2>
//             <p className="text-sm text-blue-800">Просмотр, редактирование и удаление всех товаров в вашем каталоге.</p>
//           </Link>

//           <Link href="/admin/products/new" className="block bg-green-100 p-6 rounded-lg shadow hover:bg-green-200 transition">
//             <h2 className="text-xl font-semibold text-green-900 mb-2">➕ Добавить новый продукт</h2>
//             <p className="text-sm text-green-800">Создайте новый продукт и загрузите его данные и изображение.</p>
//           </Link>

//           <Link href="/admin/categories" className="block bg-yellow-100 p-6 rounded-lg shadow hover:bg-yellow-200 transition">
//             <h2 className="text-xl font-semibold text-yellow-900 mb-2">📂 Управление категориями</h2>
//             <p className="text-sm text-yellow-800">Просмотр и управление категориями продуктов (необязательно).</p>
//           </Link>

//           <Link href="/admin/subscribers" className="block bg-purple-100 p-6 rounded-lg shadow hover:bg-purple-200 transition">
//             <h2 className="text-xl font-semibold text-purple-900 mb-2">📬 Подписчики</h2>
//             <p className="text-sm text-purple-800">Просмотр подписчиков на рассылку и управление статусом.</p>
//           </Link>
//           <Link href="/admin/messages" className="block bg-indigo-100 p-6 rounded-lg shadow hover:bg-indigo-200 transition">
//   <h2 className="text-xl font-semibold text-indigo-900 mb-2">💌 Contact Messages</h2>
//   <p className="text-sm text-indigo-800">View messages submitted via the contact form.</p>
// </Link>
//         </div>

//         <div className="mt-10">
//         <h2 className="text-2xl font-semibold text-blue-800 mb-4">🕒 Недавняя активность продуктов</h2>
//         <ul className="space-y-3">
//             {recentProducts.map(product => (
//             <li key={product.id} className="bg-white border rounded p-4 shadow-sm">
//                 <div className="flex justify-between items-center">
//                 <div>
//                     <div className="text-blue-900 font-semibold">
//                     {product.name} <span className="text-sm text-gray-500">({product.subtitle})</span>
//                     </div>
//                     <div className="text-xs text-gray-500">
//                     Создано: {new Date(product.createdAt).toLocaleString()}
//                     <br />
//                     Обновлено: {new Date(product.updatedAt).toLocaleString()}
//                     </div>
//                 </div>
//                 <Link
//                     href={`/admin/products/${product.id}`}
//                     className="text-sm text-blue-600 underline"
//                 >
//                     Редактировать
//                 </Link>
//                 </div>
//             </li>
//             ))}
//         </ul>
//         </div>
//       </div>
//     </div>
//   );
// }



'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { LogOut, Package, PlusCircle, X, FolderOpen, Mail, MessageSquare, Clock, ChevronRight, Loader2, User, Settings, Bell, Search } from 'lucide-react';

export default function AdminDashboardPage() {
  interface ActivityItem {
    id: number;
    name: string;
    subtitle: string;
    createdAt: string;
    updatedAt: string;
  }
  
  interface DashboardStat {
    label: string;
    value: number;
    change: number;
    icon: React.ReactNode;
  }
  
  const router = useRouter();
  const [showSettingsModal, setShowSettingsModal] = useState(false);
  const [settingsForm, setSettingsForm] = useState({
    // displayName: 'Администратор',
    // email: 'admin@example.com',
    // language: 'ru',
    notifications: true,
    // darkMode: false,
    autoSave: true
  });
  const [recentProducts, setRecentProducts] = useState<ActivityItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState<DashboardStat[]>([
    { 
      label: 'Всего продуктов', 
      value: 0, 
      change: 0,
      icon: <Package className="h-6 w-6 text-blue-500" />
    },
    { 
      label: 'Категории', 
      value: 0, 
      change: 0,
      icon: <FolderOpen className="h-6 w-6 text-yellow-500" />
    },
    { 
      label: 'Подписчики', 
      value: 0, 
      change: 0,
      icon: <Mail className="h-6 w-6 text-purple-500" />
    },
    { 
      label: 'Сообщения', 
      value: 0, 
      change: 0,
      icon: <MessageSquare className="h-6 w-6 text-indigo-500" />
    }
  ]);

  useEffect(() => {
    Promise.all([
      fetch('/api/admin/products/recent').then(res => res.json()),
      fetch('/api/admin/stats').then(res => res.json()).catch(() => ({}))
    ])
    .then(([products, statsData]) => {
      setRecentProducts(products);
      setStats(prev => prev.map(stat => {
        switch(stat.label) {
          case 'Всего продуктов': return { ...stat, value: statsData.totalProducts || 0, change: statsData.productChange || 0 };
          case 'Категории': return { ...stat, value: statsData.totalCategories || 0, change: statsData.categoryChange || 0 };
          case 'Подписчики': return { ...stat, value: statsData.totalSubscribers || 0, change: statsData.subscriberChange || 0 };
          case 'Сообщения': return { ...stat, value: statsData.totalMessages || 0, change: statsData.messageChange || 0 };
          default: return stat;
        }
      }));
      setLoading(false);
    })
    .catch(() => {
      console.error('Failed to fetch dashboard data');
      setLoading(false);
    });
  }, []);
  

//   const handleSettingChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setSettingsForm(prev => ({
//       ...prev,
//       [name]: type === 'checkbox' ? checked : value
//     }));
//   };

const handleSettingChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setSettingsForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleLogout = async () => {
    await fetch('/api/logout', { method: 'POST' });
    router.push('/login');
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('ru-RU', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };

  const saveSettings = async () => {
    // Here you would normally save settings to your backend
    console.log('Saving settings:', settingsForm);
    setShowSettingsModal(false);
    // Mock successful save notification
    alert('Настройки успешно сохранены');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <Loader2 className="h-12 w-12 animate-spin text-blue-600 mx-auto mb-4" />
          <p className="text-xl text-blue-800 font-medium">
            Загрузка данных панели управления...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-orange-500">
                Admin<span className="font-light text-blue-800">Panel</span>
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative hidden md:block">
                <input
                  type="text"
                  placeholder="Поиск..."
                  className="px-4 py-2 rounded-full border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-64"
                />
                <Search className="absolute right-3 top-2.5 h-4 w-4 text-gray-400" />
              </div>
              <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
                <Bell className="h-5 w-5 text-gray-600" />
              </button>
              <button 
  className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
  onClick={() => setShowSettingsModal(true)}
>
  <Settings className="h-5 w-5 text-gray-600" />
</button>
              <div className="flex items-center space-x-2">
                <div className="bg-blue-500 rounded-full p-2">
                  <User className="h-5 w-5 text-white" />
                </div>
                {/* <span className="hidden md:inline text-sm font-medium text-gray-700">{settingsForm.displayName}</span> */}
              </div>
              <button
                onClick={handleLogout}
                className="flex items-center text-white bg-red-500 hover:bg-red-600 px-4 py-2 rounded-full transition-colors text-sm"
              >
                <LogOut className="h-4 w-4 mr-1" />
                <span className="hidden sm:inline">Выйти</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <h1 className="text-2xl sm:text-3xl font-light text-blue-800 mb-2">
            Добро пожаловать в <span className="font-bold text-orange-500">Панель управления</span>
          </h1>
          <p className="text-gray-600">
            Управляйте продуктами, категориями и взаимодействуйте с клиентами из одного места.
          </p>
        </div>

        {/* Stats Grid */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
  {stats.map((stat, index) => (
    <div key={index} className="bg-white rounded-lg shadow p-5 border-l-4 border-gray-700 hover:shadow-md transition-all flex items-center justify-between">
      <div>
        <p className="text-sm font-medium text-gray-500">{stat.label}</p>
        <p className="text-2xl font-bold text-gray-800 mt-1">{stat.value}</p>
        <div className={`mt-2 text-xs font-medium ${stat.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
          {stat.change >= 0 ? '+' : ''}{stat.change}% с прошлого месяца
        </div>
      </div>
      <div className="rounded-full p-3 bg-gray-100 text-gray-700">
        {stat.icon}
      </div>
    </div>
  ))}
</div>

{/* Quick Actions Grid */}
<div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
  {[
    {
      href: "/admin/products",
      icon: <Package className="h-6 w-6" />,
      title: "Управление продуктами",
      desc: "Просмотр и редактирование товаров"
    },
    {
      href: "/admin/products/new",
      icon: <PlusCircle className="h-6 w-6" />,
      title: "Добавить продукт",
      desc: "Создать новый товар"
    },
    {
      href: "/admin/categories",
      icon: <FolderOpen className="h-6 w-6" />,
      title: "Категории",
      desc: "Управление категориями"
    },
    {
      href: "/admin/subscribers",
      icon: <Mail className="h-6 w-6" />,
      title: "Подписчики",
      desc: "Управление рассылкой"
    },
    {
      href: "/admin/messages",
      icon: <MessageSquare className="h-6 w-6" />,
      title: "Сообщения",
      desc: "Запросы от клиентов"
    }
  ].map((item, i) => (
    <Link 
      key={i} 
      href={item.href} 
      className="flex flex-col items-center bg-white hover:bg-gray-50 p-5 rounded-lg shadow hover:shadow-md transition-all text-center border border-gray-200"
    >
      <div className="bg-gray-100 rounded-full p-3 mb-3 text-gray-700">
        {item.icon}
      </div>
      <h2 className="text-base font-semibold mb-1 text-gray-800">{item.title}</h2>
      <p className="text-xs text-gray-500">{item.desc}</p>
    </Link>
  ))}
</div>

        {/* Recent Activity Section */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold text-blue-800 flex items-center">
              <Clock className="h-5 w-5 mr-2 text-orange-500" />
              Недавняя активность продуктов
            </h2>
            <Link href="/admin/products" className="text-sm text-blue-600 hover:text-blue-800 transition-colors flex items-center">
              Все продукты
              <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
          
          {recentProducts.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              <Package className="h-12 w-12 mx-auto mb-3 text-gray-400" />
              <p>Нет недавних изменений продуктов</p>
            </div>
          ) : (
            <div className="overflow-hidden rounded-lg border border-gray-200">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Продукт
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden md:table-cell">
                      Подзаголовок
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden sm:table-cell">
                      Создано
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Обновлено
                    </th>
                    <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Действия
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {recentProducts.map((product) => (
                    <tr key={product.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-blue-900">{product.name}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap hidden md:table-cell">
                        <div className="text-sm text-gray-500">{product.subtitle}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap hidden sm:table-cell">
                        <div className="text-xs text-gray-500">{formatDate(product.createdAt)}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-xs text-gray-500">{formatDate(product.updatedAt)}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <Link
                          href={`/admin/products/${product.id}`}
                          className="text-blue-600 hover:text-blue-900 transition-colors"
                        >
                          Редактировать
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
      {showSettingsModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center border-b p-4">
                <h3 className="text-lg font-bold text-blue-800">Настройки</h3>
                <button 
                onClick={() => setShowSettingsModal(false)}
                className="text-gray-500 hover:text-gray-700"
                >
                <X className="h-5 w-5" />
                </button>
            </div>
            
            <div className="p-6 space-y-4">
                {/* <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700">Имя пользователя</label>
                <input
                    type="text"
                    name="displayName"
                    value={settingsForm.displayName}
                    onChange={handleSettingChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                />
                </div>
                
                <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                    type="email"
                    name="email"
                    value={settingsForm.email}
                    onChange={handleSettingChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                />
                </div>
                
                <div className="space-y-1">
                <label className="block text-sm font-medium text-gray-700">Язык</label>
                <select
                    name="language"
                    value={settingsForm.language}
                    onChange={handleSettingChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-white"
                >
                    <option value="ru">Русский</option>
                    <option value="en">English</option>
                    <option value="es">Español</option>
                </select>
                </div> */}
                
                <div className="pt-4 border-t border-gray-200">
                <h4 className="font-medium text-gray-800 mb-2">Настройки интерфейса</h4>
                
                {/* <div className="flex items-center justify-between py-2">
                    <span className="text-sm text-gray-700">Темная тема</span>
                    <label className="relative inline-flex items-center cursor-pointer">
                    <input 
                        type="checkbox" 
                        name="darkMode"
                        checked={settingsForm.darkMode}
                        onChange={handleSettingChange}
                        className="sr-only peer" 
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                </div> */}
                
                <div className="flex items-center justify-between py-2">
                    <span className="text-sm text-gray-700">Получать уведомления</span>
                    <label className="relative inline-flex items-center cursor-pointer">
                    <input 
                        type="checkbox" 
                        name="notifications"
                        checked={settingsForm.notifications}
                        onChange={handleSettingChange}
                        className="sr-only peer" 
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                </div>
                
                <div className="flex items-center justify-between py-2">
                    <span className="text-sm text-gray-700">Автосохранение</span>
                    <label className="relative inline-flex items-center cursor-pointer">
                    <input 
                        type="checkbox" 
                        name="autoSave"
                        checked={settingsForm.autoSave}
                        onChange={handleSettingChange}
                        className="sr-only peer" 
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                </div>
                </div>
            </div>
            
            <div className="border-t border-gray-200 p-4 flex justify-end space-x-3">
                <button
                onClick={() => setShowSettingsModal(false)}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200"
                >
                Отмена
                </button>
                <button
                onClick={saveSettings}
                className="px-4 py-2 text-sm font-medium text-white bg-orange-500 rounded-lg hover:bg-orange-600"
                >
                Сохранить
                </button>
            </div>
            </div>
        </div>
        )}
    </div>
  );
}