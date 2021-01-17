import express from 'express';
import Routes from './routes/routes';
import './database/database';

//configuración del server
const app = express();
app.set('port', process.env.PORT || 3000);

//rutas
app.use(Routes);

//inicio del server
app.listen(app.get('port'));
console.log('El servidor esta funcionando en el puerto', app.get('port'));