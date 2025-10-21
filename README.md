# Nuevo Vidamax - Seguros Azteca

Una aplicación web moderna desarrollada en React para la gestión y consulta de información sobre el seguro de vida "Nuevo Vidamax" de Seguros Azteca.

## 📋 Tabla de Contenidos

- [Características](#características)
- [Tecnologías](#tecnologías)
- [Arquitectura](#arquitectura)
- [Instalación](#instalación)
- [Uso](#uso)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Decisiones Técnicas](#decisiones-técnicas)
- [Scripts Disponibles](#scripts-disponibles)
- [Configuración de Desarrollo](#configuración-de-desarrollo)

## ✨ Características

- **Interfaz Responsiva**: Diseño adaptativo para dispositivos móviles y desktop
- **Navegación Intuitiva**: Sistema de navegación con breadcrumbs y tabs
- **Contenido Dinámico**: Sistema de acordeones para preguntas frecuentes
- **Internacionalización**: Sistema de textos centralizado en español
- **Componentes Reutilizables**: Arquitectura basada en componentes modulares
- **Routing Avanzado**: Navegación SPA con React Router
- **Estilos Modernos**: Implementación con SCSS y metodología BEM

## 🛠 Tecnologías

### Frontend
- **React 19.2.0** - Biblioteca de interfaz de usuario
- **TypeScript 5.9.3** - Tipado estático para JavaScript
- **React Router DOM 7.9.4** - Enrutamiento del lado del cliente
- **SCSS/Sass** - Preprocesador de CSS

### Herramientas de Desarrollo
- **Webpack 5.102.1** - Bundler y herramienta de desarrollo
- **Webpack Dev Server 5.2.2** - Servidor de desarrollo con hot reload
- **TypeScript Loader** - Compilación de TypeScript
- **Sass Loader** - Procesamiento de archivos SCSS
- **CSS Loader** - Procesamiento de archivos CSS
- **File Loader** - Gestión de recursos estáticos

## 🏗 Arquitectura

### Estructura de Componentes

```
src/
├── components/          # Componentes reutilizables
│   ├── Accordion.tsx    # Componente de acordeón para FAQs
│   ├── Banner.tsx       # Banner principal de la aplicación
│   ├── Button.tsx       # Componente de botón personalizado
│   ├── Navbar.tsx       # Barra de navegación principal
│   └── SubNavbar.tsx    # Barra de navegación secundaria
├── views/               # Páginas/Vistas principales
│   ├── Condiciones.tsx  # Vista de condiciones generales
│   ├── Descripcion.tsx  # Vista de descripción del producto
│   ├── Planes.tsx       # Vista de planes disponibles
│   └── Siniestro.tsx    # Vista de procedimientos de siniestro
├── routes/              # Configuración de rutas
│   └── routes.tsx       # Definición de rutas de la aplicación
├── assets/              # Recursos estáticos
│   ├── images/          # Imágenes del proyecto
│   ├── icons/           # Iconos SVG
│   └── texts/           # Archivos de internacionalización
├── styles/              # Archivos de estilos
│   ├── components/      # Estilos específicos de componentes
│   ├── views/           # Estilos específicos de vistas
│   ├── _variables.scss  # Variables SCSS globales
│   └── App.scss         # Estilos principales de la aplicación
└── utils/               # Utilidades y helpers
    └── texts.ts         # Utilidad para gestión de textos
```

### Patrón de Arquitectura

La aplicación sigue un **patrón de componentes funcionales** con las siguientes características:

1. **Separación de Responsabilidades**: Cada componente tiene una responsabilidad específica
2. **Composición sobre Herencia**: Los componentes se combinan para crear interfaces complejas
3. **Props Interface**: Comunicación entre componentes mediante props tipadas
4. **Estado Local**: Uso de hooks para manejo de estado en componentes
5. **Routing Declarativo**: Configuración de rutas mediante componentes

## 🚀 Instalación

### Prerrequisitos

- **Node.js** (versión 16 o superior)
- **npm** (incluido con Node.js)

### Pasos de Instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/RodrigoLopez98/nuevo-vidamax.git
   cd nuevo-vidamax
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Verificar la instalación**
   ```bash
   npm start
   ```

La aplicación estará disponible en `http://localhost:3000`

## 💻 Uso

### Desarrollo

Para iniciar el servidor de desarrollo con hot reload:

```bash
npm start
```

### Producción

Para generar el build de producción:

```bash
npm run build
```

El build se generará en la carpeta `dist/` y estará listo para ser desplegado.

## 📁 Estructura del Proyecto

### Componentes Principales

#### `Accordion.tsx`
Componente reutilizable para mostrar contenido colapsable, utilizado principalmente para las preguntas frecuentes.

```typescript
interface AccordionItem {
  question: string;
  answer: React.ReactNode;
}
```

#### `Navbar.tsx`
Barra de navegación principal con soporte para menú móvil y desktop.

#### `SubNavbar.tsx`
Barra de navegación secundaria con breadcrumbs y tabs de navegación.

### Sistema de Rutas

La aplicación implementa un sistema de rutas con las siguientes páginas:

- `/` o `/descripcion` - Descripción del producto
- `/planes` - Información de planes disponibles
- `/siniestro` - Procedimientos en caso de siniestro
- `/condiciones` - Condiciones generales del seguro

### Sistema de Internacionalización

Los textos se gestionan mediante un sistema centralizado:

- **Archivo principal**: `src/assets/texts/texts-es.json`
- **Utilidad**: `src/utils/texts.ts`
- **Función principal**: `getTexts()` - Obtiene todos los textos
- **Función auxiliar**: `getText(path)` - Obtiene un texto específico por ruta

## 🎯 Decisiones Técnicas

### 1. **TypeScript sobre JavaScript**
- **Razón**: Tipado estático para mayor robustez y mantenibilidad
- **Beneficio**: Detección temprana de errores y mejor experiencia de desarrollo

### 2. **SCSS sobre CSS**
- **Razón**: Funcionalidades avanzadas como variables, mixins y anidación
- **Beneficio**: Código más mantenible y escalable

### 3. **Webpack como Bundler**
- **Razón**: Configuración personalizada para optimización y desarrollo
- **Beneficio**: Hot reload, optimización de assets y configuración flexible

### 4. **React Router para SPA**
- **Razón**: Navegación del lado del cliente sin recargas de página
- **Beneficio**: Experiencia de usuario fluida y mejor rendimiento

### 5. **Arquitectura de Componentes Funcionales**
- **Razón**: Simplicidad, hooks de React y mejor testing
- **Beneficio**: Código más limpio y fácil de mantener

### 6. **Sistema de Paths Absolutos**
- **Razón**: Imports más limpios y fáciles de mantener
- **Configuración**: Paths configurados en `tsconfig.json` y `webpack.config.js`

### 7. **Separación de Estilos por Componente**
- **Razón**: Estilos modulares y mantenibles
- **Estructura**: Un archivo SCSS por componente en carpetas organizadas

## 📜 Scripts Disponibles

```json
{
  "start": "webpack serve",           // Servidor de desarrollo
  "build": "webpack --mode production" // Build de producción
}
```

## ⚙️ Configuración de Desarrollo

### Webpack Configuration

La configuración de Webpack incluye:

- **Entry Point**: `./src/index.tsx`
- **Output**: `dist/bundle.js`
- **Loaders**: TypeScript, SCSS, Assets
- **Plugins**: HTML Webpack Plugin, Tsconfig Paths Plugin
- **Dev Server**: Puerto 3000 con hot reload

### TypeScript Configuration

- **Target**: ES6
- **Module**: ESNext
- **JSX**: react-jsx
- **Strict Mode**: Habilitado
- **Path Mapping**: Configurado para imports absolutos

### Estructura de Estilos

- **Variables Globales**: `_variables.scss`
- **Estilos por Componente**: Carpeta `components/`
- **Estilos por Vista**: Carpeta `views/`
- **Metodología**: BEM (Block Element Modifier)

## 📞 Soporte

Para soporte técnico o consultas sobre el proyecto, contactar al equipo de desarrollo.

---

**Versión**: 1.0.0  
**Última actualización**: 2024  
**Licencia**: ISC
