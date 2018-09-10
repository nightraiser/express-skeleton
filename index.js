import express from 'express';
// INITIALISE THE APP
const app = express();
import routes from './routes';
// INITIALISE THE ROUTES
routes(app);

// RUN THE SERVER
app.listen(3000, ()=> console.log('Listening on PORT 3000'));