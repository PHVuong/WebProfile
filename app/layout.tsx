import type { Metadata, Viewport } from "next";
import "@/styles/tokens.css";
import "@/styles/components.css";

export const metadata: Metadata = {
  title: "Phan Hùng Vương · Web Backend Developer",
  description: "Sinh viên năm 4 ngành Công nghệ phần mềm tại Đại học Duy Tân. Chuyên môn: C#, Java, ASP.NET Core, Spring Boot, SQL Server, PostgreSQL, Gemini API. Đang tìm kiếm cơ hội thực tập Web Backend.",
  keywords: [
    "Phan Hùng Vương",
    "Web Backend Developer",
    "ASP.NET Core",
    "C#",
    "Spring Boot",
    "Java",
    "Đại học Duy Tân",
    "Thực tập Web Backend",
  ],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Schibsted+Grotesk:wght@600;700&family=Instrument+Sans:wght@400;500;600&family=DM+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
