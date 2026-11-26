# บันทึกงาน (ใหม่อยู่บน)

## 2026-11-26 · หน้าแรกใหม่ + เอาเว็บขึ้น Vercel
- ทำแล้ว: หน้าแรกใหม่ (`app/page.tsx`) ด้านบนเป็น slider 6 สไลด์ (`app/_components/HeroSlider.tsx`) — รูปไอลีฟ พรีเว่ ถลาง 2 รูป + ParQ 3 รูป + วิดีโอ ParQ 18 วินาที
- ทำแล้ว: รูปครอป 2 กรอบ (จอกว้าง 16:9 / มือถือ 4:5) เป็น webp มี alt ไทย · วิดีโอบีบจาก 186 MB เหลือ 6.3 / 3.4 MB → ไฟล์อยู่ `public/home/hero/`
- ทำแล้ว: เพิ่มส่วนแบบบ้านไอลีฟ · ทำเล 10 แห่ง · Kanda Concept · แบนเนอร์ ParQ · แบบวิลล่า Magnolia/Gardenia · ระยะทาง · ปุ่มนัดชมบ้าน
- ทำแล้ว: ดึงข้อมูล ParQ จากเว็บเดิม parqvilla.com ใส่ `00-Context/01-Company.md` ก่อน แล้วค่อยใช้ในหน้าเว็บ
- ทำแล้ว: git repo + GitHub `wanwi13/ParQ-website` + Vercel โปรเจกต์ `parq-website` (push แล้วขึ้นเว็บเอง) → https://parq-website-liard.vercel.app
- ตัดสินใจ: ใช้โครงหน้าจาก anchanvillas.com เป็นแค่ลำดับหัวข้อ ไม่ก๊อปข้อความ/รูป
- ตัดสินใจ: ข้อมูลที่ไม่มี (รูปบ้านเดี่ยวไอลีฟ, โปรโมชันที่ยังไม่ระบุวันหมดเขต) ไม่ใส่
- ตัดสินใจ: อีเมล commit = wanwi13.t@gmail.com (ให้ตรงกับ GitHub/Vercel)
- ข้อควรระวัง: deploy แรกขึ้น 404 เพราะ Vercel ไม่รู้ว่าเป็น Next.js → แก้ด้วย `vercel.json` (`"framework": "nextjs"`) ห้ามลบไฟล์นี้
- ข้อควรระวัง: ที่ดิน ParQ เว็บเดิมเขียน 324–653 ตร.ม. ไม่ตรงกับ Company.md (~327–652) ยังใช้ค่าใน Company.md
