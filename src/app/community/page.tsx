import AnimatedSection from "@/components/common/AnimatedSection";
import SectionTitle from "@/components/common/SectionTitle";
import { facilities } from "@/data/facilities";

export default function CommunityPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center bg-surface-dark">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-dark to-primary" />
        <div className="relative z-10 text-center">
          <AnimatedSection>
            <p className="text-accent tracking-[0.3em] text-sm mb-4">COMMUNITY</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-text-primary">
              커뮤니티
            </h1>
          </AnimatedSection>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-24 bg-primary">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <SectionTitle
              title="커뮤니티 시설"
              titleEn="PREMIUM FACILITIES"
              subtitle="입주민의 품격 있는 라이프스타일을 위한 프리미엄 커뮤니티 시설"
              light
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((f, i) => (
              <AnimatedSection key={f.id} delay={i * 0.08}>
                <div className="group bg-surface-medium rounded-lg border border-white/5 overflow-hidden hover:border-accent/30 transition-all duration-300">
                  {/* Image Placeholder */}
                  <div className="h-48 bg-gradient-to-br from-surface-dark to-surface-medium flex items-center justify-center">
                    <span className="text-6xl group-hover:scale-110 transition-transform duration-300">
                      {f.icon}
                    </span>
                  </div>
                  {/* Content */}
                  <div className="p-6">
                    <p className="text-accent text-xs tracking-widest mb-1">{f.nameEn}</p>
                    <h3 className="text-text-primary text-lg font-semibold mb-3">{f.name}</h3>
                    <p className="text-text-secondary text-sm leading-relaxed">{f.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Lifestyle Banner */}
      <section className="py-32 bg-surface-dark relative">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <p className="text-accent tracking-[0.3em] text-sm mb-6">LIFESTYLE</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-text-primary mb-6">
              일상이 특별해지는 공간
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed">
              펜트힐 캐스케이드의 커뮤니티 시설은 단순한 편의시설을 넘어,
              입주민 모두가 함께 누리는 프리미엄 라이프스타일 공간입니다.
            </p>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
