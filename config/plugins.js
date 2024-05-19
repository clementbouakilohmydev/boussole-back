module.exports = () => ({
  graphql: {
    enabled: true,
    config: {
      endpoint: "/graphql",
      shadowCRUD: true,
      playgroundAlways: false,
      depthLimit: 250,
      amountLimit: 250,
      apolloServer: {
        tracing: false,
      },
    },
  },
});
