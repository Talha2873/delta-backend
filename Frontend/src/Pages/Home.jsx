import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

/* =========================================================
   PREMIUM DELTA DEVELOPERS HOME PAGE
========================================================= */

const STATS = [
  { value: "120+", label: "PROJECTS COMPLETED" },
  { value: "48+", label: "GLOBAL CLIENTS" },
  { value: "4.2x", label: "AVG ROI" },
];

const TECH_STACK = [
  "OpenAI",
  "LangChain",
  "n8n",
  "React",
  "Stripe",
  "Supabase",
  "Meta",
  "Vercel",
  "WhatsApp API",
  "Node.js",
];

const SHOWCASE = [
  {
    id: 0,
    title: "AI Chatbots",
    subtitle:
      "Smart AI assistants handling customer conversations 24/7.",
    badge: "CHATBOT AI",
    video:
      "https://videos.pexels.com/video-files/3209828/3209828-uhd_2560_1440_25fps.mp4",
  },

  {
    id: 1,
    title: "AI Call Assistant",
    subtitle:
      "AI voice agents booking appointments & answering calls automatically.",
    badge: "VOICE AI",
    video:
      "https://videos.pexels.com/video-files/4106998/4106998-uhd_2560_1440_25fps.mp4",
  },

  {
    id: 2,
    title: "Business Automation",
    subtitle:
      "Automating workflows, CRM pipelines, payments & operations.",
    badge: "AUTOMATION",
    video:
      "https://videos.pexels.com/video-files/3129957/3129957-uhd_2560_1440_25fps.mp4",
  },
];

/* ========================================================= */

function FloatingUI({ activeItem, activeIndex }) {
  return (
    <div className="relative h-[620px]">

      {/* FLOATING GLASS */}
      <div className="absolute inset-0 rounded-[34px] overflow-hidden border border-[#203321] bg-[#071108]/70 backdrop-blur-xl shadow-[0_30px_120px_rgba(0,0,0,0.8)]">

        {/* VIDEO */}
        <video
          key={activeIndex}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          src={activeItem.video}
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-[#071108]/35 to-[#071108]" />

        {/* GLOW */}
        <div className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[400px] h-[180px] bg-[#c8ff77]/20 blur-[120px]" />

        {/* TOP BAR */}
        <div className="absolute top-5 left-5 right-5 z-20 flex items-center justify-between">

          <div className="px-4 py-2 rounded-full border border-[#335035] bg-[#0d180e]/80 backdrop-blur-md text-[#c8ff77] text-xs font-bold tracking-[0.25em]">
            ● LIVE AI SYSTEM
          </div>

          <div className="px-4 py-2 rounded-full bg-[#c8ff77] text-black text-xs font-black tracking-[0.18em]">
            {activeItem.badge}
          </div>
        </div>

        {/* CHAT UI */}
        {activeIndex === 0 && (
          <div className="absolute right-6 top-24 z-20 w-[320px] rounded-3xl border border-[#2a412b] bg-[#08150a]/90 backdrop-blur-2xl overflow-hidden shadow-2xl">

            <div className="flex items-center gap-3 px-4 py-4 border-b border-[#203321]">
              <div className="w-10 h-10 rounded-full bg-[#c8ff77] flex items-center justify-center text-black font-black">
                AI
              </div>

              <div>
                <p className="text-white text-sm font-bold">
                  Delta Assistant
                </p>

                <p className="text-[#8bdc7b] text-xs">
                  ● Online now
                </p>
              </div>
            </div>

            <div className="p-4 space-y-3">

              <div className="bg-[#132515] text-[#d8f4d2] rounded-2xl rounded-tl-md px-4 py-3 text-sm">
                Hi 👋 How can I help your business today?
              </div>

              <div className="bg-[#c8ff77] text-black rounded-2xl rounded-tr-md px-4 py-3 text-sm ml-auto w-fit font-semibold">
                I need more leads automatically
              </div>

              <div className="bg-[#132515] text-[#d8f4d2] rounded-2xl rounded-tl-md px-4 py-3 text-sm">
                Great 🚀 We can build an AI chatbot that captures leads 24/7.
              </div>

              <div className="flex gap-2 pt-2">
                <div className="h-2 w-2 rounded-full bg-[#c8ff77] animate-bounce" />
                <div className="h-2 w-2 rounded-full bg-[#c8ff77] animate-bounce delay-100" />
                <div className="h-2 w-2 rounded-full bg-[#c8ff77] animate-bounce delay-200" />
              </div>
            </div>
          </div>
        )}

        {/* CALL UI */}
        {activeIndex === 1 && (
          <div className="absolute right-8 top-24 z-20 w-[330px] rounded-3xl border border-[#2a412b] bg-[#08150a]/90 backdrop-blur-2xl p-5 shadow-2xl">

            <div className="flex items-center justify-center flex-col">

              <div className="w-24 h-24 rounded-full bg-[#122114] border border-[#365336] flex items-center justify-center text-5xl mb-5 shadow-[0_0_40px_rgba(200,255,119,0.25)]">
                🤖
              </div>

              <p className="text-white font-black text-xl">
                AI Voice Agent
              </p>

              <p className="text-[#84a086] text-sm mt-1">
                Booking reservations automatically
              </p>

              <div className="mt-8 w-full space-y-4">

                <div className="bg-[#101d11] border border-[#203321] rounded-2xl p-4">
                  <p className="text-[#c8ff77] text-xs tracking-widest font-bold">
                    LIVE CALL
                  </p>

                  <p className="text-white mt-2 text-sm leading-relaxed">
                    “Your table has been reserved for 7:30 PM tonight.”
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div className="rounded-2xl bg-[#101d11] border border-[#203321] p-3 text-center">
                    <p className="text-[#c8ff77] text-xl font-black">
                      92%
                    </p>

                    <p className="text-[#607563] text-[10px] mt-1">
                      RESPONSE RATE
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#101d11] border border-[#203321] p-3 text-center">
                    <p className="text-[#57c8ff] text-xl font-black">
                      24/7
                    </p>

                    <p className="text-[#607563] text-[10px] mt-1">
                      ACTIVE
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#101d11] border border-[#203321] p-3 text-center">
                    <p className="text-[#ffb957] text-xl font-black">
                      +214%
                    </p>

                    <p className="text-[#607563] text-[10px] mt-1">
                      BOOKINGS
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* AUTOMATION UI */}
        {activeIndex === 2 && (
          <div className="absolute right-6 top-20 z-20 w-[340px] rounded-3xl border border-[#2a412b] bg-[#08150a]/90 backdrop-blur-2xl p-5 shadow-2xl">

            <div className="flex items-center justify-between mb-5">
              <div>
                <p className="text-white font-bold">
                  Automation Workflow
                </p>

                <p className="text-[#78917a] text-xs mt-1">
                  CRM + Payments + AI
                </p>
              </div>

              <div className="w-3 h-3 rounded-full bg-[#c8ff77] animate-pulse" />
            </div>

            <div className="space-y-4">

              {[
                "Customer submits form",
                "AI analyzes request",
                "CRM updates automatically",
                "Invoice sent via Stripe",
              ].map((step, i) => (
                <div
                  key={step}
                  className="flex items-center gap-4"
                >
                  <div className="w-10 h-10 rounded-2xl bg-[#132515] border border-[#29412a] flex items-center justify-center text-[#c8ff77] font-black">
                    {i + 1}
                  </div>

                  <div className="flex-1 h-[2px] bg-[#29412a] relative overflow-hidden rounded-full">
                    <div className="absolute inset-y-0 left-0 w-1/2 bg-[#c8ff77] animate-pulse rounded-full" />
                  </div>

                  <p className="text-sm text-[#d4ead2] w-[160px]">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* BOTTOM CONTENT */}
        <div className="absolute bottom-0 left-0 right-0 z-20 p-8">

          <div className="mb-5 flex items-center gap-4">

            <div className="w-14 h-14 rounded-2xl bg-[#c8ff77] flex items-center justify-center text-black text-xl font-black shadow-[0_10px_30px_rgba(200,255,119,0.35)]">
              Δ
            </div>

            <div>
              <p className="text-white text-lg font-bold">
                Delta Developers
              </p>

              <p className="text-[#849a86] text-sm">
                Premium AI Solutions
              </p>
            </div>
          </div>

          <h2 className="text-5xl font-black text-white leading-[1] max-w-lg">
            {activeItem.title}
          </h2>

          <p className="text-[#90a591] text-lg leading-relaxed mt-5 max-w-lg">
            {activeItem.subtitle}
          </p>
        </div>
      </div>
    </div>
  );
}

/* ========================================================= */

export default function HomePage() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) =>
        prev === SHOWCASE.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const activeItem = SHOWCASE[activeIndex];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=Instrument+Serif:ital@0;1&display=swap');

        body{
          margin:0;
          background:#040904;
        }

        .font-display{
          font-family:'Instrument Serif',serif;
        }

        .font-ui{
          font-family:'Syne',sans-serif;
        }

        .mesh-bg{
          background:
          radial-gradient(circle at top left,#17321a55,transparent 30%),
          radial-gradient(circle at bottom right,#294d1035,transparent 30%),
          #040904;
        }

        .hero-grid{
          background-image:
          linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px);
          background-size:60px 60px;
        }
      `}</style>

      <div className="font-ui text-white min-h-screen mesh-bg relative overflow-hidden hero-grid">

        {/* GLOW */}
        <div className="absolute top-[-200px] left-[-150px] w-[500px] h-[500px] rounded-full bg-[#74ff5b]/10 blur-[140px]" />

        <div className="absolute bottom-[-220px] right-[-200px] w-[500px] h-[500px] rounded-full bg-[#74ff5b]/10 blur-[160px]" />

        {/* HERO */}
        <section className="relative z-10 px-6 pt-28 pb-24">

          <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_1.15fr] gap-20 items-center">

            {/* LEFT */}
            <div>

              {/* BADGE */}
              <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-[#2a442c] bg-[#0c160d]/80 backdrop-blur-xl mb-8">
                <span className="w-2 h-2 rounded-full bg-[#c8ff77] animate-pulse" />

                <span className="text-[#c8ff77] text-xs font-bold tracking-[0.28em]">
                  AI AUTOMATION AGENCY
                </span>
              </div>

              {/* TITLE */}
              <h1 className="leading-[0.92] mb-8">

                <span className="block text-white font-display italic text-[72px] md:text-[105px]">
                  The Future
                </span>

                <span className="block text-[#c8ff77] font-display italic text-[72px] md:text-[105px]">
                  Of Business
                </span>

                <span className="block text-white font-display italic text-[72px] md:text-[105px]">
                  Starts Here
                </span>
              </h1>

              {/* DESC */}
              <p className="text-[#8ca08d] text-lg leading-[1.9] max-w-xl mb-10">
                We build premium AI systems that automate operations,
                increase revenue, convert leads, and scale businesses
                with intelligent automation.
              </p>

              {/* BUTTONS */}
              <div className="flex flex-wrap gap-4 mb-14">

                <Link
                  to="/contact"
                  className="px-8 py-4 rounded-2xl bg-[#c8ff77] text-black font-black tracking-wide hover:scale-[1.03] transition-all duration-300 shadow-[0_10px_40px_rgba(200,255,119,0.3)]"
                >
                  FREE CONSULTATION
                </Link>

                <Link
                  to="/portfolio"
                  className="px-8 py-4 rounded-2xl border border-[#2a442c] bg-[#0d180e]/70 backdrop-blur-xl text-white hover:border-[#c8ff77] transition-all duration-300"
                >
                  VIEW CASE STUDIES
                </Link>
              </div>

              {/* STATS */}
              <div className="grid grid-cols-3 gap-8 max-w-xl mb-14">
                {STATS.map((s) => (
                  <div key={s.label}>
                    <p className="text-5xl font-black text-[#c8ff77]">
                      {s.value}
                    </p>

                    <p className="mt-3 text-[11px] tracking-[0.24em] text-[#617463] font-bold">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* EXTRA PREMIUM BAR */}
              <div className="flex flex-wrap gap-3">

                {[
                  "24/7 AI Systems",
                  "Custom Development",
                  "Fast Delivery",
                  "Premium UI/UX",
                ].map((item) => (
                  <div
                    key={item}
                    className="px-4 py-2 rounded-full border border-[#243725] bg-[#0b150c]/70 text-[#8ea28f] text-sm"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT */}
            <div>

              {/* TABS */}
              <div className="flex flex-wrap gap-3 mb-5">

                {SHOWCASE.map((item, idx) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveIndex(idx)}
                    className={`px-5 py-2 rounded-full text-xs tracking-[0.22em] font-bold transition-all duration-300 ${
                      activeIndex === idx
                        ? "bg-[#c8ff77] text-black"
                        : "bg-[#0c160d] border border-[#28412a] text-[#718673]"
                    }`}
                  >
                    {item.badge}
                  </button>
                ))}
              </div>

              {/* VIDEO CARD */}
              <FloatingUI
                activeItem={activeItem}
                activeIndex={activeIndex}
              />
            </div>
          </div>
        </section>

        {/* TECH STACK */}
        <section className="relative z-10 border-t border-b border-[#182719] py-12">

          <div className="max-w-7xl mx-auto px-6">

            <div className="flex flex-wrap justify-center gap-10">
              {TECH_STACK.map((tech) => (
                <span
                  key={tech}
                  className="text-[#5f7361] font-bold tracking-wide text-sm hover:text-[#c8ff77] transition-all duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* EXTRA IMPRESSIVE SECTION */}
        <section className="relative z-10 py-24 px-6">

          <div className="max-w-7xl mx-auto">

            <div className="rounded-[40px] border border-[#203321] bg-[#071108]/80 backdrop-blur-2xl overflow-hidden p-12 relative">

              <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#c8ff77]/10 blur-[120px]" />

              <div className="grid lg:grid-cols-2 gap-14 items-center">

                <div>
                  <p className="text-[#c8ff77] text-xs tracking-[0.28em] font-bold mb-5">
                    WHY CLIENTS CHOOSE DELTA
                  </p>

                  <h2 className="text-5xl font-black leading-[1.1] text-white mb-6">
                    We Build Systems
                    <span className="text-[#c8ff77]"> That Make Money</span>
                  </h2>

                  <p className="text-[#8ea08f] text-lg leading-[1.9]">
                    Every automation, chatbot, dashboard, and AI assistant
                    is designed to generate leads, save time, and increase
                    revenue for your business.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-5">

                  {[
                    "AI Chatbots",
                    "Voice Assistants",
                    "CRM Systems",
                    "Lead Generation",
                    "Workflow Automation",
                    "Premium Websites",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-3xl border border-[#243725] bg-[#0c170d] p-6 hover:border-[#c8ff77] transition-all duration-300"
                    >
                      <div className="w-12 h-12 rounded-2xl bg-[#c8ff77] text-black flex items-center justify-center font-black text-lg mb-5">
                        AI
                      </div>

                      <p className="text-white font-bold text-lg">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}