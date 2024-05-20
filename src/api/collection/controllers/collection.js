const { createCoreController } = require("@strapi/strapi").factories;
const { createStorefrontApiClient } = require("@shopify/storefront-api-client");

const collectionQuery = `
  query CollectionQuery($id: ID) {
    collection(id: $id) {
      title
      handle
      image {
        url
      }
    }
  }
`;

const client = createStorefrontApiClient({
  storeDomain: "http://projet-boussole.myshopify.com",
  apiVersion: "2024-04",
  publicAccessToken: "963489a685f158c6a0e499c449321340",
});

module.exports = createCoreController("api::collection.collection", () => ({
  async findOne(ctx) {
    const response = await super.findOne(ctx);
    const id = `gid://shopify/Collection/${response?.data?.attributes?.shopifyID}`;
    const { data } = await client.request(collectionQuery, {
      variables: { id },
    });
    response.shopify = data;
    return response;
  },
}));
