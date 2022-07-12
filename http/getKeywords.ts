export const getKeywordsForUser = async (username: string) => {
  const URL = `/api/get-keywords?username=${username}`;
  const raw = await fetch(URL, {
    method: "GET",
  });
  const response = await raw.json();
  return response;
};
