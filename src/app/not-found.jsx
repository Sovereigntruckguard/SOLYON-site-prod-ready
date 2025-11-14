// src/app/not-found.jsx
export default function NotFound() {
  return (
    <main className="section py-24 text-center space-y-4">
      <h1 className="font-display text-5xl gradient-gold">404</h1>
      <p className="text-gray-300">Esta ruta no existe dentro del universo SOLYON.</p>
      <a href="/" className="btn mt-4 inline-block">Volver al inicio</a>
    </main>
  );
}
