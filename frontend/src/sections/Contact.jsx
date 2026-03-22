import { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = ({ contact }) => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const copyEmail = () => {
    navigator.clipboard.writeText(contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-32 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20">
          {/* Left: Branding & Copy Logic */}
          <div className="space-y-12">
            <h2 className="text-8xl font-black tracking-tighter leading-none text-white">
              LET'S <br /> <span className="text-blue-500">CONNECT.</span>
            </h2>
            
            <div className="space-y-6">
              <p className="text-slate-500 font-mono uppercase tracking-widest text-sm">Email Me</p>
              
              {/* GROUPED EMAIL ACTIONS */}
              <div className="flex flex-col gap-6">
                {/* 1. Clickable Email Text */}
                <button 
                  onClick={copyEmail}
                  className="text-2xl md:text-4xl font-bold text-white hover:text-blue-500 transition-colors break-all text-left flex items-center gap-4"
                >
                  {contact.email} 
                  {copied && <span className="text-sm text-green-500 font-mono animate-pulse">[COPIED!]</span>}
                </button>

                {/* 2. BUTTON ROW */}
                <div className="flex flex-wrap gap-4">
                  {/* Copy Button */}
                  <button 
                    onClick={copyEmail}
                    className="flex items-center gap-2 px-6 py-3 bg-slate-900 border border-slate-800 text-slate-300 font-mono text-xs tracking-widest hover:bg-slate-800 hover:border-blue-500 transition-all rounded-lg group"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:text-blue-500"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
                    {copied ? "SUCCESS" : "COPY_ADDRESS"}
                  </button>

                  {/* Direct Mail Button (Triggers Outlook/Mail) */}
                  <a 
                    href={`mailto:${contact.email}`}
                    className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-mono text-xs font-bold tracking-widest hover:bg-blue-500 transition-all rounded-lg shadow-[0_0_15px_rgba(37,99,235,0.2)]"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
                    OPEN_MAILER
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Modern Form Logic */}
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input 
                type="text" 
                placeholder="NAME"
                className="bg-slate-900/50 border border-slate-800 p-4 focus:border-blue-500 outline-none font-mono text-sm text-white"
              />
              <input 
                type="email" 
                placeholder="EMAIL"
                className="bg-slate-900/50 border border-slate-800 p-4 focus:border-blue-500 outline-none font-mono text-sm text-white"
              />
            </div>
            <textarea 
              placeholder="MESSAGE" 
              rows="5"
              className="w-full bg-slate-900/50 border border-slate-800 p-4 focus:border-blue-500 outline-none font-mono text-sm text-white"
            ></textarea>
            <button className="w-full bg-blue-600 hover:bg-blue-500 py-4 font-black text-white tracking-widest transition-all">
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;