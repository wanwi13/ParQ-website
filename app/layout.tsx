import type { Metadata } from "next";
import localFont from "next/font/local";
import Image from "next/image";
import Link from "next/link";
import Icon from "@/app/_components/Icon";
import { CONTACT, PAGES, SITE_NAME, SITE_URL } from "@/lib/site";
import "./globals.css";

// ฟอนต์แบรนด์ DB Heavent — Regular = เนื้อหา · Med = หัวข้อ · Bold = ตัวเลขเด่น
const dbHeavent = localFont({
  src: [
    { path: "./fonts/DBHeavent-Regular.ttf", weight: "400", style: "normal" },
    { path: "./fonts/DBHeavent-Med.ttf", weight: "500", style: "normal" },
    { path: "./fonts/DBHeavent-Bold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-db-heavent",
  display: "swap",
});

// ค่าเริ่มต้นของทุกหน้า — แต่ละหน้าใส่ title/description ของตัวเองใน page.tsx
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Kanda กานดา พร็อพเพอร์ตี้ | บ้านจัดสรร ไอลีฟ (I-LEAF)",
    template: "%s | Kanda กานดา",
  },
  description:
    "กานดา พร็อพเพอร์ตี้ ผู้พัฒนาหมู่บ้านจัดสรรในกรุงเทพฯ และปริมณฑลมากว่า 30 ปี บ้านเดี่ยว บ้านแฝด ทาวน์โฮม ไอลีฟ (I-LEAF) เพื่อรอยยิ้มของครอบครัว และคนรุ่นต่อๆ ไป",
  applicationName: SITE_NAME,
  openGraph: {
    type: "website",
    locale: "th_TH",
    siteName: SITE_NAME,
    images: [{ url: "/logo-kanda.jpg", width: 376, height: 376, alt: "Kanda Smile of living" }],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="th" className={`${dbHeavent.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <header className="border-b border-kanda-orange-light">
          <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-x-6 gap-y-2 px-4 py-2">
            {/* โลโก้มีพื้นขาวรอบ ๆ เยอะ ใช้กรอบตัดให้เห็นเฉพาะส่วนตัวอักษร ไม่ยืด ไม่เปลี่ยนไฟล์ */}
            <Link href="/" aria-label="Kanda หน้าแรก" className="block h-14 w-36 overflow-hidden">
              <Image
                src="/logo-kanda.jpg"
                alt="Kanda Smile of living"
                width={376}
                height={376}
                priority
                className="h-full w-full object-cover"
              />
            </Link>
            <nav className="flex flex-wrap gap-x-5 gap-y-1 text-base">
              {PAGES.filter((p) => p.path !== "/").map((p) => (
                <Link key={p.path} href={p.path} className="text-kanda-black hover:text-kanda-orange">
                  {p.label}
                </Link>
              ))}
            </nav>
          </div>
        </header>

        <main className="flex-1">{children}</main>

        <footer className="mt-16 border-t border-kanda-orange-light">
          <div className="mx-auto grid max-w-5xl gap-2 px-4 py-8 text-sm">
            <p className="text-kanda-black">บริษัท กานดา พร็อพเพอร์ตี้ จำกัด (KANDA PROPERTY)</p>
            <p>{CONTACT.address}</p>
            <p className="mt-1 flex flex-wrap gap-x-6 gap-y-2">
              <a href={CONTACT.phoneHref} className="inline-flex items-center gap-2 hover:text-kanda-orange">
                <Icon name="phone" className="h-4 w-4 text-kanda-orange" /> {CONTACT.phone}
              </a>
              <a href={CONTACT.line} className="inline-flex items-center gap-2 hover:text-kanda-orange">
                <Icon name="chat" className="h-4 w-4 text-kanda-orange" /> LINE
              </a>
              <a href={CONTACT.facebook} className="inline-flex items-center gap-2 hover:text-kanda-orange">
                <Icon name="facebook" className="h-4 w-4 text-kanda-orange" /> Facebook
              </a>
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
