import { motion } from 'motion/react'
import { FaCode } from 'react-icons/fa6'
import { perfil } from '../data'

export function Reveal({ children, delay = 0, className = '', y = 24 }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}

export function SectionTitle({ kicker, title, center = true }) {
  return (
    <Reveal className={`mb-12 ${center ? 'text-center' : ''}`}>
      <span className="text-sm font-semibold uppercase tracking-[0.25em] text-accent">{kicker}</span>
      <h2 className="mt-3 font-display text-3xl font-bold leading-tight sm:text-4xl">{title}</h2>
      <div className={`mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-accent to-accent-2 ${center ? 'mx-auto' : ''}`} />
    </Reveal>
  )
}

export function Section({ id, children, className = '' }) {
  return (
    <section id={id} className={`mx-auto max-w-6xl px-5 py-20 sm:py-24 ${className}`}>
      {children}
    </section>
  )
}

export function Avatar({ className = '' }) {
  return (
    <div className={`relative aspect-square rounded-full bg-gradient-to-br from-accent to-accent-2 p-1.5 ${className}`}>
      <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-full bg-night">
        {perfil.foto ? (
          <img src={perfil.foto} alt={`Foto de ${perfil.nombreCompleto}`} className="h-full w-full object-cover" />
        ) : (
          <div className="flex flex-col items-center text-center">
            <FaCode className="mb-2 text-3xl text-accent sm:text-4xl" aria-hidden />
            <span className="font-display text-6xl font-bold text-gradient sm:text-7xl">GU</span>
          </div>
        )}
      </div>
    </div>
  )
}
