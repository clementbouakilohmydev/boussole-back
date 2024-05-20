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

const collectionsQuery = `
  query CollectionsQuery($query: String, $first: Int) {
    collections(
      sortKey: TITLE
      query: $query
      first: $first
    ) {
      nodes {
        title
        handle
        image {
          url
        }
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
  async find(ctx) {
    const { data, meta } = await super.find(ctx);

    const isMultiple = data.length > 1;

    const query = data
      .map(
        (
          /** @type {{ attributes: { shopifyID: any; }; }} */ c,
          /** @type {number} */ index
        ) =>
          `id:${c.attributes.shopifyID}${
            index < data.length - 1 && isMultiple ? " OR " : ""
          }`
      )
      .join("");

    const { data: shopify } = await client.request(collectionsQuery, {
      variables: { first: data.length, query },
    });

    return { data, meta, shopify };
  },
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
