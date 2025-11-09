export default function Hero() {
  return (
    <header className="section pt-14">
      <div className="flex flex-col items-center text-center gap-6">
        <img src="/logo.png" alt="SOLYON" className="w-28 h-28 object-contain drop-shadow-xl" />
        <h1 className="font-display text-4xl md:text-6xl leading-tight"><span className="gradient-gold">SOLYON Technologies</span></h1>
        <p className="max-w-2xl text-gray-200 text-lg md:text-xl">En SOLYON no buscamos cambiar el mundo, <span className="gradient-gold">expandimos la forma de verlo.</span></p>
        <div className="flex gap-3 mt-2">
          <a href="#comprar" className="btn">Comenzar ahora</a>
          <a href="#alianzas" className="btn" style={{ background: "#2D2D2D", color: "#FFFFFF", border: "1px solid #3a3a3a" }}>Alianzas & Grants</a>
        </div>
      </div>
    </header>
  );
}
