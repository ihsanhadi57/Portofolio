import React from 'react'
import { UserCheck, CheckCircle2, Zap } from 'lucide-react'

export const About: React.FC = () => {
  return (
    <section id="about" className="py-28 px-6 bg-surface border-b border-slate-200">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Character / Avatar Box (Matching Image 1) */}
          <div className="lg:col-span-5 flex justify-center" data-aos="fade-right">
            <div className="relative w-full max-w-sm h-96 border-2 border-dashed border-slate-300 rounded-2xl bg-white/70 backdrop-blur-xs flex flex-col items-center justify-center p-8 shadow-sm hover:border-navy transition-colors group">
              <div className="w-36 h-36 rounded-full border-4 border-navy text-navy flex items-center justify-center bg-slate-50 mb-6 shadow-sm group-hover:scale-105 transition-transform">
                <UserCheck className="w-20 h-20 stroke-[1.5]" />
              </div>
              <div className="text-center space-y-1">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-navy bg-slate-100 px-3 py-1 rounded border border-slate-200">
                  Full Stack & Mobile Engineer
                </span>
                <p className="text-xs text-slate-500 font-medium pt-2">
                  Building cross-platform apps & scalable backends
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: ABOUT ME Content (Matching Image 1) */}
          <div className="lg:col-span-7 space-y-6" data-aos="fade-left">
            <div>
              <div className="flex items-center gap-2 text-navy text-xs font-mono font-bold uppercase tracking-wider mb-2">
                <span>01 // About Me</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight uppercase">
                ABOUT ME
              </h2>
              <div className="w-16 h-1 bg-navy mt-3" />
            </div>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
              I am a Flutter & Full-Stack Developer specializing in cross-platform mobile apps, native development, and modern web software. Experienced in Flutter, React, TypeScript, Node.js, and cloud services, with a focus on building reliable and easy-to-use applications.
            </p>

            <p className="text-sm text-slate-600 leading-relaxed">
              I enjoy creating high-impact digital products, refining user experiences, and turning complex ideas into clean, working production solutions.
            </p>

            {/* Values / Highlights */}
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-start gap-3 p-3.5 bg-white border border-slate-200 rounded shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-navy shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-navy uppercase">Clean Architecture</h4>
                  <p className="text-[11px] text-slate-600 mt-0.5">Strict typing & maintainable separation of concerns.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 bg-white border border-slate-200 rounded shadow-sm">
                <Zap className="w-5 h-5 text-navy shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-navy uppercase">High Performance</h4>
                  <p className="text-[11px] text-slate-600 mt-0.5">Sub-second load times & efficient resource usage.</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
