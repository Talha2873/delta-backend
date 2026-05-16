import { useState, useEffect, useCallback } from 'react'

/* ===== IMPORT IMAGES ===== */
import novus from '../assets/Gemini_Generated_Image_vootmovootmovoot.jpeg'
import lumen from '../assets/Gemini_Generated_Image_egy6k1egy6k1egy6.jpeg'
import shopdelta from '../assets/Gemini_Generated_Image_mt3flnmt3flnmt3f.jpeg'
import botflow from '../assets/Gemini_Generated_Image_7hr2p77hr2p77hr2.jpeg'

/*
  ╔══════════════════════════════════════════════════════════════════╗
  ║  NEW PROJECT IMAGES — Download these and save to src/assets/    ║
  ║                                                                  ║
  ║  restaurantUI.jpeg                                               ║
  ║  → https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80
  ║                                                                  ║
  ║  salonBot.jpeg                                                   ║
  ║  → https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1200&q=80
  ║                                                                  ║
  ║  realEstateBot.jpeg                                              ║
  ║  → https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80
  ║                                                                  ║
  ║  dashboardUI.jpeg                                                ║
  ║  → https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80
  ║                                                                  ║
  ║  elearning.jpeg                                                  ║
  ║  → https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=1200&q=80
  ║                                                                  ║
  ║  fittrack.jpeg                                                   ║
  ║  → https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&q=80
  ║                                                                  ║
  ╚══════════════════════════════════════════════════════════════════╝

  After downloading, replace the placeholder URLs below with:
    import restaurantUI from '../assets/restaurantUI.jpeg'
    import salonBot    from '../assets/salonBot.jpeg'
    ... etc.
  and update each project's `image` field accordingly.
*/

// ── Temporary remote placeholders (swap with local imports above) ──
const restaurantUI  = 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80'
const salonBot      = 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1200&q=80'
const realEstateBot = 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80'
const dashboardUI   = 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80'
const elearning     = 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=1200&q=80'
const fittrack      = 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&q=80'

// ─────────────────────────────────────────────────────────────────────────────
//  PROJECT DATA
// ─────────────────────────────────────────────────────────────────────────────
const projects = [
  {
    id: 1,
    title: 'NovusAI Platform',
    category: 'Full Stack',
    tag: 'Full Stack',
    year: '2024',
    color: 'from-slate-800 to-zinc-900',
    accent: '#f97316',
    image: novus,
    desc: 'A futuristic identity built on intelligence, ambition, and endless potential.',
    tech: ['React', 'Node.js', 'OpenAI API', 'PostgreSQL'],
    screens: [
      {
        label: 'Dashboard',
        bg: 'from-slate-900 to-zinc-950',
        accent: '#f97316',
        layout: 'dashboard',
      },
      {
        label: 'AI Chat Interface',
        bg: 'from-zinc-900 to-slate-900',
        accent: '#fb923c',
        layout: 'chat',
      },
      {
        label: 'Analytics',
        bg: 'from-slate-950 to-zinc-900',
        accent: '#f97316',
        layout: 'analytics',
      },
      {
        label: 'Settings',
        bg: 'from-zinc-950 to-slate-800',
        accent: '#fdba74',
        layout: 'settings',
      },
    ],
  },
  {
    id: 2,
    title: 'Lumen Retreats',
    category: 'Branding',
    tag: 'E-Commerce',
    year: '2024',
    color: 'from-stone-800 to-neutral-900',
    accent: '#d4a574',
    image: lumen,
    desc: 'A serene and intentional identity designed to reflect balance, clarity and connection.',
    tech: ['Shopify', 'Liquid', 'Custom CSS', 'Klaviyo'],
    screens: [
      { label: 'Landing Page', bg: 'from-stone-900 to-amber-950', accent: '#d4a574', layout: 'landing' },
      { label: 'Product Page', bg: 'from-amber-950 to-stone-900', accent: '#c9955a', layout: 'product' },
      { label: 'Booking Flow', bg: 'from-stone-950 to-neutral-900', accent: '#d4a574', layout: 'booking' },
      { label: 'Brand Identity', bg: 'from-neutral-900 to-stone-900', accent: '#e5c48a', layout: 'brand' },
    ],
  },
  {
    id: 3,
    title: 'ShopDelta',
    category: 'E-Commerce',
    tag: 'E-Commerce',
    year: '2024',
    color: 'from-zinc-900 to-neutral-900',
    accent: '#22d3ee',
    image: shopdelta,
    desc: 'High-converting Shopify storefront with custom product pages and checkout flow.',
    tech: ['Shopify Plus', 'React', 'Stripe', 'Algolia'],
    screens: [
      { label: 'Storefront', bg: 'from-zinc-900 to-neutral-950', accent: '#22d3ee', layout: 'storefront' },
      { label: 'Product Detail', bg: 'from-neutral-950 to-zinc-900', accent: '#06b6d4', layout: 'product' },
      { label: 'Cart & Checkout', bg: 'from-zinc-950 to-neutral-900', accent: '#22d3ee', layout: 'checkout' },
      { label: 'Order Tracking', bg: 'from-neutral-900 to-zinc-950', accent: '#67e8f9', layout: 'tracking' },
    ],
  },
  {
    id: 4,
    title: 'BotFlow AI',
    category: 'AI Tools',
    tag: 'AI Integration',
    year: '2024',
    color: 'from-neutral-900 to-stone-900',
    accent: '#a78bfa',
    image: botflow,
    desc: 'WhatsApp automation system handling 500+ customer queries daily with zero human input.',
    tech: ['Python', 'Twilio', 'OpenAI', 'Redis'],
    screens: [
      { label: 'Bot Dashboard', bg: 'from-neutral-900 to-violet-950', accent: '#a78bfa', layout: 'dashboard' },
      { label: 'Conversation Flow', bg: 'from-violet-950 to-neutral-900', accent: '#8b5cf6', layout: 'chat' },
      { label: 'Analytics', bg: 'from-neutral-950 to-violet-900', accent: '#a78bfa', layout: 'analytics' },
    ],
  },

  // ── NEW PROJECTS ──────────────────────────────────────────────────────────

  {
    id: 5,
    title: 'Saveur Restaurant',
    category: 'UI Design',
    tag: 'UI Design',
    year: '2025',
    color: 'from-red-950 to-stone-900',
    accent: '#ef4444',
    image: restaurantUI,
    desc: 'Elegant multi-page restaurant website with online reservations, digital menu, and chef stories.',
    tech: ['Next.js', 'Framer Motion', 'Sanity CMS', 'Stripe'],
    screens: [
      { label: 'Home / Hero', bg: 'from-red-950 to-stone-950', accent: '#ef4444', layout: 'restaurantHome' },
      { label: 'Digital Menu', bg: 'from-stone-950 to-red-950', accent: '#dc2626', layout: 'menu' },
      { label: 'Reservations', bg: 'from-red-900 to-stone-900', accent: '#ef4444', layout: 'booking' },
      { label: 'Chef Stories', bg: 'from-stone-900 to-red-900', accent: '#fca5a5', layout: 'about' },
    ],
  },
  {
    id: 6,
    title: 'GlamBot — Salon AI',
    category: 'AI Chatbot',
    tag: 'AI Integration',
    year: '2025',
    color: 'from-pink-950 to-rose-900',
    accent: '#ec4899',
    image: salonBot,
    desc: 'WhatsApp-first AI chatbot for salons — books appointments, answers FAQs, and sends reminders 24/7.',
    tech: ['Python', 'WhatsApp Business API', 'GPT-4o', 'Cal.com'],
    screens: [
      { label: 'WhatsApp Flow', bg: 'from-pink-950 to-rose-950', accent: '#ec4899', layout: 'whatsapp' },
      { label: 'Admin Dashboard', bg: 'from-rose-950 to-pink-900', accent: '#db2777', layout: 'dashboard' },
      { label: 'Booking Calendar', bg: 'from-pink-900 to-rose-900', accent: '#ec4899', layout: 'calendar' },
      { label: 'Analytics', bg: 'from-rose-900 to-pink-950', accent: '#f9a8d4', layout: 'analytics' },
    ],
  },
  {
    id: 7,
    title: 'PropBot — Real Estate',
    category: 'AI Chatbot',
    tag: 'AI Integration',
    year: '2025',
    color: 'from-blue-950 to-slate-900',
    accent: '#3b82f6',
    image: realEstateBot,
    desc: 'AI-powered WhatsApp bot that qualifies leads, schedules viewings, and sends property matches automatically.',
    tech: ['Node.js', 'WhatsApp Business API', 'OpenAI', 'Airtable'],
    screens: [
      { label: 'Lead Capture Chat', bg: 'from-blue-950 to-slate-950', accent: '#3b82f6', layout: 'whatsapp' },
      { label: 'Property Listings', bg: 'from-slate-950 to-blue-950', accent: '#2563eb', layout: 'listings' },
      { label: 'CRM Dashboard', bg: 'from-blue-900 to-slate-900', accent: '#3b82f6', layout: 'crm' },
      { label: 'Viewing Scheduler', bg: 'from-slate-900 to-blue-900', accent: '#93c5fd', layout: 'calendar' },
    ],
  },
  {
    id: 8,
    title: 'PulseDesk',
    category: 'Full Stack',
    tag: 'Full Stack',
    year: '2025',
    color: 'from-emerald-950 to-teal-900',
    accent: '#10b981',
    image: dashboardUI,
    desc: 'SaaS analytics dashboard with real-time data visualization, team management, and custom reporting.',
    tech: ['React', 'D3.js', 'FastAPI', 'TimescaleDB'],
    screens: [
      { label: 'Overview', bg: 'from-emerald-950 to-teal-950', accent: '#10b981', layout: 'dashboard' },
      { label: 'Live Charts', bg: 'from-teal-950 to-emerald-950', accent: '#059669', layout: 'analytics' },
      { label: 'Team Management', bg: 'from-emerald-900 to-teal-900', accent: '#10b981', layout: 'settings' },
    ],
  },
  {
    id: 9,
    title: 'SummarizeX',
    category: 'AI Tools',
    tag: 'AI Tools',
    year: '2025',
    color: 'from-zinc-800 to-slate-900',
    accent: '#f59e0b',
    image: novus,
    desc: 'Browser extension and web app that summarizes any page or document instantly using AI.',
    tech: ['Chrome Extension', 'React', 'OpenAI', 'Supabase'],
    screens: [
      { label: 'Extension Popup', bg: 'from-zinc-800 to-slate-900', accent: '#f59e0b', layout: 'extension' },
      { label: 'Web Dashboard', bg: 'from-slate-900 to-zinc-800', accent: '#d97706', layout: 'dashboard' },
      { label: 'Document View', bg: 'from-zinc-900 to-slate-800', accent: '#f59e0b', layout: 'document' },
    ],
  },
  {
    id: 10,
    title: 'MailCraft Pro',
    category: 'AI Tools',
    tag: 'AI Tools',
    year: '2025',
    color: 'from-stone-900 to-zinc-900',
    accent: '#8b5cf6',
    image: lumen,
    desc: 'AI email generator that creates personalized cold outreach, newsletters, and follow-ups.',
    tech: ['Next.js', 'OpenAI', 'SendGrid', 'MongoDB'],
    screens: [
      { label: 'Compose', bg: 'from-stone-900 to-violet-950', accent: '#8b5cf6', layout: 'compose' },
      { label: 'Templates', bg: 'from-violet-950 to-stone-900', accent: '#7c3aed', layout: 'templates' },
      { label: 'Campaign Stats', bg: 'from-stone-950 to-violet-900', accent: '#8b5cf6', layout: 'analytics' },
    ],
  },
  {
    id: 11,
    title: 'LearnForge',
    category: 'UI Design',
    tag: 'UI Design',
    year: '2025',
    color: 'from-indigo-950 to-blue-900',
    accent: '#6366f1',
    image: elearning,
    desc: 'Modern e-learning platform with course builder, live sessions, and progress tracking.',
    tech: ['Next.js', 'WebRTC', 'Stripe', 'PostgreSQL'],
    screens: [
      { label: 'Course Catalog', bg: 'from-indigo-950 to-blue-950', accent: '#6366f1', layout: 'catalog' },
      { label: 'Lesson Player', bg: 'from-blue-950 to-indigo-950', accent: '#4f46e5', layout: 'player' },
      { label: 'Student Profile', bg: 'from-indigo-900 to-blue-900', accent: '#6366f1', layout: 'profile' },
      { label: 'Live Session', bg: 'from-blue-900 to-indigo-900', accent: '#a5b4fc', layout: 'live' },
    ],
  },
  {
    id: 12,
    title: 'FitTrack 360',
    category: 'UI Design',
    tag: 'UI Design',
    year: '2025',
    color: 'from-lime-950 to-green-900',
    accent: '#84cc16',
    image: fittrack,
    desc: 'Fitness tracking mobile-first app with workout plans, nutrition logs, and AI coaching.',
    tech: ['React Native', 'Expo', 'Node.js', 'OpenAI'],
    screens: [
      { label: 'Home Feed', bg: 'from-lime-950 to-green-950', accent: '#84cc16', layout: 'mobileFeed' },
      { label: 'Workout Tracker', bg: 'from-green-950 to-lime-950', accent: '#65a30d', layout: 'workout' },
      { label: 'Nutrition Log', bg: 'from-lime-900 to-green-900', accent: '#84cc16', layout: 'nutrition' },
      { label: 'Progress Charts', bg: 'from-green-900 to-lime-900', accent: '#bef264', layout: 'analytics' },
    ],
  },
]

const filters = ['All', 'Full Stack', 'E-Commerce', 'AI Tools', 'AI Integration', 'UI Design']

// ─────────────────────────────────────────────────────────────────────────────
//  SCREEN RENDERER  — draws a mock UI inside the modal
// ─────────────────────────────────────────────────────────────────────────────
function MockScreen({ screen, projectTitle, accent }) {
  const a = accent || screen.accent || '#f97316'

  const Sidebar = () => (
    <div className="w-14 md:w-48 h-full flex flex-col gap-1 p-2 md:p-3 border-r border-white/10 flex-shrink-0">
      <div className="h-7 rounded-lg mb-4" style={{ background: `${a}22` }}>
        <div className="h-full rounded-lg px-2 flex items-center gap-2">
          <div className="w-4 h-4 rounded-full flex-shrink-0" style={{ background: a }} />
          <div className="hidden md:block h-2 w-16 rounded-full bg-white/30" />
        </div>
      </div>
      {[...Array(6)].map((_, i) => (
        <div key={i} className={`h-8 rounded-lg flex items-center gap-2 px-2 ${i === 1 ? 'opacity-100' : 'opacity-40'}`}
          style={{ background: i === 1 ? `${a}33` : 'transparent', border: i === 1 ? `1px solid ${a}55` : 'none' }}>
          <div className="w-3 h-3 rounded flex-shrink-0 bg-white/50" />
          <div className="hidden md:block h-2 rounded-full bg-white/30" style={{ width: `${50 + i * 10}%` }} />
        </div>
      ))}
    </div>
  )

  const StatCard = ({ w = 'full', value, label, accent: ac }) => (
    <div className={`w-${w} rounded-xl p-3 border border-white/10`} style={{ background: `${ac}15` }}>
      <div className="text-lg md:text-2xl font-black" style={{ color: ac }}>{value}</div>
      <div className="text-white/50 text-xs mt-1">{label}</div>
    </div>
  )

  const layouts = {
    dashboard: (
      <div className="flex h-full">
        <Sidebar />
        <div className="flex-1 p-3 md:p-4 flex flex-col gap-3 overflow-hidden">
          <div className="h-7 flex items-center gap-2">
            <div className="h-5 w-32 rounded bg-white/20" />
            <div className="ml-auto flex gap-2">
              <div className="h-7 w-16 rounded-lg border border-white/20" />
              <div className="h-7 w-20 rounded-lg" style={{ background: `${a}33` }} />
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {[['2.4K','Queries'],['98%','Uptime'],['1.2s','Avg Response'],['$1.2K','Revenue']].map(([v,l],i)=>(
              <StatCard key={i} value={v} label={l} accent={a} />
            ))}
          </div>
          <div className="flex-1 rounded-xl border border-white/10 p-3" style={{ background: `${a}08` }}>
            <div className="h-3 w-24 rounded bg-white/20 mb-3" />
            <div className="h-full flex items-end gap-1 pb-2">
              {[40,65,45,80,55,90,70,85,60,95,75,88].map((h,i)=>(
                <div key={i} className="flex-1 rounded-t-sm" style={{ height: `${h}%`, background: `${a}${i===11?'ff':'55'}` }} />
              ))}
            </div>
          </div>
        </div>
      </div>
    ),

    chat: (
      <div className="flex h-full">
        <Sidebar />
        <div className="flex-1 flex flex-col p-3 gap-2 overflow-hidden">
          <div className="flex-1 flex flex-col gap-3 overflow-hidden">
            {[
              { role: 'user', text: 'Show me the Q3 performance summary' },
              { role: 'ai', text: 'Here\'s your Q3 overview — revenue up 34%, 2,400 queries processed, 98.2% uptime. Top performing segment: E-commerce integrations.' },
              { role: 'user', text: 'Generate a detailed report' },
            ].map((m, i) => (
              <div key={i} className={`flex gap-2 ${m.role === 'user' ? 'justify-end' : ''}`}>
                {m.role === 'ai' && <div className="w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-black" style={{ background: `${a}33`, color: a }}>AI</div>}
                <div className="max-w-[75%] rounded-2xl px-3 py-2 text-xs leading-relaxed" style={{ background: m.role === 'ai' ? `${a}18` : 'rgba(255,255,255,0.1)', border: `1px solid ${m.role === 'ai' ? `${a}33` : 'rgba(255,255,255,0.1)'}` }}>
                  {m.text}
                </div>
              </div>
            ))}
          </div>
          <div className="h-10 rounded-xl border border-white/20 flex items-center px-3 gap-2" style={{ background: 'rgba(255,255,255,0.05)' }}>
            <div className="flex-1 h-2 rounded bg-white/20" />
            <div className="w-6 h-6 rounded-lg flex items-center justify-center" style={{ background: a }}>
              <div className="w-0 h-0 border-t-4 border-b-4 border-l-6 border-transparent" style={{ borderLeftColor: '#000' }} />
            </div>
          </div>
        </div>
      </div>
    ),

    analytics: (
      <div className="flex h-full">
        <Sidebar />
        <div className="flex-1 p-3 flex flex-col gap-3 overflow-hidden">
          <div className="grid grid-cols-3 gap-2">
            {[['↑ 34%','Growth'],['2.4K','Users'],['$8.9K','MRR']].map(([v,l],i)=>(
              <StatCard key={i} value={v} label={l} accent={a} />
            ))}
          </div>
          <div className="flex-1 rounded-xl border border-white/10 p-3 flex flex-col" style={{ background: `${a}08` }}>
            <div className="h-3 w-20 rounded bg-white/20 mb-3" />
            <div className="flex-1 flex gap-2">
              <div className="flex-1 flex flex-col gap-2">
                {[80,60,90,45,70].map((w,i)=>(
                  <div key={i} className="h-5 rounded" style={{ width: `${w}%`, background: `${a}${i===2?'cc':'44'}` }} />
                ))}
              </div>
              <div className="w-24 rounded-lg border border-white/10 p-2 flex flex-col gap-1">
                {[['Mon','32'],['Tue','47'],['Wed','61'],['Thu','29'],['Fri','55']].map(([d,v],i)=>(
                  <div key={i} className="flex justify-between text-xs">
                    <span className="text-white/40">{d}</span>
                    <span style={{ color: a }}>{v}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    ),

    settings: (
      <div className="flex h-full">
        <Sidebar />
        <div className="flex-1 p-3 flex flex-col gap-3 overflow-hidden">
          {['Profile Settings','Notifications','API Keys','Billing','Team Members'].map((s,i)=>(
            <div key={i} className="flex items-center gap-3 p-3 rounded-xl border border-white/10 hover:border-white/20 transition-all" style={{ background: i===0 ? `${a}15` : 'rgba(255,255,255,0.03)' }}>
              <div className="w-8 h-8 rounded-lg flex-shrink-0" style={{ background: i===0 ? `${a}33` : 'rgba(255,255,255,0.1)' }} />
              <div className="flex-1">
                <div className="h-2.5 w-24 rounded bg-white/30 mb-1" />
                <div className="h-2 w-32 rounded bg-white/15" />
              </div>
              <div className="w-8 h-5 rounded-full" style={{ background: i===0 ? a : 'rgba(255,255,255,0.15)' }} />
            </div>
          ))}
        </div>
      </div>
    ),

    whatsapp: (
      <div className="flex h-full items-center justify-center gap-4 p-4 overflow-hidden">
        <div className="w-52 md:w-64 h-full max-h-96 rounded-3xl border-2 border-white/20 overflow-hidden flex flex-col" style={{ background: '#0d1117' }}>
          <div className="h-12 flex items-center gap-2 px-3 border-b border-white/10" style={{ background: `${a}22` }}>
            <div className="w-8 h-8 rounded-full" style={{ background: `${a}66` }} />
            <div>
              <div className="h-2 w-20 rounded bg-white/50 mb-1" />
              <div className="h-1.5 w-12 rounded" style={{ background: `${a}99` }} />
            </div>
          </div>
          <div className="flex-1 p-2 flex flex-col gap-2 overflow-hidden">
            {[
              { from: 'user', t: 'Hi! I\'d like to book a haircut' },
              { from: 'bot', t: 'Great! I can help. Pick a date 📅' },
              { from: 'user', t: 'Tomorrow at 3pm?' },
              { from: 'bot', t: '✅ Confirmed for tomorrow 3 PM. See you!' },
            ].map((m,i)=>(
              <div key={i} className={`flex ${m.from==='user'?'justify-end':''}`}>
                <div className="max-w-[80%] px-2.5 py-1.5 rounded-2xl text-xs" style={{ background: m.from==='bot' ? `${a}25` : 'rgba(255,255,255,0.12)', border: `1px solid ${m.from==='bot' ? `${a}44` : 'rgba(255,255,255,0.1)'}` }}>
                  {m.t}
                </div>
              </div>
            ))}
          </div>
          <div className="h-10 flex items-center gap-2 px-2 border-t border-white/10">
            <div className="flex-1 h-7 rounded-full bg-white/10" />
            <div className="w-7 h-7 rounded-full flex items-center justify-center" style={{ background: a }}>
              <svg className="w-3.5 h-3.5 text-black" fill="currentColor" viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-2">
          {[['Bookings Today','24'],['Avg Response','1.2s'],['Resolved','98%']].map(([l,v],i)=>(
            <div key={i} className="rounded-xl p-3 border border-white/10" style={{ background: `${a}15` }}>
              <div className="text-xl font-black" style={{ color: a }}>{v}</div>
              <div className="text-white/40 text-xs">{l}</div>
            </div>
          ))}
        </div>
      </div>
    ),

    calendar: (
      <div className="flex h-full p-3 gap-3 overflow-hidden">
        <div className="flex-1 rounded-xl border border-white/10 p-3" style={{ background: `${a}08` }}>
          <div className="grid grid-cols-7 gap-1 mb-2">
            {['S','M','T','W','T','F','S'].map((d,i)=>(
              <div key={i} className="text-center text-xs text-white/30 font-bold">{d}</div>
            ))}
            {[...Array(31)].map((_,i)=>(
              <div key={i} className={`text-center text-xs py-1 rounded-lg ${i+1===15?'font-black text-black':'text-white/60'}`}
                style={{ background: i+1===15 ? a : i%7===0||i%7===6 ? 'transparent' : `${a}${i+1===8||i+1===12||i+1===22?'33':'0a'}` }}>
                {i+1}
              </div>
            ))}
          </div>
        </div>
        <div className="w-36 flex flex-col gap-2">
          <div className="text-xs font-bold text-white/50 uppercase tracking-wider">Today's Slots</div>
          {['10:00 AM','11:30 AM','2:00 PM','3:30 PM','5:00 PM'].map((t,i)=>(
            <div key={i} className="flex items-center gap-2 p-2 rounded-lg border border-white/10" style={{ background: i===2||i===3 ? `${a}22` : 'rgba(255,255,255,0.04)' }}>
              <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: i===2||i===3 ? a : 'rgba(255,255,255,0.2)' }} />
              <span className="text-xs" style={{ color: i===2||i===3 ? a : 'rgba(255,255,255,0.5)' }}>{t}</span>
            </div>
          ))}
        </div>
      </div>
    ),

    listings: (
      <div className="flex h-full p-3 gap-3 overflow-hidden">
        <div className="w-40 flex flex-col gap-2">
          <div className="h-7 rounded-lg border border-white/20 px-2 flex items-center">
            <div className="h-2 w-full rounded bg-white/20" />
          </div>
          {['Location','Price Range','Bedrooms','Type'].map((f,i)=>(
            <div key={i} className="rounded-lg border border-white/10 p-2">
              <div className="text-xs text-white/40 mb-1">{f}</div>
              <div className="h-6 rounded-md bg-white/10" />
            </div>
          ))}
        </div>
        <div className="flex-1 grid grid-cols-2 gap-2 overflow-hidden">
          {[...Array(4)].map((_,i)=>(
            <div key={i} className="rounded-xl overflow-hidden border border-white/10" style={{ background: `${a}12` }}>
              <div className="h-20 rounded-t-xl" style={{ background: `${a}${i===0?'44':'22'}` }} />
              <div className="p-2">
                <div className="h-2.5 w-20 rounded bg-white/30 mb-1" />
                <div className="h-2 w-14 rounded bg-white/20 mb-2" />
                <div className="text-xs font-black" style={{ color: a }}>${ (450 + i*125) }K</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),

    crm: (
      <div className="flex h-full">
        <Sidebar />
        <div className="flex-1 p-3 flex flex-col gap-2 overflow-hidden">
          <div className="flex gap-2 mb-1">
            {[['Hot Leads','12'],['Follow Up','8'],['Viewing','5'],['Closed','3']].map(([l,v],i)=>(
              <div key={i} className="flex-1 rounded-xl p-2 border border-white/10" style={{ background: `${a}${i===0?'22':'0f'}` }}>
                <div className="text-base font-black" style={{ color: i===0?a:'white' }}>{v}</div>
                <div className="text-xs text-white/40">{l}</div>
              </div>
            ))}
          </div>
          {[['Sarah K.','2BR Apt — Downtown','Hot'],['James R.','Villa — Suburbs','Follow Up'],['Maria L.','Studio — City Center','Viewing'],['Tom H.','3BR House','Closed']].map(([name,prop,status],i)=>(
            <div key={i} className="flex items-center gap-3 p-2.5 rounded-xl border border-white/10" style={{ background: 'rgba(255,255,255,0.03)' }}>
              <div className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-black" style={{ background: `${a}33`, color: a }}>{name[0]}</div>
              <div className="flex-1 min-w-0">
                <div className="text-xs font-bold text-white/80 truncate">{name}</div>
                <div className="text-xs text-white/40 truncate">{prop}</div>
              </div>
              <span className="text-xs px-2 py-0.5 rounded-full flex-shrink-0" style={{ background: `${a}22`, color: a, border: `1px solid ${a}44` }}>{status}</span>
            </div>
          ))}
        </div>
      </div>
    ),

    restaurantHome: (
      <div className="flex flex-col h-full overflow-hidden">
        <div className="flex-1 relative flex items-center justify-center" style={{ background: `linear-gradient(135deg, ${a}22 0%, transparent 100%)` }}>
          <div className="text-center px-6">
            <div className="text-xs tracking-[0.4em] uppercase text-white/40 mb-2">Est. 2019 — Fine Dining</div>
            <div className="text-3xl md:text-5xl font-black mb-3" style={{ fontStyle: 'italic' }}>Saveur</div>
            <div className="text-white/50 text-sm mb-4">Where every plate tells a story</div>
            <div className="flex gap-2 justify-center">
              <div className="px-4 py-2 rounded-full text-xs font-bold" style={{ background: a, color: '#000' }}>Reserve a Table</div>
              <div className="px-4 py-2 rounded-full text-xs font-bold border border-white/30 text-white/70">View Menu</div>
            </div>
          </div>
          <div className="absolute top-3 left-0 right-0 flex justify-between px-4">
            <div className="text-xs font-black tracking-widest uppercase" style={{ color: a }}>S A V E U R</div>
            <div className="flex gap-4">
              {['Menu','Story','Reserve'].map(l=><div key={l} className="text-xs text-white/40 hover:text-white cursor-pointer">{l}</div>)}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 border-t border-white/10">
          {[['🥩','Mains','24 dishes'],['🍷','Wine','60 labels'],['🎂','Desserts','12 options']].map(([ic,l,s],i)=>(
            <div key={i} className="p-3 text-center border-r last:border-r-0 border-white/10">
              <div className="text-lg mb-0.5">{ic}</div>
              <div className="text-xs font-bold text-white/70">{l}</div>
              <div className="text-xs text-white/30">{s}</div>
            </div>
          ))}
        </div>
      </div>
    ),

    menu: (
      <div className="flex h-full overflow-hidden">
        <div className="w-28 border-r border-white/10 flex flex-col p-2 gap-1">
          {['Starters','Mains','Seafood','Pasta','Desserts','Wine'].map((c,i)=>(
            <div key={i} className="px-2 py-2 rounded-lg text-xs cursor-pointer" style={{ background: i===1 ? `${a}33` : 'transparent', color: i===1 ? a : 'rgba(255,255,255,0.4)', border: i===1 ? `1px solid ${a}55` : 'none' }}>{c}</div>
          ))}
        </div>
        <div className="flex-1 p-3 flex flex-col gap-2 overflow-hidden">
          {[['Pan-seared Duck Breast','Blackberry jus, roasted beets, wild herbs','$38'],['Wagyu Ribeye 200g','Truffle butter, bone marrow, seasonal veg','$72'],['Black Cod Miso','Bok choy, daikon, pickled ginger','$45'],['Lamb Rack','Herb crust, pomme purée, jus naturel','$58']].map(([name,desc,price],i)=>(
            <div key={i} className="flex items-start gap-3 p-2.5 rounded-xl border border-white/10" style={{ background: i===0 ? `${a}12` : 'rgba(255,255,255,0.03)' }}>
              <div className="w-14 h-14 rounded-lg flex-shrink-0" style={{ background: `${a}${i===0?'44':'22'}` }} />
              <div className="flex-1 min-w-0">
                <div className="text-sm font-bold text-white/90 truncate">{name}</div>
                <div className="text-xs text-white/40 mt-0.5 line-clamp-1">{desc}</div>
              </div>
              <div className="text-sm font-black flex-shrink-0" style={{ color: a }}>{price}</div>
            </div>
          ))}
        </div>
      </div>
    ),

    booking: (
      <div className="flex h-full items-center justify-center p-4">
        <div className="w-full max-w-xs rounded-2xl border border-white/15 p-5 flex flex-col gap-3" style={{ background: 'rgba(255,255,255,0.04)' }}>
          <div className="text-sm font-black text-white/80">Reserve Your Table</div>
          {['Date & Time','Party Size','Full Name','Phone Number'].map((pl,i)=>(
            <div key={i} className="flex flex-col gap-1">
              <div className="text-xs text-white/40">{pl}</div>
              <div className="h-9 rounded-xl border border-white/15 px-3 flex items-center" style={{ background: i===0 ? `${a}15` : 'rgba(255,255,255,0.04)', borderColor: i===0 ? `${a}55` : 'rgba(255,255,255,0.15)' }}>
                {i===0 && <span className="text-xs" style={{ color: a }}>Saturday, Jun 14 — 7:30 PM</span>}
              </div>
            </div>
          ))}
          <div className="h-10 rounded-xl flex items-center justify-center text-sm font-black" style={{ background: a, color: '#000' }}>Confirm Reservation</div>
        </div>
      </div>
    ),

    about: (
      <div className="flex h-full p-3 gap-3 overflow-hidden">
        <div className="flex-1 flex flex-col gap-3">
          <div className="rounded-2xl overflow-hidden h-32" style={{ background: `${a}22` }}>
            <div className="h-full flex items-end p-4">
              <div>
                <div className="text-xs text-white/40 mb-1">Head Chef</div>
                <div className="font-black text-white text-base">Marco Beaumont</div>
                <div className="text-xs" style={{ color: a }}>15 years · 3 Michelin Stars</div>
              </div>
            </div>
          </div>
          <div className="flex-1 rounded-xl border border-white/10 p-3" style={{ background: 'rgba(255,255,255,0.03)' }}>
            <div className="space-y-1.5">
              {[...Array(5)].map((_,i)=>(
                <div key={i} className="h-2 rounded-full" style={{ width: `${85-i*12}%`, background: `${a}${30-i*5}` }} />
              ))}
            </div>
          </div>
        </div>
        <div className="w-36 flex flex-col gap-2">
          {['Sous Chef','Pastry Chef','Sommelier'].map((r,i)=>(
            <div key={i} className="rounded-xl p-2.5 border border-white/10" style={{ background: `${a}10` }}>
              <div className="w-10 h-10 rounded-full mb-2" style={{ background: `${a}33` }} />
              <div className="text-xs font-bold text-white/70">{r}</div>
              <div className="text-xs text-white/30 mt-0.5">{8-i*2}+ yrs exp</div>
            </div>
          ))}
        </div>
      </div>
    ),

    landing: (
      <div className="h-full flex flex-col overflow-hidden">
        <div className="flex-1 flex items-center justify-center px-6 text-center" style={{ background: `linear-gradient(180deg, ${a}15 0%, transparent 100%)` }}>
          <div>
            <div className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: a }}>Retreat & Wellness</div>
            <div className="text-3xl font-black text-white mb-2">Find Your Balance</div>
            <div className="text-white/40 text-sm max-w-xs mx-auto mb-5">Curated wellness retreats designed around your intentions.</div>
            <div className="h-9 w-32 mx-auto rounded-full flex items-center justify-center text-xs font-bold" style={{ background: a, color: '#000' }}>Explore Retreats</div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2 p-3 border-t border-white/10">
          {['Bali','Tuscany','Maldives'].map((l,i)=>(
            <div key={i} className="rounded-xl p-2.5 border border-white/10 text-center" style={{ background: `${a}10` }}>
              <div className="w-8 h-8 rounded-lg mx-auto mb-1.5" style={{ background: `${a}33` }} />
              <div className="text-xs font-bold text-white/70">{l}</div>
            </div>
          ))}
        </div>
      </div>
    ),

    product: (
      <div className="flex h-full p-3 gap-3 overflow-hidden">
        <div className="flex-1 rounded-2xl" style={{ background: `${a}15` }} />
        <div className="w-44 flex flex-col gap-3">
          <div className="text-base font-black text-white">Tuscany 7-Day</div>
          <div className="text-2xl font-black" style={{ color: a }}>$2,400</div>
          <div className="space-y-1.5">
            {['Private villa accommodation','Daily yoga & meditation','Organic farm meals','Vineyard visits'].map((f,i)=>(
              <div key={i} className="flex items-center gap-2 text-xs text-white/60">
                <div className="w-4 h-4 rounded-full flex-shrink-0 flex items-center justify-center text-xs" style={{ background: `${a}33`, color: a }}>✓</div>{f}
              </div>
            ))}
          </div>
          <div className="h-9 rounded-xl flex items-center justify-center text-xs font-bold" style={{ background: a, color: '#000' }}>Book This Retreat</div>
        </div>
      </div>
    ),

    brand: (
      <div className="h-full flex flex-col items-center justify-center gap-4 p-4">
        <div className="flex gap-3">
          {[a, `${a}88`, `${a}44`, '#ffffff33'].map((c,i)=>(
            <div key={i} className="w-12 h-12 rounded-xl" style={{ background: c }} />
          ))}
        </div>
        <div className="text-4xl font-black italic" style={{ color: a }}>Lumen</div>
        <div className="flex gap-2">
          {['Serif','Sans','Mono'].map((f,i)=>(
            <div key={i} className="px-3 py-1.5 rounded-lg text-xs border border-white/20" style={{ background: i===0 ? `${a}22` : 'transparent', color: i===0 ? a : 'rgba(255,255,255,0.4)' }}>{f}</div>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-2 w-full">
          {['Business Card','Letterhead','Social Kit'].map((i,idx)=>(
            <div key={idx} className="rounded-xl border border-white/10 p-2 text-center" style={{ background: 'rgba(255,255,255,0.03)' }}>
              <div className="h-12 rounded-lg mb-2" style={{ background: `${a}15` }} />
              <div className="text-xs text-white/40">{i}</div>
            </div>
          ))}
        </div>
      </div>
    ),

    storefront: (
      <div className="flex flex-col h-full overflow-hidden">
        <div className="flex items-center gap-2 p-2.5 border-b border-white/10">
          <div className="text-xs font-black" style={{ color: a }}>DELTA</div>
          <div className="flex-1 h-7 rounded-lg bg-white/10 mx-2" />
          <div className="w-6 h-6 rounded-lg" style={{ background: `${a}33` }} />
        </div>
        <div className="flex-1 p-2.5 grid grid-cols-3 gap-2 overflow-hidden">
          {[...Array(6)].map((_,i)=>(
            <div key={i} className="rounded-xl overflow-hidden border border-white/10">
              <div className="h-16" style={{ background: `${a}${i===0?'44':i===1?'33':i===2?'22':'18'}` }} />
              <div className="p-1.5">
                <div className="h-2 w-12 rounded bg-white/30 mb-1" />
                <div className="h-2 w-8 rounded" style={{ background: `${a}88` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    ),

    checkout: (
      <div className="flex h-full p-3 gap-3 overflow-hidden">
        <div className="flex-1 flex flex-col gap-2">
          <div className="text-xs font-bold text-white/50 uppercase tracking-wider mb-1">Order Summary</div>
          {[['Product A','$49'],['Product B','$29'],['Shipping','Free']].map(([n,p],i)=>(
            <div key={i} className="flex items-center gap-2 p-2 rounded-lg border border-white/10">
              <div className="w-8 h-8 rounded-lg flex-shrink-0" style={{ background: `${a}22` }} />
              <div className="flex-1 h-2 rounded bg-white/20" />
              <div className="text-xs font-bold" style={{ color: a }}>{p}</div>
            </div>
          ))}
          <div className="flex justify-between px-2 pt-2 border-t border-white/10">
            <span className="text-xs text-white/50">Total</span>
            <span className="text-sm font-black" style={{ color: a }}>$78.00</span>
          </div>
        </div>
        <div className="w-40 flex flex-col gap-2">
          <div className="text-xs font-bold text-white/50 uppercase tracking-wider mb-1">Payment</div>
          {['Card Number','Expiry','CVV','Name'].map((f,i)=>(
            <div key={i} className="h-8 rounded-lg border border-white/15 px-2 flex items-center" style={{ background: 'rgba(255,255,255,0.04)' }}>
              <div className="h-2 w-full rounded bg-white/20" />
            </div>
          ))}
          <div className="h-9 rounded-xl flex items-center justify-center text-xs font-bold" style={{ background: a, color: '#000' }}>Pay Now</div>
        </div>
      </div>
    ),

    tracking: (
      <div className="flex h-full items-center justify-center p-4">
        <div className="w-full max-w-xs">
          <div className="text-xs text-white/40 mb-1">Order #DT-2024-0847</div>
          <div className="text-sm font-black text-white mb-4">Estimated: Jun 18</div>
          <div className="relative">
            <div className="absolute left-3 top-0 bottom-0 w-px" style={{ background: `${a}44` }} />
            {[['Ordered','Jun 14','done'],['Processing','Jun 15','done'],['Shipped','Jun 16','active'],['Out for Delivery','Jun 18','pending'],['Delivered','Jun 18','pending']].map(([s,d,st],i)=>(
              <div key={i} className="flex items-start gap-3 mb-4 relative">
                <div className={`w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center text-xs z-10`}
                  style={{ background: st==='done' ? a : st==='active' ? `${a}55` : 'rgba(255,255,255,0.1)', border: `2px solid ${st==='pending' ? 'rgba(255,255,255,0.2)' : a}` }}>
                  {st==='done' ? '✓' : ''}
                </div>
                <div>
                  <div className="text-xs font-bold" style={{ color: st==='active' ? a : st==='done' ? 'rgba(255,255,255,0.7)' : 'rgba(255,255,255,0.3)' }}>{s}</div>
                  <div className="text-xs text-white/30">{d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),

    compose: (
      <div className="flex h-full p-3 gap-3 overflow-hidden">
        <div className="flex-1 flex flex-col gap-2">
          {['To:','Subject:',''].map((l,i)=>(
            <div key={i} className={`${i===2?'flex-1':'h-9'} rounded-xl border border-white/15 px-3 flex items-${i===2?'start pt-2':''} gap-2`} style={{ background: 'rgba(255,255,255,0.04)' }}>
              {l && <span className="text-xs text-white/30 pt-2.5">{l}</span>}
              <div className={`${i===2?'flex-1':''} h-2 ${i===2?'mt-0.5':''} w-full rounded bg-white/15`} />
            </div>
          ))}
          <div className="flex gap-2">
            <div className="h-8 rounded-xl flex-1 flex items-center justify-center text-xs font-bold border border-white/20 text-white/50">Save Draft</div>
            <div className="h-8 rounded-xl flex-1 flex items-center justify-center text-xs font-bold" style={{ background: a, color: '#000' }}>✨ AI Generate</div>
          </div>
        </div>
        <div className="w-36 flex flex-col gap-2">
          <div className="text-xs text-white/40 font-bold uppercase tracking-wider">AI Tone</div>
          {['Professional','Friendly','Urgent','Casual'].map((t,i)=>(
            <div key={i} className="px-3 py-2 rounded-lg text-xs border cursor-pointer" style={{ background: i===0 ? `${a}22` : 'transparent', borderColor: i===0 ? `${a}55` : 'rgba(255,255,255,0.1)', color: i===0 ? a : 'rgba(255,255,255,0.4)' }}>{t}</div>
          ))}
        </div>
      </div>
    ),

    templates: (
      <div className="flex h-full">
        <Sidebar />
        <div className="flex-1 p-3 grid grid-cols-2 gap-2 overflow-hidden">
          {['Cold Outreach','Follow-Up','Newsletter','Re-engagement','Welcome','Proposal'].map((t,i)=>(
            <div key={i} className="rounded-xl p-3 border border-white/10 cursor-pointer" style={{ background: i===0 ? `${a}15` : 'rgba(255,255,255,0.03)', borderColor: i===0 ? `${a}44` : 'rgba(255,255,255,0.1)' }}>
              <div className="w-7 h-7 rounded-lg mb-2" style={{ background: `${a}${i===0?'44':'22'}` }} />
              <div className="text-xs font-bold text-white/70">{t}</div>
              <div className="h-1.5 w-10 rounded bg-white/20 mt-1.5" />
            </div>
          ))}
        </div>
      </div>
    ),

    extension: (
      <div className="flex h-full items-center justify-center p-4">
        <div className="w-56 rounded-2xl border border-white/20 overflow-hidden" style={{ background: '#111' }}>
          <div className="h-10 flex items-center px-3 gap-2 border-b border-white/10" style={{ background: `${a}15` }}>
            <div className="w-5 h-5 rounded-md" style={{ background: a }} />
            <div className="text-xs font-black" style={{ color: a }}>SummarizeX</div>
            <div className="ml-auto w-5 h-5 rounded bg-white/10" />
          </div>
          <div className="p-3 space-y-2">
            <div className="h-8 rounded-lg border border-white/15 flex items-center px-2 gap-1">
              <div className="w-3 h-3 rounded-full" style={{ background: `${a}66` }} />
              <div className="h-2 flex-1 rounded bg-white/20" />
            </div>
            <div className="h-24 rounded-lg border border-white/10 p-2" style={{ background: `${a}08` }}>
              {[...Array(4)].map((_,i)=>(
                <div key={i} className="h-2 rounded-full mb-1.5" style={{ width: `${90-i*15}%`, background: `${a}${40-i*8}` }} />
              ))}
            </div>
            <div className="flex gap-1.5">
              <div className="flex-1 h-7 rounded-lg text-xs flex items-center justify-center border border-white/20 text-white/50">Copy</div>
              <div className="flex-1 h-7 rounded-lg text-xs flex items-center justify-center font-bold" style={{ background: a, color: '#000' }}>Save</div>
            </div>
          </div>
        </div>
      </div>
    ),

    document: (
      <div className="flex h-full p-3 gap-3 overflow-hidden">
        <div className="flex-1 rounded-xl border border-white/10 p-4 flex flex-col gap-2" style={{ background: 'rgba(255,255,255,0.03)' }}>
          <div className="h-3 w-3/4 rounded bg-white/30" />
          <div className="h-2 w-full rounded bg-white/15" />
          <div className="h-2 w-5/6 rounded bg-white/15" />
          <div className="h-2 w-4/5 rounded bg-white/15" />
          <div className="border-t border-white/10 my-1" />
          <div className="h-2 w-full rounded bg-white/10" />
          <div className="h-2 w-3/4 rounded bg-white/10" />
        </div>
        <div className="w-40 flex flex-col gap-2">
          <div className="text-xs text-white/40 font-bold uppercase tracking-wider">Summary</div>
          <div className="flex-1 rounded-xl border border-white/10 p-2.5" style={{ background: `${a}10` }}>
            {[...Array(5)].map((_,i)=>(
              <div key={i} className="h-2 rounded mb-2" style={{ width: `${70+i*6}%`, background: `${a}${50-i*8}` }} />
            ))}
          </div>
          <div className="text-xs text-white/40 font-bold uppercase tracking-wider">Key Points</div>
          {['Main argument','Supporting data','Conclusion'].map((k,i)=>(
            <div key={i} className="text-xs px-2 py-1.5 rounded-lg border border-white/10 text-white/50">{k}</div>
          ))}
        </div>
      </div>
    ),

    catalog: (
      <div className="flex h-full overflow-hidden">
        <div className="w-28 border-r border-white/10 p-2 flex flex-col gap-1">
          {['Development','Design','Business','Marketing','Data Science'].map((c,i)=>(
            <div key={i} className="px-2 py-1.5 rounded-lg text-xs" style={{ background: i===0 ? `${a}33` : 'transparent', color: i===0 ? a : 'rgba(255,255,255,0.4)' }}>{c}</div>
          ))}
        </div>
        <div className="flex-1 p-2.5 grid grid-cols-2 gap-2 overflow-hidden">
          {[['React Mastery','42 lessons','⭐ 4.9'],['UX Design Pro','38 lessons','⭐ 4.8'],['Python AI','51 lessons','⭐ 4.7'],['Brand Strategy','29 lessons','⭐ 4.9']].map(([t,l,r],i)=>(
            <div key={i} className="rounded-xl overflow-hidden border border-white/10">
              <div className="h-16 flex items-center justify-center text-2xl" style={{ background: `${a}${i===0?'33':i===1?'22':'18'}` }}></div>
              <div className="p-2">
                <div className="text-xs font-bold text-white/80 truncate">{t}</div>
                <div className="flex justify-between mt-1">
                  <span className="text-xs text-white/30">{l}</span>
                  <span className="text-xs" style={{ color: a }}>{r}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),

    player: (
      <div className="flex flex-col h-full overflow-hidden">
        <div className="flex-1 relative" style={{ background: '#000' }}>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ background: `${a}33`, border: `2px solid ${a}` }}>
              <div className="w-0 h-0 ml-1" style={{ borderTop: '10px solid transparent', borderBottom: '10px solid transparent', borderLeft: `14px solid ${a}` }} />
            </div>
          </div>
          <div className="absolute bottom-3 left-0 right-0 px-4">
            <div className="h-1.5 rounded-full bg-white/20 overflow-hidden">
              <div className="h-full w-1/3 rounded-full" style={{ background: a }} />
            </div>
            <div className="flex justify-between mt-1">
              <span className="text-xs text-white/40">14:22</span>
              <span className="text-xs text-white/40">42:07</span>
            </div>
          </div>
        </div>
        <div className="p-3 border-t border-white/10">
          <div className="text-xs font-bold text-white/80 mb-0.5">Lesson 7: Advanced Hooks</div>
          <div className="text-xs text-white/40">React Mastery — Module 3</div>
        </div>
      </div>
    ),

    profile: (
      <div className="flex h-full p-3 gap-3 overflow-hidden">
        <div className="w-36 flex flex-col items-center gap-2">
          <div className="w-16 h-16 rounded-full" style={{ background: `${a}55` }} />
          <div className="text-xs font-bold text-white/80">Alex Chen</div>
          <div className="w-full rounded-xl border border-white/10 p-2.5 text-center" style={{ background: `${a}12` }}>
            <div className="text-xl font-black" style={{ color: a }}>12</div>
            <div className="text-xs text-white/40">Courses</div>
          </div>
          <div className="w-full rounded-xl border border-white/10 p-2.5 text-center">
            <div className="text-xl font-black text-white/80">847</div>
            <div className="text-xs text-white/40">Hours</div>
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-2">
          <div className="text-xs text-white/40 font-bold uppercase tracking-wider">In Progress</div>
          {[['React Mastery','72%'],['Python AI','34%'],['UX Design','58%']].map(([c,p],i)=>(
            <div key={i} className="rounded-xl p-2.5 border border-white/10" style={{ background: 'rgba(255,255,255,0.03)' }}>
              <div className="flex justify-between mb-1.5">
                <span className="text-xs text-white/70">{c}</span>
                <span className="text-xs" style={{ color: a }}>{p}</span>
              </div>
              <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
                <div className="h-full rounded-full" style={{ width: p, background: a }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    ),

    live: (
      <div className="flex flex-col h-full overflow-hidden">
        <div className="flex-1 relative" style={{ background: '#000' }}>
          <div className="absolute top-2 left-2 px-2 py-0.5 rounded text-xs font-bold" style={{ background: '#ef4444' }}>● LIVE</div>
          <div className="absolute top-2 right-2 text-xs text-white/40">247 watching</div>
          <div className="absolute inset-0 flex items-end p-3">
            <div className="flex-1 text-xs font-black text-white/60">Session 4: Real-time Collaboration</div>
          </div>
        </div>
        <div className="h-24 border-t border-white/10 p-2 flex flex-col gap-1 overflow-hidden">
          <div className="text-xs text-white/30 font-bold uppercase tracking-wider mb-0.5">Live Chat</div>
          {[['Jordan','This is amazing!'],['Sara','Finally understand this 🎉'],['Mike','Can you repeat that?']].map(([n,m],i)=>(
            <div key={i} className="flex gap-1.5 text-xs">
              <span className="font-bold flex-shrink-0" style={{ color: a }}>{n}:</span>
              <span className="text-white/50 truncate">{m}</span>
            </div>
          ))}
        </div>
      </div>
    ),

    mobileFeed: (
      <div className="flex h-full items-center justify-center p-3">
        <div className="w-44 h-full max-h-96 rounded-3xl border-2 border-white/20 overflow-hidden flex flex-col" style={{ background: '#0a0a0a' }}>
          <div className="h-10 flex items-center px-3 gap-2 border-b border-white/10">
            <div className="text-xs font-black" style={{ color: a }}>FitTrack</div>
            <div className="ml-auto flex gap-1">
              {[...Array(3)].map((_,i)=>(
                <div key={i} className="w-5 h-5 rounded-lg" style={{ background: `${a}22` }} />
              ))}
            </div>
          </div>
          <div className="flex-1 p-2 flex flex-col gap-2 overflow-hidden">
            <div className="rounded-xl p-2.5 border border-white/10" style={{ background: `${a}18` }}>
              <div className="flex justify-between mb-1.5">
                <span className="text-xs text-white/60 font-bold">Today's Goal</span>
                <span className="text-xs font-black" style={{ color: a }}>73%</span>
              </div>
              <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
                <div className="h-full w-3/4 rounded-full" style={{ background: a }} />
              </div>
            </div>
            {[['🏃','Run','5.2 km'],['💧','Water','1.8 L'],['🔥','Cal','420']].map(([ic,l,v],i)=>(
              <div key={i} className="flex items-center gap-2 p-2 rounded-xl border border-white/10">
                <span className="text-sm">{ic}</span>
                <span className="text-xs text-white/50 flex-1">{l}</span>
                <span className="text-xs font-bold" style={{ color: a }}>{v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),

    workout: (
      <div className="flex h-full p-3 gap-3 overflow-hidden">
        <div className="flex-1 flex flex-col gap-2">
          <div className="h-9 rounded-xl flex items-center justify-center text-xs font-bold" style={{ background: `${a}22`, color: a, border: `1px solid ${a}44` }}>● Active — 00:24:13</div>
          {[['Bench Press','4 × 10','135 lbs'],['Squat','4 × 8','185 lbs'],['Pull-ups','3 × 12','Body'],['Deadlift','3 × 6','225 lbs']].map(([e,s,w],i)=>(
            <div key={i} className="flex items-center gap-2 p-2.5 rounded-xl border border-white/10" style={{ background: i===0 ? `${a}18` : 'rgba(255,255,255,0.03)', borderColor: i===0 ? `${a}44` : 'rgba(255,255,255,0.1)' }}>
              <div className="w-7 h-7 rounded-lg flex-shrink-0 flex items-center justify-center text-xs" style={{ background: `${a}33` }}>💪</div>
              <div className="flex-1">
                <div className="text-xs font-bold text-white/80">{e}</div>
                <div className="text-xs text-white/40">{s}</div>
              </div>
              <div className="text-xs font-black" style={{ color: a }}>{w}</div>
            </div>
          ))}
        </div>
      </div>
    ),

    nutrition: (
      <div className="flex h-full p-3 flex-col gap-3 overflow-hidden">
        <div className="grid grid-cols-4 gap-2">
          {[['Cal','1,840 / 2,200'],['Protein','142g'],['Carbs','187g'],['Fat','68g']].map(([l,v],i)=>(
            <div key={i} className="rounded-xl p-2 border border-white/10 text-center" style={{ background: i===0 ? `${a}18` : 'rgba(255,255,255,0.04)' }}>
              <div className="text-xs font-black" style={{ color: i===0 ? a : 'rgba(255,255,255,0.8)' }}>{v.split(' ')[0]}</div>
              <div className="text-xs text-white/30">{l}</div>
            </div>
          ))}
        </div>
        <div className="flex-1 flex flex-col gap-2 overflow-hidden">
          <div className="text-xs text-white/40 font-bold uppercase tracking-wider">Today's Meals</div>
          {[['Breakfast','7:30 AM','Oats + banana + protein shake'],['Lunch','12:45 PM','Chicken rice bowl'],['Snack','4:00 PM','Greek yogurt + almonds']].map(([m,t,d],i)=>(
            <div key={i} className="flex items-start gap-2 p-2.5 rounded-xl border border-white/10" style={{ background: 'rgba(255,255,255,0.03)' }}>
              <div className="w-8 h-8 rounded-lg flex-shrink-0 flex items-center justify-center text-sm" style={{ background: `${a}22` }}>🥗</div>
              <div>
                <div className="text-xs font-bold text-white/80">{m} <span className="text-white/30 font-normal">— {t}</span></div>
                <div className="text-xs text-white/40">{d}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  }

  const LayoutComponent = layouts[screen.layout] || layouts.dashboard

  return (
    <div className={`w-full h-full bg-gradient-to-br ${screen.bg} text-white text-sm select-none`}>
      {LayoutComponent}
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
//  PROJECT MODAL
// ─────────────────────────────────────────────────────────────────────────────
function ProjectModal({ project, onClose }) {
  const [activeScreen, setActiveScreen] = useState(0)
  const [animating, setAnimating] = useState(false)

  const switchScreen = useCallback((idx) => {
    if (idx === activeScreen) return
    setAnimating(true)
    setTimeout(() => {
      setActiveScreen(idx)
      setAnimating(false)
    }, 200)
  }, [activeScreen])

  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') switchScreen(Math.min(activeScreen + 1, project.screens.length - 1))
      if (e.key === 'ArrowLeft') switchScreen(Math.max(activeScreen - 1, 0))
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose, switchScreen, activeScreen, project.screens.length])

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  const screen = project.screens[activeScreen]

  return (
    <div
      className="fixed inset-0 z-50 flex items-end md:items-center justify-center p-0 md:p-6"
      style={{ background: 'rgba(0,0,0,0.92)', backdropFilter: 'blur(20px)' }}
      onClick={onClose}
    >
      <div
        className="relative w-full md:max-w-5xl md:rounded-3xl overflow-hidden flex flex-col"
        style={{
          background: '#0a0a0a',
          border: '1px solid rgba(255,255,255,0.1)',
          maxHeight: '95vh',
          minHeight: '80vh',
          boxShadow: `0 40px 120px ${project.accent}22`,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* ── TOP BAR ── */}
        <div className="flex items-center gap-4 px-5 py-4 border-b border-white/10 flex-shrink-0">
          <div>
            <h2 className="text-lg md:text-xl font-black">{project.title}</h2>
            <p className="text-white/40 text-xs mt-0.5">{project.desc}</p>
          </div>
          <div className="ml-auto flex items-center gap-3">
            <div className="hidden md:flex gap-2">
              {project.tech.map((t) => (
                <span key={t} className="text-xs px-2.5 py-1 rounded-full border border-white/15 text-white/50">
                  {t}
                </span>
              ))}
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all flex-shrink-0"
            >
              ✕
            </button>
          </div>
        </div>

        {/* ── SCREEN PREVIEW ── */}
        <div
          className="flex-1 overflow-hidden transition-opacity duration-200"
          style={{ opacity: animating ? 0 : 1, minHeight: 0 }}
        >
          <MockScreen screen={screen} projectTitle={project.title} accent={project.accent} />
        </div>

        {/* ── SCREEN TABS ── */}
        <div className="flex items-center gap-1 px-4 py-3 border-t border-white/10 flex-shrink-0 overflow-x-auto">
          <span className="text-xs text-white/30 mr-2 flex-shrink-0">Screens:</span>
          {project.screens.map((s, i) => (
            <button
              key={i}
              onClick={() => switchScreen(i)}
              className="flex-shrink-0 px-3 md:px-4 py-1.5 text-xs font-bold rounded-full transition-all duration-200 whitespace-nowrap"
              style={{
                background: activeScreen === i ? project.accent : 'rgba(255,255,255,0.05)',
                color: activeScreen === i ? '#000' : 'rgba(255,255,255,0.4)',
                border: `1px solid ${activeScreen === i ? project.accent : 'rgba(255,255,255,0.1)'}`,
              }}
            >
              {s.label}
            </button>
          ))}

          {/* Arrow nav */}
          <div className="flex gap-1 ml-auto flex-shrink-0">
            <button
              onClick={() => switchScreen(Math.max(0, activeScreen - 1))}
              disabled={activeScreen === 0}
              className="w-7 h-7 rounded-lg flex items-center justify-center border border-white/20 text-white/40 hover:text-white hover:border-white/40 disabled:opacity-20 transition-all text-xs"
            >←</button>
            <button
              onClick={() => switchScreen(Math.min(project.screens.length - 1, activeScreen + 1))}
              disabled={activeScreen === project.screens.length - 1}
              className="w-7 h-7 rounded-lg flex items-center justify-center border border-white/20 text-white/40 hover:text-white hover:border-white/40 disabled:opacity-20 transition-all text-xs"
            >→</button>
          </div>
        </div>
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
//  MAIN PORTFOLIO PAGE
// ─────────────────────────────────────────────────────────────────────────────
export default function Portfolio() {
  const [active, setActive] = useState('All')
  const [selectedProject, setSelectedProject] = useState(null)
  const [hoveredId, setHoveredId] = useState(null)

  const filtered = active === 'All' ? projects : projects.filter((p) => p.tag === active)

  return (
    <>
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}

      <main className="pt-24 bg-black min-h-screen text-white">
        {/* ── HEADER ── */}
        <section className="relative py-20 px-6 overflow-hidden">
          {/* decorative glow */}
          <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(249,115,22,0.08) 0%, transparent 70%)', filter: 'blur(60px)' }} />
          <div className="max-w-7xl mx-auto relative z-10">
            <span className="section-label">Case Studies</span>
            <h1 className="mt-5 text-5xl md:text-7xl font-black leading-tight">
              Featured Projects
            </h1>
            <p className="mt-5 text-white/50 text-xl max-w-xl">
              Selected work that speaks for itself. Click any project to explore the UI.
            </p>
            <div className="mt-4 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#f97316' }} />
              <span className="text-white/30 text-sm">{projects.length} Projects</span>
            </div>
          </div>
        </section>

        {/* ── FILTERS ── */}
        <section className="px-6 pb-8">
          <div className="max-w-7xl mx-auto flex flex-wrap gap-3">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className="px-5 py-2 text-sm font-bold tracking-widest uppercase rounded-full transition-all duration-300"
                style={{
                  background: active === f ? '#f97316' : 'transparent',
                  color: active === f ? '#000' : 'rgba(255,255,255,0.5)',
                  border: active === f ? '1px solid #f97316' : '1px solid rgba(255,255,255,0.2)',
                  boxShadow: active === f ? '0 4px 24px rgba(249,115,22,0.2)' : 'none',
                }}
              >
                {f}
              </button>
            ))}
          </div>
        </section>

        {/* ── GRID ── */}
        <section className="px-6 pb-28">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((p, i) => {
              const isHero = i === 0 && filtered.length > 1
              return (
                <div
                  key={p.id}
                  className={`relative rounded-3xl overflow-hidden cursor-pointer group ${isHero ? 'md:col-span-2 lg:col-span-2' : ''}`}
                  style={{
                    background: '#0d0d0d',
                    border: hoveredId === p.id ? `1px solid ${p.accent}66` : '1px solid rgba(255,255,255,0.07)',
                    transition: 'border-color 0.3s, transform 0.3s, box-shadow 0.3s',
                    transform: hoveredId === p.id ? 'translateY(-4px)' : 'none',
                    boxShadow: hoveredId === p.id ? `0 20px 60px ${p.accent}18` : '0 2px 20px rgba(0,0,0,0.5)',
                  }}
                  onMouseEnter={() => setHoveredId(p.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  onClick={() => setSelectedProject(p)}
                >
                  {/* IMAGE */}
                  <div className="relative overflow-hidden" style={{ height: isHero ? '420px' : '260px' }}>
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${p.color} opacity-60`} />
                    {/* grid overlay */}
                    <div className="absolute inset-0 opacity-10" style={{
                      backgroundImage: 'linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)',
                      backgroundSize: '40px 40px',
                    }} />
                    {/* large letter */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="font-black select-none" style={{ fontSize: isHero ? '200px' : '140px', color: `${p.accent}08` }}>
                        {p.title[0]}
                      </span>
                    </div>
                    {/* "View UI" badge on hover */}
                    <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300"
                      style={{ opacity: hoveredId === p.id ? 1 : 0 }}>
                      <div className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold backdrop-blur-md"
                        style={{ background: `${p.accent}cc`, color: '#000', boxShadow: `0 4px 20px ${p.accent}44` }}>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                        </svg>
                        View {p.screens.length} UI Screens
                      </div>
                    </div>
                  </div>

                  {/* GRADIENT OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent pointer-events-none" />

                  {/* TAG */}
                  <div className="absolute top-4 right-4">
                    <span className="text-xs font-bold tracking-[0.2em] uppercase px-2.5 py-1 rounded-full"
                      style={{ background: `${p.accent}22`, color: p.accent, border: `1px solid ${p.accent}44`, backdropFilter: 'blur(8px)' }}>
                      {p.tag}
                    </span>
                  </div>

                  {/* CONTENT */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                    <h2 className="text-xl md:text-3xl font-black tracking-tight">{p.title}</h2>
                    <p className="mt-2 text-white/50 text-sm leading-relaxed max-w-lg hidden md:block">{p.desc}</p>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold px-3 py-1.5 rounded-xl border border-white/10 backdrop-blur-md"
                          style={{ background: 'rgba(0,0,0,0.5)' }}>
                          {p.category}
                        </span>
                        <span className="text-xs px-2 py-1 rounded-lg text-white/40 border border-white/10 backdrop-blur-md"
                          style={{ background: 'rgba(0,0,0,0.4)' }}>
                          {p.screens.length} screens
                        </span>
                      </div>
                      <span className="text-white/30 text-sm font-medium">{p.year}</span>
                    </div>
                  </div>

                  {/* accent glow top-right */}
                  <div className="absolute -top-16 -right-16 w-48 h-48 rounded-full pointer-events-none transition-opacity duration-500"
                    style={{ background: `${p.accent}0a`, filter: 'blur(40px)', opacity: hoveredId === p.id ? 1 : 0 }} />
                </div>
              )
            })}
          </div>
        </section>
      </main>
    </>
  )
}