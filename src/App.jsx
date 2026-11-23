import { MotionConfig } from 'motion/react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Recognition from './components/Recognition'
import Journey from './components/Journey'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Recognition />
        <Journey />
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  )
}
