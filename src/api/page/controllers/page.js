const { createCoreController } = require("@strapi/strapi").factories;
const { createStorefrontApiClient } = require("@shopify/storefront-api-client");

const client = createStorefrontApiClient({
  storeDomain: "http://projet-boussole.myshopify.com",
  apiVersion: "2024-04",
  publicAccessToken: "963489a685f158c6a0e499c449321340",
});

/**
 * @param {any} id
 */
async function getCollection(id) {
  const { data } = await client.request(productsSliderQuery, {
    variables: { id: `gid://shopify/Collection/${id}` },
  });
  return data;
}

module.exports = createCoreController("api::page.page", () => ({
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

const productsSliderQuery = `
  query ProductsSliderQuery($country: CountryCode, $language: LanguageCode, $id: ID) {
    collection(id: $id) {
      products(sortKey: CREATED, reverse: true, first: 6, filters: {available: true}) {
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
