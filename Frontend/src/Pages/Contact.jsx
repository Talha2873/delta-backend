import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import emailjs from '@emailjs/browser'

export default function Contact() {
  const [searchParams] = useSearchParams()

  const [form, setForm] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
  })

  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const serviceFromUrl = searchParams.get('service')
    if (serviceFromUrl) {
      setForm((prev) => ({ ...prev, service: serviceFromUrl }))
    }
  }, [searchParams])

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!form.name || !form.email || !form.service || !form.message) {
      alert('Please fill all fields')
      return
    }

    setLoading(true)

    try {
      await emailjs.send(
        'service_wmzv6vh',
        'template_59kz6gm',
        {
          name: form.name,
          email: form.email,
          service: form.service,
          message: form.message,
        },
        'wSjDKC-BHzHgGl1s7'
      )

      const whatsappMessage = `
🚀 New Project Inquiry

👤 Name: ${form.name}
📧 Email: ${form.email}
💼 Service: ${form.service}

📝 Project Details:
${form.message}
      `

      const whatsappUrl = `https://wa.me/923416058248?text=${encodeURIComponent(whatsappMessage)}`

      setSent(true)

      setForm({ name: '', email: '', service: '', message: '' })

      window.open(whatsappUrl, '_blank')
    } catch (error) {
      console.error(error)
      alert(error?.text || error?.message || 'Failed to send message')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="pt-24 bg-black min-h-screen text-white">

      {/* HEADER */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <span className="text-orange-500 uppercase tracking-[0.3em] text-sm font-bold">
            Let's Talk
          </span>
          <h1 className="mt-6 text-5xl md:text-7xl font-black leading-tight">
            Get in Touch
          </h1>
          <p className="mt-5 text-white/50 text-xl max-w-2xl">
            Ready to build something extraordinary? Tell us about your project.
          </p>
        </div>
      </section>

      {/* MAIN */}
      <section className="px-6 pb-28">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* LEFT */}
          <div className="space-y-6">
            {[
              { icon: '⚡', title: 'Fast Delivery', desc: 'Projects delivered quickly without sacrificing quality.' },
              { icon: '💬', title: 'Clear Communication', desc: 'Daily updates and transparent workflow.' },
              { icon: '🔧', title: 'Post-Launch Support', desc: 'Free support after project delivery.' },
              { icon: '💡', title: 'Strategic Thinking', desc: 'We focus on business growth, not just code.' },
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-2xl border border-white/10 bg-white/[0.03]">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="text-xl font-black mb-2">{item.title}</h3>
                <p className="text-white/50">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* RIGHT */}
          <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-8">
            {sent ? (
              <div className="text-center py-20">
                <div className="text-7xl mb-5">✅</div>
                <h2 className="text-4xl font-black text-orange-500 mb-4">Message Sent!</h2>
                <p className="text-white/50">We'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">

                <input
                  type="text"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 outline-none text-white placeholder-white/30 focus:border-orange-500/50 transition-colors"
                />

                <input
                  type="email"
                  placeholder="Your Email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 outline-none text-white placeholder-white/30 focus:border-orange-500/50 transition-colors"
                />

                <select
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                  className="w-full bg-[#111] border border-white/10 rounded-2xl px-5 py-4 outline-none text-white focus:border-orange-500/50 transition-colors"
                >
                  <option value="" disabled>Select a Service</option>

                  <optgroup label="── AI & Automation">
                    <option>AI Chatbot Integration</option>
                    <option>Custom Business Automation Chatbots</option>
                    <option>AI Business Automation Tools</option>
                    <option>AI Email & Marketing Automation</option>
                    <option>AI Document & Data Tools</option>
                    <option>WhatsApp & Messenger Chatbots</option>
                  </optgroup>

                  <optgroup label="── Websites & Stores">
                    <option>Restaurant & Food Business Websites</option>
                    <option>Small Business Websites</option>
                    <option>E-Commerce & Online Stores</option>
                    <option>Business Dashboard & Admin Panels</option>
                  </optgroup>

                  <optgroup label="── Development">
                    <option>Frontend Development</option>
                    <option>Full Stack Web Development</option>
                    <option>Desktop & System Applications</option>
                  </optgroup>

                  <optgroup label="── Other">
                    <option>Custom / Not Listed</option>
                  </optgroup>
                </select>

                {form.service && (
                  <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-orange-500/10 border border-orange-500/20">
                    <span className="text-orange-400 text-xs font-bold uppercase tracking-widest">Selected:</span>
                    <span className="text-orange-300 text-sm font-semibold">{form.service}</span>
                  </div>
                )}

                <textarea
                  rows={6}
                  placeholder="Tell us about your project..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 outline-none resize-none text-white placeholder-white/30 focus:border-orange-500/50 transition-colors"
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-5 bg-orange-600 hover:bg-orange-500 disabled:opacity-50 rounded-2xl font-black tracking-widest uppercase transition-all duration-200 hover:scale-[1.02]"
                >
                  {loading ? 'Sending...' : 'Send Message →'}
                </button>

              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}