import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import { fetchTextCategory } from "../../utils";

const getUserDetails = async (username: string) => {
  const userDetails = await axios.get(
    `https://api.twitter.com/2/users/by/username/${username}?user.fields=description`,
    {
      headers: {
        Authorization:
          "Bearer AAAAAAAAAAAAAAAAAAAAAPhjWAEAAAAA0s%2FWHeOO%2BvP96lKjfw6uZBgWCzI%3DAj6em26R9yL15TuETqDuXYVphaLRGFnTPgWKZtm3puPWjfTx04",
      },
    }
  );
  return userDetails;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method === "GET") {
    const username = req.query["username"];
    try {
      const getUserCategory = async (username: string) => {
        const userDetails = await getUserDetails(username);
        const description = userDetails.data.data.description;
        const category = await fetchTextCategory(description);
        return category;
      };
      const category = await getUserCategory(username as string);
      res.status(200).json({
        data: {
          category: category,
        },
      });
    } catch (e) {
      // console.log(e);
      res.status(500).json({
        data: {
          error: "something went wrong",
        },
      });
    }
  }
}
