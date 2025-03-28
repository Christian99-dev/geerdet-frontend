import Icon from "../shared/Icon";
import { fetchTopics } from "@/services/cms/local";
import { type Topics } from "@/types/services/cms/local";

export default async function InfoTwo() {
  const topics: Topics = await fetchTopics();

  return (
    <section
      id="three"
      className="bg-brown text-style3-text text-center p-[3rem_2rem_1rem_2rem] 
                md:p-[4rem_3rem_2rem_3rem] 
                lg:p-[6rem_0_4rem_0]"
    >
      <div className="mx-auto">
        <header className="mb-4 lg:mb-8">
            <h2 className="mb-8 uppercase text-white">
            Nachhaltige Landwirtschaft, verwurzelt in Gemeinschaft
            </h2>
            <p className="pb-8">
            Nutze regenerative Praktiken und fördere ökologische Harmonie.
            <br /> Gemeinsam kultivieren wir einen gesünderen Planeten für zukünftige Generationen.
            </p>
        </header>

        {/* Liste der Features */}
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:w-[60em] lg:mx-auto">
          {topics.map(({ iconName, title, description, slug }, index) => {
            return (
              <FeatureItem
                slug={slug}
                key={index}
                iconName={iconName}
                title={title}
                description={description}
                background={getBackgroundColor(index)}
              />
            );
          })}
        </ul>
      </div>
    </section>
  );
}

const FeatureItem = ({
  iconName,
  title,
  description,
  background,
  slug,
}: {
  iconName: string;
  title: string;
  description: string;
  background: string;
  slug: string;
}) => {
  return (
    <li
      className={`flex flex-col items-center text-center relative  justify-center lg:justify-normal lg:text-left ${background} cursor-pointer`}
    >
      <a href={`/${slug}`}>
        <div
          className="flex flex-col items-center text-center lg:justify-normal lg:text-left transition-transform duration-default hover:scale-105 p-[3rem_2rem_1rem_2rem]
                md:p-[3rem_2rem_1rem_2rem] 
                lg:p-[4rem_4rem_2rem_6rem]"
        >
          <div className="lg:absolute lg:left-12 lg:top-[4.5rem]">
            <Icon name={iconName} size="small" color="altBrown" />
          </div>
          <h2 className="mt-1 mb-4 uppercase text-white">{title}</h2>
          <p>{description}</p>
        </div>
      </a>
    </li>
  );
};

const getBackgroundColor = (index: number): string => {
  const colors = [
    "bg-[rgba(0,0,0,0.035)]",
    "bg-[rgba(0,0,0,0.07)]",
    "bg-[rgba(0,0,0,0.105)]",
    "bg-[rgba(0,0,0,0.14)]",
    "bg-[rgba(0,0,0,0.175)]",
    "bg-[rgba(0,0,0,0.21)]",
  ];
  return colors[index % colors.length];
};
