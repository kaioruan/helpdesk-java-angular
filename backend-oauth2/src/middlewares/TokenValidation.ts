import { Request, Response, NextFunction } from 'express';
import * as Jwt from 'jsonwebtoken';
import UserModel from '../database/models/UserModel';

interface token {
  userId: number;
  iat: number;
  exp: number;
}
const ERROR_MESSAGE = 'Token must be a valid token';
const JWT_SECRET = 'jwt_secret';
class TokenValidation {
  public model = UserModel;
  public validate = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const token = req.headers.authorization;
      if (!token) { return res.status(401).json({ message: 'Not Found' }); }
      const result = Jwt.verify(token as string, JWT_SECRET) as token;
      const { userId } = result;
      const search = await this.model.findOne(
        { where: { id: userId }, raw: true },
      );
      if (!search) {
        return res.status(401).json({ message: ERROR_MESSAGE });
      }
      next();
    } catch (error) {
      return res.status(401).json({ message: ERROR_MESSAGE });
    }
  };
}

export default TokenValidation;
