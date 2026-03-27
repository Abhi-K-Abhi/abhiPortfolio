import { motion } from 'framer-motion';

const DetailedModal = ({ item, onClose, layoutId }) => {
  if (!item) return null;

  const activeLayoutId = layoutId || (item.id ? `card-${item.id}` : `card-${item.company}`);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/30 backdrop-blur-2xl"
      onClick={onClose}
    >
      <motion.div 
        layoutId={activeLayoutId} 
        className="bg-[#0a0112] border border-purple-500/20 w-full max-w-6xl h-full max-h-[92vh] rounded-[2rem] overflow-hidden flex flex-col shadow-[0_0_50px_rgba(0,0,0,0.8)] relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* HUD DECORATIVE GLOWS */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-purple-600/10 blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-600/5 blur-[100px] pointer-events-none" />
        
        {/* HEADER */}
        <div className="relative z-10 p-8 border-b border-purple-500/10 flex justify-between items-center bg-[#150123]/40 backdrop-blur-md">
          <div className="space-y-1">
            <div className="flex items-center gap-2 mb-1">
               <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
               <p className="text-purple-400 font-mono text-[10px] uppercase tracking-[0.3em]">
                 System_Manifest_v2.0
               </p>
            </div>
            <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-white uppercase italic">
              {item.title || item.role}
            </h2>
            <p className="text-purple-300/60 font-mono text-xs uppercase tracking-widest">
              {item.category || item.company || "Engineering_Log"}
            </p>
          </div>
          
          <button 
            onClick={onClose} 
            className="group relative flex items-center justify-center px-6 py-3 rounded-xl bg-purple-500/5 border border-purple-500/20 hover:border-purple-400 transition-all shadow-inner"
          >
            <span className="text-purple-300 font-mono text-[10px] group-hover:text-white transition-colors">ESC_CLOSE [X]</span>
            <div className="absolute inset-0 bg-purple-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>
        </div>

        {/* MAIN BODY */}
        <div className="flex-1 overflow-y-auto custom-scrollbar p-6 md:p-10 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* LEFT COLUMN */}
            <div className="lg:col-span-8 space-y-12">
              
              {/* PRIMARY IMAGE */}
              {item.image_url && (
                <div className="w-full rounded-[2rem] overflow-hidden border border-purple-500/20 bg-black shadow-2xl group relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0112] via-transparent to-transparent z-10" />
                  <img 
                    src={item.image_url} 
                    alt={item.title} 
                    className="w-full h-auto object-cover max-h-[500px] opacity-80 group-hover:opacity-100 transition-opacity duration-700" 
                  />
                </div>
              )}

              {/* DESCRIPTION */}
              <div className="relative pl-6">
                <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-purple-500 to-transparent" />
                <h3 className="text-[10px] font-mono text-purple-500 uppercase tracking-[0.4em] mb-4">01_System_Overview</h3>
                <p className="text-purple-100/80 text-lg leading-relaxed font-light italic">
                  {item.long_description || (item.points && item.points[0]) || item.desc || "No detailed description available."}
                </p>
              </div>

              {/* SYSTEM DATA FLOW */}
              {item.data_flow && Array.isArray(item.data_flow) && (
                <div className="p-8 bg-[#150123]/30 border border-purple-500/10 rounded-[2rem] relative overflow-hidden group hover:border-purple-500/30 transition-colors">
                  <div className="absolute top-0 right-0 p-4 opacity-10 font-mono text-[8px] text-purple-400 uppercase tracking-widest">Logic_Stream_Data</div>
                  <h4 className="text-[10px] font-mono text-purple-400 uppercase tracking-[0.3em] mb-10 flex items-center gap-2">
                    <span className="w-1 h-1 bg-purple-400 rounded-full" />
                    Architecture_Logic_Stream
                  </h4>
                  <div className="flex flex-col md:flex-row items-stretch justify-between gap-4">
                    {item.data_flow.map((step, i) => (
                      <div key={i} className="flex flex-col md:flex-row items-center gap-4 flex-1">
                        <div className="p-5 border border-purple-500/10 bg-black/40 rounded-2xl w-full text-center hover:border-purple-400/40 transition-all">
                          <p className="text-[9px] font-mono text-purple-500 mb-2 uppercase tracking-tighter">{step.node}</p>
                          <p className="text-xs text-purple-100 font-bold tracking-tight">{step.desc}</p>
                        </div>
                        {i < item.data_flow.length - 1 && (
                          <span className="text-purple-500/30 md:rotate-0 rotate-90 text-2xl font-light">→</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* DEPTH RIDE */}
              {item.depth_ride && (
                <div className="pt-8 border-t border-purple-500/10">
                  <h4 className="text-[10px] font-mono text-purple-500/50 uppercase tracking-widest mb-8">Professional_Depth_Evolution</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="space-y-3 p-4 rounded-xl hover:bg-white/5 transition-colors">
                      <div className="text-[9px] font-mono text-purple-400 px-2 py-1 bg-purple-500/10 w-fit rounded uppercase tracking-tighter">01_Start</div>
                      <p className="text-[13px] text-purple-300/70 italic leading-relaxed">{item.depth_ride.start}</p>
                    </div>
                    <div className="space-y-3 p-4 border-l border-purple-500/10">
                      <div className="text-[9px] font-mono text-blue-400 px-2 py-1 bg-blue-500/10 w-fit rounded uppercase tracking-tighter">02_Growth</div>
                      <p className="text-[13px] text-purple-300/70 italic leading-relaxed">{item.depth_ride.growth}</p>
                    </div>
                    <div className="space-y-3 p-4 border-l border-purple-500/10">
                      <div className="text-[9px] font-mono text-purple-400 px-2 py-1 bg-purple-500/20 w-fit rounded uppercase tracking-tighter">03_Impact</div>
                      <p className="text-[13px] text-white font-bold leading-relaxed">{item.depth_ride.peak}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* ROADMAP */}
              {item.roadmap && Array.isArray(item.roadmap) && (
                <div className="relative p-8 rounded-[2rem] border border-purple-500/10 overflow-hidden bg-[#150123]/20">
                  <div className="relative z-10">
                    <h4 className="text-purple-500 font-mono text-[10px] tracking-[0.5em] uppercase mb-10">Strategic_Execution_Roadmap</h4>
                    <div className="space-y-12">
                      {item.roadmap.map((phase, index) => (
                        <div key={index} className="relative pl-10 border-l border-purple-500/20">
                          <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full bg-[#0a0112] border border-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.5)]" />
                          <div className="mb-4">
                            <span className="text-[10px] font-mono text-purple-400/40 uppercase tracking-widest">Phase_0{index + 1}</span>
                            <h5 className="text-xl font-black text-white italic uppercase tracking-tight">{phase.title}</h5>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {phase.subTasks?.map((task, i) => (
                              <div key={i} className="flex items-center gap-3 p-3 bg-purple-500/5 border border-purple-500/10 rounded-xl hover:bg-purple-500/10 transition-all">
                                <div className="w-1 h-1 bg-purple-400 rounded-full" />
                                <span className="text-xs text-purple-200/60 font-mono tracking-tighter">{task}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* RIGHT COLUMN */}
            <div className="lg:col-span-4 space-y-8">
              
              {/* IMPACT METRICS */}
              {item.impact_metrics && (
                <div className="p-6 bg-gradient-to-br from-[#150123] to-black rounded-[2rem] border border-purple-500/20">
                  <h4 className="text-[10px] font-mono text-purple-500/50 uppercase tracking-widest mb-6">Primary_KPI_Indicators</h4>
                  <div className="space-y-4">
                    {(Array.isArray(item.impact_metrics) ? item.impact_metrics : [item.impact_metrics]).map((metric, i) => (
                      <div key={i} className="border-l-2 border-purple-500/40 pl-4 py-1 hover:border-purple-400 transition-colors">
                        <p className="text-white font-black text-xl italic tracking-tighter uppercase">{metric}</p>
                        <p className="text-purple-500/40 text-[8px] uppercase tracking-widest mt-1">Impact_Verified</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
                                     
              {/* TECH MANIFEST */}
              <div className="bg-black/40 p-6 rounded-[2rem] border border-purple-500/10 shadow-2xl">
                <h4 className="text-[10px] font-mono text-purple-500 uppercase tracking-widest mb-6 border-b border-purple-500/10 pb-2">Tech_Manifest</h4>
                <div className="flex flex-wrap gap-2">
                  {(item.tech || item.tech_stack || []).map((t, i) => (
                    <span key={i} className="text-[10px] font-mono text-purple-300 bg-purple-500/5 px-3 py-1.5 rounded-lg border border-purple-500/10 hover:border-purple-400/40 transition-colors">
                      {t}
                    </span>
                  ))}
                </div>

                {item.github_url && (
                  <div className="mt-10">
                    <a 
                      href={item.github_url} 
                      target="_blank" 
                      rel="noreferrer"
                      className="group flex items-center justify-center gap-3 w-full py-4 bg-white text-black hover:bg-purple-500 hover:text-white rounded-2xl font-black transition-all duration-500 text-xs uppercase tracking-tighter italic"
                    >
                      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                      Access_Repo_Mainframe
                    </a>
                  </div>
                )}
              </div>

              {/* HIGHLIGHTS */}
              <div className="px-2">
                <h4 className="text-[10px] font-mono text-purple-500 uppercase tracking-widest mb-4">Key_Highlights</h4>
                <ul className="space-y-4">
                  {(item.points || item.detailed_points || []).map((p, i) => (
                    <li key={i} className="text-[11px] text-purple-200/50 flex gap-3 leading-relaxed group">
                      <span className="text-purple-500 font-bold group-hover:translate-x-1 transition-transform">»</span> {p}
                    </li>
                  ))}
                </ul>
              </div>

              {/* OVERCOMES */}
              {item.overcomes && Array.isArray(item.overcomes) && item.overcomes.map((oc, index) => (
                <div key={index} className="space-y-4 p-5 bg-red-500/5 rounded-2xl border border-red-500/10">
                  <p className="text-[11px] text-red-200/70 italic">
                    <span className="text-red-500 font-mono text-[9px] block not-italic uppercase tracking-widest mb-1">Critical_Challenge</span> 
                    {oc.challenge}
                  </p>
                  <p className="text-[11px] text-green-200/70 italic">
                    <span className="text-green-500 font-mono text-[9px] block not-italic uppercase tracking-widest mb-1">Deployed_Solution</span> 
                    {oc.solution}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default DetailedModal;