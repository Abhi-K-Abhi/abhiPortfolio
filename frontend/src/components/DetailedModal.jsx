import { motion } from 'framer-motion';

const DetailedModal = ({ item, onClose, layoutId }) => {
  // 1. Guard clause to prevent rendering if no item is selected
  if (!item) return null;

  // 2. Determine layoutId: Fallback order ensures animation works for both types
  // Projects use item.id, Experiences use item.company
  const activeLayoutId = layoutId || (item.id ? `card-${item.id}` : `card-${item.company}`);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-slate-950/95 backdrop-blur-xl"
      onClick={onClose}
    >
      <motion.div 
        layoutId={activeLayoutId} 
        className="bg-slate-900 border border-slate-800 w-full max-w-6xl h-full max-h-[90vh] rounded-3xl overflow-hidden flex flex-col shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* HEADER: Sticky at the top */}
        <div className="p-6 border-b border-slate-800 flex justify-between items-center bg-slate-900/50 backdrop-blur-md">
          <div>
            <h2 className="text-3xl font-black tracking-tighter text-white">
              {item.title || item.role}
            </h2>
            <p className="text-blue-500 font-mono text-xs uppercase tracking-widest mt-1">
              {item.category || item.company || "Engineering_Log"}
            </p>
          </div>
          <button 
            onClick={onClose} 
            className="text-slate-500 hover:text-white font-mono bg-slate-800 px-4 py-2 rounded-full text-xs transition-colors"
          >
            ESC_CLOSE [X]
          </button>
        </div>

        {/* MAIN BODY: Scrollable */}
        <div className="flex-1 overflow-y-auto custom-scrollbar p-6 md:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* LEFT COLUMN: Media & Deep Info */}
            <div className="lg:col-span-8 space-y-10">
              
              {/* 1. PRIMARY IMAGE */}
              {item.image_url && (
                <div className="w-full rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl group relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 to-transparent z-10" />
                  <img 
                    src={item.image_url} 
                    alt={item.title} 
                    className="w-full h-auto object-cover max-h-[450px] opacity-90 group-hover:opacity-100 transition-opacity" 
                  />
                </div>
              )}

              {/* 2. DESCRIPTION */}
              <div className="space-y-4">
                <h3 className="text-sm font-mono text-blue-500 uppercase tracking-[0.3em]">System_Overview</h3>
                <p className="text-slate-300 text-lg leading-relaxed font-light">
                  {item.long_description || (item.points && item.points[0]) || item.desc || "No detailed description available."}
                </p>
              </div>

              {/* 3. SYSTEM DATA FLOW */}
              {item.data_flow && Array.isArray(item.data_flow) && (
                <div className="mt-12 p-8 bg-slate-950/40 border border-blue-500/10 rounded-3xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-5 font-mono text-xs tracking-tighter">DATA_PIPELINE_v1</div>
                  <h4 className="text-[10px] font-mono text-blue-500 uppercase tracking-[0.4em] mb-10 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-ping" />
                    Architecture_Logic_Stream
                  </h4>
                  <div className="flex flex-col md:flex-row items-stretch justify-between gap-4">
                    {item.data_flow.map((step, i) => (
                      <div key={i} className="flex flex-col md:flex-row items-center gap-4 flex-1">
                        <div className="p-4 border border-slate-800 bg-slate-900/80 rounded-xl w-full text-center hover:border-blue-500/40 transition-colors">
                          <p className="text-[9px] font-mono text-blue-400 mb-2 uppercase opacity-60">{step.node}</p>
                          <p className="text-xs text-slate-200 font-semibold tracking-tight leading-tight">{step.desc}</p>
                        </div>
                        {i < item.data_flow.length - 1 && (
                          <span className="text-slate-700 md:rotate-0 rotate-90 font-bold text-xl">→</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* 4. DEPTH RIDE (Evolution) */}
              {item.depth_ride && (
                <div className="mt-12 pt-8 border-t border-slate-800/50">
                  <h4 className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-8">
                    Professional_Depth_Evolution
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="space-y-3">
                      <div className="text-[10px] font-mono text-slate-500 px-2 py-1 bg-slate-800/30 w-fit rounded">01_START</div>
                      <p className="text-[13px] text-slate-400 italic leading-relaxed">{item.depth_ride.start}</p>
                    </div>
                    <div className="space-y-3 md:border-l border-slate-800 md:pl-8">
                      <div className="text-[10px] font-mono text-blue-500 px-2 py-1 bg-blue-500/10 w-fit rounded">02_GROWTH</div>
                      <p className="text-[13px] text-slate-400 italic leading-relaxed">{item.depth_ride.growth}</p>
                    </div>
                    <div className="space-y-3 md:border-l border-slate-800 md:pl-8">
                      <div className="text-[10px] font-mono text-green-500 px-2 py-1 bg-green-500/10 w-fit rounded">03_IMPACT</div>
                      <p className="text-[13px] text-slate-200 font-bold leading-relaxed">{item.depth_ride.peak}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* 5. STRATEGIC ROADMAP */}
              {item.roadmap && Array.isArray(item.roadmap) && (
                <div className="relative mt-12 p-8 rounded-2xl border border-slate-800/50 overflow-hidden bg-slate-900/20">
                  <div 
                    className="absolute inset-0 z-0 opacity-10 pointer-events-none"
                    style={{
                      backgroundImage: `url(${item.roadmapImage || '/assets/circuit-bg.jpg'})`,
                      backgroundSize: 'cover',
                      filter: 'blur(12px)'
                    }}
                  />
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-10">
                      <div className="w-1 h-6 bg-blue-500 shadow-[0_0_10px_#3b82f6]" />
                      <h4 className="text-blue-500 font-mono text-[10px] tracking-[0.5em] uppercase">
                        Strategic_Execution_Roadmap
                      </h4>
                    </div>
                    <div className="space-y-12">
                      {item.roadmap.map((phase, index) => (
                        <div key={index} className="relative pl-10 border-l border-slate-800">
                          <div className="absolute -left-[6.5px] top-0 w-3 h-3 rounded-full bg-slate-900 border border-blue-500 shadow-[0_0_8px_#3b82f6]" />
                          <div className="mb-4">
                            <span className="text-[10px] font-mono text-blue-400/60 uppercase tracking-widest">
                              Phase_0{index + 1} // {phase.mainObjective}
                            </span>
                            <h5 className="text-xl font-bold text-white mt-1 uppercase tracking-tight">
                              {phase.title}
                            </h5>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
                            {phase.subTasks?.map((task, i) => (
                              <div key={i} className="flex items-center gap-3 p-3 bg-slate-950/40 border border-slate-800/50 rounded-lg group/task hover:border-blue-500/30 transition-colors">
                                <div className="w-1.5 h-1.5 bg-blue-500/20 group-hover/task:bg-blue-500 rounded-full transition-colors" />
                                <span className="text-xs text-slate-400 font-mono tracking-tighter">{task}</span>
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

            {/* RIGHT COLUMN: Specs & Metrics */}
            <div className="lg:col-span-4 space-y-8">
              
              {/* IMPACT METRICS */}
              {item.impact_metrics && (
                <div className="space-y-4">
                  <h4 className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-4">Performance_KPIs</h4>
                  {(Array.isArray(item.impact_metrics) ? item.impact_metrics : [item.impact_metrics]).map((metric, i) => (
                    <div key={i} className="bg-slate-900 border border-slate-800 p-4 rounded-xl hover:border-blue-500/30 transition-all group">
                      <p className="text-blue-400 font-mono text-sm md:text-base font-black group-hover:scale-105 transition-transform origin-left">{metric}</p>
                      <p className="text-slate-600 text-[8px] uppercase tracking-widest mt-1">Verified_Outcome</p>
                    </div>
                  ))}
                </div>
              )}
                          
              {/* TECH MANIFEST */}
              <div className="bg-slate-950/40 p-6 rounded-2xl border border-slate-800 shadow-inner">
                <h4 className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-6 border-b border-slate-800/50 pb-2">Technical_Manifest</h4>
                <div className="flex flex-wrap gap-2">
                  {(item.tech || item.tech_stack || []).map((t, i) => (
                    <span key={i} className="text-[10px] font-mono text-blue-400 bg-blue-500/5 px-3 py-1.5 rounded border border-blue-500/10">
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
                      className="flex items-center justify-center gap-2 w-full py-4 bg-white text-black hover:bg-blue-500 hover:text-white rounded-xl font-bold transition-all duration-300 text-sm"
                    >
                      <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                      ACCESS_REPOSITORY
                    </a>
                  </div>
                )}
              </div>

              {/* HIGHLIGHTS */}
              <div className="p-4">
                <h4 className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-4">Key_Highlights</h4>
                <ul className="space-y-4">
                  {(item.points || item.detailed_points || []).map((p, i) => (
                    <li key={i} className="text-xs text-slate-400 flex gap-3 leading-relaxed">
                      <span className="text-blue-500 font-bold">/</span> {p}
                    </li>
                  ))}
                </ul>
              </div>

              {/* OVERCOMES (CHALLENGES) */}
              {item.overcomes && Array.isArray(item.overcomes) && item.overcomes.map((oc, index) => (
                <div key={index} className="space-y-4 p-4 border-l border-slate-800">
                  <p className="text-xs text-slate-400 leading-relaxed">
                    <span className="text-red-500 font-mono text-[10px] block mb-1">CHALLENGE_LOG</span> 
                    {oc.challenge}
                  </p>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    <span className="text-green-500 font-mono text-[10px] block mb-1">SOLUTION_DEPLOYED</span> 
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