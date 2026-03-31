"use client";

import { useState } from "react";
import AnimatedSection from "@/components/common/AnimatedSection";
import SectionTitle from "@/components/common/SectionTitle";
import { unitTypes } from "@/data/units";

export default function UnitsPage() {
  const [selectedType, setSelectedType] = useState(unitTypes[0].id);
  const unit = unitTypes.find((u) => u.id === selectedType)!;

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center bg-surface-dark">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-dark to-primary" />
        <div className="relative z-10 text-center">
          <AnimatedSection>
            <p className="text-accent tracking-[0.3em] text-sm mb-4">UNIT PLAN</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-text-primary">
              세대안내
            </h1>
          </AnimatedSection>
        </div>
      </section>

      {/* Type Selector */}
      <section className="py-24 bg-primary">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <SectionTitle
              title="타입별 안내"
              titleEn="FLOOR PLAN"
              subtitle="다양한 라이프스타일에 맞춘 최적의 공간 설계"
              light
            />
          </AnimatedSection>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {unitTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => setSelectedType(type.id)}
                className={`px-6 py-3 rounded text-sm font-semibold transition-all duration-300 ${
                  selectedType === type.id
                    ? "bg-accent text-primary"
                    : "bg-surface-medium text-text-secondary border border-white/10 hover:border-accent/30 hover:text-accent"
                }`}
              >
                {type.name}
              </button>
            ))}
          </div>

          {/* Floor Plan Display */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Image */}
            <AnimatedSection direction="left">
              <div className="bg-surface-medium rounded-lg p-8 border border-white/5 min-h-[400px] flex items-center justify-center">
                <div className="text-center text-text-secondary">
                  <p className="text-6xl mb-4">📐</p>
                  <p className="text-lg font-semibold text-text-primary mb-2">{unit.name} 평면도</p>
                  <p className="text-sm">실제 평면도 이미지가 여기에 표시됩니다</p>
                </div>
              </div>
            </AnimatedSection>

            {/* Info */}
            <AnimatedSection direction="right">
              <div className="space-y-6">
                <div>
                  <h3 className="text-accent text-sm tracking-[0.2em] mb-2">TYPE</h3>
                  <p className="text-text-primary text-3xl font-display font-bold">{unit.name}</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <InfoCard label="전용면적" value={`${unit.exclusiveArea}㎡`} />
                  <InfoCard label="공용면적" value={`${unit.commonArea}㎡`} />
                  <InfoCard label="공급면적" value={`${unit.supplyArea}㎡`} />
                  <InfoCard label="세대수" value={`${unit.unitCount}세대`} />
                  <InfoCard label="베이" value={unit.bay} />
                  <InfoCard label="향" value={unit.direction} />
                </div>

                {/* Features */}
                <div>
                  <h4 className="text-text-secondary text-sm mb-3">주요 특징</h4>
                  <div className="flex flex-wrap gap-2">
                    {unit.features.map((f) => (
                      <span
                        key={f}
                        className="px-3 py-1 bg-accent/10 text-accent text-sm rounded border border-accent/20"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* All Types Summary Table */}
          <AnimatedSection>
            <div className="mt-24 overflow-x-auto">
              <h3 className="text-text-primary text-xl font-semibold mb-6">전 타입 비교</h3>
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-accent/30">
                    <th className="text-accent text-left py-3 px-4">타입</th>
                    <th className="text-accent text-center py-3 px-4">전용면적</th>
                    <th className="text-accent text-center py-3 px-4">공급면적</th>
                    <th className="text-accent text-center py-3 px-4">세대수</th>
                    <th className="text-accent text-center py-3 px-4">베이/향</th>
                  </tr>
                </thead>
                <tbody>
                  {unitTypes.map((t) => (
                    <tr
                      key={t.id}
                      className={`border-b border-white/5 ${
                        t.id === selectedType ? "bg-accent/5" : ""
                      }`}
                    >
                      <td className="text-text-primary py-3 px-4 font-semibold">{t.name}</td>
                      <td className="text-text-secondary text-center py-3 px-4">{t.exclusiveArea}㎡</td>
                      <td className="text-text-secondary text-center py-3 px-4">{t.supplyArea}㎡</td>
                      <td className="text-text-secondary text-center py-3 px-4">{t.unitCount}세대</td>
                      <td className="text-text-secondary text-center py-3 px-4">{t.bay} / {t.direction}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}

function InfoCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="p-4 bg-surface-medium rounded border border-white/5">
      <p className="text-text-secondary text-xs mb-1">{label}</p>
      <p className="text-text-primary text-lg font-semibold">{value}</p>
    </div>
  );
}
