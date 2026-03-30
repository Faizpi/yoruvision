"use client";

import { useTranslation } from "@/shared/i18n/LanguageContext";
import { YoruLogo } from "@/shared/components/YoruLogo";

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="mt-14 border-t border-white/55 bg-white/34 backdrop-blur-2xl">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="flex items-center gap-3">
            <YoruLogo compact />
          </div>

          <p className="text-charcoal-light text-xs font-mono text-center leading-relaxed">
            {t.footer.credit}<br />
            {t.footer.copyright}
          </p>

          <div className="flex gap-2">
            <span className="px-2 py-1 text-xs font-mono neo-border bg-white/64 text-charcoal-light">
              Next.js
            </span>
            <span className="px-2 py-1 text-xs font-mono neo-border bg-white/64 text-charcoal-light">
              TensorFlow.js
            </span>
            <span className="px-2 py-1 text-xs font-mono neo-border bg-white/64 text-charcoal-light">
              Canvas API
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
