#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');

console.log('🔍 Verificando configuración del entorno AI...\n');

// Verificar que estamos en un proyecto Next.js
try {
  const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
  if (packageJson.dependencies?.next) {
    console.log('✅ Next.js detectado');
  } else {
    console.log('❌ Next.js no encontrado');
  }
} catch (error) {
  console.log('❌ package.json no encontrado');
}

// Verificar shadcn/ui
try {
  const componentsJson = JSON.parse(fs.readFileSync('components.json', 'utf8'));
  if (componentsJson.style && componentsJson.aliases) {
    console.log('✅ shadcn/ui configurado');
  } else {
    console.log('❌ shadcn/ui no configurado correctamente');
  }
} catch (error) {
  console.log('❌ components.json no encontrado');
}

// Verificar MCP server
try {
  execSync('npx shadcn-mcp --version', { stdio: 'pipe' });
  console.log('✅ MCP server instalado');
} catch (error) {
  console.log('❌ MCP server no instalado');
}

// Verificar registry local
try {
  const response = require('http').get('http://localhost:3000', (res) => {
    if (res.statusCode === 200) {
      console.log('✅ Registry local funcionando');
    } else {
      console.log('❌ Registry local no responde correctamente');
    }
  });
  response.on('error', () => {
    console.log('❌ Registry local no está corriendo');
  });
} catch (error) {
  console.log('❌ Error verificando registry local');
}

console.log('\n🎯 Configuración completada!');
console.log('Ahora puedes usar comandos como:');
console.log('- "Generá hero section con navbar + CTA usando componentes KBO UI"');
console.log('- "Construí dashboard con sidebar y cards"');
console.log('- "Agregá formulario de contacto con validación"');
