// import { motion } from 'framer-motion';

// const Hero = ({ profile }) => {
//   if (!profile) return null;

//   return (
//     <section id="home" className="relative min-h-screen w-full flex items-center justify-center bg-slate-950 overflow-hidden">
      
//       {/* --- BACKGROUND LAYER --- */}
//       <div className="absolute inset-0 w-full h-full z-0 pointer-events-none bg-slate-950">
        
//         {/* Dark Tint Overlay */}
//         <div className="absolute inset-0 bg-slate-950/70 z-10" />
        
//         {/* THE GIF: Changed to object-contain to show the WHOLE file */}
//         <img 
//           src="/assets/iron_1.gif" 
//           alt="Background" 
//           className="absolute inset-0 w-full h-full object-contain opacity-60"
//           style={{ 
//             width: '100%', 
//             height: '100%',
//             maxWidth: 'none' 
//           }}
//         />

//         {/* Bottom Fade */}
//         <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent z-20" />
//       </div>

//       {/* --- CONTENT LAYER --- */}
//       <div className="relative z-30 max-w-7xl mx-auto px-6 w-full text-center md:text-left">
//         <motion.div 
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="space-y-8"
//         >
//           <div className="space-y-2">
//             <h2 className="text-blue-500 font-mono tracking-[0.4em] uppercase text-xs md:text-sm">
//               Software Architect & AI Engineer
//             </h2>
//             <h1 className="text-7xl md:text-9xl font-black tracking-tighter leading-none text-white">
//               {profile.name?.split(' ')[0]}<br />
//               <span className="text-slate-800">{profile.name?.split(' ')[1]}</span>
//             </h1>
//           </div>

//           <p className="max-w-2xl text-lg md:text-xl text-slate-400 leading-relaxed font-light mx-auto md:mx-0">
//             {profile.summary}
//           </p>

//           <div className="flex flex-wrap gap-3 justify-center md:justify-start">
//             {profile.strengths?.map((strength, index) => (
//               <span 
//                 key={index}
//                 className="px-4 py-2 border border-slate-800 bg-slate-900/50 backdrop-blur-md rounded-full text-[10px] font-mono text-slate-500 uppercase tracking-widest"
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

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const Hero = ({ profile }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  });

  // Movement remains, but we keep the opacity strong
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 10]);
  
  // High opacity (0.95) that stays solid until you've scrolled a fair bit
  const opacity = useTransform(scrollYProgress, [0, 0.7], [0.15, 0]);

  if (!profile) return null;

  return (
    <section 
      ref={targetRef} 
      id="home" 
      className="relative h-screen w-full flex items-center justify-center bg-slate-950 overflow-hidden"
    >
      {/* 1. THE FLOATING ASSET: "Less Transparent" / Solid Version */}
      <motion.div
        style={{ y, rotate, opacity }}
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.15 }} 
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-10 pointer-events-none flex items-center justify-center"
      >
        <img 
          src="/assets/iron_1.gif" 
          alt="Visualization" 
          className="w-full h-full object-cover"
          style={{ 
            // Removed blur and grayscale to keep it bold/original
            filter: 'brightness(1.1) contrast(1.05)',
            minWidth: '100vw',
            minHeight: '100vh',
          }}
        />
      </motion.div>

      {/* 2. GRADIENT OVERLAY: Only at the bottom to blend with next section */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
      </div>

      {/* 3. CONTENT LAYER */}
      <div className="relative z-30 max-w-7xl mx-auto px-6 w-full text-center md:text-left">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <h2 className="text-blue-500 font-mono tracking-[0.5em] uppercase text-xs">
              Software Architect & AI Engineer
            </h2>
            <h1 className="text-[12vw] md:text-[13rem] font-black tracking-tighter leading-[0.75] text-white">
              {profile.name?.split(' ')[0]}<br />
              <span className="text-slate-800">{profile.name?.split(' ')[1]}</span>
            </h1>
          </div>

          <p className="max-w-xl text-xl text-slate-400 leading-relaxed font-light mx-auto md:mx-0">
            {profile.summary}
          </p>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            {profile.strengths?.map((strength, index) => (
              <span 
                key={index} 
                className="px-6 py-3 border border-slate-800 bg-slate-900/90 backdrop-blur-md rounded-xl text-[10px] font-mono text-slate-500 uppercase tracking-widest"
              >
                {strength}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;