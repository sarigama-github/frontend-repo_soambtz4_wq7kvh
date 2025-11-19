import { useEffect, useState } from 'react'

const cards = [
  { key: 'chocolat', title: 'Paniers Chocolat Premium', image: 'https://images.unsplash.com/photo-1671059954529-3c90fb11e19d?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxQYW5pZXJzJTIwQ2hvY29sYXQlMjBQcmVtaXVtfGVufDB8MHx8fDE3NjM1NDM0NTV8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
  { key: 'mediterranee', title: 'Paniers Méditerranéens', image: 'https://images.unsplash.com/photo-1548940740-204726a19be3?q=80&w=1200&auto=format&fit=crop' },
  { key: 'mixtes', title: 'Paniers Mixtes Gourmands', image: 'https://images.unsplash.com/photo-1542831371-32f555c86880?q=80&w=1200&auto=format&fit=crop' },
  { key: 'decouverte', title: 'Paniers Découverte', image: 'https://images.unsplash.com/photo-1481833761820-0509d3217039?q=80&w=1200&auto=format&fit=crop' },
]

export default function FeaturedCollections() {
  const [occasions, setOccasions] = useState([])

  useEffect(() => {
    const fetchOccasions = async () => {
      try {
        const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${baseUrl}/api/occasions`)
        const data = await res.json()
        setOccasions(data)
      } catch (e) {
        setOccasions([])
      }
    }
    fetchOccasions()
  }, [])

  return (
    <section id="collections" className="bg-[#0f0f0f] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-serif">Collections en vedette</h2>
        <p className="text-white/70 mt-2">Sélectionnez une catégorie pour commencer</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {cards.map((c) => (
            <a key={c.key} href="#" className="group relative rounded-2xl overflow-hidden border border-white/10">
              <img src={c.image} alt={c.title} className="h-56 w-full object-cover transition duration-300 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/10" />
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="font-semibold text-lg">{c.title}</h3>
              </div>
            </a>
          ))}
        </div>

        {occasions.length > 0 && (
          <div className="mt-12">
            <h3 className="text-2xl font-serif mb-4">Par occasion</h3>
            <div className="flex flex-wrap gap-3">
              {occasions.map((o) => (
                <span key={o.key} className="px-4 py-2 rounded-full bg-white/5 text-white/90 border border-white/10">{o.label}</span>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
