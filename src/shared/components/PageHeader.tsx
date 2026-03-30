interface PageHeaderProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  accentColor?: string;
}

export function PageHeader({
  icon,
  title,
  subtitle,
  accentColor = "bg-orange-neon",
}: PageHeaderProps) {
  return (
    <div className="px-4 pt-6 md:pt-8">
      <div className="max-w-7xl mx-auto glass-panel p-5 md:p-7 glass-sweep frost-dots">
        <div className="flex items-center gap-4">
          <div
            className={`w-14 h-14 md:w-16 md:h-16 ${accentColor} neo-border rounded-2xl flex items-center justify-center text-charcoal shadow-[0_12px_26px_rgba(110,162,214,0.25)]`}
          >
            {icon}
          </div>
          <div>
            <h1 className="font-black text-2xl md:text-3xl text-charcoal uppercase tracking-[0.14em]">
              {title}
            </h1>
            <p className="text-charcoal-light text-sm font-mono mt-1">
              {subtitle}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
