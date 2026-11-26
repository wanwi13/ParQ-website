import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

// เปิดให้ทุกบอทเข้าได้ รวมบอท AI (ChatGPT, Claude, Perplexity, Gemini ฯลฯ)
// ระบุชื่อบอท AI ไว้ชัด ๆ เพื่อให้รู้ว่าตั้งใจเปิดให้ ไม่ใช่ลืมปิด
const AI_BOTS = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-User",
  "Claude-SearchBot",
  "anthropic-ai",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot-Extended",
  "Meta-ExternalAgent",
  "CCBot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: AI_BOTS, allow: "/" },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
