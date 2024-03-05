import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser';

import { ApolloServer } from '@apollo/server';
import {expressMiddleware} from '@apollo/server/express4'

import { User } from '../packages/restaurant/graphql/user';
import { Employee } from '../packages/restaurant/graphql/employee';
import AuthRoutes  from '../packages/restaurant/routes/restaurant.route';
import EmployeeRoutes from '../packages/restaurant/routes/employee.route';

export async function initServer(){
    const app = express();
    app.use(bodyParser.json());
    app.use(cors());

    app.use('/restaurant', AuthRoutes);
    app.use('/restaurant', EmployeeRoutes);
    
    const server = new ApolloServer({
        typeDefs:`
            ${User.types}
            ${Employee.types}

            type Query {
                ${User.queries}
                ${Employee.queries}
            }

            type Mutation {
                ${User.mutations}
                ${Employee.mutations}
            }

        `,
        resolvers:{
            Query: {
                ...User.resolvers.queries,
                ...Employee.resolvers.queries
            }
        },
    });

    await server.start();

    app.use("/graphql", expressMiddleware(server));

    return app;

}