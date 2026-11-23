import { FaArrowUp, FaDownload } from 'react-icons/fa6'
import { nav, perfil, redes } from '../data'
import { Reveal } from './ui'

export default function Footer() {
  return (
    <footer className="mt-10">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-accent-2 via-violet-600 to-fuchsia-600 px-8 py-10 sm:px-12">
            <div className="absolute -top-16 -right-16 h-56 w-56 rounded-full bg-white/10 blur-2xl" aria-hidden />
            <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/80">Trabajemos juntos</p>
                <h2 className="mt-2 font-display text-2xl font-bold sm:text-3xl">¿Buscás un desarrollador junior con ganas de aportar?</h2>
              </div>
              <a href={perfil.cv} download className="btn shrink-0 bg-white text-ink hover:-translate-y-0.5 hover:bg-slate-100">
                <FaDownload aria-hidden /> Descargar CV
              </a>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="mt-16 border-t border-line/60">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 sm:grid-cols-3">
          <div>
            <a href="#inicio" className="font-display text-xl font-bold">
              {perfil.nombre} {perfil.apellido}
              <span className="text-accent">.</span>
            </a>
            <p className="mt-3 text-sm text-muted">{perfil.rol} · {perfil.ubicacion}</p>
          </div>
          <nav aria-label="Secciones">
            <p className="mb-3 font-display font-semibold">Secciones</p>
            <ul className="grid grid-cols-2 gap-2 text-sm text-muted">
              {nav.map((n) => (
                <li key={n.href}><a href={n.href} className="hover:text-accent">{n.label}</a></li>
              ))}
            </ul>
          </nav>
          <div>
            <p className="mb-3 font-display font-semibold">Redes</p>
            <ul className="space-y-2 text-sm text-muted">
              {redes.map(({ icon: Icon, nombre, usuario, href }) => (
                <li key={nombre}>
                  <a href={href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-accent">
                    <Icon aria-hidden /> {usuario}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-line/60">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 text-xs text-muted">
            <p>© {new Date().getFullYear()} {perfil.nombreCompleto}. Hecho con React, Vite y Tailwind CSS.</p>
            <a href="#inicio" aria-label="Volver arriba" className="flex h-9 w-9 items-center justify-center rounded-full border border-line hover:border-accent hover:text-accent">
              <FaArrowUp aria-hidden />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
