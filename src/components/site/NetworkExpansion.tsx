import React from "react";
import { Eyebrow, SectionTitle, CtaButton } from "./ui";
import { Gallery } from "./Gallery";

export const NetworkExpansion: React.FC = () => {
  return (
    <section data-testid="network-expansion" className="relative bg-white py-24 lg:py-32 overflow-hidden border-b border-slate-200">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12">
          <div>
            <Eyebrow className="mb-3">Network Footprint</Eyebrow>
            <SectionTitle
              title="Scale across high-density commuter transit lines."
              subtitle="From heavy-rail LRT/MRT interchanges to rapid busways and major urban arterial junctions."
            />
          </div>
          <CtaButton to="/services" variant="outline" size="sm">
            VIEW ALL INVENTORY FORMATS
          </CtaButton>
        </div>

        {/* Interactive screen formats gallery */}
        <Gallery />
      </div>
    </section>
  );
};
