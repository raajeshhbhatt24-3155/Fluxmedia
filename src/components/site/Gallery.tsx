import React, { useState } from "react";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import { MEDIA } from "@/constants/media";
import { Eyebrow } from "./ui";

const slides = [
  {
    img: MEDIA.galInTaxiHeadrest,
    tag: "In-Taxi · Rear Seat",
    title: "Headrest Rider Screen",
    desc: "Full-attention digital screens facing e-hailing passengers throughout the ride with interactive capability."
  },
  {
    img: MEDIA.galInTaxiConsole,
    tag: "In-Taxi · Console",
    title: "In-Car Console Display",
    desc: "Dynamic creative delivered inside the cabin, synced to routes and time of day."
  },
  {
    img: MEDIA.galOutdoorBillboard,
    tag: "Outdoor · Large Format",
    title: "Outdoor Digital Billboard",
    desc: "High-impact roadside LED dominating key city arteries and transit interchanges."
  },
  {
    img: MEDIA.galOutdoorStreetPod,
    tag: "Outdoor · Street Level",
    title: "Roadside Street Pod",
    desc: "Portrait pavement screens reaching pedestrians and urban commuters at eye level."
  },
  {
    img: MEDIA.heroSubwayDooh,
    tag: "Station · Platform & Concourse",
    title: "Transit Network Hubs",
    desc: "Station concourses, platforms, pillars and synchronized digital pillars working as one connected canvas."
  }
];

export const Gallery: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? slides.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === slides.length - 1 ? 0 : c + 1));

  const slide = slides[current];

  return (
    <div className="relative bg-white border border-slate-200 shadow-lg overflow-hidden">
      <div className="relative aspect-[16/9] lg:aspect-[21/9] w-full overflow-hidden bg-slate-950">
        <img
          src={slide.img}
          alt={slide.title}
          className="w-full h-full object-cover transition-all duration-700 filter contrast-[1.05] brightness-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-slate-950/20" />

        {/* Content overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-10 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.2em] text-[#38BDF8] font-semibold mb-2">
              <span className="h-[1.5px] w-6 bg-[#38BDF8] inline-block shadow-[0_0_6px_#38BDF8]" />
              {slide.tag}
            </span>
            <h3 className="text-2xl lg:text-3xl font-bold text-white tracking-tight font-display drop-shadow-md">
              {slide.title}
            </h3>
            <p className="mt-2 text-sm text-slate-200 leading-relaxed font-sans drop-shadow-sm">
              {slide.desc}
            </p>
          </div>

          {/* Navigation buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={prev}
              className="w-11 h-11 border border-white/25 bg-slate-900/80 backdrop-blur-md flex items-center justify-center text-white hover:border-[#0284C7] hover:bg-[#0284C7] transition-all shadow-md"
              aria-label="Previous slide"
            >
              <CaretLeft size={18} weight="bold" />
            </button>
            <span className="text-[11px] uppercase tracking-[0.2em] text-slate-300 px-2 font-mono font-semibold">
              0{current + 1} / 0{slides.length}
            </span>
            <button
              onClick={next}
              className="w-11 h-11 border border-white/25 bg-slate-900/80 backdrop-blur-md flex items-center justify-center text-white hover:border-[#0284C7] hover:bg-[#0284C7] transition-all shadow-md"
              aria-label="Next slide"
            >
              <CaretRight size={18} weight="bold" />
            </button>
          </div>
        </div>
      </div>

      {/* Thumbnails strip */}
      <div className="grid grid-cols-5 border-t border-slate-200 divide-x divide-slate-200 bg-slate-50">
        {slides.map((s, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`p-3.5 text-left transition-all ${
              idx === current
                ? "bg-white border-t-2 border-t-[#0284C7] shadow-inner"
                : "hover:bg-white/60 opacity-60 hover:opacity-100"
            }`}
          >
            <div className="text-[10px] uppercase tracking-[0.18em] font-mono text-[#0284C7] font-semibold truncate">
              {s.tag.split("·")[0]}
            </div>
            <div className="text-xs font-medium text-slate-900 truncate mt-1">
              {s.title}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};
