import React, { useState } from "react";
import { toast } from "sonner";
import { CheckCircle, EnvelopeSimple, Phone, MapPin, Sparkle, Buildings } from "@phosphor-icons/react";
import useSEO from "@/hooks/useSEO";
import { MEDIA } from "@/constants/media";
import { PageHero, Eyebrow, SectionTitle, CtaButton } from "@/components/site/ui";

const objectives = [
  "Brand Awareness",
  "Product Launch",
  "Traffic / Footfall",
  "Sales / Conversion",
  "Event Promotion",
  "Seasonal Campaign",
  "Other"
];

const budgets = [
  "Below RM50K",
  "RM50K–RM100K",
  "RM100K–RM250K",
  "RM250K–RM500K",
  "RM500K+",
  "To Be Discussed"
];

const solutions = [
  "Network Media",
  "Programmatic DOOH",
  "Not Sure — Recommend a Solution"
];

const environments = [
  "Station",
  "Platform",
  "Train / In-Transit",
  "Digital Screens",
  "Cross-Inventory",
  "Open to Recommendation"
];

const geographies = [
  "Kuala Lumpur / Klang Valley",
  "Nationwide",
  "Specific Location",
  "Open to Recommendation"
];

interface FormData {
  firstName: string;
  lastName: string;
  jobTitle: string;
  company: string;
  email: string;
  mobile: string;
  brandName: string;
  industry: string;
  objective: string;
  solutions: string[];
  environments: string[];
  geography: string;
  startDate: string;
  endDate: string;
  budget: string;
  message: string;
}

const initial: FormData = {
  firstName: "",
  lastName: "",
  jobTitle: "",
  company: "",
  email: "",
  mobile: "",
  brandName: "",
  industry: "",
  objective: "",
  solutions: [],
  environments: [],
  geography: "",
  startDate: "",
  endDate: "",
  budget: "",
  message: ""
};

const labelClass = "text-[10px] uppercase tracking-[0.2em] text-slate-600 font-mono font-semibold";
const inputClass =
  "mt-2 w-full bg-white border border-slate-300 py-3 px-3.5 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#0284C7] focus:ring-1 focus:ring-[#0284C7] transition-all rounded-none font-mono text-sm shadow-xs";
const selectClass =
  "mt-2 w-full bg-white border border-slate-300 py-3 px-3 text-slate-900 focus:outline-none focus:border-[#0284C7] focus:ring-1 focus:ring-[#0284C7] transition-all rounded-none font-mono text-sm shadow-xs";

export default function Contact() {
  useSEO(
    "Request a Meeting | FLUXMEDIA",
    "Talk to FLUXMEDIA about your next transit OOH, DOOH or programmatic advertising campaign in Malaysia."
  );

  const [f, setF] = useState<FormData>(initial);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [lastMailto, setLastMailto] = useState("");

  const set =
    (k: keyof FormData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      setF((s) => ({ ...s, [k]: e.target.value }));
    };

  const toggle = (k: "solutions" | "environments", v: string) => {
    setF((s) => ({
      ...s,
      [k]: s[k].includes(v) ? s[k].filter((x) => x !== v) : [...s[k], v]
    }));
  };

  const buildMailto = (data: FormData) => {
    const recipient = "enquiry@fluxmedia.buzz";
    const cc = "raajeshh@televeon.com";
    const subject = `[Campaign Brief] ${data.brandName || data.company} - ${data.firstName} ${data.lastName}`;
    const bodyLines = [
      "FLUXMEDIA CAMPAIGN BRIEF & MEETING REQUEST",
      "===========================================",
      `Primary Recipient: ${recipient}`,
      `CC: ${cc}`,
      "",
      "01 // CONTACT DETAILS",
      `Name: ${data.firstName} ${data.lastName}`.trim(),
      `Company: ${data.company}`,
      `Job Title: ${data.jobTitle || "Not specified"}`,
      `Email: ${data.email}`,
      `Mobile / WhatsApp: ${data.mobile || "Not specified"}`,
      "",
      "02 // CAMPAIGN PARAMETERS",
      `Brand / Advertiser: ${data.brandName}`,
      `Industry: ${data.industry || "Not specified"}`,
      `Primary Objective: ${data.objective}`,
      `Requested Solutions: ${data.solutions.length ? data.solutions.join(", ") : "Open to Recommendation"}`,
      `Target Environments: ${data.environments.length ? data.environments.join(", ") : "Open to Recommendation"}`,
      `Geography: ${data.geography || "Open to Recommendation"}`,
      `Flight Dates: ${data.startDate || "TBD"} to ${data.endDate || "TBD"}`,
      `Estimated Budget: ${data.budget || "To Be Discussed"}`,
      "",
      "03 // ADDITIONAL BRIEF / NOTES",
      data.message || "No additional brief provided.",
      "",
      "===========================================",
      `Transmitted via FLUXMEDIA Portal to ${recipient} (CC: ${cc})`
    ];

    return `mailto:${recipient}?cc=${encodeURIComponent(cc)}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines.join("\n"))}`;
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!f.firstName || !f.lastName || !f.company || !f.email || !f.brandName || !f.objective) {
      toast.error("Please complete the required fields marked with *");
      return;
    }

    setLoading(true);

    const mailtoUri = buildMailto(f);
    setLastMailto(mailtoUri);

    try {
      // Send form payload via FormSubmit to ensure email delivery to enquiry@fluxmedia.buzz with cc to raajeshh@televeon.com
      const formPayload = {
        _subject: `[FLUXMEDIA Brief] ${f.brandName || f.company} - ${f.firstName} ${f.lastName}`,
        _cc: "raajeshh@televeon.com",
        _template: "table",
        _captcha: "false",
        "Full Name": `${f.firstName} ${f.lastName}`.trim(),
        "Work Email": f.email,
        "Mobile / Phone": f.mobile || "-",
        "Company": f.company,
        "Job Title": f.jobTitle || "-",
        "Brand Name": f.brandName,
        "Industry": f.industry || "-",
        "Primary Objective": f.objective,
        "Solutions": f.solutions.join(", ") || "Open to Recommendation",
        "Environments": f.environments.join(", ") || "Open to Recommendation",
        "Geography": f.geography || "Open to Recommendation",
        "Timeline": `${f.startDate || "TBD"} to ${f.endDate || "TBD"}`,
        "Budget Range": f.budget || "To Be Discussed",
        "Brief Notes": f.message || "-"
      };

      await Promise.allSettled([
        fetch("https://formsubmit.co/ajax/enquiry@fluxmedia.buzz", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: JSON.stringify(formPayload)
        }),
        fetch("/api/meeting", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...f,
            to: "enquiry@fluxmedia.buzz",
            cc: "raajeshh@televeon.com",
            timestamp: new Date().toISOString()
          })
        }).catch(() => {})
      ]);

      setDone(true);
      toast.success("Brief sent to enquiry@fluxmedia.buzz (cc: raajeshh@televeon.com)");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {
      setDone(true);
      toast.info("Opening email client draft for enquiry@fluxmedia.buzz (cc: raajeshh@televeon.com)...");
      window.location.href = mailtoUri;
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <PageHero
        eyebrow="Get In Touch"
        title="Plan your transit campaign with FLUXMEDIA."
        subtitle="Share your campaign objectives, target audience, and timing. Our media planning team will provide tailored screen availability, rates, and audience projections."
        bgImage={MEDIA.bgContact}
      />

      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-[1300px] mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Form Container */}
          <div className="lg:col-span-2">
            {done ? (
              <div
                data-testid="meeting-success"
                className="border border-sky-300 bg-sky-50/60 p-8 lg:p-12 flex flex-col items-center text-center shadow-md"
              >
                <CheckCircle size={64} weight="duotone" className="text-[#0284C7]" />
                <h2 className="mt-6 font-bold font-display text-2xl lg:text-3xl text-slate-900">
                  Campaign Brief Dispatched
                </h2>
                <p className="mt-4 text-slate-600 max-w-lg leading-relaxed text-sm sm:text-base font-sans">
                  Your campaign brief has been routed to{" "}
                  <strong className="text-slate-900 font-mono">enquiry@fluxmedia.buzz</strong> with CC to{" "}
                  <strong className="text-slate-900 font-mono">raajeshh@televeon.com</strong>. A FLUXMEDIA media strategist will review your requirements and follow up within 1 business day.
                </p>

                <div className="mt-6 p-4 bg-white border border-slate-200 w-full max-w-md text-left text-xs font-mono space-y-2 text-slate-600 shadow-xs">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400 uppercase tracking-wider">Primary Destination:</span>
                    <a href="mailto:enquiry@fluxmedia.buzz?cc=raajeshh@televeon.com" className="text-[#0284C7] font-semibold hover:underline">
                      enquiry@fluxmedia.buzz
                    </a>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400 uppercase tracking-wider">Carbon Copy (CC):</span>
                    <a href="mailto:raajeshh@televeon.com" className="text-slate-900 font-semibold hover:underline">
                      raajeshh@televeon.com
                    </a>
                  </div>
                  <div className="flex justify-between items-center pt-2 border-t border-slate-100">
                    <span className="text-slate-400 uppercase tracking-wider">Delivery Method:</span>
                    <span className="text-emerald-600 font-semibold">Direct Transmission & Pre-drafted</span>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap gap-4 justify-center">
                  {lastMailto && (
                    <a
                      href={lastMailto}
                      className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] px-6 py-3 bg-[#0284C7] text-white hover:bg-sky-600 transition-colors font-semibold shadow-xs"
                    >
                      <EnvelopeSimple size={16} weight="bold" />
                      Open Draft in Mail App
                    </a>
                  )}
                  <button
                    onClick={() => {
                      setF(initial);
                      setDone(false);
                    }}
                    className="font-mono text-[11px] uppercase tracking-[0.2em] px-6 py-3 border border-slate-300 text-slate-700 bg-white hover:bg-slate-50 transition-colors font-semibold"
                  >
                    Submit Another Brief
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={submit} className="bg-slate-50/80 border border-slate-200 p-8 lg:p-12 shadow-sm">
                <div className="flex items-center gap-2 mb-8">
                  <Eyebrow>Campaign Brief & Meeting Request</Eyebrow>
                </div>

                {/* Contact Information */}
                <div className="space-y-6">
                  <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#0284C7] pb-2 border-b border-slate-200 font-semibold">
                    01 // Contact Information
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <label className="block">
                      <span className={labelClass}>First Name *</span>
                      <input
                        data-testid="input-first-name"
                        className={inputClass}
                        value={f.firstName}
                        onChange={set("firstName")}
                        placeholder="First name"
                        required
                      />
                    </label>

                    <label className="block">
                      <span className={labelClass}>Last Name *</span>
                      <input
                        data-testid="input-last-name"
                        className={inputClass}
                        value={f.lastName}
                        onChange={set("lastName")}
                        placeholder="Last name"
                        required
                      />
                    </label>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <label className="block">
                      <span className={labelClass}>Job Title</span>
                      <input
                        className={inputClass}
                        value={f.jobTitle}
                        onChange={set("jobTitle")}
                        placeholder="e.g. Media Director / Brand Manager"
                      />
                    </label>

                    <label className="block">
                      <span className={labelClass}>Company *</span>
                      <input
                        data-testid="input-company"
                        className={inputClass}
                        value={f.company}
                        onChange={set("company")}
                        placeholder="Agency or Brand name"
                        required
                      />
                    </label>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <label className="block">
                      <span className={labelClass}>Email Address *</span>
                      <input
                        data-testid="input-email"
                        type="email"
                        className={inputClass}
                        value={f.email}
                        onChange={set("email")}
                        placeholder="you@company.com"
                        required
                      />
                    </label>

                    <label className="block">
                      <span className={labelClass}>Mobile Number</span>
                      <input
                        className={inputClass}
                        value={f.mobile}
                        onChange={set("mobile")}
                        placeholder="+60 12-345 6789"
                      />
                    </label>
                  </div>
                </div>

                {/* Campaign Specifics */}
                <div className="mt-12 space-y-6">
                  <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#0284C7] pb-2 border-b border-slate-200 font-semibold">
                    02 // Campaign Specifics
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <label className="block">
                      <span className={labelClass}>Brand / Product Name *</span>
                      <input
                        className={inputClass}
                        value={f.brandName}
                        onChange={set("brandName")}
                        placeholder="e.g. Acme Tech"
                        required
                      />
                    </label>

                    <label className="block">
                      <span className={labelClass}>Industry / Category</span>
                      <input
                        className={inputClass}
                        value={f.industry}
                        onChange={set("industry")}
                        placeholder="e.g. FMCG, Tech, Automotive, Finance"
                      />
                    </label>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <label className="block">
                      <span className={labelClass}>Primary Objective *</span>
                      <select
                        className={selectClass}
                        value={f.objective}
                        onChange={set("objective")}
                        required
                      >
                        <option value="">Select Objective</option>
                        {objectives.map((o) => (
                          <option key={o} value={o}>
                            {o}
                          </option>
                        ))}
                      </select>
                    </label>

                    <label className="block">
                      <span className={labelClass}>Target Geography</span>
                      <select
                        className={selectClass}
                        value={f.geography}
                        onChange={set("geography")}
                      >
                        <option value="">Select Geography</option>
                        {geographies.map((g) => (
                          <option key={g} value={g}>
                            {g}
                          </option>
                        ))}
                      </select>
                    </label>
                  </div>

                  {/* Solutions of Interest */}
                  <div>
                    <span className={labelClass}>Solutions of Interest</span>
                    <div className="flex flex-wrap gap-2.5 mt-3">
                      {solutions.map((s) => {
                        const active = f.solutions.includes(s);
                        return (
                          <button
                            type="button"
                            key={s}
                            onClick={() => toggle("solutions", s)}
                            className={`text-[11px] font-mono uppercase tracking-[0.15em] px-3.5 py-2 transition-all shadow-xs ${
                              active
                                ? "bg-[#0284C7] text-white font-bold"
                                : "bg-white border border-slate-200 text-slate-700 hover:border-[#0284C7]"
                            }`}
                          >
                            {s}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Target Transit Environments */}
                  <div>
                    <span className={labelClass}>Target Transit Environments</span>
                    <div className="flex flex-wrap gap-2.5 mt-3">
                      {environments.map((env) => {
                        const active = f.environments.includes(env);
                        return (
                          <button
                            type="button"
                            key={env}
                            onClick={() => toggle("environments", env)}
                            className={`text-[11px] font-mono uppercase tracking-[0.15em] px-3.5 py-2 transition-all shadow-xs ${
                              active
                                ? "bg-[#0284C7] text-white font-bold"
                                : "bg-white border border-slate-200 text-slate-700 hover:border-[#0284C7]"
                            }`}
                          >
                            {env}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Timing & Budget */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <label className="block">
                      <span className={labelClass}>Estimated Start</span>
                      <input
                        type="date"
                        className={inputClass}
                        value={f.startDate}
                        onChange={set("startDate")}
                      />
                    </label>

                    <label className="block">
                      <span className={labelClass}>Estimated End</span>
                      <input
                        type="date"
                        className={inputClass}
                        value={f.endDate}
                        onChange={set("endDate")}
                      />
                    </label>

                    <label className="block">
                      <span className={labelClass}>Estimated Budget</span>
                      <select
                        className={selectClass}
                        value={f.budget}
                        onChange={set("budget")}
                      >
                        <option value="">Select Budget</option>
                        {budgets.map((b) => (
                          <option key={b} value={b}>
                            {b}
                          </option>
                        ))}
                      </select>
                    </label>
                  </div>

                  {/* Message */}
                  <label className="block">
                    <span className={labelClass}>Campaign Brief / Additional Details</span>
                    <textarea
                      className={`${inputClass} min-h-[120px] resize-y`}
                      value={f.message}
                      onChange={set("message")}
                      placeholder="Share details about target audiences, specific stations or lines of interest, key milestones, or programmatic requirements..."
                    />
                  </label>
                </div>

                <div className="mt-10 pt-6 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="text-xs text-slate-500 font-sans leading-relaxed">
                    Delivers to <span className="font-mono text-slate-800 font-semibold">enquiry@fluxmedia.buzz</span>{" "}
                    · CC: <span className="font-mono text-[#0284C7] font-semibold">raajeshh@televeon.com</span>
                  </div>
                  <CtaButton
                    type="submit"
                    disabled={loading}
                    variant="primary"
                    size="lg"
                    className="w-full sm:w-auto"
                    testid="submit-brief-btn"
                  >
                    {loading ? "SUBMITTING BRIEF..." : "SUBMIT MEETING REQUEST"}
                  </CtaButton>
                </div>
              </form>
            )}
          </div>

          {/* Right Sidebar Info */}
          <div className="space-y-8">
            <div className="p-8 bg-slate-50/80 border border-slate-200 shadow-xs">
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#0284C7] mb-4 font-semibold">
                Direct Contact
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3 text-slate-800">
                  <EnvelopeSimple size={20} className="text-[#0284C7] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">Commercial Desk</div>
                    <a
                      href="mailto:enquiry@fluxmedia.buzz?cc=raajeshh@televeon.com"
                      className="font-mono text-sm hover:text-[#0284C7] transition-colors font-medium block"
                    >
                      enquiry@fluxmedia.buzz
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-slate-800">
                  <EnvelopeSimple size={20} className="text-[#0284C7] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">Executive CC</div>
                    <a
                      href="mailto:raajeshh@televeon.com"
                      className="font-mono text-sm hover:text-[#0284C7] transition-colors font-medium block"
                    >
                      raajeshh@televeon.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-slate-800 pt-1">
                  <MapPin size={20} className="text-[#0284C7] shrink-0" />
                  <span className="text-sm font-sans">Kuala Lumpur, Malaysia</span>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200">
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500 mb-2 font-semibold">
                  Operating Hours
                </div>
                <div className="text-sm text-slate-600 font-sans">
                  Monday – Friday: 9:00 AM – 6:00 PM (MYT)
                </div>
              </div>
            </div>

            <div className="p-8 bg-slate-50/80 border border-slate-200 shadow-xs">
              <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-[#0284C7] mb-4 font-semibold">
                <Buildings size={16} weight="fill" />
                <span>Corporate Office</span>
              </div>
              <div className="text-sm text-slate-700 leading-relaxed font-sans space-y-1">
                <p className="font-semibold text-slate-900">B-03-10, Gateway Corporate Suites</p>
                <p>Gateway Kiaramas</p>
                <p>No. 1 Jalan Desa Kiara, Mont Kiara</p>
                <p>50480, Kuala Lumpur, Malaysia</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
