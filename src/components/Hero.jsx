import { motion } from 'motion/react'
import { FaArrowRight, FaDownload, FaTrophy } from 'react-icons/fa6'
import { perfil, destacados } from '../data'
import { Avatar, Reveal } from './ui'

export default function Hero() {
  return (
    <section id="inicio" className="mx-auto max-w-6xl px-5 pt-32 pb-16 sm:pt-40">
      <div className="grid items-center gap-12 md:grid-cols-[1.2fr_1fr]">
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-line bg-card/60 px-4 py-1.5 text-sm text-muted">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            Disponible para nuevas oportunidades
          </p>
          <h1 className="font-display text-5xl leading-[1.05] font-extrabold sm:text-7xl">
            {perfil.nombre}
            <br />
            <span className="text-gradient">{perfil.apellido}</span>
          </h1>
          <p className="mt-5 font-display text-xl font-semibold sm:text-2xl">{perfil.rol}</p>
          <p className="mt-2 text-muted">{perfil.foco}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#proyectos" className="btn btn-primary">
              Ver proyectos <FaArrowRight aria-hidden />
            </a>
            <a href={perfil.cv} download className="btn btn-ghost">
              <FaDownload aria-hidden /> Descargar CV
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative mx-auto w-64 sm:w-80"
        >
          <div className="absolute -inset-6 rounded-full bg-accent-2/30 blur-3xl" aria-hidden />
          <Avatar className="relative" />
          <div className="card absolute -bottom-2 -left-6 flex items-center gap-3 px-4 py-3 shadow-xl sm:-left-10">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-400/15 text-xl text-amber-300">
              <FaTrophy aria-hidden />
            </span>
            <div className="text-left">
              <p className="font-display text-sm font-bold">1.º puesto</p>
              <p className="text-xs text-muted">Proyecto Boxly</p>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="mt-20 grid gap-5 sm:grid-cols-3">
        {destacados.map(({ icon: Icon, titulo, texto }, i) => (
          <Reveal key={titulo} delay={i * 0.1}>
            <div className="card group h-full p-6 transition duration-300 hover:-translate-y-1 hover:border-accent/60">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-2xl text-accent transition group-hover:bg-accent group-hover:text-ink">
                <Icon aria-hidden />
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold">{titulo}</h3>
              <p className="mt-1 text-sm text-muted">{texto}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
