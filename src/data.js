import {
  FaServer, FaDatabase, FaReact, FaDiagramProject, FaCodeBranch, FaScrewdriverWrench,
  FaCodeCommit, FaTrophy, FaLaptopCode, FaHeadset, FaGithub, FaLinkedinIn, FaWhatsapp, FaInstagram,
} from 'react-icons/fa6'
import {
  SiPython, SiFastapi, SiPostgresql, SiReact, SiJavascript, SiPhp, SiGit, SiGithub,
  SiTailwindcss, SiVite, SiSqlite, SiHtml5, SiCss, SiSqlalchemy, SiPydantic, SiPytest,
  SiMysql, SiLaravel, SiBootstrap, SiSwagger,
} from 'react-icons/si'

const base = import.meta.env.BASE_URL

export const perfil = {
  nombre: 'Gabriel',
  apellido: 'Ulunqui',
  nombreCompleto: 'Fernando Gabriel Ulunqui',
  rol: 'Desarrollador Full-Stack',
  foco: 'Backend · Python · FastAPI · PostgreSQL · React',
  email: 'gabrielulunqui@gmail.com',
  telefono: '+54 9 387 469-7984',
  ubicacion: 'Salta, Argentina',
  estudios: 'Análisis de Sistemas y Desarrollo de Software',
  cv: `${base}CV-Gabriel-Ulunqui.pdf`,
  // Foto de perfil: copiar la imagen a public/ y reemplazar null por `${base}perfil.jpg`
  foto: null,
}

export const redes = [
  { icon: FaGithub, nombre: 'GitHub', usuario: 'GabrielUlunqui', href: 'https://github.com/GabrielUlunqui' },
  { icon: FaLinkedinIn, nombre: 'LinkedIn', usuario: 'gabriel-ulunqui', href: 'https://www.linkedin.com/in/gabriel-ulunqui' },
  { icon: FaWhatsapp, nombre: 'WhatsApp', usuario: '387 469-7984', href: 'https://wa.me/5493874697984' },
  { icon: FaInstagram, nombre: 'Instagram', usuario: '@gabyulunqui', href: 'https://instagram.com/gabyulunqui' },
]

export const nav = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#sobre-mi', label: 'Sobre mí' },
  { href: '#habilidades', label: 'Habilidades' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#trayectoria', label: 'Trayectoria' },
  { href: '#contacto', label: 'Contacto' },
]

export const destacados = [
  { icon: FaServer, titulo: 'Backend', texto: 'APIs REST con Python, FastAPI, SQLAlchemy y Pydantic.' },
  { icon: FaDatabase, titulo: 'Bases de datos', texto: 'Modelado relacional y consultas en PostgreSQL, MySQL y SQLite.' },
  { icon: FaReact, titulo: 'Frontend', texto: 'Interfaces responsive con React, Vite y Tailwind CSS.' },
]

export const stats = [
  { icon: FaTrophy, valor: '1.º', label: 'Puesto institucional con Boxly' },
  { icon: FaCodeCommit, valor: '75+', label: 'Commits en el backend de Boxly' },
  { icon: FaLaptopCode, valor: '7+', label: 'Proyectos publicados en GitHub' },
  { icon: FaHeadset, valor: '5+', label: 'Años en soporte técnico' },
]

export const habilidades = [
  { nombre: 'Python · FastAPI', nivel: 85 },
  { nombre: 'SQL · PostgreSQL', nivel: 80 },
  { nombre: 'HTML · CSS', nivel: 85 },
  { nombre: 'JavaScript · React', nivel: 75 },
  { nombre: 'Git · GitHub', nivel: 80 },
  { nombre: 'PHP · MySQL', nivel: 70 },
]

export const servicios = [
  { icon: FaServer, titulo: 'APIs REST', texto: 'Diseño de endpoints, validación con Pydantic, reglas de negocio y documentación con Swagger/OpenAPI.' },
  { icon: FaDatabase, titulo: 'Modelado de datos', texto: 'DER, tablas y relaciones en PostgreSQL con SQLAlchemy y migraciones con Alembic.' },
  { icon: FaReact, titulo: 'Aplicaciones web', texto: 'Frontends en React que consumen APIs, con componentes reutilizables y diseño responsive.' },
  { icon: FaDiagramProject, titulo: 'Análisis de sistemas', texto: 'Relevamiento de requerimientos, máquinas de estado y contratos de API antes de escribir código.' },
  { icon: FaCodeBranch, titulo: 'Trabajo en equipo', texto: 'Scrum en sprints de 2 semanas, ramas y pull requests en GitHub, tablero en Trello.' },
  { icon: FaScrewdriverWrench, titulo: 'Soporte técnico', texto: 'Service de PC, diagnóstico de fallas e instalación de sistemas de seguridad y CCTV.' },
]

export const experiencia = [
  {
    periodo: '2026',
    titulo: 'Desarrollador Backend · Boxly',
    lugar: 'Proyecto institucional, IES N.º 6001',
    texto: 'Módulo de órdenes de trabajo, máquina de estados, turnos, horarios y métricas por mecánico con FastAPI y PostgreSQL. 1.º puesto institucional.',
  },
  {
    periodo: '2020 - Actualidad',
    titulo: 'Operador de Monitoreo y Técnico Instalador',
    lugar: 'Soluciones Integrales de Seguridad S.I.S',
    texto: 'Gestión de eventos de alarmas en Bykom, soporte telefónico a clientes e instalación de alarmas y CCTV.',
  },
  {
    periodo: 'Independiente',
    titulo: 'Service técnico de PC',
    lugar: 'Clientes particulares',
    texto: 'Mantenimiento preventivo y correctivo, diagnóstico de hardware y software e instalación de sistemas operativos.',
  },
]

export const educacion = [
  {
    periodo: '2025 - 2027',
    titulo: 'Tecnicatura en Análisis de Sistemas y Desarrollo de Software',
    lugar: 'IES N.º 6001 "Manuel Belgrano"',
    texto: 'Cursando 2.º año. Programación, bases de datos, análisis de sistemas y desarrollo web.',
  },
  {
    periodo: '2022 - 2023',
    titulo: 'Licenciatura en Administración (1.º y 2.º año)',
    lugar: 'Universidad Nacional de Salta',
    texto: 'Primeros dos años de la carrera, con base en gestión y organización de empresas.',
  },
  {
    periodo: 'Secundario',
    titulo: 'Técnico Electrónico',
    lugar: 'E.E.T. N.º 3138 "Alberto Einstein"',
    texto: 'Título secundario técnico en electrónica.',
  },
]

export const categorias = ['Todos', 'Backend', 'Full-Stack', 'Frontend']

export const proyectos = [
  {
    titulo: 'Boxly',
    subtitulo: 'Sistema de gestión de taller mecánico',
    categoria: 'Backend',
    destacado: true,
    imagen: `${base}proyectos/boxly-ordenes.png`,
    descripcion: 'Órdenes de trabajo, turnos, inventario, pagos online y portal del cliente. Desarrollé el módulo de órdenes, su máquina de estados, turnos, horarios y métricas.',
    tags: ['FastAPI', 'PostgreSQL', 'SQLAlchemy', 'Alembic', 'React'],
    repo: 'https://github.com/Antony27c/Boxly',
  },
  {
    titulo: 'Gestión de Inventario',
    subtitulo: 'Stock de productos de seguridad electrónica',
    categoria: 'Full-Stack',
    descripcion: 'API REST con CRUD, ajuste de stock validado, filtros y estadísticas; dashboard en React con alertas de stock bajo.',
    tags: ['FastAPI', 'SQLite', 'React', 'Axios'],
    repo: 'https://github.com/GabrielUlunqui/Sistema-de-gestion-de-inventario',
    icon: SiFastapi,
  },
  {
    titulo: 'Sitio S.I.S en PHP',
    subtitulo: 'Programación Web',
    categoria: 'Full-Stack',
    descripcion: 'Sitio corporativo con panel de administración, PHP + MySQL con PDO, sesiones y autenticación, AJAX/JSON, MVC y un módulo en Laravel 12.',
    tags: ['PHP', 'MySQL', 'Laravel', 'MVC'],
    repo: 'https://github.com/GabrielUlunqui/Programacion-Web',
    icon: SiPhp,
  },
  {
    titulo: 'S.I.S Seguridad Electrónica',
    subtitulo: 'SPA corporativa',
    categoria: 'Frontend',
    descripcion: 'Sitio de una empresa de seguridad con React Router, componentes reutilizables y formularios de relevamiento.',
    tags: ['React', 'React Router', 'Bootstrap', 'Vite'],
    repo: 'https://github.com/GabrielUlunqui/pagina-web',
    icon: SiReact,
  },
  {
    titulo: 'App con React',
    subtitulo: 'TP 6',
    categoria: 'Frontend',
    descripcion: 'Contador, lista de tareas, catálogo filtrable y formulario con vista previa en tiempo real usando hooks.',
    tags: ['React', 'Hooks', 'Vite', 'CSS'],
    repo: 'https://github.com/GabrielUlunqui/TP-6-APP-CON-REACT',
    icon: SiVite,
  },
  {
    titulo: 'Productos, Todo y API',
    subtitulo: 'TP 4',
    categoria: 'Frontend',
    descripcion: 'Filtrado de productos, lista de tareas y consumo de una API externa con JavaScript puro.',
    tags: ['JavaScript', 'Fetch API', 'HTML', 'CSS'],
    repo: 'https://github.com/GabrielUlunqui/TP4-PRODUCTO-TODO-Y-API',
    icon: SiJavascript,
  },
  {
    titulo: 'Este portfolio',
    subtitulo: 'Sitio personal',
    categoria: 'Frontend',
    descripcion: 'Empezó como mi primer sitio en HTML y CSS y lo rehice como SPA con animaciones, filtros y despliegue en GitHub Pages.',
    tags: ['React', 'Tailwind CSS', 'Motion', 'Vite'],
    repo: 'https://github.com/GabrielUlunqui/tp1-mi-sitio',
    icon: SiTailwindcss,
  },
]

export const stack = [
  { icon: SiPython, nombre: 'Python' },
  { icon: SiFastapi, nombre: 'FastAPI' },
  { icon: SiSqlalchemy, nombre: 'SQLAlchemy' },
  { icon: SiPydantic, nombre: 'Pydantic' },
  { icon: SiPostgresql, nombre: 'PostgreSQL' },
  { icon: SiMysql, nombre: 'MySQL' },
  { icon: SiSqlite, nombre: 'SQLite' },
  { icon: SiReact, nombre: 'React' },
  { icon: SiJavascript, nombre: 'JavaScript' },
  { icon: SiTailwindcss, nombre: 'Tailwind CSS' },
  { icon: SiVite, nombre: 'Vite' },
  { icon: SiPhp, nombre: 'PHP' },
  { icon: SiLaravel, nombre: 'Laravel' },
  { icon: SiBootstrap, nombre: 'Bootstrap' },
  { icon: SiHtml5, nombre: 'HTML5' },
  { icon: SiCss, nombre: 'CSS3' },
  { icon: SiGit, nombre: 'Git' },
  { icon: SiGithub, nombre: 'GitHub' },
  { icon: SiPytest, nombre: 'pytest' },
  { icon: SiSwagger, nombre: 'Swagger' },
]
