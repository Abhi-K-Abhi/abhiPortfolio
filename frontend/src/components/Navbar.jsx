// import { useState, useEffect } from 'react';

// const Navbar = () => {
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 20);
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const navLinks = ['Home', 'Experience', 'Projects', 'Education', 'Contact'];

//   return (
//     <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
//       isScrolled 
//         ? 'bg-slate-950/40 backdrop-blur-xl py-4 border-b border-white/5' 
//         : 'bg-transparent py-8'
//     }`}>
//       <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
//         {/* Logo */}
//         <div className="text-xl font-black tracking-tighter text-white">
//           ABHI<span className="text-blue-500">.PATEL</span>
//         </div>

//         {/* Navigation Links - Higher contrast for readability */}
//         <div className="hidden md:flex gap-8">
//           {navLinks.map((link) => (
//             <a 
//               key={link} 
//               href={`#${link.toLowerCase()}`} 
//               className="text-[10px] font-mono uppercase tracking-[0.3em] text-slate-200 hover:text-blue-400 transition-colors"
//             >
//               {link}
//             </a>
//           ))}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Basic Scroll Spy: Updates active pill based on scroll position
      const sections = ['home', 'experience', 'projects', 'education', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= 300) {
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
        ? 'bg-slate-950/40 backdrop-blur-xl py-4 border-b border-white/5' 
        : 'bg-transparent py-8'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-black tracking-tighter text-white">
          ABHI<span className="text-blue-500">.PATEL</span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex gap-4 lg:gap-8">
          {navLinks.map((link) => {
            const item = link.toLowerCase();
            return (
              <a 
                key={link} 
                href={`#${item}`}
                onClick={() => setActiveSection(item)}
                className="relative px-4 py-2 text-[10px] font-mono uppercase tracking-[0.3em] text-slate-200 hover:text-white transition-colors z-10"
              >
                <span className="relative z-10">{link}</span>

                {/* THE SLIDING PILL ANIMATION */}
{/* THE SLIDING SQUARE-PILL ANIMATION */}
{activeSection === item && (
  <div className="absolute inset-0 flex items-center justify-center">
    {/* 1. THE 3D ORBITAL SQUARE FRAME */}
    <motion.div 
      layoutId="activePill"
      animate={{
        // THE JUMPING EFFECT: 
        y: [0, 50, -50, 0], 
        scale: [1, 0.6, 1.3, 1],
        opacity: [1, 0.8, 0.9, 1],
        rotateX: [0, 45, -45, 0],
      }}
      transition={{
        duration: 0.8,
        ease: "anticipate"
      }}
      // CHANGED: rounded-xl for the Square/Rectangle shape
      className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-900 rounded-xl -z-10 shadow-[0_0_30px_rgba(37,99,235,0.5)] border border-blue-400/30"
    >
      {/* Glossy inner layer for depth */}
      <div className="absolute inset-0 rounded-xl bg-white/10 blur-[1px]" />
      
      {/* Corner Accents to emphasize the Square shape */}
      <div className="absolute top-1 left-1 w-1 h-1 border-t border-l border-white/40" />
      <div className="absolute bottom-1 right-1 w-1 h-1 border-b border-r border-white/40" />
    </motion.div>

    {/* 2. THE IMPACT TEXT/EFFECT */}
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
          className="text-cyan-400 font-mono font-black text-[10px]"
          style={{ textShadow: '0 0-10px rgba(34, 211, 238, 0.6)' }}
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