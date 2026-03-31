import AnimatedSection from "@/components/common/AnimatedSection";
import SectionTitle from "@/components/common/SectionTitle";
import { apartmentData } from "@/data/apartment";

const directions = [
  {
    icon: "🚇",
    method: "지하철",
    steps: [
      "7호선 학동역 3번 출구 → 도보 약 5분",
      "수인분당선 강남구청역 → 도보 약 8분",
    ],
  },
  {
    icon: "🚗",
    method: "자가용",
    steps: [
      "경부고속도로 → 강남 방면 → 논현동 사거리",
      "강남대로 → 논현동 방면 직진",
    ],
  },
  {
    icon: "🚌",
    method: "버스",
    steps: [
      "간선: 140, 402, 420번 → 논현동 정류장 하차",
      "지선: 4211번 → 논현동 사거리 하차 후 도보 3분",
    ],
  },
];

export default function DirectionsPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center bg-surface-dark">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-dark to-primary" />
        <div className="relative z-10 text-center">
          <AnimatedSection>
            <p className="text-accent tracking-[0.3em] text-sm mb-4">DIRECTIONS</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-text-primary">
              오시는 길
            </h1>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24 bg-primary">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <SectionTitle
              title="견본주택 안내"
              titleEn="SALES OFFICE"
              subtitle="펜트힐 캐스케이드 견본주택으로 오시는 길을 안내합니다."
              light
            />
          </AnimatedSection>

          {/* Map Placeholder */}
          <AnimatedSection>
            <div className="bg-surface-medium rounded-lg border border-white/5 h-[400px] flex items-center justify-center mb-8">
              <div className="text-center text-text-secondary">
                <p className="text-6xl mb-4">📍</p>
                <p className="text-lg font-semibold text-text-primary mb-2">견본주택 위치</p>
                <p className="text-sm">{apartmentData.location}</p>
                <p className="text-xs mt-2 text-accent">카카오맵이 여기에 표시됩니다</p>
              </div>
            </div>
          </AnimatedSection>

          {/* Address Info */}
          <AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
              <div className="p-6 bg-surface-medium rounded-lg border border-white/5 text-center">
                <p className="text-accent text-sm mb-2">주소</p>
                <p className="text-text-primary font-semibold text-sm">{apartmentData.salesOfficeAddress}</p>
              </div>
              <div className="p-6 bg-surface-medium rounded-lg border border-white/5 text-center">
                <p className="text-accent text-sm mb-2">전화</p>
                <p className="text-text-primary font-semibold text-xl">{apartmentData.salesOfficePhone}</p>
              </div>
              <div className="p-6 bg-surface-medium rounded-lg border border-white/5 text-center">
                <p className="text-accent text-sm mb-2">운영시간</p>
                <p className="text-text-primary font-semibold text-sm">{apartmentData.salesOfficeHours}</p>
              </div>
            </div>
          </AnimatedSection>

          {/* Directions */}
          <AnimatedSection>
            <h3 className="text-text-primary text-xl font-semibold mb-8 text-center">교통편 안내</h3>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {directions.map((d, i) => (
              <AnimatedSection key={d.method} delay={i * 0.1}>
                <div className="p-6 bg-surface-medium rounded-lg border border-white/5 h-full">
                  <div className="text-center mb-6">
                    <span className="text-5xl">{d.icon}</span>
                    <h4 className="text-text-primary font-semibold text-lg mt-3">{d.method}</h4>
                  </div>
                  <ul className="space-y-3">
                    {d.steps.map((step) => (
                      <li key={step} className="text-text-secondary text-sm flex gap-2">
                        <span className="text-accent shrink-0">•</span>
                        {step}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
