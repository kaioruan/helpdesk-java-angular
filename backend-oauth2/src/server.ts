import { App } from './app';
import 'dotenv/config';
// import router from './router';

const PORT = process.env.APP_PORT || 3001;
// app.listen(PORT, () => console.log('ouvindo porta', PORT));
new App().start(PORT);
