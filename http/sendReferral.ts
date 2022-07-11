import { gql } from "@apollo/client";
import { useState } from "react";
import { client } from "../graphql";

const ADD_REFERRAL_MUTATION = gql`
  mutation AddReferral($input: [ReferralInput!]) {
    addReferral(input: $input) {
      referrals {
        email
        isRegistered
      }
    }
  }
`;

export const useSendReferralMutation = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<any>();
  const sendReferral = async (name: string, email: string) => {
    setError(null);
    setLoading(true);
    try {
      const { data } = await client.mutate({
        mutation: ADD_REFERRAL_MUTATION,
        variables: {
          input: [
            {
              email,
              name: name || "enthusiast",
            },
          ],
        },
      });
      setData(data);
    } catch (e: any) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };
  const reset = () => {
    setLoading(false);
    setError(null);
    setData(null);
  };
  return {
    loading,
    error,
    data,
    sendReferral,
    reset,
  };
};
