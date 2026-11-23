import { FaQuoteLeft, FaCertificate } from 'react-icons/fa6'
import { stack } from '../data'
import { Reveal, Section, SectionTitle } from './ui'

export default function Recognition() {
  return (
    <>
      <Section id="reconocimiento">
        <SectionTitle kicker="Reconocimiento" title="Boxly, 1.º puesto institucional" />
        <Reveal>
          <figure className="card relative mx-auto max-w-3xl px-8 py-12 text-center sm:px-14">
            <FaQuoteLeft className="mx-auto text-5xl text-accent" aria-hidden />
            <blockquote className="mt-6 font-display text-lg leading-relaxed sm:text-xl">
              Boxly lleva todo el taller, de la recepción a la entrega: clientes, vehículos, órdenes de trabajo, repuestos,
              turnos, cobros y pagos online, con un portal para el cliente. Obtuvo el{' '}
              <span className="text-gradient font-bold">1.º puesto a nivel institucional</span> en noviembre de 2026.
            </blockquote>
            <figcaption className="mt-8 flex flex-col items-center gap-3">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-amber-300 to-amber-500 text-2xl text-ink">
                <FaCertificate aria-hidden />
              </span>
              <span className="font-semibold">Certificado por el IES N.º 6001 "Manuel Belgrano" y SaltaDev</span>
              <span className="text-sm text-muted">Equipo de 4 · Scrum · Backend: órdenes de trabajo y turnos</span>
            </figcaption>
          </figure>
        </Reveal>
      </Section>

      <div className="border-y border-line/60 bg-card/40 py-8" aria-label="Tecnologías que uso">
        <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <ul className="animate-marquee flex w-max gap-12">
            {[...stack, ...stack].map(({ icon: Icon, nombre }, i) => (
              <li key={`${nombre}-${i}`} className="flex items-center gap-3 text-muted transition hover:text-accent" aria-hidden={i >= stack.length}>
                <Icon className="text-3xl" aria-hidden />
                <span className="font-display text-lg font-semibold whitespace-nowrap">{nombre}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}
