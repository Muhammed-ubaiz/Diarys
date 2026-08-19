import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import aboutHeroLagoon from '../assets/images/hero/cut.png'
import santoriniOiaDomes from '../assets/images/hero/santorini-oia-domes.jpg'
import lakshadweepBeauty from '../assets/images/gallery/lakshadweep-serene-beauty.jpg'
import tbilisiGeorgia from '../assets/images/gallery/tbilisi-georgia.jpg'
import halongBay from '../assets/images/gallery/Cruising the Emerald Waters of Halong Bay.jpg'
import georgiaCathedral from '../assets/images/gallery/Georgia.jpg'
import hillStations from '../assets/images/gallery/Bliss in the Hill Stations.jpg'
import phuketBeaches from '../assets/images/gallery/Phuket Beaches, Thailand Travel Inspiration.jpg'

const ArrowIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m0 0l-6-6m6 6l-6 6" />
  </svg>
)



const GlobeIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
    <circle cx="12" cy="12" r="9" />
    <path strokeLinecap="round" d="M3 12h18M12 3c2.5 2.7 4 6 4 9s-1.5 6.3-4 9c-2.5-2.7-4-6-4-9s1.5-6.3 4-9z" />
  </svg>
)

const UsersIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
    <circle cx="9" cy="8" r="3.2" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 20c0-3.5 2.7-6 6-6s6 2.5 6 6M15.5 6.2A3.2 3.2 0 1117 12.4M18 14c2.5.3 4 2.2 4 6" />
  </svg>
)

const SuitcaseIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
    <rect x="3" y="7" width="18" height="13" rx="2" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2M3 12h18" />
  </svg>
)

const StarIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2.5l2.9 6.2 6.6.7-4.9 4.6 1.3 6.6L12 17.6l-5.9 3 1.3-6.6-4.9-4.6 6.6-.7L12 2.5z" />
  </svg>
)

const CompassIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
    <circle cx="12" cy="12" r="9" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.5 8.5l-2.2 5.8-5.8 2.2 2.2-5.8 5.8-2.2z" />
  </svg>
)

const HeartIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.2s-7.5-4.6-9.8-9.4C.7 7.3 2.4 4 5.9 3.4c2-.35 3.9.6 5.1 2.5 1.2-1.9 3.1-2.85 5.1-2.5 3.5.6 5.2 3.9 3.7 7.4-2.3 4.8-9.8 9.4-9.8 9.4z" />
  </svg>
)

const BadgeIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
    <circle cx="12" cy="9" r="6" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.5 14.2L6.5 21l5.5-3 5.5 3-2-6.8" />
  </svg>
)

const PinIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2a7 7 0 00-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 00-7-7zm0 9.5A2.5 2.5 0 1112 6.5a2.5 2.5 0 010 5z" />
  </svg>
)

const stats = [
  { icon: GlobeIcon, value: '500+', label: 'Destinations', sublabel: 'Worldwide' },
  { icon: UsersIcon, value: '25,000+', label: 'Happy Travelers', sublabel: 'And Counting' },
  { icon: SuitcaseIcon, value: '10K+', label: 'Travel Packages', sublabel: 'Curated for You' },
  { icon: StarIcon, value: '4.9/5', label: 'Customer Rating', sublabel: 'Based on Reviews' },
]

const values = [
  {
    icon: CompassIcon,
    title: 'Curated Experiences',
    description: 'Handpicked destinations and activities that bring you the best of travel.',
  },
  {
    icon: HeartIcon,
    title: 'Travel with Care',
    description: 'Your comfort and safety are our top priorities on every journey.',
  },
  {
    icon: UsersIcon,
    title: 'Personalized Service',
    description: 'We listen, we plan, and we make every trip uniquely yours.',
  },
  {
    icon: BadgeIcon,
    title: 'Trusted by Travelers',
    description: 'Thousands of happy travelers trust us to create lasting memories.',
  },
]

const gallery = [
  { image: lakshadweepBeauty, label: 'Kerala Backwaters' },
  { image: tbilisiGeorgia, label: 'Tbilisi, Georgia' },
  { image: halongBay, label: 'Halong Bay, Vietnam' },
  { image: georgiaCathedral, label: 'The Caucasus, Georgia' },
  { image: hillStations, label: 'Hill Stations, India' },
  { image: phuketBeaches, label: 'Phuket, Thailand' },
]

const testimonials = [
  {
    name: 'Ananya Menon',
    destination: 'Georgia Tour',
    quote: "Every detail was planned so thoughtfully — from the driver to the homestays. It didn't feel like a package tour, it felt like our own trip.",
  },
  {
    name: 'Rahul Varma',
    destination: 'Maldives Getaway',
    quote: "Diary's made a first-time honeymoon trip completely stress-free. Quick replies, honest pricing, and they were reachable the whole time we were there.",
  },
  {
    name: 'Sneha Pillai',
    destination: 'Vietnam Expedition',
    quote: 'The itinerary balanced sightseeing and free time perfectly. Small touches like local food recommendations made it feel personal, not generic.',
  },
]

const reveal = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
}

// Handwritten-style section label set in the site's script logo font — the page's recurring accent mark.
function Eyebrow({ children, className = 'text-blue-700' }) {
  return (
    <span className={`flex items-center gap-2.5 font-logo text-3xl sm:text-4xl leading-none mb-3 ${className}`}>
      <span className="w-6 h-px bg-current inline-block shrink-0" />
      {children}
    </span>
  )
}

// Parses stat strings like "25,000+" or "4.9/5" into a target number, decimal
// precision and the leading/trailing characters to preserve while counting up.
function parseStatValue(raw) {
  const match = raw.match(/^([\d,]*\.?\d+)(.*)$/)
  if (!match) return { target: 0, decimals: 0, useComma: false, suffix: raw }
  const [, numberPart, suffix] = match
  const decimals = numberPart.includes('.') ? numberPart.split('.')[1].length : 0
  return {
    target: parseFloat(numberPart.replace(/,/g, '')),
    decimals,
    useComma: numberPart.includes(','),
    suffix,
  }
}

function formatStatValue(current, { decimals, useComma, suffix }) {
  const rounded = decimals > 0 ? current.toFixed(decimals) : Math.round(current).toString()
  const withComma = useComma && decimals === 0 ? Number(rounded).toLocaleString('en-US') : rounded
  return `${withComma}${suffix}`
}

// Animated stat card: numbers count up from 0 the first time they scroll into view.
function StatItem({ stat, index }) {
  const parsed = parseStatValue(stat.value)
  const hasStarted = useRef(false)
  const [display, setDisplay] = useState(() => formatStatValue(0, parsed))

  const startCount = () => {
    if (hasStarted.current) return
    hasStarted.current = true
    const duration = 1400
    const startTime = performance.now()

    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplay(formatStatValue(parsed.target * eased, parsed))
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }

  return (
    <motion.div
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      onViewportEnter={startCount}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col items-start text-left"
    >
      <span className="inline-flex w-10 h-10 rounded-full bg-white/15 backdrop-blur text-white items-center justify-center shrink-0 mb-2">
        <stat.icon className="w-4 h-4" />
      </span>
      <p className="font-display text-lg sm:text-xl font-bold text-white leading-none">{display}</p>
      <p className="text-white/70 text-xs leading-snug mt-1">
        {stat.label}
        <br />
        {stat.sublabel}
      </p>
    </motion.div>
  )
}

// Story split: narrative + CTA on the left, a single cinematic photo on the right.
function OurStorySection() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
          <Eyebrow>Our Story</Eyebrow>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-blue-950 leading-tight mb-6">
            Built By Travelers, <span className="text-blue-600">For Travelers.</span>
          </h2>
          <p className="text-slate-500 text-base leading-relaxed mb-4">
            Diary's began with a simple frustration: travel planning shouldn't feel like a second job. So we built the
            agency we wished existed — one that handles the logistics with the same care we'd want for our own trip.
          </p>
          <p className="text-slate-500 text-base leading-relaxed mb-8">
            A decade on, we've planned journeys across coastlines, mountains, and cities we've walked ourselves, and
            every itinerary still gets the same personal attention as our very first booking.
          </p>
          <Link
            to="/international-tour-package"
            className="group inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm px-7 py-3.5 rounded-full shadow-lg shadow-blue-950/15 transition-colors duration-300"
          >
            Explore Our Packages
            <ArrowIcon className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>

        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-3xl overflow-hidden shadow-xl aspect-[4/3] lg:aspect-square"
        >
          <img
            src={santoriniOiaDomes}
            alt="Blue-domed churches overlooking the Santorini caldera"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  )
}

// Feature row: four value cards using the same icon-badge pattern as Contact/Packages pages.
function ValuesSection() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 text-center">
        <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
          <Eyebrow className="text-blue-700 justify-center">What Sets Us Apart</Eyebrow>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-blue-950 mb-14 sm:mb-16">
            Built On Trust, Delivered With Care
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8 }}
              className="group rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:border-blue-100 transition-shadow duration-300 p-7 sm:p-8 text-left"
            >
              <span className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mb-5 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white">
                <v.icon className="w-6 h-6" />
              </span>
              <h3 className="font-display text-lg font-semibold text-blue-950 mb-2">{v.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{v.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Three testimonial cards, same styling family as the ones on Home/Contact.
function TestimonialsSection() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 sm:mb-14 text-center"
        >
          <Eyebrow className="text-blue-700 justify-center">Loved By Travelers</Eyebrow>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-blue-950">What Our Travelers Say</h2>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-6 sm:gap-7">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl border border-slate-100 hover:border-blue-100 transition-shadow duration-300 p-6 sm:p-7 text-left"
            >
              <div className="flex text-blue-500 gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <StarIcon key={idx} className="w-4 h-4" />
                ))}
              </div>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-blue-100 text-blue-700 font-display font-bold text-sm flex items-center justify-center shrink-0">
                  {t.name.split(' ').map((n) => n[0]).join('')}
                </span>
                <div>
                  <p className="font-display text-sm font-semibold text-blue-950">{t.name}</p>
                  <p className="flex items-center gap-1 text-xs text-slate-500">
                    <PinIcon className="w-3 h-3" />
                    {t.destination}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero */}
      <section className="relative w-full overflow-hidden h-screen flex items-center">
        <motion.img
          src={aboutHeroLagoon}
          alt="A traveler in a sunhat overlooking a turquoise lagoon among limestone islands"
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: 'center 25%' }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-950/55 to-blue-950/10 pointer-events-none"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-24 sm:h-28 bg-gradient-to-b from-blue-950/40 to-transparent pointer-events-none"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 w-full">
          <motion.div
            variants={reveal}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-xl"
          >
            <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/20 text-white text-xs font-bold tracking-[0.15em] uppercase px-4 py-2 rounded-full mb-6">
              <HeartIcon className="w-4 h-4" />
              About Us
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-extrabold leading-tight mb-5">
              <span className="block text-white">We're More Than</span>
              <span className="block text-white">Just a <span className="text-blue-300">Travel Agency</span></span>
            </h1>
            <p className="text-white/80 text-base sm:text-lg leading-relaxed mb-8 max-w-md">
              At Diary's, we believe travel is about moments that stay with you forever. Our mission is to turn your
              dream destinations into unforgettable experiences with comfort, care, and a personal touch.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8 max-w-lg">
              {stats.map((s, i) => (
                <StatItem key={s.label} stat={s} index={i} />
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                to="/international-tour-package"
                className="group inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm px-7 py-3.5 rounded-full shadow-lg shadow-blue-950/25 transition-colors duration-300"
              >
                Discover Our Story
                <ArrowIcon className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border border-white/30 hover:border-white/60 text-white font-bold text-sm px-7 py-3.5 rounded-full transition-colors"
              >
                Get In Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <OurStorySection />

      <ValuesSection />

      {/* Visual Gallery */}
      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mb-12 sm:mb-14 text-center"
          >
            <Eyebrow className="text-blue-700 justify-center">Moments We've Captured</Eyebrow>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-blue-950">Stories From The Road</h2>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-5">
            {gallery.map((g, i) => (
              <motion.div
                key={g.label}
                variants={reveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="group relative rounded-2xl overflow-hidden shadow-lg aspect-[4/5]"
              >
                <img
                  src={g.image}
                  alt={g.label}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/85 via-blue-950/10 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />
                <p className="absolute bottom-4 left-4 right-4 text-white font-semibold text-sm sm:text-base">{g.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsSection />

      {/* Call To Action */}
      <section className="relative bg-white py-20 sm:py-24 overflow-hidden">
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-10 text-center"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-blue-950 mb-4">
            Ready to write your next chapter?
          </h2>
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed mb-8 max-w-xl mx-auto">
            Let's turn your dream destination into a well-planned reality. Reach out and we'll start crafting your story today.
          </p>
          <Link
            to="/international-tour-package"
            className="group inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm px-8 py-3.5 rounded-full shadow-lg shadow-blue-950/15 transition-colors duration-300"
          >
            Start Your Journey
            <ArrowIcon className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </section>
    </div>
  )
}

export default About
