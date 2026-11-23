import { FaDownload, FaTrophy } from 'react-icons/fa6'
import { perfil, stats } from '../data'
import { Reveal, Section, SectionTitle } from './ui'

const datos = [
  ['Nombre', perfil.nombreCompleto],
  ['Ubicación', perfil.ubicacion],
  ['Email', perfil.email],
  ['Estudios', perfil.estudios],
]

export default function About() {
  return (
    <Section id="sobre-mi">
      <SectionTitle kicker="Sobre mí" title="Un desarrollador que disfruta resolver problemas" />

      <div className="grid items-center gap-12 md:grid-cols-2">
        <Reveal>
          <div className="relative">
            <div className="card overflow-hidden p-2">
              <img
                src={`${import.meta.env.BASE_URL}proyectos/boxly-dashboard.png`}
                alt="Dashboard de Boxly, sistema de gestión de taller mecánico"
                className="w-full rounded-xl"
                loading="lazy"
              />
            </div>
            <div className="absolute -right-3 -bottom-6 flex items-center gap-3 rounded-2xl bg-gradient-to-r from-accent to-accent-2 px-5 py-4 text-ink shadow-xl sm:-right-6">
              <FaTrophy className="text-3xl" aria-hidden />
              <div>
                <p className="font-display text-2xl leading-none font-extrabold">1.º</p>
                <p className="text-xs font-semibold">Puesto institucional</p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="space-y-4 text-muted">
            <p>
              Soy estudiante de 2.º año de <strong className="text-slate-100">Análisis de Sistemas y Desarrollo de Software</strong> en
              el IES N.º 6001 y desarrollador full-stack con foco en backend. Me gusta entender el problema, modelar los datos
              y construir APIs claras y bien validadas.
            </p>
            <p>
              Fui desarrollador backend de <strong className="text-slate-100">Boxly</strong>, un sistema de gestión para talleres
              mecánicos que ganó el 1.º puesto a nivel institucional y está certificado por el instituto y{' '}
              <strong className="text-slate-100">SaltaDev</strong>.
            </p>
            <p>
              Antes de programar trabajé más de 5 años en soporte técnico y sistemas de seguridad electrónica, algo que me dejó
              trato con clientes y una forma práctica de diagnosticar y resolver fallas.
            </p>
          </div>

          <dl className="mt-8 grid gap-x-6 gap-y-4 sm:grid-cols-2">
            {datos.map(([k, v]) => (
              <div key={k} className="border-b border-line/50 pb-2">
                <dt className="text-xs uppercase tracking-wider text-accent">{k}</dt>
                <dd className="mt-0.5 text-sm break-words">{v}</dd>
              </div>
            ))}
          </dl>

          <a href={perfil.cv} download className="btn btn-primary mt-8">
            <FaDownload aria-hidden /> Descargar CV
          </a>
        </Reveal>
      </div>

      <div className="mt-24 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {stats.map(({ icon: Icon, valor, label }, i) => (
          <Reveal key={label} delay={i * 0.08}>
            <div className="h-full rounded-2xl bg-gradient-to-br from-card-2 to-card p-6 text-center ring-1 ring-line/60">
              <Icon className="mx-auto text-2xl text-accent" aria-hidden />
              <p className="mt-3 font-display text-4xl font-extrabold">{valor}</p>
              <p className="mt-1 text-sm text-muted">{label}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
