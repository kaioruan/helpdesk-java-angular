import { Sequelize } from 'sequelize';
// import * as config from '../config/database';

const URI = 'mysql://root:trAt0k2rRRnOcmX4Ytrs@containers-us-west-48.railway.app:7292/railway';

export default new Sequelize(URI);
