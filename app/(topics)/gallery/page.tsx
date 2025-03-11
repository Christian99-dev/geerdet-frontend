import React from "react";
import Layout from "@/components/shared/Layout";
import { fetchTopic } from "@/services/cms/local";
import ImageSlider from "@/components/home/ImageSlider";

export default async function Datenschutz() {
  const Topic = await fetchTopic("gallery");
  if (!Topic) {
    return {
      statusCode: 500,
      message: "Internal Server Error",
    };
  }
  const { pageTitle, img } = Topic;

  return (
    <Layout title={pageTitle} img={img}>
      <ImageSlider
        images={[
          "/images/stroh.jpeg",
          "/images/amisch.jpeg",
          "/images/blume.jpeg",
          "/images/kartoffel.jpeg",
          "/images/pock.jpg",
          "/images/pöck.png",
        ]}
      />
    </Layout>
  );
}

