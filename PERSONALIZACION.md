# 🎨 Guía de Personalización Rápida

Esta guía te ayudará a personalizar tu portfolio con tu información real de LinkedIn.

## 📝 Pasos para Personalizar

### 1. Información Personal Básica

Abre `app/page.js` y busca estas líneas para actualizar:

**Hero Section (líneas ~60-80):**
```javascript
<span className="name">Nicolás Alejandro González</span>
<span className="typing-text">Desarrollador Web Full Stack</span>
```
- Cambia el nombre y título según tu perfil de LinkedIn
- Actualiza la descripción con tu propuesta de valor

**Enlaces Sociales (líneas ~73-82):**
```javascript
<a href="https://www.linkedin.com/in/nicolas-alejandro-gonzalez-3b386510/" ...>
<a href="https://github.com/tuusuario" ...>
<a href="mailto:tu.email@ejemplo.com" ...>
```
- Actualiza el enlace de LinkedIn (ya está correcto)
- Agrega tu usuario real de GitHub
- Cambia el email de contacto

### 2. Sección "Sobre Mí"

**Ubicación:** `app/page.js` líneas ~95-122

Reemplaza los párrafos con tu información de LinkedIn:
- Tu resumen profesional
- Tus especialidades y tecnologías
- Tu propuesta de valor

**Estadísticas (líneas ~110-120):**
```javascript
<span className="stat-number">5+</span>  // Años de experiencia
<span className="stat-number">20+</span> // Proyectos completados
<span className="stat-number">100%</span> // Satisfacción
```

### 3. Habilidades Técnicas

**Ubicación:** `app/page.js` líneas ~135-175

Actualiza las habilidades según tu experiencia de LinkedIn:

**Frontend:**
```javascript
<SkillBar name="HTML5 & CSS3" progress={95} />
<SkillBar name="JavaScript (ES6+)" progress={90} />
<SkillBar name="React.js" progress={85} />
```

**Backend:**
```javascript
<SkillBar name="Node.js" progress={88} />
<SkillBar name="Python" progress={82} />
```

**Herramientas:**
```javascript
<SkillBar name="Git & GitHub" progress={90} />
<SkillBar name="Docker" progress={75} />
```

💡 **Tip:** Ajusta los valores de `progress` (0-100) según tu nivel real.

### 4. Experiencia Profesional

**Ubicación:** `app/page.js` líneas ~180-235

Reemplaza con tu experiencia de LinkedIn:

```javascript
<TimelineItem
  title="Tu Puesto Actual"
  company="Nombre de la Empresa"
  date="Mes Año - Presente"
  description={[
    'Responsabilidad 1',
    'Responsabilidad 2',
    'Logro importante',
    'Otra responsabilidad'
  ]}
  technologies={['Tech1', 'Tech2', 'Tech3']}
/>
```

📌 **Importante:** Copia la información exacta de tu perfil de LinkedIn:
- Título del puesto
- Nombre de la empresa
- Fechas (formato: "Mes Año - Mes Año" o "Presente")
- Responsabilidades y logros
- Tecnologías utilizadas

### 5. Proyectos

**Ubicación:** `app/page.js` líneas ~240-290

Actualiza con tus proyectos reales:

```javascript
<ProjectCard
  icon="fa-nombre-icono"  // Busca en Font Awesome
  title="Nombre del Proyecto"
  description="Descripción corta del proyecto y su impacto"
  technologies={['React', 'Node.js', 'MongoDB']}
/>
```

En los enlaces del proyecto (líneas ~389-392):
```javascript
<a href="#" className="project-link">  // Cambia "#" por URL real
<a href="#" className="project-link">  // URL del repositorio GitHub
```

### 6. Información de Contacto

**Ubicación:** `app/page.js` líneas ~295-330

```javascript
<a href="mailto:tu.email@ejemplo.com">tu.email@ejemplo.com</a>
<p>Buenos Aires, Argentina</p>  // Tu ubicación real
```

También actualiza el Footer (líneas ~335-360) con los mismos enlaces.

### 7. Metadatos SEO

**Ubicación:** `app/layout.js` líneas ~3-9

```javascript
export const metadata = {
  title: 'Tu Nombre | Desarrollador Web Full Stack',
  description: 'Tu descripción profesional de LinkedIn',
  keywords: 'tus, palabras, clave, tecnologías',
  authors: [{ name: 'Tu Nombre Completo' }],
}
```

## 🎨 Personalización de Colores

**Ubicación:** `app/globals.css` líneas ~8-19

```css
:root {
  --primary-color: #3b82f6;     /* Azul principal */
  --secondary-color: #8b5cf6;   /* Púrpura */
  --accent: #06b6d4;             /* Cyan/Turquesa */
}
```

### Combinaciones de colores sugeridas:

**Opción 1 - Profesional Azul:**
```css
--primary-color: #3b82f6;
--secondary-color: #1e40af;
--accent: #06b6d4;
```

**Opción 2 - Moderno Verde:**
```css
--primary-color: #10b981;
--secondary-color: #059669;
--accent: #34d399;
```

**Opción 3 - Vibrante Púrpura:**
```css
--primary-color: #8b5cf6;
--secondary-color: #7c3aed;
--accent: #a78bfa;
```

## 📸 Agregar Foto de Perfil

**Ubicación:** `app/page.js` línea ~127

Reemplaza:
```javascript
<div className="image-placeholder">
  <i className="fas fa-user-tie"></i>
</div>
```

Con:
```javascript
<img 
  src="/images/profile.jpg" 
  alt="Tu Nombre" 
  style={{
    width: '250px',
    height: '250px',
    borderRadius: '50%',
    objectFit: 'cover',
    boxShadow: '0 20px 60px rgba(59, 130, 246, 0.3)'
  }}
/>
```

Y coloca tu foto en `public/images/profile.jpg`

## 🔗 Iconos de Font Awesome

Busca iconos en: https://fontawesome.com/icons

Ejemplos útiles:
- `fa-shopping-cart` - E-commerce
- `fa-chart-line` - Analytics
- `fa-mobile-alt` - Aplicaciones móviles
- `fa-rocket` - Startups
- `fa-database` - Bases de datos
- `fa-cloud` - Cloud computing
- `fa-code` - Desarrollo
- `fa-paint-brush` - Diseño

## ✅ Checklist de Personalización

- [ ] Nombre y título profesional
- [ ] Enlaces a LinkedIn, GitHub y Email
- [ ] Descripción "Sobre Mí" de LinkedIn
- [ ] Estadísticas actualizadas
- [ ] Lista de habilidades técnicas
- [ ] Experiencia profesional completa
- [ ] Proyectos reales con enlaces
- [ ] Información de contacto
- [ ] Foto de perfil
- [ ] Metadatos SEO
- [ ] Colores personalizados (opcional)

## 🚀 Después de Personalizar

1. Guarda todos los archivos
2. Verifica en el navegador: http://localhost:3000
3. Revisa cada sección cuidadosamente
4. Prueba en móvil (responsive)
5. Compila para producción: `npm run build`
6. Despliega en Vercel o tu plataforma preferida

## 💡 Tips Profesionales

1. **Sé Conciso:** Las descripciones deben ser claras y directas
2. **Usa Números:** Los logros con métricas son más impactantes
3. **Mantén Actualizado:** Actualiza regularmente con nuevos proyectos
4. **SEO:** Usa palabras clave relevantes en tus descripciones
5. **Testimonios:** Considera agregar una sección de recomendaciones de LinkedIn
6. **Blog:** Agrega un enlace a tu blog técnico si tienes uno

## 🐛 Solución de Problemas

**El servidor no inicia:**
```bash
npm install
npm run dev
```

**Los cambios no se ven:**
- Guarda el archivo (Ctrl+S)
- Recarga el navegador (Ctrl+R)
- Limpia caché: Ctrl+Shift+R

**Errores de sintaxis:**
- Verifica comillas y corchetes
- Revisa la consola del navegador (F12)
- Busca el error en la terminal

## 📞 ¿Necesitas Ayuda?

- Revisa el README.md para más detalles técnicos
- Consulta la documentación de Next.js: https://nextjs.org/docs
- Busca el error específico en Google/Stack Overflow

---

**¡Suerte con tu portfolio! 🚀**

Tu portfolio es tu carta de presentación digital. Tómate el tiempo para hacerlo bien.