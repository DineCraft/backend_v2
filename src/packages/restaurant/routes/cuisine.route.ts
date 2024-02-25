import express from 'express'
import {Response, Request} from 'express'
import { addCuisine } from '../controllers/cuisine.controller';


const router = express.Router();

router.get('/cuisine', async (req: Request, res: Response) => {
    res.send('Hello from cuisine');
}
);

router.post('/:restaurant_id', async (req: Request, res: Response) => {
    try {
        const {restaurant_id} = req.params;
        console.log(req.params);
        const cuisine = await addCuisine({restaurantId: restaurant_id, cuisineName: req.body.cuisineName});
        res.status(200).send(cuisine);
    } catch (error) {
        res.status(400).send
}
});



export default router;