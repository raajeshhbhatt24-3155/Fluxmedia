import React, { useState } from "react";
import { Link } from "react-router-dom";
import { X, ShieldCheck } from "@phosphor-icons/react";

const nav = [
  { label: "Home", to: "/" },
  { label: "Know Us", to: "/know-us" },
  { label: "The Tech", to: "/the-tech" },
  { label: "Services", to: "/services" },
  { label: "Request a Meeting", to: "/contact" }
];

const partners = ["MOVING WALLS", "TELEVEON", "SISTEM PERINTIS", "MYRODEO"];

export const Footer: React.FC = () => {
  const [modal, setModal] = useState<"privacy" | "terms" | null>(null);

  return (
    <>
      <footer className="relative bg-slate-950 border-t border-slate-800 overflow-hidden text-slate-300">
        <div className="absolute inset-0 grid-bg opacity-10 pointer-events-none" />
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
            {/* Brand Col */}
            <div className="md:col-span-6 lg:col-span-5">
              <Link to="/" className="flex items-center gap-3 group">
                <div className="w-6 h-6 accent-gradient rounded-xs transform rotate-45 transition-transform duration-300 group-hover:rotate-90 shadow-[0_0_12px_rgba(2,132,199,0.5)] flex items-center justify-center">
                  <div className="w-2 h-2 bg-slate-950 rounded-xs" />
                </div>
                <span className="font-bold tracking-tight text-2xl text-white font-display ml-1">
                  FLUX<span className="text-[#38BDF8] font-light ml-0.5">MEDIA</span>
                </span>
              </Link>
              <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.2em] text-[#38BDF8] font-semibold">
                Transit OOH & DOOH Excellence
              </p>
              <p className="mt-5 text-sm text-slate-400 leading-relaxed max-w-sm font-sans">
                FLUXMEDIA provides a unified gateway to Malaysia's premier transit digital inventory, enabling brands to reach high-value commuters at the moment of peak intent.
              </p>
            </div>

            {/* Nav Col */}
            <div className="md:col-span-3 lg:col-span-3">
              <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-slate-400 mb-5 font-semibold">
                Explore
              </div>
              <nav className="flex flex-col gap-3">
                {nav.map((l) => (
                  <Link
                    key={l.to}
                    to={l.to}
                    className="font-mono text-xs text-slate-400 hover:text-[#38BDF8] transition-colors w-fit uppercase tracking-[0.18em]"
                  >
                    {l.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Contact Col */}
            <div className="md:col-span-3 lg:col-span-4">
              <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-slate-400 mb-5 font-semibold">
                Commercial Desk
              </div>
              <a
                href="mailto:enquiry@fluxmedia.buzz?cc=raajeshh@televeon.com"
                className="text-base font-semibold text-white hover:text-[#38BDF8] transition-colors font-mono block"
              >
                enquiry@fluxmedia.buzz
              </a>
              <a
                href="mailto:raajeshh@televeon.com"
                className="text-xs text-slate-400 hover:text-[#38BDF8] transition-colors font-mono mt-1 block"
              >
                cc: raajeshh@televeon.com
              </a>
              <div className="mt-2 text-xs text-slate-400 font-sans">
                Kuala Lumpur & Klang Valley Transit Operations
              </div>
              <div className="mt-6 flex gap-5 text-xs text-slate-400 font-mono uppercase tracking-wider">
                <button
                  onClick={() => setModal("privacy")}
                  className="hover:text-[#38BDF8] transition-colors cursor-pointer text-left"
                >
                  Privacy Protocol
                </button>
                <span>·</span>
                <button
                  onClick={() => setModal("terms")}
                  className="hover:text-[#38BDF8] transition-colors cursor-pointer text-left"
                >
                  Terms of Presence
                </button>
              </div>
            </div>
          </div>

          {/* Strategic Partners Strip */}
          <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500 font-semibold">
                Strategic Partners & Tech
              </span>
              <div className="flex flex-wrap items-center gap-6 opacity-70 hover:opacity-100 transition-all font-mono">
                {partners.map((p, i) => (
                  <span key={i} className="text-xs font-semibold tracking-widest text-slate-300 hover:text-[#38BDF8] transition-colors">
                    {p}
                  </span>
                ))}
              </div>
            </div>

            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500 font-medium">
              © {new Date().getFullYear()} FLUXMEDIA GROUP. All rights reserved.
            </div>
          </div>
        </div>
      </footer>

      {/* Info Modals */}
      {modal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md"
          onClick={() => setModal(null)}
        >
          <div
            className="relative w-full max-w-2xl bg-white border border-slate-200 p-6 sm:p-8 shadow-2xl max-h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setModal(null)}
              className="absolute top-6 right-6 p-2 text-slate-400 hover:text-slate-700 transition-colors"
              aria-label="Close modal"
            >
              <X size={20} weight="bold" />
            </button>

            <div className="flex items-center gap-2 mb-4">
              <ShieldCheck size={24} className="text-[#0284C7]" weight="bold" />
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#0284C7] font-semibold">
                FLUXMEDIA Governance
              </span>
            </div>

            {modal === "privacy" ? (
              <div>
                <h3 className="text-2xl font-bold font-display text-slate-900 mb-4">
                  Data & Privacy Protocol
                </h3>
                <div className="space-y-4 text-sm text-slate-600 leading-relaxed font-sans">
                  <p>
                    FLUXMEDIA adheres strictly to data protection standards across all transit audience measurement and programmatic telemetry.
                  </p>
                  <p>
                    All location and commuter mobility analytics provided via Moving Walls and our data partners are aggregated, anonymized, and compliant with Malaysian PDPA regulations. No personally identifiable information (PII) or individual passenger biometric identifiers are ever captured, stored, or processed.
                  </p>
                  <p>
                    Device mobility signals are processed strictly as statistical footfall indices and dwell trends to enable aggregate media planning, impression validation, and proof-of-play auditing.
                  </p>
                </div>
              </div>
            ) : (
              <div>
                <h3 className="text-2xl font-bold font-display text-slate-900 mb-4">
                  Terms of Presence & Advertising
                </h3>
                <div className="space-y-4 text-sm text-slate-600 leading-relaxed font-sans">
                  <p>
                    All commercial advertising displayed across FLUXMEDIA's transit rail, station concourses, digital billboards, and vehicle networks is subject to advertising guidelines set forth by Malaysian advertising authorities and transit operator concessions.
                  </p>
                  <p>
                    Creative materials must comply with content standards regarding safety, cultural sensitivity, and copyright. Direct I/O bookings and programmatic DSP buys are governed by standardized service level agreements (SLAs) with verified proof-of-play guarantees.
                  </p>
                  <p>
                    For detailed rate cards, technical broadcast specifications, or programmatic seat onboarding, please reach out to our commercial desk at enquiry@fluxmedia.buzz.
                  </p>
                </div>
              </div>
            )}

            <div className="mt-8 pt-6 border-t border-slate-200 flex justify-end">
              <button
                onClick={() => setModal(null)}
                className="font-mono text-xs uppercase tracking-[0.18em] px-5 py-2.5 bg-[#0284C7] text-white font-bold hover:brightness-105 transition-all shadow-sm"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

