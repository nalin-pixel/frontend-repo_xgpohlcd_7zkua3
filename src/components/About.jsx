function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-5xl px-6 lg:px-8 grid lg:grid-cols-3 gap-10 items-start">
        <div className="lg:col-span-1">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">About Me</h2>
          <p className="text-white/70 mt-3">Designer-turned-engineer who loves building tactile interfaces with thoughtful motion. I focus on clarity, accessibility, and joyful details.</p>
        </div>
        <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
          <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
            <h3 className="text-white font-semibold">What I do</h3>
            <p className="text-white/70 text-sm mt-2">Product design, front-end engineering, design systems, prototyping, and performance.</p>
          </div>
          <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
            <h3 className="text-white font-semibold">How I work</h3>
            <p className="text-white/70 text-sm mt-2">Collaborative, iterative, and research-driven with a love for motion and 3D storytelling.</p>
          </div>
          <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
            <h3 className="text-white font-semibold">Toolbox</h3>
            <p className="text-white/70 text-sm mt-2">React, Tailwind, Framer Motion, Spline, Figma, FastAPI, MongoDB.</p>
          </div>
          <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
            <h3 className="text-white font-semibold">Currently</h3>
            <p className="text-white/70 text-sm mt-2">Exploring playful 3D interactions for onboarding and storytelling.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
