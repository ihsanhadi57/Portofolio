import React, { useEffect } from 'react'
import AOS from 'aos'
import { Navbar } from '@/components/Navbar'
import { HeroAboutWhatIDo } from '@/components/HeroAboutWhatIDo'
import { Experience } from '@/components/Experience'
import { Projects } from '@/components/Projects'
import { TechStack } from '@/components/TechStack'
import { GithubSection } from '@/components/GithubSection'
import { Connect } from '@/components/Connect'

export const HomePage: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 700,
      once: true,
      easing: 'ease-out-cubic',
      offset: 40,
    })
  }, [])

  return (
    <div className="min-h-screen bg-surface text-slate-800 selection:bg-navy selection:text-white">
      <Navbar />
      <main>
        <section id="hero">
          <HeroAboutWhatIDo />
        </section>
        <Experience />
        <Projects />
        <TechStack />
        <GithubSection />
      </main>
      <Connect />
    </div>
  )
}
