// import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
// import { useRef, useState } from 'react';

// const Hero = ({ profile }) => {
//   const targetRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: targetRef,
//     offset: ["start start", "end start"]
//   });

//   // Movement remains, but we keep the opacity strong
//   const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
//   const rotate = useTransform(scrollYProgress, [0, 1], [0, 10]);
  
//   // High opacity (0.95) that stays solid until you've scrolled a fair bit
//   const opacityTransform = useTransform(scrollYProgress, [0, 0.7], [0.15, 0]);

//   // --- 1. NIGHT EFFECT LOGIC (Synchronized) ---
//   const mouseX = useMotionValue(0);
//   const mouseY = useMotionValue(0);

//   const springX = useSpring(mouseX, { stiffness: 40, damping: 25 });
//   const springY = useSpring(mouseY, { stiffness: 40, damping: 25 });

//   // Parallax: Stars move slightly with mouse (matching other sections)
//   const starMoveX = useTransform(springX, [0, 1920], [15, -15]);
//   const starMoveY = useTransform(springY, [0, 1080], [15, -15]);

//   const handleMouseMove = (e) => {
//     mouseX.set(e.clientX);
//     mouseY.set(e.clientY);
//   };

//   const [stars] = useState(() => 
//     Array.from({ length: 100 }, () => ({
//       top: `${Math.random() * 100}%`,
//       left: `${Math.random() * 100}%`,
//       size: Math.random() * 1.5 + 0.5,
//       duration: Math.random() * 4 + 2,
//     }))
//   );
//   // --- END NIGHT EFFECT LOGIC ---

//   if (!profile) return null;

//   return (
//     <section 
//       ref={targetRef} 
//       id="home" 
//       onMouseMove={handleMouseMove} // Mouse tracking added
//       className="relative h-screen w-full flex items-center justify-center bg-transparent overflow-hidden" // Changed to bg-transparent
//     >
//       {/* --- 2. NIGHT EFFECT LAYERS (No Moon) --- */}
      
//       {/* ATMOSPHERIC GLOW */}
//       <div className="absolute inset-0 pointer-events-none opacity-30 z-0">
//         <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-purple-900/40 rounded-full blur-[120px]" />
//         <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-900/20 rounded-full blur-[100px]" />
//       </div>

//       {/* THE FLOATING STARFIELD */}
//       <motion.div 
//         style={{ x: starMoveX, y: starMoveY }}
//         className="absolute inset-0 pointer-events-none z-0"
//       >
//         {stars.map((star, i) => (
//           <motion.div
//             key={i}
//             animate={{ opacity: [0.1, 0.7, 0.1], scale: [1, 1.2, 1] }}
//             transition={{ duration: star.duration, repeat: Infinity, ease: "easeInOut" }}
//             className="absolute bg-white rounded-full"
//             style={{
//               top: star.top,
//               left: star.left,
//               width: star.size,
//               height: star.size,
//               boxShadow: '0 0 4px rgba(255, 255, 255, 0.8)'
//             }}
//           />
//         ))}
//       </motion.div>
//       {/* --- END NIGHT EFFECT LAYERS --- */}

//       {/* 3. THE FLOATING ASSET: (Existing GIF) */}
//       <motion.div
//         style={{ y, rotate, opacity: opacityTransform }}
//         initial={{ scale: 1.1, opacity: 0 }}
//         animate={{ scale: 1, opacity: 0.15 }} 
//         transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }} // Added slight delay to sync with stars
//         className="absolute inset-0 z-10 pointer-events-none flex items-center justify-center"
//       >
//         <img 
//           src="/assets/iron_1.gif" 
//           alt="Visualization" 
//           className="w-full h-full object-cover"
//           style={{ 
//             filter: 'brightness(1.1) contrast(1.05)',
//             minWidth: '100vw',
//             minHeight: '100vh',
//           }}
//         />
//       </motion.div>

//       {/* 4. GRADIENT OVERLAY (Blend with next section) */}
//       <div className="absolute inset-0 z-20 pointer-events-none">
//         <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#150123] via-[#150123]/40 to-transparent" />
//       </div>

//       {/* 5. CONTENT LAYER */}
//       <div className="relative z-30 max-w-7xl mx-auto px-6 w-full text-center md:text-left">
//         <motion.div 
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1.2, delay: 0.8 }} // Delayed slightly for the stars/GIF animation
//           className="space-y-8"
//         >
//           <div className="space-y-4">
//             <h2 className="text-purple-400 font-mono tracking-[0.5em] uppercase text-sm"> {/* Adjusted text color */}
//               Software Architect & AI Engineer
//             </h2>
//             <h1 className="text-[12vw] md:text-[13rem] font-black tracking-tighter leading-[0.75] text-white">
//               {profile.name?.split(' ')[0]}<br />
//               <span className="text-purple-800">{profile.name?.split(' ')[1]}</span> {/* Adjusted text color */}
//             </h1>
//           </div>

//           <p className="max-w-xl text-xl text-slate-300 leading-relaxed font-light mx-auto md:mx-0"> {/* Muted white text */}
//             {profile.summary}
//           </p>

//           <div className="flex flex-wrap gap-4 justify-center md:justify-start">
//             {profile.strengths?.map((strength, index) => (
//               <span 
//                 key={index} 
//                 className="px-6 py-3 border border-purple-500/20 bg-black/50 backdrop-blur-md rounded-xl text-[10px] font-mono text-purple-300 uppercase tracking-widest" // Adjusted colors
//               >
//                 {strength}
//               </span>
//             ))}
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Hero;



import { motion, useScroll, useTransform, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react'; // Added useEffect

const Hero = ({ profile }) => {
  const targetRef = useRef(null);
  
  // --- NEW: WORD SWAPPING LOGIC ---
  const words = ["Modern", "Secure", "Scalable", "Creative"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);
  // --- END WORD SWAPPING LOGIC ---

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 10]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.7], [0.15, 0]);

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

  const [stars] = useState(() => 
    Array.from({ length: 100 }, () => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 1.5 + 0.5,
      duration: Math.random() * 4 + 2,
    }))
  );

  if (!profile) return null;

  return (
    <section 
      ref={targetRef} 
      id="home" 
      onMouseMove={handleMouseMove}
      className="relative h-screen w-full flex items-center justify-center bg-transparent overflow-hidden"
    >
      {/* ATMOSPHERIC GLOW (Untouched) */}
      <div className="absolute inset-0 pointer-events-none opacity-30 z-0">
        <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-purple-900/40 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-900/20 rounded-full blur-[100px]" />
      </div>

      {/* STARFIELD (Untouched) */}
      <motion.div style={{ x: starMoveX, y: starMoveY }} className="absolute inset-0 pointer-events-none z-0">
        {stars.map((star, i) => (
          <motion.div
            key={i}
            animate={{ opacity: [0.1, 0.7, 0.1], scale: [1, 1.2, 1] }}
            transition={{ duration: star.duration, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bg-white rounded-full"
            style={{
              top: star.top, left: star.left, width: star.size, height: star.size,
              boxShadow: '0 0 4px rgba(255, 255, 255, 0.8)'
            }}
          />
        ))}
      </motion.div>

      {/* FLOATING GIF (Untouched) */}
      <motion.div
        style={{ y, rotate, opacity: opacityTransform }}
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.15 }} 
        transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
        className="absolute inset-0 z-10 pointer-events-none flex items-center justify-center"
      >
        <img src="/assets/iron_1.gif" alt="Visualization" className="w-full h-full object-cover" style={{ filter: 'brightness(1.1) contrast(1.05)', minWidth: '100vw', minHeight: '100vh' }} />
      </motion.div>

      {/* GRADIENT OVERLAY (Untouched) */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#150123] via-[#150123]/40 to-transparent" />
      </div>

      {/* 5. CONTENT LAYER (Enhanced with New Features) */}
      <div className="relative z-30 max-w-7xl mx-auto px-6 w-full text-center md:text-left">
        <div className="space-y-8">
          <div className="space-y-4">
            
            {/* NEW: ENTRANCE ANIMATION FOR NAME */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1, ease: "easeOut" }}
            >
              <h2 className="font-bold text-purple-400 font-mono tracking-[0.4em] uppercase text-2xl">
                Hi I'm <span className="text-purple-200 font-bold text-6xl">{profile.name}</span>
              </h2>
            </motion.div>

            {/* STATIC TITLE */}
            <h1 className="text-[10vw] md:text-[3rem] font-black tracking-tighter leading-[0.8] text-purple-100 uppercase">
              Dedicated to <br />
              <span className="text-slate-500">Crafting</span>
            </h1>

            {/* NEW: THE SWAPPING WORD EFFECT */}
            <div className="h-[80px] md:h-[110px] overflow-hidden flex items-center justify-center md:justify-start">
              <AnimatePresence mode="wait">
                <motion.span
                  key={words[index]}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -50, opacity: 0 }}
                  transition={{ duration: 0.5, ease: "circOut" }}
                  className="text-[12vw] md:text-[9rem] font-black text-[#E9D5FF] tracking-tighter leading-none uppercase block"
                  style={{ textShadow: '0 0 10px rgba(168, 85, 247, 0.4)' }}
                >
                  {words[index]}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>

          <h2 className="text-purple-300 font-bold font-mono tracking-[0.5em] uppercase text-m"> {/* Adjusted text color */}
            Software Architect & AI Engineer
          </h2>

          {/* <p className="max-w-xl text-xl text-slate-300 leading-relaxed font-light mx-auto md:mx-0">
            {profile.summary}
          </p> */}

          {/* STRENGTHS (Untouched) */}
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            {profile.strengths?.map((strength, index) => (
              <span key={index} className="px-6 py-3 border border-purple-500/20 bg-black/60 backdrop-blur-md rounded-xl text-[13px] font-mono text-purple-200 text-bold uppercase tracking-widest">
                {strength}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;