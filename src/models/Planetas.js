import { Schema, model} from 'mongoose';

const PlanetasModel = new Schema({
    Nombre: String,
    Descripcion: String,
    Primer_Aparicion: String,
    Foto: String,
    ID: Number
});

export default model('Planetas', PlanetasModel);