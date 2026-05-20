import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Services from "./Pages/Services";
import Portfolio from "./Pages/Portfolio";
import Expertise from "./Pages/Expertise";
import Contact from "./Pages/Contact";

import Navbar from "./components/Navbar";
import DeltaAssistant from "./components/DeltaAssistant";

import {
  Mail,
  Phone,
  MessageCircle,
  ExternalLink,
} from "lucide-react";

import "./App.css";

function Footer() {
  return (
    <footer className="relative bg-[#020b02] border-t border-[#1b3a1b] overflow-hidden">
      
      {/* GLOW EFFECT */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(180,255,80,0.08),transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-6 py-16">
        
        {/* TOP GRID */}
        <div className="grid md:grid-cols-4 gap-12 border-b border-[#163016] pb-12">
          
          {/* BRAND */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <img
                src="/delta_robotic_favicon.svg"
                alt="Delta Logo"
                className="w-12 h-12"
              />

              <div>
                <h2 className="text-white font-black tracking-wide text-lg">
                  DELTA
                  <span className="text-[#b8ff57]"> DEVELOPERS</span>
                </h2>

                <p className="text-[#5d7a5d] text-sm">
                  AI Automation Agency
                </p>
              </div>
            </div>

            <p className="text-[#7f9b7f] text-sm leading-relaxed">
              We build AI chatbots, automations, dashboards,
              CRM systems and modern web experiences that
              help businesses scale faster.
            </p>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="text-white font-bold mb-5 text-lg">
              Services
            </h3>

            <div className="flex flex-col gap-3 text-[#7f9b7f] text-sm">
              <a href="/services" className="hover:text-[#b8ff57] transition">
                AI Chatbots
              </a>

              <a href="/services" className="hover:text-[#b8ff57] transition">
                Business Automation
              </a>

              <a href="/services" className="hover:text-[#b8ff57] transition">
                CRM Systems
              </a>

              <a href="/services" className="hover:text-[#b8ff57] transition">
                Dashboards
              </a>

              <a href="/services" className="hover:text-[#b8ff57] transition">
                AI Calling Assistants
              </a>
            </div>
          </div>

          {/* OTHER SITES */}
          <div>
            <h3 className="text-white font-bold mb-5 text-lg">
              Our Platforms
            </h3>

            <div className="flex flex-col gap-4">
              
              <a
                href="https://delta-developer.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="group bg-[#071307] border border-[#193519] hover:border-[#b8ff57] rounded-xl p-4 transition-all"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-semibold">
                      Delta Developers
                    </p>

                    <p className="text-[#6d8b6d] text-xs">
                      Main Agency Website
                    </p>
                  </div>

                  <ExternalLink
                    size={16}
                    className="text-[#b8ff57]"
                  />
                </div>
              </a>

              <a
                href="https://delta-restaurants.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="group bg-[#071307] border border-[#193519] hover:border-[#b8ff57] rounded-xl p-4 transition-all"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-semibold">
                      Delta Restaurants
                    </p>

                    <p className="text-[#6d8b6d] text-xs">
                      Restaurant Automation
                    </p>
                  </div>

                  <ExternalLink
                    size={16}
                    className="text-[#b8ff57]"
                  />
                </div>
              </a>
            </div>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-white font-bold mb-5 text-lg">
              Contact
            </h3>

            <div className="flex flex-col gap-4">
              
              <a
                href="mailto:deltadevelopers.team@gmail.com"
                className="flex items-center gap-3 text-[#7f9b7f] hover:text-[#b8ff57] transition"
              >
                <Mail size={18} />
                <span className="text-sm">
                  deltadevelopers.team@gmail.com
                </span>
              </a>

              <a
                href="tel:+19132035960"
                className="flex items-center gap-3 text-[#7f9b7f] hover:text-[#b8ff57] transition"
              >
                <Phone size={18} />
                <span className="text-sm">
                  +1 (913) 203-5960
                </span>
              </a>

              <a
                href="https://wa.me/19132035960"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-[#7f9b7f] hover:text-[#b8ff57] transition"
              >
                <MessageCircle size={18} />
                <span className="text-sm">
                  WhatsApp Chat
                </span>
              </a>

              <a
                href="https://instagram.com/delt.adevelopers"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-[#7f9b7f] hover:text-[#b8ff57] transition"
              >
                <span className="text-lg">📸</span>

                <span className="text-sm">
                  @delt.adevelopers
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          
          <p className="text-[#5d7a5d] text-sm text-center md:text-left">
            © 2026 Delta Developers. All rights reserved.
          </p>

          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#b8ff57] animate-pulse" />

            <p className="text-[#7f9b7f] text-sm">
              Available Worldwide for AI Projects
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white font-sans">
        
        {/* NAVBAR */}
        <Navbar />

        {/* PAGES */}
        <div className="pt-24">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/expertise" element={<Expertise />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

        {/* FOOTER */}
        <Footer />

        {/* AI ASSISTANT */}
        <DeltaAssistant />
      </div>
    </Router>
  );
}