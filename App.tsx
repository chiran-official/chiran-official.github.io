import React, { useEffect, useState } from 'react';
import { 
  Terminal, 
  Database, 
  Server, 
  Code2, 
  Cpu, 
  Briefcase, 
  GraduationCap, 
  Award, 
  Github, 
  Linkedin, 
  Mail, 
  Download,
  MapPin,
  Phone
} from 'lucide-react';
import ChatInterface from './components/ChatInterface';
import SkillsChart from './components/SkillsChart';
import { EXPERIENCE_DATA, EDUCATION_DATA, CERTIFICATIONS_DATA, SKILLS_DATA, PERSONAL_INFO } from './constants';

function App() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen font-sans text-gray-300 selection:bg-cyber-primary selection:text-black">
      {/* Background Grid Animation */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-150"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(19,19,31,0.9)_1px,transparent_1px),linear-gradient(90deg,rgba(19,19,31,0.9)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        {/* Holographic Scanline */}
        <div className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-cyber-primary/40 to-transparent w-full animate-scanline blur-[1px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 pb-24">
        
        {/* Header / Hero */}
        <header className={`mb-16 transition-all duration-1000 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-gray-800 pb-8">
            <div>
              <div className="flex items-center gap-3 mb-2 animate-fade-in-up [animation-delay:0ms]">
                 <span className="px-2 py-1 text-xs font-mono bg-cyber-primary/10 text-cyber-primary border border-cyber-primary/20 rounded animate-pulse">
                   OPEN FOR WORK
                 </span>
                 <span className="text-xs font-mono text-gray-500">v2.0.26</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-2 animate-fade-in-up [animation-delay:100ms]">
                CHIRAN <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-primary to-blue-600 hover:animate-pulse cursor-default">SUBASINGHE</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-400 font-light flex items-center gap-2 animate-fade-in-up [animation-delay:200ms]">
                <Terminal className="w-5 h-5 text-cyber-secondary" />
                {PERSONAL_INFO.role}
              </p>
            </div>
            
            <div className="flex flex-col items-start md:items-end gap-3 text-sm font-mono text-gray-500 animate-fade-in-up [animation-delay:300ms]">
              <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center gap-2 hover:text-cyber-primary transition-colors">
                <Mail className="w-4 h-4" /> {PERSONAL_INFO.email}
              </a>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" /> {PERSONAL_INFO.phone}
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" /> {PERSONAL_INFO.location}
              </div>
              <div className="flex gap-4 mt-2">
                <a href="https://linkedin.com/in/chiran-subasinghe" target="_blank" rel="noreferrer" className="p-2 bg-gray-800 rounded hover:bg-cyber-primary hover:text-black transition-all hover:-translate-y-1">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="p-2 bg-gray-800 rounded hover:bg-cyber-primary hover:text-black transition-all hover:-translate-y-1">
                  <Github className="w-5 h-5" />
                </a>
                <button className="flex items-center gap-2 px-4 py-2 bg-cyber-primary text-black font-bold rounded hover:shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all hover:scale-105 active:scale-95">
                  <Download className="w-4 h-4" /> Resume PDF
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Summary Card */}
          <div className="md:col-span-8 bg-cyber-light/30 backdrop-blur-md rounded-2xl p-6 border border-gray-800 hover:border-cyber-primary/50 transition-colors group opacity-0 animate-fade-in-up [animation-delay:400ms]">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <Cpu className="w-6 h-6 text-cyber-accent animate-spin-slow" /> About Me
            </h2>
            <p className="text-lg leading-relaxed text-gray-300">
              {PERSONAL_INFO.summary}
            </p>
          </div>

          {/* Stats / Quick Skills */}
          <div className="md:col-span-4 bg-cyber-light/30 backdrop-blur-md rounded-2xl p-6 border border-gray-800 flex flex-col justify-center items-center relative overflow-hidden opacity-0 animate-fade-in-up [animation-delay:500ms] hover:border-cyber-secondary/50 transition-colors">
             <div className="absolute top-0 right-0 w-32 h-32 bg-cyber-secondary/20 rounded-full blur-3xl -mr-10 -mt-10 animate-pulse"></div>
             <SkillsChart />
             <p className="text-xs text-center text-gray-500 font-mono mt-2">SKILL DISTRIBUTION MATRIX</p>
          </div>

          {/* Experience Section */}
          <div className="md:col-span-7 row-span-2 flex flex-col gap-6 opacity-0 animate-fade-in-up [animation-delay:600ms]">
            <div className="flex items-center gap-3 mb-2">
              <Briefcase className="w-6 h-6 text-cyber-primary" />
              <h2 className="text-2xl font-bold text-white">Experience Log</h2>
            </div>
            
            {EXPERIENCE_DATA.map((job) => (
              <div key={job.id} className="group relative bg-cyber-light/20 rounded-xl p-6 border border-gray-800 hover:border-cyber-primary/30 transition-all hover:bg-cyber-light/40 hover:shadow-[0_0_30px_rgba(0,0,0,0.3)] hover:-translate-y-1 duration-300">
                <div className="absolute top-6 right-6 text-xs font-mono text-cyber-primary bg-cyber-primary/10 px-2 py-1 rounded group-hover:bg-cyber-primary group-hover:text-black transition-colors">
                  {job.period}
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-cyber-primary transition-colors">{job.role}</h3>
                <h4 className="text-gray-400 font-mono text-sm mb-4">{job.company}</h4>
                <ul className="space-y-2">
                  {job.description.map((desc, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyber-secondary flex-shrink-0 group-hover:animate-ping"></span>
                      {desc}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Skills & Tech Stack */}
          <div className="md:col-span-5 flex flex-col gap-6 opacity-0 animate-fade-in-up [animation-delay:700ms]">
            <div className="bg-cyber-light/30 backdrop-blur-md rounded-2xl p-6 border border-gray-800 h-full hover:border-green-400/30 transition-colors">
              <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Code2 className="w-5 h-5 text-green-400" /> Technical Arsenal
              </h2>
              
              <div className="space-y-6">
                {SKILLS_DATA.map((skillGroup, idx) => (
                  <div key={idx}>
                    <h3 className="text-xs font-mono text-gray-500 uppercase tracking-wider mb-3 border-b border-gray-800 pb-1">
                      {skillGroup.category}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill, sIdx) => (
                        <span key={sIdx} className="px-3 py-1.5 bg-gray-900 border border-gray-700 rounded text-sm hover:border-cyber-primary hover:text-cyber-primary transition-colors cursor-default hover:shadow-[0_0_10px_rgba(0,240,255,0.2)]">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Education & Certs */}
          <div className="md:col-span-12 grid grid-cols-1 md:grid-cols-2 gap-6">
             {/* Education */}
             <div className="bg-cyber-light/20 rounded-2xl p-6 border border-gray-800 opacity-0 animate-fade-in-up [animation-delay:800ms] hover:border-yellow-400/30 transition-colors">
                <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-yellow-400" /> Education
                </h2>
                <div className="space-y-6">
                  {EDUCATION_DATA.map((edu) => (
                    <div key={edu.id} className="relative pl-6 border-l border-gray-700 hover:border-yellow-400 transition-colors">
                      <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-gray-800 border border-gray-600 group-hover:bg-yellow-400"></div>
                      <h3 className="text-white font-medium">{edu.institution}</h3>
                      <p className="text-sm text-gray-400 mt-1">{edu.degree}</p>
                      <span className="text-xs font-mono text-gray-500 mt-2 block">{edu.period}</span>
                    </div>
                  ))}
                </div>
             </div>

             {/* Certifications */}
             <div className="bg-cyber-light/20 rounded-2xl p-6 border border-gray-800 opacity-0 animate-fade-in-up [animation-delay:900ms] hover:border-purple-400/30 transition-colors">
                <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <Award className="w-5 h-5 text-purple-400" /> Certifications
                </h2>
                <div className="grid grid-cols-1 gap-3">
                  {CERTIFICATIONS_DATA.slice(0, 4).map((cert) => (
                    <div key={cert.id} className="flex items-center gap-3 p-3 bg-gray-900/50 rounded-lg border border-gray-800 hover:border-cyber-secondary/50 transition-colors hover:bg-gray-800/80 cursor-default">
                      <div className="p-2 bg-cyber-secondary/10 rounded">
                        <Award className="w-4 h-4 text-cyber-secondary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-200 line-clamp-1">{cert.name}</p>
                        <p className="text-xs text-gray-500">{cert.issuer}</p>
                      </div>
                    </div>
                  ))}
                  {CERTIFICATIONS_DATA.length > 4 && (
                     <div className="text-center p-2 text-xs text-gray-500 font-mono">
                        + {CERTIFICATIONS_DATA.length - 4} more certifications
                     </div>
                  )}
                </div>
             </div>
          </div>

          {/* Footer */}
          <div className="md:col-span-12 mt-8 text-center border-t border-gray-800 pt-8 pb-4 opacity-0 animate-fade-in-up [animation-delay:1000ms]">
             <p className="text-gray-600 text-sm font-mono">
               © 2026 Chiran Subasinghe. System Active. 
               <span className="ml-2 inline-flex items-center gap-1">
                 <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                 Online
               </span>
             </p>
          </div>

        </div>
      </div>

      {/* Interactive Elements */}
      <ChatInterface />
    </div>
  );
}

export default App;
