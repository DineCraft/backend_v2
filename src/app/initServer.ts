import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser';

import { ApolloServer } from '@apollo/server';
import {expressMiddleware} from '@apollo/server/express4'

import { User } from '../packages/restaurant/graphql/user';
import { Cuisine } from '../packages/restaurant/graphql/cuisine';
import { Employee } from '../packages/restaurant/graphql/employee';
import AuthRoutes  from '../packages/restaurant/routes/restaurant_auth_route';

export async function initServer(){
    const app = express();
    app.use(bodyParser.json());
    app.use(cors());

    app.use('/auth', AuthRoutes);
    
    const server = new ApolloServer({
        typeDefs:`
          ${User.types}
          ${Cuisine.types}
          ${Employee.types}



          type Query {
              ${User.queries}
              ${Cuisine.queries}
              ${Employee.queries}
          }

          type Mutation {

              ${User.mutations}
              ${Cuisine.mutations}
              ${Employee.mutations}
          }
        `,
        resolvers:{
            Query: {
                ...User.resolvers.queries,
                ...Cuisine.resolvers.queries,
                ...Employee.resolvers.queries
            }
        },
    });

    await server.start();

    app.use("/graphql", expressMiddleware(server));

    return app;

}