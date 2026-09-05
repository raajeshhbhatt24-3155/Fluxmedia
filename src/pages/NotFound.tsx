import React from "react";
import useSEO from "@/hooks/useSEO";
import { CtaButton } from "@/components/site/ui";

export default function NotFound() {
  useSEO(
    "Page Not Found | FLUXMEDIA",
    "The page you are looking for could not be found."
  );

  return (
    <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden bg-white pt-24 pb-16">
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-sky-100/50 rounded-full blur-[140px] pointer-events-none" />
      <div className="relative max-w-[1300px] mx-auto px-6 lg:px-10 text-center">
        <span className="font-display font-bold text-7xl md:text-8xl text-[#0284C7] block tracking-tight">
          404
        </span>
        <h1 className="mt-6 font-bold font-display text-2xl md:text-4xl tracking-tight text-slate-900">
          This route is off the map.
        </h1>
        <p className="mt-4 max-w-md mx-auto text-slate-600 leading-relaxed text-sm sm:text-base font-sans">
          The page you are looking for has moved or does not exist. Let's get you back to the active transit network.
        </p>
        <div className="mt-10">
          <CtaButton to="/" variant="primary" testid="notfound-home">
            RETURN TO HOME
          </CtaButton>
        </div>
      </div>
    </section>
  );
}
