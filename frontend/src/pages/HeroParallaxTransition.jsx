import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import heroCliff from '../assets/images/hero/gpt-image-2_Ultra-wide_cinematic_photograph_of_a_lone_traveler_standing_on_a_dramatic_mounta-0.jpg'

const MotionLink = motion(Link)

function HeroParallaxTransition() {
  const { scrollY } = useScroll()

  // Background image slowly zooms in as the page scrolls past the hero.
  const scale = useTransform(scrollY, [0, 500], [1, 1.15])
  // ...and fades toward the section beneath it.
  const opacity = useTransform(scrollY, [0, 400], [1, 0.3])
  // Text drifts upward slower than the scroll for a light parallax lift.
  const textY = useTransform(scrollY, [0, 500], [0, 100])

  return (
    <div className="relative h-screen w-full overflow-hidden bg-slate-900">
      {/* Background Image with Zoom/Fade Animation */}
      <motion.div style={{ scale, opacity }} className="absolute inset-0 w-full h-full">
        <img
          src={heroCliff}
          alt="Traveler standing on a mountain cliff"
          className="w-full h-full object-cover object-[50%_75%]"
        />
        {/* Dark overlay for contrast */}
        <div className="absolute inset-0 bg-black/30" />
      </motion.div>

      {/* Hero Content (Parallax Effect) */}
      <motion.div
        style={{ y: textY }}
        className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4"
      >
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-4xl md:text-6xl font-extrabold text-white tracking-wide uppercase drop-shadow-lg"
        >
          Explore The World
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="mt-4 text-lg md:text-xl text-slate-200 font-light max-w-xl"
        >
          Crafting memories, one journey at a time.
        </motion.p>

        <MotionLink
          to="/international-tour-package"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full shadow-lg transition-all border border-blue-400/30"
        >
          Book Now
        </MotionLink>
      </motion.div>

      {/* Bottom Wave / Curved Transition Effect */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20">
        <svg
          className="relative block w-full h-[60px] md:h-[100px]"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.92,130.83,121.3,200,110Z"
            fill="#FBF6EC"
          />
        </svg>
      </div>
    </div>
  )
}

export default HeroParallaxTransition
