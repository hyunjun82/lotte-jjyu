import Link from "next/link";
import { navItems } from "@/data/navigation";
import { apartmentData } from "@/data/apartment";

export default function Footer() {
  return (
    <footer className="bg-primary-dark border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-accent font-display text-xl font-bold mb-2">
              {apartmentData.nameEn}
            </h3>
            <p className="text-text-secondary text-sm mb-4">{apartmentData.name}</p>
            <p className="text-text-secondary text-sm leading-relaxed">
              {apartmentData.location}
            </p>
            <p className="text-accent text-lg font-bold mt-4">
              {apartmentData.salesOfficePhone}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-text-primary font-semibold mb-4 text-sm tracking-widest">
              MENU
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-text-secondary text-sm hover:text-accent transition-colors py-1"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Info */}
          <div>
            <h4 className="text-text-primary font-semibold mb-4 text-sm tracking-widest">
              VISIT US
            </h4>
            <div className="text-text-secondary text-sm space-y-2">
              <p>견본주택: {apartmentData.salesOfficeAddress}</p>
              <p>운영시간: {apartmentData.salesOfficeHours}</p>
              <p>시공사: {apartmentData.constructor}</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-text-secondary text-xs">
            © {new Date().getFullYear()} {apartmentData.developer}. All rights reserved.
          </p>
          <p className="text-text-secondary text-xs">
            본 홈페이지의 내용은 광고로서 CG 및 이미지컷으로 실제와 다를 수 있습니다.
          </p>
        </div>
      </div>
    </footer>
  );
}
