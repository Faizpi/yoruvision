"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useTranslation } from "@/shared/i18n/LanguageContext";
import { YoruLogo } from "@/shared/components/YoruLogo";
import {
  AudioWaveform,
  BarChart2,
  ChevronDown,
  Globe,
  House,
  Lock,
  Menu,
  Move3D,
  Palette,
  Scan,
  Search,
  Shapes,
  SlidersHorizontal,
  Sparkles,
  Sprout,
  SquareDashed,
  Wrench,
  X,
  Zap,
} from "lucide-react";

interface NavItem {
  href: string;
  label: string;
  icon: React.ReactNode;
  desc: string;
}

interface NavGroup {
  key: string;
  label: string;
  icon: React.ReactNode;
  items: NavItem[];
}

export function Navbar() {
  const pathname = usePathname();
  const { locale, setLocale, t } = useTranslation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeGroup, setActiveGroup] = useState<string | null>(null);

  const NAV_GROUPS: NavGroup[] = [
    {
      key: "tools",
      label: t.nav.groupTools,
      icon: <Wrench className="w-4 h-4" />,
      items: [
        {
          href: "/steganography",
          label: t.nav.stegano,
          icon: <Lock className="w-4 h-4" />,
          desc: t.nav.steganoDesc,
        },
        {
          href: "/agriculture",
          label: t.nav.agriAi,
          icon: <Sprout className="w-4 h-4" />,
          desc: t.nav.agriAiDesc,
        },
        {
          href: "/document-scanner",
          label: t.nav.docScan,
          icon: <Scan className="w-4 h-4" />,
          desc: t.nav.docScanDesc,
        },
        {
          href: "/enhancement",
          label: t.nav.enhance,
          icon: <Sparkles className="w-4 h-4" />,
          desc: t.nav.enhanceDesc,
        },
        {
          href: "/forensics",
          label: t.nav.forensics,
          icon: <Search className="w-4 h-4" />,
          desc: t.nav.forensicsDesc,
        },
      ],
    },
    {
      key: "processing",
      label: t.nav.groupProcessing,
      icon: <Zap className="w-4 h-4" />,
      items: [
        {
          href: "/histogram",
          label: t.nav.histogram,
          icon: <BarChart2 className="w-4 h-4" />,
          desc: t.nav.histogramDesc,
        },
        {
          href: "/color-space",
          label: t.nav.colorSpace,
          icon: <Palette className="w-4 h-4" />,
          desc: t.nav.colorSpaceDesc,
        },
        {
          href: "/edge-detection",
          label: t.nav.edgeDetect,
          icon: <SquareDashed className="w-4 h-4" />,
          desc: t.nav.edgeDetectDesc,
        },
        {
          href: "/filters",
          label: t.nav.filters,
          icon: <SlidersHorizontal className="w-4 h-4" />,
          desc: t.nav.filtersDesc,
        },
        {
          href: "/morphology",
          label: t.nav.morphology,
          icon: <Shapes className="w-4 h-4" />,
          desc: t.nav.morphologyDesc,
        },
        {
          href: "/fft",
          label: t.nav.fft,
          icon: <AudioWaveform className="w-4 h-4" />,
          desc: t.nav.fftDesc,
        },
        {
          href: "/transforms",
          label: t.nav.transforms,
          icon: <Move3D className="w-4 h-4" />,
          desc: t.nav.transformsDesc,
        },
      ],
    },
  ];

  const activeGroupKey =
    NAV_GROUPS.find((group) => group.items.some((item) => item.href === pathname))?.key ?? null;

  useEffect(() => {
    if (!mobileOpen && !activeGroup) return;
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
        setActiveGroup(null);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [mobileOpen, activeGroup]);

  const toggleLocale = () => setLocale(locale === "en" ? "id" : "en");
  const closeAllMenus = () => {
    setMobileOpen(false);
    setActiveGroup(null);
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-white/55 bg-[linear-gradient(115deg,rgba(255,255,255,0.66),rgba(225,238,252,0.5))] backdrop-blur-2xl supports-[backdrop-filter]:bg-[linear-gradient(115deg,rgba(255,255,255,0.52),rgba(225,238,252,0.38))] frost-dots">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-[4.4rem]">
          <Link href="/" className="group" onClick={closeAllMenus}>
            <YoruLogo compact className="transition-transform duration-200 group-hover:scale-[1.02]" />
          </Link>

          <div className="hidden md:flex items-center gap-2">
            <Link
              href="/"
              className={`px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] border border-white/70 rounded-xl transition-all ${
                pathname === "/"
                  ? "bg-[linear-gradient(120deg,rgba(112,175,235,0.62),rgba(186,218,249,0.5))] text-charcoal shadow-[0_14px_28px_rgba(122,174,227,0.24)]"
                  : "bg-white/62 text-charcoal-light hover:bg-white/78 hover:text-charcoal"
              }`}
              onClick={closeAllMenus}
            >
              Home
            </Link>

            {NAV_GROUPS.map((group) => {
              const isOpen = activeGroup === group.key;
              const hasActive = group.key === activeGroupKey;

              return (
                <button
                  key={group.key}
                  onClick={() => setActiveGroup((prev) => (prev === group.key ? null : group.key))}
                  className={`
                    px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.16em]
                    transition-all duration-200 border border-white/70 rounded-xl flex items-center gap-1.5
                    backdrop-blur-md
                    ${
                      isOpen
                        ? "bg-[linear-gradient(120deg,rgba(112,175,235,0.62),rgba(186,218,249,0.5))] text-charcoal shadow-[0_14px_28px_rgba(122,174,227,0.24)]"
                        : hasActive
                          ? "bg-white/78 text-charcoal"
                          : "bg-[linear-gradient(125deg,rgba(255,255,255,0.48),rgba(230,241,253,0.34))] text-charcoal-light hover:bg-white/78 hover:text-charcoal"
                    }
                  `}
                >
                  <span className="flex items-center justify-center">{group.icon}</span>
                  {group.label}
                  <ChevronDown className={`w-3 h-3 ml-0.5 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
                </button>
              );
            })}

            <button
              onClick={toggleLocale}
              title={t.lang.switchTo}
              className="ml-2 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] border border-white/65 rounded-xl bg-[linear-gradient(135deg,rgba(255,255,255,0.74),rgba(220,235,251,0.58))] text-charcoal flex items-center gap-1.5 hover:bg-[linear-gradient(135deg,rgba(255,255,255,0.9),rgba(189,218,247,0.7))] transition-all duration-200"
            >
              <Globe className="w-4 h-4" />
              {t.lang.label}
              <span className="w-1.5 h-1.5 rounded-full bg-crimson/75" />
            </button>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggleLocale}
              title={t.lang.switchTo}
              className="neo-btn px-2 py-2 text-xs font-semibold flex items-center gap-1"
            >
              <Globe className="w-4 h-4" />
              {t.lang.label}
            </button>
            <button
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-expanded={mobileOpen}
              aria-label={t.nav.toggleMenu}
              className="neo-btn neo-btn-primary px-3 py-2 text-xs"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`
          hidden md:grid overflow-hidden
          transition-[grid-template-rows] duration-250 ease-in-out
          ${activeGroup ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}
        `}
      >
        <div className="overflow-hidden">
          <div className="border-t border-white/55 bg-[linear-gradient(115deg,rgba(255,255,255,0.44),rgba(226,239,253,0.32))] backdrop-blur-2xl">
            <div className="max-w-7xl mx-auto px-4 py-4">
              <div className="grid grid-cols-5 lg:grid-cols-7 gap-3">
                {NAV_GROUPS.find((group) => group.key === activeGroup)?.items.map((item) => {
                  const isActive = pathname === item.href;

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={closeAllMenus}
                      className={`
                        p-3 transition-all duration-200 block
                        border border-white/70 rounded-2xl bg-[linear-gradient(145deg,rgba(255,255,255,0.7),rgba(225,239,254,0.5))] backdrop-blur-lg frosted-module
                        ${
                          isActive
                            ? "bg-[linear-gradient(140deg,rgba(113,176,235,0.64),rgba(184,217,249,0.52))] text-charcoal shadow-[0_14px_30px_rgba(112,169,227,0.23)]"
                            : "text-charcoal hover:bg-[linear-gradient(145deg,rgba(255,255,255,0.86),rgba(228,240,254,0.6))] hover:text-charcoal"
                        }
                      `}
                    >
                      <div className="text-xl mb-1 text-[var(--color-crimson)]">{item.icon}</div>
                      <div className="font-black text-[11px] uppercase tracking-[0.16em]">{item.label}</div>
                      <div className="text-[11px] mt-1 text-charcoal-light font-mono leading-tight">
                        {item.desc}
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`
          md:hidden overflow-hidden
          transition-[max-height,opacity] duration-300 ease-in-out
          bg-[linear-gradient(135deg,rgba(255,255,255,0.52),rgba(224,238,253,0.44))] backdrop-blur-2xl border-t border-white/55
          ${mobileOpen ? "max-h-[75vh] opacity-100" : "max-h-0 opacity-0 border-t-0"}
        `}
      >
        <div className="px-4 py-3 space-y-3">
          <Link
            href="/"
            onClick={closeAllMenus}
            className={`neo-btn justify-start text-sm w-full ${pathname === "/" ? "neo-btn-primary" : "neo-btn-secondary"}`}
          >
            <House className="w-4 h-4" />
            Home
          </Link>

          {NAV_GROUPS.map((group) => (
            <div key={group.key}>
              <div className="px-2 py-2 text-charcoal-light text-[11px] font-semibold uppercase tracking-[0.2em] flex items-center gap-2">
                {group.icon}
                {group.label}
              </div>

              <div className="space-y-2">
                {group.items.map((item) => {
                  const isActive = pathname === item.href;

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={closeAllMenus}
                      className={`
                        flex items-center gap-2 px-3 py-2.5 rounded-xl text-[12px] font-semibold uppercase tracking-[0.12em]
                        border border-white/50 transition-colors duration-150
                        ${
                          isActive
                            ? "bg-orange-neon/42 text-charcoal"
                            : "bg-white/58 text-charcoal-light hover:bg-white/72 hover:text-charcoal"
                        }
                      `}
                    >
                      <span className="flex items-center justify-center opacity-80">{item.icon}</span>
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}
