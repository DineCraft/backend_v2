import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser';

import { ApolloServer } from '@apollo/server';
import {expressMiddleware} from '@apollo/server/express4'

import { User } from '../packages/restaurant/graphql/user';
import { Cuisine } from '../packages/restaurant/graphql/cuisine';
import { Employee } from '../packages/restaurant/graphql/employee';
import { Category } from '../packages/restaurant/graphql/category';
import AuthRoutes  from '../packages/restaurant/routes/restaurant.route';
import CuisineRoutes from '../packages/restaurant/routes/cuisine.route';

export async function initServer(){
    const app = express();
    app.use(bodyParser.json());
    app.use(cors());

    app.use('/auth', AuthRoutes);
    app.use('/cuisine', CuisineRoutes);
    
    const server = new ApolloServer({
        typeDefs:`
            ${User.types}
            ${Cuisine.types}
            ${Employee.types}
            ${Category.types}

            type Query {
                ${User.queries}
                ${Cuisine.queries}
                ${Employee.queries}
                ${Category.queries}
            }

            type Mutation {
                ${User.mutations}
                ${Cuisine.mutations}
                ${Employee.mutations}
                ${Category.mutations}
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