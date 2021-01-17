import { Scheema, model} from 'mongoose';

const PersonajesModel = new Scheema({
    Nombre: String,
    Estado: String,
    Planeta_Origen: String,
    Rango: String,
    Sensible: Boolean,
    Trilogia: String,
    Peliculas: String,
    Raza: String,
    Genero: String,
    Interprete: String,
    Foto: String,
    ID: Number
});

export default model('Personaje', PersonajesModel);