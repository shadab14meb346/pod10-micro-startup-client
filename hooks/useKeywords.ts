import { useState } from "react";
import { getKeywordsForUser } from "../http/getKeywords";

export const useKeywords = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState(null);
  const fetchKeywords = async (username: string) => {
    setLoading(true);
    try {
      const response = await getKeywordsForUser(username);
      setData(response);
    } catch (e: any) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };
  return {
    fetchKeywords,
    loading,
    error,
    data,
  };
};
