import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser';

import { ApolloServer } from '@apollo/server';
import {expressMiddleware} from '@apollo/server/express4'

// import { User } from "@dinecraft/backend/packages/restaurant/graphql/user"
import { User } from '../packages/restaurant/graphql/user';
// import { Cuisine } from '../packages/restaurant/graphql/cuisine';
import { Employee } from '../packages/restaurant/graphql/employee';
// import { Category } from '../packages/restaurant/graphql/category';
import AuthRoutes  from '../packages/restaurant/routes/restaurant.route';
// import CuisineRoutes from '../packages/restaurant/routes/cuisine.route';
// import CategoryRoutes from '../packages/restaurant/routes/category.route';
import EmployeeRoutes from '../packages/restaurant/routes/employee.route';

export async function initServer(){
    const app = express();
    app.use(bodyParser.json());
    app.use(cors());

    app.use('/restaurant', AuthRoutes);
    // app.use('/restaurant', CuisineRoutes);
    // app.use('/restaurant', CategoryRoutes);
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