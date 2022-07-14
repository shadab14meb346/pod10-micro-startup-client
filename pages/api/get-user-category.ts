import type { NextApiRequest, NextApiResponse } from "next";
import {
  convertMultilineTweetsToOneLine,
  fetchTextCategory,
} from "../../utils";
import { keywordsToMatch } from "../../utils/const";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method === "GET") {
    const username = req.query["username"];
    const axios = require("axios");

    const fetchTweetsOfUser = async (username: string, wordToMatch: string) => {
      try {
        const response = await axios.get(
          `https://api.twitter.com/2/tweets/search/recent?query=-is%3Areply%20-is%3Aretweet%20${wordToMatch}%20(from%3A%20${username})&tweet.fields=&max_results=100`,
          {
            headers: {
              Authorization:
                "Bearer AAAAAAAAAAAAAAAAAAAAAPhjWAEAAAAA0s%2FWHeOO%2BvP96lKjfw6uZBgWCzI%3DAj6em26R9yL15TuETqDuXYVphaLRGFnTPgWKZtm3puPWjfTx04",
              Cookie:
                'guest_id=v1%3A165754080682838762; guest_id_ads=v1%3A165754080682838762; guest_id_marketing=v1%3A165754080682838762; personalization_id="v1_Sy1q3AX5HK750dL3bNbuVg=="',
            },
          }
        );
        if (response.data.meta.result_count > 0) {
          return response.data.data.map((item: any) =>
            convertMultilineTweetsToOneLine(item.text)
          );
        }
        return [];
      } catch (e) {
        console.log(e);
      }
    };
    const fetchAllRecentTweetsOfUserWithTargetKeywords = async (
      username: string
    ) => {
      const requests = keywordsToMatch.map((keyword) =>
        fetchTweetsOfUser(username, keyword)
      );
      const results = await Promise.all(requests);
      const nonEmptyResults = results.filter((item) => item.length);
      return nonEmptyResults.flat();
    };
    const getUserCategory = async (username: string) => {
      const relevantTweetsText =
        await fetchAllRecentTweetsOfUserWithTargetKeywords(username);
      if (relevantTweetsText.length) {
        //@ts-ignore
        const category = await fetchTextCategory(relevantTweetsText);
        return category;
      } else {
        console.log("no relevant Tweets found");
        return "NA";
      }
    };
    const category = await getUserCategory(username as string);

    res.status(200).json({
      data: {
        category: category,
      },
    });
  }
}
