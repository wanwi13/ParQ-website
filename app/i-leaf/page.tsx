import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ไอลีฟ (I-LEAF) บ้านเดี่ยว บ้านแฝด ทาวน์โฮม ทุกทำเล",
  description:
    "โครงการไอลีฟ (I-LEAF) ทุกทำเล พระราม 2 รามอินทรา ประชาอุทิศ รังสิต ลำลูกกา เทพารักษ์ ราชพฤกษ์ เศรษฐกิจ พัทยา ภูเก็ต ทาวน์โฮมเริ่ม 2.19 ล้านบาท บ้านแฝดเริ่ม 3.29 ล้านบาท บ้านเดี่ยวเริ่ม 4.29 ล้านบาท",
  alternates: { canonical: "/i-leaf" },
};

// จาก 00-Context/01-Company.md
const LOCATIONS = [
  { area: "พระราม 2 กม.14", projects: "ไอลีฟ พราวด์ · ไอลีฟ ไพร์ม · ไอลีฟ ไพร์ม 2 · อาคารพาณิชย์ HO" },
  { area: "รามอินทรา–คู้บอน", projects: "ไอลีฟ ไพร์ม" },
  { area: "ประชาอุทิศ 90", projects: "ไอลีฟ ไพร์ม 2" },
  { area: "รังสิต–คลอง 4 (วงแหวน)", projects: "ไอลีฟ ไพร์ม 2 · ไอลีฟ พราวด์" },
  { area: "ลำลูกกา", projects: "ไอลีฟ ไพร์ม คลอง 2 · ไอลีฟ พรีเว่ คลอง 3" },
  { area: "เทพารักษ์–บางบ่อ", projects: "ไอลีฟ พาร์ค (บ้านแฝด + บ้านเดี่ยว) · ไอลีฟ ทาวน์ (ทาวน์โฮม)" },
  { area: "ราชพฤกษ์–กาญจนาฯ", projects: "ไอลีฟ ทาวน์" },
  { area: "เศรษฐกิจ–บางปลา", projects: "ไอลีฟ ไพร์ม · ไอลีฟ ทาวน์" },
  { area: "พัทยา–จอมเทียน", projects: "ไอลีฟ ไพร์ม" },
  { area: "ถลาง–ภูเก็ต", projects: "ไอลีฟ พรีเว่ ถลาง" },
];

export default function ILeafPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="text-4xl">ไอลีฟ (I-LEAF)</h1>
      <p className="mt-3 max-w-2xl text-lg">
        บ้านเดี่ยว บ้านแฝด ทาวน์โฮม และอาคารพาณิชย์ ในทำเลที่เดินทางสะดวก
        มาลองเดินดูบ้านตัวอย่างด้วยกันนะคะ
      </p>
      <p className="mt-4 text-lg">
        ทาวน์โฮม <span className="font-bold text-kanda-orange">เริ่ม 2.19 ล้านบาท</span> · บ้านแฝด{" "}
        <span className="font-bold text-kanda-orange">เริ่ม 3.29 ล้านบาท</span> · บ้านเดี่ยว{" "}
        <span className="font-bold text-kanda-orange">เริ่ม 4.29 ล้านบาท</span>
      </p>

      <h2 className="mt-10 text-2xl">ทำเลโครงการ</h2>
      <ul className="mt-4 divide-y divide-kanda-orange-light border-y border-kanda-orange-light">
        {LOCATIONS.map((l) => (
          <li key={l.area} className="grid gap-1 py-3 sm:grid-cols-[14rem_1fr]">
            <span className="text-kanda-black">{l.area}</span>
            <span>{l.projects}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
