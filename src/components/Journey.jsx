import { FaBriefcase, FaGraduationCap } from 'react-icons/fa6'
import { educacion, experiencia } from '../data'
import { Reveal, Section, SectionTitle } from './ui'

function Timeline({ icon: Icon, titulo, items }) {
  return (
    <div>
      <h3 className="mb-6 flex items-center gap-3 font-display text-xl font-semibold">
        <Icon className="text-accent" aria-hidden /> {titulo}
      </h3>
      <ol className="relative space-y-6 border-l border-line pl-8">
        {items.map((item, i) => (
          <Reveal key={item.titulo} delay={i * 0.08}>
            <li className="relative">
              <span className="absolute top-1.5 -left-[2.42rem] flex h-4 w-4 items-center justify-center rounded-full bg-ink ring-2 ring-accent">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              </span>
              <div className="card p-5">
                <span className="inline-block rounded-full bg-accent/10 px-3 py-0.5 text-xs font-semibold text-accent">{item.periodo}</span>
                <h4 className="mt-2 font-display font-semibold">{item.titulo}</h4>
                <p className="text-sm text-accent-2">{item.lugar}</p>
                <p className="mt-2 text-sm text-muted">{item.texto}</p>
              </div>
            </li>
          </Reveal>
        ))}
      </ol>
    </div>
  )
}

export default function Journey() {
  return (
    <Section id="trayectoria">
      <SectionTitle kicker="Trayectoria" title="Experiencia y formación" />
      <div className="grid gap-12 md:grid-cols-2">
        <Timeline icon={FaBriefcase} titulo="Experiencia" items={experiencia} />
        <Timeline icon={FaGraduationCap} titulo="Formación" items={educacion} />
      </div>
    </Section>
  )
}
