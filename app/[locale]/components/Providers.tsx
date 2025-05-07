'use client';

import { NextIntlClientProvider } from 'next-intl';
import { ReactNode } from 'react';
import { Messages } from '../../types/messages';

export default function Providers({
  children,
  messages,
  locale
}: {
  children: ReactNode;
  messages: Messages;
  locale: string;
}) {
  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      {children}
    </NextIntlClientProvider>
  );
}
