import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method === "GET") {
    const username = req.query["username"];
    const userdetails = await axios.get(
      `https://api.twitter.com/2/users/by/username/${username}?user.fields=profile_image_url`,
      {
        headers: {
          Authorization:
            "Bearer AAAAAAAAAAAAAAAAAAAAAPhjWAEAAAAA0s%2FWHeOO%2BvP96lKjfw6uZBgWCzI%3DAj6em26R9yL15TuETqDuXYVphaLRGFnTPgWKZtm3puPWjfTx04",
        },
      }
    );
    console.log(userdetails.data);
    const userId = userdetails.data["data"]["id"];
    const profileImageUrl = userdetails.data["data"]["profile_image_url"];
    const name = userdetails.data["data"]["name"];

    const response = await axios.get(
      `https://api.twitter.com/2/tweets/search/recent?query=from%3A%20${username}&tweet.fields=author_id&max_results=100`,
      {
        headers: {
          Authorization:
            "Bearer AAAAAAAAAAAAAAAAAAAAAPhjWAEAAAAA0s%2FWHeOO%2BvP96lKjfw6uZBgWCzI%3DAj6em26R9yL15TuETqDuXYVphaLRGFnTPgWKZtm3puPWjfTx04",
          Cookie:
            'guest_id=v1%3A165754080682838762; guest_id_ads=v1%3A165754080682838762; guest_id_marketing=v1%3A165754080682838762; personalization_id="v1_Sy1q3AX5HK750dL3bNbuVg=="',
        },
      }
    );

    const userLists = await axios.get(
      `https://api.twitter.com/2/users/${userId}/followed_lists`,
      {
        headers: {
          Authorization:
            "Bearer AAAAAAAAAAAAAAAAAAAAAPhjWAEAAAAA0s%2FWHeOO%2BvP96lKjfw6uZBgWCzI%3DAj6em26R9yL15TuETqDuXYVphaLRGFnTPgWKZtm3puPWjfTx04",
        },
      }
    );
    console.log(userLists.data);

    var tweetText = "";
    const data = response.data["data"];
    for (let key in data) {
      tweetText += data[key]["text"];
    }

    var userListsText = "";
    const userListsData = userLists.data["data"];
    for (let key in userListsData) {
      userListsText += `${userListsData[key]["name"]},`;
    }

    const keywordResponse = await axios.post(
      "https://api.apilayer.com/keyword",
      tweetText,
      {
        headers: {
          apikey: "4owm0FNKkXSjIXbNv5iGQwlyRvNLJvCw",
        },
      }
    );

    res.status(200).json({
      status: "success",
      data: {
        tweetKeywords: keywordResponse.data,
        userLists: userListsText,
        profileImageUrl: profileImageUrl,
        name,
      },
    });
  }
}
