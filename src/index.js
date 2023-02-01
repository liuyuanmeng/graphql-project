import 'dotenv/config'
import mongoose from 'mongoose';
import { ApolloServer } from "apollo-server";
// import { startStandaloneServer } from '@apollo/server/standalone';

import { typeDefs } from './typeDefs'
import { resolvers } from './resolvers'
import { Movie as MovieModel } from './models/movie'
import Movies from './dataSources/movies'

const uri = process.env.MONGODB_URI
const main = async () => {
  await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
};

main()
  .then(console.log('🎉 connected to database successfully'))
  .catch(error => console.error(error));

const dataSources = () => ({
  movies: new Movies(MovieModel),
  });

const server = new ApolloServer({typeDefs, resolvers, dataSources});
// const { url } = await startStandaloneServer(server);

server.listen({ port: process.env.PORT || 8000 }).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
  });




  
