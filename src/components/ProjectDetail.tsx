import React, { useState, useLayoutEffect, useRef } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import gsap from 'gsap'
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Layers,
  Code2,
  Terminal,
} from 'lucide-react'
import { SiGoogleplay, SiApple } from 'react-icons/si'
import { GithubIcon } from '@/components/icons'
import { projects } from '@/data/portfolioData'

export const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()

  const project = projects.find((p) => p.id === id) || projects[0]

  const [activeImageIndex, setActiveImageIndex] = useState(0)

  const pageRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLImageElement>(null)

  // Page Entrance GSAP Animation (using useLayoutEffect to prevent initial paint blink)
  useLayoutEffect(() => {
    setActiveImageIndex(0)

    if (pageRef.current) {
      pageRef.current.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
      gsap.to(pageRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.3,
        ease: 'power2.out',
      })
    }
  }, [id])

  // GSAP Carousel Image Transition Animation
  useLayoutEffect(() => {
    if (imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, scale: 0.98 },
        { opacity: 1, scale: 1, duration: 0.25, ease: 'power2.out' }
      )
    }
  }, [activeImageIndex])

  // Page Exit GSAP Animation
  const handleBackToProjects = () => {
    if (pageRef.current) {
      gsap.to(pageRef.current, {
        opacity: 0,
        y: 15,
        duration: 0.2,
        ease: 'power2.in',
        onComplete: () => {
          navigate('/')
        },
      })
    } else {
      navigate('/')
    }
  }

  const images = project?.images || []
  const hasImages = images.length > 0

  const handlePrevImage = () => {
    setActiveImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const handleNextImage = () => {
    setActiveImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  if (!project) {
    return (
      <div className="fixed inset-0 z-50 bg-surface flex flex-col items-center justify-center p-6">
        <h2 className="text-2xl font-bold text-navy">Project Not Found</h2>
        <Link
          to="/"
          className="mt-4 px-4 py-2 bg-navy text-white text-xs font-mono rounded-lg flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>
      </div>
    )
  }

  return (
    <div
      ref={pageRef}
      className="fixed inset-0 z-50 bg-surface text-slate-800 overflow-y-auto flex flex-col selection:bg-navy selection:text-white opacity-0 translate-y-3 transform-gpu will-change-transform"
    >
      {/* Top Navbar Header */}
      <header className="sticky top-0 z-40 bg-white border-b border-slate-200 px-4 sm:px-8 py-3.5 flex items-center justify-between shadow-xs">
        <button
          onClick={handleBackToProjects}
          className="group flex items-center gap-2 text-xs font-mono font-bold text-navy hover:text-navy/80 px-3 py-1.5 rounded-lg hover:bg-slate-100 transition-all cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Projects</span>
        </button>

        <div className="flex items-center gap-2">
          <span className="text-xs font-mono font-bold text-slate-400">
            {project.num} // {project.category}
          </span>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12 flex-1 space-y-10">
        
        {/* Project Header Info */}
        <div className="space-y-3 border-b border-slate-200 pb-6">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 bg-navy/10 text-navy border border-navy/20 rounded-md text-xs font-mono font-extrabold uppercase">
              {project.num}
            </span>
            <span className="text-xs font-mono font-semibold text-slate-400 uppercase tracking-wider">
              {project.category}
            </span>
          </div>

          <div className="flex items-center gap-3.5 sm:gap-5 pt-1">
            {project.logo && (
              <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border-2 border-slate-200 shadow-sm shrink-0 bg-white flex items-center justify-center p-2">
                <img
                  src={project.logo}
                  alt={`${project.title} Logo`}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-contain"
                />
              </div>
            )}
            <div>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-navy tracking-tight uppercase">
                {project.title}
              </h1>
              <p className="text-base sm:text-xl font-mono text-slate-500 font-medium">
                {project.subtitle}
              </p>
            </div>
          </div>

          {/* Action Links Bar */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            {project.appStoreUrl && (
              <a
                href={project.appStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 text-xs font-mono font-bold text-white bg-black border border-black rounded-xl hover:bg-slate-800 shadow-xs hover:shadow-md transition-all flex items-center gap-2"
              >
                <SiApple className="w-4 h-4 text-white" />
                <span>Available on App Store</span>
              </a>
            )}
            {project.playStoreUrl && (
              <a
                href={project.playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 text-xs font-mono font-bold text-white bg-[#01875F] border border-[#01875F] rounded-xl hover:bg-[#01704f] shadow-xs hover:shadow-md transition-all flex items-center gap-2"
              >
                <SiGoogleplay className="w-4 h-4" />
                <span>Available on Play Store</span>
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 text-xs font-mono font-bold text-white bg-navy border border-navy rounded-xl hover:bg-navy/90 shadow-xs hover:shadow-md transition-all flex items-center gap-2"
              >
                <span>Demo</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 text-xs font-mono font-bold text-slate-700 bg-white border border-slate-300 rounded-xl hover:border-navy hover:text-navy shadow-xs hover:shadow-md transition-all flex items-center gap-2"
              >
                {project.repoLabel ? (
                  <ExternalLink className="w-4 h-4 text-navy" />
                ) : (
                  <GithubIcon className="w-4 h-4" />
                )}
                <span>{project.repoLabel || 'GitHub Repository'}</span>
              </a>
            )}
          </div>
        </div>

        {/* Image Showcase & Carousel Section */}
        {hasImages ? (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xs font-mono uppercase font-bold text-slate-400 flex items-center gap-2">
                <Layers className="w-4 h-4 text-navy" />
                <span>App Showcase</span>
              </h2>
              <span className="text-xs font-mono font-bold text-navy bg-slate-100 border border-slate-200 px-3 py-1 rounded-md">
                {activeImageIndex + 1} / {images.length}
              </span>
            </div>

            {/* Main Stage Carousel Viewer */}
            <div className="relative w-full bg-slate-900 border-2 border-slate-800 rounded-2xl overflow-hidden shadow-2xl min-h-87.5 sm:min-h-120 md:min-h-140 flex items-center justify-center group p-4 sm:p-8">
              {/* Active Image with GSAP Ref */}
              <div className="relative max-h-115 sm:max-h-130 flex items-center justify-center">
                <img
                  ref={imageRef}
                  src={images[activeImageIndex]}
                  alt={`Screenshot ${activeImageIndex + 1}`}
                  loading="lazy"
                  decoding="async"
                  className="max-h-110 sm:max-h-125 w-auto object-contain rounded-xl shadow-2xl will-change-transform"
                />
              </div>

              {/* Navigation Left Arrow */}
              <button
                onClick={handlePrevImage}
                aria-label="Previous Slide"
                className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white/90 hover:bg-white text-navy border border-slate-200 shadow-xl flex items-center justify-center hover:scale-110 transition-all cursor-pointer z-20"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Navigation Right Arrow */}
              <button
                onClick={handleNextImage}
                aria-label="Next Slide"
                className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white/90 hover:bg-white text-navy border border-slate-200 shadow-xl flex items-center justify-center hover:scale-110 transition-all cursor-pointer z-20"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Thumbnail Strip Gallery */}
            <div className="relative py-2">
              <div className="flex items-center gap-3 overflow-x-auto pb-3 pt-1 px-1 scrollbar-thin scrollbar-thumb-slate-300">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative shrink-0 w-20 h-28 sm:w-24 sm:h-36 rounded-xl overflow-hidden border-2 transition-all cursor-pointer bg-slate-100 ${
                      idx === activeImageIndex
                        ? 'border-navy shadow-md scale-105 opacity-100 ring-2 ring-navy/30'
                        : 'border-slate-200 opacity-60 hover:opacity-100 hover:border-slate-400'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`Thumbnail ${idx + 1}`}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover object-top"
                    />
                    {idx === activeImageIndex && (
                      <div className="absolute inset-0 bg-navy/10 pointer-events-none" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        ) : null}

        {/* Detailed Description & Architecture Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-4">
          
          {/* Main Column: Overview & Features */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Overview */}
            <div className="bg-white border-2 border-slate-200 rounded-2xl p-6 sm:p-8 space-y-3 shadow-xs">
              <h3 className="text-sm font-mono uppercase font-bold text-slate-400">
                Overview & System Architecture
              </h3>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                {project.longDescription}
              </p>
            </div>

            {/* Key Deliverables & Features */}
            <div className="bg-white border-2 border-slate-200 rounded-2xl p-6 sm:p-8 space-y-4 shadow-xs">
              <h3 className="text-sm font-mono uppercase font-bold text-slate-400">
                Key Features & Engineering Highlights
              </h3>
              <div className="space-y-3">
                {project.keyFeatures.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/70 text-xs sm:text-sm text-slate-700 font-medium group hover:border-navy/30 transition-colors"
                  >
                    <Terminal className="w-4 h-4 text-navy shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Sidebar Column: Tech Stack */}
          <div className="space-y-6">
            <div className="bg-white border-2 border-slate-200 rounded-2xl p-6 space-y-4 shadow-xs">
              <h3 className="text-xs font-mono uppercase font-bold text-slate-400 flex items-center gap-2">
                <Code2 className="w-4 h-4 text-navy" />
                <span>Tech Architecture & Stack</span>
              </h3>

              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 text-xs font-mono font-semibold text-navy bg-slate-100 border border-slate-200 rounded-lg shadow-2xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>

      </main>
    </div>
  )
}
