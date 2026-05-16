import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'

/* ── Tech Stack Logos ── */
const TechStack = () => (
  <div className="flex flex-wrap gap-x-8 gap-y-3 items-center">
    {[
      { name: 'Shopify',  style: { fontFamily: 'Georgia,serif', fontWeight: 700, letterSpacing: '-0.5px' } },
      { name: 'Stripe',   style: { fontFamily: 'system-ui,sans-serif', fontWeight: 800, letterSpacing: '-1px' } },
      { name: '▲ Vercel', style: { fontFamily: 'monospace', fontWeight: 700 } },
      { name: 'OpenAI',   style: { fontFamily: 'system-ui,sans-serif', fontWeight: 600, letterSpacing: '0.5px' } },
      { name: 'n8n',      style: { fontFamily: 'monospace', fontWeight: 800, letterSpacing: '1px', fontSize: '18px' } },
      { name: 'Meta',     style: { fontFamily: 'Arial,sans-serif', fontWeight: 900, fontStyle: 'italic' } },
    ].map((b, i) => (
      <span key={i} style={{
        color: 'rgba(255,255,255,0.22)',
        fontSize: '14px',
        cursor: 'default',
        userSelect: 'none',
        transition: 'color .2s',
        ...b.style,
      }}
        onMouseEnter={e => e.currentTarget.style.color = 'rgba(255,255,255,0.55)'}
        onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.22)'}
      >{b.name}</span>
    ))}
  </div>
)

/* ── Services Data ── */
const services = [
  {
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>,
    title: 'Full Stack Web Apps',
    desc: 'Blazing-fast React & Next.js products with robust APIs — built to handle real traffic and real revenue.',
    badge: 'Most Popular',
  },
  {
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>,
    title: 'AI Sales Chatbots',
    desc: 'GPT-powered assistants that qualify leads, answer questions, and book calls — 24/7, no human needed.',
    badge: 'High ROI',
  },
  {
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>,
    title: 'WhatsApp Automation',
    desc: 'Capture every lead, confirm bookings, and follow up — all through WhatsApp. 5× lead capture average.',
    badge: null,
  },
  {
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>,
    title: 'E-Commerce Stores',
    desc: 'High-converting Shopify and custom stores designed to turn browsers into buyers at every scroll.',
    badge: null,
  },
  {
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>,
    title: 'AI Workflow Automation',
    desc: 'n8n, Make & Zapier flows that eliminate 20+ hours/week of manual work — forever.',
    badge: null,
  },
  {
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>,
    title: 'SaaS MVP Development',
    desc: 'From wireframe to working product in 2–4 weeks. We help startups launch fast and iterate smart.',
    badge: 'Startup Ready',
  },
]

/* ── Case Studies ── */
const cases = [
  {
    emoji: '🏥', tag: 'Healthcare SaaS', accent: '#f97316',
    title: 'MedBook Clinic Suite',
    problem: 'Manual bookings losing 60 patients/day',
    solution: 'Custom booking platform + WhatsApp reminders',
    result: '3× bookings in 30 days',
    stat: '+200%',
  },
  {
    emoji: '🚛', tag: 'Logistics Platform', accent: '#ef4444',
    title: 'TruckPro Dispatch Hub',
    problem: 'Fleet chaos for a 200-truck logistics firm',
    solution: 'Real-time dispatch dashboard + driver app',
    result: '40% cost reduction',
    stat: '-40% Cost',
  },
  {
    emoji: '🤖', tag: 'AI Lead Gen', accent: '#f59e0b',
    title: 'LeadBot WhatsApp AI',
    problem: 'Real estate agency missing 80% after-hours leads',
    solution: 'AI WhatsApp bot with CRM integration',
    result: '5× lead capture rate',
    stat: '5× Leads',
  },
  {
    emoji: '🛒', tag: 'E-Commerce', accent: '#22c55e',
    title: 'ShopSpark AI Store',
    problem: 'Boutique losing sales to Amazon',
    solution: 'Smart Shopify store + abandoned cart AI',
    result: '2.8× revenue in 60 days',
    stat: '+180%',
  },
]

/* ── Why Choose Us ── */
const reasons = [
  { icon: '⚡', title: 'Ship in 2 Weeks', desc: 'No 3-month timelines. We move fast with weekly demos and zero surprises.' },
  { icon: '🎯', title: 'Outcome-Focused', desc: 'We measure success in your ROI, not our billable hours. Results over process.' },
  { icon: '🤖', title: 'AI-Native Studio', desc: 'Every product we build has AI baked in — not bolted on as an afterthought.' },
  { icon: '🔒', title: 'Fixed Pricing', desc: 'Clear scope, clear price. No surprise invoices. No scope creep excuses.' },
  { icon: '🌍', title: 'Global Standards', desc: 'US-grade code quality, design systems, and security — at competitive rates.' },
  { icon: '🛟', title: '30-Day Support', desc: 'We stay on after launch. Bug fixes, tweaks, and guidance — included free.' },
]

/* ── Process ── */
const steps = [
  { num: '01', title: 'Discovery Call', desc: 'We map your problem, goal, and ROI target in 30 focused minutes.' },
  { num: '02', title: 'Strategy & Scope', desc: 'Clear plan, fixed price, exact timeline — before we write a single line.' },
  { num: '03', title: 'Rapid Build', desc: '2-week sprints with weekly demos. You see progress, not promises.' },
  { num: '04', title: 'Launch & Grow', desc: 'Go live, team training, and 30 days of post-launch support included.' },
]

/* ── FAQ ── */
const faqs = [
  { q: 'How long does a typical project take?', a: 'Most projects ship in 2–4 weeks. SaaS MVPs can take 4–6 weeks. We give you a fixed timeline upfront and stick to it.' },
  { q: 'Do you work with international clients?', a: 'Yes — we work with clients across the USA, UK, Middle East, and South Asia. All communication is in English, and we adapt to your timezone.' },
  { q: 'What if I already have a developer?', a: 'Many clients do. We often come in for specialized AI layers, automation, or UI that\'s difficult to build without deep expertise. We collaborate, not compete.' },
  { q: 'How does pricing work?', a: 'We use fixed-scope pricing — no hourly billing surprises. After our discovery call, you get a clear quote with deliverables, timeline, and cost.' },
  { q: 'Can you maintain my project after launch?', a: 'Absolutely. We offer monthly retainer packages for ongoing updates, new features, and support beyond the free 30-day period.' },
]

/* ── Testimonials ── */
const testimonials = [
  { quote: 'They turned our broken booking system into a machine. We tripled monthly appointments in the first month.', name: 'Dr. Hamza K.', role: 'Clinic Owner, Lahore', stars: 5 },
  { quote: 'The WhatsApp bot captures 90% of our leads now. ROI hit in 3 weeks. I wish I\'d found them sooner.', name: 'Imran S.', role: 'Real Estate Agency, Karachi', stars: 5 },
  { quote: 'Professional, fast, transparent. Delivered in exactly 2 weeks as promised. No excuses, no delays.', name: 'Ahmed R.', role: 'E-Commerce Founder, Dubai', stars: 5 },
]

/* ══════════════════════════════════════════════════════
   HOME PAGE
══════════════════════════════════════════════════════ */
export default function Home() {
  const navigate = useNavigate()
  const [scrollY, setScrollY] = useState(0)
  const [openFaq, setOpenFaq] = useState(null)
  const observerRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  /* Intersection observer for scroll-reveal */
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('dd-visible')
          observerRef.current.unobserve(e.target)
        }
      }),
      { threshold: 0.12 }
    )
    document.querySelectorAll('.dd-reveal').forEach(el => observerRef.current.observe(el))
    return () => observerRef.current?.disconnect()
  }, [])

  return (
    <main className="bg-[#060606] text-white overflow-x-hidden" style={{ fontFamily: "'Outfit', sans-serif" }}>

      {/* ════════════════════════════════════
          HERO
      ════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden"
        style={{ background: 'radial-gradient(ellipse 90% 70% at 60% 40%, #1c0800 0%, #060606 65%)' }}>

        {/* Animated dot grid */}
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          transform: `translateY(${scrollY * 0.08}px)`,
        }} />

        {/* Glowing orbs */}
        <div className="absolute top-[-10%] right-[-8%] w-[800px] h-[800px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(234,88,12,0.18) 0%, transparent 65%)' }} />
        <div className="absolute bottom-[-5%] left-[15%] w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(220,38,38,0.1) 0%, transparent 65%)' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-24 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* LEFT */}
            <div>
              {/* Availability badge */}
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border mb-8 dd-fade-up delay-1"
                style={{ borderColor: 'rgba(249,115,22,0.35)', background: 'rgba(249,115,22,0.08)' }}>
                <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
                <span style={{ color: '#fb923c', fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em' }}>
                  AVAILABLE FOR PROJECTS · USA & GLOBAL
                </span>
              </div>

              {/* HEADLINE */}
              <h1 className="dd-fade-up delay-2" style={{
                fontSize: 'clamp(2.6rem, 6vw, 5rem)',
                fontWeight: 900,
                lineHeight: 0.94,
                letterSpacing: '-0.02em',
              }}>
                We Turn Your
                <br />
                <span style={{
                  background: 'linear-gradient(135deg, #f97316 0%, #dc2626 55%, #f97316 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>Business Ideas</span>
                <br />
                Into Revenue
                <br />
                Machines
              </h1>

              {/* Sub headline — HIGH CONTRAST */}
              <p className="dd-fade-up delay-3" style={{
                marginTop: '1.75rem',
                fontSize: '1.15rem',
                lineHeight: 1.75,
                color: 'rgba(255,255,255,0.72)',
                maxWidth: '520px',
                fontWeight: 400,
              }}>
                AI chatbots, full-stack apps, and smart automations — built in weeks, not months.
                <strong style={{ color: 'white', fontWeight: 700 }}> Real results. Fixed price. Zero surprises.</strong>
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 dd-fade-up delay-4" style={{ marginTop: '2.25rem' }}>
                <Link to="/contact"
                  className="group relative overflow-hidden px-8 py-4 rounded-full font-black text-sm tracking-widest uppercase transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                  style={{
                    background: 'linear-gradient(135deg,#f97316,#dc2626)',
                    boxShadow: '0 8px 32px rgba(249,115,22,0.38)',
                    letterSpacing: '0.08em',
                  }}>
                  <span className="relative z-10">Get My Free Growth Plan →</span>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: 'linear-gradient(135deg,#fb923c,#ef4444)' }} />
                </Link>

                <Link to="/portfolio"
                  className="px-8 py-4 rounded-full font-bold text-sm tracking-widest uppercase transition-all duration-300 hover:scale-105"
                  style={{
                    border: '1.5px solid rgba(255,255,255,0.18)',
                    color: 'rgba(255,255,255,0.75)',
                    letterSpacing: '0.08em',
                    backdropFilter: 'blur(8px)',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(249,115,22,0.5)'; e.currentTarget.style.color = '#fb923c' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.18)'; e.currentTarget.style.color = 'rgba(255,255,255,0.75)' }}
                >
                  View Our Work
                </Link>
              </div>

              {/* Trust micro-signals */}
              <div className="flex flex-wrap gap-5 dd-fade-up delay-5" style={{ marginTop: '2rem' }}>
                {['✓ Free consultation', '✓ No upfront commitment', '✓ Response within 24 hrs'].map(t => (
                  <span key={t} style={{ fontSize: '12.5px', color: 'rgba(255,255,255,0.38)', fontWeight: 500 }}>{t}</span>
                ))}
              </div>

              {/* Social proof numbers */}
              <div className="flex gap-8 dd-fade-up delay-5" style={{ marginTop: '2.5rem' }}>
                {[['50+', 'Projects'], ['30+', 'Happy Clients'], ['3.8×', 'Avg ROI']].map(([n, l]) => (
                  <div key={l}>
                    <div style={{
                      fontSize: '1.9rem', fontWeight: 900,
                      background: 'linear-gradient(135deg,#f97316,#dc2626)',
                      WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                    }}>{n}</div>
                    <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.35)', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT — Floating UI cards */}
            <div className="hidden lg:block relative h-[520px]">
              {/* Central glow */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-72 h-72 rounded-full" style={{
                  background: 'radial-gradient(circle, rgba(249,115,22,0.12) 0%, transparent 70%)',
                }} />
                <span className="absolute text-[140px] font-black select-none"
                  style={{ color: 'rgba(255,255,255,0.03)', fontFamily: 'monospace' }}>Δ</span>
              </div>

              {/* Metric Cards */}
              {[
                { top: '6%', right: '8%', delay: '0s', label: 'Avg. Client ROI', val: '3.8×', sub: 'in first 90 days' },
                { top: '38%', left: '2%', delay: '1.2s', label: 'Projects Delivered', val: '50+', sub: 'zero missed deadlines' },
                { bottom: '12%', right: '12%', delay: '0.6s', label: 'Turnaround', val: '2 wks', sub: 'scope to MVP' },
              ].map((c, i) => (
                <div key={i} className="absolute dd-card" style={{
                  top: c.top, right: c.right, left: c.left, bottom: c.bottom,
                  animationDelay: c.delay,
                  background: 'rgba(255,255,255,0.042)',
                  backdropFilter: 'blur(16px)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '20px',
                  padding: '20px 24px',
                  minWidth: '170px',
                }}>
                  <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.38)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '6px' }}>{c.label}</div>
                  <div style={{ fontSize: '2.2rem', fontWeight: 900, color: '#f97316', lineHeight: 1 }}>{c.val}</div>
                  <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.28)', marginTop: '4px' }}>{c.sub}</div>
                </div>
              ))}

              {/* Live indicator card */}
              <div className="absolute dd-card" style={{
                bottom: '30%', left: '8%', animationDelay: '1.8s',
                background: 'rgba(34,197,94,0.08)',
                backdropFilter: 'blur(16px)',
                border: '1px solid rgba(34,197,94,0.2)',
                borderRadius: '16px',
                padding: '14px 18px',
                display: 'flex', alignItems: 'center', gap: '10px',
              }}>
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#22c55e', boxShadow: '0 0 8px rgba(34,197,94,0.8)' }} />
                <span style={{ fontSize: '12px', fontWeight: 600, color: 'rgba(255,255,255,0.65)' }}>AI Systems Live Now</span>
              </div>
            </div>
          </div>

          {/* Tech stack logos */}
          <div className="mt-20 dd-fade-up delay-5">
            <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.2)', letterSpacing: '0.15em', marginBottom: '14px', fontWeight: 600 }}>
              TECHNOLOGIES WE MASTER
            </div>
            <TechStack />
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════
          PAIN SECTION
      ════════════════════════════════════ */}
      <section className="py-24 px-6 border-t border-b" style={{ borderColor: 'rgba(255,255,255,0.06)', background: '#080808' }}>
        <div className="max-w-4xl mx-auto text-center">
          <div className="dd-reveal inline-block px-4 py-1.5 rounded-full border mb-6"
            style={{ borderColor: 'rgba(239,68,68,0.3)', background: 'rgba(239,68,68,0.08)', color: '#f87171', fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em' }}>
            THE REAL COST OF WAITING
          </div>
          <h2 className="dd-reveal" style={{ fontSize: 'clamp(2rem,4.5vw,3.5rem)', fontWeight: 900, lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: '1.25rem' }}>
            Every Day Without AI Is a Day<br />
            <span style={{ color: '#f97316' }}>Your Competitors Pull Ahead</span>
          </h2>
          <p className="dd-reveal" style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'rgba(255,255,255,0.58)', maxWidth: '600px', margin: '0 auto 3rem' }}>
            Manual processes, slow websites, and missed leads aren't just inconveniences — they're silent revenue killers compounding daily.
          </p>
          <div className="grid md:grid-cols-3 gap-5 dd-reveal">
            {[
              { icon: '⏳', issue: 'Slow Website', cost: '53% of visitors leave after 3 seconds', color: 'rgba(239,68,68,0.15)', border: 'rgba(239,68,68,0.25)', txt: '#f87171' },
              { icon: '💬', issue: 'No AI Chatbot', cost: '80% of after-hours leads are never recovered', color: 'rgba(249,115,22,0.12)', border: 'rgba(249,115,22,0.25)', txt: '#fb923c' },
              { icon: '🔁', issue: 'Manual Tasks', cost: '20+ hours per week wasted on repeatable work', color: 'rgba(234,179,8,0.1)', border: 'rgba(234,179,8,0.2)', txt: '#fbbf24' },
            ].map((p, i) => (
              <div key={i} className="rounded-2xl p-6 text-left" style={{ background: p.color, border: `1px solid ${p.border}` }}>
                <div style={{ fontSize: '2rem', marginBottom: '12px' }}>{p.icon}</div>
                <div style={{ fontWeight: 700, fontSize: '15px', marginBottom: '6px' }}>{p.issue}</div>
                <div style={{ color: p.txt, fontSize: '13px', lineHeight: 1.6 }}>{p.cost}</div>
              </div>
            ))}
          </div>
          <div className="dd-reveal" style={{ marginTop: '2.5rem' }}>
            <Link to="/contact" className="inline-flex px-9 py-4 rounded-full font-black text-sm tracking-widest uppercase transition-all duration-300 hover:scale-105"
              style={{ background: 'linear-gradient(135deg,#f97316,#dc2626)', boxShadow: '0 8px 28px rgba(249,115,22,0.35)', letterSpacing: '0.08em' }}>
              Fix This Today — It's Free →
            </Link>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════
          SERVICES
      ════════════════════════════════════ */}
      <section className="py-28 px-6" style={{ background: '#0a0a0a' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="dd-reveal inline-block px-4 py-1.5 rounded-full border mb-5"
              style={{ borderColor: 'rgba(249,115,22,0.3)', background: 'rgba(249,115,22,0.08)', color: '#fb923c', fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em' }}>
              WHAT WE BUILD
            </div>
            <h2 className="dd-reveal" style={{ fontSize: 'clamp(2rem,4.5vw,3.75rem)', fontWeight: 900, letterSpacing: '-0.02em', lineHeight: 1.05 }}>
              Solutions That Don't Just Look Good —
              <br /><span style={{ color: '#f97316' }}>They Make You Money</span>
            </h2>
            <p className="dd-reveal" style={{ marginTop: '1rem', fontSize: '1.05rem', color: 'rgba(255,255,255,0.42)', maxWidth: '520px', margin: '1rem auto 0', lineHeight: 1.7 }}>
              Every service is engineered around one metric: measurable ROI for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 dd-reveal">
            {services.map((s, i) => (
              <button key={i} onClick={() => navigate('/contact')}
                className="text-left group relative rounded-2xl p-7 transition-all duration-350 overflow-hidden cursor-pointer"
                style={{ background: '#111', border: '1px solid rgba(255,255,255,0.07)' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(249,115,22,0.45)'; e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 20px 50px rgba(249,115,22,0.12)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none' }}>
                {/* hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-350 pointer-events-none"
                  style={{ background: 'radial-gradient(circle at 25% 25%, rgba(249,115,22,0.07) 0%, transparent 65%)' }} />

                {s.badge && (
                  <div className="absolute top-5 right-5 px-2.5 py-1 rounded-full text-xs font-bold"
                    style={{ background: 'rgba(249,115,22,0.15)', color: '#fb923c', border: '1px solid rgba(249,115,22,0.3)', letterSpacing: '0.06em', fontSize: '10px' }}>
                    {s.badge}
                  </div>
                )}

                <div style={{ color: '#f97316', marginBottom: '18px', opacity: 0.85, transition: 'opacity .2s' }}
                  className="group-hover:opacity-100">{s.icon}</div>
                <h3 style={{ fontSize: '17px', fontWeight: 700, marginBottom: '10px', transition: 'color .2s' }}
                  className="group-hover:text-orange-400">{s.title}</h3>
                <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.44)', lineHeight: 1.7, marginBottom: '18px' }}>{s.desc}</p>
                <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0"
                  style={{ color: '#f97316', fontSize: '13px', fontWeight: 700 }}>
                  <span>Get a Quote</span><span>→</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════
          CASE STUDIES
      ════════════════════════════════════ */}
      <section className="py-28 px-6 border-t" style={{ borderColor: 'rgba(255,255,255,0.06)', background: '#080808' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="dd-reveal inline-block px-4 py-1.5 rounded-full border mb-5"
              style={{ borderColor: 'rgba(249,115,22,0.3)', background: 'rgba(249,115,22,0.08)', color: '#fb923c', fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em' }}>
              CASE STUDIES
            </div>
            <h2 className="dd-reveal" style={{ fontSize: 'clamp(2rem,4.5vw,3.75rem)', fontWeight: 900, letterSpacing: '-0.02em', lineHeight: 1.05 }}>
              Real Businesses.
              <br /><span style={{ color: '#f97316' }}>Documented Results.</span>
            </h2>
            <p className="dd-reveal" style={{ marginTop: '1rem', fontSize: '1.05rem', color: 'rgba(255,255,255,0.42)', maxWidth: '480px', margin: '1rem auto 0' }}>
              Not mockups. Not concepts. Live products earning real money right now.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 dd-reveal">
            {cases.map((c, i) => (
              <div key={i} onClick={() => navigate('/portfolio')}
                className="relative rounded-3xl overflow-hidden cursor-pointer group"
                style={{ background: '#111', border: '1px solid rgba(255,255,255,0.07)', minHeight: '340px' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = `${c.accent}55`; e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = `0 24px 60px ${c.accent}18` }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none' }}
              >
                {/* top accent bar */}
                <div className="absolute top-0 left-0 right-0 h-[3px]"
                  style={{ background: `linear-gradient(90deg,${c.accent},transparent)` }} />

                {/* dot bg */}
                <div className="absolute inset-0 opacity-[0.04]"
                  style={{ backgroundImage: 'radial-gradient(circle,#fff 1px,transparent 1px)', backgroundSize: '28px 28px' }} />

                <div className="relative p-8 flex flex-col h-full justify-between" style={{ minHeight: '340px' }}>
                  <div>
                    <div className="text-5xl mb-4">{c.emoji}</div>
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-4"
                      style={{ background: `${c.accent}18`, border: `1px solid ${c.accent}44`, color: c.accent }}>
                      {c.tag}
                    </span>
                  </div>

                  <div>
                    <div className="space-y-2 mb-5">
                      <div className="flex gap-2 text-sm" style={{ color: 'rgba(255,255,255,0.42)' }}>
                        <span style={{ color: '#f87171', fontWeight: 700, fontSize: '10px', letterSpacing: '0.1em', textTransform: 'uppercase', minWidth: '60px', paddingTop: '2px' }}>Problem</span>
                        <span>{c.problem}</span>
                      </div>
                      <div className="flex gap-2 text-sm" style={{ color: 'rgba(255,255,255,0.42)' }}>
                        <span style={{ color: '#60a5fa', fontWeight: 700, fontSize: '10px', letterSpacing: '0.1em', textTransform: 'uppercase', minWidth: '60px', paddingTop: '2px' }}>Solution</span>
                        <span>{c.solution}</span>
                      </div>
                    </div>
                    <div className="flex items-end justify-between">
                      <div>
                        <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.3)', marginBottom: '3px', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Result</div>
                        <div style={{ color: c.accent, fontWeight: 800, fontSize: '15px' }}>{c.result}</div>
                      </div>
                      <div style={{
                        fontSize: '2.2rem', fontWeight: 900, color: c.accent,
                        opacity: 0.18, fontFamily: 'monospace',
                        transition: 'opacity .3s',
                      }} className="group-hover:opacity-40">{c.stat}</div>
                    </div>
                    <h3 className="mt-3 text-xl font-black transition-colors duration-300 group-hover:text-orange-400">{c.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 dd-reveal">
            <Link to="/portfolio"
              className="inline-flex px-8 py-4 rounded-full font-bold text-sm tracking-widest uppercase transition-all duration-300 hover:scale-105"
              style={{ border: '1.5px solid rgba(249,115,22,0.45)', color: '#fb923c', letterSpacing: '0.08em' }}
              onMouseEnter={e => { e.currentTarget.style.background = '#f97316'; e.currentTarget.style.color = 'white'; e.currentTarget.style.borderColor = '#f97316' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#fb923c'; e.currentTarget.style.borderColor = 'rgba(249,115,22,0.45)' }}>
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════
          WHY CHOOSE US
      ════════════════════════════════════ */}
      <section className="py-28 px-6 border-t" style={{ borderColor: 'rgba(255,255,255,0.06)', background: '#0c0c0c' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="dd-reveal inline-block px-4 py-1.5 rounded-full border mb-5"
              style={{ borderColor: 'rgba(249,115,22,0.3)', background: 'rgba(249,115,22,0.08)', color: '#fb923c', fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em' }}>
              WHY DELTA-DEVELOPERS
            </div>
            <h2 className="dd-reveal" style={{ fontSize: 'clamp(2rem,4.5vw,3.75rem)', fontWeight: 900, letterSpacing: '-0.02em', lineHeight: 1.05 }}>
              We Don't Just Build Websites.
              <br /><span style={{ color: '#f97316' }}>We Build Growth Systems.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 dd-reveal">
            {reasons.map((r, i) => (
              <div key={i} className="rounded-2xl p-7 transition-all duration-300"
                style={{ background: '#111', border: '1px solid rgba(255,255,255,0.07)' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(249,115,22,0.35)'; e.currentTarget.style.transform = 'translateY(-3px)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'; e.currentTarget.style.transform = 'translateY(0)' }}>
                <div style={{ fontSize: '2rem', marginBottom: '14px' }}>{r.icon}</div>
                <h3 style={{ fontWeight: 700, fontSize: '16px', marginBottom: '8px' }}>{r.title}</h3>
                <p style={{ fontSize: '13.5px', color: 'rgba(255,255,255,0.44)', lineHeight: 1.7 }}>{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════
          PROCESS
      ════════════════════════════════════ */}
      <section className="py-28 px-6 border-t" style={{ borderColor: 'rgba(255,255,255,0.06)', background: '#080808' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="dd-reveal inline-block px-4 py-1.5 rounded-full border mb-5"
              style={{ borderColor: 'rgba(249,115,22,0.3)', background: 'rgba(249,115,22,0.08)', color: '#fb923c', fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em' }}>
              HOW WE WORK
            </div>
            <h2 className="dd-reveal" style={{ fontSize: 'clamp(2rem,4.5vw,3.75rem)', fontWeight: 900, letterSpacing: '-0.02em', lineHeight: 1.05 }}>
              From Idea to Revenue
              <br /><span style={{ color: '#f97316' }}>in 4 Focused Steps</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-5 relative dd-reveal">
            <div className="hidden md:block absolute top-[52px] left-[14%] right-[14%] h-px pointer-events-none"
              style={{ background: 'linear-gradient(90deg,transparent,rgba(249,115,22,0.35),transparent)' }} />

            {steps.map((s, i) => (
              <div key={i} className="relative rounded-2xl p-7 transition-all duration-300"
                style={{ background: '#111', border: '1px solid rgba(255,255,255,0.07)' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(249,115,22,0.35)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)' }}>
                <div style={{ fontSize: '3rem', fontWeight: 900, marginBottom: '18px', color: 'rgba(249,115,22,0.2)', fontFamily: 'monospace' }}>{s.num}</div>
                <h3 style={{ fontWeight: 700, fontSize: '16px', marginBottom: '8px' }}>{s.title}</h3>
                <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.42)', lineHeight: 1.7 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════
          TESTIMONIALS
      ════════════════════════════════════ */}
      <section className="py-24 px-6 border-t" style={{ borderColor: 'rgba(255,255,255,0.06)', background: '#0c0c0c' }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="dd-reveal" style={{ fontSize: 'clamp(1.8rem,4vw,3rem)', fontWeight: 900, letterSpacing: '-0.02em', marginBottom: '8px' }}>
              Don't Take Our Word For It
            </h2>
            <p className="dd-reveal" style={{ color: 'rgba(255,255,255,0.38)', fontSize: '1rem' }}>Results our clients can't stop talking about</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 dd-reveal">
            {testimonials.map((t, i) => (
              <div key={i} className="rounded-2xl p-7 transition-all duration-300"
                style={{ background: '#111', border: '1px solid rgba(255,255,255,0.07)' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(249,115,22,0.25)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)' }}>
                <div style={{ display: 'flex', gap: '3px', marginBottom: '16px' }}>
                  {[...Array(t.stars)].map((_, j) => <span key={j} style={{ color: '#f97316' }}>★</span>)}
                </div>
                <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.68)', lineHeight: 1.75, fontStyle: 'italic', marginBottom: '20px' }}>"{t.quote}"</p>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '14px' }}>{t.name}</div>
                  <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.32)', marginTop: '2px' }}>{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════
          FAQ
      ════════════════════════════════════ */}
      <section className="py-24 px-6 border-t" style={{ borderColor: 'rgba(255,255,255,0.06)', background: '#080808' }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <div className="dd-reveal inline-block px-4 py-1.5 rounded-full border mb-5"
              style={{ borderColor: 'rgba(249,115,22,0.3)', background: 'rgba(249,115,22,0.08)', color: '#fb923c', fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em' }}>
              FAQ
            </div>
            <h2 className="dd-reveal" style={{ fontSize: 'clamp(1.8rem,4vw,3rem)', fontWeight: 900, letterSpacing: '-0.02em' }}>
              Questions We Get All the Time
            </h2>
          </div>

          <div className="space-y-3 dd-reveal">
            {faqs.map((f, i) => (
              <div key={i} className="rounded-2xl overflow-hidden transition-all duration-300"
                style={{ background: '#111', border: `1px solid ${openFaq === i ? 'rgba(249,115,22,0.35)' : 'rgba(255,255,255,0.07)'}` }}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-left px-7 py-5 flex items-center justify-between"
                  style={{ fontSize: '15px', fontWeight: 600, color: openFaq === i ? '#fb923c' : 'white', background: 'transparent', border: 'none', cursor: 'pointer' }}>
                  <span>{f.q}</span>
                  <span style={{ color: '#f97316', fontSize: '1.4rem', fontWeight: 300, transition: 'transform .3s', transform: openFaq === i ? 'rotate(45deg)' : 'rotate(0deg)', marginLeft: '16px', flexShrink: 0 }}>+</span>
                </button>
                {openFaq === i && (
                  <div style={{ padding: '0 28px 20px', fontSize: '14px', color: 'rgba(255,255,255,0.55)', lineHeight: 1.8 }}>
                    {f.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════
          FINAL CTA
      ════════════════════════════════════ */}
      <section className="py-28 px-6 relative overflow-hidden"
        style={{ background: 'radial-gradient(ellipse 85% 85% at 50% 50%, #1c0700 0%, #060606 70%)' }}>
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(circle,rgba(255,255,255,0.04) 1px,transparent 1px)', backgroundSize: '36px 36px' }} />

        <div className="relative max-w-3xl mx-auto text-center">
          <div className="dd-reveal inline-block px-4 py-1.5 rounded-full border mb-7"
            style={{ borderColor: 'rgba(249,115,22,0.35)', background: 'rgba(249,115,22,0.1)', color: '#fb923c', fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em' }}>
            LIMITED SPOTS THIS MONTH
          </div>

          <h2 className="dd-reveal" style={{ fontSize: 'clamp(2.2rem,5vw,4rem)', fontWeight: 900, letterSpacing: '-0.02em', lineHeight: 1.05, marginBottom: '1.25rem' }}>
            Ready to Build Your
            <br />
            <span style={{ background: 'linear-gradient(135deg,#f97316,#dc2626)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              AI-Powered Business?
            </span>
          </h2>

          <p className="dd-reveal" style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.8, marginBottom: '2.5rem', maxWidth: '520px', margin: '0 auto 2.5rem' }}>
            Book a free 30-minute audit. We'll show you exactly what's holding your business back and how to fix it — no pitch, no pressure.
          </p>

          <div className="dd-reveal flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact"
              className="px-10 py-5 rounded-full font-black text-sm tracking-widest uppercase transition-all duration-300 hover:scale-105"
              style={{ background: 'linear-gradient(135deg,#f97316,#dc2626)', boxShadow: '0 10px 40px rgba(249,115,22,0.4)', letterSpacing: '0.08em' }}>
              Get My Free Growth Audit →
            </Link>
            <Link to="/portfolio"
              className="px-10 py-5 rounded-full font-bold text-sm tracking-widest uppercase transition-all duration-300 hover:scale-105"
              style={{ border: '1.5px solid rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.7)', letterSpacing: '0.08em', backdropFilter: 'blur(8px)' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(249,115,22,0.5)'; e.currentTarget.style.color = '#fb923c' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; e.currentTarget.style.color = 'rgba(255,255,255,0.7)' }}>
              See Our Work First
            </Link>
          </div>

          <div className="dd-reveal flex justify-center flex-wrap gap-6 mt-8">
            {['✓ Free — no credit card', '✓ No commitment required', '✓ Reply within 24 hours'].map(t => (
              <span key={t} style={{ fontSize: '12.5px', color: 'rgba(255,255,255,0.3)', fontWeight: 500 }}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════
          FOOTER
      ════════════════════════════════════ */}
      <footer className="border-t" style={{ borderColor: 'rgba(255,255,255,0.06)', background: '#060606' }}>
        <div className="max-w-7xl mx-auto px-6 pt-16 pb-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-14">
            {/* Brand column */}
            <div className="md:col-span-1">
              <Link to="/" className="flex items-center gap-2.5 mb-5">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'linear-gradient(135deg,#f97316,#dc2626)' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <polygon points="12,2 22,20 2,20" stroke="white" strokeWidth="2" strokeLinejoin="round" fill="none" />
                  </svg>
                </div>
                <span style={{ fontWeight: 800, fontSize: '15px', letterSpacing: '0.03em' }}>DELTA-DEVELOPERS</span>
              </Link>
              <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.38)', lineHeight: 1.8, maxWidth: '220px' }}>
                Building AI-powered digital systems for ambitious businesses worldwide.
              </p>
              <div className="flex gap-4 mt-5">
                {['Twitter', 'LinkedIn', 'GitHub'].map(s => (
                  <a key={s} href="#" style={{ fontSize: '12px', color: 'rgba(255,255,255,0.28)', fontWeight: 600, transition: 'color .2s' }}
                    onMouseEnter={e => e.currentTarget.style.color = '#f97316'}
                    onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.28)'}>{s}</a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <div style={{ fontSize: '11px', fontWeight: 700, color: 'rgba(255,255,255,0.22)', letterSpacing: '0.12em', marginBottom: '16px', textTransform: 'uppercase' }}>Services</div>
              {['AI Chatbots', 'Web Development', 'Full Stack Apps', 'WhatsApp Bots', 'AI Automations', 'Shopify Stores'].map(l => (
                <Link key={l} to="/services" className="block mb-3" style={{ fontSize: '13.5px', color: 'rgba(255,255,255,0.42)', transition: 'color .2s' }}
                  onMouseEnter={e => e.currentTarget.style.color = '#f97316'}
                  onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.42)'}>{l}</Link>
              ))}
            </div>

            {/* Company */}
            <div>
              <div style={{ fontSize: '11px', fontWeight: 700, color: 'rgba(255,255,255,0.22)', letterSpacing: '0.12em', marginBottom: '16px', textTransform: 'uppercase' }}>Company</div>
              {[['Home', '/'], ['Services', '/services'], ['Portfolio', '/portfolio'], ['Expertise', '/expertise'], ['Contact', '/contact']].map(([l, h]) => (
                <Link key={l} to={h} className="block mb-3" style={{ fontSize: '13.5px', color: 'rgba(255,255,255,0.42)', transition: 'color .2s' }}
                  onMouseEnter={e => e.currentTarget.style.color = '#f97316'}
                  onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.42)'}>{l}</Link>
              ))}
            </div>

            {/* Contact */}
            <div>
              <div style={{ fontSize: '11px', fontWeight: 700, color: 'rgba(255,255,255,0.22)', letterSpacing: '0.12em', marginBottom: '16px', textTransform: 'uppercase' }}>Contact</div>
              <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.38)', lineHeight: 1.8, marginBottom: '12px' }}>Ready to start? We respond within 24 hours.</p>
              <a href="mailto:hello@delta-developers.com" style={{ fontSize: '13.5px', color: '#f97316', fontWeight: 600, display: 'block', marginBottom: '8px' }}>hello@delta-developers.com</a>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mt-3"
                style={{ background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.2)' }}>
                <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#22c55e' }} />
                <span style={{ fontSize: '11px', color: 'rgba(255,255,255,0.5)', fontWeight: 500 }}>Available for new projects</span>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8"
            style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
            <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.22)' }}>© 2025 Delta-Developers. All rights reserved.</p>
            <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.22)' }}>
              Built with <span style={{ color: '#f97316' }}>♥</span> by the Delta team
            </p>
          </div>
        </div>
      </footer>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&display=swap');

        * { font-family: 'Outfit', sans-serif; }

        @keyframes ddFloat {
          0%,100% { transform: translateY(0px); }
          50%      { transform: translateY(-14px); }
        }
        .dd-card {
          animation: ddFloat 5s ease-in-out infinite;
          transition: transform .3s;
        }

        /* Entry animations */
        @keyframes ddFadeUp {
          from { opacity:0; transform:translateY(22px); }
          to   { opacity:1; transform:translateY(0);    }
        }
        .dd-fade-up {
          animation: ddFadeUp 0.7s ease forwards;
        }
        .delay-1 { animation-delay:.1s; }
        .delay-2 { animation-delay:.25s; }
        .delay-3 { animation-delay:.4s; }
        .delay-4 { animation-delay:.55s; }
        .delay-5 { animation-delay:.72s; }

        /* Scroll reveal */
        .dd-reveal {
          opacity:0;
          transform: translateY(28px);
          transition: opacity .65s ease, transform .65s ease;
        }
        .dd-visible {
          opacity:1 !important;
          transform:translateY(0) !important;
        }
      `}</style>
    </main>
  )
}