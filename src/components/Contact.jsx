import { useState } from 'react'
import { FaEnvelope, FaLocationDot, FaPaperPlane, FaPhone } from 'react-icons/fa6'
import { perfil, redes } from '../data'
import { Reveal, Section, SectionTitle } from './ui'

const canales = [
  { icon: FaEnvelope, label: 'Email', valor: perfil.email, href: `mailto:${perfil.email}` },
  { icon: FaPhone, label: 'Teléfono', valor: perfil.telefono, href: `tel:${perfil.telefono.replace(/[^\d+]/g, '')}` },
  { icon: FaLocationDot, label: 'Ubicación', valor: perfil.ubicacion },
]

const inicial = { nombre: '', email: '', asunto: '', mensaje: '' }
const input = 'w-full rounded-xl border border-line bg-night/80 px-4 py-3 text-sm placeholder:text-muted/60 focus:border-accent focus:outline-none'

export default function Contact() {
  const [form, setForm] = useState(inicial)
  const set = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const enviar = (e) => {
    e.preventDefault()
    const asunto = encodeURIComponent(form.asunto || `Contacto desde el portfolio - ${form.nombre}`)
    const cuerpo = encodeURIComponent(`${form.mensaje}\n\n${form.nombre}\n${form.email}`)
    window.location.href = `mailto:${perfil.email}?subject=${asunto}&body=${cuerpo}`
    setForm(inicial)
  }

  return (
    <Section id="contacto">
      <SectionTitle kicker="Contacto" title="¿Hablamos?" />
      <div className="grid gap-10 md:grid-cols-[1fr_1.4fr]">
        <Reveal>
          <p className="text-muted">
            Estoy buscando mi primera experiencia formal como desarrollador. Si tenés una propuesta, un proyecto o querés
            saber más sobre mi trabajo, escribime.
          </p>
          <ul className="mt-8 space-y-5">
            {canales.map(({ icon: Icon, label, valor, href }) => (
              <li key={label} className="flex items-center gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-accent-2 text-lg text-ink">
                  <Icon aria-hidden />
                </span>
                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-wider text-muted">{label}</p>
                  {href ? (
                    <a href={href} className="break-words font-semibold hover:text-accent">{valor}</a>
                  ) : (
                    <p className="font-semibold">{valor}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>

          <div id="redes" className="mt-10">
            <p className="mb-4 font-display font-semibold">Redes</p>
            <ul className="flex flex-wrap gap-3">
              {redes.map(({ icon: Icon, nombre, href }) => (
                <li key={nombre}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={nombre}
                    title={nombre}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-lg text-muted transition hover:-translate-y-0.5 hover:border-accent hover:bg-accent hover:text-ink"
                  >
                    <Icon aria-hidden />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <form onSubmit={enviar} className="card grid gap-4 p-6 sm:grid-cols-2 sm:p-8">
            <label className="grid gap-1.5 text-sm">
              Nombre
              <input name="nombre" value={form.nombre} onChange={set} required minLength={3} placeholder="Tu nombre" className={input} />
            </label>
            <label className="grid gap-1.5 text-sm">
              Email
              <input type="email" name="email" value={form.email} onChange={set} required placeholder="tu@email.com" className={input} />
            </label>
            <label className="grid gap-1.5 text-sm sm:col-span-2">
              Asunto
              <input name="asunto" value={form.asunto} onChange={set} placeholder="Propuesta laboral, proyecto, consulta..." className={input} />
            </label>
            <label className="grid gap-1.5 text-sm sm:col-span-2">
              Mensaje
              <textarea name="mensaje" value={form.mensaje} onChange={set} required minLength={10} rows={5} placeholder="Contame en qué puedo ayudarte" className={input} />
            </label>
            <button type="submit" className="btn btn-primary justify-center sm:col-span-2">
              <FaPaperPlane aria-hidden /> Enviar mensaje
            </button>
          </form>
        </Reveal>
      </div>
    </Section>
  )
}
