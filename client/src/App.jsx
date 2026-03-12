
import { useState, useEffect } from 'react'
import axios from 'axios'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'

const smoothTransition = {
  type: "spring",
  stiffness: 350,
  damping: 30,
  mass: 0.9
};

function App() {

  
  const [profile, setProfile] = useState(null)


  const [projects, setProjects] = useState([])

  
  const [activeModal, setActiveModal] = useState(null) // Using ONE state for everything


  const [copied, setCopied] = useState(false);

  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    message: '' 
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };


  const copyEmail = () => {
    navigator.clipboard.writeText(profile.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };


  const [showScrollTop, setShowScrollTop] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling down 400px
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);


  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


  const [activeSection, setActiveSection] = useState('home');
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });


  // Update active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'education', 'experience', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= -100 && rect.top <= 300;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  


  useEffect(() => {
    const fetchData = async () => {
      try {
        const profileRes = await axios.get('http://127.0.0.1:8000/api/profile')
        const projectsRes = await axios.get('http://127.0.0.1:8000/api/projects')
        setProfile(profileRes.data)
        setProjects(projectsRes.data)
      } catch (err) {
        console.error("Data fetch failed", err)
      }
    }
    fetchData()
  }, [])

  // client/src/App.jsx

  if (!profile) {
    return (
      <div className="bg-[#020617] min-h-screen flex flex-col items-center justify-center text-white font-mono uppercase tracking-[0.5em]">
        <div className="mb-4 animate-pulse">Initializing Portfolio...</div>
        <div className="text-[10px] text-slate-500">Check if FastAPI is running on Port 8000</div>
      </div>
    )
  }

  
  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 selection:bg-blue-500/30 overflow-x-hidden">
      
      {/* 1.NavBar */}
      <motion.nav 
        // ... (keep your existing variants and animate logic)
        className="fixed top-2 left-1/2 -translate-x-1/2 z-[200] hidden md:block"
      >
        {/* UPDATED: bg-transparent + high backdrop-blur to allow background colors to bleed through */}
        <div className="flex items-center gap-2 px-3 py-2 bg-transparent backdrop-blur-2xl border border-white/10 rounded-full shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]">
          
          {['home', 'experience', 'projects', 'education', 'contact'].map((item) => (
            <motion.button
              key={item}
              whileHover={{ scale: 1.15, y: -1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const el = document.getElementById(item);
                if (el) el.scrollIntoView({ behavior: 'smooth' });
                setActiveSection(item);
                if (window.navigator.vibrate) {
                  window.navigator.vibrate(10); // Subtle haptic tap
                }
              }}
              className={`relative px-6 py-2.5 text-[12px] font-black uppercase tracking-[0.15em] transition-colors duration-300 ${
                activeSection === item 
                  ? 'text-white' 
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              {/* THE SLIDING PILL ANIMATION*/}
              {activeSection === item && (
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* 1. THE 3D ORBITAL PILL */}
                  <motion.div 
                    layoutId="activePill"
                    animate={{
                      // The "Dive and Slam" Path
                      y: [0, 100, -100, 0],
                      scale: [1, 0.4, 1.8, 1],
                      opacity: [1, 0.7, 0.7, 1],
                      rotateX: [0, 45, -45, 0], // Tilts as it orbits
                    }}
                    transition={{
                      duration: 0.9,
                      ease: "anticipate"
                    }}
                    className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-900 rounded-full -z-10 shadow-[0_0_50px_rgba(30,58,138,0.8)]"                  >
                    {/* 2. INTERNAL GLOW (Visual depth) */}
                    <div className="absolute inset-0 rounded-full bg-white/20 blur-sm" />
                  </motion.div>

                  {/* 3. THE XP IMPACT (Triggered by AnimatePresence) */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`impact-${item}`}
                      className="absolute inset-0 flex items-center justify-center pointer-events-none"
                    >
                      {/* XP Text */}
                      <motion.span
                        initial={{ opacity: 0, y: 0, scale: 0.5 }}
                        animate={{ 
                          opacity: [0, 1, 0], 
                          y: -60, 
                          scale: [0.5, 1.5, 1],
                          rotate: [0, -15, 0] 
                        }}
                        transition={{ duration: 0.9, delay: 0.6 }} // Delayed to hit when the orbit lands
                        className="text-cyan-400 font-mono font-black text-[12px] tracking-tighter"
                        style={{ textShadow: '0 0 15px rgba(20, 168, 190, 0.8)' }}
                      >
                        ''''''
                        ''''''
                      </motion.span>

                      {/* Impact Ring */}
                      <motion.div
                        initial={{ scale: 0, opacity: 1 }}
                        animate={{ scale: 2.5, opacity: 0 }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                        className="absolute w-full h-full border-2 border-white/30 rounded-full"
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>
              )}
              {item}
            </motion.button>
          ))}
        </div>
      </motion.nav>
      
      {/* 2. HERO & BENTO SECTION*/}
        <section id="home" className="relative min-h-screen w-full flex flex-col justify-center items-center px-4 overflow-hidden">
          
          {/* Ambient Background Glows */}
          <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full -z-10" />
          <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-blue-900/10 blur-[150px] rounded-full -z-10" />

          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-6xl w-full text-center md:text-left"
          >
            <span className="text-blue-500 font-mono text-[10px] md:text-xs tracking-[0.6em] uppercase mb-12 block font-bold">
              Full-Stack Software Engineer • Masters of Software Graduate
            </span>
            
            {/* HUGE NAME - Focal Point */}
            <h1 className="text-6xl md:text-[10rem] font-black tracking-tighter mb-10 text-white leading-[0.85] flex flex-wrap justify-center md:justify-start items-center gap-x-8">
              <span>{profile.name.split(' ')[0]}</span>
              <span className="text-transparent stroke-text opacity-40">{profile.name.split(' ')[1]}</span>
            </h1>

            <p className="text-xl md:text-3xl text-slate-400 max-w-3xl mb-16 leading-tight font-light italic mx-auto md:mx-0">
              "{profile.summary}"
            </p>

            {/* HERO BUTTONS */}
            <div className="flex flex-wrap justify-center md:justify-start gap-6">
              <a 
                href="/Abhi_Patel_CV.pdf" 
                download="Abhi_Patel_CV.pdf" 
                className="px-10 py-5 bg-white text-black font-black uppercase text-sm rounded-full hover:bg-blue-600 hover:text-white transition-all transform hover:scale-105"
              >
                Download CV
              </a>
              <button 
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                className="px-10 py-5 bg-transparent border border-white/10 text-white font-black uppercase text-sm rounded-full hover:border-blue-500 hover:text-blue-500 transition-all"
              >
                Let's Talk
              </button>
            </div>
          </motion.div>

          {/* SCROLL INDICATOR */}
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-500"
          >
            <div className="w-[1px] h-12 bg-gradient-to-b from-blue-500 to-transparent mx-auto" />
            <span className="text-[10px] font-mono tracking-widest uppercase mt-4 block">Scroll</span>
          </motion.div>
        </section>

      {/* 3. EXPERIENCE SECTION */}
      <section id="experience" className="min-h-screen w-full flex flex-col px-6 py-20">
        {/* 1. Header - Now naturally sits at the top because we removed justify-center from section */}
        <div className="max-w-7xl w-full mx-auto mb-12"> 
          <div className="flex items-center gap-4">
            <h2 className="text-5xl font-black tracking-tighter uppercase italic text-slate-800/50">
              Experience
            </h2>
            <div className="h-[1px] flex-1 bg-slate-800/30" />
          </div>
        </div>

        {/* 2. Grid Wrapper - Updated to grid-cols-2 for the 2x2 look */}
        <div className="flex-1 flex items-center justify-center w-full max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 w-full"> 
            {/* I increased gap to 12 to give them more breathing room */}
            
            {profile.experience.map((exp, index) => (
              <motion.div
                key={`exp-${index}`}
                layoutId={`exp-${index}`}
                transition={smoothTransition}
                onClick={() => setActiveModal({ ...exp, type: 'experience', id: index })}
                whileHover={{ y: -10, borderColor: "rgba(59, 130, 246, 0.5)", backgroundColor: "rgba(15, 23, 42, 0.8)" }}
                
                /* Increased min-h to [350px] or [400px] 
                  The cards will now be much wider, filling the screen better.
                */
                className="relative overflow-hidden cursor-pointer p-12 min-h-[370px] flex flex-col justify-between bg-slate-900/40 border border-slate-800 rounded-[3.5rem] transition-all group backdrop-blur-sm"
              >
                {/* 1. CLIPPED NUMBER UI: White stroke normally, Blue on hover */}
              <span 
                className="absolute -right-4.5 -bottom-4 text-9xl font-black text-blue-500/[0.05] group-hover:text-blue-500/[0.1] transition-colors select-none z-0"
              >
                {String(index + 1).padStart(2, '0')}
              </span>
                <div>
                  <span className="text-sm font-mono text-blue-500 uppercase tracking-widest font-bold">
                    {exp.year}
                  </span>
                  
                  {/* Bigger titles for the bigger cards */}
                  <h3 className="text-3xl font-bold mt-6 leading-tight text-white group-hover:text-blue-400 transition-colors">
                    {exp.role}
                  </h3>
                  
                  <p className="text-xl text-slate-400 mt-2 italic">
                    {exp.company}
                  </p>

                  {/* We can show slightly more text now if you want, 
                      or keep line-clamp-2 for a very clean look */}
                  <p className="mt-8 text-slate-500 text-base leading-relaxed line-clamp-3">
                    {exp.desc}
                  </p>
                </div>

                <div className="mt-10 text-xs text-blue-400 font-bold uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 group-hover:translate-x-3 transition-all">
                  Explore Contribution →
                </div>

              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PROJECTS GRID */}
      <section id="projects" className="min-h-screen w-full py-24 flex flex-col items-center bg-transparent">
        <div className="max-w-6xl w-full px-4">
          
          {/* 4.1 PROJECTS HEADING - Moved to top, matching Experience style */}
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-4xl font-black tracking-tighter uppercase italic text-slate-800">
              Projects
            </h2>
            <div className="h-[1px] flex-1 bg-slate-800/50" />
          </div>

          {/* 4.2 SKILLS MARQUEE - Positioned below heading */}
          <div className="relative py-6 bg-transparent overflow-hidden mb-12">
            <div className="max-w-4xl mx-auto relative h-12 flex items-center border-y border-white/[0.03]">
              <div className="absolute inset-y-0 left-0 w-36 bg-gradient-to-r from-[#020617] via-[#020617]/80 to-transparent z-10" />
              <div className="absolute inset-y-0 right-0 w-36 bg-gradient-to-l from-[#020617] via-[#020617]/80 to-transparent z-10" />

              <motion.div 
                animate={{ x: [0, -1200] }}
                transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
                className="flex whitespace-nowrap gap-16 items-center"
              >
                {[...Array(6)].map((_, setIndex) => (
                  <div key={setIndex} className="flex gap-16 items-center">
                    {profile.skills.map((skill, i) => (
                      <div key={i} className="flex items-center gap-6">
                        <span className="text-[13.5px] font-mono font-bold text-blue-500/[0.05] uppercase tracking-[0.4em]">
                          {skill.name}       
                        </span>
                        <span 
                          className="text-2xl font-black uppercase tracking-tighter opacity-10"
                          style={{ WebkitTextStroke: '1px white', color: 'transparent' }}
                        >
                          {skill.name}
                        </span>
                        <div className="w-[1px] h-3 bg-slate-800 rotate-[30deg]" />
                      </div>
                    ))}
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* 4.3 PROJECTS GRID - Keeping your exact size and style */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {projects.map((proj) => (
              <motion.div
                key={`proj-${proj.id}`}
                layoutId={`proj-${proj.id}`}
                transition={smoothTransition}
                onClick={() => setActiveModal({ ...proj, type: 'project', id: proj.id })}
                whileHover={{ y: -5, borderColor: "rgba(59, 130, 246, 0.5)", backgroundColor: "rgba(15, 23, 42, 0.6)" }}
                className="cursor-pointer p-8 bg-slate-900/40 border border-slate-800 rounded-[2rem] transition-all group relative overflow-hidden min-h-[220px] flex flex-col justify-between"
              >
                {/* Your original number logic */}
                <span className="absolute -right-2 -bottom-2 text-7xl font-black text-blue-500/[0.05] group-hover:text-blue-500/[0.1] transition-colors select-none z-0">
                  0{projects.indexOf(proj) + 1}
                </span>

                <div className="relative z-10">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {proj.tech.slice(0, 3).map(t => (
                      <span key={t} className="text-[9px] px-2 py-0.5 bg-blue-500/10 text-blue-300 rounded border border-blue-500/20 uppercase font-mono tracking-widest">
                        {t}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors pr-12 leading-tight">
                    {proj.title}
                  </h3>
                </div>

                <div className="relative z-10 mt-4">
                  <p className="text-[11px] text-slate-500 uppercase tracking-widest font-medium group-hover:text-slate-300 transition-colors">
                    View Architecture →
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* 5 EDUCATION SECTION */}
      <section id="education" className="min-h-screen w-full py-24 flex flex-col justify-center relative bg-transparent">
        <div className="max-w-6xl w-full px-4">
          
          {/* 5.1 EDUCATION HEADING */}
          <div className="flex items-center gap-4 mb-20">
                <h2 className="text-4xl font-black tracking-tighter uppercase italic text-slate-800">
                  Education
                </h2>
                <div className="h-[1px] flex-1 bg-slate-800/50" />
          </div>

          {/* 5.2 EDUCATION CARDS - Stacked Vertically */}
          <div className="flex flex-col gap-30 max-w-lg w-full">
            {profile.education?.map((edu, index) => (
              <motion.div
                layoutId={edu.id}
                key={edu.id}
                onClick={() => setActiveModal({ ...edu, type: 'education' })}
                whileHover={{ y: -10, borderColor: "rgba(59, 130, 246, 0.5)", backgroundColor: "rgba(15, 23, 42, 0.8)" }}
                className="relative overflow-hidden cursor-pointer p-10 bg-slate-900/40 border border-slate-800 rounded-[3rem] transition-all group min-h-[280px] flex flex-col justify-between backdrop-blur-sm"
              >
                {/* GIANT CLIPPED NUMBER */}
                <span 
                  className="absolute -right-6 -bottom-8 text-[12rem] font-black leading-none select-none transition-all duration-500 pointer-events-none italic
                            text-blue-500/[0.05] group-hover:text-blue-500/[0.1]"
                >

                {String(index + 1).padStart(2, '0')}
                </span>

                <div className="relative z-10">
                  <span className="text-sm font-mono text-blue-500 uppercase tracking-widest font-bold">
                    {edu.year}
                  </span>
                  <h3 className="text-4xl font-bold mt-4 text-white uppercase group-hover:text-blue-400 transition-colors">
                    {edu.degree}
                  </h3>
                  <p className="text-2xl text-slate-400 font-medium italic mt-2">
                    {edu.uni}
                  </p>
                </div>
                
                <div className="relative z-10 mt-8">
                  <span className="px-4 py-2 bg-blue-500/10 text-blue-400 text-sm font-bold rounded-full border border-blue-500/20 uppercase tracking-wider">
                    CGPA: {edu.cgpa}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. MASTER UNIVERSAL MODAL */}
      <AnimatePresence mode="popLayout"> {/* Added mode="popLayout" to stabilize the exit */}
        {activeModal && (
          <>
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              onClick={() => setActiveModal(null)}
              className="fixed inset-0 bg-black/95 backdrop-blur-xl z-50 cursor-zoom-out"
            />
            
            <motion.div 
              layoutId={
                activeModal.type === 'education' ? activeModal.id : 
                activeModal.type === 'experience' ? `exp-${activeModal.id}` : 
                `proj-${activeModal.id}`
              }
              transition={smoothTransition}
              className="fixed inset-0 m-auto w-[95%] max-w-3xl h-fit max-h-[85vh] bg-[#0a0f1e] border border-white/10 rounded-[2.5rem] p-8 md:p-12 z-[60] overflow-y-auto shadow-2xl custom-scrollbar"
            >

              {/* THE SECRET SAUCE: Wrap everything in this internal motion.div */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 0.1 } }} // Fades in slightly after box grows
                exit={{ opacity: 0, transition: { duration: 0.05 } }} // DISAPPEARS INSTANTLY before box shrinks
              >
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <span className="text-blue-500 font-mono text-[10px] uppercase tracking-[0.3em]">
                      {activeModal.type === 'experience' ? 'Professional Role' : 
                      activeModal.type === 'education' ? 'Academic Background' : 
                      'Technical Case Study'}
                    </span>
                    <h2 className="text-4xl font-black mt-2 tracking-tighter text-white uppercase">
                      {activeModal.degree || activeModal.role || activeModal.title}
                    </h2>
                    <p className="text-xl text-slate-400 mt-2 italic font-serif">
                      {activeModal.uni || activeModal.company || activeModal.tech?.join(' • ')}
                    </p>
                  </div>
                  <button onClick={() => setActiveModal(null)} className="text-slate-500 hover:text-white text-3xl">✕</button>
                </div>

                <div className="space-y-8">
                  {/* Media/Visuals Section */}
                  <div className="mt-10 pt-10 border-t border-slate-800">
                    <h4 className="text-white font-bold text-[10px] mb-6 uppercase tracking-[0.3em]">
                      Technical Evidence & Output
                    </h4>
                    <div className="grid grid-cols-1 gap-4">
                      <div className="aspect-video bg-slate-950 rounded-2xl border border-slate-800 flex items-center justify-center group overflow-hidden">
                        <span className="text-slate-700 font-mono text-xs group-hover:text-blue-500/50 transition-colors">
                          // Project Assets Placeholder (Images/Terminal Output)
                        </span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-white font-bold text-xs mb-6 uppercase tracking-[0.2em] border-b border-slate-800 pb-2 inline-block">
                      Impact & Achievements
                    </h4>
                    <ul className="space-y-4">
                      {/* Priority: 1. Education Details, 2. Project Points, 3. Experience Description */}
                      {(activeModal.details || activeModal.points || (activeModal.desc ? [activeModal.desc] : [])).map((point, i) => (
                        <li key={i} className="flex gap-4 text-slate-300 text-lg leading-relaxed">
                          <span className="text-blue-500 mt-2 shrink-0 h-2 w-2 bg-blue-500 rounded-full" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {activeModal.type === 'experience' && (
                    <div className="p-6 bg-blue-500/5 rounded-2xl border border-blue-500/10">
                      <p className="text-blue-400 text-sm italic">
                        Engineering focused on scalable architecture and performance optimization.
                      </p>
                    </div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* 7. CONTACT SECTION */}
      <section id="contact" className="min-h-screen w-full py-24 flex flex-col relative bg-transparent">
        <div className="max-w-6xl w-full px-6 md:px-12">
          {/* 6.1 HEADING - Now at the absolute top */}
          <div className="flex flex-col mb-20">
            <div className="flex items-center gap-4">
              <h2 className="text-4xl font-black tracking-tighter uppercase italic text-slate-800">
                Get In Touch
              </h2>
              <div className="h-[1px] flex-1 bg-slate-800/50" />
            </div>

            {/* RE-DESIGNED AVAILABILITY: Clean, minimalist status line */}
            <div className="flex items-center gap-2 mt-4 ml-1">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-[0.2em]">
                Current Status: <span className="text-green-500/80">Available for new projects</span>
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* LEFT SIDE: Narrative */}
            <div className="space-y-8">
              <h3 className="text-5xl font-bold text-white leading-tight">
                Let's build something <br/>
                <span className="text-blue-500 italic">legendary.</span>
              </h3>
              <p className="text-slate-500 text-lg max-w-md leading-relaxed">
                I'm currently looking for new opportunities to apply my skills in Full-Stack development and AI Engineering. Drop a message, and let's start a conversation.
              </p>
            </div>

            {/* RIGHT SIDE: The Sleek Form Card */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-slate-900/40 backdrop-blur-xl p-8 md:p-10 rounded-[2.5rem] border border-slate-800/50 shadow-2xl relative overflow-hidden"
            >
              {/* Subtle background glow */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-500/10 blur-[80px] pointer-events-none" />

              <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
                
                {/* Full Name Group */}
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] ml-1">
                    Full Name
                  </label>
                  <input 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    type="text" 
                    placeholder="John Doe" 
                    className="w-full bg-slate-950/60 border border-slate-800 rounded-2xl px-6 py-4 text-white placeholder:text-slate-700 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all"
                  />
                </div>

                {/* Email Group */}
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] ml-1">
                    Email Address
                  </label>
                  <input 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    type="email" 
                    placeholder="hello@work.com" 
                    className="w-full bg-slate-950/60 border border-slate-800 rounded-2xl px-6 py-4 text-white placeholder:text-slate-700 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all"
                  />
                </div>

                {/* Message Group */}
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] ml-1">
                    Message
                  </label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    placeholder="What's on your mind?" 
                    className="w-full bg-slate-950/60 border border-slate-800 rounded-2xl px-6 py-4 text-white placeholder:text-slate-700 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all resize-none"
                  ></textarea>
                </div>

                <motion.button 
                  whileHover={{ scale: 1.02, backgroundColor: '#2563eb' }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-5 bg-blue-600 text-white font-black uppercase tracking-[0.2em] rounded-2xl shadow-[0_20px_40px_-10px_rgba(37,99,235,0.3)] transition-all"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>

          <footer className="max-w-6xl mx-auto mt-20 pb-10 px-6 border-t border-slate-900 pt-10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
              
              {/* Left: Email Copy Logic */}
              <div className="flex flex-col gap-2">
                <span className="text-[10px] font-mono text-slate-600 uppercase tracking-widest">Direct Mail</span>
                <div className="flex items-center gap-3">
                  <a href={`mailto:${profile.contact.email}`} className="text-xl font-bold text-slate-300 hover:text-white transition-colors">
                    {profile.contact.email}
                  </a>
                  <button onClick={copyEmail} className="relative p-2 bg-slate-900 border border-slate-800 rounded-lg hover:border-blue-500 transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-400">
                      <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg>
                    <AnimatePresence>
                      {copied && (
                        <motion.span initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="absolute -top-8 left-1/2 -translate-x-1/2 text-[10px] text-blue-400 font-mono">COPIED</motion.span>
                      )}
                    </AnimatePresence>
                  </button>
                </div>
              </div>

              {/* Center: Socials */}
              <div className="flex gap-6">
                {Object.entries(profile.contact).map(([platform, link]) => {
                  if (platform === 'email' || platform === 'location') return null;
                  return (
                    <a key={platform} href={link} target="_blank" rel="noreferrer" className="text-xs font-mono text-slate-500 hover:text-white uppercase tracking-widest transition-colors">
                      [{platform}]
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Bottom: Meta */}
            <div className="mt-16 text-[9px] font-mono text-slate-800 uppercase tracking-[0.5em] flex flex-col md:flex-row justify-between items-center gap-4">
              <span>© 2024 ABHI PATEL</span>
              <span>BUILT WITH REACT + FASTAPI</span>
            </div>
          </footer>
        </div>
      </section>

{/* <svg className="hidden">
  <defs>
    <filter id="goo">
      <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
      <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
      <feBlend in="SourceGraphic" in2="goo" />
    </filter>
  </defs>
</svg> */}


      {/* PASTE THE BUTTON CODE HERE */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={scrollToTop}
            className="fixed bottom-7 right-10 z-[100] p-4 bg-blue-500 text-white rounded-full shadow-2xl hover:bg-blue-500 transition-colors group"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="12" height="12" 
              viewBox="0 0 24 24" fill="none" 
              stroke="currentColor" strokeWidth="3" 
              strokeLinecap="round" strokeLinejoin="round"
              className="group-hover:-translate-y-1 transition-transform"
            >
              <path d="M18 15l-6-6-6 6"/>
            </svg>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App