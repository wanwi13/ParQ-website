import type { Metadata } from "next";
import Icon from "@/app/_components/Icon";
import { CONTACT } from "@/lib/site";

export const metadata: Metadata = {
  title: "โปรโมชันบ้านไอลีฟ (I-LEAF)",
  description:
    "โปรโมชันบ้านไอลีฟ ฟรีโซลาร์เซลล์ ฟรีเฟอร์นิเจอร์ทั้งหลัง ฟรีเครื่องปรับอากาศ ฟรีค่าใช้จ่าย ณ วันโอน สอบถามรายละเอียดโครงการที่ร่วมรายการได้ค่ะ",
  alternates: { canonical: "/promotion" },
};

// จาก 00-Context/01-Company.md (บริษัทยืนยัน 25 พ.ย. 2026)
// ⚠️ ยังไม่ระบุว่าใช้กับโครงการ/แบบบ้านไหน และหมดเขตเมื่อไร — อัปเดตที่นี่เมื่อได้ข้อมูล
const PROMOTIONS = [
  "ฟรี โซลาร์เซลล์ พร้อมติดตั้ง",
  "ฟรี เฟอร์นิเจอร์ทั้งหลัง",
  "ฟรี ปั๊มน้ำ และแทงก์น้ำ",
  "ฟรี ต่อเติมหลังคาที่จอดรถหน้าบ้าน",
  "ฟรี เครื่องปรับอากาศ",
  "ฟรี ค่าใช้จ่าย ณ วันโอน",
];

export default function PromotionPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="text-4xl">โปรโมชัน</h1>
      <p className="mt-3 text-lg">สิทธิพิเศษสำหรับคุณลูกค้าที่สนใจบ้านไอลีฟค่ะ</p>
      <ul className="mt-6 grid gap-3 sm:grid-cols-2">
        {PROMOTIONS.map((p) => (
          <li
            key={p}
            className="flex items-center gap-3 rounded-lg border border-kanda-orange-light p-4 text-lg text-kanda-black"
          >
            <Icon name="checkCircle" className="h-6 w-6 text-kanda-orange" />
            {p}
          </li>
        ))}
      </ul>
      <p className="mt-6 text-sm">เงื่อนไขเป็นไปตามที่บริษัทกำหนด</p>
      <p className="mt-2">
        สอบถามโครงการที่ร่วมรายการได้ที่{" "}
        <a href={CONTACT.line} className="text-kanda-orange hover:underline">LINE</a> หรือโทร{" "}
        <a href={CONTACT.phoneHref} className="text-kanda-orange hover:underline">{CONTACT.phone}</a> นะคะ
      </p>
    </div>
  );
}
