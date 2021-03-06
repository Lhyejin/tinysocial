const {ApolloServer} = require('apollo-server');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');

const {mainAPI} = require('./utils');
const {createStore} = require('./database');

const db = createStore();
const dataSources = () => ({
  mainAPI: new mainAPI(db),
});
const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources,
  context: ({req}) => {
    // TODO(arin-kwak): Serve user authentication info like token, etc
    return {};
  },
});

if (process.env.NODE_ENV !== 'test') {
  server.listen({port: 15780}).
      then(({url}) => console.log(`Server running at at ${url}`));
}
