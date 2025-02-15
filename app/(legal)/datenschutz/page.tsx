import React from "react";
import Default from "@/layouts/Default";
import { fetchLegalText } from "@/services/api/endpointsLocal";

export default async function Datenschutz() {
  const { text, title, img } = await fetchLegalText("datenschutz");
  return (
    <Default title={title} img={img}>
      <div className="policy" dangerouslySetInnerHTML={{ __html: text }} />
    </Default>
  );
}
