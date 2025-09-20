const { createOAuthHandler } = require("netlify-cms-oauth-provider-node");

exports.handler = createOAuthHandler({
  provider: "github",
  clientId: process.env.GITHUB_CLIENT_ID,
  clientSecret: process.env.GITHUB_CLIENT_SECRET,
});
