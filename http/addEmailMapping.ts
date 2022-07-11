import { gql } from "@apollo/client";
import { useState } from "react";
import { client } from "../graphql";

const ADD_EMAIL_MAPPING_MUTATION = gql`
  mutation AddEmailMapping($input: EmailMappingInput!) {
    addEmailMapping(input: $input) {
      emailMappings {
        id
        relay
        thirdParty
        isPretty
      }
    }
  }
`;

export const useAddEmailMappingMutation = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<any>();
  const addEmailMapping = async (
    selectedGalaxyMail: string,
    thirdPartyEmail: string
  ) => {
    setLoading(true);
    try {
      const { data } = await client.mutate({
        mutation: ADD_EMAIL_MAPPING_MUTATION,
        variables: {
          input: {
            prettyEmailText: selectedGalaxyMail,
            email: thirdPartyEmail,
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
    addEmailMapping,
  };
};
