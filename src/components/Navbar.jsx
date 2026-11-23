import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { FaBars, FaXmark, FaDownload } from 'react-icons/fa6'
import { nav, perfil } from '../data'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition duration-300 ${
        scrolled || open ? 'border-b border-line/60 bg-ink/80 backdrop-blur-md' : ''
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5" aria-label="Principal">
        <a href="#inicio" className="flex items-center gap-2 font-display text-lg font-bold">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-accent-2 text-sm text-ink">
            GU
          </span>
          <span>
            {perfil.nombre}
            <span className="text-accent">.</span>
          </span>
        </a>

        <ul className="hidden items-center gap-7 md:flex">
          {nav.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="text-sm text-muted transition hover:text-accent">
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a href={perfil.cv} download className="btn btn-primary hidden !px-5 !py-2 md:inline-flex">
          <FaDownload aria-hidden /> CV
        </a>

        <button
          type="button"
          className="text-2xl md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
        >
          {open ? <FaXmark /> : <FaBars />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden px-5 md:hidden"
          >
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={() => setOpen(false)} className="block border-b border-line/40 py-3 text-muted hover:text-accent">
                  {item.label}
                </a>
              </li>
            ))}
            <li className="py-4">
              <a href={perfil.cv} download className="btn btn-primary w-full justify-center">
                <FaDownload aria-hidden /> Descargar CV
              </a>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  )
}
