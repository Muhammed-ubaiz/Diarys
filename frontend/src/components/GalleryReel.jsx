import lakshadweep from '../assets/images/gallery/lakshadweep-serene-beauty.jpg'
import hillStations from '../assets/images/gallery/Bliss in the Hill Stations.jpg'
import halongBay from '../assets/images/gallery/Cruising the Emerald Waters of Halong Bay.jpg'
import phangNgaBay from '../assets/images/gallery/Phang Nga Bay.jpg'
import phuket from '../assets/images/gallery/Phuket Beaches, Thailand Travel Inspiration.jpg'
import tbilisiBridge from '../assets/images/gallery/Bridge of Peace in Tbilisi, Georgia.jpg'
import vietnamChristmas from '../assets/images/gallery/vietnam-christmas-tour.jpg'
import tbilisiStreet from '../assets/images/gallery/tbilisi-georgia.jpg'

const reelImages = [
  { src: lakshadweep, alt: 'Serene backwaters of Lakshadweep' },
  { src: hillStations, alt: 'Misty tea plantations in the hill stations' },
  { src: halongBay, alt: 'Emerald waters of Halong Bay, Vietnam' },
  { src: phangNgaBay, alt: 'Limestone cliffs of Phang Nga Bay, Thailand' },
  { src: phuket, alt: 'Golden sands of Phuket, Thailand' },
  { src: tbilisiBridge, alt: 'Bridge of Peace, Tbilisi, Georgia' },
  { src: vietnamChristmas, alt: 'Festive streets of Vietnam' },
  { src: tbilisiStreet, alt: 'Historic streets of Tbilisi, Georgia' },
]

// Track is the image list duplicated once — at -50% translateX the duplicate
// set lines up exactly where the original started, so the loop has no seam.
const track = [...reelImages, ...reelImages]

function GalleryReel() {
  return (
    <section className="relative bg-blue-700 py-16 sm:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 text-center mb-10 sm:mb-12">
        <span className="inline-flex items-center gap-2 text-xs font-extrabold text-blue-200 tracking-widest uppercase mb-2">
          <span className="w-2 h-2 bg-blue-300 rotate-45 inline-block shrink-0" />
          Travel Diary
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">Moments From the Road</h2>
      </div>

      <div className="relative">
        {/* edge fade so the reel dissolves into the dark background instead of a hard cutoff */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-32 z-10 bg-gradient-to-r from-blue-700 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-32 z-10 bg-gradient-to-l from-blue-700 to-transparent" />

        <div className="flex w-max animate-marquee hover:[animation-play-state:paused] gap-5 sm:gap-6 px-3">
          {track.map((img, i) => (
            <div
              key={`${img.alt}-${i}`}
              className="relative w-56 sm:w-72 aspect-[4/5] shrink-0 rounded-2xl overflow-hidden border border-white/10 shadow-lg shadow-black/40"
            >
              <img src={img.src} alt={img.alt} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default GalleryReel
