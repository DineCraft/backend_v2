import express from 'express'
import {Response, Request} from 'express'
import { addCuisine, getCuisinesByRestaurant } from '../controllers/cuisine.controller';
import { verifyToken } from '../middlewares/verifyToken';


const router = express.Router();

router.get('/:restaurant_id/cuisines', verifyToken , async (req: Request, res: Response) => {
    try {
        const {restaurant_id} = req.params;
        const cuisine = await getCuisinesByRestaurant({restaurantId: restaurant_id});
        res.status(200).send(cuisine);
    } catch (error) {
        res.status(400).send
    }
}
);

router.post('/:restaurantId/cuisines', verifyToken , async (req: Request, res: Response) => {
    try {
        const {restaurant_id} = req.params;
        const cuisine = await addCuisine({restaurantId: restaurant_id, cuisineName: req.body.cuisineName});
        res.status(200).send(cuisine);
    } catch (error) {
        res.status(400).send
}
});



export default router;