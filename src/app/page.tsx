import Link from "next/link";
import AnimatedSection from "@/components/common/AnimatedSection";
import Button from "@/components/common/Button";
import { apartmentData } from "@/data/apartment";

const quickLinks = [
  { label: "분양안내", desc: "분양가 및 납부일정", href: "/sales-info", icon: "📋" },
  { label: "세대안내", desc: "타입별 평면 안내", href: "/units", icon: "🏠" },
  { label: "입지환경", desc: "강남 프리미엄 입지", href: "/location", icon: "📍" },
  { label: "상담신청", desc: "방문예약 및 상담", href: "/consultation", icon: "📞" },
];

const stats = [
  { value: "130세대", label: "총 세대수" },
  { value: "지상 18층", label: "규모" },
  { value: "183대", label: "주차대수" },
  { value: "강남구", label: "위치" },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-dark via-primary to-surface-dark" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--color-accent)/5%,_transparent_70%)]" />

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <AnimatedSection delay={0.2}>
            <p className="text-accent text-sm md:text-base tracking-[0.4em] mb-6">
              {apartmentData.developer}
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-text-primary mb-4 leading-tight">
              {apartmentData.nameEn}
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={0.6}>
            <p className="text-text-secondary text-lg md:text-xl mb-2">
              {apartmentData.name}
            </p>
            <p className="text-accent/80 text-base md:text-lg font-display italic">
              {apartmentData.tagline}
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.7}>
            <p className="text-text-secondary/60 text-sm mt-3">
              {apartmentData.buildingType} · {apartmentData.location}
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.8}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
              <Button href="/consultation" size="lg">
                상담신청
              </Button>
              <Button href="/complex" variant="outline" size="lg">
                단지소개
              </Button>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={1.2}>
            <div className="mt-16 flex flex-col items-center text-text-secondary text-xs tracking-widest">
              <span>SCROLL</span>
              <div className="w-[1px] h-12 bg-gradient-to-b from-accent to-transparent mt-2 animate-pulse" />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-accent/10 border-y border-accent/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <AnimatedSection key={stat.label} delay={i * 0.1}>
                <div className="text-center">
                  <p className="text-accent text-2xl md:text-3xl font-bold font-display">
                    {stat.value}
                  </p>
                  <p className="text-text-secondary text-sm mt-1">{stat.label}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-24 bg-primary">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <p className="text-accent text-sm tracking-[0.3em] mb-3">QUICK MENU</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-text-primary">
                바로가기
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickLinks.map((link, i) => (
              <AnimatedSection key={link.href} delay={i * 0.1}>
                <Link
                  href={link.href}
                  className="group block p-8 bg-surface-medium rounded-lg border border-white/5 hover:border-accent/30 transition-all duration-300 hover:-translate-y-1"
                >
                  <span className="text-4xl mb-4 block">{link.icon}</span>
                  <h3 className="text-text-primary text-lg font-semibold mb-2 group-hover:text-accent transition-colors">
                    {link.label}
                  </h3>
                  <p className="text-text-secondary text-sm">{link.desc}</p>
                  <div className="mt-4 text-accent text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    자세히 보기 →
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Tagline Section */}
      <section className="py-32 bg-surface-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--color-accent)/8%,_transparent_60%)]" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <p className="text-accent tracking-[0.3em] text-sm mb-6">
              {apartmentData.developer}
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-text-primary leading-snug mb-6">
              {apartmentData.subTagline}
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed max-w-2xl mx-auto">
              강남구 논현동의 프리미엄 입지에 {apartmentData.developer}의 기술력이 만나
              지하 7층 ~ 지상 18층의 고급 주상복합을 완성합니다.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-primary mb-4">
              관심고객 사전등록
            </h2>
            <p className="text-primary/70 mb-8">
              사전등록 고객에게 특별한 혜택을 드립니다.
            </p>
            <Button href="/consultation" variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-accent">
              지금 등록하기
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
