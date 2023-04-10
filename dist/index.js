import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs } from './schema/type_defs.js';
import { resolvers } from './schema/resolvers.js';
import dotenv from 'dotenv';
dotenv.config();
const port = parseInt(process.env.PORT) || 4000;
const server = new ApolloServer({
    typeDefs,
    resolvers,
});
const { url } = await startStandaloneServer(server, { listen: { port: port } });
console.log(`🚀 Server listening at: ${url}`);
