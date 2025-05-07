'use client';

import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();

  const changeLanguage = (newLocale: string) => {
    // Replace the current pathname with the new locale
    const currentPath = window.location.pathname;
    const newPath = currentPath.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPath);
  };

  return (
    <div className="flex gap-2">
      <button 
        onClick={() => changeLanguage('ru')} 
        className={`${locale === 'ru' ? 'font-bold' : ''}`}
      >
        RU
      </button>
      <button 
        onClick={() => changeLanguage('en')} 
        className={`${locale === 'en' ? 'font-bold' : ''}`}
      >
        EN
      </button>
      <button 
        onClick={() => changeLanguage('tr')} 
        className={`${locale === 'tr' ? 'font-bold' : ''}`}
      >
        TR
      </button>
    </div>
  );
}