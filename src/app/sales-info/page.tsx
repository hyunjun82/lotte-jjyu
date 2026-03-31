import AnimatedSection from "@/components/common/AnimatedSection";
import SectionTitle from "@/components/common/SectionTitle";
import Button from "@/components/common/Button";
import { pricingData, paymentSchedule } from "@/data/pricing";
import { apartmentData } from "@/data/apartment";

export default function SalesInfoPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center bg-surface-dark">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-dark to-primary" />
        <div className="relative z-10 text-center">
          <AnimatedSection>
            <p className="text-accent tracking-[0.3em] text-sm mb-4">SALES INFO</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-text-primary">
              분양안내
            </h1>
          </AnimatedSection>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="py-24 bg-primary">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <SectionTitle
              title="타입별 세대 안내"
              titleEn="UNIT TYPES"
              subtitle="총 130세대, 5개 타입으로 구성"
              light
            />
          </AnimatedSection>

          <AnimatedSection>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-accent/30">
                    <th className="text-accent text-left py-4 px-6">타입</th>
                    <th className="text-accent text-center py-4 px-6">전용면적 (㎡)</th>
                    <th className="text-accent text-center py-4 px-6">전용면적 (평)</th>
                    <th className="text-accent text-center py-4 px-6">세대수</th>
                  </tr>
                </thead>
                <tbody>
                  {pricingData.map((p) => (
                    <tr key={p.typeId} className="border-b border-white/5 hover:bg-accent/5 transition-colors">
                      <td className="text-text-primary font-semibold py-4 px-6">{p.typeName}</td>
                      <td className="text-text-secondary text-center py-4 px-6">{p.supplyArea}㎡</td>
                      <td className="text-text-secondary text-center py-4 px-6">
                        {(p.supplyArea / 3.305785).toFixed(1)}평
                      </td>
                      <td className="text-text-primary text-center py-4 px-6 font-semibold">
                        {p.typeId === "A" ? 70 : p.typeId === "B" ? 16 : p.typeId === "C" ? 4 : p.typeId === "C1" ? 2 : 38}세대
                      </td>
                    </tr>
                  ))}
                  <tr className="border-t-2 border-accent/30 font-bold">
                    <td className="text-accent py-4 px-6">합계</td>
                    <td className="text-center py-4 px-6 text-text-secondary">-</td>
                    <td className="text-center py-4 px-6 text-text-secondary">-</td>
                    <td className="text-accent text-center py-4 px-6">130세대</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-6 p-4 bg-accent/5 rounded-lg border border-accent/20">
              <p className="text-accent text-sm font-semibold mb-1">분양가 안내</p>
              <p className="text-text-secondary text-sm">
                분양가는 추후 분양 공고 시 확정됩니다. 상담신청을 통해 최신 정보를 받아보세요.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Payment Schedule */}
      <section className="py-24 bg-surface-dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <SectionTitle
              title="납부 일정"
              titleEn="PAYMENT SCHEDULE"
              subtitle="분양대금 납부 일정 안내"
              light
            />
          </AnimatedSection>

          <div className="max-w-3xl mx-auto">
            {paymentSchedule.map((s, i) => (
              <AnimatedSection key={s.stage} delay={i * 0.05}>
                <div className="flex items-center gap-6 mb-6">
                  <div className="flex flex-col items-center">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shrink-0 ${
                      i === 0 ? "bg-accent text-primary" : i === paymentSchedule.length - 1 ? "bg-accent text-primary" : "bg-surface-medium text-accent border border-accent/30"
                    }`}>
                      {s.percentage}%
                    </div>
                    {i < paymentSchedule.length - 1 && (
                      <div className="w-[1px] h-6 bg-accent/20" />
                    )}
                  </div>
                  <div className="flex-1 p-4 bg-surface-medium rounded-lg border border-white/5">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="text-text-primary font-semibold">{s.stage}</h4>
                      <span className="text-accent text-sm">{s.date}</span>
                    </div>
                    <p className="text-text-secondary text-sm">{s.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection>
            <div className="text-center mt-12">
              <Button href="/consultation" size="lg">
                분양 상담 신청하기
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
