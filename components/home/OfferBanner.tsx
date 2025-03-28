import Button from "../shared/Button";
import FixedBackgroundSection from "../shared/FixedBackgroundSection";

export default async function OfferBanner() {
  return (
    <FixedBackgroundSection
      color="gray-700"
      img="/images/pock.jpg"
      className="p-[6em_0_4em_0] text-center relative flex flex-col items-center gap-6"
    >
      <h2 className="uppercase">ARTEMISIA, HONIG oder doch etwas anderes?</h2>

      <p>
        Schon bald: Frisch geerntete, saisonale Gemüsekisten aus unmittelbarer Feldnähe.
        <br />
        Erleben Sie Nachhaltigkeit und entdecken Sie den wahren Geschmack der Natur!
      </p>

      <Button href="/sortiment" text="Zu unseren Angeboten" variant="default" size="small" />
    </FixedBackgroundSection>
  );
}
