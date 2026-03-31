"use client";

import { useState } from "react";
import Link from "next/link";
import { apartmentData } from "@/data/apartment";

export default function FloatingCTA() {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      {/* Desktop Floating Button */}
      <div className="fixed bottom-8 left-8 z-40 hidden lg:flex flex-col items-start gap-3">
        {expanded && (
          <div className="flex flex-col gap-2 mb-1 animate-fade-in">
            <a
              href={`tel:${apartmentData.salesOfficePhone.replace(/-/g, "")}`}
              className="flex items-center gap-3 bg-primary border border-accent/30 text-text-primary px-5 py-3 rounded-full shadow-lg hover:bg-accent hover:text-primary transition-all"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="text-sm font-semibold">전화상담</span>
            </a>
            <Link
              href="/consultation"
              className="flex items-center gap-3 bg-primary border border-accent/30 text-text-primary px-5 py-3 rounded-full shadow-lg hover:bg-accent hover:text-primary transition-all"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              <span className="text-sm font-semibold">방문예약</span>
            </Link>
            <Link
              href="/consultation?tab=registration"
              className="flex items-center gap-3 bg-primary border border-accent/30 text-text-primary px-5 py-3 rounded-full shadow-lg hover:bg-accent hover:text-primary transition-all"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <span className="text-sm font-semibold">관심고객 등록</span>
            </Link>
          </div>
        )}
        <button
          onClick={() => setExpanded(!expanded)}
          className={`w-14 h-14 rounded-full flex items-center justify-center shadow-xl transition-all duration-300 hover:scale-110 ${
            expanded ? "bg-white text-primary rotate-45" : "bg-accent text-primary"
          }`}
          aria-label="상담 메뉴"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
          </svg>
        </button>
      </div>

      {/* Mobile Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 lg:hidden bg-primary/95 backdrop-blur-md border-t border-accent/20 z-50 safe-area-bottom">
        <div className="grid grid-cols-3 divide-x divide-white/10">
          <a
            href={`tel:${apartmentData.salesOfficePhone.replace(/-/g, "")}`}
            className="flex flex-col items-center py-3 text-accent hover:bg-accent/10 transition-colors"
          >
            <svg className="w-5 h-5 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span className="text-xs font-semibold">전화상담</span>
          </a>
          <Link
            href="/consultation"
            className="flex flex-col items-center py-3 text-accent hover:bg-accent/10 transition-colors"
          >
            <svg className="w-5 h-5 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="text-xs font-semibold">방문예약</span>
          </Link>
          <Link
            href="/consultation?tab=registration"
            className="flex flex-col items-center py-3 text-text-primary bg-accent hover:bg-accent-light transition-colors"
          >
            <svg className="w-5 h-5 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span className="text-xs font-bold">관심등록</span>
          </Link>
        </div>
      </div>
    </>
  );
}
