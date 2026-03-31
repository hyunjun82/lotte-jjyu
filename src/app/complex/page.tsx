import AnimatedSection from "@/components/common/AnimatedSection";
import SectionTitle from "@/components/common/SectionTitle";
import { apartmentData } from "@/data/apartment";

const features = [
  { icon: "🏗️", title: "프리미엄 시공", desc: "롯데건설의 첨단 기술력과 노하우로 완성하는 하이엔드 주거 공간" },
  { icon: "🌊", title: "한강 조망", desc: "탁 트인 한강 뷰를 일상에서 누리는 프리미엄 리버뷰 라이프" },
  { icon: "🏡", title: "스마트홈", desc: "IoT 기반 첨단 스마트홈 시스템으로 편리하고 안전한 생활" },
  { icon: "🌿", title: "친환경 설계", desc: "에너지 절약형 설계와 풍부한 녹지로 건강한 주거 환경 실현" },
  { icon: "🔒", title: "최첨단 보안", desc: "3중 보안 시스템과 무인 택배 시스템으로 안전한 주거 공간" },
  { icon: "✨", title: "하이엔드 마감", desc: "유로모빌 키친 등 최고급 자재로 완성하는 럭셔리 인테리어" },
];

const overviewStats = [
  { label: "위치", value: apartmentData.location },
  { label: "규모", value: `지하 3층 ~ 지상 ${apartmentData.maxFloors}층, ${apartmentData.totalBuildings}개동` },
  { label: "총 세대수", value: `${apartmentData.totalUnits.toLocaleString()}세대` },
  { label: "주차", value: `세대당 ${apartmentData.parkingRatio}대 (지하주차장)` },
  { label: "입주예정", value: apartmentData.expectedMoveIn },
  { label: "시공사", value: apartmentData.constructor },
];

export default function ComplexPage() {
  return (
    <div className="pt-20">
      {/* Hero Banner */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center bg-surface-dark overflow-hidden">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: "url('/images/complex/bird-eye-view.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent" />
        <div className="relative z-10 text-center">
          <AnimatedSection>
            <p className="text-accent tracking-[0.3em] text-sm mb-4">COMPLEX OVERVIEW</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-text-primary">
              단지소개
            </h1>
          </AnimatedSection>
        </div>
      </section>

      {/* Overview */}
      <section className="py-24 bg-primary">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <SectionTitle
              title="단지 개요"
              titleEn="COMPLEX OVERVIEW"
              subtitle={`${apartmentData.name}은 ${apartmentData.developer}가 심혈을 기울여 선보이는 프리미엄 주거 단지입니다.`}
              light
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {overviewStats.map((stat, i) => (
              <AnimatedSection key={stat.label} delay={i * 0.05}>
                <div className="flex items-center gap-4 p-5 bg-surface-medium rounded-lg border border-white/5">
                  <span className="text-accent font-semibold text-sm w-20 shrink-0">{stat.label}</span>
                  <span className="text-text-primary text-sm">{stat.value}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Developer */}
      <section className="py-24 bg-surface-dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <div className="bg-surface-medium rounded-lg p-12 flex items-center justify-center min-h-[300px] border border-white/5">
                <div className="text-center">
                  <p className="text-accent font-display text-3xl font-bold mb-2">LOTTE E&C</p>
                  <p className="text-text-secondary">롯데건설</p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <p className="text-accent tracking-[0.3em] text-sm mb-4">DEVELOPER</p>
              <h3 className="font-display text-3xl font-bold text-text-primary mb-6">
                롯데건설
              </h3>
              <p className="text-text-secondary leading-relaxed mb-6">
                대한민국을 대표하는 건설사 롯데건설은 최고의 기술력과 풍부한 경험을 바탕으로
                프리미엄 주거 문화를 선도하고 있습니다. 펜트힐 캐스케이드는 롯데건설의 하이엔드
                주거 브랜드로서 최고급 마감재와 첨단 설계를 통해 차원이 다른 주거 경험을 선사합니다.
              </p>
              <div className="flex gap-8 text-center">
                <div>
                  <p className="text-accent text-2xl font-bold font-display">50+</p>
                  <p className="text-text-secondary text-sm">시공 실적 (년)</p>
                </div>
                <div>
                  <p className="text-accent text-2xl font-bold font-display">100만+</p>
                  <p className="text-text-secondary text-sm">누적 세대</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-primary">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <SectionTitle
              title="특장점"
              titleEn="KEY FEATURES"
              subtitle="펜트힐 캐스케이드만의 차별화된 프리미엄 가치"
              light
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <AnimatedSection key={f.title} delay={i * 0.08}>
                <div className="p-8 bg-surface-medium rounded-lg border border-white/5 hover:border-accent/30 transition-all duration-300 h-full">
                  <span className="text-4xl mb-4 block">{f.icon}</span>
                  <h3 className="text-text-primary text-lg font-semibold mb-3">{f.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{f.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
