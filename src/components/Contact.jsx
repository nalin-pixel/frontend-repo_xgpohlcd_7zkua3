function Contact() {
  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Let’s build something</h2>
          <p className="text-white/70 mt-2">Have an idea or a role in mind? I’m open to freelance and full-time opportunities.</p>

          <form action="https://formspree.io/f/xyyz" method="POST" className="mt-8 grid sm:grid-cols-2 gap-4">
            <input name="name" placeholder="Your name" className="bg-white/10 ring-1 ring-white/15 rounded-md px-4 py-2 text-white placeholder:text-white/50 focus:outline-none focus:ring-white/30"/>
            <input name="email" placeholder="Email" type="email" className="bg-white/10 ring-1 ring-white/15 rounded-md px-4 py-2 text-white placeholder:text-white/50 focus:outline-none focus:ring-white/30"/>
            <textarea name="message" placeholder="Tell me about your project" rows="4" className="sm:col-span-2 bg-white/10 ring-1 ring-white/15 rounded-md px-4 py-3 text-white placeholder:text-white/50 focus:outline-none focus:ring-white/30"/>
            <button className="sm:col-span-2 inline-flex items-center justify-center rounded-md bg-white text-slate-900 px-5 py-2.5 text-sm font-semibold shadow hover:shadow-lg transition">Send message</button>
          </form>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
    </section>
  )
}

export default Contact
