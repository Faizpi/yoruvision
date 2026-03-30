"use client";

import { useTranslation } from "@/shared/i18n/LanguageContext";

interface ResultDisplayProps {
  title: string;
  children: React.ReactNode;
  status?: "idle" | "processing" | "done" | "error";
  onDownload?: () => void;
}

export function ResultDisplay({
  title,
  children,
  status = "idle",
  onDownload,
}: ResultDisplayProps) {
  const { t } = useTranslation();

  const STATUS_CONFIG = {
    idle: { label: t.resultDisplay.waiting, color: "bg-white/70 text-charcoal-light" },
    processing: { label: t.resultDisplay.processing, color: "bg-orange-neon/40 text-charcoal animate-pulse" },
    done: { label: t.resultDisplay.complete, color: "bg-mint/55 text-charcoal" },
    error: { label: t.resultDisplay.error, color: "bg-crimson/45 text-charcoal" },
  };

  const statusConf = STATUS_CONFIG[status];

  return (
    <div className="neo-card">
      <div className="flex items-center justify-between p-4 border-b border-white/65 bg-white/48 rounded-t-[inherit]">
        <h3 className="font-black text-charcoal uppercase tracking-[0.14em] text-xs md:text-sm">
          {title}
        </h3>
        <div className="flex items-center gap-2">
          <span
            className={`px-2 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] neo-border ${statusConf.color}`}
          >
            {statusConf.label}
          </span>
          {status === "done" && onDownload && (
            <button
              onClick={onDownload}
              className="neo-btn neo-btn-primary text-xs px-2 py-1"
            >
              {t.resultDisplay.save}
            </button>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-4">{children}</div>
    </div>
  );
}
