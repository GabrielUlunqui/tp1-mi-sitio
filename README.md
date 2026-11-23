# Portfolio - Gabriel Ulunqui

Portfolio personal de **Gabriel Ulunqui**, desarrollador full-stack con foco en backend (Python, FastAPI, PostgreSQL y React) y estudiante de Análisis de Sistemas y Desarrollo de Software en el IES N.º 6001 "Manuel Belgrano".

🔗 [Ver sitio en vivo](https://gabrielulunqui.github.io/tp1-mi-sitio/)

## Secciones

- **Inicio:** presentación, áreas principales (backend, bases de datos, frontend) y descarga del CV.
- **Sobre mí:** perfil, datos de contacto y métricas (1.º puesto con Boxly, commits, proyectos, experiencia).
- **Habilidades y servicios:** nivel por tecnología y cómo puedo aportar a un equipo.
- **Proyectos:** grilla filtrable por categoría (Backend, Full-Stack, Frontend) con enlaces a cada repositorio.
- **Reconocimiento:** Boxly, 1.º puesto institucional, certificado por el IES N.º 6001 y SaltaDev.
- **Trayectoria:** línea de tiempo de experiencia y formación.
- **Contacto:** formulario (abre el cliente de correo) y redes.

## Stack

| | |
|---|---|
| UI | React 19 |
| Build | Vite |
| Estilos | Tailwind CSS 4 |
| Animaciones | Motion |
| Íconos | react-icons |
| Deploy | GitHub Pages con GitHub Actions |

## Uso

Requiere Node 20 o superior.

```bash
npm install
npm run dev       # http://localhost:5173/tp1-mi-sitio/
npm run build     # genera dist/
npm run preview   # sirve dist/ en http://localhost:4173/tp1-mi-sitio/
```

## Editar el contenido

Todo el texto (perfil, redes, habilidades, proyectos, experiencia y formación) está en [`src/data.js`](src/data.js). Para agregar un proyecto, sumá un objeto al array `proyectos`.

- **Foto de perfil:** copiá la imagen a `public/` (por ejemplo `public/perfil.jpg`) y en `src/data.js` cambiá `foto: null` por `` foto: `${base}perfil.jpg` ``.
- **CV:** reemplazá `public/CV-Gabriel-Ulunqui.pdf` por la versión nueva.

## Deploy

Cada push a `main` compila y publica el sitio con [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml). La primera vez hay que ir a **Settings → Pages → Build and deployment → Source** y elegir **GitHub Actions**.

## Historia

Este repositorio empezó como el TP 1 de la tecnicatura: mi primer sitio en HTML5 y CSS3. Las notas de ese trabajo están en [`docs/`](docs/).
