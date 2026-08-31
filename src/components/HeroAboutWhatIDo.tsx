import React, { useEffect, useRef, useState, Suspense } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ChevronDown } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/icons'
import profilePhoto from '@/assets/photo.jpeg'

const Robot3DCanvas = React.lazy(() =>
  import('@/components/Robot3DCanvas').then((m) => ({ default: m.Robot3DCanvas }))
)

gsap.registerPlugin(ScrollTrigger)

export const HeroAboutWhatIDo: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const heroLeftRef = useRef<HTMLDivElement>(null)
  const heroRightRef = useRef<HTMLDivElement>(null)
  const avatarRef = useRef<HTMLDivElement>(null)
  const aboutRef = useRef<HTMLDivElement>(null)
  const whatIDoTitleRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  const [expandedCard, setExpandedCard] = useState<'flutter' | 'fullstack' | null>('flutter')

  const leftText = "Ihsanul Hadi Alghifari"
  const rightText = "A FLUTTER MOBILE DEVELOPER"

  const aboutParagraph =
    "Flutter mobile developer with hands on experience building scalable, production ready applications using Flutter and Firebase, including real world client projects such as ERP systems and partner matching app I built end-to-end using Flutter, Supabase, and Firebase. Backed by native Android expertise with Kotlin and Jetpack Compose, and a research background in deep learning based face detection."

  useEffect(() => {
    const ctx = gsap.context(() => {
      const container = containerRef.current
      if (!container) return

      const isMobile = window.innerWidth < 1024
      const initialTop = isMobile ? '63%' : '50%'
      const targetLeft = isMobile ? '50%' : '22%'
      const targetTop = isMobile ? '26%' : '50%'
      const targetScale = isMobile ? 0.78 : 1.0

      // Set initial centering for Avatar Box
      gsap.set(avatarRef.current, {
        left: '50%',
        top: initialTop,
        xPercent: -50,
        yPercent: -50,
        opacity: 0,
        scale: 0.95,
      })

      // Initial visibility: Robot Avatar visible in Hero, Photo hidden
      gsap.set('.robot-avatar-container', { opacity: 1, scale: 1 })
      gsap.set('.user-photo-container', { opacity: 0, scale: 0.85 })

      // ENTRY ANIMATION: Hero word-by-word reveal when screen loads
      const entryTl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      entryTl
        .to(avatarRef.current, {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          delay: 0.1,
        })
        .fromTo(
          '.hero-word-left',
          { opacity: 0, y: 30, rotateX: -30 },
          { opacity: 1, y: 0, rotateX: 0, duration: 0.5, stagger: 0.08 },
          '-=0.4'
        )
        .fromTo(
          '.hero-word-right',
          { opacity: 0, y: 30, rotateX: -30 },
          { opacity: 1, y: 0, rotateX: 0, duration: 0.5, stagger: 0.08 },
          '-=0.4'
        )

      // SCROLL ANIMATION: Fast & responsive pinned ScrollTrigger scrub sequence
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: 'top top',
          end: '+=2000',
          pin: true,
          scrub: 0.8,
          anticipatePin: 1,
        },
      })

      // Initial States
      gsap.set('.about-word', { opacity: 0, y: 15 })
      gsap.set(whatIDoTitleRef.current, { opacity: 0, x: -80 })
      gsap.set(cardsRef.current, { opacity: 0, y: 80 })

      // STEP 1: Hero text fades out AND Avatar shifts smoothly (Desktop: left 22%, Mobile: top 26%)
      scrollTl
        .to([heroLeftRef.current, heroRightRef.current], {
          opacity: 0,
          y: -30,
          duration: 0.8,
        })
        .fromTo(
          avatarRef.current,
          { left: '50%', top: initialTop, opacity: 1, scale: 1 },
          {
            left: targetLeft,
            top: targetTop,
            opacity: 1,
            scale: targetScale,
            duration: 1.2,
            ease: 'power1.inOut',
          },
          '-=0.6'
        )
        // Cross-fade Morph: 3D Robot Fades Out -> Photo Fades In!
        .to(
          '.robot-avatar-container',
          { opacity: 0, scale: 0.85, duration: 0.8, ease: 'power2.inOut' },
          '-=1.0'
        )
        .to(
          '.user-photo-container',
          { opacity: 1, scale: 1.0, duration: 0.8, ease: 'power2.inOut' },
          '-=0.8'
        )

        // About Me words reveal rapidly word-by-word
        .to(
          '.about-word',
          {
            opacity: 1,
            y: 0,
            stagger: 0.02,
            duration: 1.2,
            ease: 'none',
          },
          '-=0.8'
        )

        // Snappy hold for About Me section
        .to({}, { duration: 0.5 })

        // About Me words hide word-by-word
        .to('.about-word', {
          opacity: 0,
          y: -15,
          stagger: 0.01,
          duration: 0.8,
          ease: 'none',
        })

        // STEP 3: "WHAT I DO" title + Dim character box to 0.35 + 2 Role Cards on right
        .to(
          avatarRef.current,
          {
            opacity: isMobile ? 0.15 : 0.35,
            scale: isMobile ? 0.7 : 0.96,
            duration: 0.6,
          },
          '-=0.4'
        )
        .to(
          whatIDoTitleRef.current,
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
          },
          '-=0.6'
        )
        .to(
          cardsRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 1,
          },
          '-=0.8'
        )
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div
      ref={containerRef}
      id="hero-container"
      className="relative w-full h-screen bg-surface text-slate-800 overflow-hidden border-b border-slate-200"
    >
      {/* Invisible Anchors for Navbar Smooth Redirects */}
      <div id="about-anchor" className="absolute top-0 left-0 w-1 h-1 pointer-events-none" />
      <div id="what-i-do-anchor" className="absolute top-0 left-0 w-1 h-1 pointer-events-none" />

      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f015_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f015_1px,transparent_1px)] bg-size-[4rem_4rem] pointer-events-none" />

      {/* Social Links Vertical Column (Fixed on Left) */}
      <div className="absolute left-6 bottom-12 z-20 hidden md:flex flex-col items-center space-y-5">
        <a
          href="https://github.com/ihsanhadi57"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-600 hover:text-navy transition-all transform hover:scale-110"
          aria-label="GitHub"
        >
          <GithubIcon className="w-5 h-5" />
        </a>
        <a
          href="https://www.linkedin.com/in/ihsanul-hadi-alghifari-639779267/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-600 hover:text-navy transition-all transform hover:scale-110"
          aria-label="LinkedIn"
        >
          <LinkedinIcon className="w-5 h-5" />
        </a>
        <div className="w-0.5 h-12 bg-slate-300 rounded-full" />
      </div>

      {/* Main Container */}
      <div className="relative w-full h-full max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        
        {/* CENTER / MOVING ELEMENT: Responsive Avatar Card Container */}
        <div
          ref={avatarRef}
          className="absolute z-10 w-60 sm:w-72 md:w-84 lg:w-87.5 h-auto flex items-center justify-center pointer-events-none"
        >
          <div className="relative w-full border-2 border-dashed border-slate-300 rounded-2xl bg-white/90 backdrop-blur-xs flex flex-col items-center justify-center p-3.5 sm:p-5 lg:p-6 shadow-xl hover:border-navy transition-all duration-300 pointer-events-auto group">
            
            {/* Circle Container: 3D Robot in Hero, Photo in About Me */}
            <div className="relative w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 lg:w-52 lg:h-52 rounded-full border-4 border-navy shadow-[0_4px_25px_rgba(30,42,74,0.15)] bg-linear-to-br from-slate-100 via-slate-200/80 to-blue-100/70 overflow-hidden group/photo shrink-0">
              
              {/* 1. 3D Robot Avatar Canvas (Active on Hero) */}
              <div className="robot-avatar-container absolute inset-0 z-10 flex items-center justify-center pointer-events-auto">
                <Suspense fallback={<div className="w-full h-full bg-linear-to-br from-slate-100 via-slate-200/80 to-blue-100/70" />}>
                  <Robot3DCanvas />
                </Suspense>
              </div>

              {/* 2. Profile Photo (Active on About Me) */}
              <div className="user-photo-container absolute inset-0 z-20 overflow-hidden">
                <img
                  src={profilePhoto}
                  alt="Ihsanul Hadi Alghifari"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover/photo:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/25 to-transparent opacity-0 group-hover/photo:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>

            </div>

            {/* Lower Badge & Text Section */}
            <div className="text-center space-y-1 mt-2 sm:mt-3">
              <span className="inline-block text-[9px] sm:text-xs font-mono font-bold uppercase tracking-wider text-navy bg-slate-100 px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-md border border-slate-200 shadow-xs">
                FLUTTER MOBILE DEVELOPER
              </span>
              <p className="text-[8.5px] sm:text-xs text-slate-500 font-medium pt-0.5">
                Crafting digital experiences & cross-platform apps
              </p>
            </div>
          </div>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* PHASE 1: HERO CONTENT (Safely Positioned Below Fixed Navbar) */}
        {/* ------------------------------------------------------------- */}

        {/* Hero Left: Name */}
        <div
          ref={heroLeftRef}
          className="absolute top-28 sm:top-32 left-4 right-4 lg:relative lg:top-auto lg:left-auto lg:right-auto z-20 max-w-82.5 lg:space-y-2 pointer-events-auto text-center lg:text-left lg:pr-10"
        >
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-slate-500 font-mono block mb-1 lg:mb-0">
            Hello! I'm
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-navy leading-tight tracking-tight uppercase flex flex-wrap justify-center lg:justify-start gap-x-2 sm:gap-x-3 gap-y-0.5 sm:gap-y-1">
            {leftText.split(' ').map((word, idx) => (
              <span key={idx} className="hero-word-left inline-block opacity-0 origin-bottom">
                {word}
              </span>
            ))}
          </h1>
          <p className="text-[11px] sm:text-xs font-mono text-slate-500 pt-1.5 lg:pt-2">
            // Building scalable Flutter mobile apps
          </p>
        </div>

        {/* Hero Right: Role Headline */}
        <div
          ref={heroRightRef}
          className="z-20 max-w-82.5 text-right space-y-2 pointer-events-auto hidden lg:block lg:pl-10"
        >
          <span className="text-xs font-mono uppercase tracking-wider text-slate-500 block">
            Role Focus
          </span>
          <h2 className="text-3xl lg:text-5xl font-extrabold text-navy tracking-tight uppercase leading-none flex flex-wrap justify-end gap-x-3 gap-y-1">
            {rightText.split(' ').map((word, idx) => (
              <span key={idx} className="hero-word-right inline-block opacity-0 origin-bottom">
                {word}
              </span>
            ))}
          </h2>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* PHASE 2: ABOUT ME CONTENT (Positioned Cleanly Below Avatar on Mobile) */}
        {/* ------------------------------------------------------------- */}
        <div
          ref={aboutRef}
          className="absolute left-4 right-4 sm:left-8 sm:right-8 lg:left-auto lg:right-16 top-[63%] sm:top-[60%] lg:top-[50%] -translate-y-1/2 z-20 max-w-xl space-y-2 sm:space-y-3 pointer-events-auto text-center lg:text-left bg-transparent p-0 border-none shadow-none"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy uppercase tracking-tight flex flex-wrap justify-center lg:justify-start gap-x-2">
            {'ABOUT ME'.split(' ').map((word, idx) => (
              <span key={idx} className="about-word inline-block opacity-0">
                {word}
              </span>
            ))}
          </h2>

          <p className="text-xs sm:text-base lg:text-lg text-slate-700 leading-relaxed font-normal flex flex-wrap justify-center lg:justify-start gap-x-1.5 gap-y-1">
            {aboutParagraph.split(' ').map((word, idx) => (
              <span key={idx} className="about-word inline-block opacity-0">
                {word}
              </span>
            ))}
          </p>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* PHASE 3: WHAT I DO CONTENT (Positioned Comfortably Below Fixed Navbar) */}
        {/* ------------------------------------------------------------- */}
        <div
          ref={whatIDoTitleRef}
          className="absolute left-4 sm:left-8 lg:left-16 top-24 sm:top-28 md:top-36 lg:top-40 z-20 pointer-events-auto opacity-0"
        >
          <h2 className="text-2xl sm:text-4xl lg:text-6xl font-extrabold text-navy uppercase tracking-tighter">
            WHAT I DO
          </h2>
          <div className="w-16 sm:w-24 h-1.5 bg-navy mt-1.5 sm:mt-2" />
        </div>

        {/* Right Side Stacked Expandable Role Cards */}
        <div
          ref={cardsRef}
          className="absolute left-4 right-4 sm:left-8 sm:right-8 lg:left-auto lg:right-16 top-[60%] lg:top-[55%] -translate-y-1/2 z-20 max-w-sm sm:max-w-md w-auto lg:w-full space-y-3 sm:space-y-4 pointer-events-auto opacity-0"
        >
          {/* CARD 1: FLUTTER ENGINEER */}
          <div
            onMouseEnter={() => setExpandedCard('flutter')}
            onClick={() => setExpandedCard(expandedCard === 'flutter' ? null : 'flutter')}
            className={`group p-3.5 sm:p-5 md:p-6 bg-white border-2 rounded-xl cursor-pointer transition-all duration-300 ease-out transform hover:-translate-y-1 hover:shadow-clean-md ${
              expandedCard === 'flutter'
                ? 'border-navy shadow-clean-md'
                : 'border-slate-200 hover:border-navy/60'
            }`}
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-base sm:text-lg lg:text-xl font-extrabold text-navy uppercase tracking-tight group-hover:text-navy transition-colors">
                  FLUTTER ENGINEER
                </h3>
                <p className="text-[10px] sm:text-xs font-medium text-slate-500 mt-0.5">
                  Cross platform mobile apps & production ready architecture
                </p>
              </div>
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg border border-slate-200 flex items-center justify-center text-navy shrink-0 ml-2 group-hover:border-navy group-hover:bg-slate-50 transition-all duration-300">
                <ChevronDown
                  className={`w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 ease-out ${
                    expandedCard === 'flutter' ? 'rotate-180 text-navy' : 'text-slate-400'
                  }`}
                />
              </div>
            </div>

            <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed mt-2">
              Building production ready mobile applications using Flutter with clean
architecture, structured state management, and real world integrations
such as Firebase, Supabase, REST APIs, and push notifications.
            </p>

            {/* Smooth Grid Height Expansion for Skillset Tags */}
            <div
              className={`grid transition-[grid-template-rows,opacity] duration-500 ease-in-out ${
                expandedCard === 'flutter' ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
              }`}
            >
              <div className="overflow-hidden">
                <div className="mt-3 pt-3 border-t border-slate-100 space-y-1.5">
                  <span className="block text-[10px] sm:text-[11px] font-mono uppercase font-bold text-slate-400">
                    Skillset & tools
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {[
                      'Flutter',
                      'Dart',
                      'Riverpod',
                      'BLoC',
                      'Firebase',
                      'Supabase',
                      'REST APIs',
                      'GoRouter',
                      'FCM',
                    ].map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 text-[10px] sm:text-[11px] font-mono font-semibold text-navy bg-slate-100 border border-slate-200 rounded hover:bg-navy hover:text-white hover:border-navy transition-all duration-200 cursor-default"
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
            className={`group p-3.5 sm:p-5 md:p-6 bg-white border-2 rounded-xl cursor-pointer transition-all duration-300 ease-out transform hover:-translate-y-1 hover:shadow-clean-md ${
              expandedCard === 'fullstack'
                ? 'border-navy shadow-clean-md'
                : 'border-slate-200 hover:border-navy/60'
            }`}
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-base sm:text-lg lg:text-xl font-extrabold text-navy uppercase tracking-tight group-hover:text-navy transition-colors">
                  SOFTWARE DEVELOPER
                </h3>
                <p className="text-[10px] sm:text-xs font-medium text-slate-500 mt-0.5">
                  Backend systems & web tooling
                </p>
              </div>
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg border border-slate-200 flex items-center justify-center text-navy shrink-0 ml-2 group-hover:border-navy group-hover:bg-slate-50 transition-all duration-300">
                <ChevronDown
                  className={`w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 ease-out ${
                    expandedCard === 'fullstack' ? 'rotate-180 text-navy' : 'text-slate-400'
                  }`}
                />
              </div>
            </div>

            <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed mt-2">
             Contributing to backend systems and web tooling alongside mobile work,
including a Golang based backend for Manggala CBT, a computer based
testing platform for educational institutions and admin panel that support
mobile products.
            </p>

            {/* Smooth Grid Height Expansion for Skillset Tags */}
            <div
              className={`grid transition-[grid-template-rows,opacity] duration-500 ease-in-out ${
                expandedCard === 'fullstack' ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
              }`}
            >
              <div className="overflow-hidden">
                <div className="mt-3 pt-3 border-t border-slate-100 space-y-1.5">
                  <span className="block text-[10px] sm:text-[11px] font-mono uppercase font-bold text-slate-400">
                    Skillset & tools
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {[
                      'React',
                      'Vite',
                      'Supabase',
                      'Golang',
                      'Node.js',
                      'TypeScript',
                      'PostgreSQL',
                      'TailwindCSS',
                      'REST APIs',
                    ].map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-0.5 text-[10px] sm:text-[11px] font-mono font-semibold text-navy bg-slate-100 border border-slate-200 rounded hover:bg-navy hover:text-white hover:border-navy transition-all duration-200 cursor-default"
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
  )
}
