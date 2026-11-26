// ที่อยู่เว็บหลัก ใช้ใน sitemap.xml · robots.txt · canonical
// ลำดับ: NEXT_PUBLIC_SITE_URL (ตั้งเองเมื่อมีโดเมน) → ลิงก์ production .vercel.app ที่ Vercel ใส่ให้อัตโนมัติ → localhost
// มีโดเมนแล้ว: ไปที่ Vercel > Settings > Environment Variables ใส่ NEXT_PUBLIC_SITE_URL=https://www.โดเมน แล้ว redeploy
function resolveSiteUrl(): string {
  const custom = process.env.NEXT_PUBLIC_SITE_URL;
  if (custom) return custom.replace(/\/$/, "");
  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (vercel) return `https://${vercel}`;
  return "http://localhost:3000";
}

export const SITE_URL = resolveSiteUrl();
export const SITE_NAME = "Kanda กานดา พร็อพเพอร์ตี้";

// ข้อมูลติดต่อ จาก 00-Context/02-Brand.md และ 01-Company.md
export const CONTACT = {
  phone: "094-249-3985",
  phoneHref: "tel:0942493985",
  line: "https://lin.ee/rT5CncV",
  facebook: "https://facebook.com/kd.co.th",
  address: "195 ม.5 ถ.พระรามที่ 2 ต.พันท้ายนรสิงห์ อ.เมือง จ.สมุทรสาคร 74000",
};

// ทุกหน้าของเว็บ — เพิ่มหน้าใหม่ต้องเพิ่มที่นี่ด้วย sitemap.xml จะได้ครบ
export const PAGES = [
  { path: "/", label: "หน้าแรก", priority: 1 },
  { path: "/i-leaf", label: "ไอลีฟ (I-LEAF)", priority: 0.9 },
  { path: "/parq-villa-phuket", label: "ParQ Villa Phuket", priority: 0.9 },
  { path: "/promotion", label: "โปรโมชัน", priority: 0.8 },
  { path: "/contact", label: "ติดต่อเรา", priority: 0.7 },
] as const;
