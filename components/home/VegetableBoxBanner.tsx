import Button from "../shared/Button";
import FixedBackgroundSection from "../shared/FixedBackgroundSection";

export default async function VegetableBoxBanner() {
  return (
    <FixedBackgroundSection
      color="gray-700"
      img="/images/kartoffel.jpeg"
      className="p-[6em_0_4em_0] text-center relative flex flex-col items-center gap-6"
    >
      <h2 className="uppercase">Gemüsekisten Abonnement</h2>

      <p>
        Demnächst: Frische, saisonale Gemüsekisten direkt von unserem Feld.
        <br />
        Unterstütze nachhaltige Landwirtschaft und genieße das Beste der Natur!
      </p>

      <Button text="Gemüsekiste Sichern!" href="/gemuesekiste" variant="default" size="small" />
    </FixedBackgroundSection>
  );
}
