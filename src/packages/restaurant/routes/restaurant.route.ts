import express from 'express'
import {Response, Request} from 'express'
import { register, login } from '../controllers/user.controller';

const router = express.Router();

router.post('/register', async (req: Request, res: Response) => {
    try {
        const user = await register(req.body);
        res.status(201).send({message: "registered successfully"});
    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
});

router.post('/login', async (req: Request, res: Response) => {
    try {
        const user = await login(req.body);
        res.status(200).send({user, message: "logged in successfully"});
    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
});


export default router;