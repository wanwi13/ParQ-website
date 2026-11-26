import type { Metadata } from "next";
import Link from "next/link";
import Icon from "@/app/_components/Icon";
import JsonLd from "@/app/_components/JsonLd";
import { FAQ_GROUPS } from "@/lib/faq";
import { FAQ_PAGE } from "@/lib/schema";
import { CONTACT } from "@/lib/site";

export const metadata: Metadata = {
  title: "คำถามที่พบบ่อย บ้านไอลีฟ และ ParQ Villa Phuket",
  description:
    "รวมคำถามที่ลูกค้าถามบ่อย ราคาบ้านไอลีฟ (I-LEAF) ทำเลโครงการ โปรโมชัน เงินเดือนเท่าไรกู้ได้ ParQ Villa Phuket ราคา ค่าส่วนกลาง กรรมสิทธิ์ และวิธีนัดชมบ้านตัวอย่าง",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <JsonLd data={FAQ_PAGE} />
      <h1 className="text-4xl">คำถามที่พบบ่อย</h1>
      <p className="mt-3 text-lg">รวมคำถามที่คุณลูกค้าถามเข้ามาบ่อย ๆ ค่ะ ไม่เจอคำตอบที่ต้องการ ทักมาถามได้เลยนะคะ</p>

      {FAQ_GROUPS.map((g) => (
        <section key={g.title} className="mt-10">
          <h2 className="text-2xl">{g.title}</h2>
          <div className="mt-4 divide-y divide-kanda-orange-light border-y border-kanda-orange-light">
            {g.items.map((f) => (
              <details key={f.q} className="group py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg text-kanda-black hover:text-kanda-orange [&::-webkit-details-marker]:hidden">
                  <h3 className="text-lg font-normal text-inherit">{f.q}</h3>
                  <Icon name="arrowRight" className="h-5 w-5 text-kanda-orange transition group-open:rotate-90" />
                </summary>
                <p className="mt-3 pr-9">{f.a}</p>
              </details>
            ))}
          </div>
        </section>
      ))}

      <div className="mt-12 flex flex-wrap gap-3">
        <Link
          href="/loan-calculator"
          className="inline-flex items-center gap-2 rounded-full border border-kanda-gray px-6 py-2 text-kanda-black hover:border-kanda-orange hover:text-kanda-orange"
        >
          <Icon name="calculator" /> คำนวณผ่อนบ้าน
        </Link>
        <a
          href={CONTACT.line}
          className="inline-flex items-center gap-2 rounded-full bg-kanda-orange px-6 py-2 text-white hover:opacity-90"
        >
          <Icon name="chat" /> ถามทาง LINE
        </a>
      </div>
    </div>
  );
}
