import React, { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ExternalLink } from 'lucide-react'
import { projects } from '@/data/portfolioData'

gsap.registerPlugin(ScrollTrigger)

export const Projects: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const navigate = useNavigate()

  useEffect(() => {
    const ctx = gsap.context(() => {
      const container = containerRef.current
      const track = trackRef.current
      if (!container || !track) return

      // Ultra-Fast GSAP Horizontal Scroll Sequence
      const getScrollAmount = () => {
        return -(track.scrollWidth - window.innerWidth + 120)
      }

      gsap.to(track, {
        x: getScrollAmount,
        ease: 'none',
        scrollTrigger: {
          trigger: container,
          start: 'top top',
          end: () => `+=${track.scrollWidth * 0.22}`,
          pin: true,
          scrub: 0.2,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={containerRef}
      id="projects"
      className="relative w-full h-screen bg-surface text-slate-800 overflow-hidden border-b border-slate-200 flex flex-col justify-start pt-20 sm:pt-24 md:pt-28 pb-6 px-4 sm:px-6 md:px-12"
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f015_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f015_1px,transparent_1px)] bg-size-[4rem_4rem] pointer-events-none" />

      {/* Header (Positioned Safely Below Fixed Header Navbar) */}
      <div className="relative max-w-7xl mx-auto w-full z-20 flex items-center justify-between pt-2 px-4 sm:px-12 md:px-20 lg:px-28">
        <div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-navy tracking-tight uppercase">
            My <span className="text-slate-400 font-normal">Work</span>
          </h2>
          <div className="w-16 sm:w-20 h-1.5 bg-navy mt-2" />
        </div>
      </div>

      {/* Horizontal Scroll Track Container */}
      <div className="relative w-full flex-1 flex items-center z-10 overflow-visible mt-2 sm:mt-4">
        <div
          ref={trackRef}
          className="flex items-center gap-6 md:gap-8 pl-8 sm:pl-24 md:pl-36 lg:pl-48 xl:pl-56 pr-24 sm:pr-36 md:pr-48 w-max h-auto will-change-transform"
        >
          {projects.map((project) => (
            <div
              key={project.num}
              onClick={() => navigate(`/project/${project.id}`)}
              className="group w-72.5 sm:w-95 md:w-107.5 bg-white border-2 border-slate-200 hover:border-navy rounded-2xl p-5 sm:p-7 flex flex-col justify-between cursor-pointer transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-clean-md shrink-0"
            >
              <div>
                {/* Number & Role Subtitle Header */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
                  <span className="text-3xl sm:text-4xl font-extrabold text-navy font-mono">
                    {project.num}
                  </span>
                  <div className="text-right">
                    <h3 className="text-base sm:text-lg font-bold text-navy leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-[11px] font-mono text-slate-400 font-medium mt-0.5">
                      {project.subtitle}
                    </p>
                  </div>
                </div>

                {/* Tech Stack List */}
                <div className="space-y-1 mb-4">
                  <span className="block text-[10px] font-mono uppercase font-bold text-slate-400">
                    Tools and features
                  </span>
                  <p className="text-xs font-mono font-medium text-slate-600 truncate">
                    {project.tools}
                  </p>
                </div>

                {/* Device Mockup Box Container */}
                <div className="w-full h-44 sm:h-52 bg-slate-50 border border-slate-200 rounded-xl overflow-hidden relative flex items-center justify-center p-2 sm:p-3 group-hover:border-navy/40 transition-colors">
                  {project.coverImage ? (
                    <div className="w-full h-full flex items-center justify-center overflow-hidden rounded-lg p-1">
                      <img
                        src={project.coverImage}
                        alt={`${project.title} Cover`}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 ease-out"
                      />
                    </div>
                  ) : project.images && project.images.length >= 3 ? (
                    <div className="flex items-center justify-center gap-1.5 sm:gap-2.5 w-full h-full">
                      {/* UI 01: Login */}
                      <div className="w-12 h-28 sm:w-16 sm:h-36 rounded-lg overflow-hidden shadow-xs shrink-0 opacity-85 group-hover:opacity-100 transition-opacity">
                        <img
                          src={project.images[0]}
                          alt="Login UI"
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                      {/* UI 02: Event Page (Main Center Phone) */}
                      <div className="w-14 h-32 sm:w-20 sm:h-40 rounded-xl overflow-hidden shadow-md shrink-0 z-10 scale-105 group-hover:scale-110 transition-transform">
                        <img
                          src={project.images[1]}
                          alt="Event Page UI"
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                      {/* UI 03: Event Detail */}
                      <div className="w-12 h-28 sm:w-16 sm:h-36 rounded-lg overflow-hidden shadow-xs shrink-0 opacity-85 group-hover:opacity-100 transition-opacity">
                        <img
                          src={project.images[2]}
                          alt="Event Detail UI"
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                    </div>
                  ) : (
                    /* Default Placeholder Device Frames */
                    <div className="flex items-center justify-center gap-2 w-full h-full">
                      <div className="w-12 h-24 sm:w-14 sm:h-28 border-2 border-slate-300 rounded-lg bg-white shadow-xs flex items-center justify-center">
                        <span className="text-[9px] font-mono text-slate-400 font-bold">UI 01</span>
                      </div>
                      <div className="w-14 h-28 sm:w-16 sm:h-32 border-2 border-navy rounded-lg bg-white shadow-md flex items-center justify-center z-10 scale-105">
                        <span className="text-[9px] font-mono text-navy font-extrabold">Main UI</span>
                      </div>
                      <div className="w-12 h-24 sm:w-14 sm:h-28 border-2 border-slate-300 rounded-lg bg-white shadow-xs flex items-center justify-center">
                        <span className="text-[9px] font-mono text-slate-400 font-bold">UI 02</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Card Footer Action */}
              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-bold text-navy group-hover:underline flex items-center gap-1">
                  <span>View Details</span>
                  <ExternalLink className="w-3.5 h-3.5 text-navy group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
                <span className="text-[10px] font-mono font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded border border-slate-200">
                  {project.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
