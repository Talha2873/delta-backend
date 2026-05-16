const stats = [
  { num: '50+', label: 'Projects Delivered' },
  { num: '30+', label: 'Clients Worldwide' },
  { num: '3+', label: 'Years Experience' },
  { num: '100%', label: 'Client Satisfaction' },
]

const skills = [
  {
    category: 'Frontend',
    items: [
      { name: 'React / Next.js', level: 95 },
      { name: 'Tailwind CSS', level: 95 },
      { name: 'TypeScript', level: 85 },
      { name: 'Framer Motion', level: 80 },
    ],
  },
  {
    category: 'Backend',
    items: [
      { name: 'Node.js / Express', level: 88 },
      { name: 'Python / Django', level: 80 },
      { name: 'PostgreSQL', level: 82 },
      { name: 'REST & GraphQL', level: 90 },
    ],
  },
  {
    category: 'AI & Automation',
    items: [
      { name: 'OpenAI / Claude API', level: 92 },
      { name: 'WhatsApp Business API', level: 88 },
      { name: 'LangChain', level: 78 },
      { name: 'n8n / Zapier', level: 85 },
    ],
  },
  {
    category: 'E-Commerce',
    items: [
      { name: 'Shopify', level: 90 },
      { name: 'WooCommerce', level: 85 },
      { name: 'Stripe Integration', level: 88 },
      { name: 'Conversion Optimization', level: 80 },
    ],
  },
]

const testimonials = [
  { name: 'Ahmad R.', role: 'Motion Founder', text: 'Delta-Developers delivered beyond expectations. Fast, professional, and genuinely invested in our success. 10/10 would hire again.' },
  { name: 'Sarah M.', role: 'Veauly Founder', text: 'The team is efficient and reliable. They built our entire store in 2 weeks and the quality is exceptional. Highly recommended.' },
  { name: 'James K.', role: 'Unleay Founder', text: 'Our WhatsApp bot handles 80% of customer queries now. Delta-Developers made the impossible feel easy. Outstanding work.' },
]

export default function Expertise() {
  return (
    <main className="pt-24 bg-black min-h-screen">
      {/* Header */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="hero-orb w-[500px] h-[500px] bg-orange-700/15 top-[-50px] right-[-80px]" />
        <div className="max-w-7xl mx-auto relative z-10">
          <span className="section-label">Skills & Experience</span>
          <h1 className="mt-5 text-5xl md:text-7xl font-black">Expertise</h1>
          <p className="mt-5 text-white/50 text-xl max-w-xl">Skills that drive impactful results.</p>
        </div>
      </section>

      {/* Stats grid */}
      <section className="px-6 pb-16">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-0 border border-white/10 rounded-2xl overflow-hidden">
          {stats.map((s, i) => (
            <div key={i} className={`p-8 text-center ${i % 2 === 0 ? 'bg-white/[0.02]' : 'bg-white/[0.04]'} ${i < stats.length - 1 ? 'border-r border-white/10' : ''}`}>
              <div className="text-5xl font-black text-gradient">{s.num}</div>
              <div className="text-white/40 text-sm font-bold tracking-widest uppercase mt-2">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="section-label">Technical Skills</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-black">What We Master</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((cat, i) => (
              <div key={i} className="card-hover bg-white/[0.03] rounded-2xl p-8">
                <h3 className="text-lg font-black text-orange-400 tracking-widest uppercase mb-6">{cat.category}</h3>
                <div className="space-y-5">
                  {cat.items.map((skill, j) => (
                    <div key={j}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-white/80 font-medium text-sm">{skill.name}</span>
                        <span className="text-white/30 text-xs font-bold">{skill.level}%</span>
                      </div>
                      <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-orange-600 to-orange-400"
                          style={{ width: `${skill.level}%`, transition: 'width 1s ease' }}
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

      {/* Testimonials */}
      <section className="border-t border-white/10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="section-label">Client Voices</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-black">Testimonials</h2>
            <p className="mt-4 text-white/50">What clients say about working with us</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="card-hover bg-white/[0.03] rounded-2xl p-8 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-600/30 to-red-900/20 border border-orange-500/20 flex items-center justify-center text-2xl font-black text-orange-400 mb-6">
                  {t.name[0]}
                </div>
                <p className="text-white/60 text-sm leading-relaxed mb-6 italic">"{t.text}"</p>
                <div>
                  <div className="font-bold text-white">{t.name}</div>
                  <div className="text-white/40 text-xs font-medium tracking-wide mt-1">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}