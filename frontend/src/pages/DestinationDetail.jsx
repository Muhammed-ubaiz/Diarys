import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { destinationsData } from '../data/destinations'

const ArrowIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="w-4 h-4" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m0 0l-6-6m6 6l-6 6" />
  </svg>
)

const CalendarIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4" {...props}>
    <rect x="3" y="5" width="18" height="16" rx="2" />
    <path strokeLinecap="round" d="M16 3v4M8 3v4M3 10h18" />
  </svg>
)

const ClockIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4" {...props}>
    <circle cx="12" cy="12" r="9" />
    <path strokeLinecap="round" d="M12 7v5l3 3" />
  </svg>
)

const UsersIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4" {...props}>
    <circle cx="9" cy="8" r="3" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.5 19c.7-3 3-5 6.5-5s5.8 2 6.5 5M16 8a3 3 0 110 6M17.5 14c2.5.4 4 1.9 4.5 5" />
  </svg>
)

const TagIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.5 3H5a2 2 0 00-2 2v6.5a2 2 0 00.6 1.4l8.5 8.5a2 2 0 002.8 0l6.5-6.5a2 2 0 000-2.8l-8.5-8.5a2 2 0 00-1.4-.6z" />
    <circle cx="8" cy="8" r="1.5" fill="currentColor" stroke="none" />
  </svg>
)

const StarIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2.5l2.9 6.3 6.9.7-5.2 4.7 1.5 6.8L12 17.8l-6.1 3.2 1.5-6.8-5.2-4.7 6.9-.7z" />
  </svg>
)

const HomeIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 11l9-7 9 7M5 10v9a1 1 0 001 1h4v-6h4v6h4a1 1 0 001-1v-9" />
  </svg>
)

// site-wide trust badges shown on every destination's hero image
const trustStats = { rating: '4.9', reviews: '1,250+ Reviews', topDestinations: '12+', happyTravelers: '500+' }

function DestinationDetail() {
  const { slug } = useParams()
  const destination = destinationsData[slug]

  if (!destination) {
    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-24 text-center">
        <h1 className="font-display text-3xl font-bold text-slate-800 mb-4">Destination not found</h1>
        <p className="text-slate-500 mb-8">We couldn't find the destination you're looking for.</p>
        <Link to="/" className="inline-flex items-center gap-2 text-blue-700 font-semibold hover:text-blue-900">
          <ArrowIcon className="rotate-180" /> Back to Home
        </Link>
      </div>
    )
  }

  const { name, seed, tagline, locationLabel, blurb, highlightImages, heroImage, stats, storyTitle, storyQuote, attractions, experiences } = destination

  return (
    <div>
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-white pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-32 lg:pb-0 lg:min-h-[680px] lg:flex lg:items-center">
        <div
          aria-hidden="true"
          className="absolute inset-y-0 left-0 w-full sm:w-3/5 opacity-40"
          style={{ backgroundImage: 'radial-gradient(#93c5fd 1px, transparent 1px)', backgroundSize: '20px 20px' }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-24 sm:h-28 bg-gradient-to-b from-blue-950/45 to-transparent pointer-events-none"
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 w-full grid lg:grid-cols-2 gap-10 lg:gap-8 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="mb-5"
            >
              <Link to="/" className="inline-flex items-center gap-1.5 text-slate-500 hover:text-blue-700 text-sm font-semibold transition-colors">
                <ArrowIcon className="rotate-180 w-3.5 h-3.5" /> Back to Home
              </Link>
            </motion.div>

            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold tracking-[0.15em] uppercase px-4 py-2 rounded-full mb-6"
            >
              <HomeIcon className="w-4 h-4" />
              Destination{locationLabel ? ` — ${locationLabel}` : ''}
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-4xl sm:text-5xl font-extrabold leading-tight text-blue-950 mb-2"
            >
              {name}
            </motion.h1>

            {tagline && (
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="font-logo text-2xl sm:text-3xl text-blue-600 -rotate-1 mb-4"
              >
                {tagline}
              </motion.p>
            )}

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-md mb-8"
            >
              {blurb}
            </motion.p>

            {stats && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8 max-w-lg"
              >
                <div className="flex flex-col items-start gap-2">
                  <span className="w-11 h-11 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center"><CalendarIcon /></span>
                  <span className="text-slate-500 text-[11px]">Best Time</span>
                  <span className="font-semibold text-slate-800 text-sm -mt-1.5">{stats.bestTime}</span>
                </div>
                <div className="flex flex-col items-start gap-2">
                  <span className="w-11 h-11 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center"><ClockIcon /></span>
                  <span className="text-slate-500 text-[11px]">Duration</span>
                  <span className="font-semibold text-slate-800 text-sm -mt-1.5">{stats.duration}</span>
                </div>
                <div className="flex flex-col items-start gap-2">
                  <span className="w-11 h-11 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center"><UsersIcon /></span>
                  <span className="text-slate-500 text-[11px]">Group Size</span>
                  <span className="font-semibold text-slate-800 text-sm -mt-1.5">{stats.groupSize}</span>
                </div>
                <div className="flex flex-col items-start gap-2">
                  <span className="w-11 h-11 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center"><TagIcon /></span>
                  <span className="text-slate-500 text-[11px]">Starting From</span>
                  <span className="font-semibold text-slate-800 text-sm -mt-1.5">{stats.startingFrom}</span>
                </div>
              </motion.div>
            )}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-wrap items-center gap-3 mb-6"
            >
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm px-6 py-3.5 rounded-full shadow-lg shadow-blue-600/25 transition-colors"
              >
                Enquire About {name} <ArrowIcon className="w-4 h-4" />
              </Link>
              <span className="inline-flex items-center gap-2 text-slate-500 text-sm">
                <HomeIcon className="w-4 h-4 text-blue-600" /> Crafted by Local Travel Experts
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-2"
            >
              <div className="flex items-center gap-1 text-amber-500">
                <StarIcon className="w-3.5 h-3.5" />
                <span className="text-slate-800 font-semibold text-sm">{trustStats.rating}</span>
              </div>
              <span className="text-slate-500 text-xs">
                {trustStats.reviews} · {trustStats.topDestinations} Top Destinations · {trustStats.happyTravelers} Happy Travelers
              </span>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative h-64 sm:h-80 lg:h-[520px] rounded-3xl overflow-hidden shadow-xl"
          >
            {heroImage ? (
              <img src={heroImage} alt={name} className="absolute inset-0 w-full h-full object-cover object-top" />
            ) : (
              <img
                src={`https://picsum.photos/seed/${seed}/1600/900`}
                alt={name}
                className="absolute inset-0 w-full h-full object-cover"
              />
            )}
          </motion.div>
        </div>
      </section>

      {storyTitle && storyQuote && highlightImages && highlightImages.length >= 2 && (
        <section className="bg-white py-16 sm:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">
            <div className="rounded-3xl border border-blue-100/60 bg-white/60 shadow-sm px-6 sm:px-10 py-10 sm:py-14 grid md:grid-cols-2 gap-10 md:gap-14 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                <h2 className="font-display text-3xl sm:text-4xl font-semibold text-slate-900 mb-5">{storyTitle}</h2>
                <p className="text-slate-500 italic leading-relaxed text-base sm:text-lg">&ldquo;{storyQuote}&rdquo;</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="grid grid-cols-2 gap-3 sm:gap-4"
              >
                {highlightImages.slice(0, 2).map((img, i) => (
                  <div key={i} className="relative rounded-2xl overflow-hidden shadow-lg aspect-[3/4]">
                    <img
                      src={img.src}
                      alt={`${name} highlight ${i + 1}`}
                      className="w-full h-full object-cover"
                      style={{ objectPosition: img.position }}
                    />
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>
      )}

      {attractions && attractions.length >= 3 && (
        <section className="bg-white py-16 sm:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="text-center mb-10 sm:mb-14"
            >
              <p className="text-amber-600 font-semibold text-xs sm:text-sm tracking-[0.25em] uppercase mb-2">Iconic Landmarks</p>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold text-slate-900">Top Attractions</h2>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              {attractions.slice(0, 2).map((spot, i) => (
                <motion.div
                  key={spot.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -6 }}
                  className="group relative rounded-2xl overflow-hidden shadow-lg aspect-4/3"
                >
                  <img src={spot.image} alt={spot.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" style={{ objectPosition: spot.position }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5">
                    <h3 className="text-white font-display text-xl sm:text-2xl font-semibold mb-1">{spot.title}</h3>
                    <p className="text-white/80 text-sm leading-snug max-w-sm">{spot.description}</p>
                  </div>
                </motion.div>
              ))}

              {attractions[2] && (
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -6 }}
                  className="group relative rounded-2xl overflow-hidden shadow-lg aspect-21/9 sm:col-span-2"
                >
                  <img
                    src={attractions[2].image}
                    alt={attractions[2].title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    style={{ objectPosition: attractions[2].position }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
                  <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
                    <div>
                      <h3 className="text-white font-display text-xl sm:text-2xl font-semibold mb-1">{attractions[2].title}</h3>
                      <p className="text-white/80 text-sm leading-snug max-w-lg">{attractions[2].description}</p>
                    </div>
                    {attractions[2].cta && (
                      <Link
                        to="/contact"
                        className="hidden sm:inline-flex items-center whitespace-nowrap bg-white text-slate-900 text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-slate-100 transition-colors"
                      >
                        {attractions[2].cta}
                      </Link>
                    )}
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </section>
      )}

      {experiences && experiences.length > 0 && (
        <section className="bg-white py-16 sm:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-3xl sm:text-4xl font-semibold text-slate-900 mb-10 sm:mb-14"
            >
              Curated Experiences
            </motion.h2>

            <div className="flex flex-col gap-5 sm:gap-6">
              {experiences.map((exp, i) => (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -6 }}
                  className={`group bg-white rounded-2xl shadow-sm hover:shadow-xl border border-slate-100 hover:border-blue-100 overflow-hidden flex flex-col sm:flex-row sm:h-72 transition-shadow duration-300 ${i % 2 === 1 ? 'sm:flex-row-reverse' : ''}`}
                >
                  <div className="sm:w-2/5 h-48 sm:h-full shrink-0 overflow-hidden">
                    <img
                      src={exp.image}
                      alt={exp.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      style={{ objectPosition: exp.position }}
                    />
                  </div>
                  <div className="sm:w-3/5 p-6 sm:p-8 flex flex-col justify-center gap-2 overflow-hidden">
                    <p className="flex items-center gap-1.5 text-amber-600 font-semibold text-xs tracking-[0.15em] uppercase">
                      <TagIcon className="w-3.5 h-3.5" /> {exp.category}
                    </p>
                    <h3 className="font-display text-xl sm:text-2xl font-semibold text-slate-900">{exp.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed line-clamp-3">{exp.description}</p>
                    <div className="flex items-center justify-between mt-2">
                      <p className="font-semibold text-slate-800 text-sm">{exp.price}</p>
                      <Link
                        to="/contact"
                        className="inline-flex items-center gap-1 text-blue-700 font-semibold text-sm hover:text-blue-900 transition-colors"
                      >
                        View Details <ArrowIcon className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}

export default DestinationDetail
