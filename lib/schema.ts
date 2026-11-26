// ข้อมูลโครงสร้าง schema.org (JSON-LD) ของแต่ละหน้า — ให้ Google และ AI เข้าใจว่าเว็บนี้คือใคร ขายอะไร ราคาเท่าไร
// ราคา ทำเล ตัวเลข คัดจาก 00-Context/01-Company.md เท่านั้น
import { ALL_FAQ } from "@/lib/faq";
import { CONTACT, SITE_NAME, SITE_URL } from "@/lib/site";

const ORG_ID = `${SITE_URL}/#organization`;

export const ORGANIZATION = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": ORG_ID,
      name: "บริษัท กานดา พร็อพเพอร์ตี้ จำกัด",
      alternateName: ["KANDA PROPERTY", "Kanda", "กานดา"],
      slogan: "Smile of living",
      url: SITE_URL,
      logo: `${SITE_URL}/logo-kanda.jpg`,
      telephone: "+66-94-249-3985",
      address: {
        "@type": "PostalAddress",
        streetAddress: "195 ม.5 ถ.พระรามที่ 2 ต.พันท้ายนรสิงห์",
        addressLocality: "อ.เมืองสมุทรสาคร",
        addressRegion: "สมุทรสาคร",
        postalCode: "74000",
        addressCountry: "TH",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+66-94-249-3985",
        contactType: "sales",
        availableLanguage: ["th"],
      },
      sameAs: [CONTACT.facebook, CONTACT.line, "https://www.kd.co.th"],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      inLanguage: "th-TH",
      publisher: { "@id": ORG_ID },
    },
  ],
};

const ILEAF_AREAS =
  "พระราม 2 กม.14, รามอินทรา–คู้บอน, ประชาอุทิศ 90, รังสิต–คลอง 4, ลำลูกกา, เทพารักษ์–บางบ่อ, ราชพฤกษ์–กาญจนาฯ, เศรษฐกิจ–บางปลา, พัทยา–จอมเทียน, ถลาง–ภูเก็ต";

function ileafHome(type: string, price: number, image?: string) {
  return {
    "@type": "Product",
    name: `ไอลีฟ (I-LEAF) ${type}`,
    category: type,
    description: `${type}ไอลีฟ (I-LEAF) จากกานดา พร็อพเพอร์ตี้ ราคาเริ่ม ${price / 1_000_000} ล้านบาท ทำเล: ${ILEAF_AREAS}`,
    ...(image ? { image: `${SITE_URL}${image}` } : {}),
    brand: { "@type": "Brand", name: "ไอลีฟ (I-LEAF)" },
    manufacturer: { "@id": ORG_ID },
    offers: {
      "@type": "Offer",
      price,
      priceCurrency: "THB",
      description: "ราคาเริ่มต้น",
      url: `${SITE_URL}/i-leaf`,
      seller: { "@id": ORG_ID },
    },
  };
}

export const ILEAF = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "บ้านไอลีฟ (I-LEAF)",
  itemListElement: [
    ileafHome("ทาวน์โฮม", 2_190_000, "/home/hero/ileaf-townhome-wide.webp"),
    ileafHome("บ้านแฝด", 3_290_000, "/home/hero/ileaf-twin-wide.webp"),
    ileafHome("บ้านเดี่ยว", 4_290_000),
  ].map((item, i) => ({ "@type": "ListItem", position: i + 1, item })),
};

export const PARQ = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "GatedResidenceCommunity",
      "@id": `${SITE_URL}/parq-villa-phuket#place`,
      name: "ParQ Villa Phuket",
      description:
        "22 private pool villas on about 12 rai in Thep Kasattri, Thalang, Phuket. Magnolia (13 villas) and Gardenia (9 villas). Over 5 rai of shared garden with a stream and jogging path.",
      url: `${SITE_URL}/parq-villa-phuket`,
      image: `${SITE_URL}/home/hero/parq-garden-wide.webp`,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Thep Kasattri, Thalang",
        addressRegion: "Phuket",
        addressCountry: "TH",
      },
      amenityFeature: [
        "Private pool with jacuzzi in every villa",
        "Shared garden over 5 rai with a private stream",
        "Jogging path",
        "24-hour security",
      ].map((name) => ({ "@type": "LocationFeatureSpecification", name, value: true })),
    },
    {
      "@type": "Product",
      name: "ParQ Villa Phuket — Private Pool Villa",
      description:
        "2-storey pool villa, 3 master bedrooms, 3 bathrooms, living space 368–457 sq.m., land about 327–652 sq.m., 7.1 m living room ceiling. Freehold / Leasehold. Common fee THB 12,000/month.",
      image: `${SITE_URL}/home/hero/parq-magnolia-wide.webp`,
      brand: { "@type": "Brand", name: "ParQ Villa Phuket" },
      manufacturer: { "@id": ORG_ID },
      offers: {
        "@type": "Offer",
        price: 24_900_000,
        priceCurrency: "THB",
        description: "Starting price",
        url: `${SITE_URL}/parq-villa-phuket`,
        seller: { "@id": ORG_ID },
      },
    },
  ],
};

export const LOAN_CALCULATOR = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "คำนวณผ่อนบ้าน",
  url: `${SITE_URL}/loan-calculator`,
  description:
    "คำนวณยอดผ่อนบ้านต่อเดือน รายได้ขั้นต่ำที่ธนาคารน่าจะอนุมัติ (คิดหนี้รวมไม่เกิน 40% ของรายได้) และเงินเดือนเท่านี้ซื้อบ้านได้ราคาเท่าไร",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Any",
  inLanguage: "th-TH",
  isAccessibleForFree: true,
  offers: { "@type": "Offer", price: 0, priceCurrency: "THB" },
  publisher: { "@id": ORG_ID },
};

export const FAQ_PAGE = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: ALL_FAQ.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};
