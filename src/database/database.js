import mongoose from 'mongoose';
import config from './../config';

//conexion a la base de datos
(async () =>{
    try{
        const db = await mongoose.connect(config.mongodburl,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true
            });
            console.log("Conectado a la base de datos", db.connection.name);
    }
    catch(error){
        console.log("Error al conectar con la base de datos, detalles", error);
    }
})();
