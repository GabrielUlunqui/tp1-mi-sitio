import { motion } from 'motion/react'
import { habilidades, servicios } from '../data'
import { Reveal, Section, SectionTitle } from './ui'

export default function Skills() {
  return (
    <>
      <Section id="habilidades">
        <SectionTitle kicker="Habilidades" title="Aprendo y mejoro todos los días" />
        <div className="grid gap-x-12 gap-y-7 md:grid-cols-2">
          {habilidades.map(({ nombre, nivel }, i) => (
            <Reveal key={nombre} delay={i * 0.05}>
              <div className="mb-2 flex justify-between text-sm">
                <span className="font-semibold">{nombre}</span>
                <span className="text-muted">{nivel}%</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-card-2" role="progressbar" aria-label={nombre} aria-valuenow={nivel} aria-valuemin={0} aria-valuemax={100}>
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-accent to-accent-2"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${nivel}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.1, ease: 'easeOut' }}
                />
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section id="servicios">
        <SectionTitle kicker="Qué hago" title="Cómo puedo aportar a tu equipo" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {servicios.map(({ icon: Icon, titulo, texto }, i) => (
            <Reveal key={titulo} delay={i * 0.06}>
              <div className="card group h-full p-7 text-center transition duration-300 hover:-translate-y-1 hover:border-accent/60 hover:bg-card-2/70">
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-accent/20 to-accent-2/20 text-2xl text-accent transition group-hover:scale-110">
                  <Icon aria-hidden />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold">{titulo}</h3>
                <p className="mt-2 text-sm text-muted">{texto}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  )
}
