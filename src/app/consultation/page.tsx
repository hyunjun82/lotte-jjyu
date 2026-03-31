"use client";

import { useState, useEffect } from "react";
import AnimatedSection from "@/components/common/AnimatedSection";
import SectionTitle from "@/components/common/SectionTitle";
import { apartmentData } from "@/data/apartment";
import { unitTypes } from "@/data/units";
import { submitLead } from "@/lib/storage";

export default function ConsultationPage() {
  const [activeTab, setActiveTab] = useState<"consultation" | "registration">("consultation");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("tab") === "registration") {
      setActiveTab("registration");
    }
  }, []);

  const handleConsultationSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    await submitLead({
      type: "consultation",
      name: data.get("name") as string,
      phone: data.get("phone") as string,
      email: data.get("email") as string,
      unitType: data.get("unitType") as string,
      preferredDate: data.get("preferredDate") as string,
      message: data.get("message") as string,
      timestamp: new Date().toISOString(),
    });

    setSubmitted(true);
    form.reset();
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleRegistrationSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    await submitLead({
      type: "registration",
      name: data.get("name") as string,
      phone: data.get("phone") as string,
      email: data.get("email") as string,
      address: data.get("address") as string,
      source: data.get("source") as string,
      timestamp: new Date().toISOString(),
    });

    setSubmitted(true);
    form.reset();
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="pt-20 pb-20 lg:pb-0">
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center bg-surface-dark">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-dark to-primary" />
        <div className="relative z-10 text-center">
          <AnimatedSection>
            <p className="text-accent tracking-[0.3em] text-sm mb-4">CONTACT</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-text-primary">
              상담신청
            </h1>
            <p className="text-text-secondary mt-4 text-sm">
              {apartmentData.salesOfficePhone}
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24 bg-primary">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          {/* Tabs */}
          <div className="flex gap-2 mb-12">
            <button
              onClick={() => setActiveTab("consultation")}
              className={`flex-1 py-3 rounded font-semibold text-sm transition-all ${
                activeTab === "consultation"
                  ? "bg-accent text-primary"
                  : "bg-surface-medium text-text-secondary border border-white/10"
              }`}
            >
              방문상담 예약
            </button>
            <button
              onClick={() => setActiveTab("registration")}
              className={`flex-1 py-3 rounded font-semibold text-sm transition-all ${
                activeTab === "registration"
                  ? "bg-accent text-primary"
                  : "bg-surface-medium text-text-secondary border border-white/10"
              }`}
            >
              관심고객 등록
            </button>
          </div>

          {/* Success Message */}
          {submitted && (
            <div className="mb-8 p-6 bg-green-500/10 border border-green-500/30 rounded-lg text-center">
              <p className="text-green-400 text-lg font-semibold mb-1">신청이 완료되었습니다!</p>
              <p className="text-green-400/70 text-sm">빠른 시일 내에 연락드리겠습니다.</p>
            </div>
          )}

          {/* Consultation Form */}
          {activeTab === "consultation" && (
            <AnimatedSection>
              <form onSubmit={handleConsultationSubmit} className="space-y-6">
                <SectionTitle
                  title="방문상담 예약"
                  titleEn="CONSULTATION"
                  subtitle="견본주택 방문 상담을 예약해 주세요."
                  light
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField label="이름" name="name" type="text" required placeholder="홍길동" />
                  <FormField label="연락처" name="phone" type="tel" required placeholder="010-0000-0000" />
                </div>
                <FormField label="이메일" name="email" type="email" placeholder="example@email.com" />
                <div>
                  <label className="block text-text-secondary text-sm mb-2">관심 타입</label>
                  <select
                    name="unitType"
                    className="w-full p-3 bg-surface-medium border border-white/10 rounded text-text-primary focus:border-accent focus:outline-none"
                  >
                    <option value="">선택해 주세요</option>
                    {unitTypes.map((t) => (
                      <option key={t.id} value={t.id}>{t.name} ({t.exclusiveArea}㎡ / {(t.exclusiveArea / 3.305785).toFixed(1)}평)</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-text-secondary text-sm mb-2">희망 상담일시</label>
                  <input
                    type="datetime-local"
                    name="preferredDate"
                    className="w-full p-3 bg-surface-medium border border-white/10 rounded text-text-primary focus:border-accent focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-text-secondary text-sm mb-2">문의사항</label>
                  <textarea
                    name="message"
                    rows={4}
                    className="w-full p-3 bg-surface-medium border border-white/10 rounded text-text-primary focus:border-accent focus:outline-none resize-none"
                    placeholder="궁금한 사항을 자유롭게 적어주세요."
                  />
                </div>

                <PrivacyConsent />

                <button
                  type="submit"
                  className="w-full py-4 bg-accent text-primary font-bold rounded text-lg hover:bg-accent-light transition-colors"
                >
                  상담 예약하기
                </button>
              </form>
            </AnimatedSection>
          )}

          {/* Registration Form */}
          {activeTab === "registration" && (
            <AnimatedSection>
              <form onSubmit={handleRegistrationSubmit} className="space-y-6">
                <SectionTitle
                  title="관심고객 등록"
                  titleEn="REGISTRATION"
                  subtitle="사전등록 고객에게 특별한 혜택을 드립니다."
                  light
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField label="이름" name="name" type="text" required placeholder="홍길동" />
                  <FormField label="연락처" name="phone" type="tel" required placeholder="010-0000-0000" />
                </div>
                <FormField label="이메일" name="email" type="email" placeholder="example@email.com" />
                <FormField label="주소" name="address" type="text" placeholder="현재 거주지 주소" />
                <div>
                  <label className="block text-text-secondary text-sm mb-2">알게 된 경로</label>
                  <div className="flex flex-wrap gap-3">
                    {["인터넷 검색", "지인 추천", "현수막/광고", "부동산", "기타"].map((opt) => (
                      <label key={opt} className="flex items-center gap-2 text-text-secondary text-sm cursor-pointer">
                        <input type="radio" name="source" value={opt} className="accent-accent" />
                        {opt}
                      </label>
                    ))}
                  </div>
                </div>

                <PrivacyConsent />

                <button
                  type="submit"
                  className="w-full py-4 bg-accent text-primary font-bold rounded text-lg hover:bg-accent-light transition-colors"
                >
                  관심고객 등록하기
                </button>
              </form>
            </AnimatedSection>
          )}

          {/* Contact Info */}
          <AnimatedSection>
            <div className="mt-16 p-8 bg-surface-medium rounded-lg border border-white/5 text-center">
              <p className="text-accent text-sm tracking-widest mb-3">CONTACT</p>
              <a
                href={`tel:${apartmentData.salesOfficePhone.replace(/-/g, "")}`}
                className="text-text-primary text-3xl font-bold font-display mb-2 block hover:text-accent transition-colors"
              >
                {apartmentData.salesOfficePhone}
              </a>
              <p className="text-text-secondary text-sm">
                {apartmentData.salesOfficeHours}
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}

function FormField({
  label,
  name,
  type,
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="block text-text-secondary text-sm mb-2">
        {label} {required && <span className="text-accent">*</span>}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="w-full p-3 bg-surface-medium border border-white/10 rounded text-text-primary placeholder:text-text-secondary/40 focus:border-accent focus:outline-none"
      />
    </div>
  );
}

function PrivacyConsent() {
  return (
    <div className="p-4 bg-surface-dark rounded border border-white/5">
      <label className="flex items-start gap-3 cursor-pointer">
        <input type="checkbox" required className="mt-1 accent-accent" />
        <span className="text-text-secondary text-sm leading-relaxed">
          개인정보 수집 및 이용에 동의합니다. 수집항목: 이름, 연락처, 이메일. 수집목적: 분양 상담 및 정보 제공. 보유기간: 분양 완료 후 6개월.
          <span className="text-accent"> (필수)</span>
        </span>
      </label>
    </div>
  );
}
