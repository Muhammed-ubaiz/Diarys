import canyon from '../assets/images/hero/lucid-origin_A_ultra-wide_cinematic_landscape_photograph_of_a_deep_mountain_canyon_at_sunrise-0.jpg'
import luxuryBg from '../assets/images/hero/lucid-origin_An_ultra-wide_background_image_for_a_luxury_travel_website_section._Wide_expanse-0.jpg'
import georgiaChurch from '../assets/images/hero/lucid-origin_A_cinematic_vertical_shot_of_an_ancient_mountain_church_in_Georgia_under_a_clear-0.jpg'
import travelerPeak from '../assets/images/hero/lucid-origin_Cinematic_hero_background_image_of_a_lone_traveler_standing_on_a_mountain_peak_d-0.jpg'
import swissChalet from '../assets/images/hero/lucid-origin_1._Switzerland_Alps_Vertical_travel_photograph_of_a_picturesque_wooden_chalet_in-0.jpg'
import snowboarder from '../assets/images/hero/Teenager_snowboards_down_steep_s__202608071241_frames/Teenager_snowboards_down_steep_s__202608071241_frames/frame_004.jpg'

const reelImages = [
  { src: canyon, alt: 'Deep mountain canyon at sunrise' },
  { src: snowboarder, alt: 'Snowboarding down an alpine slope' },
  { src: luxuryBg, alt: 'Wide expanse of a luxury travel escape' },
  { src: georgiaChurch, alt: 'Ancient mountain church in Georgia' },
  { src: travelerPeak, alt: 'Lone traveler on a mountain peak at dawn' },
  { src: swissChalet, alt: 'Picturesque wooden chalet in the Swiss Alps' },
]

// Track is the image list duplicated once — at -50% translateX the duplicate
// set lines up exactly where the original started, so the loop has no seam.
const track = [...reelImages, ...reelImages]

function HeroCarousel() {
  return (
    <div className="relative mt-8 sm:mt-10 max-w-4xl mx-auto rounded-2xl border border-white/15 bg-blue-950/70 backdrop-blur-md shadow-2xl shadow-black/40 p-3 sm:p-4 overflow-hidden">
      <p className="text-[10px] sm:text-[11px] font-bold tracking-[0.3em] uppercase text-blue-200 text-center mb-3">
        Trending Right Now
      </p>

      <div className="relative">
        {/* edge fade so the reel dissolves into the strip's own dark backdrop instead of a hard cutoff */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-10 sm:w-16 z-10 bg-gradient-to-r from-blue-950/85 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-10 sm:w-16 z-10 bg-gradient-to-l from-blue-950/85 to-transparent" />

        <div className="flex w-max animate-marquee hover:[animation-play-state:paused] gap-3 sm:gap-4">
          {track.map((img, i) => (
            <div
              key={`${img.alt}-${i}`}
              className="relative h-20 sm:h-28 aspect-video shrink-0 rounded-xl overflow-hidden border border-white/10 shadow-lg shadow-black/40"
            >
              <img src={img.src} alt={img.alt} className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default HeroCarousel
