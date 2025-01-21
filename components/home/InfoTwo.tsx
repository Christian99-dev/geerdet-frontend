import { ReactNode } from "react";
import Icon from "../shared/Icon";
import { Color } from "@/types/theme";

export const InfoTwo = () => {
  const features = [
    {
      iconName: "park",
      iconSize: "small",
      iconColor: "altBrown" as Color,
      title: "Agroforestry System",
      description:
        "Integrate trees and shrubs into our farms to boost biodiversity, improve soil, and create sustainable ecosystems.",
      background: "md:bg-[rgba(0,0,0,0.035)]",
    },
    {
      iconName: "compost",
      iconSize: "small",
      iconColor: "altBrown" as Color,
      title: "Ecological Farming",
      description:
        "Use organic methods to reduce environmental impact, support pest control, and ensure fertile soils.",
      background: "md:bg-[rgba(0,0,0,0.07)]",
    },
    {
      iconName: "spa",
      iconSize: "small",
      iconColor: "altBrown" as Color,
      title: "Regenerative Cultivation",
      description:
        "Restore soils, store carbon, and harmonize with nature to create thriving ecosystems.",
      background: "md:bg-[rgba(0,0,0,0.105)]",
    },
    {
      iconName: "park",
      iconSize: "small",
      iconColor: "altBrown" as Color,
      title: "Outdoor Education",
      description:
        "Offer workshops on sustainable farming, environmental care, and solidarity agriculture.",
      background: "md:bg-[rgba(0,0,0,0.14)]",
    },
    {
      iconName: "compost",
      iconSize: "small",
      iconColor: "altBrown" as Color,
      title: "Endangered Livestock Breeds",
      description:
        "Preserve rare breeds to protect genetic diversity and promote sustainable farming practices.",
      background: "md:bg-[rgba(0,0,0,0.175)]",
    },
    {
      iconName: "spa",
      iconSize: "small",
      iconColor: "altBrown" as Color,
      title: "Vegetables and Herbs",
      description:
        "Cultivate and manage diverse produce to ensure quality, enhance flavors, and support nutrition.",
      background: "md:bg-[rgba(0,0,0,0.21)]",
    },
  ];

  return (
    <section
      id="three"
      className="bg-brown text-style3-text text-center p-[3rem_2rem_1rem_2rem] 
                md:p-[4rem_3rem_2rem_3rem] 
                lg:p-[6rem_0_4rem_0]"
    >
      <div className="mx-auto px-4">
        <header className="mb-4 lg:mb-8">
          <h2 className="mb-8 uppercase text-white">
            Sustainable Farming, Rooted in Community
          </h2>
          <p className="pb-8">
            Embrace regenerative practices and ecological harmony.<br/> Together, we
            cultivate a healthier planet for future generations.
          </p>
        </header>

        {/* Liste der Features */}
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:w-[60em] lg:mx-auto">
          {features.map((feature, index) => (
            <FeatureItem
              key={index}
              iconName={feature.iconName}
              iconSize={feature.iconSize}
              iconColor={feature.iconColor}
              title={feature.title}
              description={feature.description}
              background={feature.background}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

const FeatureItem = ({
  iconName,
  iconSize,
  iconColor,
  title,
  description,
  background,
}: {
  iconName: string;
  iconSize: string;
  iconColor: Color;
  title: string;
  description: string;
  background: string;
}) => {
  return (
    <li
      className={`flex flex-col items-center text-center relative p-[3rem_0rem_1rem_0rem] 
                md:p-[3rem_2rem_1rem_2rem] 
                lg:p-[4rem_4rem_2rem_6rem] justify-center lg:justify-normal lg:text-left ${background}`}
    >
      <div className="lg:absolute lg:left-12 lg:top-[4.5rem]">
        <Icon name={iconName} size="small" color={iconColor} />
      </div>
      <h2 className="mt-1 mb-4 uppercase text-white">{title}</h2>
      <p>{description}</p>
    </li>
  );
};
