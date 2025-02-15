import React from "react";
import Default from "@/layouts/Default";
import { fetchDatenschutz } from "@/services/api/endpointsLocal";

export default async function Datenschutz() {
  const { text } = await fetchDatenschutz();
  return (
    <Default title="Datenschutz" img="/images/kartoffel.jpeg">
      <div className="policy" dangerouslySetInnerHTML={{ __html: text }} />
    </Default>
  );
}
