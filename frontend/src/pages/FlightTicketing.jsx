import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import lakshadweepBeauty from '../assets/images/gallery/lakshadweep-serene-beauty.jpg'
import bridgeOfPeace from '../assets/images/gallery/Bridge of Peace in Tbilisi, Georgia.jpg'
import flightHero from '../assets/images/hero/ChatGPT Image Aug 19, 2026, 02_29_14 PM.png'

const ArrowIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="w-4 h-4" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m0 0l-6-6m6 6l-6 6" />
  </svg>
)

const PlaneIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 00-3 0V9l-8 5v2l8-2.5V19l-2.5 1.5V22l4-1 4 1v-1.5L13 19v-5.5z" />
  </svg>
)

const CalendarIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
    <rect x="3" y="5" width="18" height="16" rx="2" />
    <path strokeLinecap="round" d="M16 3v4M8 3v4M3 10h18" />
  </svg>
)

const ClassIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2.5l2.9 6.3 6.9.7-5.2 4.7 1.5 6.8L12 17.8l-6.1 3.2 1.5-6.8-5.2-4.7 6.9-.7z" />
  </svg>
)

const BookIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 5.5A2.5 2.5 0 016.5 3H12v18H6.5A2.5 2.5 0 014 18.5v-13zM20 5.5A2.5 2.5 0 0017.5 3H12v18h5.5a2.5 2.5 0 002.5-2.5v-13z" />
  </svg>
)

const GlobeIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
    <circle cx="12" cy="12" r="9" />
    <path strokeLinecap="round" d="M3 12h18M12 3c2.5 2.7 4 6 4 9s-1.5 6.3-4 9c-2.5-2.7-4-6-4-9s1.5-6.3 4-9z" />
  </svg>
)

const CarIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v-3l2-4h12l2 4v3M4 16h16M4 16v2a1 1 0 001 1h1a1 1 0 001-1v-2M17 16v2a1 1 0 001 1h1a1 1 0 001-1v-2" />
    <circle cx="8" cy="16" r="1.2" fill="currentColor" stroke="none" />
    <circle cx="16" cy="16" r="1.2" fill="currentColor" stroke="none" />
  </svg>
)

const HeadsetIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 13v-1a8 8 0 0116 0v1M4 13v4a2 2 0 002 2h1v-6H5a1 1 0 00-1 1v0zm16 0v4a2 2 0 01-2 2h-1v-6h1a1 1 0 011 1v0z" />
  </svg>
)

const LockIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
    <rect x="5" y="11" width="14" height="9" rx="2" />
    <path strokeLinecap="round" d="M8 11V7a4 4 0 018 0v4" />
  </svg>
)

const MonitorIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
    <rect x="3" y="4" width="18" height="13" rx="2" />
    <path strokeLinecap="round" d="M8 21h8M12 17v4" />
  </svg>
)

const routes = [
  {
    badge: 'Bespoke Service',
    from: 'Kochi to',
    to: 'Lakshadweep',
    price: 'Starting from $210',
    image: lakshadweepBeauty,
    position: 'center 60%',
  },
  {
    badge: 'Non-Stop First',
    from: 'Delhi to',
    to: 'Tbilisi',
    price: 'Starting from $540',
    image: bridgeOfPeace,
    position: 'center 55%',
  },
]

const experience = [
  {
    icon: GlobeIcon,
    title: 'Global Access',
    description: 'Unlimited reach through our network of premium commercial partners and private jet fleets, ensuring you can reach any point on the globe with zero compromise.',
  },
  {
    icon: CarIcon,
    title: 'Seamless Transfers',
    description: 'From your doorstep to the cabin door. Our chauffeur-driven tarmac transfers and rapid customs clearance ensure your journey never loses its momentum.',
  },
  {
    icon: HeadsetIcon,
    title: 'Dedicated Concierge',
    description: 'A personal flight specialist assigned to your itinerary, managing everything from in-flight dining preferences to last-minute schedule changes.',
  },
]

const commitments = [
  {
    icon: LockIcon,
    title: 'Absolute Exclusivity',
    description: 'Access to non-published fares and private terminals away from the crowds.',
  },
  {
    icon: CalendarIcon,
    title: 'Radical Flexibility',
    description: 'Change your plans up to 4 hours before departure with our elite tier membership.',
  },
  {
    icon: MonitorIcon,
    title: 'Personalized Service',
    description: 'We remember your preferences — from your favorite vintage to seat orientation.',
  },
]

const heroFeatures = [
  { icon: GlobeIcon, title: 'Global Access' },
  { icon: PlaneIcon, title: 'Direct Routes' },
  { icon: ClassIcon, title: 'Elite Cabins' },
  { icon: HeadsetIcon, title: '24/7 Concierge' },
]

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
}

function FlightTicketing() {
  const [tripType, setTripType] = useState('Round Trip')

  return (
    <div>
      {/* Hero */}
      <section className="relative w-full overflow-hidden min-h-screen flex items-center">
        <motion.img
          src={flightHero}
          alt="Elevation in every journey — exclusive flight paths curated for the discerning traveler"
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: 'center 35%' }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-950/55 to-blue-950/10 pointer-events-none"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-24 sm:h-28 bg-gradient-to-b from-blue-950/40 to-transparent pointer-events-none"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 w-full pt-24 sm:pt-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-xl"
          >
            <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/20 text-white text-xs font-bold tracking-[0.15em] uppercase px-4 py-2 rounded-full mb-6">
              <PlaneIcon className="w-4 h-4" />
              Flight Ticketing
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-extrabold leading-tight mb-5">
              <span className="block text-white">Elevation in</span>
              <span className="block text-white">Every <span className="text-blue-300">Journey</span></span>
            </h1>
            <p className="text-white/80 text-base sm:text-lg leading-relaxed mb-8 max-w-md">
              Experience the world's most exclusive flight paths, curated for the discerning traveler. From
              private charters to elite commercial first class.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8 max-w-lg">
              {heroFeatures.map((f) => (
                <div key={f.title} className="flex flex-col items-start gap-2">
                  <span className="w-11 h-11 rounded-full bg-white/15 backdrop-blur text-white flex items-center justify-center">
                    <f.icon className="w-5 h-5" />
                  </span>
                  <span className="text-white/85 text-xs font-semibold leading-snug">{f.title}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#curated-routes"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm px-6 py-3.5 rounded-full shadow-lg shadow-blue-950/25 transition-colors"
              >
                Explore Routes
              </a>
              <a
                href="#air-experience"
                className="inline-flex items-center gap-2 border border-white/30 hover:border-white/60 text-white font-bold text-sm px-6 py-3.5 rounded-full transition-colors"
              >
                View Cabin Classes
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* flight search */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-20 -mt-12 sm:-mt-14 max-w-4xl mx-auto px-4 sm:px-6"
      >
        <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
            <div className="flex items-center gap-6 px-6 sm:px-8 pt-5 border-b border-slate-100">
              {['Round Trip', 'One Way', 'Multi-City'].map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => setTripType(type)}
                  className={`relative pb-3 text-sm font-semibold transition-colors ${
                    tripType === type ? 'text-blue-600' : 'text-slate-400 hover:text-slate-600'
                  }`}
                >
                  {type}
                  {tripType === type && <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-blue-600 rounded-full" />}
                </button>
              ))}
            </div>

            <div className="p-6 sm:p-8 grid sm:grid-cols-4 gap-5">
              <label className="flex flex-col gap-1.5 text-left">
                <span className="text-slate-400 text-[11px] font-bold tracking-widest uppercase">Origin</span>
                <input type="text" defaultValue="London Heathrow (LHR)" className="text-slate-800 text-sm font-semibold bg-transparent focus:outline-none" />
              </label>
              <label className="flex flex-col gap-1.5 text-left sm:border-l sm:border-slate-100 sm:pl-5">
                <span className="text-slate-400 text-[11px] font-bold tracking-widest uppercase">Destination</span>
                <span className="flex items-center gap-1.5 text-slate-400 text-sm font-semibold">
                  <PlaneIcon className="w-3.5 h-3.5 -rotate-45" /> Where to?
                </span>
              </label>
              <label className="flex flex-col gap-1.5 text-left sm:border-l sm:border-slate-100 sm:pl-5">
                <span className="text-slate-400 text-[11px] font-bold tracking-widest uppercase">Travel Dates</span>
                <span className="flex items-center gap-1.5 text-slate-800 text-sm font-semibold">
                  <CalendarIcon className="w-3.5 h-3.5 text-blue-600" /> Oct 12 - Oct 24, 2024
                </span>
              </label>
              <label className="flex flex-col gap-1.5 text-left sm:border-l sm:border-slate-100 sm:pl-5">
                <span className="text-slate-400 text-[11px] font-bold tracking-widest uppercase">Class</span>
                <span className="flex items-center gap-1.5 text-slate-800 text-sm font-semibold">
                  <ClassIcon className="w-3.5 h-3.5 text-blue-600" /> First Class
                </span>
              </label>
            </div>

            <div className="px-6 sm:px-8 pb-6 sm:pb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex items-center gap-5 text-sm text-slate-500">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="accent-blue-600 w-4 h-4" /> Direct Flights Only
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="accent-blue-600 w-4 h-4" /> Flexible Dates
                </label>
              </div>
              <button
                type="button"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm px-6 py-3 rounded-full transition-colors whitespace-nowrap"
              >
                Find Exclusive Paths <ArrowIcon className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>

      {/* Curated Global Transits */}
      <section id="curated-routes" className="bg-white pt-16 sm:pt-20 pb-16 sm:pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 sm:mb-12">
            <motion.div {...fadeUp}>
              <p className="text-blue-600 font-semibold text-xs sm:text-sm tracking-[0.25em] uppercase mb-2">Seasonal Collections</p>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold text-slate-900 mb-2">Curated Global Transits</h2>
              <p className="text-slate-500 text-sm sm:text-base max-w-md">
                Hand-selected routes offering the most sophisticated cabin experiences and seamless arrival services.
              </p>
            </motion.div>
            <Link to="/" className="hidden sm:inline-flex items-center gap-1 text-blue-600 font-semibold text-sm hover:text-blue-500 transition-colors whitespace-nowrap">
              View All Routes <ArrowIcon className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-3 gap-5 sm:gap-6">
            {routes.map((route, i) => (
              <motion.div
                key={route.to}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -8 }}
                className="group bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col"
              >
                <div className="relative h-52 overflow-hidden">
                  <img src={route.image} alt={route.to} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" style={{ objectPosition: route.position }} />
                  <span className="absolute top-4 left-4 bg-white/90 text-blue-700 text-[11px] font-semibold px-2.5 py-1 rounded-full">
                    {route.badge}
                  </span>
                </div>
                <div className="p-6 flex flex-col gap-3 flex-1">
                  <div>
                    <p className="text-slate-400 text-xs font-semibold tracking-wide uppercase">{route.from}</p>
                    <h3 className="font-display text-xl font-semibold text-slate-900">{route.to}</h3>
                  </div>
                  <div className="mt-auto flex items-center justify-between pt-3 border-t border-slate-100">
                    <p className="text-blue-600 font-semibold text-sm">{route.price}</p>
                    <span className="inline-flex items-center gap-1.5 text-slate-500 font-semibold text-sm group-hover:text-blue-600 transition-colors">
                      Book <ArrowIcon className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8 }}
              className="rounded-2xl bg-blue-500 text-white p-6 sm:p-7 flex flex-col justify-between shadow-sm hover:shadow-xl transition-shadow duration-300"
            >
              <div>
                <p className="text-blue-100 font-semibold text-xs tracking-[0.2em] uppercase mb-3">Exclusive Guide</p>
                <h3 className="font-display text-2xl font-semibold leading-snug mb-3">The Art of the Long Haul.</h3>
                <p className="text-white/70 text-sm leading-relaxed mb-4">
                  Discover our editorial guide on maximizing wellness and restoration during transcontinental flights.
                </p>
                <a href="#air-experience" className="text-blue-100 font-semibold text-sm hover:text-white transition-colors">
                  Read Editorial
                </a>
              </div>
              <BookIcon className="w-10 h-10 text-white/30 self-end mt-6" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Diary's Air Experience */}
      <section id="air-experience" className="bg-white py-20 sm:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10 text-center">
          <motion.div {...fadeUp} className="inline-flex flex-col items-center mb-14 sm:mb-16">
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-slate-900 mb-3">The Diary's Air Experience</h2>
            <span className="w-14 h-0.5 bg-blue-600 rounded-full" />
          </motion.div>

          <div className="grid sm:grid-cols-3 gap-10 sm:gap-8">
            {experience.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6 }}
                className="group flex flex-col items-center"
              >
                <span className="w-14 h-14 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mb-5 transition-colors duration-300 group-hover:bg-blue-500 group-hover:text-white">
                  <item.icon className="w-6 h-6" />
                </span>
                <h3 className="font-display text-lg font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed max-w-xs">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Fly with Diary's */}
      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 1.03 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-4/5">
              <img src={bridgeOfPeace} alt="Modern glass architecture" className="w-full h-full object-cover" style={{ objectPosition: 'center 40%' }} />
            </div>
            <div className="absolute -bottom-6 -right-4 sm:right-6 bg-white rounded-xl shadow-lg border border-slate-100 px-5 py-4 max-w-[220px]">
              <p className="text-blue-600 font-bold text-2xl mb-1">99.8%</p>
              <p className="text-slate-500 text-xs leading-snug">On-time departure rate for our private charter network over the last 5 years.</p>
            </div>
          </motion.div>

          <motion.div {...fadeUp}>
            <p className="text-blue-600 font-semibold text-xs sm:text-sm tracking-[0.25em] uppercase mb-3">Our Commitment</p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-slate-900 leading-tight mb-8">
              Why Fly with Diary's?
            </h2>
            <div className="flex flex-col gap-6">
              {commitments.map((item) => (
                <div key={item.title} className="group flex items-start gap-4">
                  <span className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 transition-colors duration-300 group-hover:bg-blue-500 group-hover:text-white">
                    <item.icon className="w-5 h-5" />
                  </span>
                  <div>
                    <h3 className="font-semibold text-slate-900 text-sm sm:text-base mb-1">{item.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Consult a Flight Specialist */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-3xl border border-slate-100 text-center px-6 sm:px-16 py-14 sm:py-16"
          >
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-slate-900 mb-4">Consult a Flight Specialist</h2>
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed max-w-xl mx-auto mb-8">
              Whether planning a multi-city expedition or requiring a private jet charter, our specialists are
              available 24/7 to curate your perfect itinerary.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm px-6 py-3.5 rounded-full transition-colors"
              >
                Inquire Now
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border border-slate-200 hover:border-blue-300 text-blue-700 font-bold text-sm px-6 py-3.5 rounded-full transition-colors"
              >
                Speak with an Expert
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default FlightTicketing
