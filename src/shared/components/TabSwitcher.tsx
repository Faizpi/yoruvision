"use client";

import { useState } from "react";

interface Tab {
  id: string;
  label: string;
  icon?: React.ReactNode;
}

interface TabSwitcherProps {
  tabs: Tab[];
  defaultTab?: string;
  children: (activeTab: string) => React.ReactNode;
}

export function TabSwitcher({ tabs, defaultTab, children }: TabSwitcherProps) {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id);

  return (
    <div>
      <div className="flex flex-wrap gap-2 pb-3">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`
              px-4 py-2.5 font-semibold uppercase text-xs tracking-[0.12em]
              border border-white/65 rounded-xl transition-all
              flex items-center gap-1.5
              ${
                activeTab === tab.id
                  ? "bg-orange-neon/45 text-charcoal shadow-[0_10px_24px_rgba(110,166,226,0.25)]"
                  : "bg-white/56 text-charcoal-light hover:bg-white/76 hover:text-charcoal"
              }
            `}
          >
            {tab.icon && <span className="flex items-center justify-center w-4 h-4">{tab.icon}</span>}
            {tab.label}
          </button>
        ))}
      </div>

      <div className="p-5 md:p-6 neo-card">{children(activeTab)}</div>
    </div>
  );
}
