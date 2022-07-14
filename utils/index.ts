import { Configuration, OpenAIApi } from "openai";
import { defaultPrompt } from "./const";

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const configuration = new Configuration({
  apiKey: OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export const fetchTextCategory = async (text: string) => {
  try {
    const prompt = `${defaultPrompt}\ntext: ${text}\ncategory:`;
    const response = await openai.createCompletion({
      model: "text-davinci-002",
      prompt,
      temperature: 0.7,
      max_tokens: 256,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });
    //@ts-ignore
    const category = response?.data?.choices[0]?.text?.trim();
    return category;
  } catch (e) {
    console.error(e);
  }
};

export const convertMultilineTweetsToOneLine = (text: string) => {
  const lines = text.split("\n");
  let singleLineTweet = "";
  for (const line of lines) {
    singleLineTweet += line;
  }
  return singleLineTweet;
};
