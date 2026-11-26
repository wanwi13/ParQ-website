import type { Metadata } from "next";
import type { ReactNode } from "react";
import Icon, { type IconName } from "@/app/_components/Icon";
import { CONTACT } from "@/lib/site";

export const metadata: Metadata = {
  title: "ติดต่อเรา นัดชมบ้านตัวอย่าง",
  description:
    "ติดต่อกานดา พร็อพเพอร์ตี้ โทร 094-249-3985 หรือ LINE OA นัดชมบ้านตัวอย่างไอลีฟ (I-LEAF) ยินดีดูแลทุกท่านค่ะ",
  alternates: { canonical: "/contact" },
};

const link = "text-kanda-orange hover:underline";

const ROWS: { icon: IconName; label: string; value: ReactNode }[] = [
  { icon: "phone", label: "โทร", value: <a href={CONTACT.phoneHref} className={link}>{CONTACT.phone}</a> },
  { icon: "chat", label: "LINE", value: <a href={CONTACT.line} className={link}>{CONTACT.line}</a> },
  { icon: "facebook", label: "Facebook", value: <a href={CONTACT.facebook} className={link}>facebook.com/kd.co.th</a> },
  {
    icon: "pin",
    label: "ที่อยู่",
    value: (
      <>
        บริษัท กานดา พร็อพเพอร์ตี้ จำกัด
        <br />
        {CONTACT.address}
      </>
    ),
  },
];

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="text-4xl">ติดต่อเรา</h1>
      <p className="mt-3 text-lg">สนใจเข้าชมบ้านตัวอย่าง ทักมาได้เลยนะคะ ยินดีดูแลทุกท่านค่ะ</p>

      <dl className="mt-8 grid gap-5 text-lg sm:grid-cols-[10rem_1fr]">
        {ROWS.map((r) => (
          <div key={r.label} className="contents">
            <dt className="flex items-center gap-3 text-kanda-black">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-kanda-orange/10 text-kanda-orange">
                <Icon name={r.icon} />
              </span>
              {r.label}
            </dt>
            <dd className="self-center">{r.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
