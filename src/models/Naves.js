import { Schema, model} from 'mongoose';

const NavesModel = new Schema({
    Nombre: String,
    Propietario: String,
    Tipo: String,
    Estado: String,
    Foto: String,
    ID: Number
});

export default model('Naves', NavesModel);