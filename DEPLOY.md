# 🚀 Guía de Despliegue - Portfolio Next.js

Esta guía te ayudará a desplegar tu portfolio en producción.

---

## 📋 Pre-requisitos

Antes de desplegar, asegúrate de:

- ✅ Haber revisado toda la información en http://localhost:3000
- ✅ Actualizar el email real en `app/page.js`
- ✅ Actualizar tu usuario de GitHub en `app/page.js`
- ✅ (Opcional) Agregar tu foto de perfil
- ✅ (Opcional) Actualizar enlaces de proyectos
- ✅ Probar en diferentes dispositivos (responsive)

---

## 🌐 Opción 1: Vercel (Recomendado)

Vercel es la plataforma oficial de Next.js y es la más fácil de usar.

### Ventajas
- ✅ Despliegue automático desde Git
- ✅ HTTPS gratuito
- ✅ CDN global
- ✅ Dominio personalizado gratis (.vercel.app)
- ✅ Redeployment automático con cada push

### Pasos para Desplegar en Vercel

1. **Crear repositorio en GitHub**
   ```bash
   cd cv
   git init
   git add .
   git commit -m "Initial commit - Portfolio Nicolas Gonzalez"
   ```

2. **Crear repositorio en GitHub.com**
   - Ve a https://github.com/new
   - Nombre: `portfolio-nicolas-gonzalez`
   - Mantén como público o privado según prefieras
   - NO inicialices con README

3. **Conectar y subir código**
   ```bash
   git remote add origin https://github.com/TU_USUARIO/portfolio-nicolas-gonzalez.git
   git branch -M main
   git push -u origin main
   ```

4. **Desplegar en Vercel**
   - Ve a https://vercel.com
   - Click en "Sign Up" (usa tu cuenta de GitHub)
   - Click en "New Project"
   - Importa tu repositorio `portfolio-nicolas-gonzalez`
   - Vercel detectará automáticamente Next.js
   - Click en "Deploy"
   - ¡Listo! Tu sitio estará online en ~2 minutos

5. **Tu URL será**: `https://portfolio-nicolas-gonzalez.vercel.app`

### Configurar Dominio Personalizado (Opcional)

1. En tu proyecto de Vercel, ve a "Settings" → "Domains"
2. Agrega tu dominio personalizado (ej: nicolasgonzalez.com)
3. Sigue las instrucciones para configurar DNS
4. Vercel configurará HTTPS automáticamente

---

## 🔷 Opción 2: Netlify

Similar a Vercel, otra excelente opción.

### Pasos

1. **Preparar el código** (igual que Vercel, pasos 1-3)

2. **Desplegar en Netlify**
   - Ve a https://netlify.com
   - Sign up con GitHub
   - "Add new site" → "Import an existing project"
   - Selecciona tu repositorio
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Click "Deploy"

3. **Tu URL será**: `https://portfolio-nicolas-gonzalez.netlify.app`

---

## 🐙 Opción 3: GitHub Pages

Para sitio estático (requiere exportación).

### Pasos

1. **Instalar dependencia**
   ```bash
   npm install --save-dev @next/static-export
   ```

2. **Modificar `next.config.js`** (crear si no existe)
   ```javascript
   /** @type {import('next').NextConfig} */
   const nextConfig = {
     output: 'export',
     images: {
       unoptimized: true,
     },
   }
   
   module.exports = nextConfig
   ```

3. **Agregar script en `package.json`**
   ```json
   "scripts": {
     "export": "next build && next export"
   }
   ```

4. **Exportar**
   ```bash
   npm run export
   ```

5. **Subir carpeta `out/` a GitHub Pages**

**Nota**: GitHub Pages tiene limitaciones con Next.js (no soporta API routes ni SSR).

---

## 🐳 Opción 4: Docker + VPS

Para mayor control, despliega en tu propio servidor.

### Crear Dockerfile

```dockerfile
FROM node:18-alpine AS base

# Dependencies
FROM base AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

# Builder
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Runner
FROM base AS runner
WORKDIR /app
ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000
ENV PORT 3000

CMD ["node", "server.js"]
```

### Desplegar

```bash
# Construir imagen
docker build -t portfolio-nicolas .

# Ejecutar
docker run -p 3000:3000 portfolio-nicolas
```

---

## 📊 Comparación de Opciones

| Plataforma | Facilidad | Costo | Performance | Recomendado |
|------------|-----------|-------|-------------|-------------|
| **Vercel** | ⭐⭐⭐⭐⭐ | Gratis | ⭐⭐⭐⭐⭐ | ✅ SÍ |
| **Netlify** | ⭐⭐⭐⭐⭐ | Gratis | ⭐⭐⭐⭐ | ✅ SÍ |
| **GitHub Pages** | ⭐⭐⭐ | Gratis | ⭐⭐⭐ | Limitado |
| **Docker/VPS** | ⭐⭐ | $5-20/mes | ⭐⭐⭐⭐ | Avanzado |

---

## ⚙️ Variables de Entorno

Si necesitas variables de entorno (API keys, etc.):

1. **Crea archivo `.env.local`** (no subir a Git)
   ```
   NEXT_PUBLIC_API_URL=https://api.ejemplo.com
   EMAIL_SERVICE_KEY=tu_clave_secreta
   ```

2. **En Vercel/Netlify**
   - Ve a Settings → Environment Variables
   - Agrega las mismas variables

---

## 🔒 Seguridad

Antes de desplegar:

- ✅ Revisa que `.env.local` esté en `.gitignore`
- ✅ No commits con claves API o passwords
- ✅ Actualiza dependencias: `npm update`
- ✅ Revisa alertas de seguridad: `npm audit`

---

## 📈 Optimizaciones Recomendadas

### 1. Habilitar Analytics

**Vercel Analytics** (recomendado)
```bash
npm install @vercel/analytics
```

En `app/layout.js`:
```javascript
import { Analytics } from '@vercel/analytics/react'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
```

### 2. Google Analytics

Agrega en `app/layout.js` dentro de `<head>`:
```javascript
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script dangerouslySetInnerHTML={{
  __html: `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  `
}} />
```

### 3. Sitemap

Crea `app/sitemap.js`:
```javascript
export default function sitemap() {
  return [
    {
      url: 'https://tudominio.com',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}
```

---

## 🎯 Checklist Pre-Despliegue

- [ ] ✅ Información personal actualizada
- [ ] ✅ Email y enlaces correctos
- [ ] ✅ Probado en Chrome, Firefox, Safari
- [ ] ✅ Probado en móvil (responsive)
- [ ] ✅ Sin errores en consola (F12)
- [ ] ✅ Formulario de contacto probado
- [ ] ✅ Links de redes sociales funcionan
- [ ] ✅ Metadata SEO configurada
- [ ] ✅ Velocidad de carga aceptable
- [ ] ✅ Imágenes optimizadas (si agregaste)

---

## 🚀 Comandos Útiles

```bash
# Desarrollo local
npm run dev

# Build de producción
npm run build

# Iniciar servidor de producción (después de build)
npm start

# Verificar errores
npm run lint

# Actualizar dependencias
npm update

# Verificar vulnerabilidades
npm audit

# Limpiar caché
rm -rf .next node_modules
npm install
```

---

## 🐛 Troubleshooting Común

### Error: "Module not found"
```bash
rm -rf node_modules package-lock.json
npm install
```

### Build falla en Vercel
- Verifica que `package.json` tenga todos los scripts correctos
- Revisa los logs de build en Vercel dashboard
- Asegúrate que no hay errores de TypeScript/ESLint

### Sitio muy lento
- Optimiza imágenes (usa WebP)
- Habilita caché en Vercel/Netlify (automático)
- Minimiza componentes pesados

---

## 📞 Soporte

- **Next.js Docs**: https://nextjs.org/docs
- **Vercel Support**: https://vercel.com/support
- **Netlify Docs**: https://docs.netlify.com

---

## 🎉 ¡Felicitaciones!

Una vez desplegado, comparte tu portfolio:

- 📱 LinkedIn: Actualiza tu perfil con la URL
- 🐦 Twitter/X: Anuncia tu nuevo portfolio
- 💼 CV: Agrega el link en tu currículum
- 📧 Email signature: Incluye tu portfolio

---

**Tu portfolio profesional está listo para el mundo! 🌟**

Recuerda mantenerlo actualizado con nuevos proyectos y experiencias.