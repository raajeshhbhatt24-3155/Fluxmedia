import React from "react";
import useSEO from "@/hooks/useSEO";
import { MEDIA } from "@/constants/media";
import {
  Clock,
  Cpu,
  DeviceMobile,
  HandPointing,
  MapPin,
  MonitorPlay,
  StackPlus,
  Target,
  TrendUp
} from "@phosphor-icons/react";
import {
  PageHero,
  Eyebrow,
  SectionTitle,
  Card,
  Reveal,
  CtaButton,
  CtaBand
} from "@/components/site/ui";
import { Gallery } from "@/components/site/Gallery";

const directFor = [
  "Product launches",
  "Brand awareness",
  "Transit domination",
  "Major seasonal campaigns",
  "High-impact takeovers",
  "Corporate sponsorships",
  "Premium screen packages",
  "Custom bespoke installations"
];

const directAdv = [
  {
    title: "PRECISE CONTROL",
    body: "Select preferred environments, transit lines, concourses, and exact campaign flights."
  },
  {
    title: "MAXIMUM IMPACT",
    body: "Build high-visibility synchronized takeovers around key commuter interchanges."
  },
  {
    title: "FLEXIBLE PACKAGES",
    body: "Create bespoke media packages tailored specifically to campaign reach goals."
  },
  {
    title: "DEDICATED PARTNERSHIP",
    body: "Work directly with an experienced media team from initial planning to on-ground execution."
  }
];

const pgmAdv = [
  {
    icon: Target,
    title: "AUDIENCE-LED",
    body: "Plan around relevant audience segments, commuter demographics, and validated movement patterns."
  },
  {
    icon: MapPin,
    title: "LOCATION-LED",
    body: "Activate campaigns around targeted geographic clusters, retail districts, and transit nodes."
  },
  {
    icon: Clock,
    title: "TIME-LED",
    body: "Daypart ads for morning commute rush, lunchtime dining hours, or evening shopping peaks."
  },
  {
    icon: Cpu,
    title: "AUTOMATED",
    body: "Reduce manual paperwork and buying complexity through connected programmatic DSP bidding."
  },
  {
    icon: StackPlus,
    title: "SCALABLE",
    body: "Access multi-format transit screens across Kuala Lumpur and Selangor via a single unified pipe."
  },
  {
    icon: TrendUp,
    title: "OPTIMISABLE",
    body: "Use real-time playback logs and mobility intelligence to refine ad delivery on the fly."
  }
];

const campaignPhases = [
  {
    phase: "PHASE 01",
    place: "Concourse & Entry Screens",
    tag: "HIGH VISIBILITY",
    desc: "First point of transit contact as commuters enter the station."
  },
  {
    phase: "PHASE 02",
    place: "Platform Digital Pillars",
    tag: "REPETITION & DWELL",
    desc: "Extended exposure while waiting for trains and buses."
  },
  {
    phase: "PHASE 03",
    place: "In-Transit & Vehicle Screens",
    tag: "CAPTIVE ENGAGEMENT",
    desc: "Inside LRT/MRT carriages and e-hailing vehicles during the ride."
  },
  {
    phase: "PHASE 04",
    place: "Exit & Street-Level DOOH",
    tag: "CALL TO ACTION",
    desc: "Immediate proximity to retail malls, business districts, and dining."
  }
];

const customExamples = [
  "Station Domination Takeovers",
  "Synchronized Screen Takeovers",
  "Interactive Touchscreen Activations",
  "Dynamic Weather/Live Score Triggers",
  "Omnichannel Mobile Retargeting",
  "E-Hailing In-Cabin Immersive Campaigns",
  "Festive & Countdown Takeovers"
];

const formats = [
  {
    icon: MonitorPlay,
    title: "Station Concourse Digital Screen",
    ratio: "16:9 Landscape / 4K UHD",
    use: "Brand awareness · Product launches · High-frequency commuter loops"
  },
  {
    icon: MonitorPlay,
    title: "Portrait Digital Totem / Pillar",
    ratio: "9:16 Portrait / Full HD",
    use: "Creative visual storytelling · Retail prompts · Vertical video"
  },
  {
    icon: DeviceMobile,
    title: "In-Transit Rider Screen",
    ratio: "16:9 / 10.1\" Interactive",
    use: "Captive passenger attention · Extended dwell time · Interactive QR feedback"
  },
  {
    icon: MonitorPlay,
    title: "Roadside Landmark Digital Billboard",
    ratio: "Large Format LED / High Brightness",
    use: "Mass vehicular audience · Arterial traffic domination · Iconic brand presence"
  },
  {
    icon: HandPointing,
    title: "Interactive Touch & Dynamic Pod",
    ratio: "Multi-Touch Capacitive",
    use: "Direct audience participation · Sampling activations · Instant redeemables"
  }
];

export default function Services() {
  useSEO(
    "Transit Media & DOOH Services | FLUXMEDIA Malaysia",
    "Explore FLUXMEDIA advertising services: direct OOH sales, programmatic DOOH buying, custom campaign executions, and screen formats."
  );

  return (
    <>
      <PageHero
        eyebrow="Services & Solutions"
        title="Media solutions designed around your objective."
        subtitle="From premium direct placements to technology-enabled programmatic campaigns, FLUXMEDIA gives advertisers and agencies multiple ways to activate transit audiences."
        bgImage={MEDIA.bgServices}
        zeroOverlay={true}
      />

      {/* Service 01: Network Sales */}
      <section id="direct" className="scroll-mt-24 bg-white py-20 lg:py-28">
        <div className="max-w-[1300px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <Reveal>
                <Eyebrow className="mb-4">Service 01</Eyebrow>
                <SectionTitle
                  title="Network Sales"
                  subtitle="Premium inventory. Strategic planning. Dedicated commercial expertise."
                />
                <p className="mt-6 text-slate-600 leading-relaxed text-sm sm:text-base font-sans">
                  Our network sales model gives advertisers and agencies exclusive access to available FLUXMEDIA inventory through a dedicated commercial team. We work with your campaign objectives, audience demographics, target transit lines, and budget to build high-impact media solutions.
                </p>

                <div className="mt-8">
                  <div className="text-[10px] uppercase tracking-[0.2em] font-mono text-slate-500 mb-4 font-semibold">
                    Ideal for:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {directFor.map((t, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] uppercase tracking-[0.15em] font-mono px-3 py-1.5 bg-slate-100 border border-slate-200 text-slate-700 font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8">
                  <CtaButton to="/contact" size="sm" variant="primary">
                    REQUEST NETWORK MEDIA KIT
                  </CtaButton>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {directAdv.map((adv, idx) => (
                  <Reveal key={idx} delay={idx * 0.1}>
                    <div className="p-6 bg-slate-50/80 border border-slate-200 shadow-xs hover:border-[#0284C7] hover:shadow-md transition-all h-full">
                      <div className="font-mono text-[10px] text-[#0284C7] mb-2 tracking-[0.2em] font-semibold">
                        0{idx + 1} // ADVANTAGE
                      </div>
                      <h4 className="text-base font-bold font-display text-slate-900 mb-2">{adv.title}</h4>
                      <p className="text-xs text-slate-600 leading-relaxed font-sans">{adv.body}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service 02: Programmatic DOOH */}
      <section id="programmatic" className="scroll-mt-24 bg-slate-50/70 py-20 lg:py-28 border-t border-slate-200">
        <div className="max-w-[1300px] mx-auto px-6 lg:px-10">
          <Reveal>
            <Eyebrow className="mb-4">Service 02</Eyebrow>
            <SectionTitle
              title="Programmatic DOOH"
              subtitle="Automate your transit buys with precision audience targeting and dynamic pacing."
            />
            <p className="mt-6 max-w-3xl text-slate-600 leading-relaxed text-sm sm:text-base font-sans">
              Connect your preferred DSP to our programmatic supply. Harness Moving Walls data pipes to dynamically serve ads when target audience indices peak in key transit stations.
            </p>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pgmAdv.map((item, idx) => {
              const Icon = item.icon;
              return (
                <Reveal key={idx} delay={idx * 0.08}>
                  <Card className="h-full bg-white border border-slate-200 shadow-sm">
                    <div className="w-10 h-10 border border-sky-200 bg-sky-50 flex items-center justify-center text-[#0284C7] mb-4 shadow-xs">
                      <Icon size={20} weight="bold" />
                    </div>
                    <h4 className="text-base font-bold font-display text-slate-900 mb-2">{item.title}</h4>
                    <p className="text-xs text-slate-600 leading-relaxed font-sans">{item.body}</p>
                  </Card>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Service 03: Custom Campaigns & Commuter Journey */}
      <section className="bg-white py-20 lg:py-28 border-t border-slate-200">
        <div className="max-w-[1300px] mx-auto px-6 lg:px-10">
          <Reveal>
            <Eyebrow className="mb-4">Service 03</Eyebrow>
            <SectionTitle
              title="The Connected Commuter Journey"
              subtitle="Engage passengers consistently from departure through transit to arrival."
            />
          </Reveal>

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {campaignPhases.map((p, idx) => (
              <Reveal key={idx} delay={idx * 0.1}>
                <div className="p-6 bg-slate-50/80 border border-slate-200 shadow-xs relative h-full flex flex-col justify-between hover:border-[#0284C7] hover:shadow-md transition-all">
                  <div>
                    <span className="font-mono text-[10px] text-[#0284C7] tracking-[0.2em] block mb-2 font-semibold">
                      {p.phase}
                    </span>
                    <h4 className="text-lg font-bold font-display text-slate-900 mb-2">{p.place}</h4>
                    <span className="inline-block font-mono text-[9px] uppercase px-2 py-0.5 bg-sky-50 text-[#0284C7] border border-sky-200 mb-3 tracking-wider font-semibold">
                      {p.tag}
                    </span>
                    <p className="text-xs text-slate-600 leading-relaxed font-sans">{p.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-12 p-8 bg-slate-50 border border-slate-200">
            <h4 className="text-[10px] uppercase tracking-[0.2em] font-mono text-slate-500 mb-4 font-semibold">
              Bespoke Campaign Solutions & Activations
            </h4>
            <div className="flex flex-wrap gap-2.5">
              {customExamples.map((ex, idx) => (
                <span
                  key={idx}
                  className="font-mono text-[11px] px-3.5 py-2 bg-white border border-slate-200 text-slate-800 shadow-xs font-medium"
                >
                  {ex}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Screen Formats and Specs */}
      <section className="bg-slate-50/70 py-20 lg:py-28 border-t border-slate-200">
        <div className="max-w-[1300px] mx-auto px-6 lg:px-10">
          <Reveal>
            <Eyebrow className="mb-4">Formats & Specifications</Eyebrow>
            <SectionTitle
              title="Standard and high-impact digital inventory formats."
              subtitle="Built for pristine visual clarity, high refresh rates, and universal video codec compatibility."
            />
          </Reveal>

          <div className="mt-14 space-y-4">
            {formats.map((f, idx) => {
              const Icon = f.icon;
              return (
                <Reveal key={idx} delay={idx * 0.06}>
                  <div className="p-6 bg-white border border-slate-200 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-[#0284C7] hover:shadow-md transition-all">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 border border-sky-200 bg-sky-50 flex items-center justify-center text-[#0284C7] shrink-0 shadow-xs">
                        <Icon size={22} weight="bold" />
                      </div>
                      <div>
                        <h4 className="text-base font-bold font-display text-slate-900">{f.title}</h4>
                        <div className="text-xs text-slate-600 mt-0.5 font-sans">{f.use}</div>
                      </div>
                    </div>

                    <div className="font-mono text-xs px-3.5 py-1.5 bg-sky-50 border border-sky-200 text-[#0284C7] shrink-0 self-start md:self-auto font-semibold">
                      {f.ratio}
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery Showcase */}
      <section className="bg-white py-20 lg:py-28 border-t border-slate-200">
        <div className="max-w-[1300px] mx-auto px-6 lg:px-10">
          <Reveal>
            <Eyebrow className="mb-4">Visual Gallery</Eyebrow>
            <SectionTitle
              title="Live inventory across Malaysian transit hubs."
              subtitle="Explore screen placements in real commuter environments."
            />
          </Reveal>

          <div className="mt-12">
            <Gallery />
          </div>
        </div>
      </section>

      <CtaBand
        title="Ready to plan your next transit media campaign?"
        copy="Contact our commercial sales team or request our technical specifications and rate cards."
      />
    </>
  );
}
