import type {Metadata} from 'next';
import {Cairo, Tajawal} from 'next/font/google';
import './globals.css';

const cairo = Cairo({
  subsets: ['arabic', 'latin'],
  weight: ['600', '700'],
  variable: '--font-cairo',
  display: 'swap',
});

const tajawal = Tajawal({
  subsets: ['arabic', 'latin'],
  weight: ['400', '500', '700'],
  variable: '--font-tajawal',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'الدليل العملي الشامل لتأسيس وتسيير الشركات في المغرب',
  description:
    'دليلك خطوة بخطوة نحو نجاح مشروعك - الدليل العملي الشامل لتأسيس وتسيير الشركات في المغرب بصيغة PDF.',
  openGraph: {
    title: 'الدليل العملي الشامل لتأسيس وتسيير الشركات في المغرب',
    description:
      'دليلك خطوة بخطوة نحو نجاح مشروعك - الدليل العملي الشامل لتأسيس وتسيير الشركات في المغرب بصيغة PDF.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'الدليل العملي الشامل لتأسيس وتسيير الشركات في المغرب',
    description:
      'دليلك خطوة بخطوة نحو نجاح مشروعك - الدليل العملي الشامل لتأسيس وتسيير الشركات في المغرب بصيغة PDF.',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="ar" dir="rtl" className={`${cairo.variable} ${tajawal.variable}`}>
      <body
        className="min-h-screen bg-[#F6F1E7] text-[#14261E] antialiased selection:bg-[#0E4A36] selection:text-white"
        style={{fontFamily: 'var(--font-tajawal), sans-serif'}}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
