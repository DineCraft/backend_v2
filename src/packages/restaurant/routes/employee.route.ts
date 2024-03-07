import express from 'express'

import { addEmployee, getEmployeesByRestaurant } from '../controllers/employee.controller'

import { verifyToken } from '../middlewares/verifyToken';

const router = express.Router();

router.get('/:restaurant_id/employees', verifyToken , async (req, res) => {
    try{
        const {restaurant_id} = req.params;
        const employees = await getEmployeesByRestaurant({RestaurantId: restaurant_id});
        res.status(200).send(employees);
    }
    catch (error) {
        res.status(400).send(error);
    }
});

router.post('/:restaurant_id/employees', async (req, res) => {
    try {
        const {restaurant_id} = req.params;
        const employee = await addEmployee({restaurant_id, ...req.body});
        res.status(200).send(employee)
    } catch (error) {
        res.status(400).send
    }
})


export default router;