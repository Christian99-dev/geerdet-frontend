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
      <h2>Solidarische Landwirtschaft - und wie sie bei uns funktioniert</h2>
      <p>Was ist eigentlich eine SoLawi?</p>
      <p>
        Solidarische Landwirtschaft (SoLaWi) heißt: Ein landwirtschaftlicher
        Betrieb wird von der Gemeinschaft getragen. Weil es lokal eine
        Verbrauchergemeinschaft gibt, die finanzielle Mitverantwortung
        übernimmt, kann unser Betrieb marktunabhängig Lebensmittel anbauen. Bei
        uns kaufst Du nicht einfach nur Gemüse, sondern bist Teil der Idee,
        indem Du Deine Ernteanteile vorab bezahlst und - sofern es Zeit und
        körperliche Konstitution erlauben - auf dem Feld mitanpackst.
      </p>
      <p>
        Eine Gruppe von Einzelpersonen verpflichtet sich zur Abnahme
        wöchentlicher Ernteanteile und zu Arbeitseinsätzen auf dem Feld. Als
        Betrieb übernehmen wir die professionelle Anbauplanung, sind zuständig
        für Pflege und Ernte der Pflanzen und gehen mit Grundinvestitionen in
        Vorleistung. Diversität und Anzahl und Sorten des wöchentlichen Gemüses
        schwanken erwartungsgemäß entsprechend der Jahreszeiten. So befindet
        sich natürlich von Juli bis August die größte Vielfalt in der
        wöchentlichen Kiste. Auch wetterbedingt können Erträge schwanken. Die
        Gemeinschaft teilt sich die Ernte, aber auch das Anbaurisiko. Der
        Betrieb hat durch die Vorauszahlung der monatlichen Beiträge finanzielle
        Planungssicherheit. Durch die Abnahmegarantie kann er Überproduktion und
        Lebensmittelverschwendung vermeiden.
      </p>
      <h2>Was erwartet mich bei der SoLawi von geerdet und was kostet es?</h2>
      <p>
        Indem Du ein Ernte-Abo bestellst, wirst du für ein Jahr Teil der
        Solidar-Gemeinschaft. Vor Beginn der Erntesaison beteiligst Du Dich
        einmalig mit einem Saatanteil von 180,00€. Davon kaufen wir Saatgut,
        Jungpflanzen, Pflanzerde, usw., die wir benötigen, um den Gemüseanbau an
        den Start zu bringen.
      </p>
      <p>
        In diesem Jahr, 2025 zahlst Du ab Mai/Juni nur noch den Betrag für die
        Ernteanteile: 6 - 7 x 130,00 € /Monat und darfst Dich wöchentlich auf
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
        Am wöchentlichen Abholtag kommst Du zum Bornhof, Dornbornstraße 10 in
        Taunusstein-Wehen* und wiegst Dir Dein Gemüse ab. Zur Abholung bringst
        Du Deine eigene Kiste, Korb oder Tasche mit. Im kleinen Hofladen kannst
        Du hier neben Bio-Eiern und Bio-Rindfleisch noch weitere gesunde
        Leckereien finden, die Deinen Speiseplan bereichern.
      </p>
      <img src="/images/bornhof.png"></img>
      <h2>Wie kann ich mich sonst noch beteiligen?</h2>
      <p>
        Ja, Deine Hilfe ist gefragt! Du bist herzlich eingeladen. Es ist klar,
        dass unsere Felder nicht ganz allein von unseren Gemüsegärtnerinnen und
        -Gärtnern bearbeitet werden können. Im Vertrag zum Gemüse-Abo legst Du
        selbst verbindlich fest, ob und wie oft Du mitarbeiten möchtest. Auf der
        Seite „Termine und Events“* findest Du eine Übersicht, über das, was
        gerade ansteht und wo Du tatkräftig mithelfen kannst. Hier trägst Du die
        konkreten Zeiten ein. Solltest Du verhindert sein, trägst Du Dich drei
        Tage vorher aus und informierst uns über info(ät)geerdet-taunusstein.de.
      </p>
      <p>Komm mit aufs Feld! – Zusammen macht es einfach Spaß.</p>
    </Layout>
  );
}
