import { Scheema, model} from 'mongoose';

const PlanetasModel = new Scheema({
    Nombre: String,
    Descripción: String,
    Primer_aparición: String,
    Foto: String,
    ID: Number
});

export default model('Planetas', PlanetasModel);