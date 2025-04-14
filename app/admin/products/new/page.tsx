// app/admin/products/new/page.tsx

// 'use client';
// import { useState } from 'react';
// import { useRouter } from 'next/navigation';

// export default function AddProductPage() {
//   const router = useRouter();
//   const [uploadingImage, setUploadingImage] = useState(false);
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
//   };

// //   const handleSubmit = async () => {
// //     const body = {
// //       ...form,
// //       features: form.features.split(',').map(f => f.trim()),
// //       directions: form.directions.split(',').map(d => d.trim()),
// //     };

// //     const res = await fetch('/api/admin/products', {
// //       method: 'POST',
// //       headers: { 'Content-Type': 'application/json' },
// //       body: JSON.stringify(body),
// //     });

// //     if (res.ok) {
// //       router.push('/admin/products');
// //     } else {
// //       alert('Failed to create product');
// //     }
// //   };


// const handleSubmit = async () => {
//     const body = {
//       ...form,
//       rating: Number(form.rating),
//       reviews: Number(form.reviews),
//       features: form.features.split(',').map(f => f.trim()),
//       directions: form.directions.split(',').map(d => d.trim()),
//     };
  
//     const res = await fetch('/api/admin/products/', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(body),
//     });
  
//     if (res.ok) {
//       router.push('/admin/products');
//     } else {
//       alert('Failed to create product');
//     }
//   };
  


//   return (
//     <div className="p-6 max-w-2xl mx-auto">
//       <h1 className="text-3xl font-bold mb-4">Add Product</h1>

//       <div className="space-y-4">
//         {['name', 'subtitle', 'fullTitle', 'description', 'longDescription', 'image', 'color', 'brandName', 'category', 'badge'].map(field => (
//           field === 'image' ? (
//             <div key={field}>
//               <label className="block mb-1 text-sm font-medium">Product Image</label>
//               <input
//                 type="file"
//                 accept="image/*"
//                 onChange={async (e) => {
//                     const file = e.target.files?.[0];
//                     if (!file) return;
                    
//                     setUploadingImage(true);
//                     const formData = new FormData();
//                     formData.append('file', file);
                  
//                     const res = await fetch('/api/upload', {
//                       method: 'POST',
//                       body: formData,
//                     });
                  
//                     const data = await res.json();
//                     setUploadingImage(false);
                  
//                     if (data.url) {
//                       setForm((prev: any) => ({ ...prev, image: data.url }));
//                     } else {
//                       alert('Failed to upload image');
//                     }
//                   }}
//                 className="w-full border px-3 py-2 rounded"
//               />
//               {uploadingImage && (
//                 <div className="mt-2">
//                   <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-gray-900"></div>
//                 </div>
//               )}
//               {form.image && (
//                 <img
//                   src={form.image}
//                   alt="Preview"
//                   className="w-32 h-32 mt-2 object-contain border"
//                 />
//               )}
//             </div>
//           ) : (
//             <div key={field}>
//               <label className="block mb-1 text-sm font-medium capitalize">{field}</label>
//               <input
//                 name={field}
//                 value={(form as any)[field] || ''}
//                 onChange={handleChange}
//                 className="w-full border px-3 py-2 rounded"
//               />
//             </div>
//           )
//         ))}
//         <div>
//           <label className="block mb-1 text-sm font-medium">Features (comma separated)</label>
//           <input
//             name="features"
//             value={(form as any).features}
//             onChange={handleChange}
//             className="w-full border px-3 py-2 rounded"
//           />
//         </div>

//         <div>
//           <label className="block mb-1 text-sm font-medium">Directions (comma separated)</label>
//           <input
//             name="directions"
//             value={form.directions}
//             onChange={handleChange}
//             className="w-full border px-3 py-2 rounded"
//           />
//         </div>

//         <div className="flex gap-4">
//           <div>
//             <label className="block mb-1 text-sm font-medium">Rating</label>
//             <input
//               type="number"
//               name="rating"
//               value={form.rating}
//               onChange={handleChange}
//               className="w-full border px-3 py-2 rounded"
//             />
//           </div>
//           <div>
//             <label className="block mb-1 text-sm font-medium">Reviews</label>
//             <input
//               type="number"
//               name="reviews"
//               value={form.reviews}
//               onChange={handleChange}
//               className="w-full border px-3 py-2 rounded"
//             />
//           </div>
//         </div>

//         <button
//           onClick={handleSubmit}
//           className="mt-4 bg-blue-600 text-white px-6 py-2 rounded"
//         >
//           Save Product
//         </button>
//       </div>
//     </div>
//   );
// }


'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { 
  ArrowLeft, 
  Upload, 
  Save, 
  Loader2, 
  AlertCircle 
} from 'lucide-react';
import Image from 'next/image';

export default function AddProductPage() {
  const router = useRouter();
  const [uploadingImage, setUploadingImage] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({
    name: '',
    subtitle: '',
    fullTitle: '',
    description: '',
    longDescription: '',
    image: '',
    color: '',
    brandName: '',
    category: '',
    features: '',
    directions: '',
    rating: 0,
    reviews: 0,
    badge: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    
    // Clear error for this field when user edits it
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = {...prev};
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!form.name.trim()) newErrors.name = 'Название продукта обязательно';
    if (!form.brandName.trim()) newErrors.brandName = 'Бренд обязателен';
    if (!form.category.trim()) newErrors.category = 'Категория обязательна';
    
    if (form.rating && (isNaN(Number(form.rating)) || Number(form.rating) < 0 || Number(form.rating) > 5)) {
      newErrors.rating = 'Рейтинг должен быть числом от 0 до 5';
    }
    
    if (form.reviews && (isNaN(Number(form.reviews)) || Number(form.reviews) < 0)) {
      newErrors.reviews = 'Количество отзывов должно быть положительным числом';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      const body = {
        ...form,
        rating: Number(form.rating),
        reviews: Number(form.reviews),
        features: form.features ? form.features.split(',').map(f => f.trim()).filter(Boolean) : [],
        directions: form.directions ? form.directions.split(',').map(d => d.trim()).filter(Boolean) : [],
      };
      
      const res = await fetch('/api/admin/products/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      
      if (res.ok) {
        router.push('/admin/products');
      } else {
        const data = await res.json();
        throw new Error(data.message || 'Ошибка при создании продукта');
      }
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      } else {
        alert('Ошибка при создании продукта');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    setUploadingImage(true);
    
    try {
      const formData = new FormData();
      formData.append('file', file);
      
      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });
      
      const data = await res.json();
      
      if (data.url) {
        setForm(prev => ({ ...prev, image: data.url }));
      } else {
        throw new Error(data.message || 'Ошибка при загрузке изображения');
      }
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      } else {
        alert('Ошибка при загрузке изображения');
      }
    } finally {
      setUploadingImage(false);
    }
  };

  const renderField = (
    field: string, 
    label: string, 
    placeholder: string = '', 
    isTextarea: boolean = false,
    required: boolean = false
  ) => {
    const hasError = !!errors[field];
    
    return (
      <div className="mb-4">
        <label className="block mb-1 text-sm font-bold text-blue-800">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
        {isTextarea ? (
          <textarea
            name={field}
            value={form[field as keyof typeof form] || ''}
            onChange={handleChange}
            placeholder={placeholder}
            rows={4}
            className={`w-full border ${hasError ? 'border-red-500' : 'border-gray-200'} px-3 py-2 rounded-lg bg-blue-50 text-blue-800 placeholder-blue-400 focus:ring-2 focus:ring-blue-600 focus:border-transparent`}
          />
        ) : (
          <input
            name={field}
            value={form[field as keyof typeof form] || ''}
            onChange={handleChange}
            placeholder={placeholder}
            className={`w-full border ${hasError ? 'border-red-500' : 'border-gray-200'} px-3 py-2 rounded-lg bg-blue-50 text-blue-800 placeholder-blue-400 focus:ring-2 focus:ring-blue-600 focus:border-transparent`}
            type={field === 'rating' || field === 'reviews' ? 'number' : 'text'}
            step={field === 'rating' ? '0.1' : '1'}
            min={0}
            max={field === 'rating' ? 5 : undefined}
          />
        )}
        {hasError && (
          <p className="mt-1 text-sm text-red-500 flex items-center">
            <AlertCircle className="h-4 w-4 mr-1" />
            {errors[field]}
          </p>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white shadow-sm rounded-lg p-6 mb-6">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-2xl sm:text-3xl font-light text-orange-500 mb-2">
                <span className="font-bold">Добавление</span> Продукта
              </h1>
              <p className="text-blue-800 text-sm">Заполните форму для добавления нового продукта в каталог</p>
            </div>
            <Link
              href="/admin/products"
              className="flex items-center text-blue-600 hover:text-blue-800 transition-colors gap-1 font-medium"
            >
              <ArrowLeft className="h-4 w-4" />
              Назад к списку
            </Link>
          </div>
        </div>

        {/* Form */}
        <div className="bg-white shadow-sm rounded-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Column */}
            <div>
              <h2 className="text-xl font-bold text-blue-800 mb-4 pb-2 border-b border-gray-100">
                Основная информация
              </h2>
              
              {renderField('name', 'Название продукта', 'Введите название продукта', false, true)}
              {renderField('subtitle', 'Подзаголовок', 'Краткое описание или тип продукта')}
              {renderField('fullTitle', 'Полное название', 'Полное название продукта для страницы товара')}
              {renderField('description', 'Краткое описание', 'Краткое описание продукта', true)}
              {renderField('longDescription', 'Полное описание', 'Подробное описание продукта', true)}
              
              <div className="grid grid-cols-2 gap-4">
                {renderField('brandName', 'Бренд', 'Название бренда', false, true)}
                {renderField('category', 'Категория', 'Категория продукта', false, true)}
              </div>
              
              <div className="grid grid-cols-2 gap-4 mt-4">
                {renderField('color', 'Цвет', 'Основной цвет продукта')}
                {renderField('badge', 'Бейдж', 'Например: Новинка, Хит, Скидка')}
              </div>
            </div>
            
            {/* Right Column */}
            <div>
              <h2 className="text-xl font-bold text-blue-800 mb-4 pb-2 border-b border-gray-100">
                Дополнительная информация
              </h2>
              
              {/* Image Upload */}
              <div className="mb-4">
                <label className="block mb-1 text-sm font-bold text-blue-800">
                  Изображение продукта
                </label>
                <div className={`border-2 border-dashed rounded-lg p-4 ${form.image ? 'border-green-500 bg-green-50' : 'border-gray-300 bg-gray-50'} text-center`}>
                  {form.image ? (
                    <div>
                      <div className="relative h-40 w-40 mx-auto mb-3">
                      <Image
                          src={form.image}
                          alt="Preview"
                          fill
                          className="object-contain"
                          sizes="160px"
                        />
                      </div>
                      <button
                        type="button"
                        onClick={() => setForm(prev => ({ ...prev, image: '' }))}
                        className="text-red-500 hover:text-red-700 text-sm font-medium"
                      >
                        Удалить изображение
                      </button>
                    </div>
                  ) : (
                    <div>
                      <Upload className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                      <p className="text-sm text-gray-500 mb-2">
                        Перетащите изображение сюда или
                      </p>
                      <label className="cursor-pointer inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors text-sm font-medium">
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleImageUpload}
                          className="hidden"
                        />
                        Выбрать файл
                      </label>
                    </div>
                  )}
                  {uploadingImage && (
                    <div className="mt-2 flex justify-center">
                      <Loader2 className="h-6 w-6 animate-spin text-blue-600" />
                    </div>
                  )}
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {renderField('rating', 'Рейтинг', 'От 0 до 5')}
                {renderField('reviews', 'Количество отзывов', 'Число')}
              </div>
              
              {renderField('features', 'Особенности', 'Перечислите через запятую', true)}
              {renderField('directions', 'Способы применения', 'Перечислите через запятую', true)}
            </div>
          </div>
          
          {/* Form Actions */}
          <div className="mt-8 pt-6 border-t border-gray-100 flex justify-end">
            <Link
              href="/admin/products"
              className="mr-4 px-6 py-2 rounded-full border border-gray-300 text-blue-800 hover:bg-gray-100 transition-colors font-medium"
            >
              Отмена
            </Link>
            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="inline-flex items-center bg-orange-500 text-white px-8 py-2 rounded-full hover:bg-orange-600 transition-colors font-bold gap-2 shadow-sm disabled:opacity-70"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  Сохранение...
                </>
              ) : (
                <>
                  <Save className="h-5 w-5" />
                  Сохранить продукт
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}