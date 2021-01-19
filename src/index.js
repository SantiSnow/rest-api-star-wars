import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import IndiceRutas from './routes/routes';
import './database/database';


//configuración del server
const app = express();
app.set('port', process.env.PORT || 3000);


//middlewares
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));


//rutas
app.use(IndiceRutas);


//inicio del server
app.listen(app.get('port'));
console.log('El servidor esta funcionando en el puerto', app.get('port'));