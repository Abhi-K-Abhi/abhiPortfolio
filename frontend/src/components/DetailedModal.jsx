// import { motion } from 'framer-motion';

// const DetailedModal = ({ item, onClose }) => {
//   if (!item) return null;

//   return (
//     <motion.div 
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-slate-950/95 backdrop-blur-xl"
//       onClick={onClose}
//     >
//       <motion.div 
//         layoutId={`card-${item.id}`}
//         // SIZE UPGRADE: max-w-6xl and custom-scrollbar
//         className="bg-slate-900 border border-slate-800 w-full max-w-6xl h-full max-h-[90vh] rounded-3xl overflow-hidden flex flex-col shadow-2xl"
//         onClick={(e) => e.stopPropagation()}
//       >
//         {/* STICKY HEADER */}
//         <div className="p-6 border-b border-slate-800 flex justify-between items-center bg-slate-900/50 backdrop-blur-md">
//           <div>
//             <h2 className="text-3xl font-black tracking-tighter">{item.title}</h2>
//             <p className="text-blue-500 font-mono text-xs uppercase tracking-widest mt-1">
//               {item.category || "Technical Project"}
//             </p>
//           </div>
//           <button onClick={onClose} className="text-slate-500 hover:text-white font-mono bg-slate-800 px-4 py-2 rounded-full text-sm">
//             CLOSE [X]
//           </button>
//         </div>

//         {/* SCROLLABLE CONTENT AREA */}
//         <div className="flex-1 overflow-y-auto custom-scrollbar p-6 md:p-10">
//           <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
//             {/* LEFT: MEDIA & DESCRIPTION (8 Units) */}
//             <div className="lg:col-span-8 space-y-8">
//               {/* VIDEO PLAYER */}
//               {item.video_url && (
//                 <div className="aspect-video w-full rounded-2xl overflow-hidden border border-slate-800 bg-black shadow-inner">
//                   <iframe 
//                     src={item.video_url}
//                     className="w-full h-full"
//                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                     allowFullScreen
//                   />
//                 </div>
//               )}

//               <div className="space-y-4">
//                 <h3 className="text-xl font-bold text-blue-400">Executive Summary</h3>
//                 <p className="text-slate-300 text-lg leading-relaxed">
//                   {item.long_description || item.points[0]}
//                 </p>
//               </div>

//               {/* ROADMAP SECTION */}
//               {item.roadmap && (
//                 <div className="p-6 bg-slate-800/30 rounded-2xl border border-slate-800">
//                   <h3 className="text-sm font-mono text-slate-500 uppercase tracking-widest mb-4">Development_Roadmap</h3>
//                   <div className="space-y-4">
//                     {item.roadmap.map((step, i) => (
//                       <div key={i} className="flex gap-4 items-start">
//                         <span className="text-blue-500 font-mono text-xs mt-1">0{i+1}</span>
//                         <p className="text-slate-300">{step}</p>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               )}
//             </div>

//             {/* RIGHT: SPECS SIDEBAR (4 Units) */}
//             <div className="lg:col-span-4 space-y-8">
//               <div className="bg-slate-950/50 p-6 rounded-2xl border border-slate-800">
//                 <h4 className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-6 border-b border-slate-800 pb-2">System_Stack</h4>
//                 <div className="flex flex-wrap gap-2">
//                   {item.tech.map((t, i) => (
//                     <span key={i} className="text-[10px] font-mono text-blue-400 bg-blue-500/5 px-2 py-1 rounded border border-blue-500/20">
//                       {t}
//                     </span>
//                   ))}
//                 </div>

//                 {item.github_url && (
//                   <div className="mt-8">
//                     <a 
//                       href={item.github_url} 
//                       target="_blank" 
//                       className="block w-full py-3 bg-blue-600 hover:bg-blue-500 text-white text-center rounded-xl font-bold transition-all"
//                     >
//                       VIEW REPOSITORY
//                     </a>
//                   </div>
//                 )}
//               </div>

//               <div className="p-6">
//                 <h4 className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-4">Core_Points</h4>
//                 <ul className="space-y-3">
//                   {item.points.map((p, i) => (
//                     <li key={i} className="text-xs text-slate-400 flex gap-2">
//                       <span className="text-blue-500">•</span> {p}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>

//           </div>
//         </div>
//       </motion.div>
//     </motion.div>
//   );
// };

// export default DetailedModal;


import { motion } from 'framer-motion';

const DetailedModal = ({ item, onClose }) => {
  if (!item) return null;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-slate-950/95 backdrop-blur-xl"
      onClick={onClose}
    >
      <motion.div 
        layoutId={`card-${item.id}`}
        // SIZE: Upgraded to max-w-6xl for that "Dashboard" feel
        className="bg-slate-900 border border-slate-800 w-full max-w-6xl h-full max-h-[90vh] rounded-3xl overflow-hidden flex flex-col shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* HEADER: Sticky at the top */}
        <div className="p-6 border-b border-slate-800 flex justify-between items-center bg-slate-900/50 backdrop-blur-md">
          <div>
            <h2 className="text-3xl font-black tracking-tighter text-white">{item.title}</h2>
            <p className="text-blue-500 font-mono text-xs uppercase tracking-widest mt-1">
              {item.category || "Engineering_Log"}
            </p>
          </div>
          <button 
            onClick={onClose} 
            className="text-slate-500 hover:text-white font-mono bg-slate-800 px-4 py-2 rounded-full text-xs transition-colors"
          >
            ESC_CLOSE [X]
          </button>
        </div>

        {/* MAIN BODY: Scrollable with your custom scrollbar */}
        <div className="flex-1 overflow-y-auto custom-scrollbar p-6 md:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* LEFT COLUMN: Media & Deep Info (65%) */}
            <div className="lg:col-span-8 space-y-10">
              
              {/* 1. VIDEO / PRIMARY MEDIA */}
              {item.video_url && (
                <div className="aspect-video w-full rounded-2xl overflow-hidden border border-slate-800 bg-black shadow-2xl">
                  <iframe 
                    src={item.video_url}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              )}

              {/* 2. DESCRIPTION */}
              <div className="space-y-4">
                <h3 className="text-sm font-mono text-blue-500 uppercase tracking-[0.3em]">Project_Overview</h3>
                <p className="text-slate-300 text-lg leading-relaxed font-light">
                  {item.long_description || item.points[0]}
                </p>
              </div>

              {/* 3. ROADMAP / STEPS */}
              {item.roadmap && (
                <div className="p-8 bg-slate-800/20 rounded-3xl border border-slate-800/50">
                  <h3 className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-8">Development_Roadmap</h3>
                  <div className="space-y-6 relative">
                    {/* Vertical Line for Roadmap */}
                    <div className="absolute left-2 top-2 bottom-2 w-px bg-slate-800" />
                    
                    {item.roadmap.map((step, i) => (
                      <div key={i} className="flex gap-6 items-start relative">
                        <div className="w-4 h-4 rounded-full bg-blue-600 border-4 border-slate-900 z-10 mt-1" />
                        <p className="text-slate-300 text-sm md:text-base">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* RIGHT COLUMN: Technical Specs & Links (35%) */}
            <div className="lg:col-span-4 space-y-8">
              
              {/* TECH STACK PANEL */}
              <div className="bg-slate-950/40 p-6 rounded-2xl border border-slate-800 shadow-inner">
                <h4 className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-6 border-b border-slate-800/50 pb-2">System_Architecture</h4>
                <div className="flex flex-wrap gap-2">
                  {item.tech.map((t, i) => (
                    <span key={i} className="text-[10px] font-mono text-blue-400 bg-blue-500/5 px-3 py-1.5 rounded border border-blue-500/10">
                      {t}
                    </span>
                  ))}
                </div>

                {/* GITHUB / EXTERNAL LINK */}
                {item.github_url && (
                  <div className="mt-10">
                    <a 
                      href={item.github_url} 
                      target="_blank" 
                      rel="noreferrer"
                      className="flex items-center justify-center gap-2 w-full py-4 bg-white text-black hover:bg-blue-500 hover:text-white rounded-xl font-bold transition-all duration-300 text-sm"
                    >
                      <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                      SOURCE_CODE
                    </a>
                  </div>
                )}
              </div>

              {/* CORE PERFORMANCE POINTS */}
              <div className="p-4">
                <h4 className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-4">Key_Metrics</h4>
                <ul className="space-y-4">
                  {item.points.map((p, i) => (
                    <li key={i} className="text-xs text-slate-400 flex gap-3 leading-relaxed">
                      <span className="text-blue-500 font-bold">/</span> {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default DetailedModal;