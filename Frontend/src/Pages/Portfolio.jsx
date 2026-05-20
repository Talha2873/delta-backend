import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X, ExternalLink, Circle } from "lucide-react";

// ─── DATA ────────────────────────────────────────────────────────────────────

const teamMembers = [
  {
    name: "Muhammad Talha Ilyas",
    role: "Founder & AI Architect",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800",
    skills: ["Python", "LangChain", "AI Engineering", "System Design"],
    progress: 95,
  },
  {
    name: "Ahmed Raza",
    role: "Senior Full Stack Engineer",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800",
    skills: [".NET", "React", "PostgreSQL", "AWS"],
    progress: 90,
  },
  {
    name: "Usman Ali",
    role: "AI Automation Engineer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800",
    skills: ["Python", "n8n", "APIs", "Automation"],
    progress: 88,
  },
  {
    name: "Fatima Noor",
    role: "UI/UX Designer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800",
    skills: ["Figma", "UI Design", "Prototyping", "Branding"],
    progress: 92,
  },
  {
    name: "Hamza Khan",
    role: "Backend Engineer",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800",
    skills: ["Django", "FastAPI", "REST APIs", "Databases"],
    progress: 86,
  },
];

const projects = [
  {
    title: "AI Support Chatbot",
    category: "Chatbot",
    description: "Customer support AI chatbot integrated with websites, reducing support load by 70%.",
    demoUrl: "chat.deltadevelopers.ai",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200",
    stack: ["OpenAI", "LangChain", "FastAPI", "React"],
    features: [
      "24/7 automated customer responses",
      "Smart escalation to human agents",
      "Multi-language support",
      "Analytics dashboard",
      "CRM integration",
    ],
    metrics: { "Satisfaction": "94%", "Queries/mo": "12K", "Resolution Rate": "87%" },
  },
  {
    title: "Restaurant AI Website",
    category: "Website",
    description: "Full-stack restaurant ordering platform with AI-powered menu recommendations and upsell engine.",
    demoUrl: "order.tastehouse.com",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200",
    stack: ["Next.js", "Django", "Stripe", "Tailwind"],
    features: [
      "Online ordering with real-time tracking",
      "AI menu recommendations",
      "Stripe payments integration",
      "Staff management panel",
      "Loyalty rewards system",
    ],
    metrics: { "Orders/mo": "2.4K", "Revenue Lift": "+38%", "Retention": "81%" },
  },
  {
    title: "Smart CRM Dashboard",
    category: "Dashboard",
    description: "AI-powered CRM with predictive analytics, automated follow-ups, and comprehensive reporting.",
    demoUrl: "crm.deltatech.io",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200",
    stack: [".NET", "React", "PostgreSQL", "AI"],
    features: [
      "Lead scoring with AI predictions",
      "Automated email sequences",
      "Revenue forecasting",
      "Team performance tracking",
      "Custom reports & exports",
    ],
    metrics: { "Lead Growth": "+65%", "Close Rate": "29%", "Time Saved": "40%" },
  },
  {
    title: "AI Voice Call Assistant",
    category: "Voice AI",
    description: "Outbound AI voice agent handling sales calls, appointment reminders, and customer callbacks.",
    demoUrl: "voice.deltaai.io",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200",
    stack: ["Twilio", "OpenAI", "Node.js", "Whisper"],
    features: [
      "Natural voice conversations",
      "Appointment scheduling",
      "Sentiment analysis",
      "Call transcription & summary",
      "CRM auto-logging",
    ],
    metrics: { "Calls/mo": "5K", "Booking Rate": "34%", "Cost Reduction": "60%" },
  },
  {
    title: "E-Commerce AI Store",
    category: "Website",
    description: "Full e-commerce platform with AI personalization, inventory automation, and smart analytics.",
    demoUrl: "shop.smartstore.io",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200",
    stack: ["Next.js", "Stripe", "PostgreSQL", "AI"],
    features: [
      "Personalized product feeds",
      "Dynamic pricing engine",
      "Abandoned cart recovery",
      "Inventory auto-reorder",
      "Multi-vendor support",
    ],
    metrics: { "Conversion": "4.2%", "Avg Order Value": "+22%", "Returns": "-18%" },
  },
  {
    title: "Clinic Appointment Bot",
    category: "Chatbot",
    description: "Smart appointment booking chatbot for clinics with reminders, rescheduling, and patient intake.",
    demoUrl: "book.healthbot.io",
    image: "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1200",
    stack: ["FastAPI", "React", "OpenAI", "Twilio"],
    features: [
      "Instant appointment booking",
      "SMS & WhatsApp reminders",
      "Patient intake forms",
      "Calendar sync",
      "No-show reduction",
    ],
    metrics: { "No-shows": "-52%", "Bookings/mo": "800", "Rating": "4.9★" },
  },
  {
    title: "Real Estate CRM",
    category: "CRM",
    description: "End-to-end real estate lead management with AI valuation, pipeline tracking, and auto follow-ups.",
    demoUrl: "realty.deltacrm.io",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1200",
    stack: ["Django", "PostgreSQL", "React", "AI"],
    features: [
      "AI property valuation",
      "Lead nurture automation",
      "Pipeline visualizer",
      "Document management",
      "Agent performance KPIs",
    ],
    metrics: { "Lead Growth": "+80%", "Close Rate": "+22%", "Speed": "3x faster" },
  },
  {
    title: "Inventory Management",
    category: "Inventory",
    description: "Real-time inventory tracking with AI demand forecasting, supplier automation, and low-stock alerts.",
    demoUrl: "inventory.deltaops.io",
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=1200",
    stack: [".NET", "React", "SQL Server", "AI"],
    features: [
      "Real-time stock tracking",
      "AI demand forecasting",
      "Automated PO generation",
      "Barcode & QR scanning",
      "Multi-warehouse support",
    ],
    metrics: { "Waste Reduced": "34%", "Stockouts": "-78%", "Efficiency": "+45%" },
  },
];

// ─── STYLES (CSS-in-JS via style tags injected once) ─────────────────────────

const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Mono:wght@400;500&display=swap');

  .dd-root {
    background: #080d08;
    color: #d4ecc4;
    font-family: 'Syne', sans-serif;
  }

  /* ── Scrollbar ── */
  .dd-root ::-webkit-scrollbar { width: 4px; }
  .dd-root ::-webkit-scrollbar-track { background: #0d150d; }
  .dd-root ::-webkit-scrollbar-thumb { background: #3a6e20; border-radius: 2px; }

  /* ── Section label ── */
  .dd-label {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-size: 11px;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: #b4f542;
    font-weight: 600;
    margin-bottom: 14px;
  }
  .dd-label::before {
    content: '';
    width: 7px;
    height: 7px;
    background: #b4f542;
    border-radius: 50%;
  }

  /* ── Project card ── */
  .proj-card {
    background: #0c140b;
    border: 1px solid rgba(180,245,66,0.1);
    border-radius: 18px;
    overflow: hidden;
    transition: border-color 0.3s ease, transform 0.3s ease;
    display: flex;
    flex-direction: column;
    cursor: pointer;
  }
  .proj-card:hover {
    border-color: rgba(180,245,66,0.45);
    transform: translateY(-6px);
  }
  .proj-img-wrap {
    position: relative;
    height: 190px;
    overflow: hidden;
  }
  .proj-img-wrap img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  .proj-card:hover .proj-img-wrap img {
    transform: scale(1.07);
  }
  .proj-cat-badge {
    position: absolute;
    top: 12px;
    right: 12px;
    background: rgba(8,13,8,0.82);
    border: 1px solid rgba(180,245,66,0.3);
    border-radius: 100px;
    padding: 4px 11px;
    font-size: 10px;
    color: #b4f542;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    backdrop-filter: blur(6px);
  }
  .proj-live-badge {
    position: absolute;
    top: 12px;
    left: 12px;
    background: rgba(180,245,66,0.12);
    border: 1px solid rgba(180,245,66,0.35);
    border-radius: 100px;
    padding: 4px 10px;
    font-size: 10px;
    color: #b4f542;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 5px;
    backdrop-filter: blur(6px);
  }
  .live-dot {
    width: 5px;
    height: 5px;
    background: #b4f542;
    border-radius: 50%;
    animation: livePulse 1.6s ease-in-out infinite;
  }
  @keyframes livePulse {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.35; transform: scale(1.5); }
  }
  .proj-body {
    padding: 20px;
    display: flex;
    flex-direction: column;
    flex: 1;
  }
  .proj-title {
    font-size: 16px;
    font-weight: 700;
    color: #edf7df;
    margin-bottom: 8px;
  }
  .proj-desc {
    font-size: 13px;
    color: #5c7a4c;
    line-height: 1.65;
    margin-bottom: 14px;
    flex: 1;
  }
  .proj-stack {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-bottom: 16px;
  }
  .stack-pill {
    background: rgba(180,245,66,0.07);
    border: 1px solid rgba(180,245,66,0.2);
    border-radius: 100px;
    padding: 3px 10px;
    font-size: 10px;
    color: #b4f542;
    font-weight: 500;
  }
  .proj-demo-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: rgba(180,245,66,0.06);
    border: 1px solid rgba(180,245,66,0.18);
    border-radius: 10px;
    padding: 10px 14px;
    font-size: 12px;
    font-weight: 600;
    color: #b4f542;
    transition: background 0.2s;
  }
  .proj-card:hover .proj-demo-row {
    background: rgba(180,245,66,0.13);
  }

  /* ── Demo modal ── */
  .demo-overlay {
    position: fixed;
    inset: 0;
    background: rgba(4,8,4,0.93);
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    backdrop-filter: blur(10px);
  }
  .demo-modal {
    background: #0d190a;
    border: 1px solid rgba(180,245,66,0.25);
    border-radius: 22px;
    width: 100%;
    max-width: 880px;
    max-height: 90vh;
    overflow-y: auto;
  }
  .demo-header {
    padding: 24px 28px;
    border-bottom: 1px solid rgba(180,245,66,0.1);
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: sticky;
    top: 0;
    background: #0d190a;
    z-index: 10;
  }
  .demo-close-btn {
    background: rgba(180,245,66,0.08);
    border: 1px solid rgba(180,245,66,0.25);
    border-radius: 8px;
    width: 36px;
    height: 36px;
    color: #b4f542;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.2s;
  }
  .demo-close-btn:hover { background: rgba(180,245,66,0.18); }
  .demo-body { padding: 28px; }
  .browser-bar {
    background: rgba(180,245,66,0.04);
    border-bottom: 1px solid rgba(180,245,66,0.1);
    padding: 10px 16px;
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .b-dots { display: flex; gap: 6px; }
  .b-dot { width: 11px; height: 11px; border-radius: 50%; }
  .b-url {
    flex: 1;
    background: rgba(180,245,66,0.06);
    border: 1px solid rgba(180,245,66,0.13);
    border-radius: 6px;
    padding: 5px 12px;
    font-size: 11px;
    color: #4a7a34;
    font-family: 'DM Mono', monospace;
  }
  .demo-screenshot {
    width: 100%;
    height: 230px;
    object-fit: cover;
    opacity: 0.82;
  }
  .demo-info-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    margin-top: 20px;
  }
  .demo-card {
    background: rgba(10,18,8,0.8);
    border: 1px solid rgba(180,245,66,0.1);
    border-radius: 12px;
    padding: 18px;
  }
  .demo-card-label {
    font-size: 10px;
    color: #3a6020;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    font-weight: 600;
    margin-bottom: 14px;
  }
  .feature-list { list-style: none; padding: 0; margin: 0; }
  .feature-list li {
    padding: 7px 0;
    border-bottom: 1px solid rgba(180,245,66,0.06);
    font-size: 13px;
    color: #7aaa5a;
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .feature-list li:last-child { border-bottom: none; }
  .feature-dot {
    width: 5px;
    height: 5px;
    background: #b4f542;
    border-radius: 50%;
    flex-shrink: 0;
  }
  .metric-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 9px 0;
    border-bottom: 1px solid rgba(180,245,66,0.06);
    font-size: 13px;
  }
  .metric-row:last-child { border-bottom: none; }
  .metric-key { color: #4a7a34; }
  .metric-val { color: #b4f542; font-weight: 700; font-family: 'DM Mono', monospace; }

  /* ── Team card ── */
  .team-card {
    background: #0c140b;
    border: 1px solid rgba(180,245,66,0.1);
    border-radius: 22px;
    overflow: hidden;
    transition: border-color 0.3s, transform 0.3s;
  }
  .team-card:hover {
    border-color: rgba(180,245,66,0.4);
    transform: translateY(-8px);
  }
  .team-img-wrap {
    position: relative;
    height: 210px;
    overflow: hidden;
  }
  .team-img-wrap img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .team-img-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, #0c140b 0%, rgba(12,20,11,0.25) 55%, transparent 100%);
  }
  .team-body { padding: 18px; }
  .team-name { font-size: 15px; font-weight: 700; color: #edf7df; margin-bottom: 4px; }
  .team-role { font-size: 11px; color: #b4f542; font-weight: 600; letter-spacing: 0.05em; margin-bottom: 14px; }
  .team-skills { display: flex; flex-wrap: wrap; gap: 5px; margin-bottom: 16px; }
  .skill-tag {
    background: rgba(180,245,66,0.06);
    border: 1px solid rgba(180,245,66,0.15);
    border-radius: 100px;
    padding: 2px 9px;
    font-size: 9px;
    color: #7aaa5a;
    font-weight: 500;
  }
  .exp-header {
    display: flex;
    justify-content: space-between;
    font-size: 11px;
    color: #3a6020;
    margin-bottom: 7px;
    font-weight: 500;
  }
  .exp-pct { color: #b4f542; font-weight: 700; font-family: 'DM Mono', monospace; }
  .exp-track {
    height: 4px;
    background: rgba(180,245,66,0.1);
    border-radius: 100px;
    overflow: hidden;
  }
  .exp-fill {
    height: 100%;
    background: #b4f542;
    border-radius: 100px;
  }
`;

// ─── INJECT STYLES ONCE ───────────────────────────────────────────────────────

let stylesInjected = false;
function injectStyles() {
  if (stylesInjected) return;
  const tag = document.createElement("style");
  tag.textContent = CSS;
  document.head.appendChild(tag);
  stylesInjected = true;
}

// ─── DEMO MODAL ───────────────────────────────────────────────────────────────

function DemoModal({ project, onClose }) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="demo-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={(e) => e.target === e.currentTarget && onClose()}
        >
          <motion.div
            className="demo-modal"
            initial={{ opacity: 0, scale: 0.94, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 24 }}
            transition={{ type: "spring", damping: 26, stiffness: 280 }}
          >
            {/* Header */}
            <div className="demo-header">
              <div>
                <p style={{ fontSize: 11, color: "#3a6020", letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 4 }}>
                  Live Project Demo
                </p>
                <h3 style={{ fontSize: 20, fontWeight: 800, color: "#edf7df" }}>{project.title}</h3>
              </div>
              <button className="demo-close-btn" onClick={onClose}>
                <X size={16} />
              </button>
            </div>

            {/* Body */}
            <div className="demo-body">
              {/* Browser mockup */}
              <div style={{ background: "#060e04", border: "1px solid rgba(180,245,66,0.13)", borderRadius: 14, overflow: "hidden", marginBottom: 20 }}>
                <div className="browser-bar">
                  <div className="b-dots">
                    <div className="b-dot" style={{ background: "#ff5f57" }} />
                    <div className="b-dot" style={{ background: "#febc2e" }} />
                    <div className="b-dot" style={{ background: "#28c840" }} />
                  </div>
                  <div className="b-url">{project.demoUrl}</div>
                  <ExternalLink size={13} color="#4a7a34" />
                </div>
                <img src={project.image} alt={project.title} className="demo-screenshot" />
              </div>

              {/* Info grid */}
              <div className="demo-info-grid">
                <div className="demo-card">
                  <div className="demo-card-label">Key Features</div>
                  <ul className="feature-list">
                    {project.features.map((f) => (
                      <li key={f}>
                        <span className="feature-dot" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="demo-card" style={{ marginBottom: 14 }}>
                    <div className="demo-card-label">Tech Stack</div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                      {project.stack.map((s) => (
                        <span key={s} className="stack-pill">{s}</span>
                      ))}
                    </div>
                  </div>
                  <div className="demo-card">
                    <div className="demo-card-label">Results</div>
                    {Object.entries(project.metrics).map(([k, v]) => (
                      <div key={k} className="metric-row">
                        <span className="metric-key">{k}</span>
                        <span className="metric-val">{v}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────

export default function PortfolioAndTeam() {
  const [activeDemo, setActiveDemo] = useState(null);

  injectStyles();

  return (
    <div className="dd-root">
      <DemoModal project={activeDemo} onClose={() => setActiveDemo(null)} />

      {/* ══════════════ PROJECTS SECTION ══════════════ */}
      <section
        id="projects"
        style={{
          padding: "96px 40px",
          borderBottom: "1px solid rgba(180,245,66,0.08)",
        }}
      >
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          {/* Heading */}
          <div style={{ marginBottom: 56 }}>
            <div className="dd-label">Featured Projects</div>
            <h2
              style={{
                fontSize: "clamp(28px, 4vw, 46px)",
                fontWeight: 800,
                lineHeight: 1.08,
                color: "#edf7df",
              }}
            >
              AI Products &amp;{" "}
              <em style={{ color: "#b4f542", fontStyle: "italic" }}>
                Business Systems
              </em>
            </h2>
          </div>

          {/* Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: 22,
            }}
          >
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                className="proj-card"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.4 }}
                onClick={() => setActiveDemo(project)}
              >
                {/* Image */}
                <div className="proj-img-wrap">
                  <img src={project.image} alt={project.title} loading="lazy" />
                  <div className="proj-live-badge">
                    <span className="live-dot" />
                    LIVE
                  </div>
                  <div className="proj-cat-badge">{project.category}</div>
                </div>

                {/* Body */}
                <div className="proj-body">
                  <div className="proj-title">{project.title}</div>
                  <div className="proj-desc">{project.description}</div>
                  <div className="proj-stack">
                    {project.stack.map((s) => (
                      <span key={s} className="stack-pill">{s}</span>
                    ))}
                  </div>
                  <div className="proj-demo-row">
                    <span>View Live Demo</span>
                    <ArrowRight size={14} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ TEAM SECTION ══════════════ */}
      <section
        id="team"
        style={{
          padding: "96px 40px",
          borderBottom: "1px solid rgba(180,245,66,0.08)",
        }}
      >
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          {/* Heading */}
          <div style={{ marginBottom: 56 }}>
            <div className="dd-label">Core Team</div>
            <h2
              style={{
                fontSize: "clamp(28px, 4vw, 46px)",
                fontWeight: 800,
                lineHeight: 1.08,
                color: "#edf7df",
              }}
            >
              Meet{" "}
              <em style={{ color: "#b4f542", fontStyle: "italic" }}>
                The Experts
              </em>
            </h2>
          </div>

          {/* Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
              gap: 22,
            }}
          >
            {teamMembers.map((member, i) => (
              <motion.div
                key={member.name}
                className="team-card"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
              >
                {/* Photo */}
                <div className="team-img-wrap">
                  <img src={member.image} alt={member.name} loading="lazy" />
                  <div className="team-img-overlay" />
                </div>

                {/* Body */}
                <div className="team-body">
                  <div className="team-name">{member.name}</div>
                  <div className="team-role">{member.role}</div>
                  <div className="team-skills">
                    {member.skills.map((s) => (
                      <span key={s} className="skill-tag">{s}</span>
                    ))}
                  </div>
                  <div>
                    <div className="exp-header">
                      <span>Expertise</span>
                      <span className="exp-pct">{member.progress}%</span>
                    </div>
                    <div className="exp-track">
                      <motion.div
                        className="exp-fill"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${member.progress}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}