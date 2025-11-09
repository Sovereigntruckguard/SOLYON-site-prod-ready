import Hero from "@/components/Hero";
import Vision from "@/components/Vision";
import Ecosystem from "@/components/Ecosystem";
import TechIP from "@/components/TechIP";
import Purchase from "@/components/Purchase";
import PartnersCTA from "@/components/PartnersCTA";

export default function Page() {
  return (
    <main className="space-y-24 pb-24">
      <Hero />
      <Vision />
      <Ecosystem />
      <TechIP />
      <Purchase />
      <PartnersCTA />
      <footer className="section mt-24 border-t border-[#2A2A2A] pt-10 text-sm text-gray-300">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} SOLYON Technologies. All rights reserved.</p>
          <p>Contacto: {process.env.NEXT_PUBLIC_CONTACT_EMAIL}</p>
        </div>
      </footer>
    </main>
  );
}
