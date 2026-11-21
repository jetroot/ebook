'use client';

import {useState} from 'react';
import {MotionConfig, motion} from 'motion/react';
import {Check, Copy, CreditCard, ExternalLink, MessageCircle} from 'lucide-react';

const GUMROAD_URL = 'https://ellaweb.gumroad.com/l/startup';
const WHATSAPP_NUMBER_INTL = '212601792116';
const WHATSAPP_NUMBER_DISPLAY = '+212 6 01 79 21 16';
const WHATSAPP_NUMBER_LOCAL = '06 01 79 21 16';
const WHATSAPP_PREFILL_TEXT =
  'السلام عليكم، أرغب في شراء الدليل العملي الشامل لتأسيس وتسيير الشركات في المغرب.';

export default function PaymentOptions() {
  const [copied, setCopied] = useState(false);

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER_INTL}?text=${encodeURIComponent(
    WHATSAPP_PREFILL_TEXT
  )}`;

  const handleCopyNumber = async () => {
    try {
      await navigator.clipboard.writeText(WHATSAPP_NUMBER_DISPLAY);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  };

  return (
    <MotionConfig reducedMotion="user">
      <section
        id="payment-options"
        aria-labelledby="payment-heading"
        className="w-full px-4 py-10 sm:px-0 sm:py-12"
      >
        <div className="rounded-2xl bg-[#FCF9F2] p-6 shadow-[0_12px_36px_rgba(14,74,54,0.08)] sm:p-10">
          <div className="mb-8 text-center">
            <h2
              id="payment-heading"
              className="text-balance text-2xl font-bold tracking-tight text-[#0E4A36] sm:text-3xl"
              style={{fontFamily: 'var(--font-cairo), sans-serif'}}
            >
              اختر طريقة الدفع المناسبة لك
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
            {/* Option 1: Pay Online via Gumroad */}
            <motion.div
              whileHover={{y: -2}}
              transition={{duration: 0.18, ease: [0.16, 1, 0.3, 1]}}
              className="flex flex-col justify-between rounded-xl border border-[#0E4A36]/15 bg-white p-6"
            >
              <div>
                <div className="mb-3 flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#0E4A36]/10 text-[#0E4A36]">
                    <CreditCard className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3
                    className="text-xl font-bold text-[#14261E]"
                    style={{fontFamily: 'var(--font-cairo), sans-serif'}}
                  >
                    الدفع عبر الإنترنت
                  </h3>
                </div>
                <p className="mb-6 text-sm leading-relaxed text-[#3B4E45] sm:text-base">
                  ادفع بأمان عبر منصة Gumroad واحصل على رابط تحميل الدليل بصيغة PDF بشكل فوري.
                </p>
              </div>

              <a
                href={GUMROAD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-xl bg-[#0E4A36] px-6 py-3 text-base font-bold text-white transition-colors duration-150 hover:bg-[#136147] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0E4A36] whitespace-nowrap"
              >
                <span>الدفع الآن عبر الإنترنت</span>
                <ExternalLink className="h-4 w-4 shrink-0" aria-hidden="true" />
              </a>
            </motion.div>

            {/* Option 2: Pay Directly via WhatsApp */}
            <motion.div
              whileHover={{y: -2}}
              transition={{duration: 0.18, ease: [0.16, 1, 0.3, 1]}}
              className="flex flex-col justify-between rounded-xl border border-[#D59B2D]/35 bg-white p-6"
            >
              <div>
                <div className="mb-3 flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#D59B2D]/15 text-[#9A6B12]">
                    <MessageCircle className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3
                    className="text-xl font-bold text-[#14261E]"
                    style={{fontFamily: 'var(--font-cairo), sans-serif'}}
                  >
                    الدفع المباشر عبر واتساب
                  </h3>
                </div>
                <p className="mb-4 text-sm leading-relaxed text-[#3B4E45] sm:text-base">
                  تواصل معنا مباشرة عبر واتساب لإتمام الدفع المحلي واستلام نسختك فوراً.
                </p>

                <div className="mb-5 flex items-center justify-between gap-3 rounded-lg border border-[#0E4A36]/12 bg-[#FAF6EE] px-4 py-2.5">
                  <div className="flex flex-col text-right">
                    <span
                      dir="ltr"
                      className="text-base font-bold tracking-wide text-[#0E4A36] tabular-nums sm:text-lg"
                    >
                      {WHATSAPP_NUMBER_LOCAL}
                    </span>
                    <span
                      dir="ltr"
                      className="text-xs font-medium text-[#3B4E45] tabular-nums"
                    >
                      ({WHATSAPP_NUMBER_DISPLAY})
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyNumber}
                    className="inline-flex min-h-[36px] shrink-0 items-center gap-1.5 rounded-lg border border-[#0E4A36]/20 bg-white px-3 py-1.5 text-xs font-semibold text-[#0E4A36] transition-colors duration-150 hover:bg-[#0E4A36]/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0E4A36] whitespace-nowrap"
                    aria-label="نسخ رقم الواتساب"
                  >
                    {copied ? (
                      <>
                        <Check className="h-3.5 w-3.5 text-[#0E4A36]" aria-hidden="true" />
                        <span>تم النسخ</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                        <span>نسخ الرقم</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-xl bg-[#D59B2D] px-6 py-3 text-base font-bold text-[#09291E] transition-colors duration-150 hover:bg-[#C48C21] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0E4A36] whitespace-nowrap"
              >
                <MessageCircle className="h-5 w-5 shrink-0" aria-hidden="true" />
                <span>تواصل عبر واتساب</span>
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </MotionConfig>
  );
}
