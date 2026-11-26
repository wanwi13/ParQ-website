// ข้อมูลโครงสร้าง (JSON-LD) ให้ Google และ AI อ่านเว็บได้ง่าย — ตามคู่มือ Next.js (docs/01-app/02-guides/json-ld.md)
// ตรวจได้ที่ https://search.google.com/test/rich-results หรือ https://validator.schema.org/
export default function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
