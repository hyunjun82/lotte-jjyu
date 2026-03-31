import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/layout/ScrollToTop";

export const metadata: Metadata = {
  title: "펜트힐 캐스케이드 | PENTHILL CASCADE - 롯데건설",
  description:
    "롯데건설이 선보이는 하이엔드 주거 펜트힐 캐스케이드. 한강을 품은 프리미엄 라이프의 새로운 기준. 분양 정보, 세대 안내, 입지 환경을 확인하세요.",
  keywords: "펜트힐 캐스케이드, 롯데건설, 분양, 아파트, 서초구, 한강뷰",
  openGraph: {
    title: "펜트힐 캐스케이드 | PENTHILL CASCADE",
    description: "롯데건설이 선보이는 하이엔드 주거의 새로운 기준",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full antialiased">
      <head>
        <link
          rel="stylesheet"
          as="style"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+KR:wght@400;500;600;700;900&display=swap"
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
