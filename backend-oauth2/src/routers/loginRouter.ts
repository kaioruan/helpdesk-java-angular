import * as express from 'express';
import LoginController from '../controller/UserLogin';
import LoginValidation from '../middlewares/LoginValidation';

const loginController = new LoginController();
const loginValidation = new LoginValidation();

const loginRouter = express.Router();

loginRouter.post('/login', loginValidation.loginV, loginController.login);
loginRouter.get('/login/validate', loginController.validate);
loginRouter.get('/api/oauth/google', loginController.googleLogin);

export default loginRouter;
