"use client";
import dynamic from 'next/dynamic';

// Importamos el Hero con carga dinámica y deshabilitamos el Server-Side Rendering (SSR)
// Esto evita que Next.js intente compilar el código 3D en el servidor.
const HeroComponent = dynamic(() => import('./Hero'), {
  ssr: false, // ¡La llave mágica! Solo renderiza en el cliente.
  loading: () => <div className="min-h-[85vh] flex items-center justify-center text-xl text-gray-500">Cargando la Arquitectura Cognitiva...</div>
});

export default function DynamicHero() {
    return <HeroComponent />;
}