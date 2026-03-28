import { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue, AnimatePresence } from 'framer-motion';

const Contact = ({ contact }) => {
  const sectionRef = useRef(null);
  const [copied, setCopied] = useState(false);
  
  // --- GAMIFICATION STATE ---
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [frequency, setFrequency] = useState(0); 
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  
  // NEW: Random Target State
  const [targetFreq, setTargetFreq] = useState(88); 

  // NEW: Generate random frequency on mount
  useEffect(() => {
    // Generates a target between 15 and 85 to ensure the range (target-5 to target+5) stays within 0-100
    const random = Math.floor(Math.random() * 70) + 15; 
    setTargetFreq(random);
  }, []);

  // UPDATED: Check tuned status based on random target (+/- 2 range for a "tight" feel)
  const isTuned = frequency >= targetFreq - 2 && frequency <= targetFreq + 2;

  // --- MOUSE INTERACTION ---
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 40, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 40, damping: 25 });
  const starMoveX = useTransform(springX, [0, 1920], [15, -15]);
  const starMoveY = useTransform(springY, [0, 1080], [15, -15]);

  const handleMouseMove = (e) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  const copyEmail = () => {
    if (contact?.email) {
      navigator.clipboard.writeText(contact.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleLaunch = (e) => {
    e.preventDefault();
    if (!isTuned) return;
    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
      setIsSent(true);
      setFormState({ name: '', email: '', message: '' }); 
    }, 1200);
  };

  const [stars] = useState(() => 
    Array.from({ length: 100 }, () => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 1.5 + 0.5,
      duration: Math.random() * 4 + 2,
    }))
  );

  if (!contact) return null;

  return (
    <section 
      ref={sectionRef} 
      id="contact" 
      onMouseMove={handleMouseMove}
      className="relative h-screen w-full flex flex-col overflow-hidden"
      style={{ background: 'radial-gradient(circle at 50% 50%, #150123 0%, #000000 100%)' }}
    >
      
      {/* 1. ATMOSPHERIC GLOW */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-purple-900/40 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-900/20 rounded-full blur-[100px]" />
      </div>

      {/* 2. STARFIELD */}
      <motion.div style={{ x: starMoveX, y: starMoveY }} className="absolute inset-0 pointer-events-none">
        {stars.map((star, i) => (
          <motion.div
            key={i}
            animate={{ opacity: [0.1, 0.7, 0.1], scale: [1, 1.2, 1] }}
            transition={{ duration: star.duration, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bg-white rounded-full"
            style={{ top: star.top, left: star.left, width: star.size, height: star.size, boxShadow: '0 0 4px rgba(255, 255, 255, 0.8)' }}
          />
        ))}
      </motion.div>

      {/* 3. THE MOON (Target) */}
      <motion.div 
        initial={{ opacity: 0, left: '95%', x: '-50%' }}
        animate={{ opacity: isTuned ? 0.9 : 0.5, scale: isTuned ? 1.15 : 1, left: '95%', x: '-50%' }}
        className="absolute top-100 w-35 h-35 rounded-full shadow-[-24px_0px_0_0_#E9D5FF] pointer-events-auto cursor-pointer filter blur-[0.5px] transition-all duration-500"
      />

      {/* 4. CONTENT LAYER */}
      <div className="relative z-10 flex-grow flex items-center justify-center px-6">
        <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-20 items-center">
          
          <div className="space-y-8">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <h2 className="text-7xl md:text-8xl font-black tracking-tighter leading-none text-white">
                LET'S <br /> <span className="text-purple-600">CONNECT.</span>
              </h2>
            </motion.div>
            
            <div className="space-y-6">
              <p className="text-purple-200 font-mono uppercase tracking-widest text-xs">Available for new opportunities</p>
              <div className="flex flex-col gap-6">
                <button onClick={copyEmail} className="text-2xl md:text-4xl font-bold text-slate-100 hover:text-purple-200 transition-all text-left flex items-center gap-4 group">
                  {contact.email} 
                  {copied && <span className="text-sm text-green-400 font-mono animate-bounce">[COPIED!]</span>}
                </button>

                <div className="flex gap-4">
                   <button onClick={copyEmail} className="px-8 py-3 bg-purple-950/30 border border-purple-500/20 backdrop-blur-md text-slate-300 font-mono text-[10px] tracking-widest rounded-full hover:bg-purple-700 transition-all">
                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline mr-0"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
                     {copied ? "" : ""}
                   </button>
                  
                   <a href={`mailto:${contact.email}`} className="p-3 bg-purple-900 text-white rounded-full hover:bg-purple-700 shadow-lg shadow-purple-900/40 transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* THE GAMIFIED FORM */}
          <div className="relative w-full">
            <AnimatePresence mode="wait">
              {!isSent ? (
                <motion.form 
                  key="form"
                  onSubmit={handleLaunch}
                  animate={isSending ? { scale: 0, x: 800, y: -100, opacity: 0, rotate: 20 } : { scale: 1, x: 0, y: 0, opacity: 1 }}
                  transition={{ duration: 1.2, ease: "anticipate" }}
                  className="space-y-4 w-full bg-black/40 p-10 rounded-[2rem] backdrop-blur-2xl border border-white/5 shadow-2xl"
                >
                  {/* UPDATED: Displays range instead of a single number */}
                  <p className="text-[11px] font-mono text-purple-300/60 mb-2">
                    [ABHI]: MATCH FREQUENCY TO <span className="text-white font-bold">{targetFreq - 5}-{targetFreq + 5}MHz</span> TO ENABLE GRAVITY LAUNCH.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <input required value={formState.name} onChange={(e) => setFormState({...formState, name: e.target.value})} type="text" placeholder="NAME" className="bg-white/5 border border-white/10 p-4 focus:border-purple-600 outline-none font-mono text-xs text-white rounded-xl transition-colors" />
                    <input required value={formState.email} onChange={(e) => setFormState({...formState, email: e.target.value})} type="email" placeholder="EMAIL" className="bg-white/5 border border-white/10 p-4 focus:border-purple-600 outline-none font-mono text-xs text-white rounded-xl transition-colors" />
                  </div>
                  <textarea required value={formState.message} onChange={(e) => setFormState({...formState, message: e.target.value})} placeholder="MESSAGE" rows="4" className="w-full bg-white/5 border border-white/10 p-4 focus:border-purple-600 outline-none font-mono text-xs text-white rounded-xl resize-none transition-colors"></textarea>
                  
                  {/* FREQUENCY TUNER SLIDER */}
                  <div className="py-2 space-y-2">
                    <div className="flex justify-between font-mono text-[11px] text-purple-400 tracking-[0.2em]">
                        <span>TUNER: {frequency}MHz</span>
                        <span className="animate-pulse">{isTuned ? ">>> SIGNAL LOCKED" : ">>> NO UPLINK"}</span>
                    </div>
                    <input 
                        type="range" min="0" max="100" value={frequency}
                        onChange={(e) => setFrequency(parseInt(e.target.value))}
                        className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-purple-500"
                    />
                  </div>

                  <button 
                    disabled={!isTuned || isSending}
                    className={`w-full py-4 font-black text-white text-[12px] tracking-[0.4em] transition-all rounded-xl shadow-lg 
                    ${isTuned ? "bg-purple-900 hover:bg-purple-700 shadow-purple-900/40" : "bg-white/5 opacity-40 cursor-not-allowed"}`}
                  >
                    {isSending ? "LAUNCHING..." : "SEND MESSAGE"}
                  </button>
                </motion.form>
              ) : (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-10 bg-black/60 border border-purple-500/20 rounded-[2rem] backdrop-blur-xl font-mono text-xs text-purple-300">
                  <p className="text-green-400 mb-2">{">"} UPLINK_SUCCESSFUL</p>
                  <p className="text-white font-bold tracking-widest uppercase">The Lunar Receiver has captured your data.</p>
                  <button onClick={() => {setIsSent(false); setFrequency(0); setTargetFreq(Math.floor(Math.random() * 70) + 15);}} className="mt-8 text-purple-500 hover:text-white underline">[NEW TRANSMISSION]</button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* 5. MINIMAL FOOTER */}
      <div className="relative z-20 w-full px-6 pb-8">
        <div className="max-w-7xl mx-auto pt-6 border-t border-white/4 flex text-bold flex-col md:flex-row justify-between items-center gap-4 text-slate-600 font-mono text-[11px] tracking-[0.3em] uppercase">
          <div>© 2026 ABHI PATEL | ENGINEERED FOR PERFORMANCE</div>
          <div className="text-purple-500/80 italic">Competitive Gaming (Call Of Duty)</div>
        </div>
      </div>
    </section>
  );
};

export default Contact;