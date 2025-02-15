import Button from "@/components/shared/Button";
import Default, {
  Paragraph,
  Titel,
  Img,
} from "@/layouts/Default";

export default function Gemuesekiste() {
  return (
    <Default title="Gemüsekiste" img="/images/kartoffel.jpeg">
      <Titel titel="Was hat es sich mit unserer Gemüsekiste aufsich" />
      <Paragraph text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet." />
      <Img src="/images/kartoffel.jpeg" alt="Kartoffel" />
      <Paragraph text="Coming soon: Fresh, seasonal vegetable boxes straight from our field. Support sustainable farming and enjoy nature's best!" />
      <Button text="Gemüsekiste Sichern!" variant="secondary" size="small" />
    </Default>
  );
}
