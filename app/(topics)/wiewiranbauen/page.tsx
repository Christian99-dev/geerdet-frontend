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
      <h3>
        <span className="geerdet">Geerdet</span> - Wie wir anbauen und warum
      </h3>
      <p>
        2023 gründeten wir den landwirtschaftlichen Betrieb{" "}
        <span className="geerdet">geerdet</span> in Taunusstein. Wir
        wirtschaften seither auf zwei Flächen:
      </p>
      <ul className="list-disc list-inside">
        <li>
          <span>1,6 ha Grünland</span> zwischen Wehen und Wingsbach, das wir mit
          vielen Bäumen und Sträuchern bereichert haben (Beeren, Obst, Nüsse).
        </li>
        <li>
          <span>3,6 ha Ackerland</span> am Ortsausgang von Wehen, welches wir
          seit 2024 in ein <span>Agroforstsystem</span> verwandeln - mit
          verschiedensten Arten von Bäumen, Sträuchern und Kräutern. Seit 2025
          haben wir für einen Marktgarten als SoLawi die Arbeit aufgenommen.
          Vorerst wollen wir ca. 25 wöchentliche Gemüsekisten für je 2 Personen
          anbieten, in den Folgejahren darf die Solidargemeinschaft gerne
          wachsen. 🌱
        </li>
      </ul>
      <p>
        Natürlich gehört auch eine kleine Imkerei zu{" "}
        <span className="geerdet">geerdet</span>. Und weil jeder Ort anders
        schmeckt, hat der Honig es auch in sich.
      </p>
      <h2>
        Wie das Agroforstsystem bei <span className="geerdet">geerdet</span>{" "}
        funktioniert
      </h2>
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
      <p>
        <span>Unser Fokus: Biodiversität und Artenschutz</span>
        <br />
        Wir setzen auf Mischkulturen:
      </p>
      <ul className="list-disc list-inside">
        <span>
          <li>auf der Kraut- und Gemüseebene</li>
          <li>auf der Strauchebene</li>
          <li>mit kleinen und großen Bäumen</li>
        </span>
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
      <p>
        <span>
          Unsere größten Fans im Grünland 2024: Äskulapnatter und Salamander
          <br />
          Unsere größten Fans auf dem Acker 2024: Stieglitze und Feldhasen
        </span>
      </p>

      <p>
        <span>Unsere Arbeit: ökologisch, regenerativ und naturnah</span>
        <br />
        Wir setzen auf <span>Handarbeit und kleine Maschinen</span>, um
        Bodenverdichtung zu minimieren. Wir wollen das Bodenleben so wenig wie
        möglich bei der Humusbildung stören. Darum pflügen wir nicht.
        Stattdessen mulchen wir und sorgen für Bodendecker oder
        Unterbepflanzung. So bleibt der Boden feucht und Regenwasser verdunstet
        nicht gleich. Überdüngung wird vermieden und die Nährstoffauswaschung
        reduziert. Der Boden erholt sich.
      </p>
      <p>
        Überdüngung wird vermieden und die Nährstoffauswaschung reduziert. Der
        Boden erholt sich.
      </p>

      <p>
        <span>Unser Beitrag zum Klimaschutz</span>
        <br />
        Durch den Anbau von Mischkulturen kreieren wir dauerhaft ein feuchteres,
        kühleres Mikroklima.
        <span>
          {" "}
          Die Brandgefahr sinkt und Überschwemmungen werden vermieden.{" "}
        </span>
        Unsere Art der Bepflanzung bietet
        <span> Wind- und Erosionsschutz</span>.
      </p>

      <h3>
        Große Visionen - viele kleine Bäume: Und mit jedem Jahr kommen wir
        unseren Zielen einen Schritt näher.
      </h3>
      <p>
        <span>
          {" "}
          Unser Vertrauenslabel :<span className="geerdet"> „geerdet“ </span>
        </span>{" "}
        <br />
        Auch wenn wir mit unserer SoLaWi kein Bio-Label anstreben, ist es uns
        ein Herzensanliegen, <span>richtig gesunde Lebensmittel</span> anzubauen. Du hast es
        hier mit Gemüse zu tun, das nicht chemisch behandelt worden ist: Weder
        mit giftigen Spritzmitteln, noch mit künstlichen Düngemitteln (nicht
        einmal mit Kupfer, wie es oft in der Bio-Landwirtschaft verwendet wird).
        Und sollten die Gemüseblätter einmal Löcher haben, dann denke immer
        daran: Wenn sogar die Insekten es lecker finden, kann Dein Gemüse auf
        keinen Fall giftig sein.
      </p>
      <span className="geerdet">Komm mit aufs Feld!</span>
    </Layout>
  );
}
