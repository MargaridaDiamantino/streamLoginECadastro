import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';


export function AuthMiddleware(req: Request, res: Response, next: NextFunction)
{
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
     if(!token)
     {
      res.status(401).json({message:'Token nao fornecido'});
      return;
     }
next();
     try {
        const decoded= jwt.verify(token,process.env.JWT_SECRET as string)
        next();
        
     } catch (error) {
   res.status(403).json({ message: 'Token inválido' });
   return ;
     }
}