import Image from 'next/image';
import PaymentOptions from '@/components/PaymentOptions';

import page1 from '@/public/assets/aistudio/1_7d5c3129.png';
import page2 from '@/public/assets/aistudio/2_a85c923a.png';
import page3 from '@/public/assets/aistudio/3_efe65dd3.png';
import page4 from '@/public/assets/aistudio/4_4bcb3f48.png';
import page5 from '@/public/assets/aistudio/5_2f261a57.png';
import page6 from '@/public/assets/aistudio/6_2ea14926.png';
import page7 from '@/public/assets/aistudio/7_7a353c99.png';

const GUIDE_PAGES = [
  {
    src: page1,
    alt: 'الدليل العملي الشامل لتأسيس وتسيير الشركات في المغرب - ماذا ستتعلم في هذا الدليل؟',
    priority: true,
  },
  {
    src: page2,
    alt: 'لماذا هذا الدليل؟ مزايا حقيقية تصنع الفرق في رحلتك الريادية',
    priority: false,
  },
  {
    src: page3,
    alt: 'الأسئلة الشائعة حول الدليل العملي الشامل لتأسيس وتسيير الشركات في المغرب',
    priority: false,
  },
  {
    src: page4,
    alt: 'كتاب إلكتروني بصيغة PDF - محتوى شامل يغطي أهم الجوانب',
    priority: false,
  },
  {
    src: page5,
    alt: 'ماذا يقول عملاؤنا؟ آراء وتقييمات رواد الأعمال',
    priority: false,
  },
  {
    src: page6,
    alt: 'ابدأ رحلتك لتأسيس شركتك بالمغرب بـ 3 خطوات بسيطة',
    priority: false,
  },
  {
    src: page7,
    alt: 'أسس شركتك بالمغرب دون أخطاء - مضمون لك - احصل على نسختك الآن',
    priority: false,
  },
] as const;

export default function HomePage() {
  return (
    <main className="min-h-screen w-full bg-[#F6F1E7] sm:py-8 md:py-10">
      <div className="mx-auto w-full max-w-[860px] sm:px-6">
        <div className="flex flex-col gap-2 sm:gap-5 md:gap-6">
          {GUIDE_PAGES.map((page, index) => (
            <div
              key={index}
              className="w-full overflow-hidden bg-[#FAF6EE] sm:rounded-2xl sm:shadow-[0_10px_32px_rgba(14,74,54,0.07)]"
            >
              <Image
                src={page.src}
                alt={page.alt}
                priority={page.priority}
                sizes="(max-width: 860px) 100vw, 860px"
                referrerPolicy="no-referrer"
                className="block h-auto w-full"
              />
            </div>
          ))}
        </div>

        <PaymentOptions />
      </div>
    </main>
  );
}
