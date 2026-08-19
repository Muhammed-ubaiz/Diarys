import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/images/logo/logo-blue.png'

const InstagramIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
  </svg>
)

const MailIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 7l9 6 9-6" />
  </svg>
)

const PhoneIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 5c0 8 7 15 15 15l3-4-5-3-2 2c-2-1-4-3-5-5l2-2-3-5z" />
  </svg>
)

function Footer() {
  return (
    <footer className="bg-blue-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pt-14 sm:pt-16 pb-24 sm:pb-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] gap-10 lg:gap-8 pb-12">
          {/* brand */}
          <div>
            <img src={logo} alt="Diary's — Domestic & International Tours" className="h-14 w-auto" style={{ filter: 'brightness(0) invert(1)' }} />
            <p className="mt-3 text-white/75 text-sm leading-relaxed max-w-xs">
              Curating unforgettable journeys for the modern traveler seeking heritage, nature, and heart.
            </p>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="mt-5 inline-flex w-9 h-9 rounded-full border border-white/30 items-center justify-center text-white/80 hover:bg-white hover:text-blue-700 transition-colors"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>
          </div>

          {/* explore */}
          <div>
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-white/60 mb-4">Explore</p>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li><Link to="/" className="text-white/80 hover:text-white transition-colors">Destinations</Link></li>
              <li><Link to="/about" className="text-white/80 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/international-tour-package" className="text-white/80 hover:text-white transition-colors">Tour Packages</Link></li>
              <li><Link to="/blogs" className="text-white/80 hover:text-white transition-colors">The Journal</Link></li>
            </ul>
          </div>

          {/* support */}
          <div>
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-white/60 mb-4">Support</p>
            <ul className="flex flex-col gap-2.5 text-sm">
              <li><Link to="/contact" className="text-white/80 hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link to="/visa-assistance" className="text-white/80 hover:text-white transition-colors">Visa Assistance</Link></li>
              <li><Link to="/flight-ticketing" className="text-white/80 hover:text-white transition-colors">Flight Ticketing</Link></li>
            </ul>
          </div>

          {/* contact */}
          <div>
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-white/60 mb-4">Contact</p>
            <ul className="flex flex-col gap-3 text-sm">
              <li className="flex items-center gap-2 text-white/85">
                <MailIcon className="w-4 h-4 shrink-0" />
                <a href="mailto:info@diarystourism.com" className="hover:text-white transition-colors">info@diarystourism.com</a>
              </li>
              <li className="flex items-center gap-2 text-white/85">
                <PhoneIcon className="w-4 h-4 shrink-0" />
                <a href="tel:+918891245778" className="hover:text-white transition-colors">+91 8891245778</a>
              </li>
              <li className="flex items-center gap-2 text-white/85">
                <PhoneIcon className="w-4 h-4 shrink-0" />
                <a href="tel:+918899454974" className="hover:text-white transition-colors">+91 8899454974</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/15 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] tracking-widest uppercase text-white/55">
          <p>© 2026 Diary's Tourism. Excellence Refined.</p>
          <div className="flex items-center gap-6">
            <span>4.9★ Rated by Travelers</span>
            <span>500+ Happy Travelers</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
