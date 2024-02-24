import { Request, Response, NextFunction } from "express";


interface CustomRequest extends Request {
    user: {
        role: string; // Add the 'role' property with its type
        // Add other properties of the user object as needed
    };
}


export const isAdmin = (req: CustomRequest, res: Response, next: NextFunction) => {
    if (req.user.role === "admin") {
        next();
    } else {
        res.status(403).send("Unauthorized");
    }
}

export const isManager = (req: CustomRequest, res: Response, next: NextFunction) => {
    if (req.user.role === "manager") {
        next();
    } else {
        res.status(403).send("Unauthorized");
    }
}

export const isWaiter = (req: CustomRequest, res: Response, next: NextFunction) => {
    if (req.user.role === "waiter") {
        next();
    } else {
        res.status(403).send("Unauthorized");
    }
}

export const isChef = (req: CustomRequest, res: Response, next: NextFunction) => {
    if (req.user.role === "chef") {
        next();
    } else {
        res.status(403).send("Unauthorized");
    }
}



