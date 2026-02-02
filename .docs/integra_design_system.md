# INTEGRA — Design Architecture [v2.0]

## 1. Updated Brand Palette
- **Deep Authority (`#4A4063`):** Usar para fondos de alto contraste (sección Manifiesto) y estados activos de CTAs. Reemplaza al azul/verde anterior.
- **Technical Softness (`#C8C6D7`):** Usar para líneas de división (borders), fondos secundarios y etiquetas en Mono.
- **Base:** `#F5F5F5` (Blanco roto) para fondos de lectura y `#0E0E0E` para texto principal.

---

## 2. Website Structure & Copy

### [SECTION 01: THE HERO]
*Diseño: Framer video-frame animation. El texto debe estar en capas superiores con un sutil blending mode 'plus-lighter'*

- **Headline:** OPERACIONES QUE SOSTIENEN EL CRECIMIENTO.
- **Sub-headline:** Auditamos y ejecutamos sistemas operativos para empresas que han perdido el control del margen.
- **CTA (Fondo `#4A4063`, Texto `#F5F5F5`):** Solicitar diagnóstico operativo.

---

### [SECTION 02: DIAGNÓSTICO OPERATIVO]
*Diseño: Grid minimalista. Líneas de separación de 1px en `#C8C6D7`.*

- **[01] MARGEN (Font: Mono):** El beneficio se diluye sin rastro.
- **[02] RIESGO (Font: Mono):** La operación depende de personas, no de procesos.
- **[03] DATOS (Font: Mono):** Decisiones tardías basadas en información incompleta.

**Statement:** "Sin sistema, el crecimiento solo amplifica el desorden."

---

### [SECTION 03: EL MANIFIESTO]
*Diseño: Fondo sólido `#4A4063`. Texto en `#F5F5F5`. Esto crea una "pausa" visual de alta autoridad.*

- **Cuerpo:** "No puede existir alto rendimiento sin salud operativa."
- **Puntos Clave:**
  - Rigor antes que motivación.
  - Recuperar control antes de escalar.
  - La integridad operativa es rentabilidad.

---

### [SECTION 04: SERVICIOS TÉCNICOS]
*Diseño: Tipografía Inter para títulos, JetBrains Mono para los números en color `#4A4063`.*

- **01. Auditoría Operativa:** Visibilidad real de P&L y flujos de caja.
- **02. Arquitectura de Sistemas:** Procesos lean y automatización digital (n8n/AWS).
- **03. Ejecución Directa:** Implementación junto al equipo hasta lograr la continuidad.

---

### [SECTION 05: FILTRO & CONTACTO]
*Diseño: Fondo `#F5F5F5`. El formulario usa el color `#C8C6D7` para los placeholders.*

- **Perfil Integra:** Buscamos operaciones con tracción que necesitan orden técnico, no coaching motivacional.
- **Formulario:** Nombre, Negocio, Principal Fricción, Email.

---

## 3. UX Behavior (Framer Directives)
- **Transitions:** Los cambios de sección deben usar un "Soft Fade" de 300ms.
- **Hover States:** Al pasar el mouse sobre los bloques de diagnóstico, el borde debe cambiar de `#C8C6D7` a `#4A4063`.
- **Scrolling:** Implementar un "Smooth Scroll" para mantener la sensación de precisión técnica.