import React from "react";
import Layout from "@/components/shared/Layout";
import { fetchTopic } from "@/services/cms/local";
import SortimentTabelle from "@/components/shared/SortimentTabelle";

export default async function Datenschutz() {
  const Topic = await fetchTopic("sortiment");
  if (!Topic) {
    return {
      statusCode: 500,
      message: "Internal Server Error",
    };
  }
  const { pageTitle, img } = Topic;

  return (
    <Layout title={pageTitle} img={img}>
      <SortimentTabelle />
    </Layout>
  );
}
