import React from 'react'
import {
  SiFlutter,
  SiDart,
  SiKotlin,
  SiJetpackcompose,
  SiReact,
  SiTypescript,
  SiVite,
  SiTailwindcss,
  SiNodedotjs,
  SiGo,
  SiPostgresql,
  SiFirebase,
  SiSupabase,
  SiExpress,
  SiGit,
  SiFigma,
} from 'react-icons/si'

interface TechItem {
  name: string
  icon: React.ReactNode
}

// 2 Rows using official Simple Icons from react-icons/si with brand colors
const row1: TechItem[] = [
  { name: 'Flutter', icon: <SiFlutter className="w-5 h-5 text-[#02569B]" /> },
  { name: 'Dart', icon: <SiDart className="w-5 h-5 text-[#0175C2]" /> },
  { name: 'Kotlin', icon: <SiKotlin className="w-5 h-5 text-[#7F52FF]" /> },
  { name: 'Jetpack Compose', icon: <SiJetpackcompose className="w-5 h-5 text-[#4285F4]" /> },
  { name: 'React JS', icon: <SiReact className="w-5 h-5 text-[#61DAFB]" /> },
  { name: 'TypeScript', icon: <SiTypescript className="w-5 h-5 text-[#3178C6]" /> },
  { name: 'Vite', icon: <SiVite className="w-5 h-5 text-[#646CFF]" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="w-5 h-5 text-[#06B6D4]" /> },
]

const row2: TechItem[] = [
  { name: 'Node JS', icon: <SiNodedotjs className="w-5 h-5 text-[#339933]" /> },
  { name: 'Express JS', icon: <SiExpress className="w-5 h-5 text-[#000000]" /> },
  { name: 'Golang', icon: <SiGo className="w-5 h-5 text-[#00ADD8]" /> },
  { name: 'PostgreSQL', icon: <SiPostgresql className="w-5 h-5 text-[#4169E1]" /> },
  { name: 'Firebase', icon: <SiFirebase className="w-5 h-5 text-[#FFCA28]" /> },
  { name: 'Supabase', icon: <SiSupabase className="w-5 h-5 text-[#3ECF8E]" /> },
  { name: 'Git', icon: <SiGit className="w-5 h-5 text-[#F05032]" /> },
  { name: 'Figma', icon: <SiFigma className="w-5 h-5 text-[#F24E1E]" /> },
]

export const TechStack: React.FC = () => {
  return (
    <section id="tech-stack" className="py-24 px-6 bg-surface border-b border-slate-200">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16" data-aos="fade-down">
          <h2 className="text-4xl sm:text-6xl font-extrabold text-navy tracking-tight uppercase">
            TECH STACK
          </h2>
          <div className="w-20 h-1.5 bg-navy mx-auto mt-3" />
        </div>

        {/* 2 Centered Rows Container using react-icons */}
        <div className="flex flex-col items-center gap-3 sm:gap-4" data-aos="fade-up">
          
          {/* Row 1 */}
          <div className="flex flex-wrap justify-center items-center gap-2.5 sm:gap-3 max-w-full">
            {row1.map((item) => (
              <div
                key={item.name}
                className="group bg-white border border-slate-200 shadow-xs hover:shadow-md hover:border-navy/60 transition-all duration-200 rounded-xl sm:rounded-2xl px-3.5 py-2 sm:px-4 sm:py-2.5 flex items-center gap-2.5 cursor-default shrink-0 hover:-translate-y-0.5"
              >
                <div className="shrink-0 flex items-center justify-center transition-transform duration-200 group-hover:scale-110">
                  {item.icon}
                </div>
                <span className="text-xs sm:text-sm font-semibold text-slate-800 font-sans tracking-tight">
                  {item.name}
                </span>
              </div>
            ))}
          </div>

          {/* Row 2 */}
          <div className="flex flex-wrap justify-center items-center gap-2.5 sm:gap-3 max-w-full">
            {row2.map((item) => (
              <div
                key={item.name}
                className="group bg-white border border-slate-200 shadow-xs hover:shadow-md hover:border-navy/60 transition-all duration-200 rounded-xl sm:rounded-2xl px-3.5 py-2 sm:px-4 sm:py-2.5 flex items-center gap-2.5 cursor-default shrink-0 hover:-translate-y-0.5"
              >
                <div className="shrink-0 flex items-center justify-center transition-transform duration-200 group-hover:scale-110">
                  {item.icon}
                </div>
                <span className="text-xs sm:text-sm font-semibold text-slate-800 font-sans tracking-tight">
                  {item.name}
                </span>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  )
}