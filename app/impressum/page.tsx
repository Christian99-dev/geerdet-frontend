import React from "react";
import { fetchLegalText } from "@/services/cms/local";
import Layout from "@/components/shared/Layout";

export default async function Impressum() {
  const { text, title, img } = await fetchLegalText("impressum");
  return (
    <Layout title={title} img={img}>
      <div className="policy" dangerouslySetInnerHTML={{ __html: text }} />
    </Layout>
  );
}
