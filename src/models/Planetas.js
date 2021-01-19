import { Schema, model} from 'mongoose';

const PlanetasModel = new Schema({
    Nombre: String,
    Descripción: String,
    Primer_aparición: String,
    Foto: String,
    ID: Number
});

export default model('Planetas', PlanetasModel);