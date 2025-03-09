import React from "react";
import Layout from "@/components/shared/Layout";
import { fetchTopic } from "@/services/cms/local";

export default async function Datenschutz() {
  const Topic = await fetchTopic("dabeisein");
  if (!Topic) {
    return {
      statusCode: 500,
      message: "Internal Server Error",
    };
  }
  const { pageTitle, img, description } = Topic;

  return (
    <Layout title={pageTitle} img={img}>
      <div>{description}</div>
    </Layout>
  );
}
