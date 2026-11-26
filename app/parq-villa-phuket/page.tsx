import type { Metadata } from "next";

// ParQ เขียนภาษาอังกฤษเป็นหลัก (ลูกค้าต่างชาติและเอเจนต์) ตาม 02-Brand.md
export const metadata: Metadata = {
  title: "ParQ Villa Phuket — Private Pool Villas in Thalang",
  description:
    "22 private pool villas on about 12 rai in Thalang, Phuket. 3 master bedrooms, 368–457 sq.m. living space, around 10 minutes to Bang Tao and Layan. Starting from THB 24.9 million.",
  alternates: { canonical: "/parq-villa-phuket" },
};

const FACTS = [
  "22 villas on about 12 rai — Magnolia (13) and Gardenia (9)",
  "3 master bedrooms, 3 bathrooms, a private pool for every villa",
  "Living space 368–457 sq.m. · Land about 327–652 sq.m.",
  "7.1 m living room ceiling · about 3.2 m bedroom ceiling",
  "Over 5 rai of shared garden with a stream and jogging path",
  "Thep Kasattri, Thalang · about 10 min to Bang Tao and Layan · 15–20 min to the airport, depending on traffic",
];

export default function ParQPage() {
  return (
    <div lang="en" className="mx-auto max-w-5xl px-4 py-12">
      <p className="text-kanda-orange">Live in Harmony with Nature</p>
      <h1 className="mt-2 text-4xl">ParQ Villa Phuket</h1>
      <p className="mt-3 max-w-2xl text-lg">Designed for Privacy. Created for Living.</p>
      <p className="mt-4 text-lg">
        Starting from <span className="font-bold text-kanda-orange">THB 24.9 million</span>
      </p>

      <ul className="mt-8 grid gap-3">
        {FACTS.map((f) => (
          <li key={f} className="border-l-2 border-kanda-orange-light pl-4">
            {f}
          </li>
        ))}
      </ul>

      <p className="mt-8 text-sm">
        Common fee THB 12,000/month (THB 144,000/year), including 24-hour security, waste collection, common-area
        lighting and shared gardens. Private pool and garden care are not included.
      </p>
    </div>
  );
}
