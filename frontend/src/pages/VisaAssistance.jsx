import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import visaHero from '../assets/images/hero/Gemini_Generated_Image_tschdktschdktsch.png'

const ArrowIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="w-4 h-4" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m0 0l-6-6m6 6l-6 6" />
  </svg>
)

const CheckIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
    <circle cx="12" cy="12" r="9" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.5 12.3l2.3 2.3 4.7-5" />
  </svg>
)

const GlobeIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
    <circle cx="12" cy="12" r="9" />
    <path strokeLinecap="round" d="M3 12h18M12 3c2.5 2.7 4 6 4 9s-1.5 6.3-4 9c-2.5-2.7-4-6-4-9s1.5-6.3 4-9z" />
  </svg>
)

const BoltIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" />
  </svg>
)

const FileIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M7 3h7l4 4v14a1 1 0 01-1 1H7a1 1 0 01-1-1V4a1 1 0 011-1zM14 3v4h4" />
  </svg>
)

const ChatIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 5h16v11H8l-4 4V5z" />
  </svg>
)

const ChecklistIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
    <rect x="4" y="3" width="16" height="18" rx="2" />
    <path strokeLinecap="round" d="M8 8h8M8 12l2 2 4-4M8 17h4" />
  </svg>
)

const TargetIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
    <circle cx="12" cy="12" r="8" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="12" cy="12" r="0.5" fill="currentColor" />
  </svg>
)

const ShieldIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l7 3v5c0 5-3.5 8.5-7 10-3.5-1.5-7-5-7-10V6l7-3z" />
  </svg>
)

const LockIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
    <rect x="5" y="11" width="14" height="9" rx="2" />
    <path strokeLinecap="round" d="M8 11V7a4 4 0 018 0v4" />
  </svg>
)

const ClockIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
    <circle cx="12" cy="12" r="9" />
    <path strokeLinecap="round" d="M12 7v5l3 3" />
  </svg>
)

const PhoneIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 5c0 8 7 15 15 15l3-4-5-3-2 2c-2-1-4-3-5-5l2-2-3-5z" />
  </svg>
)

const MailIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 7l9 6 9-6" />
  </svg>
)

const StarIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2.5l2.9 6.2 6.6.7-4.9 4.6 1.3 6.6L12 17.6l-5.9 3 1.3-6.6-4.9-4.6 6.6-.7L12 2.5z" />
  </svg>
)

const PlaneIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 00-3 0V9l-8 5v2l8-2.5V19l-2.5 1.5V22l4-1 4 1v-1.5L13 19v-5.5z" />
  </svg>
)

const solutions = [
  {
    icon: GlobeIcon,
    title: 'Tourist & Business Visas',
    description: 'Global coverage for over 150 countries. We navigate local embassy requirements so you don\'t have to.',
    points: ['End-to-end management', 'Multi-entry optimization'],
  },
  {
    icon: BoltIcon,
    title: 'Express Processing',
    description: 'Last-minute travel demands rapid response. Our expedited lane reduces processing times by up to 60%.',
    points: ['24-hour turnaround options', 'Priority courier service'],
  },
  {
    icon: FileIcon,
    title: 'Document Concierge',
    description: 'Let us manage your portfolio. From notarization to translation and digital archiving for future use.',
    points: ['Secure Vault™ storage', 'Legalization assistance'],
  },
]

const steps = [
  {
    icon: ChatIcon,
    title: 'Initial Consultation',
    description: 'Discuss your itinerary with a visa specialist to identify exact requirements and timelines for your profile.',
  },
  {
    icon: ChecklistIcon,
    title: 'Documentation Review',
    description: 'Upload your documents to our secure portal. Our team performs a 20-point audit to ensure 100% compliance.',
  },
  {
    icon: TargetIcon,
    title: 'Submission & Tracking',
    description: 'We handle embassy interactions. Monitor your status in real-time via the Diary\'s app until approval.',
  },
]

const destinations = [
  { name: 'Schengen Area', days: '15 – 20 Business Days', tag: '90-Day Multiple', seed: 'schengen-visa' },
  { name: 'Japan', days: '5 – 7 Business Days', tag: 'e-Visa Available', seed: 'japan-visa' },
  { name: 'USA', days: '14 – 30 Business Days', tag: 'B1/B2 Renewal', seed: 'usa-visa' },
  { name: 'UAE', days: '48 – 72 Hours', tag: 'Instant Approval', seed: 'uae-visa' },
]

const stats = [
  { icon: ShieldIcon, value: '99%', label: 'Application Success Rate' },
  { icon: GlobeIcon, value: 'Global', label: 'Network of 150+ Embassies' },
  { icon: LockIcon, value: 'Secure', label: 'Military-Grade Data Encryption' },
  { icon: ClockIcon, value: '24/7', label: 'Dedicated Concierge Support' },
]

const heroFeatures = [
  { icon: FileIcon, title: 'Expert Guidance' },
  { icon: BoltIcon, title: 'Fast-Track Processing' },
  { icon: ShieldIcon, title: '100% Secure & Reliable' },
  { icon: GlobeIcon, title: '150+ Countries Covered' },
]

const visaCategories = ['Tourist', 'Business', 'Student']

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
}

function VisaAssistance() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-blue-950 pt-32 pb-16 sm:pt-36 sm:pb-20 lg:pt-40 lg:pb-24 min-h-[600px] sm:min-h-[680px] flex items-center">
        <img
          src={visaHero}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/85 via-blue-950/75 to-blue-950/95" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 w-full">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} className="max-w-xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold tracking-[0.15em] uppercase px-4 py-2 rounded-full">
                <ShieldIcon className="w-4 h-4" />
                Fast &amp; Secure Visa Processing
              </span>
              <svg viewBox="0 0 120 30" className="hidden sm:block w-24 h-7 text-blue-300/70" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeDasharray="3 4" d="M2 20c20 10 40-14 60-8s30 4 40-2" />
              </svg>
              <PlaneIcon className="hidden sm:block w-6 h-6 text-blue-300 rotate-45 -ml-3" />
            </div>
            <h1 className="font-display text-4xl sm:text-5xl font-extrabold leading-tight mb-3">
              <span className="block text-white">We Handle the Process,</span>
              <span className="block text-blue-300">You Enjoy the Journey.</span>
            </h1>
            <span className="inline-flex items-center gap-1.5 mb-5">
              <span className="w-10 h-0.5 bg-blue-300 rounded-full" />
              <span className="w-1.5 h-1.5 bg-blue-300 rounded-full" />
            </span>
            <p className="text-blue-50/80 text-base sm:text-lg leading-relaxed mb-9 max-w-md">
              From documentation to final approval, our visa experts manage every step of the process
              so you can focus on the journey ahead.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-400 text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow-lg shadow-blue-950/40 transition-colors"
              >
                Start Your Application <ArrowIcon className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-white hover:bg-blue-50 text-blue-700 font-bold text-sm px-6 py-3.5 rounded-xl transition-colors"
              >
                <ChatIcon className="w-4 h-4" /> Talk to an Expert
              </Link>
            </div>
          </motion.div>

          <div className="mt-12 sm:mt-16 grid sm:grid-cols-2 gap-4 max-w-3xl">
            {/* Feature highlights card */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white rounded-2xl shadow-xl shadow-blue-950/20 p-4 sm:p-5 grid grid-cols-2 gap-x-5 gap-y-4"
            >
              {heroFeatures.map((f) => (
                <div key={f.title} className="flex items-center gap-2.5">
                  <span className="w-9 h-9 shrink-0 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
                    <f.icon className="w-4.5 h-4.5" />
                  </span>
                  <span className="text-slate-700 text-xs font-semibold leading-snug">{f.title}</span>
                </div>
              ))}
            </motion.div>

            {/* Trust & social proof card */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white rounded-2xl shadow-xl shadow-blue-950/20 px-4 py-3.5 sm:px-5 sm:py-4 flex flex-col justify-center"
            >
              <div className="flex items-center gap-3 mb-2.5">
                <div className="flex -space-x-2.5">
                  {['AK', 'MN', 'FS', 'RP'].map((initials) => (
                    <span
                      key={initials}
                      className="w-8 h-8 rounded-full bg-blue-500 text-white text-[10px] font-display font-bold flex items-center justify-center border-2 border-white"
                    >
                      {initials}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-1 text-amber-500">
                  <StarIcon className="w-3.5 h-3.5" />
                  <span className="text-slate-800 text-sm font-bold">4.9/5</span>
                  <span className="text-slate-400 text-xs">&middot; 15,000+ Visas Approved</span>
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                {visaCategories.map((cat) => (
                  <span key={cat} className="bg-blue-50 text-blue-700 text-[11px] font-semibold px-2.5 py-1 rounded-full">
                    {cat}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Elite Visa Solutions */}
      <section id="elite-visa-solutions" className="bg-white py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 text-center">
          <motion.h2 {...fadeUp} className="font-display text-3xl sm:text-4xl font-semibold text-slate-900 mb-3">
            Elite Visa Solutions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-slate-500 text-sm sm:text-base max-w-xl mx-auto mb-12 sm:mb-16"
          >
            Tailored support for the modern traveler, from priority business clearances to dedicated document couriers.
          </motion.p>

          <div className="grid sm:grid-cols-3 gap-5 sm:gap-6 text-left">
            {solutions.map((sol, i) => (
              <motion.div
                key={sol.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -8 }}
                className="group bg-white rounded-2xl border border-slate-100 hover:border-blue-100 shadow-sm hover:shadow-xl transition-shadow duration-300 p-6 sm:p-7"
              >
                <span className="w-11 h-11 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-4 transition-colors duration-300 group-hover:bg-blue-500 group-hover:text-white">
                  <sol.icon className="w-5 h-5" />
                </span>
                <h3 className="font-display text-lg font-semibold text-slate-900 mb-2">{sol.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">{sol.description}</p>
                <ul className="flex flex-col gap-1.5 mb-4">
                  {sol.points.map((point) => (
                    <li key={point} className="flex items-center gap-2 text-slate-600 text-sm">
                      <CheckIcon className="w-4 h-4 text-blue-600 shrink-0" /> {point}
                    </li>
                  ))}
                </ul>
                <a href="#the-diarys-way" className="text-blue-600 font-semibold text-sm hover:text-blue-500 transition-colors">
                  Learn More
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Diary's Way */}
      <section id="the-diarys-way" className="bg-white py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-14 sm:mb-20">
            <motion.div {...fadeUp}>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold text-slate-900 mb-2">The Diary's Way</h2>
              <p className="text-slate-500 text-sm sm:text-base max-w-md">
                Three steps between you and your next border crossing. Simplified, secure, and entirely managed by our experts.
              </p>
            </motion.div>
            <div className="hidden sm:flex items-center gap-2 text-xs font-semibold tracking-widest text-slate-300">
              <span>01</span><span className="w-6 h-px bg-slate-200" /><span>02</span><span className="w-6 h-px bg-slate-200" /><span className="text-blue-600">03</span>
            </div>
          </div>

          <div className="relative grid sm:grid-cols-3 gap-10 sm:gap-6">
            <div className="hidden sm:block absolute top-7 left-[16.5%] right-[16.5%] h-px bg-slate-200" />
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6 }}
                className="group relative flex flex-col items-center text-center"
              >
                <span className="relative z-10 w-14 h-14 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center text-blue-600 mb-5 transition-colors duration-300 group-hover:bg-blue-500 group-hover:text-white">
                  <step.icon className="w-6 h-6" />
                  <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-blue-600 text-white text-[10px] font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                </span>
                <h3 className="font-display text-lg font-semibold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed max-w-xs">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Tier Destinations */}
      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex items-end justify-between gap-4 mb-8 sm:mb-10">
            <motion.h2 {...fadeUp} className="font-display text-3xl sm:text-4xl font-semibold text-slate-900">
              Top Tier Destinations
            </motion.h2>
            <Link to="/" className="hidden sm:inline-flex items-center gap-1 text-blue-600 font-semibold text-sm hover:text-blue-500 transition-colors whitespace-nowrap">
              Explore All Regions <ArrowIcon className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {destinations.map((dest, i) => (
              <motion.div
                key={dest.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -8 }}
                className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 aspect-3/4"
              >
                <img
                  src={`https://picsum.photos/seed/${dest.seed}/500/650`}
                  alt={dest.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute inset-0 p-4 flex flex-col justify-between">
                  <span className="self-end w-8 h-8 rounded-full bg-white/90 text-blue-700 flex items-center justify-center text-lg font-bold">+</span>
                  <div>
                    <h3 className="text-white font-display text-lg font-semibold mb-1">{dest.name}</h3>
                    <p className="flex items-center gap-1.5 text-white/75 text-xs mb-3">
                      <ClockIcon className="w-3.5 h-3.5" /> {dest.days}
                    </p>
                    <span className="inline-block bg-white/15 backdrop-blur-sm text-white text-[11px] font-semibold px-2.5 py-1 rounded-full">
                      {dest.tag}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Diary's Visa Concierge */}
      <section className="bg-blue-500 py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div {...fadeUp}>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-white mb-3">Why Diary's Visa Concierge?</h2>
            <p className="text-white/75 text-sm sm:text-base leading-relaxed mb-10">
              We bridge the gap between global borders and your personal journey with unmatched precision and
              white-glove service.
            </p>
            <div className="grid grid-cols-2 gap-x-6 gap-y-8">
              {stats.map((stat) => (
                <div key={stat.label} className="flex items-start gap-3">
                  <span className="w-10 h-10 rounded-full bg-white/15 text-blue-50 flex items-center justify-center shrink-0">
                    <stat.icon className="w-5 h-5" />
                  </span>
                  <div>
                    <p className="text-white font-bold text-lg leading-none mb-1">{stat.value}</p>
                    <p className="text-white/70 text-xs leading-snug">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="bg-white/10 border border-white/20 rounded-2xl p-6 sm:p-8"
          >
            <p className="font-display italic text-white text-lg sm:text-xl leading-relaxed mb-6">
              "Diary's turned a stressful 3-month nightmare into a 2-week breeze. Their concierge handled every
              detail for my complex business itinerary across four continents."
            </p>
            <div className="flex items-center gap-3">
              <span className="w-11 h-11 rounded-full bg-white text-blue-700 font-bold flex items-center justify-center">ER</span>
              <div>
                <p className="text-white font-semibold text-sm">Elena Rodriguez</p>
                <p className="text-white/65 text-xs">Managing Director, Global FinTech</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Consult a Specialist */}
      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-3xl overflow-hidden shadow-xl border border-slate-100 flex flex-col sm:flex-row"
          >
            <div className="sm:w-2/5 bg-blue-500 text-white p-8 sm:p-10 flex flex-col justify-between gap-10">
              <div>
                <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-3">Consult a Specialist</h2>
                <p className="text-white/70 text-sm leading-relaxed">
                  Ready to start your journey? Provide your details and a concierge will contact you within 4 hours.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <a href="tel:+918891245778" className="flex items-center gap-2.5 text-white/85 hover:text-white text-sm transition-colors">
                  <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0"><PhoneIcon className="w-4 h-4" /></span>
                  +91 8891245778
                </a>
                <a href="mailto:concierge@diarystourism.com" className="flex items-center gap-2.5 text-white/85 hover:text-white text-sm transition-colors">
                  <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0"><MailIcon className="w-4 h-4" /></span>
                  concierge@diarystourism.com
                </a>
              </div>
            </div>

            <form className="sm:w-3/5 p-8 sm:p-10 grid sm:grid-cols-2 gap-5">
              <label className="flex flex-col gap-1.5 text-sm">
                <span className="text-slate-500 text-xs font-semibold tracking-wide uppercase">Full Name</span>
                <input type="text" placeholder="Jonathan Doe" className="border border-slate-200 rounded-lg px-3.5 py-2.5 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-blue-500" />
              </label>
              <label className="flex flex-col gap-1.5 text-sm">
                <span className="text-slate-500 text-xs font-semibold tracking-wide uppercase">Email Address</span>
                <input type="email" placeholder="john@domain.com" className="border border-slate-200 rounded-lg px-3.5 py-2.5 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-blue-500" />
              </label>
              <label className="flex flex-col gap-1.5 text-sm">
                <span className="text-slate-500 text-xs font-semibold tracking-wide uppercase">Passport Country</span>
                <select className="border border-slate-200 rounded-lg px-3.5 py-2.5 text-slate-800 focus:outline-none focus:border-blue-500">
                  <option>India</option>
                  <option>United States</option>
                  <option>United Arab Emirates</option>
                  <option>United Kingdom</option>
                </select>
              </label>
              <label className="flex flex-col gap-1.5 text-sm">
                <span className="text-slate-500 text-xs font-semibold tracking-wide uppercase">Destination</span>
                <input type="text" placeholder="e.g. France, Japan" className="border border-slate-200 rounded-lg px-3.5 py-2.5 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-blue-500" />
              </label>
              <label className="flex flex-col gap-1.5 text-sm sm:col-span-2">
                <span className="text-slate-500 text-xs font-semibold tracking-wide uppercase">Travel Details</span>
                <textarea rows={3} placeholder="Briefly describe your travel plans..." className="border border-slate-200 rounded-lg px-3.5 py-2.5 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 resize-none" />
              </label>
              <button
                type="submit"
                className="sm:col-span-2 bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm py-3.5 rounded-full transition-colors"
              >
                Submit Inquiry
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default VisaAssistance
