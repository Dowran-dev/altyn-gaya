import {getRequestConfig} from 'next-intl/server';
import {notFound} from 'next/navigation';

// Specify the messages directory path
const MESSAGES_DIRECTORY = '../messages';

export default getRequestConfig(async ({locale}) => {
  // Validate that the incoming `locale` parameter is valid
  if (!['en', 'ru', 'tr'].includes(locale as any)) notFound();
 
  return {
    locale: locale as any,
    messages: (await import(`${MESSAGES_DIRECTORY}/${locale}.json`)).default,
    timeZone: 'Asia/Ashgabat'
  };
});