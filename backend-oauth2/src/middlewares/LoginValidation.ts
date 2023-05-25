import { Request, Response, NextFunction } from 'express';
import UserModel from '../database/models/UserModel';

class LoginValidation {
  public model = UserModel;
  public loginV = async (req: Request, res: Response, next: NextFunction) => {
    console.log(req.body);
    const { email, password } = req.body;
    // const REGEX_EMAIL = /\S+@\S+\.\S+/;
    if (!email) {
      return res.status(400).json({ message: 'All fields must be filled' });
    }

    if (!password) {
      return res.status(400).json({ message: 'All fields must be filled' });
    }
    const result = await this.model.findOne({ where: { email }, raw: true });
    if (!result) {
      return res.status(401).json({ message: 'Incorrect email or password' });
    }
    next();
  };
}

export default LoginValidation;
