"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/language";

/**
 * RING CUÁNTICO PRINCIPAL
 */
function QuantumRing({ radius = 2.5, thickness = 0.08, speed = 0.15, color = "#ff9ecf" }) {
  const ref = useRef();

  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.x += delta * speed * 0.3;
    ref.current.rotation.y += delta * speed * 0.5;
  });

  return (
    <mesh ref={ref}>
      <torusGeometry args={[radius, thickness, 64, 256]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={1.4}
        metalness={0.9}
        roughness={0.15}
      />
    </mesh>
  );
}

/**
 * ANILLOS SECUNDARIOS
 */
function RingCluster() {
  return (
    <>
      <QuantumRing radius={2.5} thickness={0.08} speed={0.12} color="#ffb6f0" />
      <group rotation={[0.5, 0.2, 0]}>
        <QuantumRing radius={3.2} thickness={0.06} speed={-0.08} color="#ffd87a" />
      </group>
      <group rotation={[-0.3, -0.4, 0.1]}>
        <QuantumRing radius={1.8} thickness={0.05} speed={0.18} color="#ffe4aa" />
      </group>
    </>
  );
}

/**
 * PARTÍCULAS FONDO
 */
function QuantumParticles() {
  const ref = useRef();

  const count = 400;
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const r = 4.5 + Math.random() * 2.5;
    const angle = Math.random() * Math.PI * 2;
    const y = (Math.random() - 0.5) * 2.5;
    positions[i * 3] = Math.cos(angle) * r;
    positions[i * 3 + 1] = y;
    positions[i * 3 + 2] = Math.sin(angle) * r;
  }

  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.03;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          itemSize={3}
          count={count}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        color="#ffe4ff"
        sizeAttenuation
        transparent
        opacity={0.7}
      />
    </points>
  );
}

/**
 * ESCENA 3D COMPLETA
 */
function QuantumScene() {
  return (
    <>
      <ambientLight intensity={0.2} />
      <pointLight position={[4, 4, 4]} intensity={2.5} color="#ffd27f" />
      <pointLight position={[-4, -2, -4]} intensity={1.5} color="#ff9ed8" />
      <RingCluster />
      <QuantumParticles />
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.4} />
    </>
  );
}

/**
 * HERO PRINCIPAL SOLYON – BILINGÜE
 */
export default function Hero() {
  const kitUrl = process.env.NEXT_PUBLIC_WOMPI_KIT_URL;
  const donateUrl = process.env.NEXT_PUBLIC_WOMPI_DONATE_URL;

  const { lang } = useLanguage();
  const t = lang === "es" ? heroEs : heroEn;

  return (
    <section className="relative overflow-hidden min-h-[85vh] flex items-center justify-center">
      {/* GLOW DE FONDO */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,192,203,0.18),_transparent_60%),radial-gradient(circle_at_bottom,_rgba(255,215,0,0.15),_transparent_55%)]" />

      {/* CANVAS 3D */}
      <div className="absolute inset-0 opacity-[0.75]">
        <Canvas camera={{ position: [0, 0, 7], fov: 40 }}>
          <QuantumScene />
        </Canvas>

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#050505] via-[#050505e6] to-[#050505]" />
      </div>

      {/* CONTENIDO */}
      <div className="relative z-10 section flex flex-col items-center text-center space-y-8">
        {/* LOGO + SLOGAN */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center gap-3"
        >
          <div className="h-16 w-16 rounded-full border border-[#ffb6f0] flex items-center justify-center shadow-[0_0_40px_rgba(255,192,203,0.35)] bg-gradient-to-b from-[#1b1b1b] to-[#050505]">
            <img
              src="/logo-solyon.svg"
              alt="SOLYON Logo"
              className="h-10 w-10 object-contain"
            />
          </div>

          <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-gray-300/80">
            {t.kicker}
          </p>
        </motion.div>

        {/* TÍTULOS */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8, ease: "easeOut" }}
          className="space-y-4 max-w-4xl"
        >
          <h1 className="font-display text-4xl md:text-6xl leading-tight gradient-title">
            {t.title}
          </h1>

          <p className="text-lg md:text-2xl text-gray-100/90">
            {t.subtitleBefore}{" "}
            <span className="text-[#FFD700] font-semibold">
              {t.subtitleHighlight}
            </span>{" "}
            {t.subtitleAfter}
          </p>

          <p className="text-sm md:text-base text-gray-300 max-w-3xl mx-auto">
            {t.description}
          </p>
        </motion.div>

        {/* CTA BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
          className="flex flex-wrap justify-center gap-4 mt-4"
        >
          {/* Kit → Wompi */}
          <a
            href={kitUrl || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="btn px-8 py-3 text-sm md:text-base shadow-[0_0_30px_rgba(255,215,0,0.35)]"
          >
            {t.btnKit}
          </a>

          {/* Ecosistema → página Ecosystem */}
          <a
            href="/ecosystem"
            className="px-8 py-3 rounded-2xl border border-[#FFD700]/60 text-sm md:text-base text-gray-100 hover:bg-[#181818] hover:border-[#FFD700] transition-colors"
          >
            {t.btnEcosystem}
          </a>

          {/* Apoyo → Wompi donaciones */}
          <a
            href={donateUrl || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-2xl bg-[#111111] border border-[#ff9ecf]/60 text-sm md:text-base text-[#ffcee8] hover:bg-[#181818] transition-colors flex items-center gap-2"
          >
            {t.btnSupport}
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br from-[#ff9ecf] to-[#FFD700] text-[0.7rem] text-black shadow-[0_0_18px_rgba(255,158,207,0.9)]">
              ♥
            </span>
          </a>
        </motion.div>

        {/* TEXTO INFERIOR */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.9 }}
          transition={{ delay: 0.45, duration: 0.8 }}
          className="text-xs md:text-sm text-gray-400 max-w-3xl"
        >
          {t.bottom}
        </motion.p>
      </div>
    </section>
  );
}

/* =============================================================
   TEXTOS ES / EN — Manteniendo tu narrativa original
   ============================================================= */

const heroEs = {
  kicker: "No buscamos cambiar el mundo, expandimos la forma de verlo.",
  title: "SOLYON Technologies",
  subtitleBefore: "Tecnología DeepTech soberana que",
  subtitleHighlight: "expande la conciencia humana",
  subtitleAfter: "y transforma negocios, ciudades y vidas reales.",
  description:
    "El primer ecosistema cognitivo creado desde LATAM para el mundo: Arcanum como cerebro, Nexus como sistema nervioso y aplicaciones soberanas que convierten la tecnología en legado e impacto medible.",
  btnKit: "Comprar Kit Premium",
  btnEcosystem: "Conocer ecosistema",
  btnSupport: "Apoyar el ecosistema",
  bottom:
    "Construimos una arquitectura DeepTech integral – motor cognitivo, orquestación multi-agente y aplicaciones soberanas – para que la próxima generación de innovación no dependa de infraestructuras que LATAM no controla.",
};

const heroEn = {
  kicker: "We don’t try to change the world, we expand how we see it.",
  title: "SOLYON Technologies",
  subtitleBefore: "Sovereign DeepTech that",
  subtitleHighlight: "expands human consciousness",
  subtitleAfter: "and transforms businesses, cities and real lives.",
  description:
    "The first cognitive ecosystem created from LATAM for the world: Arcanum as the brain, Nexus as the nervous system and sovereign applications that turn technology into legacy and measurable impact.",
  btnKit: "Buy Premium Kit",
  btnEcosystem: "Explore ecosystem",
  btnSupport: "Support the ecosystem",
  bottom:
    "We build a fully integrated DeepTech architecture – cognitive engine, multi-agent orchestration and sovereign applications – so the next generation of innovation does not depend on infrastructures LATAM does not control.",
};
