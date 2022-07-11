import { gql } from "@apollo/client";
import { useState } from "react";
import { client } from "../graphql";

const NOTIFY_ME_MUTATION = gql`
  mutation NotifyMe($input: NotifyMeInput!) {
    notifyMe(input: $input)
  }
`;

type PageType = "ANALYTICS" | "PERMISSIONS" | "DAPPS";
export const useNotifyMeMutation = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<any>();
  const notifyMe = async (page: PageType) => {
    setLoading(true);
    try {
      const { data } = await client.mutate({
        mutation: NOTIFY_ME_MUTATION,
        variables: {
          input: {
            page,
          },
        },
      });
      setData(data);
    } catch (e: any) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };
  return {
    loading,
    error,
    data,
    notifyMe,
  };
};
