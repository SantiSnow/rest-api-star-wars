import Personajes from './../models/Personajes'

export const todosLosPersonajes = async (req, res)=>{
    res.json({
        message: "Aqui se devolveran todos los personajes"
    });
}

export const personajesPorNombre = async (req, res)=>{
    res.json({
        message: "Aqui se devolveran todos los personajes ordenados por nombre alfabeticamente"
    });
}

export const personajePorId = async (req, res)=>{
    res.json({
        message: "Aqui se devolvera un personaje segun el id provisto"
    });
}

export const personajePorNombre = async (req, res)=>{
    res.json({
        message: "Aqui se devolvera un personaje segun el nombre provisto"
    });
}