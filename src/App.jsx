import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <main className="relative">
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>

      <footer className="relative border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-10 text-sm text-white/60 flex items-center justify-between">
          <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
          <a href="/test" className="hover:text-white">Backend test</a>
        </div>
      </footer>

      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(1000px_600px_at_10%_-10%,rgba(59,130,246,0.15),transparent),radial-gradient(800px_400px_at_90%_10%,rgba(168,85,247,0.12),transparent)]" />
    </div>
  )
}

export default App
