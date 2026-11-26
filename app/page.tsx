import type { Metadata } from "next";
import Image, { getImageProps } from "next/image";
import Link from "next/link";
import HeroSlider, { type HeroImage, type HeroSlide } from "@/app/_components/HeroSlider";
import Icon from "@/app/_components/Icon";
import { CONTACT } from "@/lib/site";

export const metadata: Metadata = {
  // หน้าแรกใช้ชื่อเต็ม ไม่ต่อท้ายด้วย template
  title: { absolute: "Kanda กานดา พร็อพเพอร์ตี้ | บ้านจัดสรร ไอลีฟ (I-LEAF)" },
  description:
    "บ้านเดี่ยว บ้านแฝด ทาวน์โฮม ไอลีฟ (I-LEAF) จากกานดา พร็อพเพอร์ตี้ บ้านที่คิดเผื่อชีวิตจริง ในกรุงเทพฯ และปริมณฑล ทาวน์โฮมเริ่ม 2.19 ล้านบาท · ParQ Villa Phuket พูลวิลล่า ถลาง เริ่ม 24.9 ล้านบาท",
  alternates: { canonical: "/" },
};

// ทุกข้อความ ราคา ตัวเลข คัดจาก 00-Context/01-Company.md · ภาพจาก 01-Assets (ครอปไว้ที่ public/home/hero)
// แต่ละภาพมี 2 กรอบ: -wide.webp 16:9 (1920×1080) · -tall.webp 4:5 (มือถือ)
function heroImage(name: string, alt: string, tall: { w: number; h: number }): HeroImage {
  const common = { alt, sizes: "100vw" };
  const {
    props: { srcSet: wideSrcSet },
  } = getImageProps({ ...common, src: `/home/hero/${name}-wide.webp`, width: 1920, height: 1080 });
  const {
    props: { srcSet: tallSrcSet, src },
  } = getImageProps({ ...common, src: `/home/hero/${name}-tall.webp`, width: tall.w, height: tall.h });
  return { wideSrcSet: wideSrcSet ?? "", tallSrcSet: tallSrcSet ?? "", src, alt };
}

const TIFF_TALL = { w: 1080, h: 1350 };
const PNG_TALL = { w: 864, h: 1080 };

const SLIDES: HeroSlide[] = [
  {
    id: "ileaf-townhome",
    image: heroImage(
      "ileaf-townhome",
      "ภาพจำลองทาวน์โฮม 2 ชั้น โครงการไอลีฟ พรีเว่ ถลาง ภูเก็ต มีที่จอดรถหน้าบ้านทุกหลัง",
      TIFF_TALL,
    ),
    eyebrow: "ไอลีฟ (I-LEAF)",
    title: "ทาวน์โฮม",
    detail: "เริ่ม 2.19 ล้านบาท",
    href: "/i-leaf",
    cta: "ดูโครงการไอลีฟ",
    credit: "ภาพจำลอง: ไอลีฟ พรีเว่ ถลาง",
  },
  {
    id: "parq-video",
    image: heroImage(
      "parq-video-poster",
      "ทางเข้าโครงการ ParQ Villa Phuket ป้ายชื่อโครงการท่ามกลางต้นไม้ร่มรื่น",
      PNG_TALL,
    ),
    video: {
      wide: "/home/hero/parq-video-wide.mp4",
      tall: "/home/hero/parq-video-tall.mp4",
      label: "วิดีโอภาพจำลองโครงการ ParQ Villa Phuket ทางเข้าโครงการ สวนส่วนกลางและลำธาร และวิลล่าในโครงการ",
    },
    eyebrow: "ParQ Villa Phuket · ถลาง ภูเก็ต",
    title: "Live in Harmony with Nature",
    detail: "พูลวิลล่า 22 หลัง บนพื้นที่ราว 12 ไร่ · เริ่ม 24.9 ล้านบาท",
    href: "/parq-villa-phuket",
    cta: "ดูรายละเอียด",
  },
  {
    id: "ileaf-twin",
    image: heroImage(
      "ileaf-twin",
      "ภาพจำลองบ้านแฝด 2 ชั้น โครงการไอลีฟ พรีเว่ ถลาง ภูเก็ต หน้าบ้านมีสวนและที่จอดรถ",
      TIFF_TALL,
    ),
    eyebrow: "ไอลีฟ (I-LEAF)",
    title: "บ้านแฝด",
    detail: "เริ่ม 3.29 ล้านบาท",
    href: "/i-leaf",
    cta: "ดูโครงการไอลีฟ",
    credit: "ภาพจำลอง: ไอลีฟ พรีเว่ ถลาง",
  },
  {
    id: "parq-pool",
    image: heroImage(
      "parq-pool",
      "ภาพจำลองสระว่ายน้ำส่วนตัวของวิลล่า ParQ Villa Phuket ข้างศาลาพักผ่อนและสวน",
      PNG_TALL,
    ),
    eyebrow: "ParQ Villa Phuket",
    title: "สระส่วนตัวทุกหลัง",
    detail: "3 ห้องนอน 3 ห้องน้ำ · Designed for Privacy. Created for Living.",
    href: "/parq-villa-phuket",
    cta: "ดูรายละเอียด",
  },
  {
    id: "parq-garden",
    image: heroImage(
      "parq-garden",
      "ภาพจำลองสวนส่วนกลาง ParQ Villa Phuket มีลำธาร ทางเดินหิน และต้นไม้รอบโครงการ",
      PNG_TALL,
    ),
    eyebrow: "ParQ Villa Phuket",
    title: "สวนกว่า 5 ไร่",
    detail: "ลำธาร ไม้พุ่ม 3 ชั้น และทางวิ่งในโครงการ",
    href: "/parq-villa-phuket",
    cta: "ดูรายละเอียด",
  },
  {
    id: "parq-magnolia",
    image: heroImage(
      "parq-magnolia",
      "ภาพจำลองด้านหน้าวิลล่าแบบ Magnolia 2 ชั้น ParQ Villa Phuket ผนังไม้ ระเบียง และที่จอดรถ",
      PNG_TALL,
    ),
    eyebrow: "ParQ Villa Phuket",
    title: "แบบ Magnolia",
    detail: "13 หลัง · สระ 45 ตร.ม. พร้อมจากุซซี่ · ที่จอดรถ 2 คัน · ห้องเก็บไวน์",
    href: "/parq-villa-phuket",
    cta: "ดูรายละเอียด",
  },
];

const HOMES = [
  { type: "ทาวน์โฮม", price: "เริ่ม 2.19 ล้านบาท", image: "/home/hero/ileaf-townhome-wide.webp", alt: "ภาพจำลองทาวน์โฮมไอลีฟ พรีเว่ ถลาง" },
  { type: "บ้านแฝด", price: "เริ่ม 3.29 ล้านบาท", image: "/home/hero/ileaf-twin-wide.webp", alt: "ภาพจำลองบ้านแฝดไอลีฟ พรีเว่ ถลาง" },
  { type: "บ้านเดี่ยว", price: "เริ่ม 4.29 ล้านบาท" },
];

const LOCATIONS = [
  { area: "พระราม 2 กม.14", projects: "ไอลีฟ พราวด์ · ไอลีฟ ไพร์ม · ไอลีฟ ไพร์ม 2 · อาคารพาณิชย์" },
  { area: "รามอินทรา–คู้บอน", projects: "ไอลีฟ ไพร์ม" },
  { area: "ประชาอุทิศ 90", projects: "ไอลีฟ ไพร์ม 2" },
  { area: "รังสิต–คลอง 4 (วงแหวน)", projects: "ไอลีฟ ไพร์ม 2 · ไอลีฟ พราวด์" },
  { area: "ลำลูกกา", projects: "ไอลีฟ ไพร์ม คลอง 2 · ไอลีฟ พรีเว่ คลอง 3" },
  { area: "เทพารักษ์–บางบ่อ", projects: "ไอลีฟ พาร์ค · ไอลีฟ ทาวน์" },
  { area: "ราชพฤกษ์–กาญจนาฯ", projects: "ไอลีฟ ทาวน์" },
  { area: "เศรษฐกิจ–บางปลา", projects: "ไอลีฟ ไพร์ม · ไอลีฟ ทาวน์" },
  { area: "พัทยา–จอมเทียน", projects: "ไอลีฟ ไพร์ม" },
  { area: "ถลาง–ภูเก็ต", projects: "ไอลีฟ พรีเว่ ถลาง" },
];

const CONCEPTS = ["Eco Smart", "Easy Maintenance", "Multi Generation", "Space Matter", "Flood Protection"];

const PARQ_FACTS = [
  { value: "22", label: "หลัง บนพื้นที่ราว 12 ไร่" },
  { value: "8,000", label: "ตร.ม. พื้นที่สีเขียว" },
  { value: "3", label: "ห้องนอน Master ทุกหลัง" },
  { value: "24.9", label: "ล้านบาท (ราคาเริ่มต้น)" },
];

// แบบวิลล่า — จาก 01-Company.md (หัวข้อข้อมูลจากเว็บเดิม parqvilla.com)
const PARQ_TYPES = [
  {
    name: "Magnolia",
    units: "13 หลัง",
    image: "/home/hero/parq-magnolia-wide.webp",
    alt: "ภาพจำลองด้านหน้าวิลล่าแบบ Magnolia ParQ Villa Phuket",
    specs: ["3 ห้องนอน Master · 3 ห้องน้ำ", "สระ 45 ตร.ม. พร้อมจากุซซี่", "ที่จอดรถ 2 คัน", "ศาลา เทอเรซ และห้องเก็บไวน์"],
  },
  {
    name: "Gardenia",
    units: "9 หลัง",
    image: "/home/hero/parq-gardenia-wide.webp",
    alt: "ภาพจำลองด้านหน้าวิลล่าแบบ Gardenia ParQ Villa Phuket",
    specs: ["3 ห้องนอน Master · 3 ห้องน้ำ", "สระ 39 ตร.ม. พร้อมจากุซซี่", "ที่จอดรถ 1 คัน", "ศาลาและเทอเรซ"],
  },
];

const PARQ_NEARBY = [
  { place: "โรงพยาบาลถลาง", km: "2.3" },
  { place: "UWC Thailand", km: "5.5" },
  { place: "หาดลายัน", km: "5.7" },
  { place: "หาดบางเทา", km: "6.6" },
  { place: "สนามบินภูเก็ต", km: "13.8" },
];

export default function Home() {
  return (
    <>
      <HeroSlider slides={SLIDES} />

      {/* แนะนำบริษัท */}
      <section className="mx-auto max-w-5xl px-4 py-14 sm:py-20">
        <p className="text-kanda-orange">Smile of living</p>
        <h1 className="mt-2 text-4xl sm:text-5xl">บ้านที่คิดเผื่อชีวิตจริง</h1>
        <p className="mt-4 max-w-2xl text-lg">
          เพื่อรอยยิ้มของครอบครัว และคนรุ่นต่อๆ ไป กานดาสร้างหมู่บ้านจัดสรรในกรุงเทพฯ และปริมณฑลมากว่า 30 ปี
          อยากให้ทุกบ้านอยู่สบาย ดูแลง่าย และเป็นมิตรกับสิ่งแวดล้อมค่ะ
        </p>

        {/* ทางลัดไปหน้าคำนวณผ่อนบ้าน */}
        <Link
          href="/loan-calculator"
          className="group mt-8 flex max-w-xl items-center gap-5 rounded-2xl border-2 border-kanda-orange-light p-5 transition hover:border-kanda-orange hover:shadow-md"
        >
          <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-kanda-orange text-white">
            <Icon name="calculator" className="h-9 w-9" />
          </span>
          <span className="flex-1">
            <span className="block text-2xl text-kanda-black group-hover:text-kanda-orange">คำนวณผ่อนบ้าน</span>
            <span className="block">ผ่อนเดือนละเท่าไร · เงินเดือนเท่านี้ซื้อบ้านได้แค่ไหน ลองคำนวณดูได้เลยค่ะ</span>
          </span>
          <Icon
            name="arrowRight"
            className="h-6 w-6 text-kanda-orange transition group-hover:translate-x-1"
          />
        </Link>
      </section>

      {/* แบบบ้านไอลีฟ */}
      <section className="mx-auto max-w-5xl border-t border-kanda-orange-light px-4 py-12">
        <h2 className="text-3xl">ไอลีฟ (I-LEAF)</h2>
        <p className="mt-2">บ้านเดี่ยว บ้านแฝด ทาวน์โฮม ในหลายทำเลค่ะ</p>
        <ul className="mt-6 grid gap-5 sm:grid-cols-3">
          {HOMES.map((h) => (
            <li key={h.type} className="flex flex-col overflow-hidden rounded-lg border border-kanda-orange-light">
              {h.image ? (
                <Image
                  src={h.image}
                  alt={h.alt}
                  width={1920}
                  height={1080}
                  sizes="(min-width: 640px) 33vw, 100vw"
                  className="aspect-[16/10] w-full object-cover"
                />
              ) : null}
              <div className="mt-auto p-5">
                <p className="text-xl text-kanda-black">{h.type}</p>
                <p className="mt-1 text-lg font-bold text-kanda-orange">{h.price}</p>
                <Link href="/i-leaf" className="mt-3 inline-block text-kanda-black hover:text-kanda-orange">
                  ดูรายละเอียด →
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* ทำเล */}
      <section className="mx-auto max-w-5xl border-t border-kanda-orange-light px-4 py-12">
        <h2 className="text-3xl">ทำเลโครงการไอลีฟ</h2>
        <dl className="mt-6 grid gap-x-8 gap-y-4 sm:grid-cols-2">
          {LOCATIONS.map((l) => (
            <div key={l.area} className="border-l-2 border-kanda-orange pl-4">
              <dt className="text-lg text-kanda-black">{l.area}</dt>
              <dd>{l.projects}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Kanda Concept */}
      <section className="mx-auto max-w-5xl border-t border-kanda-orange-light px-4 py-12">
        <h2 className="text-3xl">Kanda Concept</h2>
        <ol className="mt-6 grid gap-4 sm:grid-cols-5">
          {CONCEPTS.map((c, i) => (
            <li key={c} className="rounded-lg border border-kanda-orange-light p-4">
              <span className="text-3xl font-bold text-kanda-orange">{String(i + 1).padStart(2, "0")}</span>
              <p className="mt-1 text-lg text-kanda-black">{c}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* ParQ Villa Phuket — ภาพเต็มความกว้าง */}
      <section className="relative isolate mt-6 overflow-hidden">
        <Image
          src="/home/hero/parq-garden-wide.webp"
          alt="ภาพจำลองสวนส่วนกลางและลำธารในโครงการ ParQ Villa Phuket"
          fill
          sizes="100vw"
          className="-z-10 object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-black/50" />
        <div className="mx-auto max-w-5xl px-4 py-20 text-white sm:py-28">
          <p className="text-kanda-orange-light">ParQ Villa Phuket · เทพกระษัตรี ถลาง ภูเก็ต</p>
          <h2 className="mt-2 text-4xl text-white! sm:text-5xl">Designed for Privacy. Created for Living.</h2>
          <dl className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {PARQ_FACTS.map((f) => (
              <div key={f.label}>
                <dt className="sr-only">{f.label}</dt>
                <dd className="text-4xl font-bold">{f.value}</dd>
                <dd>{f.label}</dd>
              </div>
            ))}
          </dl>
          <Link
            href="/parq-villa-phuket"
            className="mt-8 inline-block rounded-full bg-kanda-orange px-6 py-2 text-white hover:opacity-90"
          >
            ดูรายละเอียด ParQ Villa Phuket
          </Link>
        </div>
      </section>

      {/* แบบวิลล่า + ระยะทาง */}
      <section className="mx-auto max-w-5xl px-4 py-12">
        <h2 className="text-3xl">แบบวิลล่า ParQ Villa Phuket</h2>
        <p className="mt-2">พูลวิลล่า 2 ชั้น · พื้นที่ใช้สอย 368–457 ตร.ม. · กรรมสิทธิ์ Freehold / Leasehold</p>
        <ul className="mt-6 grid gap-5 sm:grid-cols-2">
          {PARQ_TYPES.map((t) => (
            <li key={t.name} className="overflow-hidden rounded-lg border border-kanda-orange-light">
              <Image
                src={t.image}
                alt={t.alt}
                width={1920}
                height={1080}
                sizes="(min-width: 640px) 50vw, 100vw"
                className="aspect-[16/10] w-full object-cover"
              />
              <div className="p-5">
                <p className="text-2xl text-kanda-black">
                  {t.name} <span className="text-base text-kanda-gray">· {t.units}</span>
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  {t.specs.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>

        <h3 className="mt-10 text-2xl">ระยะทางจากโครงการ</h3>
        <dl className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-5">
          {PARQ_NEARBY.map((n) => (
            <div key={n.place} className="flex flex-col-reverse border-l-2 border-kanda-orange pl-3">
              <dt>{n.place}</dt>
              <dd className="text-2xl font-bold text-kanda-black">{n.km} กม.</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* ติดต่อ */}
      <section className="mx-auto max-w-5xl px-4 py-14 text-center">
        <h2 className="text-3xl">นัดชมบ้านตัวอย่าง</h2>
        <p className="mt-2">อยากลองเดิน ลองใช้พื้นที่จริง ทักมาได้เลยนะคะ ยินดีดูแลทุกท่านค่ะ</p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <a
            href={CONTACT.line}
            className="inline-flex items-center gap-2 rounded-full bg-kanda-orange px-6 py-2 text-white hover:opacity-90"
          >
            <Icon name="chat" /> แชต LINE
          </a>
          <a
            href={CONTACT.phoneHref}
            className="inline-flex items-center gap-2 rounded-full border border-kanda-gray px-6 py-2 text-kanda-black hover:border-kanda-orange hover:text-kanda-orange"
          >
            <Icon name="phone" /> โทร {CONTACT.phone}
          </a>
        </div>
      </section>
    </>
  );
}
