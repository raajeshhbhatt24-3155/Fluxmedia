import React from "react";
import useSEO from "@/hooks/useSEO";
import { MEDIA } from "@/constants/media";
import {
  ArrowRight,
  Broadcast,
  Cpu,
  Database,
  Gauge,
  Sparkle
} from "@phosphor-icons/react";
import {
  PageHero,
  Eyebrow,
  SectionTitle,
  Card,
  Reveal,
  CtaBand
} from "@/components/site/ui";

const activationFlow = [
  "Advertiser / Agency",
  "DSP (Demand-Side Platform)",
  "Programmatic Ecosystem / SSP",
  "FLUXMEDIA Inventory",
  "Digital Transit Screen",
  "Commuter Audience"
];

const briefFlow = [
  "1. Brief",
  "2. Plan",
  "3. Target",
  "4. Activate",
  "5. Measure",
  "6. Optimise"
];

const dynamic = [
  { time: "07:30 AM", label: "Morning Commute", copy: "START YOUR DAY WITH FRESH ROAST." },
  { time: "12:30 PM", label: "Midday Transit", copy: "HUNGRY? LUNCH IS CALLING AROUND THE CORNER." },
  { time: "06:30 PM", label: "Evening Rush", copy: "HEADING HOME? UNWIND WITH YOUR FAVORITE PLAYLIST." }
];

const dashboard = [
  { label: "Transit Network", value: "2,200+", sub: "Active by 2027" },
  { label: "Active Campaigns", value: "32", sub: "Live In-Market" },
  { label: "Available Inventory", value: "84%", sub: "Audited Real-time" },
  { label: "Audience Reach Signal", value: "LIVE", sub: "Moving Walls Stream" }
];

const advantage = [
  {
    icon: Database,
    title: "DATA-DRIVEN",
    body: "Comprehensive audience and location intelligence validated by footfall and mobility sensors."
  },
  {
    icon: Cpu,
    title: "AUTOMATION",
    body: "Fast, frictionless programmatic and digital campaign booking with DSP integration."
  },
  {
    icon: Broadcast,
    title: "NETWORK SCALE",
    body: "Multi-transit station networks, e-hailing fleets, and landmark outdoor screens."
  },
  {
    icon: Gauge,
    title: "MEASUREMENT",
    body: "Real-world campaign intelligence, verified proof-of-play timestamps, and exposure metrics."
  }
];

const FlowSteps: React.FC<{ steps: string[] }> = ({ steps }) => (
  <div className="flex flex-wrap items-center gap-2 sm:gap-3">
    {steps.map((s, i) => (
      <React.Fragment key={i}>
        <span className="text-[11px] uppercase tracking-[0.15em] font-mono px-3.5 py-2 bg-slate-100/90 text-slate-800 border border-slate-200 font-medium">
          {s}
        </span>
        {i < steps.length - 1 && (
          <ArrowRight size={13} className="text-[#0284C7] shrink-0" />
        )}
      </React.Fragment>
    ))}
  </div>
);

const stack = [
  {
    no: "01",
    title: "Audience Intelligence",
    body: "Use audience and location intelligence to understand where relevant audiences move and where media opportunities exist. Moving Walls' platform references verified mobility signals, traffic congestion patterns, demographic indices, points of interest, weather, and real-time transit schedules.",
    visual: null
  },
  {
    no: "02",
    title: "Integrated Planning",
    body: "Plan campaigns around hyper-local transit locations, specific commuter demographics, inventory categories, budgets, and scheduling parameters — effortlessly turning a marketing brief into high-impact screen selections.",
    visual: <FlowSteps steps={briefFlow} />
  },
  {
    no: "03",
    title: "Programmatic Activation",
    body: "Eligible digital screens are directly connected to global and regional Demand-Side Platforms (DSPs). Buyers can programmatically trigger spots based on dynamic audience density, flight periods, or automated RTB protocols.",
    visual: <FlowSteps steps={activationFlow} />
  },
  {
    no: "04",
    title: "Dynamic Content Optimization (DCO)",
    body: "Transit digital creative can update dynamically according to time of day, weather, live traffic speeds, localized event triggers, or promotional countdowns.",
    visual: (
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full mt-4">
        {dynamic.map((d, idx) => (
          <div key={idx} className="p-4 bg-slate-50 border border-slate-200">
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-[10px] text-[#0284C7] font-semibold">{d.time}</span>
              <span className="text-[9px] uppercase font-mono text-slate-500">{d.label}</span>
            </div>
            <div className="font-mono text-xs text-slate-800 font-medium">
              "{d.copy}"
            </div>
          </div>
        ))}
      </div>
    )
  },
  {
    no: "05",
    title: "Precision Measurement & Proof-of-Play",
    body: "Modern out-of-home demands verifiable performance. Our technology stack delivers second-by-second proof-of-play logs, verified passenger impressions, and post-campaign reach and frequency reporting.",
    visual: null
  }
];

export default function TheTech() {
  useSEO(
    "FLUXMEDIA Technology | Programmatic DOOH & Media Intelligence",
    "Explore the technology behind FLUXMEDIA's smarter transit advertising ecosystem, powered by modern OOH planning, activation and measurement capabilities."
  );

  return (
    <>
      <PageHero
        eyebrow="The Technology"
        title={
          <>
            <span className="text-white block">The technology behind</span>
            <span className="text-[#38BDF8] block">smarter OOH.</span>
          </>
        }
        subtitle="FLUXMEDIA combines physical transit media with a modern digital advertising technology ecosystem to make campaigns easier to plan, activate and optimise."
        bgImage={MEDIA.bgTech}
        zeroOverlay={true}
      />

      {/* Powered by Moving Walls Section */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-[1300px] mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <Reveal>
              <Eyebrow className="mb-6">Moving Walls</Eyebrow>
              <SectionTitle
                title="Powered by Moving Walls technology."
                subtitle="An enterprise ad-tech engine built specifically for Out-Of-Home and Transit ecosystems."
              />
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-8 space-y-4 text-slate-600 leading-relaxed text-sm sm:text-base font-sans">
                <p>
                  Moving Walls provides global leadership in programmatic DOOH infrastructure, processing millions of mobility signals to unlock transparent planning, buying, and verification.
                </p>
                <p>
                  Through this partnership, FLUXMEDIA connects Malaysian transit inventory directly into global programmatic supply chains while providing advertisers with enterprise-grade data intelligence.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-8 flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] font-mono text-[#0284C7] font-semibold">
                <Sparkle size={16} weight="fill" />
                <span>Audited · Programmatic Ready · Location Intelligent</span>
              </div>
            </Reveal>
          </div>

          {/* Technology Live Dashboard preview */}
          <div>
            <Reveal delay={0.2}>
              <div className="bg-slate-50/80 border border-slate-200 p-6 sm:p-8 shadow-md">
                <div className="flex items-center justify-between pb-6 border-b border-slate-200">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#0284C7] block font-semibold">
                      Moving Walls Engine
                    </span>
                    <span className="text-lg font-bold font-display text-slate-900">
                      Transit Hub Analytics
                    </span>
                  </div>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#0284C7] animate-pulse shadow-sm" />
                </div>

                <div className="grid grid-cols-2 gap-4 my-6">
                  {dashboard.map((item, idx) => (
                    <div key={idx} className="p-4 bg-white border border-slate-200 shadow-xs">
                      <div className="font-display text-2xl sm:text-3xl font-bold text-slate-900 leading-none">
                        {item.value}
                      </div>
                      <div className="text-xs font-semibold text-[#0284C7] mt-2 font-mono">
                        {item.label}
                      </div>
                      <div className="text-[10px] uppercase font-mono text-slate-500 tracking-wider mt-0.5">
                        {item.sub}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-4 bg-slate-100/90 border border-slate-200 font-mono text-[11px] text-slate-600">
                  <div className="flex items-center justify-between">
                    <span>Protocol: OpenRTB / DSP Connector</span>
                    <span className="text-[#0284C7] font-semibold">Connected</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* The 5 Stack Pillars */}
      <section className="bg-slate-50/70 py-20 lg:py-28 border-t border-slate-200">
        <div className="max-w-[1300px] mx-auto px-6 lg:px-10">
          <Reveal>
            <Eyebrow className="mb-6">Architecture</Eyebrow>
            <SectionTitle
              title="Five pillars of technology-enabled transit media."
              subtitle="From upstream brief planning to downstream real-world measurement."
            />
          </Reveal>

          <div className="mt-14 space-y-6">
            {stack.map((item, idx) => (
              <Reveal key={idx} delay={idx * 0.08}>
                <Card className="border-l-4 border-l-[#0284C7] bg-white border border-slate-200 shadow-sm">
                  <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                    <div className="max-w-2xl">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="font-mono text-xs text-[#0284C7] font-semibold">
                          {item.no} //
                        </span>
                        <h3 className="text-2xl font-bold font-display text-slate-900">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-slate-600 leading-relaxed text-sm sm:text-base font-sans">
                        {item.body}
                      </p>
                    </div>

                    {item.visual && (
                      <div className="lg:max-w-md w-full shrink-0">
                        {item.visual}
                      </div>
                    )}
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* The FLUX Advantage */}
      <section className="bg-white py-20 lg:py-28 border-t border-slate-200">
        <div className="max-w-[1300px] mx-auto px-6 lg:px-10">
          <Reveal>
            <Eyebrow className="mb-6">Platform Advantage</Eyebrow>
            <SectionTitle
              title="Why brands and agencies build with FLUXMEDIA."
              subtitle="Transforming transit assets into an agile, accountable media channel."
            />
          </Reveal>

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantage.map((item, idx) => {
              const Icon = item.icon;
              return (
                <Reveal key={idx} delay={idx * 0.05}>
                  <div className="p-6 bg-slate-50/80 border border-slate-200 shadow-xs hover:border-[#0284C7] hover:shadow-md transition-all h-full flex flex-col justify-between">
                    <div>
                      <div className="w-10 h-10 border border-sky-200 bg-sky-50 flex items-center justify-center text-[#0284C7] mb-4 shadow-xs">
                        <Icon size={20} weight="bold" />
                      </div>
                      <h4 className="text-xs uppercase tracking-[0.2em] font-bold text-slate-900 mb-2 font-mono">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed font-sans">
                        {item.body}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBand
        title="Ready to harness programmatic DOOH technology for your next campaign?"
        copy="Connect with our technical team to integrate with our DSP supply pipes or schedule a planning session."
      />
    </>
  );
}
