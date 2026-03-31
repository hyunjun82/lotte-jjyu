"use client";

import { useState } from "react";
import AnimatedSection from "@/components/common/AnimatedSection";
import SectionTitle from "@/components/common/SectionTitle";
import { galleryItems } from "@/data/gallery";

const categories = ["전체", "외관", "영상"];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("전체");

  const filtered = activeCategory === "전체"
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center bg-surface-dark">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-dark to-primary" />
        <div className="relative z-10 text-center">
          <AnimatedSection>
            <p className="text-accent tracking-[0.3em] text-sm mb-4">GALLERY</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-text-primary">
              갤러리
            </h1>
          </AnimatedSection>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-24 bg-primary">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection>
            <SectionTitle
              title="갤러리"
              titleEn="PHOTO & VIDEO"
              subtitle="펜트힐 캐스케이드의 아름다운 모습을 만나보세요"
              light
            />
          </AnimatedSection>

          {/* Category Filter */}
          <div className="flex justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-accent text-primary"
                    : "bg-surface-medium text-text-secondary border border-white/10 hover:border-accent/30"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((item, i) => (
              <AnimatedSection key={item.id} delay={i * 0.08}>
                <div className="group bg-surface-medium rounded-lg border border-white/5 overflow-hidden hover:border-accent/30 transition-all duration-300 cursor-pointer">
                  <div className="relative h-56 bg-gradient-to-br from-surface-dark to-surface-medium flex items-center justify-center overflow-hidden">
                    {item.type === "video" ? (
                      <div className="text-center">
                        <span className="text-6xl">🎬</span>
                        <p className="text-text-secondary text-sm mt-2">영상 재생</p>
                      </div>
                    ) : (
                      <div className="text-center">
                        <span className="text-6xl">🖼️</span>
                        <p className="text-text-secondary text-sm mt-2">이미지</p>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/10 transition-colors duration-300" />
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-text-primary text-sm font-semibold">{item.title}</h3>
                      <span className="text-accent text-xs">{item.category}</span>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16 text-text-secondary">
              해당 카테고리에 콘텐츠가 없습니다.
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
