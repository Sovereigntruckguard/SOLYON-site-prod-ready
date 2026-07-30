import Link from "next/link";

export default function DynamicHero() {
  return (
    <section className="relative min-h-[88vh] w-full overflow-hidden border-b border-white/10">
      <video
        className="absolute inset-0 h-full w-full object-cover opacity-45"
        src="/hero/hero-solyon.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />
      <div className="absolute inset-0 bg-[#07090c]/60" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#07090c] via-[#07090c]/75 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#07090c] via-transparent to-[#07090c]/50" />

      <div className="relative z-10 mx-auto flex min-h-[88vh] max-w-7xl items-center px-6 py-24 md:px-10">
        <div className="max-w-4xl">
          <p className="mb-7 text-xs font-semibold uppercase tracking-[0.28em] text-[#E6BC68]">
            Applied AI laboratory · Medellin, Colombia
          </p>

          <h1 className="max-w-4xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-white md:text-7xl">
            Operational intelligence built from real-world evidence.
          </h1>

          <p className="mt-7 max-w-3xl text-lg leading-relaxed text-white/70 md:text-xl">
            SOLYON Technologies transforms years of operating knowledge, documented workflows and field data into artificial intelligence systems for complex environments.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/technology"
              className="inline-flex items-center justify-center rounded-full bg-[#E6BC68] px-7 py-3 text-sm font-semibold text-[#090b0e] transition hover:bg-[#F0CA7E]"
            >
              Explore our technology
            </Link>
            <Link
              href="/ecosystem"
              className="inline-flex items-center justify-center rounded-full border border-white/25 px-7 py-3 text-sm font-semibold text-white transition hover:border-white/50 hover:bg-white/5"
            >
              See the ecosystem
            </Link>
          </div>

          <div className="mt-14 grid max-w-3xl gap-5 border-t border-white/15 pt-7 text-sm text-white/55 sm:grid-cols-3">
            <p>Technology company and AI laboratory in Colombia</p>
            <p>Operational validation through trucking and insurance workflows in the United States</p>
            <p>Institutional mobility technology developed in Medellin</p>
          </div>
        </div>
      </div>
    </section>
  );
}
