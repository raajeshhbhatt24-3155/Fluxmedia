import React from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight } from "@phosphor-icons/react";

// Masked line-by-line reveal
export const MaskedLine: React.FC<{ children: React.ReactNode; delay?: number; className?: string }> = ({
  children,
  delay = 0,
  className = ""
}) => (
  <span className={`block overflow-hidden ${className}`}>
    <motion.span
      className="block"
      initial={{ y: "110%" }}
      animate={{ y: "0%" }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.span>
  </span>
);

// Standard scroll-triggered reveal
export const Reveal: React.FC<{
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}> = ({ children, delay = 0, y = 24, className = "" }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
  >
    {children}
  </motion.div>
);

// Section eyebrow
export const Eyebrow: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = ""
}) => (
  <span
    className={`inline-flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.2em] text-[#0284C7] font-semibold ${className}`}
  >
    <span className="h-[1.5px] w-6 bg-[#0284C7] inline-block shadow-[0_0_6px_rgba(2,132,199,0.4)]" />
    {children}
  </span>
);

// Section title
export const SectionTitle: React.FC<{
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  serifTitle?: boolean;
  className?: string;
}> = ({ eyebrow, title, subtitle, align = "left", className = "" }) => (
  <div className={`${align === "center" ? "text-center mx-auto" : ""} ${className}`}>
    {eyebrow && <Eyebrow className="mb-3">{eyebrow}</Eyebrow>}
    <h2 className="text-2xl sm:text-3xl lg:text-4xl tracking-tight text-slate-900 font-bold font-display leading-[1.12]">
      {title}
    </h2>
    {subtitle && (
      <p className="mt-4 text-sm sm:text-base text-slate-600 max-w-2xl leading-relaxed font-sans">
        {subtitle}
      </p>
    )}
  </div>
);

// Custom Button
export const CtaButton: React.FC<{
  to?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  children: React.ReactNode;
  variant?: "primary" | "outline" | "ghost" | "accent";
  size?: "sm" | "md" | "lg";
  className?: string;
  testid?: string;
  icon?: boolean;
  disabled?: boolean;
}> = ({
  to,
  onClick,
  type = "button",
  children,
  variant = "primary",
  size = "md",
  className = "",
  testid,
  icon = true,
  disabled = false
}) => {
  const base =
    "inline-flex items-center justify-center uppercase tracking-[0.18em] font-semibold font-mono transition-all duration-300 group cursor-pointer select-none active:scale-[0.98]";
  const sizes = {
    sm: "text-[10px] px-4 py-2 gap-2",
    md: "text-[11px] px-6 py-2.5 gap-2.5",
    lg: "text-xs px-8 py-3.5 gap-3"
  };
  const variants = {
    primary:
      "accent-gradient text-white font-bold hover:brightness-105 shadow-[0_2px_12px_rgba(2,132,199,0.3)] hover:shadow-[0_4px_20px_rgba(2,132,199,0.45)] disabled:opacity-50 disabled:cursor-not-allowed",
    outline:
      "border border-slate-300 bg-white text-slate-800 hover:border-[#0284C7] hover:text-[#0284C7] hover:bg-sky-50/60 hover:shadow-sm disabled:opacity-50 disabled:cursor-not-allowed",
    accent:
      "border border-[#0284C7] text-[#0284C7] hover:bg-[#0284C7] hover:text-white hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed",
    ghost: "text-slate-600 hover:text-[#0284C7] hover:underline underline-offset-4 decoration-[#0284C7] disabled:opacity-50 disabled:cursor-not-allowed"
  };

  const cls = `${base} ${sizes[size]} ${variants[variant]} ${className}`;

  const content = (
    <>
      <span>{children}</span>
      {icon && (
        <ArrowRight
          size={13}
          weight="bold"
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      )}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={cls} data-testid={testid}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={cls} data-testid={testid}>
      {content}
    </button>
  );
};

// Panel Card
export const Card: React.FC<{
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
}> = ({ children, className = "", hover = true, glow = false }) => (
  <div
    className={`relative glass-card rounded-none p-6 lg:p-8 transition-all duration-300 ${
      hover ? "glass-card-hover" : ""
    } ${glow ? "border-[#0284C7]/60 shadow-[0_10px_30px_rgba(2,132,199,0.15)]" : ""} ${className}`}
  >
    {children}
  </div>
);

// Top Page Hero Banner
export const PageHero: React.FC<{
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: string;
  bgImage?: string;
  zeroOverlay?: boolean;
}> = ({ eyebrow, title, subtitle, bgImage, zeroOverlay }) => (
  <section className="relative min-h-[60vh] lg:min-h-[68vh] flex items-end pb-16 lg:pb-24 pt-36 sm:pt-44 overflow-hidden border-b border-slate-200 bg-slate-950">
    {bgImage && (
      <>
        <img
          src={bgImage}
          alt={typeof title === "string" ? title : "FLUXMEDIA Transit"}
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover opacity-100 filter contrast-[1.08] brightness-[1.05] saturate-[1.1]"
        />
        {zeroOverlay ? (
          <>
            {/* Zero opacity overlay: clear background with subtle bottom ground for text crispness */}
            <div className="absolute inset-0 bg-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 via-transparent to-transparent pointer-events-none" />
          </>
        ) : (
          <>
            {/* Soft directional gradients */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/50 to-slate-900/30 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/40 to-transparent pointer-events-none" />
          </>
        )}
      </>
    )}
    <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#0284C7]/20 rounded-full blur-[140px] pointer-events-none" />
    <div className="absolute inset-0 grid-bg opacity-15 pointer-events-none" />

    <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 w-full">
      {eyebrow && (
        <span className="inline-flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.2em] text-[#38BDF8] font-semibold mb-4">
          <span className="h-[1.5px] w-6 bg-[#38BDF8] inline-block shadow-[0_0_6px_#38BDF8]" />
          {eyebrow}
        </span>
      )}
      <h1 className="font-display font-bold tracking-tight leading-[1.1] text-2xl sm:text-4xl lg:text-[3.25rem] max-w-5xl text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.8)]">
        {title}
      </h1>
      {subtitle && (
        <p className="mt-5 max-w-2xl text-base sm:text-lg text-slate-200 leading-relaxed font-sans drop-shadow-md">
          {subtitle}
        </p>
      )}
    </div>
  </section>
);

// CTA Band across pages - Daylight
export const CtaBand: React.FC<{ title: string; copy?: string }> = ({ title, copy }) => (
  <section className="relative overflow-hidden bg-gradient-to-b from-sky-50/80 via-white to-slate-50 border-y border-slate-200">
    <div className="absolute inset-0 grid-bg opacity-30" />
    <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#0284C7]/8 blur-[140px] rounded-full pointer-events-none" />
    <div className="relative max-w-[1300px] mx-auto px-6 lg:px-10 py-24 lg:py-32 text-center flex flex-col items-center">
      <Reveal>
        <SectionTitle title={title} align="center" className="max-w-3xl mx-auto" />
      </Reveal>
      {copy && (
        <Reveal delay={0.1}>
          <p className="mt-6 max-w-xl mx-auto text-slate-600 leading-relaxed text-sm sm:text-base font-sans">{copy}</p>
        </Reveal>
      )}
      <Reveal delay={0.2}>
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
          <CtaButton to="/contact" testid="cta-band-meeting" variant="primary">
            REQUEST A MEETING
          </CtaButton>
          <CtaButton to="/contact" variant="outline" testid="cta-band-plan">
            PLAN A CAMPAIGN
          </CtaButton>
        </div>
      </Reveal>
    </div>
  </section>
);
