import { Request, Response } from 'express';
import LoginService from '../services/LoginService';

// const ERROR_500 = 'Internal Server Error';

class LoginController {
  constructor(private loginService = new LoginService()) {}

  public login = async (req: Request, res: Response): Promise<Response> => {
    const { email, password } = req.body;
    const result = await this.loginService.login(email, password);
    return res.status(200).json({ token: result });
  };

  public validate = async (req: Request, res: Response): Promise<Response> => {
    const { authorization } = req.headers;
    const result = await this.loginService.validate(authorization as string);
    return res.status(200).json({ role: result });
  };
}

export default LoginController;
