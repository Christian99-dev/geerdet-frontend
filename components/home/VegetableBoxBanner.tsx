import Button from "../shared/Button";
import FixedBackgroundSection from "../shared/FixedBackgroundSection";

export default async function VegetableBoxBanner() {
  return (
    <FixedBackgroundSection
      color="gray-700"
      img="/images/kartoffel.jpeg"
      className="p-[6em_0_4em_0] text-center relative flex flex-col items-center gap-6"
    >
      <h2 className="uppercase">Vegetable Box Subscription</h2>

      <p>
        Coming soon: Fresh, seasonal vegetable boxes straight from our field.
        <br />
        Support sustainable farming and enjoy nature's best!
      </p>

      <Button text="Gemüsekiste Sichern!" variant="default" size="small" />
    </FixedBackgroundSection>
  );
}
