import { gql, useQuery } from "@apollo/client";
import { useState } from "react";
import { client } from "../graphql";

const LOGIN_MUTATION = gql`
  mutation Login($input: LoginInput!) {
    login(input: $input) {
      token
    }
  }
`;

export const useLoginMutation = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<any>();
  const login = async (walletId: string, signature: string) => {
    setLoading(true);
    try {
      const { data } = await client.mutate({
        mutation: LOGIN_MUTATION,
        variables: {
          input: {
            walletId,
            signature,
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
    login,
  };
};
