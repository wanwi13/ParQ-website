import type { Metadata } from "next";
import JsonLd from "@/app/_components/JsonLd";
import { LOAN_CALCULATOR } from "@/lib/schema";
import LoanCalculator from "./LoanCalculator";

export const metadata: Metadata = {
  title: "คำนวณผ่อนบ้าน",
  description:
    "คำนวณยอดผ่อนบ้านต่อเดือน รายได้ขั้นต่ำที่ธนาคารน่าจะอนุมัติ และเงินเดือนเท่านี้ซื้อบ้านไอลีฟ (I-LEAF) ได้ราคาเท่าไร",
  alternates: { canonical: "/loan-calculator" },
};

export default function LoanCalculatorPage() {
  return (
    <>
      <JsonLd data={LOAN_CALCULATOR} />
      <LoanCalculator />
    </>
  );
}
