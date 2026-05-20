import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import {
  ArrowRight,
  Bot,
  Globe,
  ShoppingCart,
  Phone,
  LayoutDashboard,
  Database,
  BrainCircuit,
  Rocket,
  Store,
  Building2,
  MessageCircle,
  Scissors,
  Headset,
} from "lucide-react";

const services = [
  // SMALL BUSINESS SERVICES FIRST

  {
    icon: Scissors,
    title: "Salon & Beauty Websites",
    tag: "SALON",
    image:
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1200&auto=format&fit=crop",
    desc:
      "Professional salon websites with booking systems, pricing pages, and AI-powered assistants.",
    tech: ["Booking System", "React", "SEO", "AI Assistant"],
  },

  {
    icon: Building2,
    title: "Real Estate Property Websites",
    tag: "REAL ESTATE",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1200&auto=format&fit=crop",
    desc:
      "Modern real estate websites with property listings, lead forms, maps, and CRM integration.",
    tech: ["Property CMS", "Google Maps", "React", "CRM"],
  },

  {
    icon: MessageCircle,
    title: "WhatsApp AI Chat Assistant",
    tag: "WHATSAPP",
    image:
      "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=1200&auto=format&fit=crop",
    desc:
      "AI chatbot for WhatsApp that instantly replies to customers and automates orders.",
    tech: ["WhatsApp API", "OpenAI", "Automation", "CRM"],
  },

  {
    icon: Phone,
    title: "24/7 Appointment Booking AI",
    tag: "BOOKING AI",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1200&auto=format&fit=crop",
    desc:
      "Voice AI assistant for salons, clinics, restaurants, and service businesses.",
    tech: ["Voice AI", "Calendars", "SMS", "Automation"],
  },

  {
    icon: Store,
    title: "Local Business Websites",
    tag: "SMALL BUSINESS",
    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop",
    desc:
      "Professional websites for gyms, restaurants, clinics, shops, and local businesses.",
    tech: ["React", "SEO", "Mobile Design", "Fast Hosting"],
  },

  {
    icon: Headset,
    title: "Customer Support AI Agent",
    tag: "SUPPORT AI",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200&auto=format&fit=crop",
    desc:
      "AI-powered support systems that answer customer questions 24/7 automatically.",
    tech: ["OpenAI", "Chatbot", "Automation", "CRM"],
  },

  // OTHER SERVICES

  {
    icon: Bot,
    title: "AI Chatbot Integration",
    tag: "CHATBOT",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop",
    desc:
      "Custom AI assistants for support, lead generation, and workflow automation.",
    tech: ["OpenAI", "LangChain", "FastAPI", "React"],
  },

  {
    icon: Globe,
    title: "Restaurant AI Website",
    tag: "RESTAURANT",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop",
    desc:
      "Restaurant websites with online ordering, reservations, and AI customer service.",
    tech: ["Next.js", "Stripe", "Booking System", "Tailwind"],
  },

  {
    icon: LayoutDashboard,
    title: "Smart CRM Dashboard",
    tag: "CRM",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    desc:
      "Manage sales, reports, customers, and analytics in one smart business dashboard.",
    tech: [".NET", "React", "PostgreSQL", "Analytics"],
  },

  {
    icon: ShoppingCart,
    title: "Small Business E-Commerce",
    tag: "STORE",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
    desc:
      "Online stores with payment systems, inventory tracking, and AI recommendations.",
    tech: ["Shopify", "Stripe", "React", "Inventory"],
  },

  {
    icon: Database,
    title: "Inventory Management System",
    tag: "INVENTORY",
    image:
      "https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=1200&auto=format&fit=crop",
    desc:
      "Warehouse and stock management software with automation and reporting.",
    tech: ["Python", ".NET", "SQL", "Automation"],
  },

  {
    icon: BrainCircuit,
    title: "AI Auto Reply System",
    tag: "AUTOMATION",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop",
    desc:
      "Automated replies for websites, WhatsApp, Messenger, and Instagram using AI.",
    tech: ["WhatsApp API", "OpenAI", "Automation", "CRM"],
  },

  {
    icon: Rocket,
    title: "Startup & SaaS MVP",
    tag: "STARTUP",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop",
    desc:
      "Launch scalable SaaS products with authentication, billing, and dashboards.",
    tech: ["Next.js", "Supabase", "Stripe", "Tailwind"],
  },
];

export default function Services() {
  return (
    <main className="bg-black min-h-screen text-white overflow-hidden">
      {/* HERO */}
      <section className="relative pt-28 pb-16 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-lime-400/10 blur-[160px]" />

        <div className="max-w-7xl mx-auto relative z-10">
          <p className="text-lime-400 uppercase tracking-[0.35em] text-xs font-bold">
            ● AI SERVICES FOR SMALL BUSINESSES
          </p>

          <h1 className="mt-5 text-5xl md:text-7xl font-black leading-none tracking-tight">
            AI Systems &
            <span className="text-lime-400 italic block mt-2">
              Business Websites
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-white/50 text-lg leading-relaxed">
            We build AI-powered websites, dashboards, booking systems,
            chat assistants, and automation tools for salons, restaurants,
            real estate agencies, clinics, gyms, shops, and local businesses.
          </p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="px-6 pb-28">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-7">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.04,
                }}
                viewport={{ once: true }}
              >
                <Link
                  to={`/contact?service=${encodeURIComponent(
                    service.title
                  )}`}
                  className="group block h-full rounded-[30px] overflow-hidden border border-lime-400/10 bg-[#071106] hover:border-lime-400/40 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(163,230,53,0.08)]"
                >
                  {/* IMAGE */}
                  <div className="relative h-[240px] overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                    {/* BADGES */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-lime-400/20 border border-lime-400/20 text-[10px] font-bold uppercase tracking-widest text-lime-300 backdrop-blur-md">
                        ● LIVE
                      </span>
                    </div>

                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 rounded-full bg-black/60 border border-white/10 text-[10px] font-bold uppercase tracking-widest text-lime-300 backdrop-blur-md">
                        {service.tag}
                      </span>
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="p-6 flex flex-col h-[340px]">
                    {/* TITLE */}
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-lime-400/10 border border-lime-400/20 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-lime-400" />
                      </div>

                      <h2 className="text-[22px] md:text-[24px] leading-[1.05] font-black tracking-tight text-white group-hover:text-lime-400 transition-colors line-clamp-3">
                        {service.title}
                      </h2>
                    </div>

                    {/* DESCRIPTION */}
                    <p className="mt-4 text-white/55 text-[15px] leading-relaxed min-h-[88px] line-clamp-4">
                      {service.desc}
                    </p>

                    {/* TECH STACK */}
                    <div className="mt-5 flex flex-wrap gap-2 min-h-[72px] content-start">
                      {service.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 rounded-full bg-lime-400/5 border border-lime-400/10 text-[11px] font-semibold text-lime-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* BUTTON */}
                    <div className="mt-auto pt-6">
                      <div className="flex items-center justify-between rounded-2xl border border-lime-400/20 bg-lime-400/5 px-5 py-4 group-hover:bg-lime-400/10 transition-all duration-300">
                        <span className="text-sm font-bold text-lime-300 tracking-wide">
                          View Service
                        </span>

                        <ArrowRight className="w-4 h-4 text-lime-300 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>

                  {/* GLOW */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute -top-20 right-0 w-40 h-40 bg-lime-400/10 blur-3xl" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-28">
        <div className="max-w-7xl mx-auto rounded-[40px] border border-lime-400/10 bg-gradient-to-b from-lime-400/10 to-transparent p-14 text-center">
          <h2 className="text-4xl md:text-6xl font-black leading-tight">
            Ready to automate your
            <span className="text-lime-400"> business?</span>
          </h2>

          <p className="mt-5 text-white/50 max-w-2xl mx-auto text-lg">
            We create AI assistants, websites, booking systems, dashboards,
            and automation tools designed to grow modern businesses faster.
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center gap-3 mt-10 px-8 py-4 rounded-full bg-lime-400 text-black font-black uppercase tracking-wider hover:scale-105 transition-all duration-300"
          >
            Hire Us
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}