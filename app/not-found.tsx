import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#F6F1E7] px-6 text-center">
      <h1
        className="text-4xl font-bold text-[#0E4A36] sm:text-5xl"
        style={{fontFamily: 'var(--font-cairo), sans-serif'}}
      >
        404
      </h1>
      <p className="mt-4 text-lg text-[#3B4E45]">
        الصفحة المطلوبة غير موجودة
      </p>
      <Link
        href="/"
        className="mt-6 inline-flex items-center justify-center rounded-xl bg-[#0E4A36] px-6 py-3 text-base font-bold text-white transition-colors hover:bg-[#136147]"
      >
        العودة إلى الصفحة الرئيسية
      </Link>
    </main>
  );
}
