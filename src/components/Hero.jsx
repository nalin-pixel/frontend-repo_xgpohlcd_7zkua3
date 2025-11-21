import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 grid md:grid-cols-2 gap-10 w-full">
        <div className="py-28 md:py-40">
          <div className="inline-flex items-center text-xs font-medium text-white/80 bg-white/10 px-3 py-1 rounded-full ring-1 ring-white/15 mb-6">
            Interactive • Tech • Playful
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white drop-shadow-[0_0_25px_rgba(59,130,246,0.35)]">
            Hi, I’m Your Name
          </h1>
          <p className="mt-6 text-lg text-white/80 max-w-xl">
            I design and build delightful digital products with a focus on interaction, motion, and modern web tech.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <a href="#work" className="inline-flex items-center justify-center rounded-md bg-white text-slate-900 px-5 py-2.5 text-sm font-semibold shadow hover:shadow-lg transition">View Work</a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-white/10 text-white ring-1 ring-white/20 px-5 py-2.5 text-sm font-semibold hover:bg-white/15 transition">Contact</a>
          </div>
        </div>
        <div className="hidden md:block"></div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/20 via-slate-950/40 to-slate-950" />
    </section>
  )
}

export default Hero
