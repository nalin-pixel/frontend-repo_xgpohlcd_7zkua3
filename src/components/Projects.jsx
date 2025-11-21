function ProjectCard({ title, description, tags }) {
  return (
    <div className="group relative rounded-2xl bg-white/5 ring-1 ring-white/10 p-6 hover:bg-white/7.5 transition shadow-sm">
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-blue-500/10 via-cyan-400/10 to-purple-500/10" />
      <h3 className="text-white font-semibold text-lg">{title}</h3>
      <p className="text-white/70 text-sm mt-2">{description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((t) => (
          <span key={t} className="text-xs px-2 py-1 rounded-full bg-white/10 text-white/80 ring-1 ring-white/15">{t}</span>
        ))}
      </div>
    </div>
  )
}

function Projects() {
  const items = [
    { title: 'Interactive Dashboard', description: 'Data-rich dashboard with smooth motion and 3D accents.', tags: ['React', 'Framer Motion', 'Spline'] },
    { title: 'Portfolio v2', description: 'A crisp and minimal portfolio with a playful twist.', tags: ['Vite', 'Tailwind'] },
    { title: 'Realtime Chat', description: 'Clean, responsive chat app with presence indicators.', tags: ['WebSockets', 'FastAPI'] },
  ]

  return (
    <section id="work" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Selected Work</h2>
          <p className="text-white/70 mt-2 max-w-2xl">A few projects that showcase my approach to interaction, clarity, and craft.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
    </section>
  )
}

export default Projects
