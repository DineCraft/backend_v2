import { Request, Response , NextFunction } from "express";

export const verifyToken = (req: Request, res: Response, next: NextFunction) => {

    const bearerHeader = req.headers['authorization'];

    if (typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];
        req.body.token = bearerToken;
        next();
    } else {
        res.status(403).send("Unauthorized");
    }
}