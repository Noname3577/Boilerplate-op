import '@/styles/global.css';

import type { Metadata } from 'next';
import { NextIntlClientProvider, useMessages } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';

import StoreProvider from '@/libs/store/StoreProvider';
import SmoothScrolling from '@/openw/component_w/SmoothScrolling/SmoothScrolling';
// import { DemoBadge } from '@/components/DemoBadge';
import { AppConfig } from '@/utils/AppConfig';

export const metadata: Metadata = {
  icons: [
    {
      rel: 'icon',
      url: '/favicon.ico',
    },
  ],
  openGraph: {
    title: 'Pantip - Learn, share & Fun',
    description: `Pantip.com คือเว็บสื่อสังคมออนไลน์ของไทย 
    ที่มีผู้ใช้งานมากกว่า 4 ล้านคนต่อวัน ในรูปแบบเว็บบอร์ดที่สามารถเข้ามาอ่านเรื่องราวรวมทั้งพูดคุยเรื่องต่างๆ 
    โดยมีเนื้อหาครอบคลุมทุกเรื่อง มีการแบ่งหมวดหมู่โดยใช้ห้อง 
    และแท็กในการแยกและจัดกลุ่มเนื้อหาเพื่อให้ตรงกับความสนใจของผู้ใช้งาน `,
    images: [
      {
        url: '/logo-pantip.png',
        width: 1200,
        height: 630,
        alt: 'full_site',
      },
    ],
    siteName: 'Pantip',
    type: 'website',
  },
};

export function generateStaticParams() {
  return AppConfig.locales.map(locale => ({ locale }));
}

export default function RootLayout(props: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  unstable_setRequestLocale(props.params.locale);

  // Using internationalization in Client Components
  const messages = useMessages();

  return (
    <html lang={props.params.locale}>
      <body>
        <NextIntlClientProvider
          locale={props.params.locale}
          messages={messages}
        >
          <StoreProvider>
            <SmoothScrolling>{props.children}</SmoothScrolling>
          </StoreProvider>

        </NextIntlClientProvider>
      </body>
    </html>
  );
}
