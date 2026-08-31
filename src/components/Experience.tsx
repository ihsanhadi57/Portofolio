import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { experiences } from '@/data/portfolioData'

gsap.registerPlugin(ScrollTrigger)

export const Experience: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const timelineTrackRef = useRef<HTMLDivElement>(null)
  const lineFillRef = useRef<HTMLDivElement>(null)
  const dotRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const section = sectionRef.current
      const track = timelineTrackRef.current
      if (!section || !track) return

      // 1. SCRUBBED SECTION BLUR REVEAL ENTRANCE
      gsap.fromTo(
        section,
        { opacity: 0, filter: 'blur(12px)', y: 40 },
        {
          opacity: 1,
          filter: 'blur(0px)',
          y: 0,
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top 92%',
            end: 'top 45%',
            scrub: 0.3,
          },
        }
      )

      // 2. VERTICAL TIMELINE GLOW LINE (scaleY: 0 to scaleY: 1)
      gsap.fromTo(
        lineFillRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: track,
            start: 'top 70%',
            end: 'bottom 80%',
            scrub: 0.4,
          },
        }
      )

      // 3. MOVING GLOW DOT ALONG TIMELINE LINE
      gsap.fromTo(
        dotRef.current,
        { top: '0%' },
        {
          top: '100%',
          ease: 'none',
          scrollTrigger: {
            trigger: track,
            start: 'top 70%',
            end: 'bottom 80%',
            scrub: 0.4,
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="relative w-full py-28 px-6 bg-surface text-slate-800 overflow-hidden border-b border-slate-200"
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f015_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f015_1px,transparent_1px)] bg-size-[4rem_4rem] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto w-full z-10">
        
        {/* Top Header: "My career & experience" */}
        <div className="text-center mb-16" data-aos="fade-down" data-aos-duration="700">
          {/* <div className="inline-flex items-center gap-2 text-navy text-xs font-mono font-bold uppercase tracking-wider mb-2">
            <Briefcase className="w-4 h-4 stroke-[2]" />
            <span>03 // Career History</span>
          </div> */}
          <h2 className="text-3xl sm:text-5xl font-extrabold text-navy tracking-tight uppercase">
            My career & experience
          </h2>
          <div className="w-20 h-1 bg-navy mx-auto mt-3" />
        </div>

        {/* Timeline Content */}
        <div ref={timelineTrackRef} className="relative py-4 space-y-16">
          
          {/* Vertical Glow Timeline Center Track */}
          <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-0.5 bg-slate-200 hidden md:block">
            {/* Active Vertical Glow Line (scaleY 0 to 1) */}
            <div
              ref={lineFillRef}
              className="absolute top-0 left-0 w-full h-full bg-navy origin-top scale-y-0 shadow-[0_0_12px_rgba(30,42,74,0.7)]"
            />

            {/* Glowing Moving Dot */}
            <div
              ref={dotRef}
              className="absolute left-1/2 -translate-x-1/2 top-0 w-4 h-4 rounded-full bg-navy border-2 border-white shadow-[0_0_16px_rgba(30,42,74,0.8)] z-30 pointer-events-none"
            >
              <div className="w-full h-full rounded-full bg-navy animate-ping opacity-75" />
            </div>
          </div>

          {/* Experience Rows */}
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className={`exp-row-${idx} relative grid grid-cols-1 md:grid-cols-12 gap-6 items-center`}
            >
              {/* Left Column: Role & Company */}
              <div
                className="md:col-span-4 text-left md:text-right space-y-1 pr-0 md:pr-6"
                data-aos="fade-right"
                data-aos-duration="800"
              >
                <h3 className="text-lg md:text-xl font-extrabold text-navy leading-snug">
                  {exp.role}
                </h3>
                <p className="text-xs md:text-sm font-semibold text-slate-500 font-mono">
                  {exp.company}
                </p>
                <p className="text-[11px] text-slate-400 font-mono">
                  {exp.period}
                </p>
              </div>

              {/* Year Badge Column */}
              <div
                className="md:col-span-2 text-left md:text-center relative flex items-center justify-start md:justify-center"
                data-aos="zoom-in"
                data-aos-duration="700"
              >
                <span className="text-xl md:text-2xl font-extrabold text-navy font-mono tracking-tight">
                  {exp.year}
                </span>
              </div>

              {/* Empty Column for Center Gap */}
              <div className="hidden md:block md:col-span-1" />

              {/* Right Column: Experience Description Card (AOS fade-left 800ms) */}
              <div
                className="md:col-span-5 text-left pl-0 md:pl-4"
                data-aos="fade-left"
                data-aos-duration="800"
              >
                <div className="p-5 bg-white border border-slate-200 rounded-xl shadow-sm hover:border-navy transition-all duration-200">
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed font-normal">
                    {exp.description}
                  </p>
                </div>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  )
}
