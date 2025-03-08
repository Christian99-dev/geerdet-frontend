import Button from "@/components/shared/Button";
import FixedBackgroundSection from "@/components/shared/FixedBackgroundSection";
import Icon from "@/components/shared/Icon";
import Link from "@/components/shared/Link";

export default function Theme() {
  return (
    <div className="flex flex-col p-14 gap-4 text-black">
      <div>
        <h1>Überschrift 1 (h1)</h1>
        <h2>Überschrift 2 (h2)</h2>
        <h3>Überschrift 3 (h3)</h3>
        <h4>Überschrift 4 (h4)</h4>
        <h5>Überschrift 5 (h5)</h5>
        <h6>Überschrift 6 (h6)</h6>
      </div>

      <p>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
        rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
        ipsum dolor sit amet.
      </p>

      <div className="bg-footer">
        <Link href="#" text="DAS IST EIN LINK" />
      </div>

      <div className="bg-footer p-5 flex flex-col w-min gap-4">
        <div className="flex gap-4">
          <Button text="Button" variant="default" size="small" />
          <Button text="Button" variant="default" size="default" />
          <Button text="Button" variant="default" size="large" />
        </div>
        <div className="flex gap-4">
          <Button text="Button" variant="primary" size="small" />
          <Button text="Button" variant="primary" size="default" />
          <Button text="Button" variant="primary" size="large" />
        </div>
      </div>

      <div className="flex gap-5  p-5">
        <Icon size="medium" name="import_contacts" color="accent1" />
        <Icon size="medium" name="cruelty_free" color="accent2" />
        <Icon size="medium" name="water_drop" color="accent3" />
        <Icon size="medium" name="egg" color="accent3" />
        <Icon size="medium" name="landscape" color="accent3" />
        <Icon size="medium" name="nature" color="accent3" />
        <Icon size="medium" name="nature_people" color="accent3" />
        <Icon size="medium" name="park" color="accent3" />
        <Icon size="medium" name="spa" color="accent3" />
        <Icon size="medium" name="south" color="accent3" />
      </div>

      <div className="flex gap-5 p-5">
        <Icon size="small" name="import_contacts" color="accent1" />
        <Icon size="small" name="cruelty_free" color="accent2" />
        <Icon size="small" name="water_drop" color="accent3" />
        <Icon size="small" name="egg" color="accent3" />
        <Icon size="small" name="landscape" color="accent3" />
        <Icon size="small" name="nature" color="accent3" />
        <Icon size="small" name="nature_people" color="accent3" />
        <Icon size="small" name="park" color="accent3" />
        <Icon size="small" name="spa" color="accent3" />
        <Icon size="small" name="south" color="accent3" />
      </div>

      <div
        className="
      bg-footer 
      flex 
      justify-center 
      cursor-pointer 
      text-white 
      text-3xl 
      items-center 
      p-4
      
      transform 
      hover:scale-105 
      duration-default 
      transition-transform 
      "
      >
        Hover
      </div>

      <FixedBackgroundSection
        img="/images/kartoffel.jpeg"
        color="gray-500"
        className="h-[10rem] text-white"
      >
        Test
      </FixedBackgroundSection>

      <FixedBackgroundSection
        img="/images/pock.jpg"
        color="gray-700"
        className="h-[10rem] text-white"
      >
        Test
      </FixedBackgroundSection>
    </div>
  );
}
