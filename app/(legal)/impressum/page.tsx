import React from "react";
import StandardLayout from "@/components/templates/StandardLayout";

export default async function Impressum() {
  return (
    <StandardLayout title="Impressum" img="/images/kartoffel.jpeg">
      <h1>Impressum</h1>
      <h2>Angaben gemäß § 5 TMG</h2>
      <p>Max Mustermann</p>
      <p>Musterstraße 1</p>
      <p>12345 Musterstadt</p>
      <h2>Kontakt</h2>
      <p>Telefon: 01234 56789</p>
      <p>E-Mail:asdasdasd</p>
    </StandardLayout>
  );
}
