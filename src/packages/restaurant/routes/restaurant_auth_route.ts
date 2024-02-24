import express from 'express'
import {Response, Request} from 'express'
import { register } from '../controllers/restaurantAuth';

const router = express.Router();

router.post('/register', async (req: Request, res: Response) => {
    try {
        const user = await register(req.body);
        res.status(201).send(user);
    } catch (error) {
        res.status(400).send(error);
    }
});

export default router;