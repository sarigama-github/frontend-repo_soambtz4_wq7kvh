import { useEffect, useState } from 'react'

export default function Bestsellers() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const run = async () => {
      try {
        const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${baseUrl}/api/products/bestsellers`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ tag: 'bestseller', limit: 8 })
        })
        const data = await res.json()
        setItems(data)
      } catch (e) {
        setItems([])
      } finally {
        setLoading(false)
      }
    }
    run()
  }, [])

  return (
    <section className="bg-[#0b0b0b] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif">Nos Bestsellers</h2>
            <p className="text-white/70 mt-2">Des favoris intemporels, plébiscités par nos clients</p>
          </div>
          <a href="#" className="text-[#D4AF37] hover:underline">Tout voir</a>
        </div>

        {loading ? (
          <p className="mt-8 text-white/60">Chargement...</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {items.map((it) => (
              <div key={it._id || it.id || it.title} className="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/5">
                <img src={it.image} alt={it.title} className="h-56 w-full object-cover transition duration-300 group-hover:scale-105" />
                <div className="p-4">
                  <h3 className="font-semibold">{it.title}</h3>
                  <p className="text-[#D4AF37] mt-1 font-medium">{Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(it.price)}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
