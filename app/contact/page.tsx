import type { Metadata } from "next";
import { CONTACT } from "@/lib/site";

export const metadata: Metadata = {
  title: "ติดต่อเรา นัดชมบ้านตัวอย่าง",
  description:
    "ติดต่อกานดา พร็อพเพอร์ตี้ โทร 094-249-3985 หรือ LINE OA นัดชมบ้านตัวอย่างไอลีฟ (I-LEAF) ยินดีดูแลทุกท่านค่ะ",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="text-4xl">ติดต่อเรา</h1>
      <p className="mt-3 text-lg">สนใจเข้าชมบ้านตัวอย่าง ทักมาได้เลยนะคะ ยินดีดูแลทุกท่านค่ะ 😊</p>

      <dl className="mt-8 grid gap-4 text-lg sm:grid-cols-[8rem_1fr]">
        <dt className="text-kanda-black">โทร</dt>
        <dd><a href={CONTACT.phoneHref} className="text-kanda-orange hover:underline">{CONTACT.phone}</a></dd>
        <dt className="text-kanda-black">LINE</dt>
        <dd><a href={CONTACT.line} className="text-kanda-orange hover:underline">{CONTACT.line}</a></dd>
        <dt className="text-kanda-black">Facebook</dt>
        <dd><a href={CONTACT.facebook} className="text-kanda-orange hover:underline">facebook.com/kd.co.th</a></dd>
        <dt className="text-kanda-black">ที่อยู่</dt>
        <dd>บริษัท กานดา พร็อพเพอร์ตี้ จำกัด<br />{CONTACT.address}</dd>
      </dl>
    </div>
  );
}
