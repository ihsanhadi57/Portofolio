import React, { useState } from 'react'
import { ChevronDown, Laptop, Briefcase } from 'lucide-react'

export const WhatIDo: React.FC = () => {
  const [expandedCard, setExpandedCard] = useState<'flutter' | 'fullstack' | null>('flutter')

  return (
    <section id="what-i-do" className="py-28 px-6 bg-surface border-b border-slate-200">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header (Top Left) */}
        <div className="mb-14" data-aos="fade-up">
          <div className="flex items-center gap-2 text-navy text-xs font-mono font-bold uppercase tracking-wider mb-2">
            <Briefcase className="w-4 h-4 stroke-2" />
            <span>02 // What I Do</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-navy uppercase tracking-tighter">
            WHAT I DO
          </h2>
          <div className="w-24 h-1.5 bg-navy mt-3" />
        </div>

        {/* 2-Column Main Layout */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">

          {/* Left / Center Column: Workspace / Developer Desk Illustration Box */}
          <div className="lg:col-span-5 flex justify-center" data-aos="fade-right">
            <div className="relative w-full max-w-sm h-96 border-2 border-dashed border-slate-300 rounded-2xl bg-white/70 backdrop-blur-xs flex flex-col items-center justify-center p-8 shadow-sm hover:border-navy transition-colors group">
              <div className="w-36 h-36 rounded-full border-4 border-navy text-navy flex items-center justify-center bg-slate-50 mb-6 shadow-sm group-hover:scale-105 transition-transform">
                <Laptop className="w-20 h-20 stroke-[1.5]" />
              </div>
              <div className="text-center space-y-1">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-navy bg-slate-100 px-3 py-1 rounded border border-slate-200">
                  Engineering Capabilities
                </span>
                <p className="text-xs text-slate-500 font-medium pt-2">
                  Building mobile & web applications end-to-end
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: 2 Expandable Role Cards */}
          <div className="lg:col-span-7 space-y-6" data-aos="fade-left">
            
            {/* CARD 1: FLUTTER ENGINEER */}
            <div
              onMouseEnter={() => setExpandedCard('flutter')}
              onClick={() => setExpandedCard(expandedCard === 'flutter' ? null : 'flutter')}
              className={`group p-6 md:p-8 bg-white border-2 rounded-xl cursor-pointer transition-all duration-300 ease-out transform hover:-translate-y-1 hover:shadow-clean-md ${
                expandedCard === 'flutter'
                  ? 'border-navy shadow-clean-md'
                  : 'border-slate-200 hover:border-navy/60'
              }`}
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-navy uppercase tracking-tight group-hover:text-navy transition-colors">
                    FLUTTER ENGINEER
                  </h3>
                  <p className="text-xs font-medium text-slate-500 mt-1">
                    Cross-platform mobile apps & scalable backend systems
                  </p>
                </div>
                <div className="w-8 h-8 rounded-lg border border-slate-200 flex items-center justify-center text-navy shrink-0 ml-3 group-hover:border-navy group-hover:bg-slate-50 transition-all duration-300">
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-300 ease-out ${
                      expandedCard === 'flutter' ? 'rotate-180 text-navy' : 'text-slate-400'
                    }`}
                  />
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-4">
                Building production-ready mobile applications using Flutter with clean UI, performance optimization, and real-world integrations like Firebase, REST APIs, maps, and push notifications.
              </p>

              {/* Smooth Grid Height Expansion */}
              <div
                className={`grid transition-[grid-template-rows,opacity] duration-500 ease-in-out ${
                  expandedCard === 'flutter' ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <div className="mt-5 pt-5 border-t border-slate-100 space-y-2">
                    <span className="block text-xs font-mono uppercase font-bold text-slate-400">
                      Skillset & tools
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {[
                        'Flutter',
                        'Dart',
                        'Firebase',
                        'Supabase',
                        'REST APIs',
                        'GetX',
                        'Provider',
                        'Maps API',
                        'FCM',
                        'Play Store',
                      ].map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 text-xs font-mono font-semibold text-navy bg-slate-100 border border-slate-200 rounded hover:bg-navy hover:text-white hover:border-navy transition-all duration-200 cursor-default"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CARD 2: FULL-STACK DEVELOPER */}
            <div
              onMouseEnter={() => setExpandedCard('fullstack')}
              onClick={() => setExpandedCard(expandedCard === 'fullstack' ? null : 'fullstack')}
              className={`group p-6 md:p-8 bg-white border-2 rounded-xl cursor-pointer transition-all duration-300 ease-out transform hover:-translate-y-1 hover:shadow-clean-md ${
                expandedCard === 'fullstack'
                  ? 'border-navy shadow-clean-md'
                  : 'border-slate-200 hover:border-navy/60'
              }`}
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-navy uppercase tracking-tight group-hover:text-navy transition-colors">
                    FULL-STACK DEVELOPER
                  </h3>
                  <p className="text-xs font-medium text-slate-500 mt-1">
                    Modern web apps & backend development
                  </p>
                </div>
                <div className="w-8 h-8 rounded-lg border border-slate-200 flex items-center justify-center text-navy shrink-0 ml-3 group-hover:border-navy group-hover:bg-slate-50 transition-all duration-300">
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-300 ease-out ${
                      expandedCard === 'fullstack' ? 'rotate-180 text-navy' : 'text-slate-400'
                    }`}
                  />
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-4">
                Developing responsive web applications and scalable backend services using modern frameworks, APIs, and databases with focus on performance and clean architecture.
              </p>

              {/* Smooth Grid Height Expansion */}
              <div
                className={`grid transition-[grid-template-rows,opacity] duration-500 ease-in-out ${
                  expandedCard === 'fullstack' ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <div className="mt-5 pt-5 border-t border-slate-100 space-y-2">
                    <span className="block text-xs font-mono uppercase font-bold text-slate-400">
                      Skillset & tools
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {[
                        'React',
                        'Next.js',
                        'Node.js',
                        'TypeScript',
                        'MongoDB',
                        'PostgreSQL',
                        'TailwindCSS',
                        'Git',
                        'REST APIs',
                        'Firebase',
                      ].map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 text-xs font-mono font-semibold text-navy bg-slate-100 border border-slate-200 rounded hover:bg-navy hover:text-white hover:border-navy transition-all duration-200 cursor-default"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
