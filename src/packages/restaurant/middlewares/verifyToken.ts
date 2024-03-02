import { Request, Response , NextFunction } from "express";
import jwt from 'jsonwebtoken';

export const verifyToken = (req: Request, res: Response, next: NextFunction) => {

    const bearerHeader = req.headers['authorization'];

    if (typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];

        const verify = jwt.verify(bearerToken, `${process.env.JWT_SECRET}`);
        if(!verify) return res.status(403).send("Unauthorized");

        req.body.user = verify;
        const restaurantId = req.body.user.RestaurantId;
        if(restaurantId !== req.params.restaurant_id) return res.status(403).send("Unauthorized");

        next();
    } else {
        res.status(403).send("Unauthorized");
    }
}