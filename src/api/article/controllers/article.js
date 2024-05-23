const { createCoreController } = require("@strapi/strapi").factories;
const { createStorefrontApiClient } = require("@shopify/storefront-api-client");

const client = createStorefrontApiClient({
  apiVersion: "2024-04",
  storeDomain: "http://projet-boussole.myshopify.com",
  publicAccessToken: "963489a685f158c6a0e499c449321340",
});

const productsSliderQuery = `
  query ProductsSliderQuery($id: ID) {
    collection(id: $id) {
      products(first: 6, sortKey: CREATED, reverse: true) {
        nodes {
          id
          title
          handle
          vendor
          metafields(
            identifiers: [{namespace: "custom", key: "taille"}, {namespace: "custom", key: "annee"}]
          ) {
            key
            value
          }
          featuredImage {
            url
            id
          }
          images(first: 2) {
            nodes {
              url
              id
            }
          }
          compareAtPriceRange {
            maxVariantPrice {
              amount
            }
          }
          priceRange {
            maxVariantPrice {
              amount
            }
          }
        }
      }
    }
  }
`;

/**
 * @param {any} id
 */
async function getCollection(id) {
  const { data } = await client.request(productsSliderQuery, {
    variables: { id: `gid://shopify/Collection/${id}` },
  });
  return data;
}

module.exports = createCoreController("api::article.article", () => ({
  async find(ctx) {
    const { data } = await super.find(ctx);

    const item = data[0];

    const content = await Promise.all(
      item.attributes.content.map(
        async (
          /** @type {{ __component: string; collection: { data: { attributes: { shopifyID: any; }; }; }; }} */ section
        ) => {
          if (
            section.__component === "blocks.products-slider" &&
            section?.collection?.data?.attributes?.shopifyID
          ) {
            const id = section.collection.data.attributes.shopifyID;
            const shopify = await getCollection(id);
            return {
              ...section,
              products: shopify?.collection?.products || [],
            };
          }

          return section;
        }
      )
    );

    return {
      ...item.attributes,
      content,
    };
  },
}));
