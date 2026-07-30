import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[70vh] max-w-3xl flex-col items-start justify-center px-5 py-32 sm:px-8">
      <p className="font-mono text-xs uppercase tracking-[0.18em] text-gold">404</p>
      <h1 className="mt-6 text-5xl font-medium tracking-[-0.05em] text-paper">
        This route is not part of the system.
      </h1>
      <p className="mt-5 max-w-xl text-lg leading-8 text-steel">
        Return to the Solyon Technologies overview and continue from a verified
        path.
      </p>
      <Link
        className="mt-8 rounded-full bg-gold px-5 py-3 text-sm font-semibold text-ink"
        href="/en"
      >
        Return home
      </Link>
    </div>
  );
}
