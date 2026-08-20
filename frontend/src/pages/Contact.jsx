import { useState } from 'react'
import { motion } from 'framer-motion'
import contactHero from '../assets/images/hero/ChatGPT Image Aug 19, 2026, 12_34_30 PM.png'

const WHATSAPP_NUMBER = '918891245778'

const WhatsAppIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M17.5 14.4c-.3-.1-1.6-.8-1.8-.9-.2-.1-.4-.1-.6.1-.2.3-.7.9-.8 1-.2.2-.3.2-.5.1-.3-.1-1.2-.4-2.2-1.4-.8-.7-1.4-1.6-1.5-1.9-.2-.3 0-.4.1-.6l.4-.5c.1-.1.2-.3.2-.4.1-.2 0-.3 0-.4-.1-.1-.6-1.4-.8-1.9-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.4.1-.7.3-.2.3-.9.9-.9 2.1 0 1.2.9 2.4 1 2.6.1.2 1.8 2.8 4.4 3.8.6.3 1.1.4 1.5.6.6.2 1.2.2 1.6.1.5-.1 1.6-.6 1.8-1.3.2-.6.2-1.1.2-1.3-.1-.1-.3-.2-.5-.3z" />
    <path d="M12 2C6.5 2 2 6.5 2 12c0 1.9.5 3.6 1.5 5.2L2 22l4.9-1.5c1.5.8 3.2 1.3 5.1 1.3 5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18.3c-1.7 0-3.3-.5-4.6-1.3l-.3-.2-3.1.9.9-3-.2-.3C3.9 14.9 3.4 13.5 3.4 12c0-4.7 3.9-8.6 8.6-8.6s8.6 3.9 8.6 8.6-3.9 8.6-8.6 8.6z" />
  </svg>
)

const PhoneIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 5c0 8 7 15 15 15l3-4-5-3-2 2c-2-1-4-3-5-5l2-2-3-5z" />
  </svg>
)

const MailIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 7l9 6 9-6" />
  </svg>
)

const PinIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s-7-6.1-7-11.5A7 7 0 0112 2a7 7 0 017 7.5C19 14.9 12 21 12 21z" />
    <circle cx="12" cy="9.5" r="2.5" />
  </svg>
)

const ClockIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
    <circle cx="12" cy="12" r="9" />
    <path strokeLinecap="round" d="M12 7v5l3 3" />
  </svg>
)

const ArrowIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="w-4 h-4" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m0 0l-6-6m6 6l-6 6" />
  </svg>
)

const BadgeCheckIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 2l2.4 1.3 2.7-.2 1.1 2.5 2.5 1.1-.2 2.7L22 12l-1.3 2.4.2 2.7-2.5 1.1-1.1 2.5-2.7-.2L12 22l-2.4-1.3-2.7.2-1.1-2.5-2.5-1.1.2-2.7L2 12l1.3-2.4-.2-2.7 2.5-1.1 1.1-2.5 2.7.2z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.5 12.3l2.3 2.3 4.7-5" />
  </svg>
)

const StarIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2.5l2.9 6.2 6.6.7-4.9 4.6 1.3 6.6L12 17.6l-5.9 3 1.3-6.6-4.9-4.6 6.6-.7L12 2.5z" />
  </svg>
)

const InstagramIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
  </svg>
)

const FacebookIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M13.5 21v-7.5h2.5l.4-3H13.5V8.4c0-.9.2-1.5 1.6-1.5h1.4V4.3C16.2 4.2 15.2 4 14 4c-2.4 0-4 1.5-4 4.1v2.4H7.5v3H10V21h3.5z" />
  </svg>
)

const LinkedInIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M6.9 8.4H3.9V20h3V8.4zM5.4 4a1.7 1.7 0 100 3.4 1.7 1.7 0 000-3.4zM20.1 20h-3v-6.1c0-1.5-.5-2.5-1.9-2.5-1 0-1.6.7-1.9 1.4-.1.2-.1.6-.1.9V20h-3s.1-10.6 0-11.6h3v1.6c.4-.6 1.1-1.5 2.8-1.5 2 0 3.5 1.3 3.5 4.1V20z" />
  </svg>
)

const YouTubeIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M21.6 7.2s-.2-1.5-.8-2.1c-.8-.8-1.7-.8-2.1-.9C15.9 4 12 4 12 4s-3.9 0-6.7.2c-.4 0-1.3.1-2.1.9-.6.6-.8 2.1-.8 2.1S2.2 9 2.2 10.7v1.6c0 1.7.2 3.5.2 3.5s.2 1.5.8 2.1c.8.8 1.8.8 2.3.9 1.7.2 6.5.2 6.5.2s3.9 0 6.7-.2c.4 0 1.3-.1 2.1-.9.6-.6.8-2.1.8-2.1s.2-1.7.2-3.5v-1.6c0-1.7-.2-3.5-.2-3.5zM9.9 14.6V8.9l5.6 2.8-5.6 2.9z" />
  </svg>
)

const quickContacts = [
  {
    icon: PhoneIcon,
    title: 'Call Us',
    lines: [
      { text: '+91 8891245778', href: 'tel:+918891245778' },
      { text: '+91 8899454974', href: 'tel:+918899454974' },
    ],
  },
  {
    icon: MailIcon,
    title: 'Email Us',
    lines: [{ text: 'info@diarystourism.com', href: 'mailto:info@diarystourism.com' }],
  },
  {
    icon: PinIcon,
    title: 'Visit Us',
    lines: [{ text: 'Kochi, Kerala, India', href: 'https://maps.google.com/?q=Kochi,Kerala,India' }],
  },
]

const socialLinks = [
  { icon: InstagramIcon, label: 'Instagram', href: 'https://instagram.com' },
  { icon: FacebookIcon, label: 'Facebook', href: 'https://facebook.com' },
  { icon: LinkedInIcon, label: 'LinkedIn', href: 'https://linkedin.com' },
  { icon: YouTubeIcon, label: 'YouTube', href: 'https://youtube.com' },
]

const accreditations = [
  { icon: BadgeCheckIcon, label: 'IATA Certified' },
  { icon: BadgeCheckIcon, label: 'Verified Tour Operator' },
  { icon: StarIcon, label: '4.8★ on Google · 120+ Reviews' },
  { icon: StarIcon, label: '4.7★ on TripAdvisor · 95+ Reviews' },
]

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
}

function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    destination: '',
    travelDate: '',
    duration: '',
    adults: '2',
    children: '0',
    travelType: '',
    budget: '',
    message: '',
  })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const lines = [
      "Hi Diary's Tourism! I'd like to enquire about a trip.",
      '',
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      form.destination && `Destination: ${form.destination}`,
      form.travelDate && `Travel Date: ${form.travelDate}`,
      form.duration && `Duration: ${form.duration} day(s)`,
      (form.adults || form.children) && `Group Size: ${form.adults || 0} Adult(s), ${form.children || 0} Child(ren)`,
      form.travelType && `Travel Type: ${form.travelType}`,
      form.budget && `Budget Range: ${form.budget}`,
      form.message && `Message: ${form.message}`,
    ].filter(Boolean)

    const text = encodeURIComponent(lines.join('\n'))
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`
    const popup = window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
    if (!popup) {
      window.location.href = whatsappUrl
    }

    setSent(true)
    setForm({
      name: '',
      email: '',
      phone: '',
      destination: '',
      travelDate: '',
      duration: '',
      adults: '2',
      children: '0',
      travelType: '',
      budget: '',
      message: '',
    })
  }

  return (
    <div>
      {/* Hero */}
      <section className="relative w-full overflow-hidden bg-white min-h-screen flex items-center">
        <motion.img
          src={contactHero}
          alt="Let's Connect — we're here to help you plan your next adventure. Reach our travel team by phone, email, live chat, or in person"
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: 'center 32%' }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-950/55 to-blue-950/10 pointer-events-none"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-24 sm:h-28 bg-gradient-to-b from-blue-950/40 to-transparent pointer-events-none"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 w-full pt-24 sm:pt-28">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-xl"
          >
            <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/20 text-white text-xs font-bold tracking-[0.15em] uppercase px-4 py-2 rounded-full mb-6">
              <MailIcon className="w-4 h-4" />
              Contact Us
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-extrabold leading-tight mb-5">
              <span className="block text-white">Let's Connect &amp;</span>
              <span className="block text-white">Plan Your <span className="text-blue-300">Next Adventure</span></span>
            </h1>
            <p className="text-white/80 text-base sm:text-lg leading-relaxed mb-8 max-w-md">
              We're here to help every step of the way. Reach our travel team by phone, email, WhatsApp, or in
              person and let's start crafting your trip.
            </p>
            <a
              href="#contact-form"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm px-7 py-3.5 rounded-full shadow-lg shadow-blue-950/25 transition-colors duration-300"
            >
              Send a Message <WhatsAppIcon className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Floating quick-contact bar, overlapping the hero image bottom edge */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-20 -mt-10 sm:-mt-12 px-4 sm:px-6 max-w-6xl mx-auto"
      >
        <div className="bg-white rounded-3xl shadow-2xl shadow-blue-950/10 border border-blue-50 p-5 sm:p-6 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-[1fr_1fr_1fr_auto] gap-5 lg:gap-2 lg:divide-x lg:divide-blue-100 lg:items-center">
          {quickContacts.map((item) => (
            <a
              key={item.title}
              href={item.lines[0].href}
              target={item.lines[0].href.startsWith('http') ? '_blank' : undefined}
              rel={item.lines[0].href.startsWith('http') ? 'noreferrer' : undefined}
              className="flex items-center gap-3 text-left lg:px-5 first:lg:pl-0"
            >
              <span className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                <item.icon className="w-4 h-4" />
              </span>
              <span className="flex flex-col min-w-0">
                <span className="text-sm font-bold text-blue-950">{item.title}</span>
                <span className="text-slate-500 text-xs truncate">{item.lines[0].text}</span>
              </span>
            </a>
          ))}

          <a
            href="#contact-form"
            className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm px-6 py-3.5 rounded-full shadow-lg shadow-blue-950/20 transition-colors lg:ml-5"
          >
            Send a Message <WhatsAppIcon className="w-4 h-4" />
          </a>
        </div>
      </motion.div>

      {/* Contact Methods */}
      <section id="contact-methods" className="bg-white py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">
          <motion.div {...fadeUp} className="text-center max-w-xl mx-auto mb-14 sm:mb-16">
            <p className="text-blue-600 font-semibold text-xs sm:text-sm tracking-[0.25em] uppercase mb-2">Reach Us</p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-slate-900">Every Way to Talk to Us</h2>
          </motion.div>

          <div className="grid sm:grid-cols-3 gap-5 sm:gap-6 mb-5 sm:mb-6">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-shadow duration-300 p-6 sm:p-7"
            >
              <span className="w-11 h-11 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-4">
                <PhoneIcon className="w-5 h-5" />
              </span>
              <h3 className="font-display text-lg font-semibold text-slate-900 mb-3">Call Us</h3>
              <ul className="flex flex-col gap-2 text-sm text-slate-500 leading-relaxed">
                <li>
                  Direct Support Line ·{' '}
                  <a href="tel:+918891245778" className="text-slate-700 font-medium hover:text-blue-600 transition-colors">+91 8891245778</a>
                </li>
                <li>
                  WhatsApp Business ·{' '}
                  <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer" className="text-slate-700 font-medium hover:text-blue-600 transition-colors">Quick Chat</a>
                </li>
                <li>
                  24/7 Emergency Helpline ·{' '}
                  <a href="tel:+918899454974" className="text-slate-700 font-medium hover:text-blue-600 transition-colors">+91 8899454974</a>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-shadow duration-300 p-6 sm:p-7"
            >
              <span className="w-11 h-11 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-4">
                <MailIcon className="w-5 h-5" />
              </span>
              <h3 className="font-display text-lg font-semibold text-slate-900 mb-3">Email Us</h3>
              <ul className="flex flex-col gap-2 text-sm text-slate-500 leading-relaxed">
                <li>
                  General Inquiries, Bookings &amp; Visa Assistance ·{' '}
                  <a href="mailto:info@diarystourism.com" className="text-slate-700 font-medium hover:text-blue-600 transition-colors">info@diarystourism.com</a>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-shadow duration-300 p-6 sm:p-7"
            >
              <span className="w-11 h-11 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-4">
                <ClockIcon className="w-5 h-5" />
              </span>
              <h3 className="font-display text-lg font-semibold text-slate-900 mb-3">Operating Hours</h3>
              <ul className="flex flex-col gap-2 text-sm text-slate-500 leading-relaxed">
                <li>Monday – Saturday</li>
                <li className="text-slate-700 font-medium">9:00 AM – 7:00 PM (IST, GMT+5:30)</li>
                <li>Emergency helpline stays open on Sundays &amp; holidays for travelers already on a trip.</li>
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="grid lg:grid-cols-2 rounded-3xl border border-slate-100 shadow-sm overflow-hidden bg-white"
          >
            <div className="p-6 sm:p-10 flex flex-col justify-center">
              <span className="w-11 h-11 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-4">
                <PinIcon className="w-5 h-5" />
              </span>
              <h3 className="font-display text-lg font-semibold text-slate-900 mb-2">Visit Our Office</h3>
              <p className="text-slate-500 text-sm leading-relaxed">3rd Floor, Skyline Business Centre</p>
              <p className="text-slate-500 text-sm leading-relaxed mb-5">Near Kochi Metro – MG Road Station, Kochi, Kerala, India – 682016</p>
              <a
                href="https://maps.google.com/?q=Kochi,Kerala,India"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-blue-600 font-semibold text-sm hover:text-blue-500 transition-colors w-fit"
              >
                Get Directions <ArrowIcon />
              </a>
            </div>
            <div className="relative h-64 lg:h-auto min-h-[280px]">
              <iframe
                title="Diary's Tourism office location"
                src="https://maps.google.com/maps?q=Kochi,Kerala,India&z=14&output=embed"
                className="absolute inset-0 w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact form */}
      <section id="contact-form" className="bg-white py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-10">
          <motion.div {...fadeUp} className="text-center max-w-xl mx-auto mb-10 sm:mb-12">
            <p className="text-blue-600 font-semibold text-xs sm:text-sm tracking-[0.25em] uppercase mb-2">Get A Quote</p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-slate-900 mb-3">Send Us a Message</h2>
            <p className="text-slate-500 text-sm leading-relaxed">
              Share a few details about your dream trip and a travel consultant will get back to you within 24 hours.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="bg-white rounded-3xl shadow-xl border border-slate-100 p-6 sm:p-10"
          >
            <form onSubmit={handleSubmit} className="grid gap-6">
              <div>
                <p className="text-blue-600 text-[11px] font-bold tracking-[0.2em] uppercase mb-3">Personal Information</p>
                <div className="grid sm:grid-cols-2 gap-5">
                  <label className="flex flex-col gap-1.5 text-sm sm:col-span-2">
                    <span className="text-slate-500 text-xs font-semibold tracking-wide uppercase">Full Name</span>
                    <input required type="text" name="name" value={form.name} onChange={handleChange} placeholder="Jonathan Doe" className="border border-slate-200 rounded-lg px-3.5 py-2.5 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-blue-500" />
                  </label>
                  <label className="flex flex-col gap-1.5 text-sm">
                    <span className="text-slate-500 text-xs font-semibold tracking-wide uppercase">Email Address</span>
                    <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="john@domain.com" className="border border-slate-200 rounded-lg px-3.5 py-2.5 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-blue-500" />
                  </label>
                  <label className="flex flex-col gap-1.5 text-sm">
                    <span className="text-slate-500 text-xs font-semibold tracking-wide uppercase">Phone Number</span>
                    <input required type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+91 98765 43210" className="border border-slate-200 rounded-lg px-3.5 py-2.5 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-blue-500" />
                  </label>
                </div>
              </div>

              <div>
                <p className="text-blue-600 text-[11px] font-bold tracking-[0.2em] uppercase mb-3">Trip Specifics</p>
                <div className="grid sm:grid-cols-2 gap-5">
                  <label className="flex flex-col gap-1.5 text-sm sm:col-span-2">
                    <span className="text-slate-500 text-xs font-semibold tracking-wide uppercase">Target Destination</span>
                    <input type="text" name="destination" value={form.destination} onChange={handleChange} placeholder="e.g. Georgia, Lakshadweep" className="border border-slate-200 rounded-lg px-3.5 py-2.5 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-blue-500" />
                  </label>
                  <label className="flex flex-col gap-1.5 text-sm">
                    <span className="text-slate-500 text-xs font-semibold tracking-wide uppercase">Estimated Travel Date</span>
                    <input type="date" name="travelDate" value={form.travelDate} onChange={handleChange} className="border border-slate-200 rounded-lg px-3.5 py-2.5 text-slate-800 focus:outline-none focus:border-blue-500" />
                  </label>
                  <label className="flex flex-col gap-1.5 text-sm">
                    <span className="text-slate-500 text-xs font-semibold tracking-wide uppercase">Duration (Days)</span>
                    <input type="number" min="1" name="duration" value={form.duration} onChange={handleChange} placeholder="7" className="border border-slate-200 rounded-lg px-3.5 py-2.5 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-blue-500" />
                  </label>
                  <label className="flex flex-col gap-1.5 text-sm">
                    <span className="text-slate-500 text-xs font-semibold tracking-wide uppercase">Adults</span>
                    <input type="number" min="1" name="adults" value={form.adults} onChange={handleChange} className="border border-slate-200 rounded-lg px-3.5 py-2.5 text-slate-800 focus:outline-none focus:border-blue-500" />
                  </label>
                  <label className="flex flex-col gap-1.5 text-sm">
                    <span className="text-slate-500 text-xs font-semibold tracking-wide uppercase">Children</span>
                    <input type="number" min="0" name="children" value={form.children} onChange={handleChange} className="border border-slate-200 rounded-lg px-3.5 py-2.5 text-slate-800 focus:outline-none focus:border-blue-500" />
                  </label>
                </div>
              </div>

              <div>
                <p className="text-blue-600 text-[11px] font-bold tracking-[0.2em] uppercase mb-3">Preferences</p>
                <div className="grid sm:grid-cols-2 gap-5">
                  <label className="flex flex-col gap-1.5 text-sm">
                    <span className="text-slate-500 text-xs font-semibold tracking-wide uppercase">Travel Type</span>
                    <select name="travelType" value={form.travelType} onChange={handleChange} className="border border-slate-200 rounded-lg px-3.5 py-2.5 text-slate-800 focus:outline-none focus:border-blue-500">
                      <option value="">Select type</option>
                      <option>Family</option>
                      <option>Honeymoon</option>
                      <option>Solo</option>
                      <option>Corporate</option>
                    </select>
                  </label>
                  <label className="flex flex-col gap-1.5 text-sm">
                    <span className="text-slate-500 text-xs font-semibold tracking-wide uppercase">Budget Range</span>
                    <select name="budget" value={form.budget} onChange={handleChange} className="border border-slate-200 rounded-lg px-3.5 py-2.5 text-slate-800 focus:outline-none focus:border-blue-500">
                      <option value="">Select budget</option>
                      <option>Under ₹50,000</option>
                      <option>₹50,000 – ₹1,00,000</option>
                      <option>₹1,00,000 – ₹2,50,000</option>
                      <option>₹2,50,000+</option>
                    </select>
                  </label>
                </div>
              </div>

              <label className="flex flex-col gap-1.5 text-sm">
                <span className="text-slate-500 text-xs font-semibold tracking-wide uppercase">Message</span>
                <textarea rows={4} name="message" value={form.message} onChange={handleChange} placeholder="Custom requirements, special requests, or visa questions..." className="border border-slate-200 rounded-lg px-3.5 py-2.5 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 resize-none" />
              </label>

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1fbd5a] text-white font-bold text-sm py-3.5 rounded-full shadow-lg shadow-[#25D366]/25 transition-colors"
              >
                <WhatsAppIcon className="w-4 h-4" />
                Send via WhatsApp
              </button>
              {sent && (
                <p className="text-center text-sm text-[#1fbd5a] font-medium">
                  Opening WhatsApp… if it didn't open, message us directly at +91 8891245778.
                </p>
              )}
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-slate-500"
          >
            <a href="tel:+918891245778" className="flex items-center gap-2 hover:text-blue-600 transition-colors">
              <PhoneIcon className="w-4 h-4 text-blue-600" /> +91 8891245778
            </a>
            <a href="mailto:info@diarystourism.com" className="flex items-center gap-2 hover:text-blue-600 transition-colors">
              <MailIcon className="w-4 h-4 text-blue-600" /> info@diarystourism.com
            </a>
            <p className="flex items-center gap-2">
              <ClockIcon className="w-4 h-4 text-blue-600" /> Mon – Sat, 9:00 AM – 7:00 PM IST
            </p>
          </motion.div>
        </div>
      </section>

      {/* Social & Trust */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10 flex flex-col items-center text-center gap-8">
          <motion.div {...fadeUp}>
            <p className="text-blue-600 font-semibold text-xs sm:text-sm tracking-[0.25em] uppercase mb-2">Stay Connected</p>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-slate-900 mb-6">Follow Our Journeys</h2>
            <div className="flex items-center justify-center gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="w-11 h-11 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-colors"
                >
                  <s.icon className="w-4.5 h-4.5" />
                </a>
              ))}
            </div>
          </motion.div>

          <div className="w-full max-w-3xl h-px bg-slate-100" />

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap items-center justify-center gap-3 sm:gap-4"
          >
            {accreditations.map((a) => (
              <span
                key={a.label}
                className="inline-flex items-center gap-2 bg-white border border-slate-100 shadow-sm text-slate-700 text-sm font-semibold px-4 py-2.5 rounded-full"
              >
                <a.icon className="w-4 h-4 text-blue-600" /> {a.label}
              </span>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Contact
