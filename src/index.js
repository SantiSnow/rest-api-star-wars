import express from 'express';
import IndexRoutes from './routes/index';

//configuración del server
const app = express();
app.set('port', process.env.PORT || 3000);


//rutas
app.get('/', (req, res)=>{
    res.json({
        message: 'Bienvenido al index de mi aplicación'
    })
});

app.use(IndexRoutes);

//inicio del server
app.listen(app.get('port'));
console.log('El servidor esta funcionando en el puerto', app.get('port'));