import Hero from './components/Hero'
import FeaturedCollections from './components/FeaturedCollections'
import Bestsellers from './components/Bestsellers'
import Newsletter from './components/Newsletter'

function App() {
  return (
    <div className="min-h-screen bg-[#0b0b0b]">
      <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/60 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="/" className="text-xl font-serif text-white">O'Plaisir</a>
          <nav className="hidden md:flex items-center gap-6 text-white/80">
            <a href="#collections" className="hover:text-white">Collections</a>
            <a href="#" className="hover:text-white">Occasions</a>
            <a href="#" className="hover:text-white">Notre histoire</a>
            <a href="#" className="hover:text-white">Contact</a>
          </nav>
          <div className="flex items-center gap-4">
            <button className="px-3 py-1.5 rounded-full bg-white/10 text-white hover:bg-white/20">Panier</button>
          </div>
        </div>
      </header>

      <main>
        <Hero />
        <FeaturedCollections />
        <Bestsellers />
        <Newsletter />
      </main>

      <footer className="bg-black text-white/70">
        <div className="max-w-7xl mx-auto px-6 py-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h4 className="text-white font-semibold mb-3">O'Plaisir</h4>
            <p className="text-sm">Concept store premium : paniers cadeaux gourmands & décorations artisanales.</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Boutique</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Paniers gourmands</a></li>
              <li><a href="#" className="hover:text-white">Décorations</a></li>
              <li><a href="#" className="hover:text-white">Personnalisation</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">À propos</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Notre histoire</a></li>
              <li><a href="#" className="hover:text-white">Ateliers</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Newsletter</h4>
            <p className="text-sm">Profitez d'offres exclusives et d'inspirations cadeaux.</p>
          </div>
        </div>
        <div className="border-t border-white/10 py-4 text-center text-xs text-white/50">© {new Date().getFullYear()} O'Plaisir. Tous droits réservés.</div>
      </footer>
    </div>
  )
}

export default App
