import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, Outlet, useLocation } from 'react-router-dom'
import Navbar from '../pages/Navbar'
import Footer from '../pages/Footer'
import WhatsAppButton from '../components/WhatsAppButton'
import Home from '../pages/Home'
import About from '../pages/About'
import Blogs from '../pages/Blogs'
import Contact from '../pages/Contact'
import FlightTicketing from '../pages/FlightTicketing'
import InternationalTourPackage from '../pages/InternationalTourPackage'
import VisaAssistance from '../pages/VisaAssistance'
import DestinationDetail from '../pages/DestinationDetail'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function Layout() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Outlet />
      <Footer />
      <WhatsAppButton />
    </>
  )
}

function LayoutRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/flight-ticketing" element={<FlightTicketing />} />
          <Route path="/international-tour-package" element={<InternationalTourPackage />} />
          <Route path="/visa-assistance" element={<VisaAssistance />} />
          <Route path="/destinations/:slug" element={<DestinationDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default LayoutRoutes
