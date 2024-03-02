import express from 'express'
import {Response, Request} from 'express'
import { addCategory, getCategoriesByRestaurant } from '../controllers/category.controller';
import { verifyToken } from '../middlewares/verifyToken';


const router = express.Router();

router.get('/cuisines', verifyToken , async (req: Request, res: Response) => {
    res.send('Hello from cuisine');
}
);

router.post('/:restaurant_id/categories', verifyToken, async (req: Request, res: Response) => {
    try {
        const {cuisine_id} = req.body;
        const category = await addCategory({cuisineId: cuisine_id, categoryName: req.body.categoryName});
        res.status(200).send(category);
    } catch (error) {
        res.status(400).send
}
});


//get categories by restaurant
router.get('/:restaurant_id/categories', verifyToken , async (req: Request, res: Response) => {
    try {
        const {restaurant_id} = req.params;
        const cuisine = await getCategoriesByRestaurant({restaurantId: restaurant_id});
        res.status(200).send(cuisine);
    } catch (error) {
        res.status(400).send
}
});





export default router;