import React, { useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import georgiaHero from '../assets/images/gallery/Georgia.jpg'
import georgiaTbilisi from '../assets/images/gallery/tbilisi-georgia.jpg'
import georgiaKazbegi from '../assets/images/gallery/Tobavarchkhili lakes _ Georgia_ Caucasus_ Explore it.jpg'
import georgiaKakheti from '../assets/images/gallery/10 amazing things to do in Georgia.jpg'

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

// Hand-drawn "sketched" frame overlay — scales with its parent, stroke stays crisp
const SketchFrame = ({ color = '#ffffff' }) => (
  <svg
    viewBox="0 0 100 100"
    preserveAspectRatio="none"
    className="absolute inset-0 w-full h-full pointer-events-none"
  >
    <path
      d="M4,5 C25,2 70,1 96,4 C99,30 98,65 96,96 C68,99 28,98 4,95 C1,68 2,32 4,5 Z"
      fill="none"
      stroke={color}
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      vectorEffect="non-scaling-stroke"
    />
    <path
      d="M6,7 C30,4 68,3.5 94,6 C96,32 95,63 93,94 C66,97 32,96 6,93 C4,66 5,33 6,7 Z"
      fill="none"
      stroke={color}
      strokeWidth="1.2"
      strokeOpacity="0.55"
      strokeLinecap="round"
      strokeLinejoin="round"
      vectorEffect="non-scaling-stroke"
    />
  </svg>
)

// site-wide trust badges shown on every destination's hero image
const trustStats = { rating: '4.9', reviews: '1,250+ Reviews', topDestinations: '12+', happyTravelers: '500+' }

export const destinationsData = {
  kazakhstan: {
    name: 'Kazakhstan',
    seed: 'kazakhstan',
    tagline: 'Steppes Meet Skylines',
    locationLabel: 'Almaty, Kazakhstan',
    blurb: 'Vast steppes, alpine lakes, and the modern skyline of Almaty make Kazakhstan one of Central Asia\'s most rewarding surprises.',
    highlights: ['The Almaty skyline', 'Alpine lakes of the Tian Shan', 'Endless golden steppe'],
    highlightImages: [
      { src: 'https://picsum.photos/seed/almaty-skyline/700/900', position: 'center 55%' },
      { src: 'https://picsum.photos/seed/tian-shan-lake/700/900', position: 'center 50%' },
      { src: 'https://picsum.photos/seed/kazakh-steppe/700/900', position: 'center 60%' },
    ],
    storyTitle: 'Steppes Without End',
    storyQuote: 'Kazakhstan stretches from the glass towers of Almaty to a horizon of golden steppe that seems to have no edge. In the Tian Shan foothills, turquoise alpine lakes sit beneath snow-capped peaks, while nomadic traditions still shape life on the plains — a country where Soviet modernism and ancient Silk Road culture sit side by side.',
    attractions: [
      {
        title: 'Almaty Skyline',
        description: 'A glass-and-steel city framed by the snow-capped Tian Shan, with cable cars climbing straight from downtown.',
        image: 'https://picsum.photos/seed/almaty-city/900/700',
        position: 'center 55%',
      },
      {
        title: 'Big Almaty Lake',
        description: 'A turquoise alpine lake at 2,500 meters, ringed by pine forest and glacier-fed peaks.',
        image: 'https://picsum.photos/seed/big-almaty-lake/900/700',
        position: 'center 50%',
      },
      {
        title: 'The Golden Steppe',
        description: 'Endless grassland horizons where nomadic yurts and horse herds still roam much as they did centuries ago.',
        image: 'https://picsum.photos/seed/kazakh-golden-steppe/900/700',
        position: 'center 60%',
        cta: 'Discover More',
      },
    ],
    experiences: [
      {
        category: 'Adventure',
        title: 'Shymbulak Cable Car & Trek',
        description: 'Ride from downtown Almaty into the Tian Shan foothills for alpine trails and panoramic peaks.',
        price: 'From ₹2,000 / person',
        image: 'https://picsum.photos/seed/shymbulak-cablecar/700/500',
        position: 'center 55%',
      },
      {
        category: 'Nature',
        title: 'Big Almaty Lake Day Trip',
        description: 'A scenic drive and short hike to one of Central Asia\'s most striking alpine lakes.',
        price: 'From ₹1,700 / person',
        image: 'https://picsum.photos/seed/almaty-lake-trip/700/500',
        position: 'center 50%',
      },
      {
        category: 'Culture',
        title: 'Nomadic Steppe Experience',
        description: 'Overnight in a traditional yurt camp with horseback riding and a home-cooked Kazakh feast.',
        price: 'From ₹2,800 / person',
        image: 'https://picsum.photos/seed/yurt-camp/700/500',
        position: 'center 55%',
      },
    ],
    stats: { bestTime: 'Apr – Oct', duration: '5 – 7 Days', groupSize: '2 – 20 People', startingFrom: '₹38,999' },
  },
  armenia: {
    name: 'Armenia',
    seed: 'armenia',
    tagline: 'Ancient Land, Timeless Soul',
    locationLabel: 'Yerevan, Armenia',
    blurb: 'Ancient monasteries, dramatic mountain scenery, and Yerevan\'s warm hospitality come together in this hidden Caucasus gem.',
    highlights: ['Monasteries carved into cliffs', 'Views of Mount Ararat', 'The streets of Yerevan'],
    highlightImages: [
      { src: 'https://picsum.photos/seed/tatev-monastery/700/900', position: 'center 55%' },
      { src: 'https://picsum.photos/seed/mount-ararat/700/900', position: 'center 50%' },
      { src: 'https://picsum.photos/seed/yerevan-streets/700/900', position: 'center 60%' },
    ],
    storyTitle: "The Soul of the Caucasus",
    storyQuote: 'Armenia is a land of stone and faith — cliffside monasteries that predate the printing press, the snow-capped silhouette of Mount Ararat watching over Yerevan, and a capital where pink tuff-stone buildings glow at sunset. It is one of the oldest Christian nations on earth, and every valley here still carries that weight of history.',
    attractions: [
      {
        title: 'Tatev Monastery',
        description: 'A 9th-century monastery reached by the world\'s longest reversible cable car, above the Vorotan gorge.',
        image: 'https://picsum.photos/seed/tatev-cablecar/900/700',
        position: 'center 55%',
      },
      {
        title: 'Mount Ararat Views',
        description: 'The biblical peak rises just across the border, framing Yerevan\'s skyline at golden hour.',
        image: 'https://picsum.photos/seed/ararat-view/900/700',
        position: 'center 50%',
      },
      {
        title: 'Yerevan\'s Pink City',
        description: 'Tuff-stone boulevards, the Cascade complex, and a café culture that comes alive after dark.',
        image: 'https://picsum.photos/seed/yerevan-cascade/900/700',
        position: 'center 60%',
        cta: 'Discover More',
      },
    ],
    experiences: [
      {
        category: 'Heritage Tour',
        title: 'Tatev Wings of Tatev Tour',
        description: 'Cross the Vorotan gorge by cable car to one of Armenia\'s most dramatic clifftop monasteries.',
        price: 'From ₹1,900 / person',
        image: 'https://picsum.photos/seed/wings-of-tatev/700/500',
        position: 'center 55%',
      },
      {
        category: 'Culture',
        title: 'Yerevan Old Town Walk',
        description: 'The Cascade, Republic Square, and Vernissage market with a local historian guide.',
        price: 'From ₹1,400 / person',
        image: 'https://picsum.photos/seed/yerevan-walk/700/500',
        position: 'center 55%',
      },
      {
        category: 'Nature',
        title: 'Lake Sevan & Ararat Viewpoint',
        description: 'A day trip to Armenia\'s largest lake with a stop at the best sunset viewpoint of Mount Ararat.',
        price: 'From ₹1,750 / person',
        image: 'https://picsum.photos/seed/lake-sevan/700/500',
        position: 'center 55%',
      },
    ],
    stats: { bestTime: 'May – Oct', duration: '5 – 7 Days', groupSize: '2 – 20 People', startingFrom: '₹36,000' },
  },
  'georgia-2': {
    name: 'Georgia',
    seed: 'georgia-2',
    heroImage: georgiaHero,
    tagline: 'Where History Meets Nature',
    locationLabel: 'Tbilisi, Georgia',
    blurb: 'From Tbilisi\'s old town to the peaks of Kazbegi, Georgia blends history, food, and wine country into one unforgettable trip.',
    highlights: ['Tbilisi\'s old town', 'The peaks of Kazbegi', 'Kakheti wine country'],
    highlightImages: [
      { src: georgiaTbilisi, position: 'center 65%' },
      { src: georgiaKazbegi, position: 'center 70%' },
      { src: georgiaKakheti, position: 'center 65%' },
    ],
    storyTitle: 'A Timeless Crossroads',
    storyQuote: 'Cradled between the Caucasus peaks and the Black Sea, Georgia is where eight thousand years of winemaking meet snow-capped mountain silence. From Tbilisi\'s sulfur-scented old town to the fortress churches of Kazbegi, every valley here still hums with the country\'s timeless hospitality.',
    attractions: [
      {
        title: 'Tbilisi Old Town',
        description: 'Cobblestone lanes, sulfur bathhouses, and vine-draped balconies above the Kura River.',
        image: georgiaTbilisi,
        position: 'center 60%',
      },
      {
        title: 'Kazbegi Peaks',
        description: 'Snow-capped summits and the cliffside Gergeti Trinity Church watching over the valley.',
        image: georgiaKazbegi,
        position: 'center 65%',
      },
      {
        title: 'Kakheti Wine Country',
        description: 'Taste eight thousand years of winemaking among vineyards and clay qvevri cellars.',
        image: georgiaKakheti,
        position: 'center 55%',
        cta: 'Discover More',
      },
    ],
    experiences: [
      {
        category: 'Heritage Tour',
        title: 'Kakheti Wine Tasting',
        description: 'Savor Georgia\'s eight-thousand-year winemaking heritage with a private tour through Kakheti\'s vineyards and traditional qvevri cellars.',
        price: 'From ₹2,500 / person',
        image: georgiaKakheti,
        position: 'center 55%',
      },
      {
        category: 'Adventure',
        title: 'Kazbegi Mountain Trek',
        description: 'Hike to the cliffside Gergeti Trinity Church with panoramic views of Mount Kazbek and the Caucasus range.',
        price: 'From ₹1,800 / person',
        image: georgiaKazbegi,
        position: 'center 65%',
      },
      {
        category: 'Culinary',
        title: 'Georgian Cooking Class',
        description: 'Learn to make khachapuri and khinkali in a Tbilisi home kitchen, with recipes passed down through generations.',
        price: 'From ₹1,200 / person',
        image: georgiaTbilisi,
        position: 'center 60%',
      },
    ],
    stats: { bestTime: 'Mar – Nov', duration: '6 – 8 Days', groupSize: '2 – 20 People', startingFrom: '₹45,999' },
  },
  'azerbaijan-2': {
    name: 'Azerbaijan',
    seed: 'azerbaijan-2',
    tagline: 'Where East Meets West',
    locationLabel: 'Baku, Azerbaijan',
    blurb: 'Where East meets West — Baku\'s futuristic skyline, Gobustan\'s rock art, and the rolling hills of Gabala await.',
    highlights: ['Baku\'s futuristic skyline', 'Ancient rock art at Gobustan', 'The hills of Gabala'],
    highlightImages: [
      { src: 'https://picsum.photos/seed/baku-old-city/700/900', position: 'center 55%' },
      { src: 'https://picsum.photos/seed/gobustan-rocks/700/900', position: 'center 60%' },
      { src: 'https://picsum.photos/seed/gabala-hills/700/900', position: 'center 55%' },
    ],
    storyTitle: 'A Bridge Between Two Worlds',
    storyQuote: 'Azerbaijan sits at the crossroads of the Silk Road, where Zoroastrian fire temples and Soviet-era courtyards give way to the glass-lit Flame Towers of modern Baku. Beyond the capital, mud volcanoes, rock carvings older than the pyramids, and the vineyard hills of Gabala tell a story that spans ten thousand years.',
    attractions: [
      {
        title: 'Baku Old City',
        description: 'Walled lanes, the Maiden Tower, and centuries-old caravanserais beside the glass Flame Towers.',
        image: 'https://picsum.photos/seed/baku-icherisheher/900/700',
        position: 'center 55%',
      },
      {
        title: 'Gobustan Rock Art',
        description: 'Six-thousand-year-old petroglyphs and bubbling mud volcanoes on the Caspian steppe.',
        image: 'https://picsum.photos/seed/gobustan-petroglyphs/900/700',
        position: 'center 60%',
      },
      {
        title: 'Gabala Highlands',
        description: 'Cable cars over pine forests, mountain rivers, and the Caucasus foothills at their greenest.',
        image: 'https://picsum.photos/seed/gabala-cablecar/900/700',
        position: 'center 55%',
        cta: 'Discover More',
      },
    ],
    experiences: [
      {
        category: 'Heritage Tour',
        title: 'Icherisheher Walking Tour',
        description: 'Wander Baku\'s UNESCO-listed old city with a historian guide, from the Maiden Tower to hidden teahouses.',
        price: 'From ₹2,200 / person',
        image: 'https://picsum.photos/seed/baku-maiden-tower/700/500',
        position: 'center 55%',
      },
      {
        category: 'Adventure',
        title: 'Gobustan & Mud Volcanoes Safari',
        description: 'A 4x4 journey to ancient rock carvings and the bubbling mud volcanoes south of Baku.',
        price: 'From ₹1,900 / person',
        image: 'https://picsum.photos/seed/gobustan-safari/700/500',
        position: 'center 55%',
      },
      {
        category: 'Nature',
        title: 'Gabala Cable Car & Tufandag',
        description: 'Ride above pine-covered slopes for panoramic views of the Caucasus foothills and mountain villages.',
        price: 'From ₹1,600 / person',
        image: 'https://picsum.photos/seed/tufandag-cablecar/700/500',
        position: 'center 55%',
      },
    ],
    stats: { bestTime: 'Apr – Oct', duration: '5 – 7 Days', groupSize: '2 – 20 People', startingFrom: '₹24,000' },
  },
  turkey: {
    name: 'Turkey',
    seed: 'turkey',
    tagline: 'Where Continents Collide',
    locationLabel: 'Istanbul, Turkey',
    blurb: 'Istanbul\'s bazaars, Cappadocia\'s balloons, and turquoise coastlines make Turkey a destination that has it all.',
    highlights: ['Istanbul\'s grand bazaars', 'Sunrise balloons over Cappadocia', 'The turquoise Aegean coast'],
    highlightImages: [
      { src: 'https://picsum.photos/seed/istanbul-bazaar/700/900', position: 'center 55%' },
      { src: 'https://picsum.photos/seed/cappadocia-balloons/700/900', position: 'center 50%' },
      { src: 'https://picsum.photos/seed/turkey-coast/700/900', position: 'center 60%' },
    ],
    storyTitle: 'Where Two Continents Meet',
    storyQuote: 'Istanbul straddles Europe and Asia across a single strait, its skyline stitched from minarets, Byzantine domes, and centuries of trade. Inland, Cappadocia\'s fairy chimneys rise from valleys carved by wind and time, while the Aegean coast unwinds into turquoise coves that have drawn travelers since antiquity.',
    attractions: [
      {
        title: 'Istanbul Grand Bazaar',
        description: 'Four thousand shops beneath vaulted ceilings, where Silk Road trade still echoes through every alley.',
        image: 'https://picsum.photos/seed/grand-bazaar/900/700',
        position: 'center 55%',
      },
      {
        title: 'Cappadocia Balloon Valleys',
        description: 'Sunrise hot-air balloon rides over fairy chimneys, cave churches, and rose-hued canyons.',
        image: 'https://picsum.photos/seed/cappadocia-valley/900/700',
        position: 'center 50%',
      },
      {
        title: 'Turquoise Aegean Coast',
        description: 'Ancient ruins, pine-covered cliffs, and hidden coves along Turkey\'s southwestern shoreline.',
        image: 'https://picsum.photos/seed/aegean-coastline/900/700',
        position: 'center 60%',
        cta: 'Discover More',
      },
    ],
    experiences: [
      {
        category: 'Heritage Tour',
        title: 'Old Istanbul Walking Tour',
        description: 'Hagia Sophia, the Blue Mosque, and Topkapi Palace with a historian guide through the old city.',
        price: 'From ₹2,400 / person',
        image: 'https://picsum.photos/seed/hagia-sophia/700/500',
        position: 'center 55%',
      },
      {
        category: 'Adventure',
        title: 'Cappadocia Sunrise Balloon Flight',
        description: 'Drift above the fairy chimneys at dawn for one of the most iconic views in the world.',
        price: 'From ₹12,500 / person',
        image: 'https://picsum.photos/seed/balloon-flight/700/500',
        position: 'center 50%',
      },
      {
        category: 'Coastal',
        title: 'Aegean Gulet Cruise',
        description: 'A traditional wooden yacht cruise along turquoise bays, with stops for swimming and grilled seafood.',
        price: 'From ₹5,200 / person',
        image: 'https://picsum.photos/seed/gulet-cruise/700/500',
        position: 'center 55%',
      },
    ],
    stats: { bestTime: 'Apr – Oct', duration: '6 – 9 Days', groupSize: '2 – 20 People', startingFrom: '₹42,000' },
  },
}

// one frame in the pinned crossfade gallery — fades in/out over its own slice of the scroll track
function ScrollGalleryFrame({ scrollYProgress, index, total, src, alt, caption, position = 'center' }) {
  const start = index / total
  const end = (index + 1) / total
  const fadeIn = start + (end - start) * 0.4
  const fadeOut = end - (end - start) * 0.4
  const opacity = useTransform(scrollYProgress, [start, fadeIn, fadeOut, end], [0, 1, 1, 0])

  return (
    <motion.div style={{ opacity }} className="absolute inset-0 flex flex-col lg:flex-row bg-neutral-50">
      {caption && (
        <div className="order-2 lg:order-1 w-full lg:w-2/5 flex items-center justify-center px-6 sm:px-12 py-8 lg:py-0">
          <p className="font-display text-slate-900 font-semibold text-2xl sm:text-4xl text-center lg:text-left">{caption}</p>
        </div>
      )}
      <div className="order-1 lg:order-2 w-full lg:w-3/5 flex-1 lg:flex-none p-4 sm:p-8 lg:p-12">
        <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-xl">
          <img src={src} alt={alt} className="w-full h-full object-cover" style={{ objectPosition: position }} />
          <SketchFrame />
        </div>
      </div>
    </motion.div>
  )
}

// full-bleed, pinned image track — scrolling through it crossfades from one image to the next
function ScrollGallery({ images }) {
  const wrapRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: wrapRef, offset: ['start start', 'end end'] })
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 90, damping: 26, mass: 0.5 })
  const total = images.length

  return (
    <div ref={wrapRef} className="relative w-full" style={{ height: `${total * 160}vh` }}>
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {images.map((img, i) => (
          <ScrollGalleryFrame key={img.caption} scrollYProgress={smoothProgress} index={i} total={total} {...img} />
        ))}
      </div>
    </div>
  )
}

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

  const { name, seed, tagline, locationLabel, blurb, highlights, highlightImages, heroImage, stats, storyTitle, storyQuote, attractions, experiences } = destination

  return (
    <div>
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-white pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-32 lg:pb-0 lg:min-h-[680px] lg:flex lg:items-center">
        <div
          aria-hidden="true"
          className="absolute inset-y-0 left-0 w-full sm:w-3/5 opacity-40"
          style={{ backgroundImage: 'radial-gradient(#93c5fd 1px, transparent 1px)', backgroundSize: '20px 20px' }}
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
