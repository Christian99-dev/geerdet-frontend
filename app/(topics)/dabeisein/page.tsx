import React from "react";
import Layout from "@/components/shared/Layout";
import { fetchTopic } from "@/services/cms/local";

export default async function Datenschutz() {
  const Topic = await fetchTopic("dabeisein");
  if (!Topic) {
    return {
      statusCode: 500,
      message: "Internal Server Error",
    };
  }
  const { pageTitle, img } = Topic;

  return (
    <Layout title={pageTitle} img={img}>
      <h2>Dabeisein ist alles - Du bist gefragt</h2>
      <p>
        <span>Du willst raus aufs Feld?</span> Wir laden Dich herzlich ein, auch
        Deine Hände in die Erde zu stecken! Sprich uns einfach an und sei
        nächstes Mal dabei.{" "}
        <span>Hilf mit zu pflanzen, zu pflegen und zu ernten</span>. Wir treffen
        uns zurzeit immer freitags und samstags.
      </p>
      <p>
        <span>Du kennst andere, die das auch interessiert?</span> Melde Dein
        Team, Deinen Verein oder Deine Klasse einfach an. Ihr helft ein paar
        Stunden mit, lernt dabei,{" "}
        <span>wie regenerative Landwirtschaft funktioniert</span> und testet,
        wie Obst und Gemüse schmeckt, wenn es frisch geerntet wird!
      </p>
      <p>
        <span>
          Du hast Lust, Dich um Hühner, Laufenten, Ziegen oder Schafe zu
          kümmern?{" "}
        </span>
        Wir sind dabei. Haltung <span>gefährdeter Haustierrassen</span> liegt
        uns am Herzen. Wir suchen verantwortungsvolle Leute, die dafür mit ins
        Team kommen.
      </p>
      <p>
        <span>Du liebst es, Gemüse einzukochen und zu fermentieren?</span> Du
        möchtest
        <span>Kräuter trocknen und verarbeiten</span>, z. B. zu Tee, Salben oder
        Seife? Dann lass uns unbedingt über Zusammenarbeit reden! Du hast Lust
        so etwas zu lernen? Wir bauen eine Lern-Community auf.
      </p>
      <p>
        <span>Du möchtest uns unterstützen?</span> Wir freuen uns über{" "}
        <span>Spenden</span>. Damit beschleunigst Du den Aufbau unserer Arbeit.
        Wir kaufen davon Bäume, Sträucher, Zäune und Saatgut. Pflanzen aus
        Deinem Garten, die Du nicht mehr benötigst, finden bei uns ein neues
        Zuhause.
      </p>
    </Layout>
  );
}
