import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone'
import {typeDefs} from './schema/type_defs.js';
import{ resolvers} from './schema/resolvers.js';
import dotenv from 'dotenv';
dotenv.config();

const port = parseInt(process.env.PORT || "4000");



console.log(process.env.ACCESS_TOKEN, 'this is token')


const server = new ApolloServer({
  typeDefs,
  resolvers,
});

console.log(process.env.ACCESS_TOKEN)

const { url } = await startStandaloneServer(server, { listen: { port: port } });

console.log(`🚀 Server listening at: ${url}`);
