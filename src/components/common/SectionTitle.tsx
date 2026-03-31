import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  titleEn: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
}

export default function SectionTitle({
  title,
  titleEn,
  subtitle,
  align = "center",
  light = false,
}: SectionTitleProps) {
  return (
    <div className={cn("mb-16", align === "center" && "text-center")}>
      <p className="text-accent text-sm tracking-[0.3em] font-medium mb-3">
        {titleEn}
      </p>
      <h2
        className={cn(
          "font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4",
          light ? "text-text-primary" : "text-text-dark"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "text-base md:text-lg max-w-2xl leading-relaxed",
            align === "center" && "mx-auto",
            light ? "text-text-secondary" : "text-text-dark/60"
          )}
        >
          {subtitle}
        </p>
      )}
      <div
        className={cn(
          "w-16 h-[2px] bg-accent mt-6",
          align === "center" && "mx-auto"
        )}
      />
    </div>
  );
}
