module.exports = () => ({
  graphql: {
    enabled: true,
    config: {
      endpoint: "/graphql",
      shadowCRUD: true,
      playgroundAlways: false,
      depthLimit: 100,
      amountLimit: 100,
      apolloServer: {
        tracing: false,
      },
    },
  },
});
