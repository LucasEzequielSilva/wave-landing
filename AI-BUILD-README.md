# 🤖 AI Build Environment - Formix Landing

## ✅ Configuración Completada

Tu entorno está listo para construir sitios con AI usando:

- ✅ **Next.js + TypeScript + Tailwind**
- ✅ **shadcn/ui** configurado
- ✅ **MCP server** para shadcn
- ✅ **Registry local** en localhost:3000
- ✅ **TweakCN** disponible para temas

## 🚀 Cómo Usar

### Comandos Básicos
```bash
# Agregar componentes shadcn
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add input

# Verificar configuración
node verify-setup.js
```

### Prompts de AI que puedes usar:

#### 🎨 **Landing Pages**
- "Generá hero section con navbar + CTA usando componentes KBO UI nivel 2, estilo dark neobrutalism"
- "Construí landing page completa para SaaS con pricing, testimonials y FAQ"
- "Creá sección de features con cards y animaciones"

#### 📊 **Dashboards**
- "Construí dashboard con sidebar, cards de métricas y tabla de datos"
- "Generá panel de admin con formularios y modales"
- "Creá dashboard de analytics con gráficos y KPIs"

#### 🎯 **Componentes Específicos**
- "Agregá formulario de contacto con validación y estados de loading"
- "Creá carousel de testimonials con autoplay"
- "Generá pricing table con toggle anual/mensual"

#### 🎨 **Temas y Estilos**
- "Aplicá tema dark mode con TweakCN"
- "Cambiá colores a paleta neobrutalism"
- "Ajustá tipografía a estilo moderno"

## 🔧 Servicios Disponibles

### MCP Servers
- **shadcn**: `npx shadcn-mcp` (puerto 3176)
- **kbo-patterns**: Registry local en localhost:3000
- **tweakcn**: https://mcp.tweakcn.com

### Registries
- **shadcn**: Componentes base
- **kbo-patterns**: 1100+ patterns avanzados
- **tweakcn**: Temas y estilos

## 📁 Estructura del Proyecto

```
formix-landing/
├── app/                    # Next.js App Router
├── components/             # Componentes React
│   ├── ui/                # shadcn/ui components
│   └── ...                # Componentes custom
├── kbo-registry/          # Registry local
├── components.json        # Configuración shadcn
├── mcp.json              # Configuración MCP
└── .cursor/mcp.json      # Configuración Cursor
```

## 🎯 Ejemplo de Uso

1. **Prompt**: "Generá hero section con navbar + CTA"
2. **AI ejecuta**: 
   - `npx shadcn@latest add button`
   - `npx shadcn@latest add navigation-menu`
   - Crea componentes custom
   - Aplica estilos con Tailwind
3. **Resultado**: Hero section completo y funcional

## 🔄 Comandos de Mantenimiento

```bash
# Reiniciar registry local
cd kbo-registry && pnpm dev

# Verificar MCP server
npx shadcn-mcp --help

# Actualizar componentes
npx shadcn@latest add --all
```

---

**¡Listo para construir! 🚀**

Ahora puedes pedirme cualquier página, componente o funcionalidad y la construiré automáticamente usando el entorno configurado.
