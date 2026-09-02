import React, { useState, useEffect } from 'react'
import { GitHubCalendar } from 'react-github-calendar'
import type { Activity } from 'react-github-calendar'
import { ExternalLink, GitCommit, Flame, Code2 } from 'lucide-react'

export const GithubSection: React.FC = () => {
  const username = 'ihsanhadi57'
  const [isMobile, setIsMobile] = useState(false)
  const [stats, setStats] = useState<{
    totalLastYear: number | null
    longestStreak: number | null
  }>({
    totalLastYear: null,
    longestStreak: null,
  })

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Fetch dynamic stats directly from GitHub contribution API
  useEffect(() => {
    fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=last`)
      .then((res) => res.json())
      .then((data) => {
        if (data && Array.isArray(data.contributions)) {
          // Calculate total contributions in the last year (matches bottom calendar footer)
          const lastYearTotal =
            data.total?.lastYear ??
            data.contributions.reduce(
              (acc: number, item: { count: number }) => acc + item.count,
              0
            )

          // Calculate longest streak (consecutive days with count > 0)
          const sorted = [...data.contributions].sort(
            (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
          )

          let maxStreak = 0
          let currentStreak = 0
          sorted.forEach((item: { count: number }) => {
            if (item.count > 0) {
              currentStreak++
              if (currentStreak > maxStreak) {
                maxStreak = currentStreak
              }
            } else {
              currentStreak = 0
            }
          })

          setStats({
            totalLastYear: lastYearTotal,
            longestStreak: maxStreak,
          })
        }
      })
      .catch((err) => {
        console.error('Failed to fetch github contribution stats:', err)
      })
  }, [username])

  // Custom GitHub green theme matching high-contrast dark theme
  const calendarTheme = {
    light: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
    dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
  }

  // Filter contributions to show the last 4 months (May - Aug) on mobile so it fills full width
  const selectLastMonths = (contributions: Activity[], months = 4): Activity[] => {
    const today = new Date()
    const cutoffDate = new Date()
    cutoffDate.setMonth(today.getMonth() - months)

    return contributions.filter((activity) => {
      const date = new Date(activity.date)
      return date >= cutoffDate
    })
  }

  return (
    <section id="github" className="py-20 sm:py-24 px-4 sm:px-6 bg-surface border-b border-slate-200">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-10 gap-4" data-aos="fade-up">
          <div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-navy tracking-tight uppercase">
              GitHub Contributions
            </h2>
            <div className="w-16 sm:w-20 h-1.5 bg-navy mt-2.5" />
          </div>

          {/* GitHub Profile Link Button */}
          <a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-mono font-bold text-navy bg-white border-2 border-slate-200 rounded-xl hover:border-navy hover:shadow-clean-md transition-all duration-300 shrink-0 self-start sm:self-auto"
          >
            <span>git.me/@{username}</span>
            <ExternalLink className="w-3.5 h-3.5 text-navy" />
          </a>
        </div>

        {/* Tight & Fitted Dark Inner Container */}
        <div
          data-aos="fade-up"
          data-aos-duration="800"
          className="bg-[#0D1117] border border-slate-800 rounded-2xl p-3 sm:p-5 md:p-6 shadow-xl text-slate-100 font-mono relative overflow-hidden"
        >
          {/* 3 Stats Row Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4 sm:mb-5">
            
            {/* Stat 1: Contributions In Last Year */}
            <div className="p-3.5 sm:p-4 bg-[#161B22] border border-slate-800 rounded-xl space-y-1 hover:border-emerald-500/50 transition-colors">
              <div className="flex items-center justify-between text-[10px] sm:text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                <span>CONTRIBUTIONS IN LAST YEAR</span>
                <GitCommit className="w-4 h-4 text-emerald-400" />
              </div>
              <div className="text-lg sm:text-xl md:text-2xl font-extrabold text-emerald-400 font-mono">
                {stats.totalLastYear !== null ? `${stats.totalLastYear} Contributions` : '...'}
              </div>
            </div>

            {/* Stat 2: Longest Streak */}
            <div className="p-3.5 sm:p-4 bg-[#161B22] border border-slate-800 rounded-xl space-y-1 hover:border-emerald-500/50 transition-colors">
              <div className="flex items-center justify-between text-[10px] sm:text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                <span>LONGEST STREAK</span>
                <Flame className="w-4 h-4 text-emerald-400" />
              </div>
              <div className="text-lg sm:text-xl md:text-2xl font-extrabold text-white font-mono">
                {stats.longestStreak !== null ? `${stats.longestStreak} Days Continuous` : '...'}
              </div>
            </div>

            {/* Stat 3: Primary Stack */}
            <div className="p-3.5 sm:p-4 bg-[#161B22] border border-slate-800 rounded-xl space-y-1 hover:border-emerald-500/50 transition-colors">
              <div className="flex items-center justify-between text-[10px] sm:text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                <span>PRIMARY STACK</span>
                <Code2 className="w-4 h-4 text-emerald-400" />
              </div>
              <div className="text-base sm:text-lg md:text-xl font-extrabold text-white font-mono truncate">
                Flutter / Dart / TS
              </div>
            </div>

          </div>

          {/* GitHub Calendar Component (Full Edge-to-Edge Fit, 4 Months, NO Empty Space) */}
          <div className="bg-[#161B22]/80 border border-slate-800 rounded-xl p-2.5 sm:p-4 md:p-5 flex justify-center items-center overflow-hidden [&>div]:w-full [&_svg]:max-w-full [&_svg]:h-auto [&_svg]:mx-auto">
            <GitHubCalendar
              username={username}
              colorScheme="dark"
              theme={calendarTheme}
              transformData={(contributions) =>
                isMobile ? selectLastMonths(contributions, 4) : contributions
              }
              blockSize={isMobile ? 14 : 12}
              blockMargin={isMobile ? 3.5 : 3.5}
              fontSize={isMobile ? 11 : 11}
              style={{ color: '#94a3b8' }}
            />
          </div>

        </div>

      </div>
    </section>
  )
}
