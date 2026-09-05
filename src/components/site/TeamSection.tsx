import React from "react";
import { LinkedinLogo, EnvelopeSimple, ShieldCheck } from "@phosphor-icons/react";
import { MEDIA } from "@/constants/media";
import { Eyebrow, SectionTitle, Reveal } from "@/components/site/ui";

export interface TeamMember {
  id: string;
  name: string;
  title: string;
  description: string;
  focus: string;
  image: string;
  email?: string;
  linkedin?: string;
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "azman",
    name: "Dato' Seri Azman Harun",
    title: "Chief Executive Officer & Consortium Director",
    description:
      "Over 20 years leading national infrastructure concessions and transit media monetisation across Malaysia's rail, highway, and transit networks.",
    focus: "Concession Strategy & Governance",
    image: MEDIA.teamCeo,
    email: "azman@fluxmedia.my",
    linkedin: "https://linkedin.com"
  },
  {
    id: "alicia",
    name: "Alicia Tan Shu-Mei",
    title: "Head of Media Strategy & Programmatic DOOH",
    description:
      "Spearheading automated DSP trading, dynamic audience attribution, and programmatic DOOH revenue growth across Southeast Asian media agencies.",
    focus: "Programmatic DOOH & Data",
    image: MEDIA.teamStrategy,
    email: "alicia.tan@fluxmedia.my",
    linkedin: "https://linkedin.com"
  },
  {
    id: "hazman",
    name: "Ir. Hazman Zulkifli",
    title: "Chief Technology & Operations Officer",
    description:
      "Architects digital display hardware, IoT proof-of-play telemetry, and real-time screen synchronization across high-density commuter platforms.",
    focus: "Transit IoT & Display Networks",
    image: MEDIA.teamCto,
    email: "hazman@fluxmedia.my",
    linkedin: "https://linkedin.com"
  },
  {
    id: "jessica",
    name: "Jessica Low Pei-Wen",
    title: "Director of Commercial Growth & Partnerships",
    description:
      "Leads enterprise brand accounts and agency partnerships, structuring multi-environment station domination packages and custom transit campaigns.",
    focus: "Enterprise Growth & Brand Strategy",
    image: MEDIA.teamCommercial,
    email: "jessica.low@fluxmedia.my",
    linkedin: "https://linkedin.com"
  }
];

export const TeamSection: React.FC<{
  title?: string;
  subtitle?: string;
  eyebrow?: string;
  className?: string;
}> = ({
  title = "Leadership powering Malaysia's transit media future.",
  subtitle = "Our leadership brings decades of collective mastery across concession management, transit engineering, programmatic ad-tech, and commercial brand strategy.",
  eyebrow = "Executive Leadership",
  className = ""
}) => {
  return (
    <section data-testid="team-section" className={`bg-slate-50/70 py-20 lg:py-28 ${className}`}>
      <div className="max-w-[1300px] mx-auto px-6 lg:px-10">
        <Reveal>
          <div className="max-w-3xl mb-16">
            <Eyebrow className="mb-4">{eyebrow}</Eyebrow>
            <SectionTitle title={title} subtitle={subtitle} />
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEAM_MEMBERS.map((member, idx) => (
            <Reveal key={member.id} delay={idx * 0.08}>
              <div
                data-testid={`team-card-${member.id}`}
                className="group relative flex flex-col justify-between h-full bg-white border border-slate-200 shadow-sm p-5 hover:border-[#0284C7] hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                {/* Subtle top indicator */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#0284C7]/0 to-transparent group-hover:via-[#0284C7] transition-all duration-500" />

                <div>
                  {/* Portrait Image */}
                  <div className="relative aspect-square w-full mb-5 overflow-hidden border border-slate-200 bg-slate-100">
                    <img
                      src={member.image}
                      alt={member.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-top filter contrast-[1.05] brightness-95 group-hover:scale-105 group-hover:brightness-105 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-60" />

                    {/* Member Focus Tag */}
                    <div className="absolute bottom-2 left-2 right-2">
                      <span className="inline-block px-2.5 py-1 bg-white/95 backdrop-blur-md border border-slate-200 text-[9px] font-mono uppercase tracking-[0.15em] text-[#0284C7] font-bold shadow-xs">
                        {member.focus}
                      </span>
                    </div>
                  </div>

                  {/* Name & Title */}
                  <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-400 mb-1">
                    0{idx + 1} // LEADERSHIP
                  </div>
                  <h3 className="text-lg font-bold font-display text-slate-900 leading-snug group-hover:text-[#0284C7] transition-colors">
                    {member.name}
                  </h3>
                  <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#0284C7] font-semibold mt-1 mb-3.5">
                    {member.title}
                  </div>

                  {/* Short Description */}
                  <p className="text-xs text-slate-600 leading-relaxed font-sans font-normal">
                    {member.description}
                  </p>
                </div>

                {/* Footer Badges & Contacts */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-slate-500 text-xs">
                  <div className="flex items-center gap-1.5 font-mono text-[10px] text-slate-500 uppercase tracking-wider">
                    <ShieldCheck size={14} className="text-[#0284C7]" weight="bold" />
                    <span>Verified Executive</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="p-1.5 text-slate-400 hover:text-[#0284C7] hover:bg-slate-50 transition-colors"
                        aria-label={`${member.name} LinkedIn`}
                      >
                        <LinkedinLogo size={16} weight="fill" />
                      </a>
                    )}
                    {member.email && (
                      <a
                        href={`mailto:${member.email}`}
                        className="p-1.5 text-slate-400 hover:text-[#0284C7] hover:bg-slate-50 transition-colors"
                        aria-label={`Email ${member.name}`}
                      >
                        <EnvelopeSimple size={16} weight="bold" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
