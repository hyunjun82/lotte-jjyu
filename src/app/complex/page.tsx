import Image from "next/image";
import AnimatedSection from "@/components/common/AnimatedSection";
import SectionTitle from "@/components/common/SectionTitle";
import { apartmentData } from "@/data/apartment";

const features = [
  { icon: "🏗️", title: "롯데건설 시공", desc: "대한민국 대표 건설사 롯데건설의 기술력과 노하우로 완성하는 프리미엄 주거 공간" },
  { icon: "📍", title: "강남 프리미엄 입지", desc: "강남구 논현동 중심, 교통·상업·문화 인프라가 집중된 최적의 입지" },
  { icon: "🏡", title: "스마트홈 시스템", desc: "IoT 기반 첨단 스마트홈으로 편리하고 안전한 생활" },
  { icon: "🌿", title: "친환경 설계", desc: "에너지 절약형 설계와 쾌적한 환경을 위한 친환경 건축" },
  { icon: "🔒", title: "최첨단 보안", desc: "다중 보안 시스템과 무인 택배 시스템으로 안전한 주거 환경" },
  { icon: "✨", title: "하이엔드 마감", desc: "유로모빌 키친 등 최고급 자재로 완성하는 럭셔리 인테리어" },
];

const overviewStats = [
  { label: "사업명", value: apartmentData.projectName },
  { label: "위치", value: apartmentData.location },
  { label: "건물유형", value: apartmentData.buildingType },
  { label: "규모", value: `지하 ${apartmentData.undergroundFloors}층 ~ 지상 ${apartmentData.maxFloors}층` },
  { label: "총 세대수", value: `${apartmentData.totalUnits}세대` },
  { label: "대지면적", value: apartmentData.landArea },
  { label: "건축면적", value: apartmentData.buildingArea },
  { label: "연면적", value: apartmentData.totalFloorArea },
  { label: "용적률", value: apartmentData.floorAreaRatio },
  { label: "건폐율", value: apartmentData.buildingCoverageRatio },
  { label: "주차대수", value: `${apartmentData.parkingTotal}대 (세대당 ${apartmentData.parkingRatio}대)` },
  { label: "시공사", value: apartmentData.constructor },
];

export default function ComplexPage() {
  return (
    <div className="pt-20">
      {/* Hero Banner */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center bg-surface-dark overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-dark to-primary" />
        <div className="relative z-10 text-center">
          <AnimatedSection>
            <p className="text-accent tracking-[0.3em] text-sm mb-4">COMPLEX OVERVIEW</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-text-primary">
              단지소개
            </h1>
          </AnimatedSection>
        </div>
      </section>

      {/* Building Overview Image */}
      <section className="py-24 bg-surface-dark">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <p className="text-accent tracking-[0.3em] text-sm mb-3">BUILDING OVERVIEW</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-text-primary">
                건물 개요
              </h2>
            </div>
            <div className="rounded-lg overflow-hidden border border-white/10">
              <Image
                src="/images/complex/building-overview.png"
                alt="펜트힐 캐스케이드 건물 개요"
                width={1554}
                height={1078}
                className="w-full h-auto"
                priority
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Overview */}
      <section className="py-24 bg-primary">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <SectionTitle
              title="사업 개요"
              titleEn="PROJECT OVERVIEW"
              subtitle={`강남구 논현동에 들어서는 지하 7층~지상 18층 규모의 고급 도시형 생활주택 130세대`}
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
