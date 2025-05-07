// import type { ReactNode } from "react"
// import { Inter } from "next/font/google"
// import { NextIntlClientProvider } from 'next-intl';
// import { notFound } from "next/navigation";
// import "../globals.css"
// import Header from "./components/header"
// import Footer from "./components/footer"

// const inter = Inter({ subsets: ["latin"] })

// type LayoutProps = {
//   children: ReactNode;
//   params: { locale: string };
// }

// export default async function RootLayout({ children, params }: LayoutProps) {
//   try {
//     const locale = await Promise.resolve(params.locale);
//     if (!locale) {
//       notFound();
//     }

//     const messages = (await import(`../../messages/${locale}.json`)).default;

//     if (!messages) {
//       notFound();
//     }

//     return (
//       <html lang={locale} className="dark">
//         <body className={inter.className}>
//           <div className="flex min-h-screen flex-col">
//             <NextIntlClientProvider locale={locale} messages={messages}>
//               <Header />
//               <main className="flex-grow">{children}</main>
//               <Footer />
//             </NextIntlClientProvider>
//           </div>
//         </body>
//       </html>
//     );
//   } catch (error) {
//     notFound();
//   }
// }



import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../globals.css';
import Header from './components/header';
import Footer from './components/footer';
import Providers from './components/Providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Altyn Gaya',
  description: 'Чистящие средства с заботой',
};

// Define the correct type for LayoutProps to match Next.js
type LayoutProps = {
  children: React.ReactNode;
  params: {
    locale: string; // Locale should be passed as part of params
  };
};

export default async function RootLayout({
  children,
  params,
}: LayoutProps) {
  // Destructure the locale from params
  const { locale } = params;

  // Dynamically import the locale-specific messages JSON file
  const messages = await import(`@/messages/${locale}.json`);

  return (
    <html lang={locale} className="dark">
      <body className={inter.className}>
        <Providers messages={messages.default} locale={locale}>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
