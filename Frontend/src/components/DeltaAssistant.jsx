import { useState, useEffect, useRef, useCallback } from 'react'

/* ═══════════════════════════════════════════════════════════
   DELTA DEVELOPERS — AI CHAT WIDGET
   Brand: Lime #a1da30 | Dark #0c1208 | Outfit + Space Grotesk
═══════════════════════════════════════════════════════════ */

const BRAND = '#a1da30'
const BRAND_DIM = 'rgba(161,218,48,'
const BG_DEEP = '#0c1208'
const BG_MID = '#111a08'
const BG_CARD = '#0f1a09'

const QUICK_REPLIES = [
  'I need a website for my business',
  'How much does it cost?',
  'I want to automate my work',
  'I need a WhatsApp chatbot',
]

/* ─── Canvas Particle Background ───────────────────────── */
const ParticleCanvas = () => {
  const canvasRef = useRef(null)
  const animRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let W = canvas.offsetWidth
    let H = canvas.offsetHeight
    canvas.width = W
    canvas.height = H

    const resize = () => {
      W = canvas.offsetWidth
      H = canvas.offsetHeight
      canvas.width = W
      canvas.height = H
    }
    window.addEventListener('resize', resize)

    // Particles
    const PARTICLES = Array.from({ length: 38 }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 1.8 + 0.4,
      vx: (Math.random() - 0.5) * 0.28,
      vy: (Math.random() - 0.5) * 0.28,
      alpha: Math.random() * 0.55 + 0.1,
    }))

    // Grid lines
    const GRID_LINES = []
    const GRID_SPACING = 36
    for (let x = 0; x < 600; x += GRID_SPACING) GRID_LINES.push({ type: 'v', pos: x })
    for (let y = 0; y < 700; y += GRID_SPACING) GRID_LINES.push({ type: 'h', pos: y })

    // Scanline
    let scanY = 0

    let frame = 0
    const draw = () => {
      animRef.current = requestAnimationFrame(draw)
      frame++
      ctx.clearRect(0, 0, W, H)

      // Grid
      ctx.lineWidth = 0.5
      GRID_LINES.forEach(l => {
        ctx.strokeStyle = `rgba(161,218,48,0.045)`
        ctx.beginPath()
        if (l.type === 'v') { ctx.moveTo(l.pos, 0); ctx.lineTo(l.pos, H) }
        else { ctx.moveTo(0, l.pos); ctx.lineTo(W, l.pos) }
        ctx.stroke()
      })

      // Scanline sweep
      scanY = (scanY + 0.6) % (H + 120)
      const grad = ctx.createLinearGradient(0, scanY - 60, 0, scanY + 60)
      grad.addColorStop(0, 'rgba(161,218,48,0)')
      grad.addColorStop(0.5, 'rgba(161,218,48,0.04)')
      grad.addColorStop(1, 'rgba(161,218,48,0)')
      ctx.fillStyle = grad
      ctx.fillRect(0, scanY - 60, W, 120)

      // Particles + connections
      PARTICLES.forEach(p => {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0) p.x = W
        if (p.x > W) p.x = 0
        if (p.y < 0) p.y = H
        if (p.y > H) p.y = 0

        // Pulse alpha
        p.alpha = 0.15 + 0.35 * Math.abs(Math.sin(frame * 0.012 + p.x))

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(161,218,48,${p.alpha})`
        ctx.fill()
      })

      // Connection lines between close particles
      for (let i = 0; i < PARTICLES.length; i++) {
        for (let j = i + 1; j < PARTICLES.length; j++) {
          const dx = PARTICLES[i].x - PARTICLES[j].x
          const dy = PARTICLES[i].y - PARTICLES[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 90) {
            ctx.strokeStyle = `rgba(161,218,48,${0.08 * (1 - dist / 90)})`
            ctx.lineWidth = 0.6
            ctx.beginPath()
            ctx.moveTo(PARTICLES[i].x, PARTICLES[i].y)
            ctx.lineTo(PARTICLES[j].x, PARTICLES[j].y)
            ctx.stroke()
          }
        }
      }

      // Corner glow orbs
      const orb1 = ctx.createRadialGradient(0, 0, 0, 0, 0, 180)
      orb1.addColorStop(0, 'rgba(161,218,48,0.07)')
      orb1.addColorStop(1, 'rgba(161,218,48,0)')
      ctx.fillStyle = orb1
      ctx.fillRect(0, 0, 180, 180)

      const orb2 = ctx.createRadialGradient(W, H, 0, W, H, 160)
      orb2.addColorStop(0, 'rgba(161,218,48,0.05)')
      orb2.addColorStop(1, 'rgba(161,218,48,0)')
      ctx.fillStyle = orb2
      ctx.fillRect(W - 160, H - 160, 160, 160)
    }

    draw()
    return () => {
      cancelAnimationFrame(animRef.current)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute', inset: 0,
        width: '100%', height: '100%',
        pointerEvents: 'none', zIndex: 0,
        borderRadius: 'inherit',
      }}
    />
  )
}

/* ─── Icons ─────────────────────────────────────────────── */
const SendIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
    stroke={BG_DEEP} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <line x1="22" y1="2" x2="11" y2="13" />
    <polygon points="22 2 15 22 11 13 2 9 22 2" fill={BG_DEEP} />
  </svg>
)

const XIcon = ({ size = 16, color = 'rgba(255,255,255,0.55)' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke={color} strokeWidth="2.5" strokeLinecap="round">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
)

/* ─── FAB Icon: Delta D ──────────────────────────────────── */
const DIcon = ({ size = 26 }) => (
  <svg width={size} height={size} viewBox="0 0 44 44" fill="none">
    <path
      d="M13 11H21.8C28.8 11 34.5 16.7 34.5 23C34.5 29.3 28.8 35 21.8 35H13V11Z"
      fill="none" stroke={BG_DEEP} strokeWidth="2.6"
      strokeLinejoin="round" strokeLinecap="round"
    />
    <path
      d="M17.5 16.5H21.8C26.1 16.5 29.5 19.4 29.5 23C29.5 26.6 26.1 29.5 21.8 29.5H17.5V16.5Z"
      fill={`${BG_DEEP}55`}
    />
  </svg>
)

/* ─── Avatar ─────────────────────────────────────────────── */
const BotAvatar = () => (
  <div style={{
    width: 42, height: 42, borderRadius: 13,
    background: BRAND,
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    flexShrink: 0,
    position: 'relative', overflow: 'hidden',
    boxShadow: `0 0 0 2px ${BRAND_DIM}0.25), 0 4px 16px ${BRAND_DIM}0.2)`,
  }}>
    <div style={{
      position: 'absolute', top: -12, left: -8,
      width: 16, height: 80,
      background: 'rgba(255,255,255,0.25)',
      transform: 'rotate(28deg)',
      animation: 'ddAvatarShimmer 3s ease-in-out infinite',
      pointerEvents: 'none',
    }} />
    <DIcon size={22} />
  </div>
)

/* ─── Typing Dots ────────────────────────────────────────── */
const TypingDots = () => (
  <div style={{ display: 'flex', gap: 5, alignItems: 'center', padding: '2px 0' }}>
    {[0, 1, 2].map(i => (
      <div key={i} style={{
        width: 7, height: 7, borderRadius: '50%',
        background: BRAND,
        animation: 'ddTyping 1.3s ease-in-out infinite',
        animationDelay: `${i * 0.19}s`,
        opacity: 0.3,
      }} />
    ))}
  </div>
)

/* ═══════════════════════════════════════════════════════════
   MAIN COMPONENT
═══════════════════════════════════════════════════════════ */
export default function DeltaAssistant() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([{
    role: 'assistant',
    content: "Hey! 👋 I'm Delta Assistant.\n\nHow can I help your business today?",
    time: new Date(),
  }])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [hasUnread, setHasUnread] = useState(false)
  const [fabHover, setFabHover] = useState(false)

  const messagesEndRef = useRef(null)
  const inputRef = useRef(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isTyping])

  useEffect(() => {
    if (!isOpen && messages.length > 1) setHasUnread(true)
  }, [messages, isOpen])

  const openChat = () => {
    setIsOpen(true)
    setHasUnread(false)
    setTimeout(() => inputRef.current?.focus(), 280)
  }

  const closeChat = () => setIsOpen(false)

  const sendMessage = useCallback(async text => {
    const userText = (text ?? input).trim()
    if (!userText || isTyping) return
    setInput('')
    const userMessage = { role: 'user', content: userText, time: new Date() }
    const updatedMessages = [...messages, userMessage]
    setMessages(updatedMessages)
    setIsTyping(true)
    try {
      const res = await fetch('https://delta-backend-production-3ba3.up.railway.app/api/chat/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: updatedMessages.map(m => ({ role: m.role, content: m.content })),
        }),
      })
      const data = await res.json()
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: data.reply || 'No response received.',
        time: new Date(),
      }])
    } catch {
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: '⚡ Connection failed. Please try again in a moment.',
        time: new Date(),
      }])
    } finally {
      setIsTyping(false)
    }
  }, [input, isTyping, messages])

  const handleKeyDown = e => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage() }
  }

  const fmt = d => d?.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) || ''

  return (
    <>
      {/* ── Global Styles ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@400;500;600;700&display=swap');

        /* ── Keyframes ── */
        @keyframes ddTyping {
          0%,60%,100%{ transform:translateY(0); opacity:.3; }
          30%{ transform:translateY(-6px); opacity:1; }
        }
        @keyframes ddSlideUp {
          from{ opacity:0; transform:translateY(18px) scale(0.96); }
          to  { opacity:1; transform:translateY(0) scale(1); }
        }
        @keyframes ddFadeIn {
          from{ opacity:0; transform:translateY(9px); }
          to  { opacity:1; transform:translateY(0); }
        }
        @keyframes ddPulse {
          0%  { transform:scale(1); opacity:.6; }
          70% { transform:scale(1.9); opacity:0; }
          100%{ transform:scale(1.9); opacity:0; }
        }
        @keyframes ddBlink {
          0%,100%{ opacity:1; box-shadow:0 0 8px rgba(161,218,48,0.9); }
          50%    { opacity:.25; box-shadow:0 0 3px rgba(161,218,48,0.3); }
        }
        @keyframes ddAvatarShimmer {
          0%  { left:-30px; }
          60% { left:60px; }
          100%{ left:60px; }
        }
        @keyframes ddFabShimmer {
          0%  { left:-50px; }
          55% { left:90px; }
          100%{ left:90px; }
        }
        @keyframes ddOrbit {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes ddHdrLine {
          0%  { transform:translateX(-100%); }
          100%{ transform:translateX(400%); }
        }
        @keyframes ddGlow {
          0%,100%{ box-shadow:0 0 0 0 rgba(161,218,48,0), 0 8px 30px rgba(30,60,10,0.5); }
          50%    { box-shadow:0 0 20px 6px rgba(161,218,48,0.22), 0 8px 30px rgba(30,60,10,0.5); }
        }
        @keyframes ddBadgePop {
          0%  { transform:scale(0); }
          70% { transform:scale(1.18); }
          100%{ transform:scale(1); }
        }
        @keyframes ddQuickFade {
          from{ opacity:0; transform:translateY(6px); }
          to  { opacity:1; transform:translateY(0); }
        }
        @keyframes ddCornerPulse {
          0%,100%{ opacity:0.4; }
          50%{ opacity:1; }
        }

        /* ── Component classes ── */
        .dd-window {
          animation: ddSlideUp 0.38s cubic-bezier(0.22,1,0.36,1) forwards;
          font-family: 'Outfit', sans-serif;
        }
        .dd-msg { animation: ddFadeIn 0.3s ease forwards; }

        .dd-scroll::-webkit-scrollbar { width: 3px; }
        .dd-scroll::-webkit-scrollbar-track { background: transparent; }
        .dd-scroll::-webkit-scrollbar-thumb {
          background: rgba(161,218,48,0.22);
          border-radius: 8px;
        }

        .dd-input {
          font-family: 'Outfit', sans-serif !important;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .dd-input:focus {
          outline: none !important;
          border-color: rgba(161,218,48,0.55) !important;
          box-shadow: 0 0 0 3px rgba(161,218,48,0.08) !important;
        }
        .dd-input::placeholder { color: rgba(255,255,255,0.18); }

        .dd-send {
          transition: transform 0.18s, box-shadow 0.18s;
        }
        .dd-send:hover:not(:disabled) {
          transform: scale(1.1);
          box-shadow: 0 6px 24px rgba(161,218,48,0.45) !important;
        }
        .dd-send:disabled { opacity: 0.28; cursor: not-allowed; }

        .dd-quick {
          transition: all 0.2s;
          font-family: 'Outfit', sans-serif;
          animation: ddQuickFade 0.35s ease forwards;
        }
        .dd-quick:hover {
          background: rgba(161,218,48,0.16) !important;
          border-color: rgba(161,218,48,0.55) !important;
          color: rgba(255,255,255,0.9) !important;
          transform: translateY(-2px);
          box-shadow: 0 4px 18px rgba(161,218,48,0.15);
        }

        .dd-close-btn {
          transition: background 0.18s;
        }
        .dd-close-btn:hover {
          background: rgba(255,255,255,0.14) !important;
        }

        .dd-fab-btn {
          transition: transform 0.22s cubic-bezier(0.34,1.56,0.64,1);
        }
        .dd-fab-btn:hover { transform: scale(1.12) !important; }

        .dd-hdr-shine {
          position: absolute; top: 0; height: 100%;
          width: 35%; left: -35%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.04), transparent);
          animation: ddHdrLine 5s ease-in-out infinite 2s;
          pointer-events: none;
        }
      `}</style>

      {/* ══ FAB BUTTON ════════════════════════════════════ */}
      <div style={{ position: 'fixed', top: 28, right: 28, zIndex: 9999 }}>

        {/* Tooltip */}
        {!isOpen && fabHover && (
          <div style={{
            position: 'absolute', top: 78, right: 0,
            background: '#111a08',
            border: `1px solid ${BRAND_DIM}0.22)`,
            borderRadius: 12, padding: '8px 14px',
            color: 'rgba(255,255,255,0.82)', fontSize: 12,
            fontFamily: "'Outfit', sans-serif", fontWeight: 500,
            whiteSpace: 'nowrap',
            boxShadow: '0 12px 32px rgba(0,0,0,0.6)',
            pointerEvents: 'none',
            letterSpacing: '0.01em',
            zIndex: 10,
          }}>
            💬 Chat with Delta Assistant
            <div style={{
              position: 'absolute', top: -6, right: 22,
              width: 10, height: 10,
              background: '#111a08',
              border: `1px solid ${BRAND_DIM}0.22)`,
              borderBottom: 'none', borderRight: 'none',
              transform: 'rotate(45deg)',
            }} />
          </div>
        )}

        {/* Pulse rings */}
        {!isOpen && [0, 0.75, 1.5].map((delay, i) => (
          <div key={i} style={{
            position: 'absolute', inset: 0, borderRadius: '50%',
            border: `1.5px solid ${BRAND_DIM}0.38)`,
            animation: `ddPulse 2.5s ease-out ${delay}s infinite`,
            pointerEvents: 'none',
          }} />
        ))}

        {/* Orbit ring */}
        {!isOpen && (
          <div style={{
            position: 'absolute', inset: -14,
            borderRadius: '50%',
            border: `1px dashed ${BRAND_DIM}0.18)`,
            animation: 'ddOrbit 10s linear infinite',
            pointerEvents: 'none',
          }}>
            <div style={{
              position: 'absolute', top: -3.5, left: '50%', marginLeft: -3.5,
              width: 7, height: 7, borderRadius: '50%',
              background: BRAND,
              boxShadow: `0 0 10px ${BRAND}`,
            }} />
          </div>
        )}

        {/* FAB */}
        <button
          className="dd-fab-btn"
          onMouseEnter={() => setFabHover(true)}
          onMouseLeave={() => setFabHover(false)}
          onClick={() => isOpen ? closeChat() : openChat()}
          style={{
            width: 64, height: 64,
            borderRadius: '50%',
            border: `2px solid ${BRAND_DIM}0.3)`,
            cursor: 'pointer',
            background: BG_DEEP,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            position: 'relative', overflow: 'hidden',
            animation: 'ddGlow 3s ease-in-out infinite',
          }}
        >
          {/* Inner lime circle */}
          <div style={{
            position: 'absolute', inset: 6,
            borderRadius: '50%',
            background: BRAND,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            overflow: 'hidden',
          }}>
            {/* Shimmer */}
            <div style={{
              position: 'absolute', top: -12, left: -20,
              width: 14, height: 80,
              background: 'rgba(255,255,255,0.3)',
              transform: 'rotate(28deg)',
              animation: 'ddFabShimmer 2.8s ease-in-out infinite',
              pointerEvents: 'none',
            }} />
            {isOpen
              ? <XIcon size={18} color={BG_DEEP} />
              : <DIcon size={24} />
            }
          </div>
        </button>

        {/* Unread badge */}
        {hasUnread && !isOpen && (
          <div style={{
            position: 'absolute', top: -5, right: -5,
            width: 22, height: 22, borderRadius: '50%',
            background: '#ef4444',
            color: 'white', fontSize: 11, fontWeight: 700,
            fontFamily: "'Outfit', sans-serif",
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            border: `2.5px solid ${BG_DEEP}`,
            boxShadow: '0 2px 10px rgba(239,68,68,0.7)',
            animation: 'ddBadgePop 0.35s cubic-bezier(0.34,1.56,0.64,1) forwards',
          }}>1</div>
        )}
      </div>

      {/* ══ CHAT WINDOW ═══════════════════════════════════ */}
      {isOpen && (
        <div className="dd-window" style={{
          position: 'fixed',
          top: 108, right: 28,
          width: 420,
          maxWidth: 'calc(100vw - 36px)',
          height: 610,
          background: BG_DEEP,
          borderRadius: 24,
          overflow: 'hidden',
          border: `1px solid ${BRAND_DIM}0.16)`,
          display: 'flex', flexDirection: 'column',
          zIndex: 9998,
          boxShadow: [
            '0 40px 100px rgba(0,0,0,0.8)',
            '0 0 0 1px rgba(255,255,255,0.04)',
            'inset 0 1px 0 rgba(255,255,255,0.06)',
          ].join(','),
        }}>

          {/* ── HEADER ── */}
          <div style={{
            padding: '14px 16px',
            background: BG_MID,
            display: 'flex', alignItems: 'center', gap: 12,
            borderBottom: `1px solid ${BRAND_DIM}0.1)`,
            flexShrink: 0,
            position: 'relative', overflow: 'hidden',
          }}>
            <div className="dd-hdr-shine" />
            {/* Header glow orbs */}
            <div style={{
              position: 'absolute', top: -50, left: -30,
              width: 180, height: 180,
              background: `radial-gradient(circle, ${BRAND_DIM}0.07) 0%, transparent 65%)`,
              pointerEvents: 'none',
            }} />
            <div style={{
              position: 'absolute', bottom: -40, right: -10,
              width: 140, height: 140,
              background: `radial-gradient(circle, ${BRAND_DIM}0.04) 0%, transparent 65%)`,
              pointerEvents: 'none',
            }} />

            <BotAvatar />

            <div style={{ flex: 1 }}>
              <div style={{
                color: '#e8f5d0',
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 800, fontSize: 14,
                letterSpacing: '0.07em', textTransform: 'uppercase',
              }}>Delta Assistant</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 3 }}>
                <div style={{
                  width: 7, height: 7, borderRadius: '50%',
                  background: BRAND,
                  animation: 'ddBlink 3s ease-in-out infinite',
                }} />
                <span style={{
                  fontSize: 11, color: 'rgba(255,255,255,0.32)',
                  fontFamily: "'Space Grotesk', sans-serif", fontWeight: 400,
                }}>Online · Replies instantly</span>
              </div>
            </div>

            {/* AI badge */}
            <div style={{
              fontSize: 9, fontWeight: 700,
              color: BRAND,
              fontFamily: "'Space Grotesk', monospace",
              letterSpacing: '0.1em',
              background: `${BRAND_DIM}0.1)`,
              border: `1px solid ${BRAND_DIM}0.22)`,
              padding: '3px 8px', borderRadius: 7,
              marginRight: 4,
              textTransform: 'uppercase',
            }}>AI</div>

            {/* Close */}
            <button
              className="dd-close-btn"
              onClick={closeChat}
              title="Close chat"
              style={{
                width: 32, height: 32, borderRadius: 9,
                border: 'none',
                background: 'rgba(255,255,255,0.06)',
                cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}
            >
              <XIcon size={13} />
            </button>
          </div>

          {/* ── MESSAGES AREA ── */}
          <div className="dd-scroll" style={{
            flex: 1, overflowY: 'auto',
            padding: '16px 14px',
            display: 'flex', flexDirection: 'column', gap: 14,
            background: BG_DEEP,
            position: 'relative',
          }}>
            {/* Animated canvas background */}
            <ParticleCanvas />

            {/* Corner accent lines */}
            <div style={{
              position: 'absolute', top: 12, left: 12,
              width: 20, height: 20,
              borderTop: `1.5px solid ${BRAND_DIM}0.3)`,
              borderLeft: `1.5px solid ${BRAND_DIM}0.3)`,
              pointerEvents: 'none', zIndex: 1,
              animation: 'ddCornerPulse 3s ease-in-out infinite',
            }} />
            <div style={{
              position: 'absolute', bottom: 12, right: 12,
              width: 20, height: 20,
              borderBottom: `1.5px solid ${BRAND_DIM}0.3)`,
              borderRight: `1.5px solid ${BRAND_DIM}0.3)`,
              pointerEvents: 'none', zIndex: 1,
              animation: 'ddCornerPulse 3s ease-in-out infinite 1.5s',
            }} />

            {/* Messages */}
            {messages.map((msg, i) => {
              const isUser = msg.role === 'user'
              return (
                <div key={i} className="dd-msg" style={{
                  display: 'flex', flexDirection: 'column',
                  alignItems: isUser ? 'flex-end' : 'flex-start',
                  position: 'relative', zIndex: 1,
                }}>
                  <div style={{
                    fontSize: 9, fontWeight: 700,
                    letterSpacing: '0.14em', textTransform: 'uppercase',
                    marginBottom: 5,
                    fontFamily: "'Space Grotesk', monospace",
                    color: isUser ? `${BRAND_DIM}0.55)` : 'rgba(255,255,255,0.2)',
                  }}>
                    {isUser ? 'You' : '△ Delta'}
                  </div>

                  <div style={{
                    maxWidth: '80%',
                    padding: '11px 15px',
                    borderRadius: isUser ? '18px 3px 18px 18px' : '3px 18px 18px 18px',
                    background: isUser ? BRAND : 'rgba(255,255,255,0.045)',
                    color: isUser ? BG_DEEP : 'rgba(255,255,255,0.82)',
                    fontSize: 13.5, lineHeight: 1.68,
                    whiteSpace: 'pre-wrap',
                    fontFamily: "'Outfit', sans-serif",
                    fontWeight: isUser ? 600 : 400,
                    border: isUser ? 'none' : `1px solid ${BRAND_DIM}0.1)`,
                    boxShadow: isUser
                      ? `0 5px 20px ${BRAND_DIM}0.28), inset 0 1px 0 rgba(255,255,255,0.2)`
                      : '0 2px 10px rgba(0,0,0,0.3)',
                    position: 'relative', overflow: 'hidden',
                    backdropFilter: 'blur(4px)',
                  }}>
                    {isUser && (
                      <div style={{
                        position: 'absolute', inset: 0,
                        background: 'linear-gradient(135deg, rgba(255,255,255,0.14) 0%, transparent 55%)',
                        pointerEvents: 'none',
                      }} />
                    )}
                    {msg.content}
                  </div>

                  <span style={{
                    fontSize: 9,
                    color: 'rgba(255,255,255,0.14)',
                    marginTop: 4,
                    fontFamily: "'Space Grotesk', monospace",
                  }}>{fmt(msg.time)}</span>
                </div>
              )
            })}

            {/* Typing indicator */}
            {isTyping && (
              <div className="dd-msg" style={{ position: 'relative', zIndex: 1 }}>
                <div style={{
                  fontSize: 9, fontWeight: 700, letterSpacing: '0.14em',
                  textTransform: 'uppercase', marginBottom: 5,
                  fontFamily: "'Space Grotesk', monospace",
                  color: 'rgba(255,255,255,0.2)',
                }}>△ Delta</div>
                <div style={{
                  padding: '11px 15px',
                  borderRadius: '3px 18px 18px 18px',
                  background: 'rgba(255,255,255,0.045)',
                  border: `1px solid ${BRAND_DIM}0.1)`,
                  width: 'fit-content',
                  backdropFilter: 'blur(4px)',
                }}>
                  <TypingDots />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* ── QUICK REPLIES ── */}
          {messages.length <= 2 && (
            <div style={{
              padding: '10px 14px 8px',
              display: 'flex', flexWrap: 'wrap', gap: 7,
              background: BG_MID,
              borderTop: `1px solid ${BRAND_DIM}0.07)`,
              flexShrink: 0,
            }}>
              <div style={{
                width: '100%', fontSize: 9, fontWeight: 700,
                color: 'rgba(255,255,255,0.18)', letterSpacing: '0.14em',
                fontFamily: "'Space Grotesk', monospace",
                textTransform: 'uppercase', marginBottom: 2,
              }}>Quick start</div>
              {QUICK_REPLIES.map((item, i) => (
                <button
                  key={i}
                  className="dd-quick"
                  onClick={() => sendMessage(item)}
                  style={{
                    border: `1px solid ${BRAND_DIM}0.2)`,
                    padding: '6px 12px',
                    borderRadius: 20, cursor: 'pointer',
                    background: `${BRAND_DIM}0.06)`,
                    color: 'rgba(255,255,255,0.6)',
                    fontSize: 11.5, fontWeight: 500,
                    animationDelay: `${i * 0.07}s`,
                    opacity: 0,
                  }}
                >{item}</button>
              ))}
            </div>
          )}

          {/* ── INPUT ROW ── */}
          <div style={{
            padding: '10px 12px',
            display: 'flex', gap: 9, alignItems: 'flex-end',
            background: BG_MID,
            borderTop: `1px solid rgba(255,255,255,0.05)`,
            flexShrink: 0,
          }}>
            <textarea
              ref={inputRef}
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask me anything..."
              rows={1}
              className="dd-input"
              style={{
                flex: 1, resize: 'none',
                borderRadius: 13,
                border: `1px solid rgba(255,255,255,0.08)`,
                background: 'rgba(255,255,255,0.04)',
                padding: '10px 14px',
                color: 'white', fontSize: 13.5, lineHeight: 1.5,
              }}
            />
            <button
              className="dd-send"
              onClick={() => sendMessage()}
              disabled={!input.trim() || isTyping}
              style={{
                width: 44, height: 44, flexShrink: 0,
                borderRadius: 13, border: 'none', cursor: 'pointer',
                background: BRAND,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: `0 4px 18px ${BRAND_DIM}0.35)`,
              }}
            >
              <SendIcon />
            </button>
          </div>

          {/* ── FOOTER ── */}
          <div style={{
            textAlign: 'center', padding: '5px 0 10px',
            background: BG_MID,
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 5,
            flexShrink: 0,
          }}>
            <svg width="9" height="9" viewBox="0 0 36 36" fill="none">
              <path
                d="M10 8H19C24.5228 8 29 12.4772 29 18C29 23.5228 24.5228 28 19 28H10V8Z"
                stroke={`${BRAND_DIM}0.35)`} strokeWidth="2.5" fill="none" strokeLinejoin="round"
              />
            </svg>
            <span style={{
              fontSize: 10, color: 'rgba(255,255,255,0.12)',
              fontFamily: "'Space Grotesk', monospace", letterSpacing: '0.04em',
            }}>
              Powered by{' '}
              <span style={{ color: `${BRAND_DIM}0.4)`, fontWeight: 600 }}>
                Delta Developers
              </span>
            </span>
          </div>

        </div>
      )}
    </>
  )
}