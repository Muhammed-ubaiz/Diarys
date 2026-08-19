import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'

gsap.registerPlugin(ScrollTrigger)

function frameUrl(framesDir, prefix, index, padLength, extension) {
  const n = String(index).padStart(padLength, '0')
  return `${framesDir}${prefix}${n}.${extension}`
}

/**
 * Cinematic scroll-scrubbed image-sequence section.
 * Pins full-viewport while the user scrolls through a preloaded frame
 * sequence rendered on a single canvas, driven by GSAP ScrollTrigger + Lenis.
 */
function ScrollFrameAnimation({
  framesDir = '/frames/',
  frameCount = 147,
  prefix = 'frame_',
  padLength = 4,
  extension = 'webp',
  className = '',
}) {
  const sectionRef = useRef(null)
  const pinRef = useRef(null)
  const canvasRef = useRef(null)
  const imagesRef = useRef([])
  const currentFrameRef = useRef(0)
  const sizeRef = useRef({ width: 0, height: 0 })

  useEffect(() => {
    if (!frameCount || frameCount < 1) return undefined

    let mounted = true
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const images = new Array(frameCount)
    imagesRef.current = images

    const drawImageContain = (img) => {
      const { width: cw, height: ch } = sizeRef.current
      if (!cw || !ch) return
      const ir = img.naturalWidth / img.naturalHeight
      const cr = cw / ch
      let dw, dh
      if (ir > cr) {
        dw = cw
        dh = cw / ir
      } else {
        dh = ch
        dw = ch * ir
      }
      ctx.clearRect(0, 0, cw, ch)
      ctx.drawImage(img, (cw - dw) / 2, (ch - dh) / 2, dw, dh)
    }

    const drawFrame = (index) => {
      const img = images[index]
      if (img && img.complete && img.naturalWidth > 0) {
        drawImageContain(img)
      }
    }

    const resizeCanvas = () => {
      const wrapper = pinRef.current
      if (!wrapper) return
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const { width, height } = wrapper.getBoundingClientRect()
      canvas.width = Math.round(width * dpr)
      canvas.height = Math.round(height * dpr)
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      sizeRef.current = { width, height }
      drawFrame(currentFrameRef.current)
    }

    resizeCanvas()

    // Load a single frame; on success (or failure) resolve so the caller can
    // move on without blocking the rest of the sequence.
    const loadFrame = (index) =>
      new Promise((resolve) => {
        const img = new Image()
        img.decoding = 'async'
        if (index === 0) img.fetchPriority = 'high'
        img.onload = () => {
          images[index] = img
          if (mounted && index === currentFrameRef.current) drawFrame(index)
          resolve()
        }
        img.onerror = () => {
          console.warn(`ScrollFrameAnimation: failed to load frame ${index}`)
          resolve()
        }
        img.src = frameUrl(framesDir, prefix, index + 1, padLength, extension)
      })

    let scrollTriggerInstance = null
    let tween = null
    let lenis = null
    let rafCallback = null
    let resizeObserver = null
    let onResize = null

    const setupScrollAnimation = () => {
      if (!mounted) return
      const playhead = { frame: 0 }
      const fadeZone = 0.06

      tween = gsap.to(playhead, {
        frame: frameCount - 1,
        ease: 'none',
        onUpdate: () => {
          const idx = Math.round(playhead.frame)
          if (idx !== currentFrameRef.current) {
            currentFrameRef.current = idx
            drawFrame(idx)
          }
          const p = scrollTriggerInstance ? scrollTriggerInstance.progress : 0
          let opacity = 1
          if (p < fadeZone) opacity = p / fadeZone
          else if (p > 1 - fadeZone) opacity = (1 - p) / fadeZone
          pinRef.current.style.opacity = String(Math.max(0, Math.min(1, opacity)))
        },
        scrollTrigger: {
          trigger: sectionRef.current,
          pin: pinRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: true,
          anticipatePin: 1,
        },
      })
      scrollTriggerInstance = tween.scrollTrigger

      if (!prefersReducedMotion) {
        lenis = new Lenis({ duration: 1.2, smoothWheel: true })
        rafCallback = (time) => lenis.raf(time * 1000)
        gsap.ticker.add(rafCallback)
        gsap.ticker.lagSmoothing(0)
        lenis.on('scroll', ScrollTrigger.update)
      }
    }

    // Prioritize the first frame so the section is never blank, then stream
    // the rest in the background while the pinned scrub is already live.
    loadFrame(0).then(() => {
      if (!mounted) return
      setupScrollAnimation()
      for (let i = 1; i < frameCount; i += 1) {
        loadFrame(i)
      }
    })

    onResize = () => {
      resizeCanvas()
      ScrollTrigger.refresh()
    }
    window.addEventListener('resize', onResize)
    if (typeof ResizeObserver !== 'undefined') {
      resizeObserver = new ResizeObserver(onResize)
      resizeObserver.observe(sectionRef.current)
    }

    return () => {
      mounted = false
      window.removeEventListener('resize', onResize)
      if (resizeObserver) resizeObserver.disconnect()
      if (tween) tween.kill()
      if (scrollTriggerInstance) scrollTriggerInstance.kill()
      if (rafCallback) gsap.ticker.remove(rafCallback)
      if (lenis) lenis.destroy()
      images.length = 0
    }
  }, [framesDir, frameCount, prefix, padLength, extension])

  const pinVh = Math.min(500, Math.max(300, frameCount * 2))

  return (
    <section
      ref={sectionRef}
      className={`relative w-full bg-black ${className}`}
      style={{ height: `${pinVh}vh` }}
    >
      <div ref={pinRef} className="relative w-full h-screen overflow-hidden">
        <canvas ref={canvasRef} className="block w-full h-full" />
      </div>
    </section>
  )
}

export default ScrollFrameAnimation
