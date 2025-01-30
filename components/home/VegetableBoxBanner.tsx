import FixedBackgroundSection from "../shared/FixedBackgroundSection";

export default async function VegetableBoxBanner() {
  return (
    <FixedBackgroundSection
      color="gray-500"
      img="/images/kartoffel.jpeg"
      alt="Fresh vegetable box subscription"
      className="p-[6em_0_4em_0] text-center relative"
    >
      <div
        className={`absolute z-[15] bg-gray-500 top-0 left-0 right-0 bottom-0`}
      />

      <h2 className="relative z-20 mb-6 uppercase">
        Vegetable Box Subscription
      </h2>
      <p className="relative z-20">
        Coming soon: Fresh, seasonal vegetable boxes straight from our field.
        <br />
        Support sustainable farming and enjoy nature's best!
      </p>
    </FixedBackgroundSection>
  );
}
