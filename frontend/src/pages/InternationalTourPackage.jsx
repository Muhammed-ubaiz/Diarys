import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import bridgeOfPeace from '../assets/images/gallery/Bridge of Peace in Tbilisi, Georgia.jpg'
import santoriniCrop from '../assets/images/hero/santorini-crop.png'
import lakshadweepBeauty from '../assets/images/gallery/lakshadweep-serene-beauty.jpg'
import halongBay from '../assets/images/gallery/Cruising the Emerald Waters of Halong Bay.jpg'
import phuketBeaches from '../assets/images/gallery/Phuket Beaches, Thailand Travel Inspiration.jpg'
import hillStations from '../assets/images/gallery/Bliss in the Hill Stations.jpg'
import santoriniOiaDomes from '../assets/images/hero/ChatGPT Image Aug 17, 2026, 02_28_06 PM.png'

const ArrowIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="w-4 h-4" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m0 0l-6-6m6 6l-6 6" />
  </svg>
)

const SearchIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
    <circle cx="11" cy="11" r="7" />
    <path strokeLinecap="round" d="M21 21l-4.3-4.3" />
  </svg>
)

const BedIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 18v-6a2 2 0 012-2h14a2 2 0 012 2v6M3 18v2M21 18v2M3 12V8a2 2 0 012-2h4a2 2 0 012 2v2" />
  </svg>
)

const HeadsetIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 13v-1a8 8 0 0116 0v1M4 13v4a2 2 0 002 2h1v-6H5a1 1 0 00-1 1v0zm16 0v4a2 2 0 01-2 2h-1v-6h1a1 1 0 011 1v0z" />
  </svg>
)

const TagIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.5 3H5a2 2 0 00-2 2v6.5a2 2 0 00.6 1.4l9 9a2 2 0 002.8 0l6.5-6.5a2 2 0 000-2.8l-9-9a2 2 0 00-1.4-.6z" />
    <circle cx="8" cy="8" r="1.3" fill="currentColor" stroke="none" />
  </svg>
)

const StarIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2.5l2.9 6.2 6.6.7-4.9 4.6 1.3 6.6L12 17.6l-5.9 3 1.3-6.6-4.9-4.6 6.6-.7L12 2.5z" />
  </svg>
)

const PinIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2a7 7 0 00-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 00-7-7zm0 9.5A2.5 2.5 0 1112 6.5a2.5 2.5 0 010 5z" />
  </svg>
)

const GlobeIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
    <circle cx="12" cy="12" r="9" />
    <path strokeLinecap="round" d="M3 12h18M12 3c2.5 2.6 3.8 5.7 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.7-3.8-9S9.5 5.6 12 3z" />
  </svg>
)

const BriefcaseIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
    <rect x="3" y="7" width="18" height="12" rx="2" />
    <path strokeLinecap="round" d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2M3 12h18" />
  </svg>
)

const ShieldIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
  </svg>
)

const SparkleIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2l1.8 5.6L19.4 9.4 13.8 11.2 12 16.8l-1.8-5.6L4.6 9.4l5.6-1.8L12 2z" />
    <path d="M19 15l.8 2.4L22.2 18.2 19.8 19 19 21.4 18.2 19 15.8 18.2 18.2 17.4 19 15z" />
  </svg>
)

const CalendarIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
    <rect x="3.5" y="5" width="17" height="16" rx="2.5" />
    <path strokeLinecap="round" d="M8 3v4M16 3v4M3.5 10h17" />
  </svg>
)

const categories = ['All', 'Georgia', 'Greece', 'Vietnam', 'Thailand', 'India']

const journeys = [
  {
    badge: 'Top Rated',
    country: 'Georgia',
    duration: '7 Days · Georgia',
    title: 'Caucasus Crossroads: Tbilisi & Kazbegi',
    tags: ['Wine Tours', 'Mountain Treks'],
    description: 'Wander Tbilisi\'s old town and toast to eight thousand years of winemaking before chasing alpine lakes in Kazbegi.',
    price: 'From ₹45,999',
    image: bridgeOfPeace,
    position: 'center 55%',
  },
  {
    badge: 'Seasonal',
    country: 'Greece',
    duration: '5 Days · Greece',
    title: 'Santorini Sky Villas',
    tags: ['Sunset Cruises', 'Boutique Stays'],
    description: 'Cliffside blue-domed villas, volcanic beaches, and catamaran sunsets over the Aegean caldera.',
    price: 'From ₹68,999',
    image: santoriniCrop,
    position: 'center 45%',
  },
  {
    badge: 'Rare Journey',
    country: 'India',
    duration: '4 Days · Lakshadweep',
    title: 'Lakshadweep Lagoon Escape',
    tags: ['Private Boat', 'Snorkeling'],
    description: 'Glide across glass-clear lagoons and private sandbanks on India\'s most untouched coral islands.',
    price: 'From ₹32,999',
    image: lakshadweepBeauty,
    position: 'center 60%',
  },
  {
    badge: 'Bestseller',
    country: 'Vietnam',
    duration: '6 Days · Vietnam',
    title: 'Halong Bay & Hanoi Escape',
    tags: ['Cruise Stay', 'Old Quarter'],
    description: 'Overnight on a traditional junk boat among Halong Bay\'s limestone karsts, then lose yourself in Hanoi\'s lantern-lit lanes.',
    price: 'From ₹52,999',
    image: halongBay,
    position: 'center 50%',
  },
  {
    badge: 'Family Favorite',
    country: 'Thailand',
    duration: '5 Days · Thailand',
    title: 'Phuket Island Hopping',
    tags: ['Island Hopping', 'Beach Resorts'],
    description: 'Longtail boats to hidden coves, sunset beach clubs, and a resort stay built for slowing down.',
    price: 'From ₹38,999',
    image: phuketBeaches,
    position: 'center 55%',
  },
  {
    badge: 'New',
    country: 'India',
    duration: '5 Days · Kerala',
    title: 'Munnar & Thekkady Hill Trails',
    tags: ['Tea Estates', 'Wildlife'],
    description: 'Misty tea plantations, spice trails, and a houseboat night on the backwaters to close things out.',
    price: 'From ₹27,999',
    image: hillStations,
    position: 'center 50%',
  },
]

const heroFeatures = [
  { title: 'Worldwide Destinations', icon: GlobeIcon },
  { title: 'Handpicked Experiences', icon: BriefcaseIcon },
  { title: 'Safe & Trusted Travel', icon: ShieldIcon },
  { title: '24/7 Support', icon: HeadsetIcon },
]

const whyBookWithUs = [
  {
    title: 'Expert Guides',
    description: 'Access hidden secrets and local stories with our certified, bilingual travel specialists.',
    icon: SearchIcon,
  },
  {
    title: 'Luxury Stays',
    description: 'From heritage stays to modern retreats, we vet every property for excellence.',
    icon: BedIcon,
  },
  {
    title: '24/7 Support',
    description: 'Wherever you are in the world, our concierge team is a single call away, day or night.',
    icon: HeadsetIcon,
  },
  {
    title: 'Best Price Guarantee',
    description: 'Transparent pricing with no hidden fees — find it cheaper elsewhere and we\'ll match it.',
    icon: TagIcon,
  },
]

const testimonials = [
  {
    name: 'Aditya Krishnan',
    trip: 'Caucasus Crossroads',
    quote: 'The Kazbegi leg alone was worth the trip. Every hotel and driver was exactly as promised — zero surprises, all good ones.',
  },
  {
    name: 'Meera Nair',
    trip: 'Santorini Sky Villas',
    quote: "Booked this for our anniversary and it delivered on every photo we'd seen online. The catamaran sunset was the highlight of the year.",
  },
  {
    name: 'Farhan Sheikh',
    trip: 'Halong Bay & Hanoi',
    quote: 'Waking up on the boat surrounded by the karsts is something photos genuinely don\'t capture. Smooth booking from start to finish.',
  },
]

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
}

function InternationalTourPackage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const filteredJourneys = activeCategory === 'All' ? journeys : journeys.filter((j) => j.country === activeCategory)

  return (
    <div>
      {/* Hero — real background photo (no baked text) with live text/CTA/cards overlaid, so
          nothing is ever cropped or squeezed regardless of screen size. */}
      <section className="relative w-full h-screen min-h-[640px] overflow-hidden">
        <motion.img
          src={santoriniOiaDomes}
          alt="Santorini's blue-domed Oia village overlooking the Aegean caldera"
          initial={{ opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 w-full h-full object-cover object-[68%_center]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/50 sm:via-white/38 to-transparent" />

        <div className="relative z-10 h-full flex items-center pt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 w-full">
            <div className="max-w-xl">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4"
              >
                <span className="block text-blue-950">International</span>
                <span className="block text-blue-600">Tour Packages</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="text-slate-700 text-base sm:text-lg leading-relaxed mb-7 max-w-md"
              >
                Discover unforgettable destinations, curated experiences, and seamless journeys across the world.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <a
                  href="#featured-journeys"
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm px-7 py-3.5 rounded-full shadow-lg shadow-blue-950/20 transition-colors duration-300"
                >
                  Explore Packages
                  <ArrowIcon className="w-4 h-4" />
                </a>
              </motion.div>

              {/* Feature strip */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="mt-8 sm:mt-10 bg-white/85 backdrop-blur-md rounded-2xl shadow-lg px-4 sm:px-6 py-4 sm:py-5 flex flex-wrap gap-x-6 gap-y-4"
              >
                {heroFeatures.map((f) => (
                  <div key={f.title} className="flex items-center gap-2.5">
                    <span className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0">
                      <f.icon className="w-4 h-4" />
                    </span>
                    <span className="text-slate-800 text-xs sm:text-sm font-semibold leading-tight">{f.title}</span>
                  </div>
                ))}
              </motion.div>

              {/* Stats card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="mt-4 sm:mt-5 bg-white/85 backdrop-blur-md rounded-2xl shadow-lg px-5 sm:px-6 py-4 sm:py-5 flex flex-wrap items-center gap-x-8 gap-y-3"
              >
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2.5">
                    {['AK', 'MN', 'FS'].map((initials) => (
                      <span
                        key={initials}
                        className="w-8 h-8 rounded-full bg-blue-600 text-white text-[10px] font-display font-bold flex items-center justify-center border-2 border-white"
                      >
                        {initials}
                      </span>
                    ))}
                  </div>
                  <div>
                    <p className="text-blue-950 font-semibold text-sm">25,000+ Happy Travelers</p>
                    <div className="flex items-center gap-1 text-amber-500">
                      {Array.from({ length: 5 }).map((_, idx) => (
                        <StarIcon key={idx} className="w-3 h-3" />
                      ))}
                      <span className="text-slate-500 text-xs ml-1">4.9/5 Rating</span>
                    </div>
                  </div>
                </div>
                <div className="h-9 w-px bg-blue-100 hidden sm:block" />
                <div>
                  <p className="text-blue-950 font-semibold text-sm">100+ Countries</p>
                  <p className="text-slate-500 text-xs">One Unforgettable Journey</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Journeys */}
      <section id="featured-journeys" className="relative bg-white pt-16 sm:pt-20 pb-16 sm:pb-24 overflow-hidden">
        <div aria-hidden="true" className="absolute -top-24 -left-24 w-96 h-96 bg-blue-200/40 rounded-full blur-3xl" />
        <div aria-hidden="true" className="absolute top-1/3 -right-32 w-[28rem] h-[28rem] bg-amber-100/50 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <motion.div {...fadeUp} className="flex flex-col items-center text-center mb-8 sm:mb-10">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 mb-4">
              <SparkleIcon className="w-3.5 h-3.5" />
              Handpicked Experiences
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 mb-3">Featured Journeys</h2>
            <p className="text-slate-500 text-sm sm:text-base max-w-md">Our most acclaimed international experiences, handpicked for this season.</p>
          </motion.div>

          {/* Category filter */}
          <motion.div {...fadeUp} className="flex flex-wrap justify-center gap-2.5 mb-10 sm:mb-14">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25 scale-105'
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-blue-200 hover:text-blue-700 hover:shadow-sm'
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {filteredJourneys.map((trip, i) => (
              <motion.div
                key={trip.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -8 }}
                className="group bg-white rounded-3xl shadow-md hover:shadow-2xl hover:shadow-blue-950/10 ring-1 ring-slate-100 hover:ring-blue-100 overflow-hidden flex flex-col transition-shadow duration-300"
              >
                <div className="relative h-56 overflow-hidden">
                  <img src={trip.image} alt={trip.title} className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" style={{ objectPosition: trip.position }} />
                  <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-blue-900 text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full shadow-sm">
                    {trip.badge}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4">
                    <p className="flex items-center gap-1.5 text-white/80 text-xs font-semibold tracking-wide uppercase mb-0.5">
                      <CalendarIcon className="w-3.5 h-3.5" />
                      {trip.duration}
                    </p>
                    <h3 className="text-white font-display text-lg font-semibold leading-snug">{trip.title}</h3>
                  </div>
                </div>
                <div className="p-5 sm:p-6 flex flex-col gap-3 flex-1">
                  <div className="flex flex-wrap gap-2">
                    {trip.tags.map((tag) => (
                      <span key={tag} className="inline-flex items-center gap-1 text-[11px] font-semibold text-blue-700 bg-blue-50/80 border border-blue-100 px-2.5 py-1 rounded-full">
                        <TagIcon className="w-3 h-3" />
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed flex-1">{trip.description}</p>
                  <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                    <div>
                      <p className="font-display font-bold text-slate-900 text-base leading-tight">{trip.price}</p>
                      <p className="text-slate-400 text-[11px]">per person</p>
                    </div>
                    <Link
                      to="/contact"
                      className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300"
                    >
                      <ArrowIcon className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Book With Us */}
      <section className="bg-white py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10 text-center">
          <motion.h2 {...fadeUp} className="font-display text-2xl sm:text-3xl font-semibold text-slate-900 mb-12 sm:mb-16">
            Why Book With Us
          </motion.h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-8">
            {whyBookWithUs.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6 }}
                className="group flex flex-col items-center"
              >
                <span className="w-14 h-14 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mb-4 transition-colors duration-300 group-hover:bg-blue-500 group-hover:text-white">
                  <item.icon className="w-6 h-6" />
                </span>
                <h3 className="font-display text-lg font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed max-w-xs">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">
          <motion.h2 {...fadeUp} className="font-display text-2xl sm:text-3xl font-semibold text-slate-900 mb-12 sm:mb-16 text-center">
            Travelers Who've Been
          </motion.h2>

          <div className="grid sm:grid-cols-3 gap-6 sm:gap-7">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
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
                    <p className="font-display text-sm font-semibold text-slate-900">{t.name}</p>
                    <p className="flex items-center gap-1 text-xs text-slate-500">
                      <PinIcon className="w-3 h-3" />
                      {t.trip}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="relative bg-white py-20 sm:py-24 overflow-hidden">
        <motion.div {...fadeUp} className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-10 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-blue-950 mb-4">
            Can't decide where to go next?
          </h2>
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed mb-8 max-w-xl mx-auto">
            Tell us what you're picturing — a coastline, a mountain trail, a city break — and we'll shortlist the trip
            to match it.
          </p>
          <Link
            to="/contact"
            className="group inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm px-8 py-3.5 rounded-full shadow-lg shadow-blue-950/15 transition-colors duration-300"
          >
            Talk To A Travel Expert
            <ArrowIcon className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </section>
    </div>
  )
}

export default InternationalTourPackage
