"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import Icon from "@/app/_components/Icon";

// ภาพแต่ละสไลด์ครอปไว้ 2 กรอบ: wide 16:9 (จอกว้าง) · tall 4:5 (มือถือ) — srcSet มาจาก getImageProps ใน page.tsx
export type HeroImage = {
  wideSrcSet: string;
  tallSrcSet: string;
  src: string;
  alt: string;
};

export type HeroSlide = {
  id: string;
  image: HeroImage; // สไลด์วิดีโอใช้รูปนี้เป็นภาพรอ (poster)
  video?: { wide: string; tall: string; label: string };
  eyebrow: string;
  title: string;
  detail: string;
  href: string;
  cta: string;
  credit?: string;
};

const IMAGE_MS = 6000;
const MOBILE = "(max-width: 767px)";

export default function HeroSlider({ slides }: { slides: HeroSlide[] }) {
  const [index, setIndex] = useState(0);
  const [userPaused, setUserPaused] = useState(false); // กดปุ่มหยุดเอง
  const [hover, setHover] = useState(false); // เมาส์/คีย์บอร์ดอยู่บนสไลด์ หยุดชั่วคราว
  const paused = userPaused || hover;
  const [reduced, setReduced] = useState(false);
  const [mobile, setMobile] = useState(false);
  const videoRefs = useRef<Record<string, HTMLVideoElement | null>>({});
  const touchX = useRef<number | null>(null);
  const count = slides.length;
  const current = slides[index];

  const go = useCallback((i: number) => setIndex(((i % count) + count) % count), [count]);
  const next = useCallback(() => go(index + 1), [go, index]);
  const prev = useCallback(() => go(index - 1), [go, index]);

  // ผู้ใช้ที่ตั้งค่า "ลดการเคลื่อนไหว" จะไม่เลื่อนอัตโนมัติ และวิดีโอไม่เล่นเอง
  useEffect(() => {
    const rm = window.matchMedia("(prefers-reduced-motion: reduce)");
    const mm = window.matchMedia(MOBILE);
    const sync = () => {
      setReduced(rm.matches);
      setMobile(mm.matches);
    };
    sync();
    rm.addEventListener("change", sync);
    mm.addEventListener("change", sync);
    return () => {
      rm.removeEventListener("change", sync);
      mm.removeEventListener("change", sync);
    };
  }, []);

  // สไลด์รูป: เลื่อนทุก 6 วินาที · สไลด์วิดีโอ: เลื่อนเมื่อวิดีโอเล่นจบ (onEnded)
  useEffect(() => {
    if (paused || reduced || current.video) return;
    const t = window.setTimeout(next, IMAGE_MS);
    return () => window.clearTimeout(t);
  }, [current, paused, reduced, next]);

  // เล่นวิดีโอเฉพาะสไลด์ที่แสดงอยู่ ที่เหลือหยุดและกรอกลับต้น
  useEffect(() => {
    for (const s of slides) {
      const v = videoRefs.current[s.id];
      if (!v) continue;
      if (s.id === current.id && !paused && !reduced) {
        v.play().catch(() => {});
      } else {
        v.pause();
        if (s.id !== current.id) v.currentTime = 0;
      }
    }
  }, [current, paused, reduced, slides, mobile]);

  return (
    <section
      aria-roledescription="carousel"
      aria-label="ภาพโครงการของกานดา"
      className="relative isolate overflow-hidden bg-kanda-black"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onFocus={() => setHover(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) setHover(false);
      }}
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") next();
        if (e.key === "ArrowLeft") prev();
      }}
      onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchX.current === null) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        if (Math.abs(dx) > 40) (dx < 0 ? next : prev)();
        touchX.current = null;
      }}
    >
      {/* กรอบ: มือถือ 4:5 · จอกว้าง สูงเกือบเต็มจอ */}
      <div className="relative aspect-[4/5] w-full md:aspect-auto md:h-[min(calc(100svh-4.5rem),56.25vw)] md:min-h-[28rem]">
        {slides.map((s, i) => {
          const active = i === index;
          return (
            <div
              key={s.id}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} จาก ${count}: ${s.title}`}
              aria-hidden={!active}
              className={`absolute inset-0 transition-opacity duration-1000 ease-out motion-reduce:transition-none ${
                active ? "opacity-100" : "pointer-events-none opacity-0"
              }`}
            >
              <picture>
                <source media={MOBILE} srcSet={s.image.tallSrcSet} sizes="100vw" />
                <source srcSet={s.image.wideSrcSet} sizes="100vw" />
                {/* <img> ธรรมดา เพื่อสลับกรอบภาพตามขนาดจอ (art direction ตามคู่มือ getImageProps) */}
                <img
                  src={s.image.src}
                  alt={s.image.alt}
                  loading={i === 0 ? "eager" : "lazy"}
                  fetchPriority={i === 0 ? "high" : "auto"}
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </picture>

              {s.video && (
                <video
                  // key เปลี่ยนตามขนาดจอ ให้โหลดไฟล์กรอบที่ตรงกัน (มือถือ 4:5 · จอกว้าง 16:9)
                  key={mobile ? "tall" : "wide"}
                  ref={(el) => {
                    videoRefs.current[s.id] = el;
                  }}
                  src={mobile ? s.video.tall : s.video.wide}
                  muted
                  playsInline
                  preload={i === 0 ? "auto" : "none"}
                  aria-label={s.video.label}
                  onEnded={next}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              )}

              {/* ไล่เงาด้านล่าง ให้ตัวหนังสือขาวอ่านออกบนทุกภาพ */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 pb-16 md:pb-20">
                <div className="mx-auto max-w-5xl px-4 text-white">
                  <p className="text-base text-kanda-orange-light md:text-lg">{s.eyebrow}</p>
                  <h2 className="mt-1 text-4xl text-white! md:text-6xl">{s.title}</h2>
                  <p className="mt-2 max-w-xl text-lg md:text-xl">{s.detail}</p>
                  <Link
                    href={s.href}
                    tabIndex={active ? 0 : -1}
                    className="mt-4 inline-block rounded-full bg-kanda-orange px-6 py-2 text-white hover:opacity-90"
                  >
                    {s.cta}
                  </Link>
                  {s.credit && <p className="mt-3 text-xs text-white/70">{s.credit}</p>}
                </div>
              </div>
            </div>
          );
        })}

        {/* ปุ่มก่อนหน้า / ถัดไป — ซ่อนบนมือถือ ใช้ปัดแทน */}
        <button
          type="button"
          onClick={prev}
          aria-label="สไลด์ก่อนหน้า"
          className="absolute left-4 top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-2xl text-white backdrop-blur hover:bg-white/40 md:flex"
        >
          ‹
        </button>
        <button
          type="button"
          onClick={next}
          aria-label="สไลด์ถัดไป"
          className="absolute right-4 top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-2xl text-white backdrop-blur hover:bg-white/40 md:flex"
        >
          ›
        </button>

        {/* จุดบอกตำแหน่ง + ปุ่มหยุด */}
        <div className="absolute inset-x-0 bottom-5 md:bottom-7">
          <div className="mx-auto flex max-w-5xl items-center gap-2 px-4">
            {slides.map((s, i) => (
              <button
                key={s.id}
                type="button"
                onClick={() => go(i)}
                aria-label={`ไปสไลด์ที่ ${i + 1}: ${s.title}`}
                aria-current={i === index}
                className={`h-1.5 rounded-full transition-all ${
                  i === index ? "w-8 bg-kanda-orange" : "w-4 bg-white/60 hover:bg-white"
                }`}
              />
            ))}
            <button
              type="button"
              onClick={() => setUserPaused((p) => !p)}
              aria-label={userPaused ? "เล่นสไลด์ต่อ" : "หยุดสไลด์"}
              className="ml-auto inline-flex items-center gap-1.5 text-sm text-white/80 hover:text-white"
            >
              <Icon name={userPaused ? "play" : "pause"} className="h-3.5 w-3.5 fill-current" />
              {userPaused ? "เล่น" : "หยุด"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
