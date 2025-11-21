import { Menu, Github, Linkedin } from 'lucide-react'

function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/5 bg-white/5 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="text-white font-semibold text-lg tracking-tight">
          <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent">MyPortfolio</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
          <a href="#work" className="hover:text-white transition">Work</a>
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-white transition inline-flex items-center gap-2"><Github size={18}/>GitHub</a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white transition inline-flex items-center gap-2"><Linkedin size={18}/>LinkedIn</a>
        </nav>
        <button className="md:hidden text-white/90 hover:text-white" aria-label="Menu">
          <Menu />
        </button>
      </div>
    </header>
  )
}

export default Navbar
