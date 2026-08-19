import React from 'react'
import { motion } from 'framer-motion'
import georgiaKakheti from '../assets/images/gallery/10 amazing things to do in Georgia.jpg'
import bridgeOfPeace from '../assets/images/gallery/Bridge of Peace in Tbilisi, Georgia.jpg'
import kazbegiLakes from '../assets/images/gallery/Tobavarchkhili lakes _ Georgia_ Caucasus_ Explore it.jpg'
import tbilisiDusk from '../assets/images/gallery/The Best Tbilisi Itinerary Highlights in 2 Days.jpg'
import lakshadweepBeauty from '../assets/images/gallery/lakshadweep-serene-beauty.jpg'
import santoriniCrop from '../assets/images/hero/santorini-crop.png'
import blogsHero from '../assets/images/hero/ChatGPT Image Aug 19, 2026, 01_00_55 PM.png'
import mountainLake from '../assets/images/hero/Gemini_Generated_Image_sghulgsghulgsghu.png'

const ArrowIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="w-4 h-4" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m0 0l-6-6m6 6l-6 6" />
  </svg>
)

const ClockIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
    <circle cx="12" cy="12" r="9" />
    <path strokeLinecap="round" d="M12 7v5l3 3" />
  </svg>
)

const BookIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 4.5A1.5 1.5 0 015.5 3H12v18H5.5A1.5 1.5 0 014 19.5v-15zM20 4.5A1.5 1.5 0 0018.5 3H12v18h6.5a1.5 1.5 0 001.5-1.5v-15z" />
  </svg>
)

const MailIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 7l9 6 9-6" />
  </svg>
)

const featuredPost = {
  category: "Editor's Pick",
  title: 'Why Georgia Should Be Your Next Adventure',
  excerpt: 'From the fortress churches of Kazbegi to the sulfur baths of Tbilisi\'s old town, this small Caucasus nation packs a decade\'s worth of stories into a single trip. Here\'s why it deserves the top of your list.',
  date: 'July 18, 2026',
  readTime: '6 min read',
  image: mountainLake,
  position: 'center 50%',
}

const posts = [
  {
    category: 'Guides',
    title: '48 Hours in Tbilisi: The Ultimate Old Town Itinerary',
    excerpt: 'Cobblestone lanes, sulfur bathhouses, and rooftop views — how to see the best of Tbilisi in a single weekend.',
    date: 'July 10, 2026',
    readTime: '5 min read',
    image: bridgeOfPeace,
    position: 'center 55%',
  },
  {
    category: 'Adventure',
    title: 'Kazbegi Diaries: Chasing Clouds Above the Caucasus',
    excerpt: 'A trek to the Gergeti Trinity Church and beyond, into the alpine lakes that hide behind Mount Kazbek.',
    date: 'June 28, 2026',
    readTime: '7 min read',
    image: kazbegiLakes,
    position: 'center 40%',
  },
  {
    category: 'Culture',
    title: "The Wines of Kakheti: Georgia's Ancient Vineyards",
    excerpt: 'Eight thousand years of winemaking, one clay qvevri at a time — inside the region that started it all.',
    date: 'June 15, 2026',
    readTime: '4 min read',
    image: georgiaKakheti,
    position: 'center 55%',
  },
  {
    category: 'Tips',
    title: "Lakshadweep on a Budget: A First-Timer's Guide",
    excerpt: 'Permits, ferries, and the best time to visit — everything you need to plan an affordable island escape.',
    date: 'May 30, 2026',
    readTime: '5 min read',
    image: lakshadweepBeauty,
    position: 'center 60%',
  },
  {
    category: 'Guides',
    title: "Sunset Chasing in Santorini: Oia's Best-Kept Secrets",
    excerpt: 'Skip the crowds at the castle ruins — here are the quiet corners locals use for the same view.',
    date: 'May 12, 2026',
    readTime: '6 min read',
    image: santoriniCrop,
    position: 'center 45%',
  },
  {
    category: 'Culture',
    title: "Tbilisi After Dark: A Guide to the City's Golden Hour",
    excerpt: 'When the old town lights up and the Kura river turns gold — where to be at sunset in Tbilisi.',
    date: 'April 22, 2026',
    readTime: '4 min read',
    image: tbilisiDusk,
    position: 'center 45%',
  },
]

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
}

function Blogs() {
  return (
    <div>
      {/* Hero */}
      <section className="relative w-full overflow-hidden h-screen flex items-center">
        <motion.img
          src={blogsHero}
          alt="Travel journal — stories, guides, and photography from the road"
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

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-xl"
          >
            <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/20 text-white text-xs font-bold tracking-[0.15em] uppercase px-4 py-2 rounded-full mb-6">
              <BookIcon className="w-4 h-4" />
              The Journal
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-extrabold leading-tight mb-5">
              <span className="block text-white">Stories from</span>
              <span className="block text-white">the <span className="text-blue-300">Road</span></span>
            </h1>
            <p className="text-white/80 text-base sm:text-lg leading-relaxed mb-8 max-w-md">
              Travel guides, cultural deep-dives, and honest advice from the destinations we know best.
            </p>

            <div className="flex flex-wrap gap-2.5 mb-8">
              {['Guides', 'Adventure', 'Culture', 'Tips'].map((cat) => (
                <a
                  key={cat}
                  href="#latest-articles"
                  className="px-4 py-2 rounded-full text-sm font-semibold bg-white/10 backdrop-blur text-white border border-white/20 hover:border-white/40 hover:bg-white/15 transition-colors"
                >
                  {cat}
                </a>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#latest-articles"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm px-6 py-3.5 rounded-full shadow-lg shadow-blue-950/25 transition-colors"
              >
                Read Latest Stories <ArrowIcon className="w-4 h-4" />
              </a>
              <a
                href="#newsletter"
                className="inline-flex items-center gap-2 border border-white/30 hover:border-white/60 text-white font-bold text-sm px-6 py-3.5 rounded-full transition-colors"
              >
                <MailIcon className="w-4 h-4" /> Subscribe
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured post */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">
          <motion.a
            href="#latest-articles"
            {...fadeUp}
            whileHover={{ y: -6 }}
            className="group relative block h-[420px] sm:h-[480px] lg:h-[560px] rounded-3xl overflow-hidden shadow-xl"
          >
            <img
              src={featuredPost.image}
              alt={featuredPost.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              style={{ objectPosition: featuredPost.position }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-950/95 via-blue-950/40 to-transparent" />

            <div className="relative h-full flex flex-col justify-end p-6 sm:p-10 lg:p-14 max-w-2xl">
              <span className="self-start bg-white/15 backdrop-blur border border-white/20 text-white text-xs font-semibold tracking-wide uppercase px-3 py-1 rounded-full mb-4">
                {featuredPost.category}
              </span>
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold text-white leading-snug mb-4">
                {featuredPost.title}
              </h2>
              <p className="text-white/80 text-sm sm:text-base leading-relaxed mb-5 max-w-xl">{featuredPost.excerpt}</p>
              <div className="flex items-center gap-4 text-white/60 text-xs font-medium mb-5">
                <span>{featuredPost.date}</span>
                <span className="flex items-center gap-1.5"><ClockIcon className="w-3.5 h-3.5" /> {featuredPost.readTime}</span>
              </div>
              <span className="inline-flex items-center gap-1.5 text-white font-semibold text-sm w-fit border-b border-white/40 group-hover:border-white transition-colors pb-0.5">
                Read Article <ArrowIcon className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </motion.a>
        </div>
      </section>

      {/* Latest articles grid */}
      <section id="latest-articles" className="bg-white py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">
          <motion.h2 {...fadeUp} className="font-display text-3xl sm:text-4xl font-semibold text-slate-900 mb-10 sm:mb-14">
            Latest Articles
          </motion.h2>

          <div className="flex flex-col divide-y divide-slate-100">
            {posts.map((post, i) => (
              <motion.a
                key={post.title}
                href="#latest-articles"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                className="group flex flex-col sm:flex-row items-start gap-5 sm:gap-8 py-8 first:pt-0 last:pb-0"
              >
                <div className="relative w-full sm:w-60 h-44 sm:h-36 shrink-0 rounded-2xl overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    style={{ objectPosition: post.position }}
                  />
                </div>
                <div className="flex flex-col justify-center gap-2 flex-1 min-w-0">
                  <span className="text-blue-600 text-[11px] font-bold tracking-[0.15em] uppercase">{post.category}</span>
                  <h3 className="font-display text-lg sm:text-xl font-semibold text-slate-900 leading-snug group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center gap-4 text-xs text-slate-400 font-medium mt-1">
                    <span>{post.date}</span>
                    <span className="flex items-center gap-1.5"><ClockIcon className="w-3.5 h-3.5" /> {post.readTime}</span>
                    <span className="ml-auto hidden sm:inline-flex items-center gap-1.5 text-blue-600 font-semibold text-sm">
                      Read <ArrowIcon className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section id="newsletter" className="bg-white pb-16 sm:pb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-3xl bg-white border border-slate-100 shadow-sm text-center px-6 sm:px-16 py-14 sm:py-16"
          >
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-slate-900 mb-3">Never Miss a Story</h2>
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed max-w-xl mx-auto mb-8">
              Get new travel guides and destination deep-dives delivered to your inbox, roughly once a month.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="you@example.com"
                className="flex-1 bg-white border border-slate-200 rounded-full px-5 py-3 text-slate-800 placeholder:text-slate-400 text-sm focus:outline-none focus:border-blue-500"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm px-6 py-3 rounded-full transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Blogs
