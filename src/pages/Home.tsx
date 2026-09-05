import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import {
  ArrowDown,
  ChartLineUp,
  Lightning,
  StackSimple,
  Target
} from "@phosphor-icons/react";
import useSEO from "@/hooks/useSEO";
import { MEDIA, HERO_BACKGROUND_SLIDES } from "@/constants/media";
import {
  Eyebrow,
  SectionTitle,
  CtaButton,
  Card,
  Reveal,
  MaskedLine,
  CtaBand
} from "@/components/site/ui";
import { Counter } from "@/components/site/Counter";
import { NetworkExpansion } from "@/components/site/NetworkExpansion";

const stats = [
  { value: 2200, suffix: "+", label: "Connected Digital Screens", sub: "Active by 2027" },
  { value: 70, suffix: "M+", label: "Monthly Transit Impressions", sub: "Engaging urban daily commuters in motion" },
  { text: "Backend", label: "Powered by Moving Walls", sub: "Enterprise planning, DOOH data & activation", isPrimary: true },
  { text: "Direct + DSP", label: "Dual Buying Ecosystem", sub: "Direct I/O sales and programmatic DSP trading", isPrimary: true }
];

const pillars = [
  {
    icon: Target,
    title: "Audience Attention",
    desc: "Transit environments offer prolonged dwell times in high-attention spaces — commuter platforms, station concourses and inside vehicles where screens capture unskippable views."
  },
  {
    icon: Lightning,
    title: "Programmatic Agility",
    desc: "Automate campaign buying, optimize ad delivery by time-of-day or traffic patterns, and trigger dynamic creatives based on real-time external conditions."
  },
  {
    icon: ChartLineUp,
    title: "Audience Intelligence",
    desc: "Powered by Moving Walls location analytics, gain verified footfall metrics, demographic heatmaps, reach validation and post-campaign proof-of-play transparency."
  },
  {
    icon: StackSimple,
    title: "End-to-End Delivery",
    desc: "Seamless integration across physical inventory, high-definition digital screens, content management systems and programmatic supply-side connections."
  }
];

const Hero: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  // Auto-scroll / cycle backgrounds seamlessly every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_BACKGROUND_SLIDES.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      ref={ref}
      data-testid="hero-section"
      className="relative min-h-screen flex flex-col justify-between pt-28 sm:pt-36 pb-0 overflow-hidden bg-slate-950"
    >
      {/* Dynamic Corporate Background with Zero Opacity Overlay / Crystal Clear Full-Spectrum Visibility */}
      <motion.div style={{ y: yBg }} className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <AnimatePresence mode="sync">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.04, x: 6 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.98, x: -6 }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 w-full h-full"
          >
            <img
              src={HERO_BACKGROUND_SLIDES[currentSlide].image}
              alt={HERO_BACKGROUND_SLIDES[currentSlide].label}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover opacity-100 filter contrast-[1.08] brightness-[1.08] saturate-[1.12]"
            />
          </motion.div>
        </AnimatePresence>

        {/* Zero Opacity Overlay: Transparent gradient with ultra-subtle base grounding for maximum image clarity */}
        <div className="absolute inset-0 bg-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
      </motion.div>

      {/* Electric cyan glow orbs */}
      <div className="absolute top-1/3 -left-32 w-[650px] h-[650px] bg-[#0284C7]/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#0077FE]/20 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute inset-0 grid-bg opacity-15 pointer-events-none" />

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto w-full px-6 lg:px-10 pt-4 pb-8">
        <div className="max-w-5xl">
          <MaskedLine delay={0.1}>
            <span className="inline-flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.2em] text-[#38BDF8] font-semibold mb-4 sm:mb-6">
              <span className="h-[1.5px] w-6 bg-[#38BDF8] inline-block shadow-[0_0_6px_#38BDF8]" />
              Transit OOH · DOOH · Programmatic Intelligence
            </span>
          </MaskedLine>

          <h1 className="font-display font-bold tracking-tight text-2xl sm:text-4xl lg:text-[3.5rem] leading-[1.08] text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)]">
            <MaskedLine delay={0.2}>YOUR AUDIENCE</MaskedLine>
            <MaskedLine delay={0.35}>IS MOVING.</MaskedLine>
            <MaskedLine delay={0.5}>
              <span className="text-[#38BDF8] font-bold">YOUR MEDIA</span>
              <span className="text-white"> SHOULD TOO.</span>
            </MaskedLine>
          </h1>
        </div>

        <div className="mt-6 sm:mt-8 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 lg:gap-8">
          <MaskedLine delay={0.65} className="max-w-2xl">
            <p className="text-sm sm:text-base md:text-lg text-slate-200 leading-relaxed font-sans font-normal drop-shadow-sm">
              FLUXMEDIA connects brands and agencies with high-impact audiences across Malaysia's evolving transit media landscape — combining premium physical inventory, digital screens and technology-enabled programmatic advertising.
            </p>
          </MaskedLine>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-3.5 shrink-0"
          >
            <CtaButton to="/contact" testid="hero-plan-cta" variant="primary">
              PLAN A CAMPAIGN
            </CtaButton>
            <CtaButton to="/services" variant="outline" testid="hero-network-cta" className="bg-white/90 text-slate-900 border-white/40 hover:bg-white">
              EXPLORE OUR NETWORK
            </CtaButton>
          </motion.div>
        </div>

        {/* Dynamic Background Slide Indicators & Live Media Feed */}
        <div className="mt-8 pt-6 border-t border-white/20 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2.5">
            {HERO_BACKGROUND_SLIDES.map((slide, idx) => {
              const active = idx === currentSlide;
              return (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`group relative overflow-hidden flex items-center gap-2 px-3.5 py-1.5 font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.15em] transition-all cursor-pointer select-none ${
                    active
                      ? "bg-slate-900/80 text-[#38BDF8] border border-[#38BDF8] shadow-md font-semibold backdrop-blur-md"
                      : "bg-slate-900/40 text-slate-300 border border-white/15 hover:border-white/40 hover:text-white backdrop-blur-sm"
                  }`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full transition-all ${
                    active ? "bg-[#38BDF8] shadow-[0_0_8px_#38BDF8]" : "bg-white/40"
                  }`} />
                  <span>{slide.tag}</span>

                  {/* Animated Progress Bar for Active Slide */}
                  {active && (
                    <motion.span
                      key={`progress-${idx}-${currentSlide}`}
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 5, ease: "linear" }}
                      className="absolute bottom-0 left-0 h-[2px] bg-[#38BDF8] shadow-[0_0_8px_#38BDF8]"
                    />
                  )}
                </button>
              );
            })}
          </div>

          <div className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-slate-200 flex items-center gap-2.5 bg-slate-900/60 px-3.5 py-1.5 border border-white/20 backdrop-blur-md">
            <span className="text-[#38BDF8] font-bold">LIVE LOCATION:</span>
            <span className="text-white font-medium">{HERO_BACKGROUND_SLIDES[currentSlide].label}</span>
          </div>
        </div>
      </div>

      {/* Bottom Bar Info */}
      <motion.div style={{ opacity }} className="relative z-10 border-t border-white/15 bg-slate-950/85 backdrop-blur-md">
        <div className="max-w-[1400px] mx-auto w-full px-6 lg:px-10 py-4 flex items-center justify-between text-[11px] uppercase tracking-[0.2em] text-slate-300 font-mono">
          <span className="hidden md:flex items-center gap-2">
            <ArrowDown size={13} className="text-[#38BDF8]" /> Scroll
          </span>
          <span className="text-slate-200">Direct & Programmatic</span>
          <span className="hidden sm:block text-slate-200">Transit OOH & DOOH</span>
          <span className="hidden md:block text-slate-200">Data-Enabled Media</span>
        </div>
      </motion.div>
    </section>
  );
};

export default function Home() {
  useSEO(
    "FLUXMEDIA | Transit OOH & DOOH Advertising Malaysia",
    "FLUXMEDIA connects brands and agencies with transit audiences through OOH, DOOH and programmatic advertising solutions across Malaysia."
  );

  return (
    <>
      <Hero />

      {/* Stats Section - Daylight */}
      <section data-testid="stats-section" className="bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-0">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-slate-200 border-x border-slate-200">
            {stats.map((s, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="bg-white px-6 sm:px-8 py-12 h-full min-w-0">
                  <div className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-slate-900 tabular-nums leading-none break-words">
                    {s.text ? (
                      <span
                        className={`text-xl sm:text-2xl lg:text-3xl leading-tight block break-words ${
                          s.isPrimary ? "text-[#0284C7]" : "text-slate-900"
                        } font-display font-bold tracking-tight`}
                      >
                        {s.text}
                      </span>
                    ) : (
                      <Counter to={s.value!} suffix={s.suffix} className="text-slate-900" />
                    )}
                  </div>
                  <div className="mt-4 font-mono text-xs uppercase tracking-[0.18em] font-semibold text-[#0284C7]">
                    {s.label}
                  </div>
                  <div className="mt-1.5 text-xs text-slate-600 leading-relaxed font-sans">
                    {s.sub}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Network Overview / Expansion Gallery */}
      <NetworkExpansion />

      {/* Value Pillars Section - Daylight */}
      <section className="relative bg-slate-50/80 py-24 lg:py-32 overflow-hidden border-b border-slate-200">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <Reveal>
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
              <div>
                <Eyebrow className="mb-3">Why Transit & DOOH</Eyebrow>
                <SectionTitle
                  title="Engineered for impact at every step of the journey."
                  subtitle="Modern urban audiences cannot be reached through fragmented digital ads alone. High-dwell physical and programmatic screens capture uninterrupted attention."
                />
              </div>
              <CtaButton to="/know-us" variant="outline" size="sm">
                ABOUT OUR PLATFORM
              </CtaButton>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((p, idx) => {
              const Icon = p.icon;
              return (
                <Reveal key={idx} delay={idx * 0.1}>
                  <Card className="h-full flex flex-col justify-between group bg-white border border-slate-200">
                    <div>
                      <div className="w-12 h-12 border border-sky-200 bg-sky-50 flex items-center justify-center text-[#0284C7] mb-6 group-hover:bg-[#0284C7] group-hover:text-white transition-colors duration-300 shadow-sm">
                        <Icon size={24} weight="bold" />
                      </div>
                      <h3 className="text-xl font-bold font-display text-slate-900 mb-3">
                        {p.title}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed font-sans">
                        {p.desc}
                      </p>
                    </div>
                    <div className="mt-8 pt-4 border-t border-slate-100 font-mono text-[10px] uppercase tracking-[0.2em] text-[#0284C7] font-semibold">
                      0{idx + 1} // CAPABILITY
                    </div>
                  </Card>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Moving Walls Partnership Showcase - Daylight */}
      <section className="relative bg-white py-24 lg:py-32 border-b border-slate-200">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6">
              <Reveal>
                <Eyebrow className="mb-3">Technology Core</Eyebrow>
                <SectionTitle
                  title="Powered by Moving Walls — global leaders in DOOH intelligence."
                  subtitle="Our integration brings automated media planning, audience measurement, and programmatic activation to Malaysia's transit networks."
                />
                <div className="mt-8 space-y-4 text-sm text-slate-600 leading-relaxed font-sans">
                  <p>
                    Through Moving Walls' enterprise platform, media planners gain granular insights into commuter movement patterns, peak traffic concentration, and dwell times.
                  </p>
                  <p>
                    Whether executing direct-buy takeovers or precision programmatic triggers, every campaign is verified with comprehensive proof-of-play logs and reach analytics.
                  </p>
                </div>
                <div className="mt-8 flex flex-wrap gap-4">
                  <CtaButton to="/the-tech" variant="primary">EXPLORE THE TECH</CtaButton>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-6">
              <Reveal delay={0.2}>
                <div className="relative bg-white border border-slate-200 p-2 shadow-md hover:shadow-xl transition-all duration-300">
                  <img
                    src={MEDIA.techNetwork}
                    alt="Moving Walls Technology Stack"
                    className="w-full h-auto object-cover"
                  />
                  <div className="p-6 bg-slate-50 border-t border-slate-200">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] uppercase tracking-[0.2em] text-[#0284C7] font-semibold font-mono">
                        Live Ecosystem Architecture
                      </span>
                      <span className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-mono">
                        DSP / SSP / CMS Ready
                      </span>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <CtaBand
        title="Ready to connect with millions of transit commuters across Malaysia?"
        copy="Contact our commercial media team to explore available high-impact stations, e-hailing networks, and programmatic DOOH schedules."
      />
    </>
  );
}
