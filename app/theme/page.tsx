import Button from "@/components/shared/Button";
import Icon from "@/components/shared/Icon";
import Link from "@/components/shared/Link";

export default function Theme() {
  return (
    <div className="flex flex-col p-14 gap-4">
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
        <Icon size="medium" name="book" color="accent1" />
        <Icon size="medium" name="bunny" color="accent2" />
        <Icon size="medium" name="drop" color="accent3" />
        <Icon size="medium" name="egg" color="accent3" />
        <Icon size="medium" name="landscape" color="accent3" />
        <Icon size="medium" name="nature" color="accent3" />
        <Icon size="medium" name="nature_people" color="accent3" />
        <Icon size="medium" name="park" color="accent3" />
        <Icon size="medium" name="spa" color="accent3" />
      </div>

      <div className="flex gap-5 bg-background p-5">
        <Icon size="small" name="book" color="accent1" />
        <Icon size="small" name="bunny" color="accent2" />
        <Icon size="small" name="drop" color="accent3" />
        <Icon size="small" name="egg" color="accent3" />
        <Icon size="small" name="landscape" color="accent3" />
        <Icon size="small" name="nature" color="accent3" />
        <Icon size="small" name="nature_people" color="accent3" />
        <Icon size="small" name="park" color="accent3" />
        <Icon size="small" name="spa" color="accent3" />
      </div>
    </div>
  );
}