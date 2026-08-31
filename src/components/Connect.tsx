import React, { useState } from 'react'
import { Mail, MapPin, Send, CheckCircle2 } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/icons'
import { personalInfo } from '@/data/portfolioData'

export const Connect: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (formState.name && formState.email && formState.message) {
      const subjectText = formState.subject || `Portfolio Inquiry from ${formState.name}`
      const bodyText = `Hi Ihsan,\n\n${formState.message}\n\n---\nSender Details:\nName: ${formState.name}\nEmail: ${formState.email}`

      const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(subjectText)}&body=${encodeURIComponent(bodyText)}`
      
      // Open default mail app with pre-filled content
      window.location.href = mailtoUrl

      setSubmitted(true)
      setTimeout(() => {
        setSubmitted(false)
        setFormState({ name: '', email: '', subject: '', message: '' })
      }, 5000)
    }
  }

  return (
    <footer id="connect" className="pt-20 pb-12 px-4 sm:px-6 bg-surface border-t border-slate-200">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-12" data-aos="fade-up">

          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy tracking-tight uppercase">
            Let's build something great.
          </h2>
          <div className="w-16 h-1.5 bg-navy mt-3" />
          <p className="text-slate-600 mt-4 text-xs sm:text-sm max-w-xl leading-relaxed">
            Have an exciting Flutter mobile app, full-stack project, or engineering opportunity? Drop me a message below. I'd love to collaborate and bring your ideas to life.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16">
          
          {/* Direct Channels */}
          <div className="space-y-3 sm:space-y-4" data-aos="fade-up" data-aos-delay="100">
            
            {/* Email Card */}
            <div className="p-4 sm:p-5 bg-white border border-slate-200 rounded-xl shadow-xs hover:border-navy hover:shadow-clean-md transition-all">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 border-2 border-navy text-navy flex items-center justify-center rounded-lg shrink-0 bg-slate-50">
                  <Mail className="w-5 h-5 stroke-2" />
                </div>
                <div className="overflow-hidden">
                  <h4 className="text-[10px] sm:text-xs uppercase font-mono font-bold text-slate-400">Direct Email</h4>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-xs sm:text-sm font-bold text-navy hover:underline truncate block"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>
            </div>

            {/* LinkedIn Card */}
            <div className="p-4 sm:p-5 bg-white border border-slate-200 rounded-xl shadow-xs hover:border-navy hover:shadow-clean-md transition-all">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 border-2 border-navy text-navy flex items-center justify-center rounded-lg shrink-0 bg-slate-50">
                  <LinkedinIcon className="w-5 h-5 stroke-2" />
                </div>
                <div className="overflow-hidden">
                  <h4 className="text-[10px] sm:text-xs uppercase font-mono font-bold text-slate-400">LinkedIn</h4>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs sm:text-sm font-bold text-navy hover:underline truncate block"
                  >
                    linkedin.com/in/ihsanul-hadi
                  </a>
                </div>
              </div>
            </div>

            {/* GitHub Card */}
            <div className="p-4 sm:p-5 bg-white border border-slate-200 rounded-xl shadow-xs hover:border-navy hover:shadow-clean-md transition-all">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 border-2 border-navy text-navy flex items-center justify-center rounded-lg shrink-0 bg-slate-50">
                  <GithubIcon className="w-5 h-5 stroke-2" />
                </div>
                <div className="overflow-hidden">
                  <h4 className="text-[10px] sm:text-xs uppercase font-mono font-bold text-slate-400">GitHub Profile</h4>
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs sm:text-sm font-bold text-navy hover:underline truncate block"
                  >
                    github.com/{personalInfo.githubHandle}
                  </a>
                </div>
              </div>
            </div>

            {/* Location Card */}
            <div className="p-4 sm:p-5 bg-white border border-slate-200 rounded-xl shadow-xs hover:border-navy hover:shadow-clean-md transition-all">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 border-2 border-navy text-navy flex items-center justify-center rounded-lg shrink-0 bg-slate-50">
                  <MapPin className="w-5 h-5 stroke-2" />
                </div>
                <div>
                  <h4 className="text-[10px] sm:text-xs uppercase font-mono font-bold text-slate-400">Location</h4>
                  <span className="text-xs sm:text-sm font-bold text-navy">Jambi, Indonesia</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form - Spans 2 cols */}
          <div className="md:col-span-2" data-aos="fade-up" data-aos-delay="200">
            <div className="p-5 sm:p-6 md:p-8 bg-white border border-slate-200 rounded-2xl shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg sm:text-xl font-extrabold text-navy uppercase tracking-tight flex items-center gap-2">
                  <span>Send Direct Message</span>
                </h3>
                <span className="text-[11px] font-mono text-slate-400 hidden sm:inline">Opens email app</span>
              </div>

              {submitted ? (
                <div className="p-6 sm:p-8 bg-emerald-50/60 border border-emerald-200 rounded-xl text-center space-y-2.5">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                  <h4 className="text-base font-extrabold text-navy">Opening Your Email App...</h4>
                  <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
                    Your message draft has been formatted and opened in your email app. If it didn't open automatically, send directly to <a href={`mailto:${personalInfo.email}`} className="font-bold underline text-navy">{personalInfo.email}</a>.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-600 font-mono uppercase mb-1.5">
                        Your Name <span className="text-emerald-600">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="e.g. Alex Rivera"
                        className="input-field"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-slate-600 font-mono uppercase mb-1.5">
                        Your Email <span className="text-emerald-600">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="e.g. alex.rivera@techcorp.com"
                        className="input-field"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-600 font-mono uppercase mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      placeholder="e.g. Flutter Mobile App / Full-Stack Project Inquiry"
                      className="input-field"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-600 font-mono uppercase mb-1.5">
                      Message <span className="text-emerald-600">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="e.g. Hi Ihsan! We're building a Flutter mobile application and looking for an experienced developer to help bring it to life..."
                      className="input-field resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 text-xs font-bold font-mono text-white bg-navy border border-navy rounded-xl hover:bg-navy-light hover:shadow-clean-md transition-all flex items-center justify-center gap-2 cursor-pointer group"
                  >
                    <span>Send via Email</span>
                    <Send className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Footer Sub-Bar */}
        <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono font-medium text-slate-500 text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} {personalInfo.name}.
          </div>

          
        </div>
      </div>
    </footer>
  )
}
