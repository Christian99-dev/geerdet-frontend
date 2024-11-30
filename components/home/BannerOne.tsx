import Icon from "../shared/Icon";

export const BannerOne = () => {
  return (
    <section
      className="bg-primary 
      p-[3rem_2rem_1rem_2rem] 
            md:p-[4rem_3rem_2rem_3rem] 
            lg:p-[6rem_0_4rem_0] flex flex-col items-center"
      id="first-section"
    >
      <h2 className="pb-5 text-center uppercase">
        Arcu aliquet vel lobortis ata nisl eget <br /> augue amet aliquet nisl
        cep donec
      </h2>

      <div className="w-[40%] h-[2px] bg-gray-125 mb-5"></div>
      <p className="text-style1-text pb-20 text-center md:w-[90%] lg:w-[60%]">
        Vielleicht hast Du am Rande von Wehen schon unsere blühenden Felder
        gesehen und fragst Dich, was das hier denn wird. Uns gibt es offiziell
        seit Oktober 2023 in Wehen. Wir sind „geerdet“, Taunussteins erste
        SoLaWi (Solidarische Landwirtschaft). Der Aufbau einer nachhaltigen,
        „enkeltauglichen“ Landwirtschaft ist unser Ziel.
      </p>
      <div className="flex gap-6">
        <Icon name="bunny" size="small" color="white" />
        <Icon name="bunny" size="small" color="white" />
        <Icon name="bunny" size="small" color="white" />
      </div>
    </section>
  );
};
