// app/admin/products/new/page.tsx

// 'use client';
// import React, { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import Link from 'next/link';
// import { 
//   ArrowLeft, 
//   Upload, 
//   Save, 
//   Loader2, 
//   AlertCircle 
// } from 'lucide-react';
// import Image from 'next/image';

// export default function AddProductPage() {
//   const router = useRouter();
//   const [uploadingImage, setUploadingImage] = useState(false);
//   const [errors, setErrors] = useState<Record<string, string>>({});
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [form, setForm] = useState({
//     name: '',
//     subtitle: '',
//     fullTitle: '',
//     description: '',
//     longDescription: '',
//     image: '',
//     color: '',
//     brandName: '',
//     category: '',
//     features: '',
//     directions: '',
//     rating: 0,
//     reviews: 0,
//     badge: '',
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setForm(prev => ({ ...prev, [name]: value }));
    
//     // Clear error for this field when user edits it
//     if (errors[name]) {
//       setErrors(prev => {
//         const newErrors = {...prev};
//         delete newErrors[name];
//         return newErrors;
//       });
//     }
//   };

//   const validateForm = () => {
//     const newErrors: Record<string, string> = {};
    
//     if (!form.name.trim()) newErrors.name = 'Название продукта обязательно';
//     if (!form.brandName.trim()) newErrors.brandName = 'Бренд обязателен';
//     if (!form.category.trim()) newErrors.category = 'Категория обязательна';
    
//     if (form.rating && (isNaN(Number(form.rating)) || Number(form.rating) < 0 || Number(form.rating) > 5)) {
//       newErrors.rating = 'Рейтинг должен быть числом от 0 до 5';
//     }
    
//     if (form.reviews && (isNaN(Number(form.reviews)) || Number(form.reviews) < 0)) {
//       newErrors.reviews = 'Количество отзывов должно быть положительным числом';
//     }
    
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = async () => {
//     if (!validateForm()) return;
    
//     setIsSubmitting(true);
    
//     try {
//       const body = {
//         ...form,
//         rating: Number(form.rating),
//         reviews: Number(form.reviews),
//         features: form.features ? form.features.split(',').map(f => f.trim()).filter(Boolean) : [],
//         directions: form.directions ? form.directions.split(',').map(d => d.trim()).filter(Boolean) : [],
//       };
      
//       const res = await fetch('/api/admin/products/new', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(body),
//       });
      
//       if (res.ok) {
//         router.push('/admin/products');
//       } else {
//         const data = await res.json();
//         throw new Error(data.message || 'Ошибка при создании продукта');
//       }
//     } catch (error) {
//       if (error instanceof Error) {
//         alert(error.message);
//       } else {
//         alert('Ошибка при создании продукта');
//       }
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (!file) return;
    
//     setUploadingImage(true);
    
//     try {
//       const formData = new FormData();
//       formData.append('file', file);
      
//       const res = await fetch('/api/upload', {
//         method: 'POST',
//         body: formData,
//       });
      
//       const data = await res.json();
      
//       if (data.url) {
//         setForm(prev => ({ ...prev, image: data.url }));
//       } else {
//         throw new Error(data.message || 'Ошибка при загрузке изображения');
//       }
//     } catch (error) {
//       if (error instanceof Error) {
//         alert(error.message);
//       } else {
//         alert('Ошибка при загрузке изображения');
//       }
//     } finally {
//       setUploadingImage(false);
//     }
//   };

//   const renderField = (
//     field: string, 
//     label: string, 
//     placeholder: string = '', 
//     isTextarea: boolean = false,
//     required: boolean = false
//   ) => {
//     const hasError = !!errors[field];
    
//     return (
//       <div className="mb-4">
//         <label className="block mb-1 text-sm font-bold text-blue-800">
//           {label} {required && <span className="text-red-500">*</span>}
//         </label>
//         {isTextarea ? (
//           <textarea
//             name={field}
//             value={form[field as keyof typeof form] || ''}
//             onChange={handleChange}
//             placeholder={placeholder}
//             rows={4}
//             className={`w-full border ${hasError ? 'border-red-500' : 'border-gray-200'} px-3 py-2 rounded-lg bg-blue-50 text-blue-800 placeholder-blue-400 focus:ring-2 focus:ring-blue-600 focus:border-transparent`}
//           />
//         ) : (
//           <input
//             name={field}
//             value={form[field as keyof typeof form] || ''}
//             onChange={handleChange}
//             placeholder={placeholder}
//             className={`w-full border ${hasError ? 'border-red-500' : 'border-gray-200'} px-3 py-2 rounded-lg bg-blue-50 text-blue-800 placeholder-blue-400 focus:ring-2 focus:ring-blue-600 focus:border-transparent`}
//             type={field === 'rating' || field === 'reviews' ? 'number' : 'text'}
//             step={field === 'rating' ? '0.1' : '1'}
//             min={0}
//             max={field === 'rating' ? 5 : undefined}
//           />
//         )}
//         {hasError && (
//           <p className="mt-1 text-sm text-red-500 flex items-center">
//             <AlertCircle className="h-4 w-4 mr-1" />
//             {errors[field]}
//           </p>
//         )}
//       </div>
//     );
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 p-6">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="bg-white shadow-sm rounded-lg p-6 mb-6">
//           <div className="flex justify-between items-center mb-6">
//             <div>
//               <h1 className="text-2xl sm:text-3xl font-light text-orange-500 mb-2">
//                 <span className="font-bold">Добавление</span> Продукта
//               </h1>
//               <p className="text-blue-800 text-sm">Заполните форму для добавления нового продукта в каталог</p>
//             </div>
//             <Link
//               href="/admin/products"
//               className="flex items-center text-blue-600 hover:text-blue-800 transition-colors gap-1 font-medium"
//             >
//               <ArrowLeft className="h-4 w-4" />
//               Назад к списку
//             </Link>
//           </div>
//         </div>

//         {/* Form */}
//         <div className="bg-white shadow-sm rounded-lg p-6">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {/* Left Column */}
//             <div>
//               <h2 className="text-xl font-bold text-blue-800 mb-4 pb-2 border-b border-gray-100">
//                 Основная информация
//               </h2>
              
//               {renderField('name', 'Название продукта', 'Введите название продукта', false, true)}
//               {renderField('subtitle', 'Подзаголовок', 'Краткое описание или тип продукта')}
//               {renderField('fullTitle', 'Полное название', 'Полное название продукта для страницы товара')}
//               {renderField('description', 'Краткое описание', 'Краткое описание продукта', true)}
//               {renderField('longDescription', 'Полное описание', 'Подробное описание продукта', true)}
              
//               <div className="grid grid-cols-2 gap-4">
//                 {renderField('brandName', 'Бренд', 'Название бренда', false, true)}
//                 {renderField('category', 'Категория', 'Категория продукта', false, true)}
//               </div>
              
//               <div className="grid grid-cols-2 gap-4 mt-4">
//                 {renderField('color', 'Цвет', 'Основной цвет продукта')}
//                 {renderField('badge', 'Бейдж', 'Например: Новинка, Хит, Скидка')}
//               </div>
//             </div>
            
//             {/* Right Column */}
//             <div>
//               <h2 className="text-xl font-bold text-blue-800 mb-4 pb-2 border-b border-gray-100">
//                 Дополнительная информация
//               </h2>
              
//               {/* Image Upload */}
//               <div className="mb-4">
//                 <label className="block mb-1 text-sm font-bold text-blue-800">
//                   Изображение продукта
//                 </label>
//                 <div className={`border-2 border-dashed rounded-lg p-4 ${form.image ? 'border-green-500 bg-green-50' : 'border-gray-300 bg-gray-50'} text-center`}>
//                   {form.image ? (
//                     <div>
//                       <div className="relative h-40 w-40 mx-auto mb-3">
//                       <Image
//                           src={form.image}
//                           alt="Preview"
//                           fill
//                           className="object-contain"
//                           sizes="160px"
//                         />
//                       </div>
//                       <button
//                         type="button"
//                         onClick={() => setForm(prev => ({ ...prev, image: '' }))}
//                         className="text-red-500 hover:text-red-700 text-sm font-medium"
//                       >
//                         Удалить изображение
//                       </button>
//                     </div>
//                   ) : (
//                     <div>
//                       <Upload className="h-12 w-12 text-gray-400 mx-auto mb-2" />
//                       <p className="text-sm text-gray-500 mb-2">
//                         Перетащите изображение сюда или
//                       </p>
//                       <label className="cursor-pointer inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors text-sm font-medium">
//                         <input
//                           type="file"
//                           accept="image/*"
//                           onChange={handleImageUpload}
//                           className="hidden"
//                         />
//                         Выбрать файл
//                       </label>
//                     </div>
//                   )}
//                   {uploadingImage && (
//                     <div className="mt-2 flex justify-center">
//                       <Loader2 className="h-6 w-6 animate-spin text-blue-600" />
//                     </div>
//                   )}
//                 </div>
//               </div>
              
//               <div className="grid grid-cols-2 gap-4">
//                 {renderField('rating', 'Рейтинг', 'От 0 до 5')}
//                 {renderField('reviews', 'Количество отзывов', 'Число')}
//               </div>
              
//               {renderField('features', 'Особенности', 'Перечислите через запятую', true)}
//               {renderField('directions', 'Способы применения', 'Перечислите через запятую', true)}
//             </div>
//           </div>
          
//           {/* Form Actions */}
//           <div className="mt-8 pt-6 border-t border-gray-100 flex justify-end">
//             <Link
//               href="/admin/products"
//               className="mr-4 px-6 py-2 rounded-full border border-gray-300 text-blue-800 hover:bg-gray-100 transition-colors font-medium"
//             >
//               Отмена
//             </Link>
//             <button
//               onClick={handleSubmit}
//               disabled={isSubmitting}
//               className="inline-flex items-center bg-orange-500 text-white px-8 py-2 rounded-full hover:bg-orange-600 transition-colors font-bold gap-2 shadow-sm disabled:opacity-70"
//             >
//               {isSubmitting ? (
//                 <>
//                   <Loader2 className="h-5 w-5 animate-spin" />
//                   Сохранение...
//                 </>
//               ) : (
//                 <>
//                   <Save className="h-5 w-5" />
//                   Сохранить продукт
//                 </>
//               )}
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


// app/admin/products/new/page.tsx

'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, Upload, Star, X, Info, Save, Loader2 } from 'lucide-react';

interface ProductForm {
  name: string;
  subtitle: string;
  fullTitle: string;
  description: string;
  longDescription: string;
  image: string;
  color: string;
  brandName: string;
  category: string;
  badge: string;
  features: string;
  directions: string;
  rating: number;
  reviews: number;
}

const initialForm: ProductForm = {
  name: '',
  subtitle: '',
  fullTitle: '',
  description: '',
  longDescription: '',
  image: '',
  color: '#3B82F6',
  brandName: '',
  category: '',
  badge: '',
  features: '',
  directions: '',
  rating: 0,
  reviews: 0
};

export default function AddProductPage() {
  const router = useRouter();
  const [form, setForm] = useState<ProductForm>(initialForm);
  const [loading, setLoading] = useState(false);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof ProductForm, string>>>({});
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [showImagePreview, setShowImagePreview] = useState(false);
  const [availableBrands, setAvailableBrands] = useState<string[]>([]);
  const [availableCategories, setAvailableCategories] = useState<string[]>([]);
  const [customBrand, setCustomBrand] = useState('');
const [customCategory, setCustomCategory] = useState('');
const [isCustomBrand, setIsCustomBrand] = useState(false);
const [isCustomCategory, setIsCustomCategory] = useState(false);



  useEffect(() => {
    const fetchMetadata = async () => {
      try {
        // Fetch brands and categories for dropdowns
        const res = await fetch('/api/admin/metadata');
        if (res.ok) {
          const data = await res.json();
          setAvailableBrands(data.brands || []);
          setAvailableCategories(data.categories || []);
        }
      } catch (error) {
        console.error('Failed to load metadata:', error);
      } finally {
        setLoading(false);
      }
    };

    setLoading(true);
    fetchMetadata();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    
    // Clear error for this field if it exists
    if (errors[name as keyof ProductForm]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name as keyof ProductForm];
        return newErrors;
      });
    }
  };

  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const numValue = value === '' ? 0 : parseFloat(value);
    setForm((prev) => ({ ...prev, [name]: numValue }));
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof ProductForm, string>> = {};
    
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.subtitle.trim()) newErrors.subtitle = 'Subtitle is required';
    if (!form.description.trim()) newErrors.description = 'Description is required';
    if (!form.brandName.trim()) newErrors.brandName = 'Brand is required';
    if (!form.category.trim()) newErrors.category = 'Category is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    
    try {
      const submissionData = {
        ...form,
        features: form.features.split(',').map(f => f.trim()).filter(Boolean),
        directions: form.directions.split(',').map(d => d.trim()).filter(Boolean),
      };

      const res = await fetch('/api/admin/products/new', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(submissionData),
      });

      if (!res.ok) throw new Error('Failed to save product');
      
      router.push('/admin/products');
      router.refresh();
    } catch (error) {
      console.error(error);
      alert('Failed to save product. Please try again.');
    } finally {
      console.log('Finished saving product')
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    try {
      setUploadingImage(true);
      
      // Create a temporary preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(file);
      
      const formData = new FormData();
      formData.append('file', file);
      
      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });
      
      if (!res.ok) throw new Error('Upload failed');
      
      const data = await res.json();
      if (data.url) {
        setForm(prev => ({ ...prev, image: data.url }));
        setPreviewImage(data.url);
      } else {
        throw new Error('No URL returned');
      }
    } catch (error) {
      console.error('Upload failed:', error);
      alert('Failed to upload image. Please try again.');
    } finally {
      setUploadingImage(false);
    }
  };

  const renderFieldError = (fieldName: keyof ProductForm) => {
    if (!errors[fieldName]) return null;
    
    return (
      <p className="mt-1 text-sm text-red-500 flex items-center">
        <Info className="h-3 w-3 mr-1" />
        {errors[fieldName]}
      </p>
    );
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <Loader2 className="h-12 w-12 animate-spin text-blue-600 mx-auto mb-4" />
          <p className="text-xl text-blue-800 font-medium">
            Preparing form...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center mb-2">
                <Link
                  href="/admin/products"
                  className="mr-3 text-blue-600 hover:text-blue-800 transition-colors"
                >
                  <ChevronLeft className="h-5 w-5" />
                </Link>
                <h1 className="text-2xl sm:text-3xl font-light text-orange-500">
                  Новый <span className="font-bold">Продукт</span>
                </h1>
              </div>
              <p className="text-blue-800 text-sm">
                Заполните форму для добавления нового продукта в каталог
              </p>
            </div>
            
            <div className="flex space-x-3">
              <Link
                href="/admin/products"
                className="px-4 py-2 border border-gray-300 rounded-full text-blue-800 font-medium hover:bg-blue-50 transition-colors flex items-center"
              >
                <X className="h-4 w-4 mr-1" />
                Отмена
              </Link>
              <button
                onClick={handleSubmit}
                className={`px-6 py-2 rounded-full text-white font-medium flex items-center bg-orange-500 hover:bg-orange-600 transition-colors`}
              >
                  <>
                    <Save className="h-4 w-4 mr-2" />
                    Создать
                  </>
              </button>
            </div>
          </div>
          
          {Object.keys(errors).length > 0 && (
            <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-md text-red-600">
              <p className="font-medium flex items-center">
                <Info className="h-4 w-4 mr-2" />
                Пожалуйста, исправьте следующие ошибки:
              </p>
              <ul className="mt-2 pl-6 list-disc">
                {Object.entries(errors).map(([key, value]) => (
                  <li key={key}>{value}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
        
        {/* Form */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left column - Main details */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
              <h2 className="text-xl font-bold text-blue-800 mb-4">Основные данные</h2>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-1 text-sm font-medium text-blue-800">
                    Имя продукта*
                  </label>
                  <input
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                      errors.name ? 'border-red-300 bg-red-50' : 'border-gray-300'
                    }`}
                  />
                  {renderFieldError('name')}
                </div>
                
                <div>
                  <label htmlFor="subtitle" className="block mb-1 text-sm font-medium text-blue-800">
                    Подзаголовок*
                  </label>
                  <input
                    id="subtitle"
                    name="subtitle"
                    value={form.subtitle}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                      errors.subtitle ? 'border-red-300 bg-red-50' : 'border-gray-300'
                    }`}
                  />
                  {renderFieldError('subtitle')}
                </div>
                
                <div>
                  <label htmlFor="fullTitle" className="block mb-1 text-sm font-medium text-blue-800">
                    Полное название
                  </label>
                  <input
                    id="fullTitle"
                    name="fullTitle"
                    value={form.fullTitle}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="description" className="block mb-1 text-sm font-medium text-blue-800">
                    Краткое описание*
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={form.description}
                    onChange={handleChange}
                    rows={3}
                    className={`w-full px-3 py-2 border rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                      errors.description ? 'border-red-300 bg-red-50' : 'border-gray-300'
                    }`}
                  />
                  {renderFieldError('description')}
                  <p className="mt-1 text-xs text-gray-500">
                    Краткое описание продукта для отображения в каталоге
                  </p>
                </div>
                
                <div>
                  <label htmlFor="longDescription" className="block mb-1 text-sm font-medium text-blue-800">
                    Полное описание
                  </label>
                  <textarea
                    id="longDescription"
                    name="longDescription"
                    value={form.longDescription}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  <p className="mt-1 text-xs text-gray-500">
                    Подробное описание продукта для страницы товара
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
              <h2 className="text-xl font-bold text-blue-800 mb-4">Категоризация</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="brandName" className="block mb-1 text-sm font-medium text-blue-800">
                    Бренд*
                  </label>
                  <select
  id="brandName"
  name="brandName"
  value={isCustomBrand ? 'other' : form.brandName}
  onChange={(e) => {
    const value = e.target.value;
    if (value === 'other') {
      setIsCustomBrand(true);
      setForm(prev => ({ ...prev, brandName: '' }));
    } else {
      setIsCustomBrand(false);
      setCustomBrand('');
      setForm(prev => ({ ...prev, brandName: value }));
    }
  }}
                    className={`w-full px-3 py-2 border rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                      errors.brandName ? 'border-red-300 bg-red-50' : 'border-gray-300'
                    }`}
                  >
                     <option value="">Выберите бренд</option>
                      {availableBrands.map(brand => (
                        <option key={brand} value={brand}>{brand}</option>
                      ))}
                      <option value="other">Другой (введите ниже)</option>
                  </select>
                  {isCustomBrand && (
  <input
    placeholder="Введите название бренда"
    className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-lg"
    value={customBrand}
    onChange={(e) => {
      setCustomBrand(e.target.value);
      setForm(prev => ({ ...prev, brandName: e.target.value }));
    }}
  />
)}
                  {renderFieldError('brandName')}
                </div>
                
                <div>
                  <label htmlFor="category" className="block mb-1 text-sm font-medium text-blue-800">
                    Категория*
                  </label>
                  <select
  id="category"
  name="category"
  value={isCustomCategory ? 'other' : form.category}
  onChange={(e) => {
    const value = e.target.value;
    if (value === 'other') {
      setIsCustomCategory(true);
      setForm(prev => ({ ...prev, category: '' }));
    } else {
      setIsCustomCategory(false);
      setCustomCategory('');
      setForm(prev => ({ ...prev, category: value }));
    }
  }}
                    className={`w-full px-3 py-2 border rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                      errors.category ? 'border-red-300 bg-red-50' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Выберите категорию</option>
                    {availableCategories.map(category => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                    <option value="other">Другая (введите ниже)</option>
                  </select>
                  {isCustomCategory && (
  <input
    placeholder="Введите название категории"
    className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-lg"
    value={customCategory}
    onChange={(e) => {
      setCustomCategory(e.target.value);
      setForm(prev => ({ ...prev, category: e.target.value }));
    }}
  />
)}
                  {renderFieldError('category')}
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="color" className="block mb-1 text-sm font-medium text-blue-800">
                    Цвет бренда
                  </label>
                  <div className="flex items-center space-x-2">
                    <input
                      type="color"
                      id="color"
                      name="color"
                      value={form.color || '#3B82F6'}
                      onChange={handleChange}
                      className="h-10 w-10 border border-gray-300 rounded p-0.5"
                    />
                    <input
                      type="text"
                      value={form.color || '#3B82F6'}
                      onChange={handleChange}
                      name="color"
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg"
                      placeholder="#000000"
                    />
                  </div>
                  <p className="mt-1 text-xs text-gray-500">
                    HEX-код цвета бренда (например, #FF5733)
                  </p>
                </div>
                
                <div>
                  <label htmlFor="badge" className="block mb-1 text-sm font-medium text-blue-800">
                    Значок (необязательно)
                  </label>
                  <input
                    id="badge"
                    name="badge"
                    value={form.badge}
                    onChange={handleChange}
                    placeholder="Например: Новинка, Хит продаж"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  <p className="mt-1 text-xs text-gray-500">
                    Отображается как лента на изображении продукта
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="rating" className="block mb-1 text-sm font-medium text-blue-800">
                    Рейтинг (0-5)
                  </label>
                  <div className="flex items-center">
                    <input
                      type="number"
                      id="rating"
                      name="rating"
                      min="0"
                      max="5"
                      step="0.1"
                      value={form.rating || ''}
                      onChange={handleNumberChange}
                      className="w-24 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                    <div className="ml-3 flex text-yellow-400">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className="w-5 h-5"
                          fill={form.rating >= star ? 'currentColor' : 'none'}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="reviews" className="block mb-1 text-sm font-medium text-blue-800">
                    Количество отзывов
                  </label>
                  <input
                    type="number"
                    id="reviews"
                    name="reviews"
                    min="0"
                    value={form.reviews || ''}
                    onChange={handleNumberChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
              <h2 className="text-xl font-bold text-blue-800 mb-4">Дополнительная информация</h2>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="features" className="block mb-1 text-sm font-medium text-blue-800">
                    Особенности (через запятую)
                  </label>
                  <textarea
                    id="features"
                    name="features"
                    value={form.features}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Например: Гипоаллергенный, Без запаха, Для чувствительной кожи"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="directions" className="block mb-1 text-sm font-medium text-blue-800">
                    Способ применения (через запятую)
                  </label>
                  <textarea
                    id="directions"
                    name="directions"
                    value={form.directions}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Например: Нанести на влажную кожу, Смыть теплой водой"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
            </div>
          </div>
          
          {/* Right column - Image upload */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 sticky top-6">
              <h2 className="text-xl font-bold text-blue-800 mb-4">Изображение продукта</h2>
              
              <div className="space-y-4">
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                  {uploadingImage ? (
                    <div className="py-8 flex flex-col items-center">
                      <Loader2 className="w-8 h-8 text-blue-500 animate-spin mb-2" />
                      <p className="text-sm text-gray-500">Загрузка изображения...</p>
                    </div>
                  ) : previewImage ? (
                    <div className="relative">
                      <div 
                        className="relative w-full h-48 sm:h-64 bg-gray-100 rounded-md overflow-hidden cursor-pointer"
                        onClick={() => setShowImagePreview(true)}
                      >
                        <div className="relative w-full h-full">
                        <Image
                            src={previewImage}
                            alt="Product preview"
                            fill
                            className="object-contain"
                            sizes="(max-width: 768px) 100vw, 33vw"
                        />
                        </div>
                      </div>
                      <button
                        onClick={() => {
                          setPreviewImage(null);
                          setForm(prev => ({ ...prev, image: '' }));
                        }}
                        className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 shadow-sm hover:bg-red-600 transition-colors"
                        type="button"
                      >
                        <X className="w-4 h-4" />
                      </button>
                      
                      <div className="mt-2 flex justify-center">
                        <label className="cursor-pointer text-blue-600 hover:text-blue-800 transition-colors text-sm font-medium">
                          Заменить изображение
                          <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageUpload}
                            className="hidden"
                          />
                        </label>
                      </div>
                    </div>
                  ) : (
                    <label className="w-full h-40 flex flex-col items-center justify-center cursor-pointer">
                      <Upload className="w-10 h-10 text-blue-500 mb-2" />
                      <span className="text-sm font-medium text-blue-600">
                        Нажмите для загрузки изображения
                      </span>
                      <span className="text-xs text-gray-500 mt-1">SVG, PNG, JPG или GIF</span>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                      />
                    </label>
                  )}
                </div>
                
                <div>
                  <label htmlFor="imageUrl" className="block mb-1 text-sm font-medium text-blue-800">
                    URL изображения
                  </label>
                  <div className="flex">
                    <input
                      type="text"
                      id="imageUrl"
                      name="image"
                      value={form.image}
                      onChange={handleChange}
                      placeholder="https://example.com/image.jpg"
                      className="w-full px-3 py-2 border border-gray-300 rounded-l-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                    <button
                      type="button"
                      onClick={() => {
                        if (form.image) {
                          setPreviewImage(form.image);
                        }
                      }}
                      disabled={!form.image}
                      className="px-4 py-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600 transition-colors disabled:bg-gray-300"
                    >
                      Загрузить
                    </button>
                  </div>
                  <p className="mt-1 text-xs text-gray-500">
                    Вы также можете указать прямую ссылку на изображение
                  </p>
                </div>
              </div>
              
              <div className="mt-8 pt-4 border-t border-gray-200">
                <button
                  onClick={handleSubmit}
                  className={`w-full py-3 rounded-full text-white font-bold flex items-center justify-center bg-orange-500 hover:bg-orange-600 transition-colors`}
                >
                  <>
                    <Save className="h-5 w-5 mr-2" />
                    Создать продукт
                  </>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Image Preview Modal */}
      {showImagePreview && previewImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-4xl w-full max-h-screen">
          <button
              onClick={() => setShowImagePreview(false)}
              className="absolute -top-10 right-0 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
              aria-label="Close preview"
            >
              <X className="w-5 h-5 text-gray-700" />
            </button>
            <div className="bg-white rounded-lg overflow-hidden max-h-[80vh]">
              <div className="relative w-full h-full flex items-center justify-center p-4">
              <div className="relative w-full h-[70vh]">
                <Image
                    src={previewImage}
                    alt="Product"
                    fill
                    className="object-contain"
                    sizes="100vw"
                />
                </div>
              </div>
              <div className="bg-white p-4 border-t border-gray-200">
                <p className="text-sm text-gray-600 truncate">
                  {form.image || 'Product image preview'}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Add an image preview component that can be reused
function _ImagePreview({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  if (!src) return null;
  
  return (
    <div className={`relative bg-gray-50 rounded-lg overflow-hidden ${className}`}>
      <div className="aspect-square w-full">
        <Image 
          src={src} 
          alt={alt || "Preview"} 
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
}