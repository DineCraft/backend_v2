import express from 'express'
import {Response, Request} from 'express'
import { addCategory, getCategoriesByRestaurant } from '../controllers/category.controller';


const router = express.Router();

router.get('/cuisine', async (req: Request, res: Response) => {
    res.send('Hello from cuisine');
}
);

router.post('/:restaurant_id/:cuisine_id', async (req: Request, res: Response) => {
    try {
        const {cuisine_id} = req.params;
        const category = await addCategory({cuisineId: cuisine_id, categoryName: req.body.categoryName});
        res.status(200).send(category);
    } catch (error) {
        res.status(400).send
}
});


//get categories by restaurant
router.get('/:restaurant_id', async (req: Request, res: Response) => {
    try {
        const {restaurant_id} = req.params;
        console.log(req.params);
        const cuisine = await getCategoriesByRestaurant({restaurantId: restaurant_id});
        res.status(200).send(cuisine);
    } catch (error) {
        res.status(400).send
}
});





export default router;