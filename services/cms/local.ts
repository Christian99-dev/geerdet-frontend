import { type Topics, type Topic, type Legal, TopicSlugs } from "@/types/services/cms/local";
import fsPromises from "fs/promises";
import path from "path";

/**
 * Config
 */
const MOCK_DATA_PATH = "cms";

/**
 * Fetch logic
 */
const fetchLocal = async (name: string): Promise<any> => {
  const filePath = path.join(process.cwd(), `${MOCK_DATA_PATH}/${name}`);
  const jsonData = await fsPromises.readFile(filePath, "utf-8");
  const objectData: any = JSON.parse(jsonData);
  return objectData;
};

/**
 * Endpoints
 */
export const fetchTopics      = async (): Promise<Topics>     => fetchLocal("topics.json");
export const fetchTopic       = async (slug: TopicSlugs): Promise<Topic | undefined>      => {
  const topics: Topics = await fetchTopics();
  return topics.find(topic => topic.slug === slug);
};
export const fetchLegalText   = async (slug: "impressum" | "datenschutz"): Promise<Legal> => fetchLocal(`${slug}.json`);

