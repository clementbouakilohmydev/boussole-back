const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::article.article", () => ({
  async find(ctx) {
    const { data, meta } = await super.find(ctx);
    return { data, meta };
  },
}));
