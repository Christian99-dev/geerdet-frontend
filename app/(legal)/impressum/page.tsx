import React from "react";
import StandardLayout from "@/components/templates/StandardLayout";
import { fetchImpressum } from "@/services/api/endpointsLocal";

export default async function Impressum() {
  const { text } = await fetchImpressum();
  return (
    <StandardLayout title="Impressum" img="/images/kartoffel.jpeg">
      <div className="policy" dangerouslySetInnerHTML={{ __html: text }} />
    </StandardLayout>
  );
}
