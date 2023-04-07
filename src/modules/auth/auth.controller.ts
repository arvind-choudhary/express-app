import { Request, Response, NextFunction } from 'express';

interface IAuth {
    login(req: Request, res: Response, next: NextFunction): void;
    logout(req: Request, res: Response, next: NextFunction): void;
    forgotPassword(req: Request, res: Response, next: NextFunction): void;
    resetPassword(req: Request, res: Response, next: NextFunction): void;
    updatePassword(req: Request, res: Response, next: NextFunction): void;
}


class Auth implements IAuth {
    
    async login(req: Request, res: Response, next: NextFunction) {

    }

}