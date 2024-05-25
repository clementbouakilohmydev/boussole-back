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
      products(first: 250, filters: {available: false}) {
        edges {
          cursor
        }
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
        id
        title
        handle
        image {
          url
        }
        products(first: 250, filters: {available: false}) {
          edges {
            cursor
          }
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

    const { data: shopifyData } = await client.request(collectionsQuery, {
      variables: { first: data.length, query },
    });

    return {
      data: data.map((c) => {
        const shopify = shopifyData.collections.nodes.find((n) =>
          n.id.includes(c.attributes.shopifyID)
        );

        return {
          ...c,
          shopify: {
            title: shopify?.title,
            image: shopify?.image,
            handle: shopify?.handle,
            productsLength: (shopify?.products?.edges || []).length || 0,
          },
        };
      }),
      meta,
    };
  },
  async findOne(ctx) {
    const response = await super.findOne(ctx);
    const id = `gid://shopify/Collection/${response?.data?.attributes?.shopifyID}`;
    const { data } = await client.request(collectionQuery, {
      variables: { id },
    });

    return {
      ...response,
      shopify: {
        title: data?.collection?.title,
        image: data?.collection?.image,
        handle: data?.collection?.handle,
        productsLength: (data?.collection?.products?.edges || []).length || 0,
      },
    };
  },
}));
