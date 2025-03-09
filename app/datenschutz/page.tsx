import React from "react";
import Layout from "@/components/shared/Layout";
import { fetchLegalText } from "@/services/cms/local";

export default async function Datenschutz() {
  const { text, title, img } = await fetchLegalText("datenschutz");
  return (
    <Layout title={title} img={img}>
      <div className="policy" dangerouslySetInnerHTML={{ __html: text }} />
    </Layout>
  );
}
