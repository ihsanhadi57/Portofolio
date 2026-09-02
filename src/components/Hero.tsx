import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { UserCheck, ArrowDown, ExternalLink } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/icons'

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const avatarRef = useRef<HTMLDivElement>(null)

  const leftText = "Hello! I'm Ihsanul Hadi"
  const rightText = "An FLUTTER & FULL STACK DEVELOPER"

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      // Animate Avatar Box scale in
      tl.fromTo(
        avatarRef.current,
        { opacity: 0, scale: 0.85, y: 30 },
        { opacity: 1, scale: 1, y: 0, duration: 0.8, delay: 0.1 }
      )

      // Word-by-word text reveal for Left & Right text
      tl.fromTo(
        '.hero-left-word',
        { opacity: 0, y: 35, rotateX: -30 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 0.5,
          stagger: 0.08,
        },
        '-=0.4'
      )

      tl.fromTo(
        '.hero-right-word',
        { opacity: 0, y: 35, rotateX: -30 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 0.5,
          stagger: 0.08,
        },
        '-=0.4'
      )

      // Fade in social links & scroll indicator
      tl.fromTo(
        '.hero-fade-in',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.1 },
        '-=0.2'
      )
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative w-full min-h-screen pt-28 pb-16 px-6 bg-surface border-b border-slate-200 flex flex-col justify-between overflow-hidden"
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f015_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f015_1px,transparent_1px)] bg-size-[4rem_4rem] pointer-events-none" />

      {/* Social Links Vertical Column (Left Side) */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 z-20 hidden lg:flex flex-col items-center space-y-5 hero-fade-in">
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 text-slate-600 hover:text-navy transition-all transform hover:scale-110"
          aria-label="GitHub"
        >
          <GithubIcon className="w-5 h-5" />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 text-slate-600 hover:text-navy transition-all transform hover:scale-110"
          aria-label="LinkedIn"
        >
          <LinkedinIcon className="w-5 h-5" />
        </a>
        <div className="w-0.5 h-12 bg-slate-300 rounded-full" />
      </div>

      {/* Main Grid Layout */}
      <div className="relative max-w-7xl mx-auto w-full my-auto grid grid-cols-1 lg:grid-cols-3 gap-8 items-center z-10">
        
        {/* LEFT SIDE: Greeting & Name Word-by-Word Reveal */}
        <div className="space-y-4 text-center lg:text-left lg:pl-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-slate-100 border border-slate-200 text-xs font-mono font-bold text-navy uppercase tracking-wider hero-fade-in">
            <span className="w-2 h-2 rounded-full bg-navy animate-pulse" />
            <span>Available for Work</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-navy tracking-tight uppercase leading-[1.1] flex flex-wrap justify-center lg:justify-start gap-x-3 gap-y-1">
            {leftText.split(' ').map((word, idx) => (
              <span
                key={idx}
                className="hero-left-word inline-block opacity-0 origin-bottom"
              >
                {word}
              </span>
            ))}
          </h1>

          <p className="text-sm font-mono text-slate-500 pt-2 hero-fade-in">
            // Building high-performance mobile & full-stack web software
          </p>

          <div className="pt-4 flex items-center justify-center lg:justify-start gap-3 hero-fade-in">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-navy border border-navy rounded hover:bg-navy-light transition-all"
            >
              <span>View Projects</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* CENTER: 3D Developer Avatar / Character Container */}
        <div
          ref={avatarRef}
          className="flex justify-center items-center my-6 lg:my-0 opacity-0"
        >
          <div className="relative w-64 h-72 sm:w-80 sm:h-96 border-2 border-dashed border-slate-300 rounded-2xl bg-white/70 backdrop-blur-xs flex flex-col items-center justify-center p-6 shadow-sm hover:border-navy transition-colors group">
            <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full border-4 border-navy text-navy flex items-center justify-center bg-slate-50 mb-4 shadow-sm group-hover:scale-105 transition-transform">
              <UserCheck className="w-16 h-16 sm:w-20 sm:h-20 stroke-[1.5]" />
            </div>
            <div className="text-center space-y-1">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-navy bg-slate-100 px-3 py-1 rounded border border-slate-200">
                Flutter & Full Stack
              </span>
              <p className="text-[11px] text-slate-500 font-medium pt-1">
                Modern Web & Cross-Platform Engineer
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: Role Headline Word-by-Word Reveal */}
        <div className="space-y-3 text-center lg:text-right lg:pr-6">
          <span className="text-xs font-mono uppercase tracking-wider text-slate-500 block hero-fade-in">
            Engineering Specialty
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy tracking-tight uppercase leading-tight flex flex-wrap justify-center lg:justify-end gap-x-3 gap-y-1">
            {rightText.split(' ').map((word, idx) => (
              <span
                key={idx}
                className="hero-right-word inline-block opacity-0 origin-bottom"
              >
                {word}
              </span>
            ))}
          </h2>
        </div>

      </div>

      {/* Scroll Down Indicator */}
      <div className="flex justify-center pt-8 hero-fade-in">
        <a
          href="#about"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-500 hover:text-navy transition-colors py-2"
        >
          <span>Scroll to About</span>
          <ArrowDown className="w-4 h-4 animate-bounce text-navy" />
        </a>
      </div>
    </section>
  )
}
