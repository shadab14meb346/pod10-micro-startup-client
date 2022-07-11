import { gql } from "@apollo/client";
import { useEffect, useState } from "react";
import { client } from "../graphql";

const GET_MY_EMAIL_MAPPINGS_QUERY = gql`
  query GetMyEmailMappings {
    getMyEmailMappings {
      id
      relay
      thirdParty
      isPretty
    }
  }
`;

export const useGetMyEmailLazyQuery = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<any>();
  const getMyEmailMappings = async () => {
    setLoading(true);
    try {
      const { data } = await client.query({
        query: GET_MY_EMAIL_MAPPINGS_QUERY,
      });
      setData(data);
    } catch (e: any) {
      console.log(e);
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };
  return {
    loading,
    error,
    data,
    getMyEmailMappings,
  };
};

export const useGetMyEmailQuery = () => {
  // return useQuery(GET_MY_EMAIL_MAPPINGS_QUERY);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<any>();
  const getMyEmailMappings = async () => {
    setLoading(true);
    try {
      const { data } = await client.query({
        query: GET_MY_EMAIL_MAPPINGS_QUERY,
      });
      setData(data);
    } catch (e: any) {
      console.log(e);
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getMyEmailMappings();
  }, []);
  return {
    loading,
    error,
    data,
  };
};
