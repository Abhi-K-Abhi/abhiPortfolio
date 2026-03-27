import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      const sections = ['home', 'experience', 'projects', 'education', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Adjusted range for better scroll-spy accuracy
          if (rect.top >= -100 && rect.top <= 300) {
            setActiveSection(section);
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Home', 'Experience', 'Projects', 'Education', 'Contact'];

  return (
    <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
      isScrolled 
        ? 'bg-[#150123]/60 backdrop-blur-xl py-4 border-b border-purple-500/10' 
        : 'bg-transparent py-8'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo - Matches #E9D5FF Header Style */}
        <a 
          href="#home" 
          onClick={() => setActiveSection('home')}
          className="text-xl font-black tracking-tighter text-purple-200 cursor-pointer hover:opacity-80 transition-opacity"
        >
          ABHI<span className="text-purple-600"> PATEL</span>
        </a>

        {/* Navigation Links */}
        <div className="hidden md:flex gap-4 lg:gap-8">
          {navLinks.map((link) => {
            const item = link.toLowerCase();
            return (
              <a 
                key={link} 
                href={`#${item}`}
                onClick={() => setActiveSection(item)}
                className="relative px-2 py-1 text-[13px] font-mono uppercase tracking-[0.3em] text-purple-200/90 hover:text-[#E9D5FF] transition-colors z-10"
              >
                <span className="relative z-10">{link}</span>

                {activeSection === item && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    {/* 1. THE 3D ORBITAL SQUARE FRAME (Purple Variant) */}
                    <motion.div 
                      layoutId="activePill"
                      animate={{
                        y: [0, 50, -50, 0], 
                        scale: [1, 0.6, 1.3, 1],
                        opacity: [1, 0.8, 0.9, 1],
                        rotateX: [0, 45, -45, 0],
                      }}
                      transition={{
                        duration: 0.8,
                        ease: "anticipate"
                      }}
                      className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-purple-600/20 to-[#150123]/90 rounded-xl -z-10 shadow-[0_0_25px_rgba(147,51,234,0.2)] border border-purple-500/20 backdrop-blur-sm"
                      >
                      {/* Glossy inner layer */}
                      <div className="absolute inset-0 rounded-xl bg-white/5 blur-[7px]" />
                      
                      {/* Corner Accents */}
                      <div className="absolute top-1 left-1 w-1 h-1 border-t border-l border-purple-200/40" />
                      <div className="absolute bottom-1 right-1 w-1 h-1 border-b border-r border-purple-200/40" />
                    </motion.div>

                    {/* 2. THE IMPACT TEXT/EFFECT (Purple EXE) */}
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={`impact-${item}`}
                        className="absolute inset-0 flex items-center justify-center pointer-events-none"
                      >
                        <motion.span
                          initial={{ opacity: 0, y: 0, scale: 0.5 }}
                          animate={{ 
                            opacity: [0, 1, 0], 
                            y: -40, 
                            scale: [0.5, 1.2, 1],
                            rotate: [0, -10, 0] 
                          }}
                          transition={{ duration: 0.6, delay: 0.4 }}
                          className="text-purple-300 font-mono font-black text-[10px]"
                          style={{ textShadow: '0 0 15px rgba(231, 225, 237, 0.8)' }}
                        >
                          EXE
                        </motion.span>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                )}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;