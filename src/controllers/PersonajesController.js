import Personajes from './../models/Personajes'

export const todosLosPersonajes = async (req, res)=>{

    const personajes = await Personajes.find();

    res.json({ personajes });
}

export const personajesPorNombre = async (req, res)=>{

    const personajes = await Personajes.find().sort({ "nombre": 1 });

    res.json({ personajes });
}

export const personajePorId = async (req, res)=>{

    const id = req.params.id;

    const personaje = await Personajes.find({ ID: id });
    
    res.json({ personaje });
}

export const personajePorNombre = async (req, res)=>{

    const nombre = req.params.nombre;
    console.log(nombre);
    const personaje = await Personajes.find({ Nombre: nombre });

    res.json({ personaje });
}

