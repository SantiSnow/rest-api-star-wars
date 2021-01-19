import { Schema, model} from 'mongoose';

const PersonajesModel = new Schema({
    Nombre: {
        type: String,
        required: true,
    },
    Estado: {
        type: String,
        required: true,
    },
    Planeta_Origen: {
        type: String,
        required: true,
    },
    Rango: {
        type: String,
        required: true,
    },
    Sensible: {
        type: Boolean,
        required: true,
    },
    Trilogia: {
        type: String,
        required: true,
    },
    Peliculas: {
        type: String,
        required: true,
    },
    Raza: {
        type: String,
        required: true,
    },
    Genero: {
        type: String,
        required: true,
    },
    Interprete: {
        type: String,
        required: true,
    },
    Foto: {
        type: String,
        required: true,
    },
    ID: {
        type: Number,
        required: true,
    }
},{
    versionKey: false,
    timestamps: false
});

export default model('Personaje', PersonajesModel);