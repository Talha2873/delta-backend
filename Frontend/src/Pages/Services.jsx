import { Link } from 'react-router-dom'

const services = [
  {
    icon: '🤖',
    title: 'AI Chatbot Integration',
    tagline: 'Highest demand right now.',
    desc: 'Embed powerful AI assistants into your website, app, or platform. Support bots, lead-gen agents, booking assistants, and custom workflows — all automated 24/7 using GPT, Claude, and LangChain.',
    features: ['GPT / Claude Integration', 'LangChain Pipelines', 'Custom Knowledge Base', 'Multi-platform Deploy', 'Lead Generation', 'Live Handoff'],
    badge: 'Most Wanted',
  },
  {
    icon: '⚙️',
    title: 'Custom Business Automation Chatbots',
    tagline: 'Your business runs itself.',
    desc: 'Fully custom chatbots built around your specific business — auto-take orders, book appointments, answer FAQs, follow up with customers, send invoices, and manage staff requests. Built with LangChain, Python, and your existing tools. Works on website, WhatsApp, or any platform.',
    features: ['Order Taking Bot', 'Appointment Booking', 'Auto Follow-ups', 'Invoice & Payment Alerts', 'Staff Request Handling', 'CRM / Google Sheets Sync', 'LangChain / Python', 'Custom Trained on Your Data'],
    badge: 'Most Wanted',
  },
  {
    icon: '🛠️',
    title: 'AI Business Automation Tools',
    tagline: 'Save hours every day.',
    desc: 'Custom AI-powered tools built for restaurants, stores, and small businesses: inventory trackers, order summarizers, auto-reply email systems, report generators, and workflow bots — built in Python, LangChain, and .NET.',
    features: ['Python / LangChain', 'Email Auto-Reply', 'Inventory Assistants', 'Report Generators', 'Workflow Automation', 'Data Extractors'],
    badge: 'Hot',
  },
  {
    icon: '🍕',
    title: 'Restaurant & Food Business Websites',
    tagline: 'Built for restaurants, cafes & takeaways.',
    desc: 'Beautiful, mobile-first websites for food businesses with online menus, table reservations, order forms, and an AI chatbot that answers customer questions and takes bookings automatically.',
    features: ['React / Next.js', 'Online Menu System', 'Table Reservation Bot', 'AI Customer Assistant', 'Google Maps Integration', 'SEO Optimized'],
    badge: 'High Demand',
  },
  {
    icon: '🛒',
    title: 'E-Commerce & Online Stores',
    tagline: 'Built to convert.',
    desc: 'High-performing online stores for small businesses and retailers — Shopify, WooCommerce, or fully custom React storefronts with payment integration, inventory management, and AI product recommendation bots.',
    features: ['Shopify / WooCommerce', 'Custom React Storefront', 'Payment Integration', 'AI Product Recommender', 'Inventory Management', 'SEO Optimization'],
    badge: 'High Demand',
  },
  {
    icon: '💬',
    title: 'WhatsApp & Messenger Chatbots',
    tagline: 'Always-on customer service.',
    desc: 'AI-powered WhatsApp bots for restaurants, stores, and service businesses that handle orders, answer questions, send reminders, and engage customers automatically — 24/7, in any language.',
    features: ['WhatsApp Business API', 'AI-Powered Replies', 'Order Management', 'Appointment Reminders', 'Multi-language Support', 'Analytics Dashboard'],
    badge: 'High Demand',
  },
  {
    icon: '🏪',
    title: 'Small Business Websites',
    tagline: 'Your business online in 7 days.',
    desc: 'Professional websites for salons, gyms, clinics, plumbers, lawyers, and any local service business. Fast, mobile-optimized, and built with a contact form and optional AI assistant from day one.',
    features: ['React / Next.js', 'Contact & Booking Forms', 'Google Maps Embed', 'Mobile Optimized', 'Fast Load Speed', 'AI FAQ Bot'],
  },
  {
    icon: '⚡',
    title: 'Frontend Development',
    tagline: 'Pixel-perfect interfaces.',
    desc: 'Blazing-fast, pixel-perfect UIs built with React, Next.js, and Tailwind CSS. Responsive, accessible, and optimized for performance — from landing pages to complex dashboards.',
    features: ['React / Next.js', 'Tailwind CSS', 'Framer Motion', 'Responsive Design', 'Performance Optimization', 'Component Libraries'],
  },
  {
    icon: '🔗',
    title: 'Full Stack Web Development',
    tagline: 'End-to-end solutions.',
    desc: 'Complete web applications with .NET / C# or Python Django backends, REST & GraphQL APIs, PostgreSQL databases, and cloud deployments that scale. From idea to production.',
    features: ['.NET / C# Backend', 'Python Django', 'REST & GraphQL APIs', 'PostgreSQL / MongoDB', 'Cloud Deployment', 'Authentication & Auth'],
  },
  {
    icon: '📊',
    title: 'Business Dashboard & Admin Panels',
    tagline: 'See your business at a glance.',
    desc: 'Custom dashboards for restaurants, stores, and service businesses — track sales, orders, customers, and staff in real time. Built with React frontend and .NET or Django backend.',
    features: ['Real-time Analytics', 'React Dashboards', '.NET / Django APIs', 'Role-based Access', 'Charts & Reports', 'Mobile Responsive'],
  },
  {
    icon: '📧',
    title: 'AI Email & Marketing Automation',
    tagline: 'Market on autopilot.',
    desc: 'Automated email campaigns, AI-written follow-up sequences, and customer segmentation tools — built with Python and LangChain. Connect with your existing CRM or run standalone.',
    features: ['LangChain Email Writer', 'Python Automation', 'Customer Segmentation', 'Follow-up Sequences', 'CRM Integration', 'Open Rate Analytics'],
  },
  {
    icon: '🔒',
    title: 'Desktop & System Applications',
    tagline: 'Powerful software, built fast.',
    desc: 'Native Windows desktop apps and internal business tools built with C# and C++ — POS systems, inventory apps, data management tools, and custom enterprise software for businesses that need more than a website.',
    features: ['C# / .NET Desktop', 'C++ Applications', 'POS Systems', 'Inventory Software', 'Database Integration', 'Windows Native'],
  },
  {
    icon: '🧠',
    title: 'AI Document & Data Tools',
    tagline: 'Unlock your data instantly.',
    desc: 'Upload your documents, PDFs, or spreadsheets and let AI summarize, search, and extract insights. Built with Python, LangChain, and vector databases — perfect for law firms, clinics, and logistics companies.',
    features: ['PDF / Doc Summarizer', 'Python / LangChain', 'Vector Search', 'Data Extraction', 'Q&A over Documents', 'Multi-file Support'],
  },
]

export default function Services() {
  return (
    <main className="pt-24 bg-black min-h-screen">
      {/* Header */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="hero-orb w-[500px] h-[500px] bg-orange-700/15 top-[-100px] right-[-100px]" />
        <div className="max-w-7xl mx-auto relative z-10">
          <span className="section-label">What We Offer</span>
          <h1 className="mt-5 text-5xl md:text-7xl font-black leading-tight">
            Our Services
          </h1>
          <p className="mt-5 text-white/50 text-xl max-w-xl leading-relaxed">
            From websites to AI automation — everything your business needs to grow and run smarter.
          </p>
        </div>
      </section>

      {/* Services list */}
      <section className="px-6 pb-28">
        <div className="max-w-7xl mx-auto space-y-6">
          {services.map((s, i) => (
            <Link key={i} to={`/contact?service=${encodeURIComponent(s.title)}`} className="block card-hover bg-white/[0.03] rounded-2xl p-8 md:p-10 group cursor-pointer">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-orange-600/10 border border-orange-500/20 flex items-center justify-center text-3xl">
                    {s.icon}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between flex-wrap gap-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <p className="text-orange-400 text-xs font-bold tracking-widest uppercase">{s.tagline}</p>
                        {s.badge && (
                          <span className="text-xs font-black tracking-wide px-2 py-0.5 rounded-full bg-orange-500/20 text-orange-400 border border-orange-500/30 uppercase">
                            {s.badge}
                          </span>
                        )}
                      </div>
                      <h2 className="text-2xl md:text-3xl font-black group-hover:text-orange-400 transition-colors">{s.title}</h2>
                    </div>
                    <span className="text-white/20 text-5xl font-black">{String(i + 1).padStart(2, '0')}</span>
                  </div>
                  <p className="mt-4 text-white/50 leading-relaxed max-w-2xl">{s.desc}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {s.features.map((f, j) => (
                      <span key={j} className="text-xs font-semibold tracking-wide bg-white/5 border border-white/10 text-white/60 px-3 py-1.5 rounded-full">
                        {f}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 flex items-center gap-2 text-orange-400 text-sm font-bold tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <span>Get This Service</span>
                    <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10 py-20 px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-black">Need a custom solution?</h2>
        <p className="mt-4 text-white/50 text-lg">Tell us what you need and we'll build it.</p>
        <Link to="/contact" className="mt-8 inline-flex px-8 py-4 bg-orange-600 hover:bg-orange-500 text-white font-black text-sm tracking-widest uppercase rounded-full transition-all duration-200 hover:scale-105">
          Get in Touch →
        </Link>
      </section>
    </main>
  )
}