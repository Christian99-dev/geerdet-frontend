import React from "react";
import Layout from "@/components/shared/Layout";
import { fetchTopic } from "@/services/cms/local";

export default async function Datenschutz() {
  const Topic = await fetchTopic("gemuesekiste");
  if (!Topic) {
    return {
      statusCode: 500,
      message: "Internal Server Error",
    };
  }
  const { pageTitle, img } = Topic;

  return (
    <Layout title={pageTitle} img={img}>
      <h2>Neun gute Gründe für unser „geerdet-Gemüseabo“</h2>
      <ol className="list-decimal list-inside">
        <li>
          Saisonal & regional: Unser Freilandgemüse wächst in Deiner
          Nachbarschaft und hat kürzeste Wege bis auf Deinen Teller.
        </li>
        <li>
          Maximale Frische: Zwischen Ernte und Abholung vergeht kaum Zeit. Mehr
          Qualität durch Frische geht nicht.
        </li>
        <li>
          Gesundes Gemüse: Unser Gemüse wird weder mit chemischen Pestiziden
          noch künstlichen Düngemitteln behandelt.
        </li>
        <li>
          Weniger Verpackungsmüll: Du bringst Deine eigene Tasche oder Kiste mit
          zur Abholung Deines Gemüses und sparst Dir eine Menge Plastik.
        </li>
        <li>
          Leckere Sortenvielfalt: Bei uns findest Du samenfeste, alte, bewährte
          oder auch einfach originelle Gemüsesorten. Lass Dich überraschen.
        </li>
        <li>
          Inspiration für Deine Küche: Unser Gemüse und die dazu passenden
          Rezepte machen gesundes, abwechslungsreiches Kochen ganz leicht.
        </li>
        <li>
          Faire & direkte Vermarktung: Dein Geld fließt marktunabhängig und ohne
          Umwege direkt in die regionale, regenerative Landwirtschaft.
        </li>
        <li>
          Transparenz & Vertrauen: Du kennst Deine Gemüseleute persönlich. Du
          weißt, wo und wie Dein Essen angebaut wird – und kannst sogar bei der
          Ernte mithelfen!
        </li>
        <li>
          Landwirtschaft für Übermorgen: Mit dem Kauf unseres Gemüse-Abos
          investierst Du in eine zukunftsfähige, enkeltaugliche Landwirtschaft.
        </li>
      </ol>
    </Layout>
  );
}
