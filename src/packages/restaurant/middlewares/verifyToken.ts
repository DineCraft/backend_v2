import { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken';

export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
    const bearerHeader = req.headers['authorization'];

    if (typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(' ');
        if (bearer.length !== 2 || bearer[0] !== 'Bearer') {
            return res.status(400).json({ error: "Invalid authorization header format" });
        }
        const bearerToken = bearer[1];

        try {
            const verify = jwt.verify(bearerToken, `${process.env.JWT_SECRET}`);
            console.log(verify);
            if (!verify) {
                return res.status(403).json({ error: "Unauthorized" });
            }

            req.body.user = verify; // Store the decoded token in req.user
            const restaurantId = req.body.user.RestaurantId;
            if (restaurantId !== req.params.restaurant_id) {
                return res.status(403).json({ error: "Unauthorized" });
            }

            next();
        } catch (error) {
            return res.status(401).json({ error: "Invalid token" });
        }
    } else {
        res.status(403).json({ error: "Authorization header missing" });
    }
}
