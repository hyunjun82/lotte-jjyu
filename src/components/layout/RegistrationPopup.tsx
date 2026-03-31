"use client";

import { useState, useEffect } from "react";
import { submitLead } from "@/lib/storage";

export default function RegistrationPopup() {
  const [show, setShow] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const dismissed = sessionStorage.getItem("popup-dismissed");
    if (dismissed) return;

    const timer = setTimeout(() => setShow(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setShow(false);
    sessionStorage.setItem("popup-dismissed", "true");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    await submitLead({
      type: "quick-registration",
      name: data.get("name") as string,
      phone: data.get("phone") as string,
      timestamp: new Date().toISOString(),
    });

    setSubmitted(true);
    setTimeout(() => {
      handleClose();
      setSubmitted(false);
    }, 2000);
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={handleClose} />

      {/* Modal */}
      <div className="relative bg-primary border border-accent/30 rounded-xl shadow-2xl max-w-md w-full p-8 animate-scale-in">
        {/* Close */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-text-secondary hover:text-text-primary transition-colors"
          aria-label="닫기"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {submitted ? (
          <div className="text-center py-8">
            <p className="text-4xl mb-4">✅</p>
            <p className="text-accent text-xl font-bold font-display">등록이 완료되었습니다!</p>
            <p className="text-text-secondary text-sm mt-2">빠른 시일 내에 연락드리겠습니다.</p>
          </div>
        ) : (
          <>
            <div className="text-center mb-6">
              <p className="text-accent text-sm tracking-[0.3em] mb-2">PENTHILL CASCADE</p>
              <h3 className="text-text-primary text-2xl font-display font-bold mb-2">
                관심고객 사전등록
              </h3>
              <p className="text-text-secondary text-sm">
                지금 등록하시면 분양 소식을 가장 먼저 받아보실 수 있습니다.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="이름"
                  className="w-full p-3 bg-surface-medium border border-white/10 rounded text-text-primary placeholder:text-text-secondary/40 focus:border-accent focus:outline-none"
                />
              </div>
              <div>
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="연락처 (010-0000-0000)"
                  className="w-full p-3 bg-surface-medium border border-white/10 rounded text-text-primary placeholder:text-text-secondary/40 focus:border-accent focus:outline-none"
                />
              </div>
              <label className="flex items-start gap-2 cursor-pointer">
                <input type="checkbox" required className="mt-1 accent-accent" />
                <span className="text-text-secondary text-xs">
                  개인정보 수집·이용에 동의합니다. (필수)
                </span>
              </label>
              <button
                type="submit"
                className="w-full py-3 bg-accent text-primary font-bold rounded text-base hover:bg-accent-light transition-colors"
              >
                사전등록 하기
              </button>
            </form>

            <p className="text-center text-text-secondary/50 text-xs mt-4">
              등록 정보는 분양 안내 목적으로만 사용됩니다.
            </p>
          </>
        )}
      </div>
    </div>
  );
}
