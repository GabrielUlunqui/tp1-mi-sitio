import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { FaGithub, FaTrophy } from 'react-icons/fa6'
import { categorias, proyectos } from '../data'
import { Section, SectionTitle } from './ui'

const gradientes = [
  'from-cyan-400/30 to-indigo-500/30',
  'from-fuchsia-500/30 to-indigo-500/30',
  'from-emerald-400/30 to-cyan-500/30',
  'from-amber-400/30 to-rose-500/30',
  'from-sky-400/30 to-violet-500/30',
]

function Card({ p, i }) {
  const Icon = p.icon
  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className={`card group flex flex-col overflow-hidden ${p.destacado ? 'md:col-span-2 md:flex-row lg:col-span-3' : ''}`}
    >
      <div className={`relative overflow-hidden ${p.destacado ? 'md:w-3/5' : ''}`}>
        {p.imagen ? (
          <img src={p.imagen} alt={`Captura de ${p.titulo}`} loading="lazy" className="h-56 w-full object-cover object-top transition duration-500 group-hover:scale-105 md:h-full" />
        ) : (
          <div className={`flex h-44 items-center justify-center bg-gradient-to-br ${gradientes[i % gradientes.length]}`}>
            <Icon className="text-6xl text-white/90 transition duration-500 group-hover:scale-110 group-hover:rotate-6" aria-hidden />
          </div>
        )}
        {p.destacado && (
          <span className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-full bg-amber-400 px-3 py-1 text-xs font-bold text-ink shadow-lg">
            <FaTrophy aria-hidden /> 1.º puesto institucional
          </span>
        )}
      </div>
      <div className={`flex flex-1 flex-col p-6 ${p.destacado ? 'md:w-2/5 md:p-8' : ''}`}>
        <span className="text-xs font-semibold uppercase tracking-wider text-accent">{p.categoria}</span>
        <h3 className={`mt-1 font-display font-bold ${p.destacado ? 'text-2xl' : 'text-lg'}`}>{p.titulo}</h3>
        <p className="text-sm text-accent-2">{p.subtitulo}</p>
        <p className="mt-3 flex-1 text-sm text-muted">{p.descripcion}</p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {p.tags.map((t) => (
            <li key={t} className="rounded-full border border-line px-2.5 py-0.5 text-xs text-slate-300">{t}</li>
          ))}
        </ul>
        <a href={p.repo} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline">
          <FaGithub aria-hidden /> Ver código
        </a>
      </div>
    </motion.article>
  )
}

export default function Projects() {
  const [filtro, setFiltro] = useState('Todos')
  const visibles = proyectos.filter((p) => filtro === 'Todos' || p.categoria === filtro)

  return (
    <Section id="proyectos">
      <SectionTitle kicker="Portfolio" title="Proyectos en los que trabajé" />

      <div className="mb-10 flex flex-wrap justify-center gap-2" role="tablist" aria-label="Filtrar proyectos">
        {categorias.map((c) => (
          <button
            key={c}
            type="button"
            role="tab"
            aria-selected={filtro === c}
            onClick={() => setFiltro(c)}
            className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
              filtro === c ? 'bg-gradient-to-r from-accent to-accent-2 text-ink' : 'border border-line text-muted hover:border-accent hover:text-accent'
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <motion.div layout className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visibles.map((p, i) => (
            <Card key={p.titulo} p={p} i={i} />
          ))}
        </AnimatePresence>
      </motion.div>
    </Section>
  )
}
