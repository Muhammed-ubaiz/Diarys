import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import logo from '../assets/images/logo/logo-blue.png';

const HERO_OVERLAY_PATHS = ['/', '/about', '/contact', '/flight-ticketing', '/visa-assistance', '/blogs', '/international-tour-package'];

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [prevPathname, setPrevPathname] = useState(null);
  const location = useLocation();
  const isHeroPage = HERO_OVERLAY_PATHS.includes(location.pathname) || location.pathname.startsWith('/destinations/');
  const isTransparent = isHeroPage && !scrolled && !mobileOpen;

  if (location.pathname !== prevPathname) {
    setPrevPathname(location.pathname);
    setScrolled(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  useEffect(() => {
    if (!mobileOpen) return
    const onKey = (e) => { if (e.key === 'Escape') setMobileOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [mobileOpen])

  const menuItems = [
    { label: 'Home', to: '/' },
    { label: 'About Us', to: '/about' },
    { label: 'Tour Packages', to: '/international-tour-package' },
    { label: 'Visa Assistance', to: '/visa-assistance' },
    { label: 'Flights', to: '/flight-ticketing' },
    { label: 'Blog', to: '/blogs' },
    { label: 'Contact Us', to: '/contact' },
  ];

  return (
    <>
      <header
        className={`${isHeroPage ? 'fixed' : 'sticky'} top-0 z-50 w-full transition-all duration-300 ${
          isTransparent
            ? 'bg-transparent shadow-none'
            : `bg-white/80 backdrop-blur-md ${scrolled ? 'shadow-lg shadow-blue-950/10' : 'shadow-sm'}`
        }`}
      >
        <div
          className={`w-full px-4 sm:px-6 lg:px-10 flex items-center justify-between gap-3 sm:gap-6 transition-all duration-300 ${
            scrolled ? 'h-14 sm:h-16' : 'h-16 sm:h-20 lg:h-[84px]'
          }`}
        >

          {/* LOGO SECTION */}
          <Link to="/" className="flex items-center justify-center cursor-pointer shrink-0">
            <img
              src={logo}
              alt="Diary's — Domestic & International Tours"
              className={`w-auto transition-all duration-300 ${scrolled ? 'h-10 sm:h-11' : 'h-12 sm:h-14'}`}
              style={{ filter: isTransparent ? 'brightness(0) invert(1)' : 'none' }}
            />
          </Link>

          {/* NAVIGATION LINKS */}
          <nav className="hidden xl:flex items-center gap-1 min-w-0">
            {menuItems.map((item) => {
              const isCurrent = location.pathname === item.to;
              return (
                <Link
                  key={item.label}
                  to={item.to}
                  className={`group relative whitespace-nowrap px-3 py-2 text-[14px] font-semibold tracking-wide transition-colors duration-300 ease-in-out ${
                    isTransparent
                      ? isCurrent
                        ? 'text-white'
                        : 'text-white/85 hover:text-white'
                      : isCurrent
                        ? 'text-blue-700'
                        : 'text-slate-600 hover:text-blue-600'
                  }`}
                >
                  {item.label}
                  {/* Underline: grows in from the left on hover, always on for the active link */}
                  <span
                    className={`absolute left-3 right-3 -bottom-0.5 h-0.5 rounded-full origin-left transition-transform duration-300 ease-out ${
                      isTransparent ? 'bg-white' : 'bg-gradient-to-r from-blue-600 to-blue-800'
                    } ${isCurrent ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* MOBILE MENU TOGGLE */}
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            className="xl:hidden relative w-9 h-9 flex flex-col items-center justify-center gap-1.5 cursor-pointer shrink-0"
          >
            <span
              className={`block h-0.5 w-6 rounded-full transition-all duration-300 ${isTransparent ? 'bg-white' : 'bg-blue-700'} ${
                mobileOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`block h-0.5 w-6 rounded-full transition-all duration-300 ${isTransparent ? 'bg-white' : 'bg-blue-700'} ${
                mobileOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`block h-0.5 w-6 rounded-full transition-all duration-300 ${isTransparent ? 'bg-white' : 'bg-blue-700'} ${
                mobileOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>

        </div>
      </header>

      {/* MOBILE DRAWER OVERLAY */}
      <div
        onClick={() => setMobileOpen(false)}
        aria-hidden="true"
        className={`xl:hidden fixed inset-0 z-[55] bg-blue-950/40 backdrop-blur-[1px] transition-opacity duration-300 ${
          mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* MOBILE DRAWER PANEL */}
      <div
        className={`xl:hidden fixed top-0 right-0 bottom-0 z-[60] w-[84vw] max-w-[340px] bg-white shadow-2xl shadow-blue-950/25 flex flex-col p-6 sm:p-7 transition-transform duration-300 ease-out ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between mb-8">
          <img src={logo} alt="Diary's" className="h-10 w-auto" />
          <button
            type="button"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
            className="w-9 h-9 rounded-lg bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500 transition-colors"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
              <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>

        <nav className="flex flex-col overflow-y-auto">
          {menuItems.map((item) => {
            const isCurrent = location.pathname === item.to;
            return (
              <Link
                key={item.label}
                to={item.to}
                onClick={() => setMobileOpen(false)}
                className={`py-3.5 border-b border-slate-100 text-[15px] font-semibold tracking-wide transition-colors duration-200 ${
                  isCurrent ? 'text-blue-700' : 'text-slate-700 hover:text-blue-600'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <motion.a
          href="tel:+918891245778"
          whileTap={{ scale: 0.97 }}
          onClick={() => setMobileOpen(false)}
          className="mt-6 relative flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold text-sm px-6 py-3.5 rounded-full overflow-hidden shadow-lg shadow-blue-950/20"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/70 opacity-75"></span>
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-white"></span>
          </span>
          <span className="relative">Call Us</span>
        </motion.a>
      </div>
    </>
  );
}

export default Navbar;
