"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/data/navigation";
import { apartmentData } from "@/data/apartment";
import MobileNav from "./MobileNav";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headerBg = scrolled || !isHome
    ? "bg-primary/95 backdrop-blur-md shadow-lg"
    : "bg-transparent";

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${headerBg}`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex flex-col">
              <span className="text-accent font-display text-lg font-bold tracking-wider">
                {apartmentData.nameEn}
              </span>
              <span className="text-text-secondary text-xs tracking-widest">
                {apartmentData.developer}
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden xl:flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`px-3 py-2 text-sm whitespace-nowrap tracking-wide transition-colors duration-300 relative group ${
                      isActive
                        ? "text-accent"
                        : "text-text-primary hover:text-accent"
                    }`}
                  >
                    {item.label}
                    <span
                      className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-accent transition-all duration-300 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </Link>
                );
              })}
            </nav>

            {/* CTA + Mobile Menu Button */}
            <div className="flex items-center gap-4">
              <Link
                href="/consultation"
                className="hidden xl:inline-flex px-5 py-2 bg-accent text-primary text-sm font-semibold rounded hover:bg-accent-light transition-colors"
              >
                상담신청
              </Link>
              <button
                className="xl:hidden text-text-primary p-2"
                onClick={() => setMobileOpen(true)}
                aria-label="메뉴 열기"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
