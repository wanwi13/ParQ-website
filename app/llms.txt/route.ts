// /llms.txt — สรุปเว็บเป็นข้อความล้วนให้ AI (ChatGPT, Claude, Perplexity ฯลฯ) อ่านง่าย ตามแนวทาง https://llmstxt.org
// ข้อมูลคัดจาก 00-Context/01-Company.md · คำถามที่พบบ่อยดึงจาก lib/faq.ts อัตโนมัติ
import { FAQ_GROUPS } from "@/lib/faq";
import { CONTACT, PAGES, SITE_URL } from "@/lib/site";

export function GET() {
  const pages = PAGES.map((p) => `- [${p.label}](${SITE_URL}${p.path === "/" ? "" : p.path})`).join("\n");
  const faq = FAQ_GROUPS.map(
    (g) => `### ${g.title}\n\n${g.items.map((f) => `**${f.q}**\n${f.a}`).join("\n\n")}`,
  ).join("\n\n");

  const body = `# Kanda กานดา พร็อพเพอร์ตี้ (KANDA PROPERTY)

> ผู้พัฒนาหมู่บ้านจัดสรรในกรุงเทพฯ และปริมณฑล เจ้าของโครงการบ้านไอลีฟ (I-LEAF) บ้านเดี่ยว บ้านแฝด ทาวน์โฮม และ ParQ Villa Phuket พูลวิลล่า ถลาง ภูเก็ต · สโลแกน "Smile of living"

## ราคาเริ่มต้น
- ไอลีฟ ทาวน์โฮม: เริ่ม 2.19 ล้านบาท
- ไอลีฟ บ้านแฝด: เริ่ม 3.29 ล้านบาท
- ไอลีฟ บ้านเดี่ยว: เริ่ม 4.29 ล้านบาท
- ParQ Villa Phuket: เริ่ม 24.9 ล้านบาท

## ไอลีฟ (I-LEAF) — ทำเลและโครงการ
- พระราม 2 กม.14: ไอลีฟ พราวด์ · ไอลีฟ ไพร์ม · ไอลีฟ ไพร์ม 2 · อาคารพาณิชย์
- รามอินทรา–คู้บอน: ไอลีฟ ไพร์ม
- ประชาอุทิศ 90: ไอลีฟ ไพร์ม 2
- รังสิต–คลอง 4 (วงแหวน): ไอลีฟ ไพร์ม 2 · ไอลีฟ พราวด์
- ลำลูกกา: ไอลีฟ ไพร์ม คลอง 2 · ไอลีฟ พรีเว่ คลอง 3
- เทพารักษ์–บางบ่อ: ไอลีฟ พาร์ค (บ้านแฝด บ้านเดี่ยว) · ไอลีฟ ทาวน์ (ทาวน์โฮม)
- ราชพฤกษ์–กาญจนาฯ: ไอลีฟ ทาวน์
- เศรษฐกิจ–บางปลา: ไอลีฟ ไพร์ม · ไอลีฟ ทาวน์
- พัทยา–จอมเทียน: ไอลีฟ ไพร์ม
- ถลาง–ภูเก็ต: ไอลีฟ พรีเว่ ถลาง

## ParQ Villa Phuket
- Thep Kasattri, Thalang, Phuket · about 10 min to Bang Tao and Layan · 15–20 min to Phuket Airport
- 22 private pool villas on about 12 rai: Magnolia (13 villas, 45 sq.m. pool with jacuzzi, 2 parking) · Gardenia (9 villas, 39 sq.m. pool with jacuzzi, 1 parking)
- 2 storeys, 3 master bedrooms, 3 bathrooms · living space 368–457 sq.m. · land about 327–652 sq.m. · 7.1 m living room ceiling
- Over 5 rai of shared garden with a private stream and jogging path · 8,000 sq.m. green area
- Freehold / Leasehold · Common fee THB 12,000/month (THB 144,000/year)
- Starting from THB 24.9 million

## ติดต่อ
- บริษัท กานดา พร็อพเพอร์ตี้ จำกัด · ${CONTACT.address}
- โทร ${CONTACT.phone} · LINE OA ${CONTACT.line} · Facebook ${CONTACT.facebook}

## หน้าในเว็บ
${pages}

## คำถามที่พบบ่อย

${faq}
`;

  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
