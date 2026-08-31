import React, { useState, useEffect } from 'react'
import { Menu, X, ArrowUpRight, Layers } from 'lucide-react'

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'What I Do', href: '#what-i-do' },
  { name: 'Experience', href: '#experience' },
  { name: 'Work', href: '#projects' },
  { name: 'Tech Stack', href: '#tech-stack' },
  { name: 'GitHub', href: '#github' },
  { name: 'Connect', href: '#connect' },
]

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY
      setIsScrolled(scrollPos > 20)

      const heroElem = document.getElementById('hero-container')
      if (heroElem) {
        const heroTop = heroElem.offsetTop
        // hero-container spans 2000px of scroll height
        if (scrollPos >= heroTop + 500 && scrollPos < heroTop + 1300) {
          setActiveSection('about')
          return
        }
        if (scrollPos >= heroTop + 1300 && scrollPos < heroTop + 2200) {
          setActiveSection('what-i-do')
          return
        }
      }

      // Check external section elements
      const otherSections = ['experience', 'projects', 'tech-stack', 'github', 'connect']
      for (const section of otherSections) {
        const element = document.getElementById(section)
        if (element) {
          const top = element.offsetTop - 120
          const height = element.offsetHeight
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setMobileMenuOpen(false)

    const heroElem = document.getElementById('hero-container')
    const heroTop = heroElem ? heroElem.offsetTop : 0

    if (href === '#about') {
      window.scrollTo({ top: heroTop + 850, behavior: 'smooth' })
      return
    }

    if (href === '#what-i-do') {
      window.scrollTo({ top: heroTop + 1850, behavior: 'smooth' })
      return
    }

    const targetElem = document.querySelector(href)
    if (targetElem) {
      targetElem.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-surface/90 backdrop-blur-md border-b border-slate-200 py-4 shadow-sm'
          : 'bg-surface py-6'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Brand / Logo Mark */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault()
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
          className="flex items-center gap-2.5 text-navy font-bold text-xl tracking-tight group"
        >
          <div className="w-9 h-9 border-2 border-navy text-navy flex items-center justify-center rounded-xl transition-all duration-200 group-hover:bg-navy group-hover:text-white">
            <Layers className="w-5 h-5 stroke-2" />
          </div>
          <div className="flex flex-col">
            <span className="text-navy font-extrabold tracking-tight text-lg leading-tight">
              Ihsan Hadi
            </span>
            <span className="text-[10px] font-mono font-bold tracking-wider text-slate-500 uppercase leading-none">
              Flutter Dev
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1)
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-sm font-medium transition-colors relative py-1 ${
                  isActive
                    ? 'text-navy font-semibold'
                    : 'text-slate-600 hover:text-navy'
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-navy rounded-full" />
                )}
              </a>
            )
          })}
        </nav>

        {/* Contact CTA */}
        <div className="hidden md:flex items-center">
          <a
            href="#connect"
            onClick={(e) => handleNavClick(e, '#connect')}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-white bg-navy border border-navy rounded hover:bg-navy-light transition-all duration-200"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-navy hover:bg-slate-100 rounded border border-slate-200 focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-surface border-b border-slate-200 px-6 py-6 space-y-4">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-slate-700 font-medium text-base hover:text-navy transition-colors py-1.5"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 border-t border-slate-200">
              <a
                href="#connect"
                onClick={(e) => handleNavClick(e, '#connect')}
                className="inline-flex items-center justify-center w-full gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-navy rounded"
              >
                <span>Let's Talk</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
