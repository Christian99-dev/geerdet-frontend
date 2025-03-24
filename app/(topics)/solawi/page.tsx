import React from "react";
import Layout from "@/components/shared/Layout";
import { fetchTopic } from "@/services/cms/local";

export default async function Datenschutz() {
  const Topic = await fetchTopic("solawi");
  if (!Topic) {
    return {
      statusCode: 500,
      message: "Internal Server Error",
    };
  }
  const { pageTitle, img } = Topic;

  return (
    <Layout title={pageTitle} img={img}>
      <h3>Was ist eigentlich eine SoLawi?</h3>
      <p>
        Solidarische Landwirtschaft (SoLaWi) heißt: Ein landwirtschaftlicher
        Betrieb wird von der Gemeinschaft getragen. Weil es lokal eine
        Verbrauchergemeinschaft gibt, die finanzielle Mitverantwortung
        übernimmt, kann unser Betrieb
        <span> marktunabhängig Lebensmittel anbauen</span>. Bei uns kaufst Du
        nicht einfach nur Gemüse, sondern bist Teil der Idee, indem Du Deine
        Ernteanteile vorab bezahlst und - sofern es Zeit und körperliche
        Konstitution erlauben - auf dem Feld mitanpackstF
      </p>
      <p>
        Eine Gruppe von Einzelpersonen{" "}
        <span>verpflichtet sich zur Abnahme</span> wöchentlicher Ernteanteile
        und zu Arbeitseinsätzen auf dem Feld. Als Betrieb übernehmen wir die
        professionelle Anbauplanung, sind zuständig für Pflege und Ernte der
        Pflanzen und gehen mit Grundinvestitionen in Vorleistung.
      </p>
      <p>
        Diversität und Anzahl und Sorten des wöchentlichen Gemüses schwanken
        erwartungsgemäß entsprechend der Jahreszeiten. So befindet sich
        natürlich von <span>Juli bis August die größte Vielfalt</span> in der
        wöchentlichen Kiste. Auch wetterbedingt können Erträge schwanken. Die
        Gemeinschaft teilt sich die Ernte, aber auch das Anbaurisiko.
      </p>
      <p>
        Der Betrieb hat durch die Vorauszahlung der monatlichen Beiträge
        finanzielle Planungssicherheit. Durch die Abnahmegarantie kann er{" "}
        <span>Überproduktion und Lebensmittelverschwendung vermeiden.</span>
      </p>
      <h2>
        Was erwartet mich bei der SoLawi von{" "}
        <span className="geerdet">geerdet </span>und was kostet es?{" "}
      </h2>
      <p>
        Indem Du ein Ernte-Abo bestellst, wirst du für ein Jahr Teil der
        Solidar-Gemeinschaft. Vor Beginn der Erntesaison beteiligst Du Dich
        <span> einmalig mit einem Saatanteil von 180,00€.</span> Davon kaufen
        wir Saatgut, Jungpflanzen, Pflanzerde, usw., die wir benötigen, um den
        Gemüseanbau an den Start zu bringen.
      </p>
      <p>
        In diesem Jahr, 2025 zahlst Du ab Mai/Juni nur noch den Betrag für die
        Ernteanteile: 6 – 7 x 130,00 € /Monat und darfst Dich wöchentlich auf
        leckeres, ungespritztes Gemüse direkt aus Taunusstein freuen. Mit der
        Wochenernte in deiner Gemüsekiste kannst Du ca. 2 Personen versorgen.
        Von den monatlichen Beiträgen werden nach und nach die
        Eingangsinvestitionen und die laufenden Betriebskosten gedeckt.
      </p>
      <h2>Wann und wo hole ich meine Kiste ab?</h2>
      <p>
        Die Startwoche zur Erntesaison bzw. das genaue Datum für Deine erste
        Gemüseabholung wird Dir zwei Wochen vor Beginn via E-Mail mitgeteilt.
        Die Ernte beginnt dieses Jahr spätestens mit der 23. Kalenderwoche
        (Anfang Juni). Als Ende der Saison peilen wir Mitte November an. Die
        Erntezeit kann sich je nach Wetter und in den Folgejahren noch deutlich
        verlängern (z. B. bis zur 50. Kalenderwoche).
      </p>
      <p>
        Am wöchentlichen Abholtag kommst Du zum{" "}
        <span> Bornhof, Dornbornstraße 10 in Taunusstein-Wehen*</span> und
        wiegst Dir Dein Gemüse ab. Zur Abholung bringst Du Deine eigene Kiste,
        Korb oder Tasche mit. Im kleinen Hofladen kannst Du hier neben Bio-Eiern
        und Bio-Rindfleisch noch weitere gesunde Leckereien finden, die Deinen
        Speiseplan bereichern.
      </p>
      <img src="/images/bornhof.png"></img>
      <h2>Wie kann ich mich noch beteiligen?</h2>
      <p>
        Ja, Deine Hilfe ist gefragt! Du bist herzlich eingeladen. Es ist klar,
        dass unsere Felder nicht ganz allein von unseren Gemüsegärtnerinnen und
        -Gärtnern bearbeitet werden können. Im Vertrag zum Gemüse-Abo legst Du
        selbst verbindlich fest, ob und wie oft Du mitarbeiten möchtest. Melde
        Dich einfach per E-Mail an info(ät)geerdet-taunusstein.de, wenn Du
        mithelfen möchtest oder Fragen hast. Wir freuen uns auf Deine
        Unterstützung!
      </p>
      <p><span>Komm mit aufs Feld!</span> - Zusammen macht es einfach Spaß. </p>
    </Layout>
  );
}
