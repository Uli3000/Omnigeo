# 🌍 OmniGeo

Aplicación web para estudiar y practicar geografía mundial. Aprende países, capitales y ubicaciones a través de un modo de estudio interactivo y un sistema de quiz desafiante.

**[Demo en vivo](https://omni-geo.vercel.app)**

---

## Funcionalidades

### Modo Estudio
- Tabla completa de países por continente con bandera, capital y subregión
- Búsqueda y filtro por nombre de país o capital
- Modal de mapa interactivo que muestra la ubicación exacta de cada país
- Ficha detallada del país con fotos (Unsplash), lugares culturales, curiosidades y estadísticas clave

### Modo Quiz
- Mapa SVG interactivo con zoom dinámico por subregión
- Países resaltados aleatoriamente — escribe el nombre para responder
- Sistema de pistas progresivas: cantidad de letras → primera letra → patrón de letras reveladas
- Modo capitales opcional — también pregunta la capital después de cada país
- Función de saltar con revelación del nombre
- Feedback visual en el mapa: correcto (verde), fallido (rojo), saltado (gris), actual (azul)
- Resultados de sesión con score, tiempo, aciertos a la primera y lista de países fallidos

### Historial y AI Coach
- Historial de sesiones guardado localmente (localStorage)
- Mapa de calor de actividad mensual
- AI Coach con Google Gemini — analiza tus patrones de error entre sesiones y da consejos de estudio personalizados

### Internacionalización
- Soporte completo en Español / Inglés
- Detecta automáticamente el idioma del navegador en la primera visita
- Preferencia de idioma guardada en localStorage
- Nombres de países aceptados en ambos idiomas durante el quiz

---

## Stack Tecnológico

| Capa | Tecnología |
|---|---|
| Framework | Next.js 15 (App Router) |
| Lenguaje | TypeScript |
| Estilos | Tailwind CSS |
| Estado global | Zustand |
| Mapas | React Simple Maps + World Atlas GeoJSON |
| Datos de países | RestCountries API |
| Fotos | Unsplash API |
| AI Coach | Google Gemini API |
| Almacenamiento | localStorage |

------------------------------------------------------

# 🌍 OmniGeo

A web application for studying and practicing world geography. Learn countries, capitals and locations through an interactive study mode and a challenging quiz system.

**[Live Demo](https://omni-geo.vercel.app)**

---

## Features

### Study Mode
- Complete table of countries by continent with flag, capital and subregion
- Search and filter by country name or capital
- Interactive map modal showing the exact location of each country
- Detailed country profile with photos (Unsplash), cultural landmarks, curiosities and key stats

### Quiz Mode
- Interactive SVG map with dynamic zoom by subregion
- Countries highlighted randomly — type the name to answer
- Progressive hint system: letter count → first letter → letter pattern reveal
- Optional capitals mode — also asks for the capital after each country
- Skip functionality with name reveal
- Color-coded map feedback: correct (green), failed (red), skipped (gray), current (blue)
- Session results with score, time, first-try count and failed countries list

### History & AI Coach
- Session history stored locally (localStorage)
- Monthly activity heatmap
- AI Coach powered by Google Gemini — analyzes your error patterns across sessions and gives personalized study advice

### Internationalization
- Full Spanish / English support
- Auto-detects browser language on first visit
- Language preference saved to localStorage
- Country names accepted in both languages during the quiz

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Global state | Zustand |
| Maps | React Simple Maps + World Atlas GeoJSON |
| Country data | RestCountries API |
| Photos | Unsplash API |
| AI Coach | Google Gemini API |
| Storage | localStorage |

---
