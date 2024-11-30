import { ReactNode } from "react";
import Icon from "../shared/Icon";
import { Color } from "@/types/theme";

export const InfoTwo = () => {
  const features = [
    {
      iconName: "park",
      iconSize: "small",
      iconColor: "secondary" as Color,
      title: "Agroforstsystem",
      description:
        "Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem tincidunt nullam amet leo Aenean ligula consequat consequat.",
      background: "md:bg-[rgba(0,0,0,0.035)]",
    },
    {
      iconName: "compost",
      iconSize: "small",
      iconColor: "secondary" as Color,
      title: "Ökologische Bewirtschaftung",
      description:
        "Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem tincidunt nullam amet leo Aenean ligula consequat consequat.",
      background: "md:bg-[rgba(0,0,0,0.07)]",
    },
    {
      iconName: "spa",
      iconSize: "small",
      iconColor: "secondary" as Color,
      title: "Regenerativer und naturnaher Anbau",
      description:
        "Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem tincidunt nullam amet leo Aenean ligula consequat consequat.",
      background: "md:bg-[rgba(0,0,0,0.105)]",
    },
    {
      iconName: "park",
      iconSize: "small",
      iconColor: "secondary" as Color,
      title: "Freiluft-Bildung",
      description:
        "Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem tincidunt nullam amet leo Aenean ligula consequat consequat.",
      background: "md:bg-[rgba(0,0,0,0.14)]",
    },
    {
      iconName: "compost",
      iconSize: "small",
      iconColor: "secondary" as Color,
      title: "Haltung gefährdeter Haustierrassen",
      description:
        "Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem tincidunt nullam amet leo Aenean ligula consequat consequat.",
      background: "md:bg-[rgba(0,0,0,0.175)]",
    },
    {
      iconName: "spa",
      iconSize: "small",
      iconColor: "secondary" as Color,
      title: "Vom Umgang mit Gemüse und Kräutern",
      description:
        "Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem tincidunt nullam amet leo Aenean ligula consequat consequat.",
      background: "md:bg-[rgba(0,0,0,0.21)]",
    },
  ];

  return (
    <section
      id="three"
      className="bg-style3-bg text-style3-text text-center p-[3rem_2rem_1rem_2rem] 
                md:p-[4rem_3rem_2rem_3rem] 
                lg:p-[6rem_0_4rem_0]"
    >
      <div className="mx-auto px-4">
        <header className="mb-4 lg:mb-8">
          <h2 className="mb-8 uppercase text-white">
            Accumsan mus tortor nunc aliquet
          </h2>
          <p className="pb-8">
            Aliquam ut ex ut augue consectetur interdum. Donec amet imperdiet
            eleifend
            <br />
            fringilla tincidunt. Nullam dui leo Aenean mi ligula, rhoncus
            ullamcorper.
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
