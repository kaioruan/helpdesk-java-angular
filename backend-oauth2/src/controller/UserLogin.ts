import { Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import LoginService from '../services/LoginService';

class LoginController {
  constructor(private loginService = new LoginService()) {}

  public login = async (req: Request, res: Response): Promise<any> => {
    const { email, password } = req.body;
    const result = await this.loginService.login(email, password);
    console.log(result);
    res.cookie('token', result, {
      maxAge: 3600000, // Tempo de vida do cookie em milissegundos
      httpOnly: false, // Acesso apenas via HTTP
      secure: true, // Apenas enviar o cookie via HTTPS
    });
    res.redirect('http://localhost:4200/home');
    // return res.status(200).json({ token: result });
  };

  public validate = async (req: Request, res: Response): Promise<Response> => {
    const { authorization } = req.headers;
    const result = await this.loginService.validate(authorization as string);
    return res.status(200).json(result);
  };

  // eslint-disable-next-line max-lines-per-function
  public googleLogin = async (req: Request, res: Response): Promise<any> => {
    try {
      const code = req.query.code as string;
      // eslint-disable-next-line
      const { id_token, access_token } = await this.loginService.googleLogin(code);
      // eslint-disable-next-line
      if (!id_token) throw new Error('Invalid code');
      const googleUser = jwt.decode(id_token) as { email: string, name: string };
      const { email, name } = googleUser;
      const token = await this.loginService.verifyUser(name, email);
      // eslint-disable-next-line
      res.locals.token = token;
      res.cookie('token', token, {
        maxAge: 3600000, // Tempo de vida do cookie em milissegundos
        httpOnly: false, // Acesso apenas via HTTP
        secure: true, // Apenas enviar o cookie via HTTPS
      });
      res.redirect('http://localhost:4200/home');
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: error });
    }
  };
}

export default LoginController;
