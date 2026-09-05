import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { List, X, ArrowUpRight } from "@phosphor-icons/react";

const links = [
  { label: "Home", to: "/" },
  { label: "Know Us", to: "/know-us" },
  { label: "The Tech", to: "/the-tech" },
  { label: "Services", to: "/services" },
  { label: "Request a Meeting", to: "/contact" }
];

export const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl border-b border-slate-200/90 py-4 shadow-sm"
          : "bg-gradient-to-b from-slate-950/70 via-slate-950/30 to-transparent border-b border-white/10 py-5"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-6 h-6 accent-gradient rounded-xs transform rotate-45 transition-transform duration-300 group-hover:rotate-90 group-hover:scale-105 shadow-[0_0_12px_rgba(2,132,199,0.4)] flex items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-xs" />
          </div>
          <span
            className={`font-bold tracking-tight text-xl font-display ml-1 transition-colors duration-300 ${
              scrolled ? "text-slate-900" : "text-white drop-shadow-sm"
            }`}
          >
            FLUX<span className="text-[#38BDF8] font-semibold ml-0.5">MEDIA</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => {
            const isActive = location.pathname === link.to;
            const isContact = link.to === "/contact";

            if (isContact) {
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  data-testid="header-request-meeting-btn"
                  className="group relative inline-flex items-center gap-2 px-5 py-2.5 font-mono text-[11px] uppercase tracking-[0.18em] font-bold text-white accent-gradient shadow-[0_2px_12px_rgba(2,132,199,0.3)] hover:shadow-[0_4px_20px_rgba(2,132,199,0.45)] hover:brightness-105 active:scale-[0.98] transition-all duration-300 rounded-none"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight
                    size={14}
                    weight="bold"
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>
              );
            }

            return (
              <Link
                key={link.to}
                to={link.to}
                className={`font-mono text-[11px] uppercase tracking-[0.18em] font-medium transition-all duration-200 relative py-1.5 ${
                  isActive
                    ? scrolled
                      ? "text-[#0284C7] font-bold"
                      : "text-[#38BDF8] font-bold"
                    : scrolled
                    ? "text-slate-600 hover:text-[#0284C7]"
                    : "text-slate-200 hover:text-white drop-shadow-xs"
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className={`absolute bottom-0 left-0 right-0 h-[2px] ${
                      scrolled
                        ? "bg-[#0284C7] shadow-[0_0_8px_rgba(2,132,199,0.5)]"
                        : "bg-[#38BDF8] shadow-[0_0_8px_#38BDF8]"
                    }`}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setOpen(!open)}
          className={`md:hidden p-2 transition-colors ${
            scrolled ? "text-slate-700 hover:text-[#0284C7]" : "text-white hover:text-[#38BDF8]"
          }`}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} weight="bold" /> : <List size={24} weight="bold" />}
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-950/95 backdrop-blur-2xl border-b border-white/10 px-6 py-6 shadow-2xl"
          >
            <nav className="flex flex-col gap-4">
              {links.map((link) => {
                const isContact = link.to === "/contact";
                if (isContact) {
                  return (
                    <Link
                      key={link.to}
                      to={link.to}
                      className="mt-2 inline-flex items-center justify-center gap-2 px-5 py-3 font-mono text-xs uppercase tracking-[0.18em] font-bold text-white accent-gradient shadow-md active:scale-[0.98] transition-all"
                    >
                      <span>{link.label}</span>
                      <ArrowUpRight size={15} weight="bold" />
                    </Link>
                  );
                }

                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={`font-mono text-xs uppercase tracking-[0.18em] py-2.5 ${
                      location.pathname === link.to
                        ? "text-[#38BDF8] font-bold"
                        : "text-slate-200 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
