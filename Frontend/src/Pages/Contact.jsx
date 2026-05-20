import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [searchParams] = useSearchParams();

  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const serviceFromUrl = searchParams.get("service");

    if (serviceFromUrl) {
      setForm((prev) => ({
        ...prev,
        service: serviceFromUrl,
      }));
    }
  }, [searchParams]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !form.name ||
      !form.email ||
      !form.service ||
      !form.message
    ) {
      alert("Please fill all fields");
      return;
    }

    setLoading(true);

    try {
      await emailjs.send(
        "service_5tsjxj4",
        "template_c0ew6nk",
        {
          name: form.name,
          email: form.email,
          service: form.service,
          message: form.message,
          to_email: "deltadevelopers.team@gmail.com",
        },
        "SL8N5-GMhS8DEjQhI"
      );

      const whatsappMessage = `
🚀 New Project Inquiry

👤 Name: ${form.name}
📧 Email: ${form.email}
💼 Service: ${form.service}

📝 Project Details:
${form.message}
      `;

      const whatsappUrl = `https://wa.me/19132035960?text=${encodeURIComponent(
        whatsappMessage
      )}`;

      setSent(true);

      setForm({
        name: "",
        email: "",
        service: "",
        message: "",
      });

      window.open(whatsappUrl, "_blank");
    } catch (error) {
      console.error(error);

      alert(
        error?.text ||
          error?.message ||
          "Failed to send message"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="relative min-h-screen bg-[#060f07] text-white overflow-hidden">

      {/* BACKGROUND GLOW */}

      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#b8ff57]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#0d3a0f]/20 blur-[120px] rounded-full pointer-events-none" />

      {/* HERO */}

      <section className="relative pt-36 pb-20 px-6 border-b border-[#1e3a20]">
        <div className="max-w-7xl mx-auto">

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#2a4a2c] bg-[#0d1f0e] text-[#b8ff57] text-xs font-bold tracking-[0.25em] mb-8">
            <span className="w-2 h-2 rounded-full bg-[#b8ff57] animate-pulse" />
            START YOUR PROJECT
          </div>

          <h1 className="font-black leading-none text-5xl md:text-7xl max-w-4xl">
            Let's Build Something
            <span className="block text-[#b8ff57] italic font-serif">
              Exceptional
            </span>
          </h1>

          <p className="mt-8 text-[#7f9b82] text-lg max-w-2xl leading-relaxed">
            We craft AI systems, premium websites,
            automations, and scalable digital products
            designed to increase revenue and elevate your
            business.
          </p>
        </div>
      </section>

      {/* CONTENT */}

      <section className="relative px-6 py-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[0.9fr_1.1fr] gap-10">

          {/* LEFT SIDE */}

          <div className="space-y-5">

            {/* INFO CARD */}

            <div className="rounded-3xl border border-[#1e3a20] bg-[#0d1f0e]/70 backdrop-blur-xl p-8">

              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-[#b8ff57] text-black flex items-center justify-center text-xl">
                  ⚡
                </div>

                <div>
                  <h3 className="font-black text-xl">
                    Why Work With Us
                  </h3>

                  <p className="text-[#6f8d72] text-sm mt-1">
                    Focused on growth, speed, and premium
                    execution.
                  </p>
                </div>
              </div>

              <div className="space-y-5">

                {[
                  {
                    title: "Fast Delivery",
                    desc: "High-quality projects delivered quickly without compromising design or performance.",
                  },
                  {
                    title: "Premium UI/UX",
                    desc: "Modern interfaces built to increase trust, engagement, and conversions.",
                  },
                  {
                    title: "Business-Focused",
                    desc: "Every feature is designed around real business outcomes and ROI.",
                  },
                  {
                    title: "Long-Term Support",
                    desc: "Ongoing support, improvements, and scaling assistance after launch.",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex gap-4 border border-[#1a311b] bg-[#0a160b] rounded-2xl p-5 hover:border-[#b8ff57]/40 transition-all"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#b8ff57]/10 border border-[#b8ff57]/20 flex items-center justify-center text-[#b8ff57] font-black">
                      0{i + 1}
                    </div>

                    <div>
                      <h4 className="font-bold text-white">
                        {item.title}
                      </h4>

                      <p className="text-sm text-[#6f8d72] mt-1 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* QUICK STATS */}

            <div className="grid grid-cols-3 gap-4">

              {[
                {
                  value: "50+",
                  label: "Projects",
                },
                {
                  value: "30+",
                  label: "Clients",
                },
                {
                  value: "24/7",
                  label: "Support",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-[#1e3a20] bg-[#0d1f0e]/70 backdrop-blur-xl p-5 text-center"
                >
                  <div className="text-2xl font-black text-[#b8ff57]">
                    {item.value}
                  </div>

                  <div className="text-xs tracking-widest text-[#6f8d72] uppercase mt-1">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FORM */}

          <div className="relative">

            <div className="absolute inset-0 bg-[#b8ff57]/5 blur-3xl rounded-[40px]" />

            <div className="relative rounded-[32px] border border-[#1e3a20] bg-[#0d1f0e]/80 backdrop-blur-2xl p-8 md:p-10 shadow-2xl shadow-black/50">

              {!sent ? (
                <>
                  <div className="mb-10">

                    <p className="text-[#b8ff57] text-xs font-bold tracking-[0.25em] uppercase mb-3">
                      Contact Form
                    </p>

                    <h2 className="text-4xl font-black leading-tight">
                      Tell Us About
                      <span className="block text-[#b8ff57]">
                        Your Vision
                      </span>
                    </h2>

                    <p className="text-[#6f8d72] mt-4 max-w-lg">
                      Share your project details and we'll
                      respond with strategy, timeline, and
                      the best solution for your business.
                    </p>
                  </div>

                  <form
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >

                    {/* NAME */}

                    <div>
                      <label className="block text-sm font-semibold text-[#d2e7d3] mb-3">
                        Full Name
                      </label>

                      <input
                        type="text"
                        placeholder="John Anderson"
                        value={form.name}
                        onChange={(e) =>
                          setForm({
                            ...form,
                            name: e.target.value,
                          })
                        }
                        className="w-full bg-[#09120a] border border-[#223724] rounded-2xl px-5 py-4 text-white placeholder-[#4f6a52] outline-none focus:border-[#b8ff57] transition-all"
                      />
                    </div>

                    {/* EMAIL */}

                    <div>
                      <label className="block text-sm font-semibold text-[#d2e7d3] mb-3">
                        Email Address
                      </label>

                      <input
                        type="email"
                        placeholder="you@example.com"
                        value={form.email}
                        onChange={(e) =>
                          setForm({
                            ...form,
                            email: e.target.value,
                          })
                        }
                        className="w-full bg-[#09120a] border border-[#223724] rounded-2xl px-5 py-4 text-white placeholder-[#4f6a52] outline-none focus:border-[#b8ff57] transition-all"
                      />
                    </div>

                    {/* SERVICE */}

                    <div>
                      <label className="block text-sm font-semibold text-[#d2e7d3] mb-3">
                        Select Service
                      </label>

                      <select
                        value={form.service}
                        onChange={(e) =>
                          setForm({
                            ...form,
                            service: e.target.value,
                          })
                        }
                        className="w-full bg-[#09120a] border border-[#223724] rounded-2xl px-5 py-4 text-white outline-none focus:border-[#b8ff57] transition-all"
                      >
                        <option value="" disabled>
                          Choose a Service
                        </option>

                        <optgroup label="AI & Automation">
                          <option>
                            AI Chatbot Integration
                          </option>

                          <option>
                            AI Business Automation
                          </option>

                          <option>
                            WhatsApp AI Chatbots
                          </option>

                          <option>
                            AI Email Automation
                          </option>
                        </optgroup>

                        <optgroup label="Web Development">
                          <option>
                            Business Website
                          </option>

                          <option>
                            E-Commerce Store
                          </option>

                          <option>
                            Dashboard & Admin Panel
                          </option>

                          <option>
                            Full Stack Web App
                          </option>
                        </optgroup>

                        <optgroup label="Other">
                          <option>
                            Custom Solution
                          </option>
                        </optgroup>
                      </select>
                    </div>

                    {/* MESSAGE */}

                    <div>
                      <label className="block text-sm font-semibold text-[#d2e7d3] mb-3">
                        Project Details
                      </label>

                      <textarea
                        rows={7}
                        placeholder="Tell us about your project goals, features, timeline, and business requirements..."
                        value={form.message}
                        onChange={(e) =>
                          setForm({
                            ...form,
                            message: e.target.value,
                          })
                        }
                        className="w-full bg-[#09120a] border border-[#223724] rounded-2xl px-5 py-4 text-white placeholder-[#4f6a52] outline-none resize-none focus:border-[#b8ff57] transition-all"
                      />
                    </div>

                    {/* BUTTON */}

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full h-16 rounded-2xl bg-[#b8ff57] text-black font-black tracking-widest uppercase hover:bg-[#d6ff8c] transition-all hover:scale-[1.01] disabled:opacity-50"
                    >
                      {loading
                        ? "Sending..."
                        : "Send Project Inquiry →"}
                    </button>

                    <p className="text-center text-sm text-[#5e775f]">
                      Average response time: under 24 hours
                    </p>
                  </form>
                </>
              ) : (
                <div className="py-24 text-center">

                  <div className="w-24 h-24 rounded-full bg-[#b8ff57]/10 border border-[#b8ff57]/20 flex items-center justify-center text-5xl mx-auto mb-8">
                    ✅
                  </div>

                  <h2 className="text-5xl font-black text-[#b8ff57] mb-5">
                    Message Sent
                  </h2>

                  <p className="text-[#7f9b82] text-lg max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out. We'll
                    review your project and contact you
                    shortly.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}