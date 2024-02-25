import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser';

import { ApolloServer } from '@apollo/server';
import {expressMiddleware} from '@apollo/server/express4'

import { User } from '../packages/restaurant/graphql/user';
import { Cuisine } from '../packages/restaurant/graphql/cuisine';


export async function initServer(){
    const app = express();
    app.use(bodyParser.json());
    app.use(cors());
    
    const server = new ApolloServer({
        typeDefs:`
          ${User.types}
          ${Cuisine.types}


          type Query {
              ${User.queries}
              ${Cuisine.queries}
          }
        `,
        resolvers:{
            Query: {
                ...User.resolvers.queries,
                ...Cuisine.resolvers.queries
            }
        },
    });

    await server.start();

    app.use("/graphql", expressMiddleware(server));

    return app;

}