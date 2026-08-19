import { useState, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import lakshadweepBeauty from '../assets/images/gallery/lakshadweep-serene-beauty.jpg'
import blissHillStations from '../assets/images/gallery/Bliss in the Hill Stations.jpg'
import tbilisiBridge from '../assets/images/gallery/Bridge of Peace in Tbilisi, Georgia.jpg'
import halongBay from '../assets/images/gallery/Cruising the Emerald Waters of Halong Bay.jpg'
import overlandHero from '../assets/images/hero/ChatGPT Image Aug 19, 2026, 02_55_36 PM.png'
import GalleryReel from '../components/GalleryReel'

const PinIcon = ({ className = '', ...props }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={`w-4 h-4 ${className}`} {...props}>
    <path d="M12 2a7 7 0 00-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 00-7-7zm0 9.5A2.5 2.5 0 1112 6.5a2.5 2.5 0 010 5z" />
  </svg>
)

const ClockIcon = ({ className = '', ...props }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={`w-4 h-4 ${className}`} {...props}>
    <circle cx="12" cy="12" r="9" />
    <path strokeLinecap="round" d="M12 7v5l3 3" />
  </svg>
)

const StarIcon = ({ className = '', ...props }) => (
  <svg viewBox="0 0 20 20" fill="currentColor" className={`w-4 h-4 ${className}`} {...props}>
    <path d="M10 1.5l2.6 5.27 5.82.85-4.21 4.1 1 5.8L10 14.9l-5.21 2.62 1-5.8-4.21-4.1 5.82-.85z" />
  </svg>
)

// Same glyph used on the Flights page search card — reused here for visual consistency.
const PlaneIcon = ({ className = '', ...props }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} {...props}>
    <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 00-3 0V9l-8 5v2l8-2.5V19l-2.5 1.5V22l4-1 4 1v-1.5L13 19v-5.5z" />
  </svg>
)

const SearchIcon = ({ className = '', ...props }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className={className} {...props}>
    <circle cx="11" cy="11" r="7" />
    <path strokeLinecap="round" d="M21 21l-4.3-4.3" />
  </svg>
)

const GlobeIcon = ({ className = '', ...props }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className} {...props}>
    <circle cx="12" cy="12" r="9" />
    <path strokeLinecap="round" d="M3 12h18M12 3c2.5 2.7 3.8 6 3.8 9s-1.3 6.3-3.8 9c-2.5-2.7-3.8-6-3.8-9S9.5 5.7 12 3z" />
  </svg>
)

const ClipboardCheckIcon = ({ className = '', ...props }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className} {...props}>
    <rect x="5" y="4" width="14" height="17" rx="2" />
    <path strokeLinecap="round" d="M9 4V3a1 1 0 011-1h4a1 1 0 011 1v1" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 13l2 2 4-4" />
  </svg>
)

const HandshakeIcon = ({ className = '', ...props }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className} {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2 11l4-2.5 3.5 2 2.5-1.5 2 1.3M2 11v4.5l3 2M22 11l-4-2.5-3 2M22 11v4.5l-3 2M8.5 10.5l3 2.3a1.5 1.5 0 001.9-.1v0a1.5 1.5 0 00-.1-2.3L10.5 8.5" />
  </svg>
)

const ArrowIcon = ({ className = '', ...props }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m0 0l-6-6m6 6l-6 6" />
  </svg>
)

const ShieldIcon = ({ className = '', ...props }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className} {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l7 3v5c0 5-3.5 8.5-7 10-3.5-1.5-7-5-7-10V6l7-3z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
  </svg>
)

const HeadsetIcon = ({ className = '', ...props }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className} {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 13v-1a8 8 0 0116 0v1" />
    <rect x="2.5" y="13" width="4" height="6" rx="1.5" />
    <rect x="17.5" y="13" width="4" height="6" rx="1.5" />
    <path strokeLinecap="round" d="M19.5 19v.5a3 3 0 01-3 3H13" />
  </svg>
)

const reveal = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
}

// Small rotated-square bullet used before every section eyebrow — the page's recurring accent mark.
function Eyebrow({ children }) {
  return (
    <span className="inline-flex items-center gap-2 text-xs font-extrabold text-blue-700 tracking-widest uppercase mb-4">
      <span className="w-2 h-2 bg-blue-600 rotate-45 inline-block shrink-0" />
      {children}
    </span>
  )
}

const whyChoose = [
  {
    icon: GlobeIcon,
    title: 'Best Price Guarantee',
    desc: 'Best price assured — we’ll match any lower offer you find for the same itinerary.',
  },
  {
    icon: PinIcon,
    title: 'Curated Experiences',
    desc: 'Handpicked destinations crafted for authentic, memorable journeys across India and abroad.',
  },
  {
    icon: ClipboardCheckIcon,
    title: 'Seamless Planning',
    desc: 'From booking to boarding, we make every step effortless and stress-free.',
  },
  {
    icon: HandshakeIcon,
    title: 'Trusted Support',
    desc: 'Dedicated assistance before, during, and after your trip for complete peace of mind.',
  },
]

const heroFeatures = [
  { icon: ShieldIcon, title: 'Best Price Guarantee', desc: 'We offer the best prices for your dream journey.' },
  { icon: HeadsetIcon, title: '24/7 Support', desc: 'Our team is always here to help you anytime.' },
  { icon: PinIcon, title: 'Handpicked Hotels', desc: 'Stay in top-rated hotels for a comfortable journey.' },
  { icon: GlobeIcon, title: 'Worldwide Destinations', desc: 'Explore 100+ amazing destinations worldwide.' },
]

const destinations = [
  { name: 'Kerala', tag: 'Domestic', duration: '5D / 4N', image: lakshadweepBeauty },
  { name: 'Kashmir', tag: 'Domestic', duration: '7D / 6N', image: blissHillStations },
  { name: 'Georgia', tag: 'International', duration: '6D / 5N', image: tbilisiBridge },
  { name: 'Vietnam', tag: 'International', duration: '6D / 5N', image: halongBay },
]

const itinerary = [
  {
    day: 'Day 01',
    title: 'Arrival & Welcome Transfer',
    desc: 'Airport/station reception, hotel check-in, orientation, and a leisure evening walk near city landmarks.',
  },
  {
    day: 'Day 02',
    title: 'Guided Sightseeing Tour',
    desc: 'Full-day guided exploration covering key heritage sites, botanical gardens, and local cultural spots.',
  },
  {
    day: 'Day 03',
    title: 'Adventure & Leisure Activities',
    desc: 'Outdoor excursions, boat cruises, or nature walks with dedicated free time for local shopping and dining.',
  },
]

const partners = ['Oman Air', 'Malaysia Airlines', 'Tourism Malaysia', 'Flynas', 'Visit Dubai', 'Air India', 'Fly Dubai', 'Amazing Thailand']

const testimonials = [
  {
    name: 'Vishnu Sasikumar',
    text: 'It was a good experience collaborating with Ala travelers. Will definitely get in touch next time.',
  },
  {
    name: 'Sanjeetha Shibily',
    text: 'Great experience with Ala Travels! Though we joined from different countries, everything was perfectly planned and stress-free. Highly recommended.',
  },
  {
    name: 'Habeeburahman N',
    text: 'Amazing Almaty trip with ALA Travels Tirur. Everything was well organized, the Saty Village stay was excellent, and the team was very supportive.',
  },
]

function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden h-screen flex items-center bg-blue-950">
      <motion.img
        src={overlandHero}
        alt="An overlanding 4x4 parked on a mountain ridge above the clouds"
        initial={{ opacity: 0, scale: 1.03 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 w-full h-full object-cover"
        style={{ objectPosition: 'center 60%' }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-blue-950/85 via-blue-950/45 to-blue-950/10 pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-24 sm:h-28 bg-gradient-to-b from-blue-950/45 to-transparent pointer-events-none"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-xl"
        >
          <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/20 text-white text-xs font-bold tracking-[0.15em] uppercase px-4 py-2 rounded-full mb-6">
            Domestic &amp; International Tours
          </span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-5">
            <span className="block text-white">Travel light,</span>
            <span className="block text-blue-300 italic">live wide.</span>
          </h1>
          <p className="text-white/80 text-base sm:text-lg leading-relaxed mb-8 max-w-md">
            Discover the routes that move you most, and everything you need to make the journey effortless.
          </p>

          <div className="flex flex-wrap items-center gap-8 mb-8">
            <div>
              <p className="text-2xl sm:text-3xl font-extrabold text-white leading-none">10k+</p>
              <p className="text-white/70 text-xs font-semibold uppercase tracking-wide mt-1.5">Trips Planned</p>
            </div>
            <div className="w-px h-10 bg-white/20" />
            <div>
              <p className="text-2xl sm:text-3xl font-extrabold text-white leading-none">50k+</p>
              <p className="text-white/70 text-xs font-semibold uppercase tracking-wide mt-1.5">Happy Clients</p>
            </div>
          </div>

          <Link
            to="/international-tour-package"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm px-7 py-3.5 rounded-full shadow-lg shadow-blue-950/25 transition-colors"
          >
            View Packages <ArrowIcon className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

function TourSearchBar() {
  const navigate = useNavigate()
  const [destination, setDestination] = useState('')
  const [departDate, setDepartDate] = useState('')
  const [returnDate, setReturnDate] = useState('')
  const [travelers, setTravelers] = useState('2 Travelers')

  const handleSearch = (e) => {
    e.preventDefault()
    navigate('/contact')
  }

  return (
    <motion.form
      onSubmit={handleSearch}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="relative z-20 -mt-8 sm:-mt-10 lg:-mt-12 px-4 sm:px-6 max-w-6xl mx-auto"
    >
      <div className="bg-white rounded-3xl shadow-2xl shadow-blue-950/10 border border-blue-50 p-5 sm:p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr_auto] gap-6 lg:gap-2 lg:divide-x lg:divide-blue-100 lg:items-center">
        <label className="flex items-center gap-3 text-left lg:pr-5">
          <span className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
            <PinIcon className="w-4 h-4" />
          </span>
          <span className="flex flex-col min-w-0">
            <span className="text-sm font-bold text-blue-950">Where to?</span>
            <input
              type="text"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              placeholder="Search destinations"
              className="w-full min-w-0 text-slate-500 text-xs bg-transparent placeholder:text-slate-400 focus:outline-none"
            />
          </span>
        </label>

        <label className="flex items-center gap-3 text-left lg:px-5">
          <span className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
            <ClockIcon className="w-4 h-4" />
          </span>
          <span className="flex flex-col min-w-0">
            <span className="text-sm font-bold text-blue-950">Check In</span>
            <input
              type="date"
              value={departDate}
              onChange={(e) => setDepartDate(e.target.value)}
              className="w-full text-slate-500 text-xs bg-transparent focus:outline-none"
            />
          </span>
        </label>

        <label className="flex items-center gap-3 text-left lg:px-5">
          <span className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
            <ClockIcon className="w-4 h-4" />
          </span>
          <span className="flex flex-col min-w-0">
            <span className="text-sm font-bold text-blue-950">Check Out</span>
            <input
              type="date"
              value={returnDate}
              onChange={(e) => setReturnDate(e.target.value)}
              className="w-full text-slate-500 text-xs bg-transparent focus:outline-none"
            />
          </span>
        </label>

        <label className="flex items-center gap-3 text-left lg:px-5">
          <span className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
            <GlobeIcon className="w-4 h-4" />
          </span>
          <span className="flex flex-col min-w-0">
            <span className="text-sm font-bold text-blue-950">Travellers</span>
            <select
              value={travelers}
              onChange={(e) => setTravelers(e.target.value)}
              className="w-full text-slate-500 text-xs bg-transparent focus:outline-none"
            >
              <option>1 Traveler</option>
              <option>2 Travelers</option>
              <option>3 Travelers</option>
              <option>4+ Travelers</option>
            </select>
          </span>
        </label>

        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm px-6 py-3.5 rounded-full shadow-lg shadow-blue-950/20 transition-colors lg:ml-5"
        >
          Search Now <SearchIcon className="w-4 h-4" />
        </button>
      </div>
    </motion.form>
  )
}

function HeroFeatures() {
  return (
    <section className="bg-white pt-10 sm:pt-14 pb-16 sm:pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8">
        {heroFeatures.map((f) => (
          <div key={f.title} className="flex items-start gap-3">
            <f.icon className="w-6 h-6 text-blue-600 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-bold text-blue-950">{f.title}</h4>
              <p className="text-xs text-slate-500 leading-relaxed mt-1">{f.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function WhyChooseSection() {
  return (
    <section className="py-20 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start mb-14 sm:mb-16">
          <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
            <Eyebrow>Why Choose Diary's</Eyebrow>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold leading-[1.1] tracking-tight">
              <span className="text-blue-950 block">Seamless Travel,</span>
              <span className="block bg-gradient-to-b from-blue-950 to-blue-950/35 bg-clip-text text-transparent">Meaningful Memories</span>
            </h2>
          </motion.div>
          <motion.p
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-slate-600 leading-relaxed lg:pt-14"
          >
            Choosing Diary's means leaving the stress behind and embracing journeys designed with care.
            From handpicked destinations and personalized itineraries to effortless planning and reliable
            support — every trip is written the way you'd want to remember it.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 border-t border-blue-100">
          {whyChoose.map((f, i) => (
            <motion.div
              key={f.title}
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className={`p-8 sm:p-10 border-blue-100 ${i % 2 === 0 ? 'sm:border-r' : ''} ${i < 2 ? 'border-b' : ''}`}
            >
              <f.icon className="w-9 h-9 text-blue-600 mb-5" />
              <h4 className="text-lg font-bold text-blue-950 mb-2">{f.title}</h4>
              <p className="text-sm text-slate-500 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function DestinationsSection() {
  const scrollerRef = useRef(null)

  const scrollByCards = (dir) => {
    const el = scrollerRef.current
    if (!el) return
    el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: 'smooth' })
  }

  return (
    <section id="destinations" className="py-20 sm:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start mb-12 sm:mb-14">
          <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}>
            <Eyebrow>Popular Destinations</Eyebrow>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold leading-[1.1] tracking-tight">
              <span className="text-blue-950 block">Explore The World,</span>
              <span className="block bg-gradient-to-b from-blue-950 to-blue-950/35 bg-clip-text text-transparent">Page By Page</span>
            </h2>
          </motion.div>
          <motion.p
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-slate-600 leading-relaxed lg:pt-14"
          >
            Our handpicked destinations bring together the beauty, culture, and experiences travelers love
            most — from serene domestic escapes to unforgettable international getaways.
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div ref={scrollerRef} className="flex overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory pb-2 -mx-4 sm:mx-0 sm:gap-6">
          {destinations.map((d, i) => (
            <motion.div
              key={d.name}
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="shrink-0 w-full sm:w-[45%] lg:w-[23%] snap-center sm:snap-start"
            >
              <Link
                to="/contact"
                className="group relative block w-[78%] sm:w-full mx-auto aspect-[3/4] rounded-2xl overflow-hidden border border-blue-100 shadow-lg shadow-blue-950/10"
              >
                <img
                  src={d.image}
                  alt={d.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/85 via-blue-950/15 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <span className="flex items-center gap-1.5 text-[10px] font-bold tracking-widest uppercase text-blue-200 mb-1">
                    <ClockIcon className="w-3 h-3" /> {d.tag} &middot; {d.duration}
                  </span>
                  <h3 className="text-xl font-bold text-white">{d.name}</h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            type="button"
            onClick={() => scrollByCards(-1)}
            aria-label="Scroll destinations left"
            className="w-11 h-11 rounded-full border border-blue-200 flex items-center justify-center text-blue-700 hover:text-white hover:bg-blue-600 hover:border-blue-600 transition-colors"
          >
            <ArrowIcon className="w-4 h-4 rotate-180" />
          </button>
          <button
            type="button"
            onClick={() => scrollByCards(1)}
            aria-label="Scroll destinations right"
            className="w-11 h-11 rounded-full border border-blue-200 flex items-center justify-center text-blue-700 hover:text-white hover:bg-blue-600 hover:border-blue-600 transition-colors"
          >
            <ArrowIcon className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  )
}

function Home() {
  return (
    <div className="bg-white">
      <HeroSection />
      <TourSearchBar />
      <HeroFeatures />

      {/* PARTNERS */}
      <section className="pt-14 sm:pt-16 pb-16 sm:pb-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-xs font-bold tracking-[0.25em] uppercase text-blue-400 mb-8">Trusted Travel Partners</p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {partners.map((name) => (
              <span key={name} className="text-blue-900/40 hover:text-blue-700 font-bold text-sm sm:text-base tracking-wide transition-colors duration-300 whitespace-nowrap">
                {name}
              </span>
            ))}
          </div>
        </div>
      </section>

      <WhyChooseSection />
      <DestinationsSection />

      <GalleryReel />

      {/* SAMPLE ITINERARY — laid out as a dashed flight route rather than plain numbered cards,
          since the three stops really are a literal day-by-day path. */}
      <section className="bg-white py-20 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }} className="text-center max-w-2xl mx-auto mb-14">
            <div className="flex justify-center">
              <Eyebrow>How We Plan</Eyebrow>
            </div>
            <h2 className="text-3xl font-extrabold text-blue-950 mb-3">Sample Itinerary Outline</h2>
            <div className="h-1 w-16 bg-blue-600 mx-auto rounded-full" />
          </motion.div>

          <div className="max-w-3xl mx-auto relative">
            <div className="absolute left-6 sm:left-8 top-2 bottom-2 border-l-2 border-dashed border-blue-200" aria-hidden="true" />
            <div className="space-y-8">
              {itinerary.map((item, i) => (
                <motion.div
                  key={item.day}
                  variants={reveal}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="relative pl-16 sm:pl-20"
                >
                  <div className="absolute left-0 top-0 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white border-2 border-blue-600 flex items-center justify-center shadow-md shadow-blue-950/10">
                    <PlaneIcon className="w-5 h-5 text-blue-600 rotate-90" />
                  </div>
                  <div className="bg-white p-6 rounded-xl border border-blue-100 shadow-sm">
                    <span className="text-[11px] font-extrabold tracking-[0.2em] uppercase text-blue-700">{item.day}</span>
                    <h4 className="font-bold text-blue-950 text-base mt-1 mb-1">{item.title}</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 sm:py-24 bg-white border-y border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <motion.div variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }} className="text-center max-w-2xl mx-auto mb-14">
            <div className="flex justify-center">
              <Eyebrow>Traveler Reviews</Eyebrow>
            </div>
            <h2 className="text-3xl font-extrabold text-blue-950 mb-3">What Our Clients Say</h2>
            <div className="h-1 w-16 bg-blue-600 mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                variants={reveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="bg-white p-6 rounded-xl border border-blue-100 shadow-sm"
              >
                <div className="flex text-blue-500 gap-0.5 mb-3">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <StarIcon key={idx} />
                  ))}
                </div>
                <p className="text-xs text-slate-600 mb-4 leading-relaxed">"{t.text}"</p>
                <span className="text-xs font-bold text-blue-950 flex items-center gap-1">
                  <PinIcon className="w-3.5 h-3.5 text-blue-700" /> {t.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
