import { motion } from 'framer-motion'

const heroImages = [
  'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=1600&auto=format&fit=crop',
]

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(120deg,#0b0b0b,rgba(11,11,11,0.6))]" />
        <motion.img
          key={heroImages[0]}
          src={heroImages[0]}
          alt="O'Plaisir hero"
          className="w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 12, ease: 'easeOut' }}
        />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 flex flex-col items-start justify-center h-full">
        <span className="inline-block px-4 py-1 rounded-full text-xs tracking-widest font-semibold bg-[#D4AF37]/10 text-[#D4AF37] ring-1 ring-[#D4AF37]/30 mb-6">L'art de célébrer vos moments précieux</span>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif text-white leading-tight drop-shadow-[0_1px_0_rgba(0,0,0,0.4)]">
          O'Plaisir
          <span className="block text-[#D4AF37]">Paniers gourmands & décorations d'exception</span>
        </h1>
        <p className="mt-6 text-lg text-white/80 max-w-2xl">
          Des créations artisanales, une touche de luxe, et des attentions qui marquent les esprits.
        </p>
        <div className="mt-10 flex gap-4">
          <a href="#collections" className="px-6 py-3 rounded-full bg-[#D4AF37] text-black font-semibold hover:bg-[#c9a12f] transition">Découvrir nos créations</a>
          <a href="#configurateur" className="px-6 py-3 rounded-full border border-white/20 text-white hover:bg-white/10 transition">Composer mon panier</a>
        </div>
      </div>
    </section>
  )
}
