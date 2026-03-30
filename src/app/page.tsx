"use client";

import Link from "next/link";
import { ModuleCard } from "@/shared/components/ModuleCard";
import { YoruLogo } from "@/shared/components/YoruLogo";
import { useTranslation } from "@/shared/i18n/LanguageContext";
import {
  ArrowRight,
  Lock,
  Sprout,
  FileText,
  Sparkles,
  SearchCode,
  BarChart2,
  Palette,
  SquareDashed,
  SlidersHorizontal,
  Shapes,
  AudioWaveform,
  Move3D,
} from "lucide-react";

export default function HomePage() {
  const { t } = useTranslation();

  const MODULES = [
    {
      href: "/steganography",
      icon: <Lock className="w-7 h-7" />,
      title: t.modules.steganoTitle,
      description: t.modules.steganoDesc,
      tags: ["LSB", "Encode", "Decode", "Watermark"],
      accentColor: "orange" as const,
    },
    {
      href: "/agriculture",
      icon: <Sprout className="w-7 h-7" />,
      title: t.modules.agriTitle,
      description: t.modules.agriDesc,
      tags: ["TF.js", "COCO-SSD", "CCL", "Hough"],
      accentColor: "mint" as const,
    },
    {
      href: "/document-scanner",
      icon: <FileText className="w-7 h-7" />,
      title: t.modules.docScanTitle,
      description: t.modules.docScanDesc,
      tags: ["Tesseract.js", "OCR", "Multi-lang"],
      accentColor: "teal" as const,
    },
    {
      href: "/enhancement",
      icon: <Sparkles className="w-7 h-7" />,
      title: t.modules.enhanceTitle,
      description: t.modules.enhanceDesc,
      tags: ["Metrics", "Advisor", "Auto-Enhance"],
      accentColor: "lavender" as const,
    },
    {
      href: "/forensics",
      icon: <SearchCode className="w-7 h-7" />,
      title: t.modules.forensicsTitle,
      description: t.modules.forensicsDesc,
      tags: ["ELA", "Blur Map", "Noise", "EXIF"],
      accentColor: "crimson" as const,
    },
    {
      href: "/histogram",
      icon: <BarChart2 className="w-7 h-7" />,
      title: t.modules.histogramTitle,
      description: t.modules.histogramDesc,
      tags: ["Histogram", "Equalization", "RGB", "Luminance"],
      accentColor: "orange" as const,
    },
    {
      href: "/color-space",
      icon: <Palette className="w-7 h-7" />,
      title: t.modules.colorSpaceTitle,
      description: t.modules.colorSpaceDesc,
      tags: ["Grayscale", "CMYK", "HSL", "Binary"],
      accentColor: "mint" as const,
    },
    {
      href: "/edge-detection",
      icon: <SquareDashed className="w-7 h-7" />,
      title: t.modules.edgeDetectTitle,
      description: t.modules.edgeDetectDesc,
      tags: ["Sobel", "Canny", "Harris", "Laplacian"],
      accentColor: "teal" as const,
    },
    {
      href: "/filters",
      icon: <SlidersHorizontal className="w-7 h-7" />,
      title: t.modules.filtersTitle,
      description: t.modules.filtersDesc,
      tags: ["Blur", "Sharpen", "Median", "Custom"],
      accentColor: "lavender" as const,
    },
    {
      href: "/morphology",
      icon: <Shapes className="w-7 h-7" />,
      title: t.modules.morphologyTitle,
      description: t.modules.morphologyDesc,
      tags: ["Erode", "Dilate", "Open", "Region Grow"],
      accentColor: "crimson" as const,
    },
    {
      href: "/fft",
      icon: <AudioWaveform className="w-7 h-7" />,
      title: t.modules.fftTitle,
      description: t.modules.fftDesc,
      tags: ["FFT", "Low-pass", "High-pass", "Spectrum"],
      accentColor: "lavender" as const,
    },
    {
      href: "/transforms",
      icon: <Move3D className="w-7 h-7" />,
      title: t.modules.transformsTitle,
      description: t.modules.transformsDesc,
      tags: ["Resize", "Rotate", "Flip", "Crop"],
      accentColor: "orange" as const,
    },
  ];

  return (
    <div className="pb-14">
      <section className="px-4 pt-8 md:pt-12">
        <div className="max-w-7xl mx-auto glass-panel p-6 md:p-10 overflow-hidden glass-sweep frost-dots">
          <div className="relative grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-12">
            <div className="stagger-in">
              <h1 className="leading-[0.88] uppercase">
                <span className="block text-5xl md:text-7xl font-black tracking-[0.2em] text-charcoal">
                  Yoru
                </span>
                <span className="block text-4xl md:text-6xl font-black tracking-[0.25em] text-orange-burnt">
                  Vision
                </span>
              </h1>

              <p className="mt-5 max-w-2xl text-charcoal-light text-base md:text-lg leading-relaxed">
                {t.home.heroDesc.split("<accent>").map((part, i) => {
                  if (i === 0) return part;
                  const [accent, rest] = part.split("</accent>");
                  return (
                    <span key={i}>
                      <span className="text-orange-burnt font-semibold">{accent}</span>
                      {rest}
                    </span>
                  );
                })}
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                <span className="glass-chip">{t.home.tagBrowser}</span>
                <span className="glass-chip">{t.home.tagTFjs}</span>
                <span className="glass-chip">{t.home.tagZero}</span>
              </div>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <Link href="#modules" className="neo-btn neo-btn-primary text-xs md:text-sm">
                  {t.home.modulesHeading}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="neo-card p-5 md:p-7 fade-up self-start">
              <YoruLogo className="mb-5" />
              <div className="yoru-divider mb-5" />
              <p className="text-sm md:text-base text-charcoal-light leading-relaxed">
                {t.home.overviewDesc}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-5">
                <div className="neo-card p-3 text-center">
                  <p className="text-2xl font-black tracking-wide text-orange-burnt">12</p>
                  <p className="text-[11px] uppercase tracking-[0.15em] text-charcoal-light">
                    {t.home.statModulesLabel}
                  </p>
                </div>
                <div className="neo-card p-3 text-center">
                  <p className="text-2xl font-black tracking-wide text-orange-burnt">0</p>
                  <p className="text-[11px] uppercase tracking-[0.15em] text-charcoal-light">
                    {t.home.statBackendLabel}
                  </p>
                </div>
                <div className="neo-card p-3 text-center">
                  <p className="text-2xl font-black tracking-wide text-orange-burnt">AI</p>
                  <p className="text-[11px] uppercase tracking-[0.15em] text-charcoal-light">
                    {t.home.statBrowserNativeLabel}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="modules" className="max-w-7xl mx-auto px-4 py-12">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="font-black text-3xl md:text-4xl uppercase tracking-[0.16em] text-charcoal">
              {t.home.modulesHeading}
            </h2>
            <p className="text-sm md:text-base text-charcoal mt-2 font-medium">
              {t.home.modulesSubheading}
            </p>
          </div>
          <YoruLogo compact markOnly />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-5 stagger-in">
          {MODULES.map((mod) => (
            <ModuleCard key={mod.href} {...mod} />
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              label: t.home.techNextjs,
              desc: t.home.techNextjsDesc,
              icon: <Lock className="w-4 h-4" />,
            },
            {
              label: t.home.techTailwind,
              desc: t.home.techTailwindDesc,
              icon: <Sparkles className="w-4 h-4" />,
            },
            {
              label: t.home.techTFjs,
              desc: t.home.techTFjsDesc,
              icon: <Sprout className="w-4 h-4" />,
            },
            {
              label: t.home.techCanvas,
              desc: t.home.techCanvasDesc,
              icon: <FileText className="w-4 h-4" />,
            },
          ].map((tech) => (
            <div key={tech.label} className="neo-card p-4">
              <div className="w-8 h-8 rounded-xl bg-orange-neon/30 border border-white/65 flex items-center justify-center text-charcoal mb-3">
                {tech.icon}
              </div>
              <p className="font-black text-base uppercase tracking-[0.12em] text-charcoal">
                {tech.label}
              </p>
              <p className="text-xs mt-1 text-charcoal-light font-mono">{tech.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
