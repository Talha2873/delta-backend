import { useState, useEffect, useRef } from 'react'

const QUICK_REPLIES = [
  'I need a website for my business',
  'How much does it cost?',
  'I want to automate my work',
  'I need a WhatsApp chatbot',
]

/* ─── Icons ─────────────────────────────────────────── */

const SendIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="22" y1="2" x2="11" y2="13" />
    <polygon points="22 2 15 22 11 13 2 9 22 2" />
  </svg>
)

const CloseIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white"
    strokeWidth="2.5" strokeLinecap="round">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
)

const SmallCloseIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2.5" strokeLinecap="round">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
)

/* ── Premium D FAB Icon ── */
const DeltaDIcon = () => (
  <svg width="36" height="36" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="22" cy="22" r="20" stroke="rgba(255,255,255,0.18)" strokeWidth="1" />
    <circle cx="22" cy="22" r="13" stroke="rgba(255,255,255,0.06)" strokeWidth="0.8" />
    {/* Premium D letterform */}
    <path
      d="M14 12H21.5C27.8513 12 33 16.9249 33 23C33 29.0751 27.8513 34 21.5 34H14V12Z"
      fill="none" stroke="white" strokeWidth="2.2" strokeLinejoin="round" strokeLinecap="round"
    />
    {/* Inner fill */}
    <path
      d="M17.5 17H21.5C25.366 17 28.5 19.686 28.5 23C28.5 26.314 25.366 29 21.5 29H17.5V17Z"
      fill="rgba(255,255,255,0.18)"
    />
    {/* Gold accent dots */}
    <circle cx="22" cy="4.5" r="2" fill="rgba(255,210,100,0.92)" />
    <circle cx="6" cy="35" r="1.6" fill="rgba(255,210,100,0.78)" />
    <circle cx="38" cy="35" r="1.6" fill="rgba(255,210,100,0.78)" />
  </svg>
)

/* ── Typing Dots ── */
const TypingDots = () => (
  <div style={{ display: 'flex', gap: '5px', alignItems: 'center', padding: '2px 0' }}>
    {[0, 1, 2].map(i => (
      <div key={i} style={{
        width: '7px', height: '7px', borderRadius: '50%',
        background: '#f97316',
        animation: 'dtTyping 1.3s ease-in-out infinite',
        animationDelay: `${i * 0.19}s`,
      }} />
    ))}
  </div>
)

/* ── Header Avatar (D shape) ── */
const HeaderAvatar = () => (
  <div style={{
    width: '44px', height: '44px', borderRadius: '14px',
    background: 'linear-gradient(145deg,#ff8c38,#c0230a)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    flexShrink: 0,
    boxShadow: '0 0 0 2px rgba(249,115,22,0.4), 0 5px 20px rgba(249,115,22,0.3)',
    position: 'relative', overflow: 'hidden',
  }}>
    <div style={{
      position: 'absolute', top: '-10px', left: '-6px',
      width: '22px', height: '70px',
      background: 'rgba(255,255,255,0.18)',
      transform: 'rotate(28deg)',
      pointerEvents: 'none',
    }} />
    <svg width="22" height="22" viewBox="0 0 36 36" fill="none">
      <path
        d="M10 8H19C24.5228 8 29 12.4772 29 18C29 23.5228 24.5228 28 19 28H10V8Z"
        fill="none" stroke="white" strokeWidth="2" strokeLinejoin="round"
      />
      <path
        d="M14 13H19C21.7614 13 24 15.2386 24 18C24 20.7614 21.7614 23 19 23H14V13Z"
        fill="rgba(255,255,255,0.25)"
      />
    </svg>
  </div>
)

/* ══════════════════════════════════════════════════════
   MAIN COMPONENT
══════════════════════════════════════════════════════ */
export default function DeltaAssistant() {
  const [isOpen, setIsOpen]       = useState(false)
  const [messages, setMessages]   = useState([{
    role: 'assistant',
    content: "Hey! 👋 I'm Delta Assistant.\n\nHow can I help you today?",
    time: new Date(),
  }])
  const [input, setInput]         = useState('')
  const [isTyping, setIsTyping]   = useState(false)
  const [hasUnread, setHasUnread] = useState(false)
  const [fabHover, setFabHover]   = useState(false)

  const messagesEndRef = useRef(null)
  const inputRef       = useRef(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isTyping])

  useEffect(() => {
    if (!isOpen && messages.length > 1) setHasUnread(true)
  }, [messages, isOpen])

  const openChat = () => {
    setIsOpen(true)
    setHasUnread(false)
    setTimeout(() => inputRef.current?.focus(), 250)
  }

  const closeChat = () => setIsOpen(false)

  const sendMessage = async text => {
    const userText = (text || input).trim()
    if (!userText || isTyping) return
    setInput('')
    const userMessage = { role: 'user', content: userText, time: new Date() }
    const updatedMessages = [...messages, userMessage]
    setMessages(updatedMessages)
    setIsTyping(true)
    try {
      const res = await fetch('http://127.0.0.1:8000/api/chat/', {
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
    } catch (err) {
      console.error('FETCH ERROR:', err)
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: 'Connection failed. Make sure the backend is running. 🔌',
        time: new Date(),
      }])
    } finally {
      setIsTyping(false)
    }
  }

  const handleKeyDown = e => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage() }
  }

  const fmt = d => d?.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) || ''

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap');

        @keyframes dtTyping {
          0%,60%,100%{ transform:translateY(0);opacity:.3; }
          30%{ transform:translateY(-7px);opacity:1; }
        }
        @keyframes dtSlideDown {
          from{ opacity:0; transform:translateY(-20px) scale(0.93); }
          to  { opacity:1; transform:translateY(0) scale(1); }
        }
        @keyframes dtFadeIn {
          from{ opacity:0; transform:translateY(8px); }
          to  { opacity:1; transform:translateY(0); }
        }
        @keyframes dtPulse {
          0%  { transform:scale(1);   opacity:.55; }
          70% { transform:scale(1.85);opacity:0;   }
          100%{ transform:scale(1.85);opacity:0;   }
        }
        @keyframes dtGlow {
          0%,100%{ box-shadow:0 0 0 0 rgba(249,115,22,0),0 8px 28px rgba(180,40,10,0.38); }
          50%    { box-shadow:0 0 18px 5px rgba(249,115,22,0.38),0 8px 28px rgba(180,40,10,0.52); }
        }
        @keyframes dtShimmer {
          0%  { left:-60%; }
          100%{ left:130%; }
        }
        @keyframes dtBlink {
          0%,100%{ opacity:1; }
          50%    { opacity:.3; }
        }
        @keyframes dtHdrShimmer {
          0%  { left:-60%; }
          100%{ left:130%; }
        }

        .dt-window{ animation:dtSlideDown .36s cubic-bezier(.22,1,.36,1) forwards; font-family:'Outfit',sans-serif; }
        .dt-msg   { animation:dtFadeIn .28s ease forwards; }

        .dt-scroll::-webkit-scrollbar      { width:3px; }
        .dt-scroll::-webkit-scrollbar-track{ background:transparent; }
        .dt-scroll::-webkit-scrollbar-thumb{ background:rgba(249,115,22,0.28); border-radius:10px; }

        .dt-input{ font-family:'Outfit',sans-serif !important; }
        .dt-input:focus{ outline:none !important; border-color:rgba(249,115,22,0.65) !important; box-shadow:0 0 0 3px rgba(249,115,22,0.1) !important; }
        .dt-input::placeholder{ color:rgba(255,255,255,0.2); }

        .dt-send:hover:not(:disabled){ transform:scale(1.09); box-shadow:0 6px 28px rgba(249,115,22,0.6) !important; }
        .dt-send:disabled{ opacity:.32; cursor:not-allowed; }
        .dt-send{ transition:transform .18s, box-shadow .18s; }

        .dt-quick:hover{ background:rgba(249,115,22,0.22) !important; border-color:rgba(249,115,22,0.58) !important; transform:translateY(-2px); box-shadow:0 4px 16px rgba(249,115,22,0.22); }
        .dt-quick{ transition:all .2s; }

        .dt-close-hdr:hover{ background:rgba(255,255,255,0.16) !important; }
        .dt-close-hdr{ transition:background .18s; }

        .dt-hdr-shimmer{
          position:absolute; top:0; left:-60%; width:40%; height:100%;
          background:linear-gradient(90deg,transparent,rgba(255,255,255,0.055),transparent);
          animation:dtHdrShimmer 4s ease-in-out infinite;
          pointer-events:none;
        }
      `}</style>

      {/* ══ FAB — TOP RIGHT ════════════════════════════ */}
      <div style={{ position: 'fixed', top: '30px', right: '30px', zIndex: 9999 }}>

        {/* Tooltip */}
        {!isOpen && fabHover && (
          <div style={{
            position: 'absolute', top: '78px', right: '0',
            background: 'rgba(12,12,12,0.97)',
            border: '1px solid rgba(249,115,22,0.28)',
            borderRadius: '12px',
            padding: '8px 14px',
            color: 'white', fontSize: '12px',
            fontFamily: "'Outfit',sans-serif", fontWeight: '500',
            whiteSpace: 'nowrap',
            boxShadow: '0 10px 28px rgba(0,0,0,0.55)',
            pointerEvents: 'none',
            letterSpacing: '0.01em',
          }}>
            💬 Chat with Delta Assistant
            <div style={{
              position: 'absolute', top: '-6px', right: '22px',
              width: '10px', height: '10px',
              background: 'rgba(12,12,12,0.97)',
              border: '1px solid rgba(249,115,22,0.28)',
              borderBottom: 'none', borderRight: 'none',
              transform: 'rotate(45deg)',
            }} />
          </div>
        )}

        {/* Pulse rings — only when closed */}
        {!isOpen && [0, 0.8, 1.6].map((delay, i) => (
          <div key={i} style={{
            position: 'absolute', inset: 0, borderRadius: '50%',
            border: '2px solid rgba(249,115,22,0.45)',
            animation: `dtPulse 2.6s ease-out ${delay}s infinite`,
            pointerEvents: 'none',
          }} />
        ))}

        {/* FAB button */}
        <button
          onMouseEnter={() => setFabHover(true)}
          onMouseLeave={() => setFabHover(false)}
          onClick={() => isOpen ? closeChat() : openChat()}
          style={{
            width: '64px', height: '64px',
            borderRadius: '50%',
            border: 'none', cursor: 'pointer',
            background: 'linear-gradient(145deg,#ff7a20,#b81c0a)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            position: 'relative', overflow: 'hidden',
            animation: 'dtGlow 3s ease-in-out infinite',
            transition: 'transform .22s',
            transform: fabHover ? 'scale(1.1)' : 'scale(1)',
          }}
        >
          {/* Shimmer sweep */}
          <div style={{
            position: 'absolute', top: '-20px', left: '-40px',
            width: '32px', height: '130px',
            background: 'rgba(255,255,255,0.22)',
            transform: 'rotate(25deg)',
            animation: 'dtShimmer 3s ease-in-out infinite',
            pointerEvents: 'none',
          }} />
          {isOpen ? <CloseIcon /> : <DeltaDIcon />}
        </button>

        {/* Unread badge */}
        {hasUnread && !isOpen && (
          <div style={{
            position: 'absolute', top: '-4px', right: '-4px',
            width: '21px', height: '21px', borderRadius: '50%',
            background: 'linear-gradient(135deg,#ef4444,#b91c1c)',
            color: 'white', fontSize: '11px', fontWeight: '700',
            fontFamily: "'Outfit',sans-serif",
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            border: '2.5px solid #080808',
            boxShadow: '0 2px 10px rgba(239,68,68,0.65)',
          }}>1</div>
        )}
      </div>

      {/* ══ CHAT WINDOW — TOP RIGHT ════════════════════ */}
      {isOpen && (
        <div className="dt-window" style={{
          position: 'fixed',
          top: '110px', right: '30px',
          width: '420px',
          maxWidth: 'calc(100vw - 40px)',
          height: '600px',
          background: '#080808',
          borderRadius: '26px',
          overflow: 'hidden',
          border: '1px solid rgba(249,115,22,0.18)',
          display: 'flex', flexDirection: 'column',
          zIndex: 9998,
          boxShadow: [
            '0 40px 90px rgba(0,0,0,0.75)',
            '0 0 0 1px rgba(255,255,255,0.05)',
            'inset 0 1px 0 rgba(255,255,255,0.07)',
          ].join(','),
        }}>

          {/* ── HEADER ── */}
          <div style={{
            padding: '16px 18px',
            background: 'linear-gradient(135deg,#1f0900 0%,#130200 55%,#0f0800 100%)',
            display: 'flex', alignItems: 'center', gap: '13px',
            borderBottom: '1px solid rgba(249,115,22,0.1)',
            position: 'relative', overflow: 'hidden',
            flexShrink: 0,
          }}>
            <div className="dt-hdr-shimmer" />
            <div style={{
              position: 'absolute', top: '-45px', left: '-20px',
              width: '160px', height: '160px',
              background: 'radial-gradient(circle,rgba(249,115,22,0.13) 0%,transparent 65%)',
              pointerEvents: 'none',
            }} />
            <div style={{
              position: 'absolute', bottom: '-30px', right: '10px',
              width: '110px', height: '110px',
              background: 'radial-gradient(circle,rgba(220,38,38,0.09) 0%,transparent 70%)',
              pointerEvents: 'none',
            }} />

            <HeaderAvatar />

            <div style={{ flex: 1 }}>
              <div style={{
                color: 'white',
                fontFamily: "'Outfit',sans-serif",
                fontWeight: '800', fontSize: '15px',
                letterSpacing: '0.06em', textTransform: 'uppercase',
              }}>Delta Assistant</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '3px' }}>
                <div style={{
                  width: '7px', height: '7px', borderRadius: '50%',
                  background: '#22c55e',
                  boxShadow: '0 0 7px rgba(34,197,94,0.85)',
                  animation: 'dtBlink 3.2s ease-in-out infinite',
                }} />
                <span style={{
                  fontSize: '11px', color: 'rgba(255,255,255,0.35)',
                  fontFamily: "'Outfit',sans-serif", fontWeight: '400',
                }}>Online · Replies instantly</span>
              </div>
            </div>

            {/* AI badge */}
            <div style={{
              fontSize: '9px', fontWeight: '600',
              color: 'rgba(249,115,22,0.65)',
              fontFamily: "'JetBrains Mono',monospace",
              letterSpacing: '0.08em',
              background: 'rgba(249,115,22,0.08)',
              border: '1px solid rgba(249,115,22,0.2)',
              padding: '3px 8px', borderRadius: '7px',
              marginRight: '4px',
            }}>AI</div>

            {/* CLOSE button */}
            <button
              className="dt-close-hdr"
              onClick={closeChat}
              title="Close chat"
              style={{
                width: '32px', height: '32px', borderRadius: '10px',
                border: 'none',
                background: 'rgba(255,255,255,0.07)',
                color: 'rgba(255,255,255,0.6)',
                cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}
            ><SmallCloseIcon /></button>
          </div>

          {/* ── MESSAGES ── */}
          <div className="dt-scroll" style={{
            flex: 1, overflowY: 'auto',
            padding: '18px 16px',
            display: 'flex', flexDirection: 'column', gap: '15px',
            background: 'linear-gradient(180deg,#0c0c0c 0%,#080808 100%)',
            position: 'relative',
          }}>
            {/* Dot-grid bg */}
            <div style={{
              position: 'absolute', inset: 0, pointerEvents: 'none',
              backgroundImage: 'radial-gradient(rgba(249,115,22,0.055) 1px, transparent 1px)',
              backgroundSize: '26px 26px',
              opacity: 0.5,
            }} />

            {messages.map((msg, i) => {
              const isUser = msg.role === 'user'
              return (
                <div key={i} className="dt-msg" style={{
                  display: 'flex', flexDirection: 'column',
                  alignItems: isUser ? 'flex-end' : 'flex-start',
                  position: 'relative', zIndex: 1,
                }}>
                  <div style={{
                    fontSize: '9px', fontWeight: '600',
                    letterSpacing: '0.12em', textTransform: 'uppercase',
                    marginBottom: '5px',
                    fontFamily: "'JetBrains Mono',monospace",
                    color: isUser ? 'rgba(249,115,22,0.55)' : 'rgba(255,255,255,0.22)',
                  }}>
                    {isUser ? 'You' : '△ Delta'}
                  </div>

                  <div style={{
                    maxWidth: '78%',
                    padding: '12px 16px',
                    borderRadius: isUser ? '18px 4px 18px 18px' : '4px 18px 18px 18px',
                    background: isUser
                      ? 'linear-gradient(140deg,#f97316,#b91c1c)'
                      : 'rgba(255,255,255,0.048)',
                    color: 'white',
                    fontSize: '13.5px', lineHeight: '1.68',
                    whiteSpace: 'pre-wrap',
                    fontFamily: "'Outfit',sans-serif",
                    fontWeight: isUser ? '500' : '400',
                    border: isUser ? 'none' : '1px solid rgba(255,255,255,0.08)',
                    boxShadow: isUser
                      ? '0 5px 22px rgba(249,115,22,0.32), inset 0 1px 0 rgba(255,255,255,0.16)'
                      : '0 2px 12px rgba(0,0,0,0.35)',
                    position: 'relative', overflow: 'hidden',
                  }}>
                    {isUser && (
                      <div style={{
                        position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
                        background: 'linear-gradient(135deg,rgba(255,255,255,0.09) 0%,transparent 50%)',
                        pointerEvents: 'none',
                      }} />
                    )}
                    {msg.content}
                  </div>

                  <span style={{
                    fontSize: '9px',
                    color: 'rgba(255,255,255,0.14)',
                    marginTop: '5px',
                    fontFamily: "'JetBrains Mono',monospace",
                  }}>{fmt(msg.time)}</span>
                </div>
              )
            })}

            {isTyping && (
              <div style={{
                padding: '11px 15px',
                borderRadius: '4px 18px 18px 18px',
                background: 'rgba(255,255,255,0.048)',
                border: '1px solid rgba(255,255,255,0.08)',
                width: 'fit-content',
                position: 'relative', zIndex: 1,
              }}>
                <TypingDots />
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* ── QUICK REPLIES ── */}
          {messages.length <= 2 && (
            <div style={{
              padding: '10px 14px 7px',
              display: 'flex', flexWrap: 'wrap', gap: '7px',
              background: '#0a0a0a',
              borderTop: '1px solid rgba(255,255,255,0.045)',
            }}>
              <div style={{
                width: '100%', fontSize: '9px', fontWeight: '600',
                color: 'rgba(255,255,255,0.18)', letterSpacing: '0.12em',
                fontFamily: "'JetBrains Mono',monospace", marginBottom: '4px',
              }}>QUICK START</div>
              {QUICK_REPLIES.map((item, i) => (
                <button key={i} className="dt-quick"
                  onClick={() => sendMessage(item)}
                  style={{
                    border: '1px solid rgba(249,115,22,0.24)',
                    padding: '6px 12px',
                    borderRadius: '18px', cursor: 'pointer',
                    background: 'rgba(249,115,22,0.07)',
                    color: 'rgba(255,255,255,0.68)',
                    fontSize: '11.5px',
                    fontFamily: "'Outfit',sans-serif", fontWeight: '500',
                  }}
                >{item}</button>
              ))}
            </div>
          )}

          {/* ── INPUT ── */}
          <div style={{
            padding: '12px 14px',
            display: 'flex', gap: '9px', alignItems: 'flex-end',
            background: '#0a0a0a',
            borderTop: '1px solid rgba(255,255,255,0.055)',
          }}>
            <textarea
              ref={inputRef}
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask me anything..."
              rows={1}
              className="dt-input"
              style={{
                flex: 1, resize: 'none',
                borderRadius: '14px',
                border: '1px solid rgba(255,255,255,0.09)',
                background: 'rgba(255,255,255,0.05)',
                padding: '11px 15px',
                color: 'white', fontSize: '13.5px', lineHeight: '1.5',
                transition: 'border-color .2s, box-shadow .2s',
              }}
            />
            <button
              className="dt-send"
              onClick={() => sendMessage()}
              disabled={!input.trim() || isTyping}
              style={{
                width: '44px', height: '44px', flexShrink: 0,
                borderRadius: '13px', border: 'none', cursor: 'pointer',
                background: 'linear-gradient(140deg,#f97316,#b91c1c)',
                color: 'white',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: '0 4px 18px rgba(249,115,22,0.38)',
              }}
            ><SendIcon /></button>
          </div>

          {/* ── FOOTER ── */}
          <div style={{
            textAlign: 'center', padding: '6px 0 11px',
            background: '#0a0a0a',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px',
          }}>
            <svg width="9" height="9" viewBox="0 0 36 36" fill="none">
              <path
                d="M10 8H19C24.5228 8 29 12.4772 29 18C29 23.5228 24.5228 28 19 28H10V8Z"
                stroke="rgba(249,115,22,0.38)" strokeWidth="2.5" strokeLinejoin="round" fill="none"
              />
            </svg>
            <span style={{
              fontSize: '10px', color: 'rgba(255,255,255,0.13)',
              fontFamily: "'JetBrains Mono',monospace", letterSpacing: '0.05em',
            }}>
              Powered by{' '}
              <span style={{ color: 'rgba(249,115,22,0.42)', fontWeight: '500' }}>
                Delta Developers
              </span>
            </span>
          </div>

        </div>
      )}
    </>
  )
}