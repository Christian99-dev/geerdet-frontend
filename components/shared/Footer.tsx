import Link from "./Link";

export default async function Footer() {
  return (
    <section className="p-[6em_0_4em_0] text-center bg-background">
      <div className="flex justify-center gap-8 mb-12">
        <Link text="IMPRESSUM" href="#" />
        <Link text="Haftungsausschluss" href="#" />
        <Link text="Datenschutzerklärung" href="#" />
      </div>

      <p className="flex justify-center gap-4 uppercase text-gray-50 tracking-wide text-9">
        © 2024 | geerdet, Iris Keller-Hoenisch | Alle Rechte vorbehalten
      </p>
    </section>
  );
};
