@AGENTS.md

# เว็บไซต์บริษัท Kanda

เว็บจริง: https://parq-website-liard.vercel.app
GitHub: https://github.com/wanwi13/ParQ-website (Vercel deploy เองทุกครั้งที่ push branch main)
บันทึกงาน / งานค้าง: `memo/NOTES.md` · `memo/TODO.md` · รูป/วิดีโอหน้าแรก: `public/home/hero/` · slider: `app/_components/HeroSlider.tsx`
- `vercel.json` บอก Vercel ว่าเป็น Next.js ห้ามลบ (ลบแล้วเว็บขึ้น 404)

- ข้อมูลราคา โปรโมชัน ทำเล: คัดมาจาก `../../00-Context/01-Company.md` · แก้ที่นั่นก่อน แล้วค่อยแก้ในหน้าเว็บ
- สี ฟอนต์ น้ำเสียง: `../../00-Context/02-Brand.md` (สีอยู่ใน `app/globals.css` · ฟอนต์ DB Heavent ใน `app/fonts/`)
- หน้าใหม่ทุกหน้า: ต้องมี `metadata` (title + description + canonical) ใน page.tsx และเพิ่มใน `PAGES` ที่ `lib/site.ts` (sitemap.xml ดึงจากตรงนั้น)
- ลิงก์เว็บ: ใช้ .vercel.app อัตโนมัติ · มีโดเมนแล้วตั้ง `NEXT_PUBLIC_SITE_URL` ใน Vercel แล้ว redeploy
- robots.txt (`app/robots.ts`) เปิดให้บอท AI ทุกตัว ห้ามปิด
- ⚠️ หน้าโปรโมชัน: ยังไม่ระบุโครงการที่ร่วมรายการและวันหมดเขต
