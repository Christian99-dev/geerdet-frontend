import React from "react";
import StandardLayout from "@/components/templates/StandardLayout";
import { fetchDatenschutz } from "@/services/api/endpointsLocal";

export default async function Datenschutz() {
  const { text } = await fetchDatenschutz();
  return (
    <StandardLayout title="Datenschutz" img="/images/kartoffel.jpeg">
      <div className="policy" dangerouslySetInnerHTML={{ __html: text }} />
    </StandardLayout>
  );
}
