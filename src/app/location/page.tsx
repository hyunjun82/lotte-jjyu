import AnimatedSection from "@/components/common/AnimatedSection";
import SectionTitle from "@/components/common/SectionTitle";
import { infrastructureData } from "@/data/location";
import { apartmentData } from "@/data/apartment";

export default function LocationPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center bg-surface-dark">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "url('/images/complex/building-overview.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent" />
        <div className="relative z-10 text-center">
          <AnimatedSection>
            <p className="text-accent tracking-[0.3em] text-sm mb-4">LOCATION</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-text-primary">
              입지환경
            </h1>
          </AnimatedSection>
        </div>
      </section>

      {/* Location Overview */}
      <section className="py-24 bg-primary">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <SectionTitle
              title="강남의 중심, 논현동"
              titleEn="PREMIUM LOCATION"
              subtitle="교통, 교육, 문화, 상업 인프라가 집중된 강남 핵심 입지"
              light
            />
          </AnimatedSection>

          {/* Map Placeholder */}
          <AnimatedSection>
            <div className="bg-surface-medium rounded-lg border border-white/5 h-[400px] flex items-center justify-center mb-16">
              <div className="text-center text-text-secondary">
                <p className="text-6xl mb-4">🗺️</p>
                <p className="text-lg font-semibold text-text-primary mb-2">위치 안내</p>
                <p className="text-sm">{apartmentData.location}</p>
                <p className="text-xs mt-2 text-accent">카카오맵이 여기에 표시됩니다</p>
              </div>
            </div>
          </AnimatedSection>

          {/* Infrastructure */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {infrastructureData.map((category, i) => (
              <AnimatedSection key={category.category} delay={i * 0.1}>
                <div className="bg-surface-medium rounded-lg border border-white/5 p-6 h-full">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-3xl">{category.categoryIcon}</span>
                    <h3 className="text-text-primary text-lg font-semibold">
                      {category.category}
                    </h3>
                  </div>
                  <div className="space-y-3">
                    {category.items.map((item) => (
                      <div
                        key={item.name}
                        className="flex items-center justify-between py-2 border-b border-white/5 last:border-0"
                      >
                        <span className="text-text-primary text-sm">{item.name}</span>
                        <div className="flex items-center gap-3">
                          <span className="text-accent text-xs">{item.distance}</span>
                          <span className="text-text-secondary text-xs">{item.time}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Transportation Highlight */}
      <section className="py-24 bg-surface-dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <SectionTitle
              title="사통팔달 교통"
              titleEn="TRANSPORTATION"
              subtitle="강남의 중심에서 서울 어디든 빠르게"
              light
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: "🚇", title: "지하철", items: ["7호선 학동역 도보 5분", "수인분당선 강남구청역 도보 8분", "3호선·신분당선 환승 용이"] },
              { icon: "🚗", title: "도로", items: ["경부고속도로 인접", "강남대로 도보 3분", "올림픽대로 접근 용이"] },
              { icon: "🚌", title: "버스", items: ["간선/지선 버스 다수", "광역버스 이용 편리", "강남역·삼성역 10분대"] },
            ].map((t, i) => (
              <AnimatedSection key={t.title} delay={i * 0.1}>
                <div className="text-center p-8 bg-surface-medium rounded-lg border border-white/5">
                  <span className="text-5xl mb-4 block">{t.icon}</span>
                  <h3 className="text-text-primary text-xl font-semibold mb-4">{t.title}</h3>
                  <ul className="space-y-2">
                    {t.items.map((item) => (
                      <li key={item} className="text-text-secondary text-sm">{item}</li>
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
