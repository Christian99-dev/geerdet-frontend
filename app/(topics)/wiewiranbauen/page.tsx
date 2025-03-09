import React from "react";
import Layout from "@/components/shared/Layout";
import { fetchTopic } from "@/services/cms/local";

export default async function Datenschutz() {
  const Topic = await fetchTopic("wiewiranbauen");
  if (!Topic) {
    return {
      statusCode: 500,
      message: "Internal Server Error",
    };
  }
  const { pageTitle, img } = Topic;

  return (
    <Layout title={pageTitle} img={img}>
      <h2>Geerdet - Wie wir anbauen und warum</h2>
      <p>
        2023 gründeten wir den landwirtschaftlichen Betrieb geerdet in
        Taunusstein. Wir wirtschaften seither auf zwei Flächen:
      </p>
      <ul>
        <li>
          1,6 ha Grünland zwischen Wehen und Wingsbach, das wir mit vielen
          Bäumen und Sträuchern bereichert haben (Beeren, Obst, Nüsse).
        </li>
        <li>
          3,6 ha Ackerland am Ortsausgang von Wehen, welches wir seit 2024 in
          ein Agroforstsystem verwandeln - mit verschiedensten Arten von Bäumen,
          Sträuchern und Kräutern. Seit 2025 haben wir für einen Marktgarten als
          SoLawi die Arbeit aufgenommen. Vorerst wollen wir ca. 25 wöchentliche
          Gemüsekisten für je 2 Personen anbieten, in den Folgejahren darf die
          Solidargemeinschaft gerne wachsen. 🌱
        </li>
      </ul>
      <p>
        Natürlich gehört auch eine kleine Imkerei zu geerdet. Und weil jeder Ort
        anders schmeckt, hat der Honig es auch in sich.
      </p>
      <h2>Wie das Agroforstsystem bei geerdet funktioniert</h2>
      <p>
        Agroforst bedeutet, dass unser Acker- und Gemüsebau von den gepflanzten
        Bäumen und Sträuchern rundherum profitiert. Bei der Strukturierung des
        Landes schon für morgen mit:
      </p>
      <p>
        Entlang der Nord-Südachse pflanzen wir Bäume und Sträucher in
        unterschiedlicher Höhe. Sie sind künftig dafür zuständig, die
        Anbauflächen halbtags zu beschatten. Ihr Wurzelgeflecht hält außerdem
        die Feuchtigkeit im Boden. Davon profitiert unser Gemüse, das zwischen
        den Gehölzen wächst. Die Hecken wachsen gleichzeitig zu Windbrechern
        heran.
      </p>
      <h2>Unser Fokus: Biodiversität und Artenschutz</h2>
      <p>Wir setzen auf Mischkulturen:</p>
      <ul>
        <li>auf der Kraut- und Gemüseebene</li>
        <li>auf der Strauchebene</li>
        <li>mit kleinen und großen Bäumen</li>
      </ul>
      <p>
        So wirken wir einem katastrophalen Absterben von Tier- und
        Pflanzenarten, wie es bei Monokulturen in den letzten Jahren zum Problem
        geworden ist, entgegen. Durch das Anlegen von Hecken aus Wild- und
        Nutzgehölzen entstehen kleine Refugien. In den ersten 2 Jahren kehren
        die Insekten - und nach 3 bis 5 Jahren die Vögel und kleinen Tiere
        zurück. Unsere Felder sind laut. Im Sommer summt und brummt und singt es
        überall.
      </p>
      <p>Unsere größten Fans im Grünland 2024: Äskulapnatter und Salamander</p>
      <p>Unsere größten Fans auf dem Acker 2024: Stieglitze und Feldhasen</p>
      <h2>Unsere Arbeit: ökologisch, regenerativ und naturnah</h2>
      <p>
        Wir setzen auf Handarbeit und kleine Maschinen, um Bodenverdichtung zu
        minimieren. Wir wollen das Bodenleben so wenig wie möglich bei der
        Humusbildung stören. Darum pflügen wir nicht. Stattdessen mulchen wir
        und sorgen für Bodendecker oder Unterbepflanzung. So bleibt der Boden
        feucht und Regenwasser verdunstet nicht gleich.
      </p>
      <p>
        Überdüngung wird vermieden und die Nährstoffauswaschung reduziert. Der
        Boden erholt sich.
      </p>
      <h2>Unser Beitrag zum Klimaschutz</h2>
      <p>
        Durch den Anbau von Mischkulturen kreieren wir dauerhaft ein feuchteres,
        kühleres Mikroklima. Die Brandgefahr sinkt und Überschwemmungen werden
        vermieden. Unsere Art der Bepflanzung bietet Wind- und Erosionsschutz.
      </p>
      <p>
        Große Visionen - viele kleine Bäume: Und mit jedem Jahr kommen wir
        unseren Zielen einen Schritt näher.
      </p>
      <h2>Unser Vertrauenslabel: „geerdet“</h2>
      <p>
        Auch wenn wir mit unserer SoLaWi kein Bio-Label anstreben, ist es uns
        ein Herzensanliegen, richtig gesunde Lebensmittel anzubauen. Du hast es
        hier mit Gemüse zu tun, das nicht chemisch behandelt worden ist: Weder
        mit giftigen Spritzmitteln, noch mit künstlichen Düngemitteln (nicht
        einmal mit Kupfer, wie es oft in der Bio-Landwirtschaft verwendet wird).
      </p>
      <p>
        Und sollten die Gemüseblätter einmal Löcher haben, dann denke immer
        daran: Wenn sogar die Insekten es lecker finden, kann Dein Gemüse auf
        keinen Fall giftig sein.
      </p>
      <p>Komm mit aufs Feld</p>
    </Layout>
  );
}
