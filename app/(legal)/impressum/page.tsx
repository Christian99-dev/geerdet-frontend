import React from "react";
import Default from "@/layouts/Default";
import { fetchImpressum } from "@/services/api/endpointsLocal";

export default async function Impressum() {
  const { text } = await fetchImpressum();
  return (
    <Default title="Impressum" img="/images/kartoffel.jpeg">
      <div className="policy" dangerouslySetInnerHTML={{ __html: text }} />
    </Default>
  );
}
