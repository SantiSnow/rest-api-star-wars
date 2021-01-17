import { Scheema, model} from 'mongoose';

const NavesModel = new Scheema({
    Nombre: String,
    Propietario: String,
    Tipo: String,
    Estado: String,
    Foto: String,
    ID: Number
});

export default model('Naves', NavesModel);