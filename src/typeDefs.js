// import { ApolloServer } from "@apollo/server";
import { graphql } from "@apollo/server";
export const typeDefs = `#graphql
type Movie {
    _id: ID!
    title: String!
    rating: Float!
    year: Int!
    reviews: [Review]
  
  }
type Review {
    comment: String
    createAt: String
    createBy: String
   

}


type Query {
    getMovies: [Movie!]!,
    getMovie(id: ID!): Movie!
   
  }

type Mutation {
    createMovie(title: String!, rating: Float!, year: Int!): Movie!
    deleteMovie(id: ID!): Movie
    updateMovie(id: ID!, title: String, rating: Float, year: Int!): Movie!

   

   

  }





`;