"use client";

import { useState } from "react";
import AnimatedSection from "@/components/common/AnimatedSection";
import SectionTitle from "@/components/common/SectionTitle";
import { unitTypes } from "@/data/units";
import { apartmentData } from "@/data/apartment";

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
              subtitle={`총 ${apartmentData.totalUnits}세대, 5개 타입으로 구성된 도시형 생활주택`}
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
                <span className="ml-2 text-xs opacity-70">({type.unitCount}세대)</span>
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
                  <p className="text-sm">교육자료 업로드 후 실제 평면도가 표시됩니다</p>
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
                  <InfoCard label="평형" value={`${(unit.exclusiveArea / 3.305785).toFixed(1)}평`} />
                  <InfoCard label="세대수" value={`${unit.unitCount}세대`} />
                  <InfoCard label="건물유형" value="도시형 생활주택" />
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
                    <th className="text-accent text-center py-3 px-4">전용면적 (㎡)</th>
                    <th className="text-accent text-center py-3 px-4">전용면적 (평)</th>
                    <th className="text-accent text-center py-3 px-4">세대수</th>
                  </tr>
                </thead>
                <tbody>
                  {unitTypes.map((t) => (
                    <tr
                      key={t.id}
                      className={`border-b border-white/5 cursor-pointer hover:bg-accent/5 transition-colors ${
                        t.id === selectedType ? "bg-accent/10" : ""
                      }`}
                      onClick={() => setSelectedType(t.id)}
                    >
                      <td className="text-text-primary py-3 px-4 font-semibold">{t.name}</td>
                      <td className="text-text-secondary text-center py-3 px-4">{t.exclusiveArea}㎡</td>
                      <td className="text-text-secondary text-center py-3 px-4">{(t.exclusiveArea / 3.305785).toFixed(1)}평</td>
                      <td className="text-text-secondary text-center py-3 px-4">{t.unitCount}세대</td>
                    </tr>
                  ))}
                  <tr className="border-t border-accent/30 font-bold">
                    <td className="text-accent py-3 px-4">합계</td>
                    <td className="text-center py-3 px-4 text-text-secondary">-</td>
                    <td className="text-center py-3 px-4 text-text-secondary">-</td>
                    <td className="text-accent text-center py-3 px-4">130세대</td>
                  </tr>
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
