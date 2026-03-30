interface YoruLogoProps {
  compact?: boolean;
  markOnly?: boolean;
  className?: string;
}

export function YoruLogo({
  compact = false,
  markOnly = false,
  className = "",
}: YoruLogoProps) {
  const markSize = compact ? "w-10 h-10" : "w-14 h-14";
  const titleSize = compact ? "text-lg" : "text-3xl";
  const subtitleSize = compact ? "text-[10px]" : "text-xs";

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div
        className={`${markSize} relative overflow-hidden rounded-2xl border border-white/70 bg-white/35 shadow-[0_14px_28px_rgba(117,163,214,0.24)] backdrop-blur-xl`}
        aria-hidden="true"
      >
        <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full">
          <defs>
            <linearGradient id="yoru-ice" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#bfd8f4" stopOpacity="0.8" />
            </linearGradient>
            <linearGradient id="yoru-steel" x1="0" y1="1" x2="1" y2="0">
              <stop offset="0%" stopColor="#4e6987" />
              <stop offset="100%" stopColor="#86b5e5" />
            </linearGradient>
          </defs>

          <rect x="8" y="8" width="84" height="84" rx="20" fill="url(#yoru-ice)" />
          <circle cx="72" cy="28" r="10" fill="#f8fcff" fillOpacity="0.88" />
          <circle cx="72" cy="28" r="6" fill="#d4e6fb" />
          <circle cx="26" cy="26" r="6" fill="#d26d7b" fillOpacity="0.78" />

          <path
            d="M22 74 L74 22"
            stroke="url(#yoru-steel)"
            strokeWidth="7"
            strokeLinecap="round"
          />
          <path
            d="M30 79 L79 30"
            stroke="#d8edff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeOpacity="0.9"
          />
          <path
            d="M36 74 L50 88"
            stroke="#5f7b99"
            strokeWidth="6"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {!markOnly && (
        <div className="leading-none">
          <p className={`${titleSize} font-black uppercase tracking-[0.24em] text-charcoal`}>
            Yoru
          </p>
          <p
            className={`${subtitleSize} mt-1 uppercase tracking-[0.34em] text-charcoal-light`}
          >
            Vision Lab
          </p>
        </div>
      )}
    </div>
  );
}
