import Icon from "../shared/Icon";

export default async function BannerOne() {
  return (
    <section
      className="bg-primary 
      p-[3rem_2rem_1rem_2rem] 
            md:p-[4rem_3rem_2rem_3rem] 
            lg:p-[6rem_0_4rem_0] flex flex-col items-center"
      id="first-section"
    >
      <h2 className="pb-5 text-center uppercase">
        Fostering Sustainable Growth and Community Empowerment
        <br /> through Solidarity Agriculture
      </h2>

      <div className="w-[40%] h-[2px] bg-gray-125 mb-5"></div>
      <p className="text-style1-text pb-20 text-center md:w-[90%] lg:w-[60%]">
        Perhaps you've noticed our flourishing fields on the outskirts of Wehen
        and wondered what we're all about. We have been officially established
        in Wehen since October 2023. We are “geerdet”, Taunusstein’s first
        SoLaWi (Solidarity Agriculture). Our goal is to build a sustainable,
        future-proof agriculture system.
      </p>
      <div className="flex gap-10">
        <Icon name="park" size="small" color="secondary" />
        <Icon name="compost" size="small" color="secondary" />
        <Icon name="spa" size="small" color="secondary" />
      </div>
    </section>
  );
};
