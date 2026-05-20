const stats = [
  { num: "50+", label: "Projects Delivered" },
  { num: "30+", label: "Clients Worldwide" },
  { num: "3+", label: "Years Experience" },
  { num: "100%", label: "Client Satisfaction" },
]

const skills = [
  {
    category: "AI & Automation",
    icon: "🤖",
    desc: "Smart systems that save time and increase conversions.",
    items: [
      { name: "OpenAI / Claude API", level: 92 },
      { name: "WhatsApp Business API", level: 88 },
      { name: "LangChain", level: 78 },
      { name: "n8n / Zapier", level: 85 },
    ],
  },

  {
    category: "Frontend Development",
    icon: "⚡",
    desc: "Modern responsive interfaces built for growth.",
    items: [
      { name: "React / Next.js", level: 95 },
      { name: "Tailwind CSS", level: 95 },
      { name: "TypeScript", level: 85 },
      { name: "Framer Motion", level: 80 },
    ],
  },

  {
    category: "Backend Systems",
    icon: "🛠",
    desc: "Scalable architecture for real business operations.",
    items: [
      { name: "Node.js / Express", level: 88 },
      { name: "Python / Django", level: 80 },
      { name: "PostgreSQL", level: 82 },
      { name: "REST & GraphQL", level: 90 },
    ],
  },

  {
    category: "E-Commerce",
    icon: "🛒",
    desc: "Stores optimized for conversions and customer retention.",
    items: [
      { name: "Shopify", level: 90 },
      { name: "WooCommerce", level: 85 },
      { name: "Stripe Integration", level: 88 },
      { name: "Conversion Optimization", level: 80 },
    ],
  },
]

const testimonials = [
  {
    name: "Ahmad R.",
    role: "Motion Founder",
    text: "Delta-Developers delivered beyond expectations. Fast, professional, and genuinely invested in our success.",
  },

  {
    name: "Sarah M.",
    role: "Veauly Founder",
    text: "The team built our entire online store in 2 weeks. The quality and communication were exceptional.",
  },

  {
    name: "James K.",
    role: "Unleay Founder",
    text: "Our WhatsApp AI assistant now handles most customer queries automatically. Incredible experience.",
  },
]

const businessBenefits = [
  {
    title: "More Leads",
    desc: "Websites and AI systems designed to convert visitors into paying customers.",
  },

  {
    title: "Save Time",
    desc: "Automate repetitive tasks and customer support with intelligent workflows.",
  },

  {
    title: "Look Professional",
    desc: "Premium digital experiences that build trust instantly with customers.",
  },

  {
    title: "Scale Faster",
    desc: "Technology infrastructure built to grow with your business.",
  },
]

export default function Expertise() {
  return (
    <main className="pt-24 bg-[#060f07] min-h-screen text-white overflow-hidden">

      {/* HERO */}
      <section className="relative py-24 px-6 border-b border-[#1e3a20]">

        {/* background glow */}
        <div className="absolute top-[-100px] right-[-120px] w-[500px] h-[500px] rounded-full bg-[#b8ff57]/10 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#2a4a2c] bg-[#0d1f0e] mb-8">
            <span className="w-2 h-2 rounded-full bg-[#b8ff57] animate-pulse" />
            <span className="text-[#b8ff57] text-xs font-bold tracking-[0.2em] uppercase">
              Skills & Expertise
            </span>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* LEFT */}
            <div>
              <h1 className="text-5xl md:text-7xl leading-none font-black">
                <span className="block text-white">
                  Technology
                </span>

                <span className="block italic text-[#b8ff57]">
                  That Grows
                </span>

                <span className="block text-white">
                  Small Businesses
                </span>
              </h1>

              <p className="mt-8 text-[#8aaa8a] text-lg leading-relaxed max-w-xl">
                We help startups, restaurants, local businesses, and online brands
                build modern digital systems that increase revenue, automate work,
                and create better customer experiences.
              </p>

              <div className="flex flex-wrap gap-4 mt-10">

                <div className="px-5 py-3 rounded-2xl bg-[#0d1f0e] border border-[#1e3a20]">
                  <div className="text-[#b8ff57] font-black text-2xl">
                    24/7
                  </div>

                  <div className="text-[#6a8a6c] text-xs uppercase tracking-widest mt-1">
                    AI Support
                  </div>
                </div>

                <div className="px-5 py-3 rounded-2xl bg-[#0d1f0e] border border-[#1e3a20]">
                  <div className="text-[#b8ff57] font-black text-2xl">
                    Fast
                  </div>

                  <div className="text-[#6a8a6c] text-xs uppercase tracking-widest mt-1">
                    Delivery
                  </div>
                </div>

                <div className="px-5 py-3 rounded-2xl bg-[#0d1f0e] border border-[#1e3a20]">
                  <div className="text-[#b8ff57] font-black text-2xl">
                    ROI
                  </div>

                  <div className="text-[#6a8a6c] text-xs uppercase tracking-widest mt-1">
                    Focused
                  </div>
                </div>

              </div>
            </div>

            {/* RIGHT */}
            <div className="bg-[#0d1f0e] border border-[#1e3a20] rounded-3xl p-8 shadow-2xl shadow-black/40">

              <div className="flex items-center justify-between mb-8">
                <div>
                  <p className="text-sm text-[#6a8a6c] uppercase tracking-[0.2em] font-bold">
                    Performance Snapshot
                  </p>

                  <h3 className="text-2xl font-black mt-2">
                    Business Growth Metrics
                  </h3>
                </div>

                <div className="w-14 h-14 rounded-2xl bg-[#b8ff57] flex items-center justify-center text-black text-2xl">
                  📈
                </div>
              </div>

              <div className="space-y-6">

                {[
                  {
                    title: "Lead Conversion",
                    value: "89%",
                  },

                  {
                    title: "Automation Efficiency",
                    value: "76%",
                  },

                  {
                    title: "Client Retention",
                    value: "94%",
                  },
                ].map((item, i) => (
                  <div key={i}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-[#c4d4c4]">
                        {item.title}
                      </span>

                      <span className="text-sm font-bold text-[#b8ff57]">
                        {item.value}
                      </span>
                    </div>

                    <div className="h-2 rounded-full bg-[#132414] overflow-hidden">
                      <div
                        className="h-full rounded-full bg-[#b8ff57]"
                        style={{
                          width: item.value,
                        }}
                      />
                    </div>
                  </div>
                ))}

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-6">

          {stats.map((s, i) => (
            <div
              key={i}
              className="bg-[#0d1f0e] border border-[#1e3a20] rounded-3xl p-8 text-center hover:border-[#b8ff57] transition-all duration-300"
            >
              <div className="text-5xl font-black text-[#b8ff57]">
                {s.num}
              </div>

              <div className="mt-3 text-[#6a8a6c] uppercase tracking-[0.2em] text-xs font-bold">
                {s.label}
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* BUSINESS BENEFITS */}
      <section className="px-6 pb-24">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">
            <span className="text-[#b8ff57] text-xs font-bold tracking-[0.3em] uppercase">
              Why Businesses Choose Us
            </span>

            <h2 className="mt-5 text-4xl md:text-5xl font-black">
              Built For Real Business Growth
            </h2>

            <p className="mt-5 text-[#8aaa8a] max-w-2xl mx-auto text-lg">
              Every solution we build is designed to increase revenue,
              improve efficiency, and strengthen your brand presence online.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            {businessBenefits.map((item, i) => (
              <div
                key={i}
                className="group bg-[#0d1f0e] border border-[#1e3a20] rounded-3xl p-7 hover:border-[#b8ff57] transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#132414] border border-[#1e3a20] flex items-center justify-center text-2xl mb-6 group-hover:bg-[#b8ff57] group-hover:text-black transition-all">
                  ✦
                </div>

                <h3 className="text-xl font-black mb-3">
                  {item.title}
                </h3>

                <p className="text-[#8aaa8a] leading-relaxed text-sm">
                  {item.desc}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="px-6 pb-24 border-t border-[#1e3a20] pt-24">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">
            <span className="text-[#b8ff57] text-xs font-bold tracking-[0.3em] uppercase">
              Technical Expertise
            </span>

            <h2 className="mt-5 text-4xl md:text-5xl font-black">
              What We Specialize In
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {skills.map((cat, i) => (
              <div
                key={i}
                className="bg-[#0d1f0e] border border-[#1e3a20] rounded-3xl p-8 hover:border-[#b8ff57] transition-all duration-300"
              >

                <div className="flex items-center gap-4 mb-8">

                  <div className="w-14 h-14 rounded-2xl bg-[#132414] flex items-center justify-center text-2xl">
                    {cat.icon}
                  </div>

                  <div>
                    <h3 className="text-xl font-black">
                      {cat.category}
                    </h3>

                    <p className="text-[#6a8a6c] text-sm mt-1">
                      {cat.desc}
                    </p>
                  </div>

                </div>

                <div className="space-y-6">

                  {cat.items.map((skill, j) => (
                    <div key={j}>

                      <div className="flex justify-between mb-2">
                        <span className="text-sm text-[#d4f5d4]">
                          {skill.name}
                        </span>

                        <span className="text-xs font-bold text-[#b8ff57]">
                          {skill.level}%
                        </span>
                      </div>

                      <div className="h-2 rounded-full bg-[#132414] overflow-hidden">

                        <div
                          className="h-full rounded-full bg-[#b8ff57]"
                          style={{
                            width: `${skill.level}%`,
                          }}
                        />

                      </div>
                    </div>
                  ))}

                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="border-t border-[#1e3a20] py-24 px-6">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">

            <span className="text-[#b8ff57] text-xs font-bold tracking-[0.3em] uppercase">
              Client Success
            </span>

            <h2 className="mt-5 text-4xl md:text-5xl font-black">
              Trusted By Growing Businesses
            </h2>

            <p className="mt-5 text-[#8aaa8a] text-lg">
              Real feedback from clients worldwide.
            </p>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-[#0d1f0e] border border-[#1e3a20] rounded-3xl p-8 hover:border-[#b8ff57] transition-all duration-300"
              >

                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, idx) => (
                    <span
                      key={idx}
                      className="text-[#b8ff57]"
                    >
                      ★
                    </span>
                  ))}
                </div>

                <p className="text-[#c4d4c4] leading-relaxed italic mb-8">
                  "{t.text}"
                </p>

                <div className="flex items-center gap-4">

                  <div className="w-14 h-14 rounded-2xl bg-[#132414] border border-[#1e3a20] flex items-center justify-center text-[#b8ff57] font-black text-xl">
                    {t.name[0]}
                  </div>

                  <div>
                    <div className="font-bold text-white">
                      {t.name}
                    </div>

                    <div className="text-[#6a8a6c] text-sm mt-1">
                      {t.role}
                    </div>
                  </div>

                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

    </main>
  )
}