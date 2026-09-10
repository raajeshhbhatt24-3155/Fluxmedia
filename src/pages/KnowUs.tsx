import React from "react";
import useSEO from "@/hooks/useSEO";
import { MEDIA } from "@/constants/media";
import {
  Buildings,
  ChartPieSlice,
  Check,
  Cpu,
  MapPinLine,
  Megaphone,
  Rocket,
  UsersThree,
  X
} from "@phosphor-icons/react";
import {
  PageHero,
  Eyebrow,
  SectionTitle,
  Card,
  Reveal,
  CtaBand
} from "@/components/site/ui";

const directFor = [
  "Brand launches & major announcements",
  "Large-scale awareness & category dominance",
  "Premium long-term placements",
  "Station & concourse takeovers",
  "Seasonal & festive campaigns",
  "Exclusive sponsorships",
  "Custom interactive activations",
  "Bespoke multi-format packages"
];

const pgmFor = [
  "Audience & behavior-led campaigns",
  "Granular hyper-location targeting",
  "Time-sensitive & dayparted promotions",
  "Automated DSP buying & pacing",
  "Dynamic creative optimization (DCO)",
  "Performance & attribution-led DOOH",
  "Flexible multi-market activation"
];

const ecosystem = [
  { icon: Buildings, label: "Media Owners", desc: "Monetising premium physical & digital real estate" },
  { icon: MapPinLine, label: "Transit Operators", desc: "Connecting rail, LRT, bus & taxi fleets" },
  { icon: Cpu, label: "Technology Partners", desc: "Powered by Moving Walls DOOH ecosystem" },
  { icon: Megaphone, label: "Advertisers", desc: "High-impact brands seeking attentive reach" },
  { icon: UsersThree, label: "Media Agencies", desc: "Omnichannel media planning and strategy" },
  { icon: ChartPieSlice, label: "DSP / Programmatic", desc: "Automated bidding & real-time ad serving" },
  { icon: Rocket, label: "Audience & Location Data", desc: "Validated mobility and footfall intelligence" }
];

const traditional = [
  "Fixed placements with rigid static schedules",
  "Manual, time-consuming planning & booking",
  "Limited flexibility once installed",
  "Fragmented inventory across multiple vendors",
  "Static post-campaign reporting with delays"
];

const flux = [
  "Direct I/O + Automated Programmatic trading",
  "Technology-enabled audience-informed planning",
  "Dynamic digital inventory with instant triggering",
  "Unified cross-inventory transit opportunities",
  "Real-time proof-of-play & data-enabled intelligence"
];

export default function KnowUs() {
  useSEO(
    "About FLUXMEDIA | Transit Media & DOOH Malaysia",
    "Discover FLUXMEDIA, a technology-enabled transit media platform connecting advertisers with audiences across Malaysia's mobility ecosystem."
  );

  return (
    <>
      <PageHero
        eyebrow="Know Us"
        title={
          <>
            <span className="text-white block">We understand</span>
            <span className="text-[#38BDF8] block">how people move.</span>
          </>
        }
        subtitle="FLUXMEDIA is building a technology-enabled transit media platform designed to connect brands with audiences across Malaysia's mobility ecosystem."
        bgImage={MEDIA.bgKnowUs}
        zeroOverlay={true}
      />

      {/* Who We Are */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-[1300px] mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <Reveal>
              <Eyebrow className="mb-6">Who We Are</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <SectionTitle title="Built for the next generation of transit media." />
            </Reveal>
          </div>
          <div className="lg:col-span-7 space-y-6 text-slate-600 leading-relaxed font-sans text-base">
            <Reveal delay={0.1}>
              <p className="text-lg text-slate-900 font-medium">
                FLUXMEDIA is a specialized SPV media company that operates digital screens in multiple formats across rail networks, in-cab spaces, and transit outdoor environments.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p>
                We have partnered and collaborated with prominent industry players to create an integrated platform capable of delivering end-to-end media solutions — from inventory access and screen deployment to advertising sales, programmatic activation, technology, and monetisation.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p>
                By bridging the gap between physical transit environments and dynamic digital content, we empower brands to connect with highly captive, on-the-go audiences in real time. Our mission is to transform everyday commuter journeys into engaging, high-impact brand experiences that drive measurable commercial value for both advertisers and media owners alike.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Business Model: Direct + Programmatic */}
      <section className="bg-slate-50/70 py-20 lg:py-28 border-y border-slate-200">
        <div className="max-w-[1300px] mx-auto px-6 lg:px-10">
          <Reveal>
            <Eyebrow className="mb-6">Our Business Model</Eyebrow>
            <SectionTitle
              title="Two complementary paths to media execution."
              subtitle="Whether you require exclusive high-impact physical station takeovers or dynamic data-driven programmatic buying, our platform supports your strategy."
            />
          </Reveal>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Direct Model */}
            <Reveal delay={0.1}>
              <Card className="h-full flex flex-col justify-between border-t-2 border-t-[#0284C7] bg-white border border-slate-200 shadow-sm">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-[10px] text-[#0284C7] uppercase tracking-[0.2em] font-semibold">
                      PATHWAY 01
                    </span>
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-[0.2em]">DIRECT I/O</span>
                  </div>
                  <h3 className="text-2xl font-bold font-display text-slate-900 mb-3">Network Sales</h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    Our commercial team works directly with advertisers and agencies to develop tailored campaigns using available FLUXMEDIA inventory.
                  </p>

                  <div className="pt-6 border-t border-slate-100">
                    <div className="text-[10px] uppercase tracking-[0.2em] font-mono text-slate-500 mb-4 font-semibold">
                      Ideal for:
                    </div>
                    <ul className="space-y-2.5">
                      {directFor.map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm text-slate-700">
                          <Check size={16} weight="bold" className="text-[#0284C7] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            </Reveal>

            {/* Programmatic Model */}
            <Reveal delay={0.2}>
              <Card className="h-full flex flex-col justify-between border-t-2 border-t-[#0077FE] bg-white border border-slate-200 shadow-sm">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-[10px] text-[#0284C7] uppercase tracking-[0.2em] font-semibold">
                      PATHWAY 02
                    </span>
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-[0.2em]">PROGRAMMATIC DOOH</span>
                  </div>
                  <h3 className="text-2xl font-bold font-display text-slate-900 mb-3">Programmatic DOOH</h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    Advertisers and DSPs can purchase eligible digital transit inventory programmatically with automated targeting, audience triggers, and real-time flexibility.
                  </p>

                  <div className="pt-6 border-t border-slate-100">
                    <div className="text-[10px] uppercase tracking-[0.2em] font-mono text-slate-500 mb-4 font-semibold">
                      Ideal for:
                    </div>
                    <ul className="space-y-2.5">
                      {pgmFor.map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm text-slate-700">
                          <Check size={16} weight="bold" className="text-[#0284C7] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Ecosystem Map */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-[1300px] mx-auto px-6 lg:px-10">
          <Reveal>
            <Eyebrow className="mb-6">The Ecosystem</Eyebrow>
            <SectionTitle
              title="Connecting stakeholders across the transit media value chain."
              subtitle="An open, collaborative framework enabling seamless interaction between infrastructure operators, technology stacks, and media buyers."
            />
          </Reveal>

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {ecosystem.map((item, idx) => {
              const Icon = item.icon;
              return (
                <Reveal key={idx} delay={idx * 0.05}>
                  <div className="p-6 bg-slate-50/80 border border-slate-200 shadow-xs hover:border-[#0284C7] hover:shadow-md transition-all">
                    <div className="w-10 h-10 border border-sky-200 bg-sky-50 flex items-center justify-center text-[#0284C7] mb-4 shadow-xs">
                      <Icon size={20} weight="bold" />
                    </div>
                    <div className="text-base font-semibold text-slate-900">{item.label}</div>
                    <div className="text-xs text-slate-600 mt-2 leading-relaxed font-sans">{item.desc}</div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Traditional vs FLUXMEDIA Comparison */}
      <section className="bg-slate-50/80 py-20 lg:py-28 border-t border-slate-200">
        <div className="max-w-[1300px] mx-auto px-6 lg:px-10">
          <Reveal>
            <Eyebrow className="mb-6">The Shift</Eyebrow>
            <SectionTitle
              title="Advancing from static OOH to connected transit intelligence."
              subtitle="How FLUXMEDIA modernises traditional out-of-home advertising into an agile, data-driven channel."
            />
          </Reveal>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8">
            <Reveal delay={0.1}>
              <div className="p-8 bg-slate-100/90 border border-slate-200 opacity-80">
                <div className="text-[10px] uppercase tracking-[0.2em] font-mono text-slate-500 mb-2 font-semibold">
                  CONVENTIONAL OUT-OF-HOME
                </div>
                <h3 className="text-xl font-bold font-display text-slate-700 mb-6">Traditional OOH</h3>
                <ul className="space-y-4">
                  {traditional.map((t, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm text-slate-600">
                      <X size={16} weight="bold" className="text-rose-500 shrink-0" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="p-8 bg-white border-2 border-[#0284C7] shadow-lg">
                <div className="text-[10px] uppercase tracking-[0.2em] font-mono text-[#0284C7] mb-2 font-semibold">
                  THE FLUXMEDIA STANDARD
                </div>
                <h3 className="text-xl font-bold font-display text-slate-900 mb-6">FLUXMEDIA Platform</h3>
                <ul className="space-y-4">
                  {flux.map((f, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm text-slate-900">
                      <Check size={16} weight="bold" className="text-[#0284C7] shrink-0" />
                      <span className="font-semibold">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBand
        title="Explore partnership and transit advertising opportunities."
        copy="Talk to our media team to discover how our consortium and inventory network can elevate your brand."
      />
    </>
  );
}
