import * as bcrypt from 'bcryptjs';
import * as Jwt from 'jsonwebtoken';
import axios from 'axios';
import * as qs from 'qs';
import IUser from '../interface/IUser';
import IToken from '../interface/IToken';
import UserModel from '../database/models/UserModel';
import 'dotenv/config';

interface token {
  userId: number;
  iat: number;
  exp: number;
}
const JWT_SECRET = 'jwt_secret';
class LoginService {
  public model = UserModel;

  public login = async (email: string, password: string): Promise<IToken> => {
    const user = await this.model.findOne({ where: { email }, raw: true }) as IUser;
    if (!user) {
      throw new Error('User not found');
    }
    if (!bcrypt.compareSync(password, user.password)) {
      throw new Error('Incorrect password');
    }
    const token = Jwt.sign({ userId: user.id }, JWT_SECRET, {
      expiresIn: '1d',
    });
    return token as unknown as IToken;
  };

  public validate = async (authorization: string): Promise<IUser> => {
    const token = Jwt.verify(authorization, JWT_SECRET) as token;
    if (token) {
      const { userId } = token;
      const result = await this.model.findOne(
        { where: { id: userId }, raw: true, attributes: { exclude: ['password'] } },
      ) as IUser;
      return result;
    }
    throw new Error('Invalid token');
  };

  // eslint-disable-next-line max-lines-per-function
  public googleLogin = async (code: string): Promise<any> => {
    const url = 'https://oauth2.googleapis.com/token';
    const values = {
      code,
      // eslint-disable-next-line
      client_id: process.env.GOOGLE_CLIENT_ID,
      // eslint-disable-next-line
      client_secret: process.env.GOOGLE_CLIENT_SECRET,
      // eslint-disable-next-line
      redirect_uri: process.env.GOOGLE_OAUTH_REDIRECT_URL,
      // eslint-disable-next-line
      grant_type: 'authorization_code',
    };
    try {
      const response = await axios.post(url, qs.stringify(values), {
        headers: {
          // eslint-disable-next-line @typescript-eslint/naming-convention
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });
      return response.data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error : any) {
      console.log(error);
      throw new Error(error.message);
    }
  };

  public createUser = async (username: string, email: string): Promise<void> => {
    const passwordHash = bcrypt.hashSync(email, 10);
    const user = await this.model.create({ username, email, password: passwordHash });
    if (!user) throw new Error('Error creating user');
    await this.verifyUser(username, email);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public verifyUser = async (username: string, email: string): Promise<any> => {
    const user = await this.model.findOne({ where: { email }, raw: true }) as IUser;
    if (!user) {
      await this.createUser(username, email);
    }
    const token = await this.login(email, email);
    return token as unknown as IToken;
  };
}

export default LoginService;
