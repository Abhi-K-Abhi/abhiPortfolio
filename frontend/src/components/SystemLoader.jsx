import { motion } from 'framer-motion';

const SystemLoader = () => {
  return (
    <div className="fixed inset-0 bg-slate-950 z-[200] flex items-center justify-center p-6">
      <div className="max-w-md w-full space-y-4">
        <div className="h-1 w-full bg-slate-900 overflow-hidden">
          <motion.div 
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="h-full w-1/3 bg-blue-600"
          />
        </div>
        <div className="font-mono text-[10px] text-slate-500 space-y-1 text-center">
          <p className="text-blue-500 tracking-widest uppercase">Initializing Portfolio OS</p>
          <p className="animate-pulse">Awaiting Backend Response...</p>
        </div>
      </div>
    </div>
  );
};

export default SystemLoader;