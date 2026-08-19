import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import valleyBg from '../assets/images/hero/download.png'

const RouteIcon = ({ className = '', ...props }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={`w-6 h-6 ${className}`} {...props}>
    <circle cx="5" cy="6" r="2.2" />
    <circle cx="19" cy="18" r="2.2" />
    <path strokeLinecap="round" d="M6.8 7.6C9 10 8 13 11 14.5s6 .5 7 3" />
  </svg>
)

const ShieldCheckIcon = ({ className = '', ...props }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={`w-6 h-6 ${className}`} {...props}>
    <path strokeLinejoin="round" d="M12 3l7 3v5c0 4.6-3 8.4-7 10-4-1.6-7-5.4-7-10V6l7-3z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
  </svg>
)

const HeadsetIcon = ({ className = '', ...props }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={`w-6 h-6 ${className}`} {...props}>
    <path strokeLinecap="round" d="M4 13v-1a8 8 0 0116 0v1" />
    <rect x="2.5" y="13" width="4" height="6" rx="1.5" />
    <rect x="17.5" y="13" width="4" height="6" rx="1.5" />
    <path strokeLinecap="round" d="M19.5 19v.5a3 3 0 01-3 3H13" />
  </svg>
)

const highlights = [
  {
    icon: RouteIcon,
    title: 'Curated Routes',
    text: 'Hand-picked trails and itineraries built around the best light and the fewest crowds.',
  },
  {
    icon: ShieldCheckIcon,
    title: 'Verified Guides',
    text: 'Local experts vetted for safety, knowledge, and genuine hospitality.',
  },
  {
    icon: HeadsetIcon,
    title: '24/7 Assistance',
    text: 'Round-the-clock support so help is always a message away, wherever you roam.',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
}

function ParallaxSection() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['-18%', '18%'])

  return (
    <section
      ref={sectionRef}
      className="relative flex items-center overflow-hidden pt-12 sm:pt-16 pb-10 sm:pb-14 bg-[#0c1829]"
    >
      <motion.div
        style={{ y, backgroundImage: `url(${valleyBg})` }}
        className="absolute inset-x-0 -top-[20%] -bottom-[20%] bg-cover bg-center bg-no-repeat"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-[#1d4ed8]/20 via-transparent to-transparent" />
      {/* Light darkening toward the bottom only — needed so the highlight cards stay readable and so
          this section still blends into the dark Featured Destinations section right below it. */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0c1829]/70" />
      {/* Flat insurance strip right at the bottom boundary — matches Featured Destinations' own top color. */}
      <div className="absolute inset-x-0 bottom-0 h-3 bg-[#0c1829]" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 w-full text-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center justify-center gap-3 mb-6"
        >
          <span className="w-8 h-px bg-blue-200/70" />
          <span className="text-blue-100 font-semibold text-xs sm:text-sm tracking-[0.25em] uppercase drop-shadow-md">
            Handpicked Travel Packages
          </span>
          <span className="w-8 h-px bg-blue-200/70" />
        </motion.div>

        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-3xl sm:text-5xl lg:text-6xl font-semibold text-white leading-[1.1] mb-6 drop-shadow-lg"
        >
          Uncover Nature's <span className="italic text-blue-200">Wonders</span>
        </motion.h2>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-white/90 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-14 drop-shadow-md"
        >
          Experience breathtaking canyon views and uncharted pathways crafted for the modern explorer.
        </motion.p>

        <div className="grid sm:grid-cols-3 gap-5 sm:gap-6 max-w-4xl mx-auto">
          {highlights.map(({ icon: Icon, title, text }, i) => (
            <motion.div
              key={title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
              className="backdrop-blur-md bg-white/20 border border-white/30 shadow-xl rounded-2xl p-6 sm:p-7 text-left"
            >
              <div className="w-11 h-11 rounded-xl bg-blue-500/20 border border-blue-200/40 flex items-center justify-center text-white mb-4">
                <Icon />
              </div>
              <h3 className="font-display text-lg font-semibold text-white mb-2 drop-shadow">{title}</h3>
              <p className="text-white/90 text-sm leading-relaxed drop-shadow-sm">{text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ParallaxSection
