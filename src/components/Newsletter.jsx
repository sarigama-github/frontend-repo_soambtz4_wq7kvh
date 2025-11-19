import { useState } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  const submit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)
    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/newsletter/subscribe`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      })
      const data = await res.json()
      setStatus(data.message || 'Merci !')
      setEmail('')
    } catch (e) {
      setStatus("Une erreur est survenue. Réessayez.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="bg-[#111] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-serif">Recevez nos nouveautés</h2>
          <p className="text-white/70 mt-2">Inscrivez-vous et recevez une offre de bienvenue.</p>
        </div>
        <form onSubmit={submit} className="flex-1 w-full">
          <div className="flex gap-3">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Votre email"
              className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
            />
            <button disabled={loading} className="px-6 py-3 rounded-xl bg-[#D4AF37] text-black font-semibold hover:bg-[#c9a12f] transition">
              {loading ? 'Envoi...' : 'Je m\'inscris'}
            </button>
          </div>
          {status && <p className="mt-3 text-white/80">{status}</p>}
        </form>
      </div>
    </section>
  )
}
