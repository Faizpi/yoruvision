"use client";

import Link from "next/link";
import { useTranslation } from "@/shared/i18n/LanguageContext";

interface ModuleCardProps {
  href: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  tags: string[];
  accentColor?: "orange" | "teal" | "mint" | "lavender" | "crimson";
}

const ACCENT_MAP = {
  orange: "from-orange-neon/80 via-orange-light/70 to-teal-mid/70",
  teal: "from-orange-neon/80 via-orange-light/70 to-teal-mid/70",
  mint: "from-orange-neon/80 via-orange-light/70 to-teal-mid/70",
  lavender: "from-orange-neon/80 via-orange-light/70 to-teal-mid/70",
  crimson: "from-orange-neon/80 via-orange-light/70 to-teal-mid/70",
};

const TAG_COLORS = {
  orange: "bg-white/62 text-charcoal-light",
  teal: "bg-white/62 text-charcoal-light",
  mint: "bg-white/62 text-charcoal-light",
  lavender: "bg-white/62 text-charcoal-light",
  crimson: "bg-white/62 text-charcoal-light",
};

export function ModuleCard({
  href,
  icon,
  title,
  description,
  tags,
  accentColor = "orange",
}: ModuleCardProps) {
  const { t } = useTranslation();

  return (
    <Link href={href} className="block group">
      <div className="neo-card frosted-module liquid-wet frost-dots neo-hover h-full flex flex-col overflow-hidden">
        <div className="absolute top-2.5 right-2.5 w-2 h-2 rounded-full bg-crimson/80 shadow-[0_0_0_3px_rgba(255,255,255,0.4)]" />
        <div
          className={`h-2 bg-gradient-to-r ${ACCENT_MAP[accentColor]} border-b border-white/70`}
        />

        <div className="p-4 md:p-4 flex flex-col flex-1">
          <div className="mb-3 group-hover:scale-105 transition-transform origin-left w-fit p-2.5 bg-white/84 neo-border inline-block text-charcoal shadow-[0_10px_22px_rgba(90,127,165,0.24)]">
            {icon}
          </div>

          <h3 className="font-black text-base md:text-lg text-charcoal uppercase tracking-[0.08em] mb-1.5 leading-tight">
            {title}
          </h3>

          <p className="text-charcoal text-[13px] leading-[1.45] flex-1 mb-3.5 font-medium">
            {description}
          </p>

          <div className="flex flex-wrap gap-1.5 mb-3.5">
            {tags.map((tag) => (
              <span
                key={tag}
                className={`px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.08em] neo-border ${TAG_COLORS[accentColor]}`}
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="neo-btn neo-btn-primary px-3 py-2 text-[10px] md:text-[11px] text-center justify-center transition-all animate-pulse-glow">
            {t.modules.launchModule}
          </div>
        </div>
      </div>
    </Link>
  );
}
