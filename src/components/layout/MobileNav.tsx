"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/data/navigation";
import { apartmentData } from "@/data/apartment";

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileNav({ open, onClose }: MobileNavProps) {
  const pathname = usePathname();

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 z-50 transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-primary z-50 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-white/10">
            <div>
              <p className="text-accent font-display text-lg font-bold">
                {apartmentData.nameEn}
              </p>
              <p className="text-text-secondary text-xs">{apartmentData.developer}</p>
            </div>
            <button
              onClick={onClose}
              className="text-text-primary p-2"
              aria-label="메뉴 닫기"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Nav Items */}
          <nav className="flex-1 py-4">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className={`flex items-center justify-between px-6 py-4 transition-colors ${
                    isActive
                      ? "text-accent bg-accent/10 border-r-2 border-accent"
                      : "text-text-primary hover:text-accent hover:bg-white/5"
                  }`}
                >
                  <span className="text-base">{item.label}</span>
                  <span className="text-xs text-text-secondary">{item.labelEn}</span>
                </Link>
              );
            })}
          </nav>

          {/* CTA */}
          <div className="p-6 border-t border-white/10">
            <Link
              href="/consultation"
              onClick={onClose}
              className="block w-full py-3 bg-accent text-primary text-center font-semibold rounded hover:bg-accent-light transition-colors"
            >
              상담신청
            </Link>
            <p className="text-center text-text-secondary text-sm mt-3">
              {apartmentData.salesOfficePhone}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
