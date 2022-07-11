import { gql } from "@apollo/client";
import { useState } from "react";
import { client } from "../graphql";

const DELETE_EMAIL_MAPPING_MUTATION = gql`
  mutation DeleteEmailMapping {
    deleteEmailMapping {
      id
      relay
      thirdParty
      isPretty
    }
  }
`;

export const useDeleteEmailMappingMutation = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<any>();
  const deleteEmailMapping = async () => {
    setLoading(true);
    try {
      const { data } = await client.mutate({
        mutation: DELETE_EMAIL_MAPPING_MUTATION,
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
    deleteEmailMapping,
  };
};
