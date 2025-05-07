// // app/admin/products/page.tsx

// 'use client';
// import React, { useEffect, useState } from 'react';
// import Link from 'next/link';

// interface Product {
//   id: number;
//   name: string;
//   subtitle: string;
//   brandName: string;
//   category: string;
//   image: string;
// }

// export default function AdminProductPage() {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch('/api/admin/products')
//       .then(res => res.json())
//       .then(data => {
//         setProducts(data);
//         setLoading(false);
//       });
//   }, []);

//   const deleteProduct = async (id: number) => {
//     if (!confirm('Delete this product?')) return;
//     await fetch(`/api/admin/products/${id}`, { method: 'DELETE' });
//     setProducts(products.filter(p => p.id !== id));
//   };

//   if (loading) return <div>Loading products...</div>;

//   return (
//     <div className="p-6">
//       <h1 className="text-3xl font-bold mb-4">Admin - Manage Products</h1>
//       <Link href="/admin/products/new" className="text-white bg-blue-600 px-4 py-2 rounded mb-4 inline-block">+ Add Product</Link>
//       <table className="w-full mt-4 border">
//         <thead>
//           <tr className="bg-gray-200">
//             <th>ID</th>
//             <th>Name</th>
//             <th>Brand</th>
//             <th>Category</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {products.map(prod => (
//             <tr key={prod.id} className="border-t">
//               <td className="p-2">{prod.id}</td>
//               <td className="p-2">{prod.name} {prod.subtitle}</td>
//               <td className="p-2">{prod.brandName}</td>
//               <td className="p-2">{prod.category}</td>
//               <td className="p-2 flex gap-2">
//                 <Link href={`/admin/products/${prod.id}`} className="text-blue-600 underline">Edit</Link>
//                 <button onClick={() => deleteProduct(prod.id)} className="text-red-600 underline">Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }



'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Plus, Edit, Trash2, Search, Filter, ChevronDown, Loader2, X } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  subtitle: string;
  brandName: string;
  category: string;
  image: string;
}

interface FilterOptions {
  brands: string[];
  categories: string[];
}

export default function AdminProductPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [availableBrands, setAvailableBrands] = useState<string[]>([]);
  const [availableCategories, setAvailableCategories] = useState<string[]>([]);
  const [filterOptions, setFilterOptions] = useState<FilterOptions>({
    brands: [],
    categories: []
  });
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState<number | null>(null);
  const [sortBy, setSortBy] = useState<'id' | 'name' | 'brand' | 'category'>('id');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const [_isMobileMenuOpen, _setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    fetch('/api/admin/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setFilteredProducts(data);
        
        // Extract unique brands and categories
        const brands = [...new Set(data.map((product: Product) => product.brandName))];
        const categories = [...new Set(data.map((product: Product) => product.category))];
        
        setAvailableBrands(brands as string[]);
        setAvailableCategories(categories as string[]);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    let results = [...products];
    
    // Apply search filter
    if (searchTerm) {
      results = results.filter(
        product => 
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
          product.subtitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.brandName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Apply brand filter
    if (filterOptions.brands.length > 0) {
      results = results.filter(product => filterOptions.brands.includes(product.brandName));
    }
    
    // Apply category filter
    if (filterOptions.categories.length > 0) {
      results = results.filter(product => filterOptions.categories.includes(product.category));
    }
    
    // Apply sorting
    results.sort((a, b) => {
      let comparison = 0;
      
      switch (sortBy) {
        case 'name':
          comparison = (a.name + a.subtitle).localeCompare(b.name + b.subtitle);
          break;
        case 'brand':
          comparison = a.brandName.localeCompare(b.brandName);
          break;
        case 'category':
          comparison = a.category.localeCompare(b.category);
          break;
        default:
          comparison = a.id - b.id;
      }
      
      return sortDirection === 'asc' ? comparison : -comparison;
    });
    
    setFilteredProducts(results);
  }, [products, searchTerm, filterOptions, sortBy, sortDirection]);

  const deleteProduct = async (id: number) => {
    setLoading(true);
    try {
      await fetch(`/api/admin/products/${id}`, { method: 'DELETE' });
      setProducts(products.filter(p => p.id !== id));
      setConfirmDelete(null);
    } catch (error) {
      console.error('Failed to delete product:', error);
    } finally {
      setLoading(false);
    }
  };

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
    setFilterOptions({ brands: [], categories: [] });
    setSearchTerm('');
  };

  const handleSort = (column: 'id' | 'name' | 'brand' | 'category') => {
    if (sortBy === column) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(column);
      setSortDirection('asc');
    }
  };

  const renderSortIcon = (column: 'id' | 'name' | 'brand' | 'category') => {
    if (sortBy !== column) return null;
    
    return (
      <span className="ml-1 inline-block">
        {sortDirection === 'asc' ? '↑' : '↓'}
      </span>
    );
  };

  const renderFilterBadges = () => {
    const totalFilters = filterOptions.brands.length + filterOptions.categories.length;
    
    if (totalFilters === 0) return null;
    
    return (
      <div className="flex flex-wrap gap-2 mt-4">
        {filterOptions.brands.map(brand => (
          <div 
            key={brand}
            className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm flex items-center"
          >
            <span className="mr-1">{brand}</span>
            <button onClick={() => toggleBrandFilter(brand)} className="text-blue-600 hover:text-blue-800">
              <X className="h-4 w-4" />
            </button>
          </div>
        ))}
        
        {filterOptions.categories.map(category => (
          <div 
            key={category}
            className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm flex items-center"
          >
            <span className="mr-1">{category}</span>
            <button onClick={() => toggleCategoryFilter(category)} className="text-orange-600 hover:text-orange-800">
              <X className="h-4 w-4" />
            </button>
          </div>
        ))}
        
        {totalFilters > 0 && (
          <button 
            onClick={clearAllFilters}
            className="text-sm text-gray-600 hover:text-gray-800 underline px-2"
          >
            Очистить все
          </button>
        )}
      </div>
    );
  };

  const renderFilterPanel = () => {
    if (!isFilterOpen) return null;
    
    return (
      <div className="border border-gray-200 bg-white rounded-lg shadow-md p-4 mb-6">
        <div className="flex justify-between items-center mb-4 pb-2 border-b border-gray-100">
          <h3 className="text-lg font-bold text-blue-800">Фильтры</h3>
          <button
            className="text-blue-600 hover:text-orange-500 text-sm font-medium"
            onClick={clearAllFilters}
          >
            Очистить все
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="mb-4">
            <h4 className="font-bold text-blue-800 mb-2">Бренд</h4>
            <div className="space-y-2 max-h-40 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-blue-300 scrollbar-track-blue-50">
              {availableBrands.map(brand => (
                <div 
                  key={brand} 
                  className="flex items-center cursor-pointer group"
                  onClick={() => toggleBrandFilter(brand)}
                >
                  <div className={`w-5 h-5 mr-2 border rounded flex items-center justify-center ${
                    filterOptions.brands.includes(brand) 
                      ? 'bg-orange-500 border-orange-500' 
                      : 'border-gray-300 group-hover:border-orange-300'
                  }`}>
                    {filterOptions.brands.includes(brand) && (
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    )}
                  </div>
                  <span className="text-blue-800 text-sm group-hover:text-orange-500 transition-colors">{brand}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-blue-800 mb-2">Категория</h4>
            <div className="space-y-2 max-h-40 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-blue-300 scrollbar-track-blue-50">
              {availableCategories.map(category => (
                <div 
                  key={category} 
                  className="flex items-center cursor-pointer group"
                  onClick={() => toggleCategoryFilter(category)}
                >
                  <div className={`w-5 h-5 mr-2 border rounded flex items-center justify-center ${
                    filterOptions.categories.includes(category) 
                      ? 'bg-orange-500 border-orange-500' 
                      : 'border-gray-300 group-hover:border-orange-300'
                  }`}>
                    {filterOptions.categories.includes(category) && (
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                    )}
                  </div>
                  <span className="text-blue-800 text-sm group-hover:text-orange-500 transition-colors">{category}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderMobileProductCard = (product: Product) => {
    return (
      <div key={product.id} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 mb-4">
        <div className="flex items-center mb-3">
          <div className="relative h-16 w-16 bg-gray-100 rounded overflow-hidden">
            {product.image ? (
              <div className="h-full w-full relative">
                <Image 
                  src={product.image} 
                  alt={product.name} 
                  layout="fill" 
                  objectFit="contain" 
                  className="object-center"
                />
              </div>
            ) : (
              <div className="flex items-center justify-center h-full text-gray-400">
                Нет фото
              </div>
            )}
          </div>
          <div className="ml-4 flex-1">
            <h3 className="text-blue-800 font-medium">{product.name}</h3>
            <p className="text-blue-600 text-sm">{product.subtitle}</p>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-2 mb-3 text-sm">
          <div>
            <span className="text-gray-500">ID:</span> 
            <span className="text-blue-800 ml-1">{product.id}</span>
          </div>
          <div>
            <span className="text-gray-500">Бренд:</span> 
            <span className="ml-1 px-2 py-0.5 inline-flex text-xs leading-5 rounded-full bg-blue-50 text-blue-800">
              {product.brandName}
            </span>
          </div>
          <div className="col-span-2">
            <span className="text-gray-500">Категория:</span> 
            <span className="text-blue-800 ml-1">{product.category}</span>
          </div>
        </div>
        
        <div className="flex justify-between pt-3 border-t border-gray-100">
          <Link
            href={`/admin/products/${product.id}`}
            className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
          >
            <Edit className="h-4 w-4 mr-1" />
            <span>Изменить</span>
          </Link>
          
          {confirmDelete === product.id ? (
            <div className="flex items-center space-x-2">
              <button
                onClick={() => deleteProduct(product.id)}
                className="text-white bg-red-500 hover:bg-red-600 px-2 py-1 rounded text-xs transition-colors"
              >
                Да
              </button>
              <button
                onClick={() => setConfirmDelete(null)}
                className="text-white bg-gray-500 hover:bg-gray-600 px-2 py-1 rounded text-xs transition-colors"
              >
                Нет
              </button>
            </div>
          ) : (
            <button
              onClick={() => setConfirmDelete(product.id)}
              className="flex items-center text-red-500 hover:text-red-700 transition-colors"
            >
              <Trash2 className="h-4 w-4 mr-1" />
              <span>Удалить</span>
            </button>
          )}
        </div>
      </div>
    );
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <Loader2 className="h-12 w-12 animate-spin text-blue-600 mx-auto mb-4" />
          <p className="text-xl text-blue-800 font-medium">Загрузка продуктов...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="bg-white shadow-sm rounded-lg p-4 md:p-6 mb-6">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6">
            <div>
              <h1 className="text-2xl sm:text-3xl font-light text-orange-500 mb-2">
                Админ <span className="font-bold">Панель</span>
              </h1>
              <p className="text-blue-800 text-sm">Управление продуктами в каталоге</p>
            </div>
            <div className="mt-4 sm:mt-0">
              <Link 
                href="/admin/products/new" 
                className="inline-flex items-center bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition-colors font-bold gap-2 shadow-sm"
              >
                <Plus className="h-5 w-5" />
                <span className="hidden sm:inline">Добавить Продукт</span>
                <span className="sm:hidden">Добавить</span>
              </Link>
            </div>
          </div>

          {/* Search and Filter Controls */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Поиск продуктов..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 bg-blue-50 w-full rounded-lg border-none focus:ring-2 focus:ring-blue-600 text-blue-800 placeholder-blue-400"
              />
            </div>
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="inline-flex items-center justify-center bg-blue-50 text-blue-800 px-4 py-2 rounded-lg hover:bg-blue-100 transition-colors font-medium gap-2"
            >
              <Filter className="h-5 w-5" />
              <span className="hidden sm:inline">{isFilterOpen ? 'Скрыть фильтры' : 'Показать фильтры'}</span>
              <span className="sm:hidden">Фильтры</span>
              <ChevronDown className={`h-5 w-5 transition-transform ${isFilterOpen ? 'rotate-180' : ''}`} />
            </button>
          </div>
          
          {/* Active Filter Badges */}
          {renderFilterBadges()}
        </div>
        
        {/* Filters Panel */}
        {renderFilterPanel()}

        {/* Products Table - Desktop View */}
        <div className="hidden md:block bg-white shadow-sm rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-blue-50 text-left">
                  <th className="px-6 py-3 cursor-pointer hover:bg-blue-100 transition-colors" onClick={() => handleSort('id')}>
                    <div className="flex items-center text-blue-800 font-bold">
                      ID {renderSortIcon('id')}
                    </div>
                  </th>
                  <th className="px-6 py-3">Изображение</th>
                  <th className="px-6 py-3 cursor-pointer hover:bg-blue-100 transition-colors" onClick={() => handleSort('name')}>
                    <div className="flex items-center text-blue-800 font-bold">
                      Наименование {renderSortIcon('name')}
                    </div>
                  </th>
                  <th className="px-6 py-3 cursor-pointer hover:bg-blue-100 transition-colors" onClick={() => handleSort('brand')}>
                    <div className="flex items-center text-blue-800 font-bold">
                      Бренд {renderSortIcon('brand')}
                    </div>
                  </th>
                  <th className="px-6 py-3 cursor-pointer hover:bg-blue-100 transition-colors" onClick={() => handleSort('category')}>
                    <div className="flex items-center text-blue-800 font-bold">
                      Категория {renderSortIcon('category')}
                    </div>
                  </th>
                  <th className="px-6 py-3 text-blue-800 font-bold">Действия</th>
                </tr>
              </thead>
              <tbody>
                {filteredProducts.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="text-center py-8 text-blue-800">
                      Нет продуктов, соответствующих вашим критериям поиска
                    </td>
                  </tr>
                ) : (
                  filteredProducts.map((product) => (
                    <tr 
                      key={product.id} 
                      className="border-t border-gray-100 hover:bg-blue-50 transition-colors"
                    >
                      <td className="px-6 py-4 text-blue-800">{product.id}</td>
                      <td className="px-6 py-4">
                        <div className="relative h-16 w-16 bg-gray-100 rounded overflow-hidden">
                          {product.image ? (
                            <div className="h-full w-full relative">
                              <Image 
                                src={product.image} 
                                alt={product.name} 
                                layout="fill" 
                                objectFit="contain" 
                                className="object-center"
                              />
                            </div>
                          ) : (
                            <div className="flex items-center justify-center h-full text-gray-400">
                              Нет фото
                            </div>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-blue-800 font-medium">{product.name}</div>
                        <div className="text-blue-600 text-sm">{product.subtitle}</div>
                      </td>
                      <td className="px-6 py-4">
  <span className="px-3 py-1 inline-flex text-sm leading-5 rounded-full bg-blue-50 text-blue-800 whitespace-nowrap overflow-hidden text-ellipsis max-w-[150px]">
    {product.brandName}
  </span>
</td>
                      <td className="px-6 py-4">
                        <span className="text-blue-800">{product.category}</span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex space-x-3">
                          <Link
                            href={`/admin/products/${product.id}`}
                            className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                          >
                            <Edit className="h-4 w-4 mr-1" />
                            <span>Изменить</span>
                          </Link>
                          
                          {confirmDelete === product.id ? (
                            <div className="flex items-center space-x-2">
                              <button
                                onClick={() => deleteProduct(product.id)}
                                className="text-white bg-red-500 hover:bg-red-600 px-2 py-1 rounded text-xs transition-colors"
                              >
                                Да
                              </button>
                              <button
                                onClick={() => setConfirmDelete(null)}
                                className="text-white bg-gray-500 hover:bg-gray-600 px-2 py-1 rounded text-xs transition-colors"
                              >
                                Нет
                              </button>
                            </div>
                          ) : (
                            <button
                              onClick={() => setConfirmDelete(product.id)}
                              className="flex items-center text-red-500 hover:text-red-700 transition-colors"
                            >
                              <Trash2 className="h-4 w-4 mr-1" />
                              <span>Удалить</span>
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
          
          {/* Pagination - Desktop View */}
          <div className="bg-gray-50 px-6 py-3 flex items-center justify-between border-t border-gray-100">
            <div className="text-sm text-blue-800">
              Показано {filteredProducts.length} из {products.length} продуктов
            </div>
            <div className="flex gap-2">
              <button className="px-3 py-1 rounded-md bg-white border border-gray-200 text-blue-800 hover:bg-blue-50 transition-colors disabled:opacity-50" disabled>
                Назад
              </button>
              <button className="px-3 py-1 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors">
                1
              </button>
              <button className="px-3 py-1 rounded-md bg-white border border-gray-200 text-blue-800 hover:bg-blue-50 transition-colors disabled:opacity-50" disabled>
                Вперед
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile View - Card List */}
        <div className="md:hidden">
          {/* Mobile Sorting Controls */}
          <div className="bg-white p-3 mb-4 rounded-lg shadow-sm flex justify-between items-center">
            <span className="text-blue-800 text-sm font-medium">Сортировать по:</span>
            <select 
              className="bg-blue-50 border-none rounded p-2 text-blue-800 text-sm" 
              value={`${sortBy}-${sortDirection}`}
              onChange={(e) => {
                const [newSortBy, newSortDir] = e.target.value.split('-');
                setSortBy(newSortBy as 'id' | 'name' | 'brand' | 'category');
                setSortDirection(newSortDir as 'asc' | 'desc');
              }}
            >
              <option value="id-asc">ID (По возрастанию)</option>
              <option value="id-desc">ID (По убыванию)</option>
              <option value="name-asc">Наименование (А-Я)</option>
              <option value="name-desc">Наименование (Я-А)</option>
              <option value="brand-asc">Бренд (А-Я)</option>
              <option value="brand-desc">Бренд (Я-А)</option>
              <option value="category-asc">Категория (А-Я)</option>
              <option value="category-desc">Категория (Я-А)</option>
            </select>
          </div>
          
          {/* Mobile Card List */}
          {filteredProducts.length === 0 ? (
            <div className="text-center py-8 text-blue-800 bg-white rounded-lg shadow-sm">
              Нет продуктов, соответствующих вашим критериям поиска
            </div>
          ) : (
            <div>
              {filteredProducts.map(product => renderMobileProductCard(product))}
            </div>
          )}
          
          {/* Mobile Pagination */}
          <div className="bg-white p-4 rounded-lg shadow-sm mt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-sm text-blue-800">
              Показано {filteredProducts.length} из {products.length} продуктов
            </div>
            <div className="flex gap-2">
              <button className="px-3 py-1 rounded-md bg-white border border-gray-200 text-blue-800 hover:bg-blue-50 transition-colors disabled:opacity-50" disabled>
                Назад
              </button>
              <button className="px-3 py-1 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors">
                1
              </button>
              <button className="px-3 py-1 rounded-md bg-white border border-gray-200 text-blue-800 hover:bg-blue-50 transition-colors disabled:opacity-50" disabled>
                Вперед
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}