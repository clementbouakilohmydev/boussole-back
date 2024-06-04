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
              currencyCode
            }
            minVariantPrice {
              amount
              currencyCode
            }
          }
          priceRange {
            maxVariantPrice {
              amount
              currencyCode
            }
            minVariantPrice {
              amount
              currencyCode
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

module.exports = createCoreController("api::product.product", () => ({
  async find(ctx) {
    const response = await super.find(ctx);

    const content = await Promise.all(
      response.data.attributes.content.map(
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
      ...response.data.attributes,
      content,
    };
  },
}));
