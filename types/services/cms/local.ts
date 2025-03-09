export type Topics = Topic[];

export type Topic = {
  id: number;
  iconName: string;
  title: string;
  img: string;
  pageTitle: string;
  description: string;
  slug: TopicSlugs;
}

export type TopicSlugs = "wiewiranbauen" | "solawi" | "dabeisein" | "gemuesekiste" | "sortiment" | "gallery"; 

export type Legal = {
  title: string;
  img: string;
  text: string;
};