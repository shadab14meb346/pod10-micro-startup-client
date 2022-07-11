const STAGING_ENDPOINT = "https://api.galaxymail.co/graphql";
const PRODUCTION_ENDPOINT = "https://api.galaxymail.co/graphql";
const LOCAL_ENDPOINT = "http://localhost:3000/dev/graphql";
const config = {
  GRAPHQL_ENDPOINT:
    process.env.NODE_ENV === "production"
      ? PRODUCTION_ENDPOINT
      : process.env.NODE_ENV === "development"
      ? STAGING_ENDPOINT
      : STAGING_ENDPOINT,
};

export default config;
