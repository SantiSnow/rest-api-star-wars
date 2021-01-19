import Personajes from './../models/Personajes'
import Planetas from './../models/Planetas';
import Naves from './../models/Naves';

//controllers para los personajes
export const todosLosPersonajes = async (req, res)=>{

    const personajes = await Personajes.find();

    res.json({ personajes });
}

export const personajesPorNombre = async (req, res)=>{

    const personajes = await Personajes.find().sort({ "Nombre": 1 });

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


//controllers para los planetas
export const planetas = async (req, res)=>{
    const planetas = await Planetas.find();

    res.json({ planetas });
}

export const planetasPorNombre = async (req, res)=>{
    const planetas = await Planetas.find().sort({ "Nombre": 1 });

    res.json({ planetas });
}

export const planetaPorId = async (req, res)=>{
    const id = req.params.id;

    const planeta = await Planetas.find({ ID: id });

    res.json({ planeta });
}

//controllers para las naves
export const naves = async (req, res)=>{
    const naves = await Naves.find();

    res.json({ naves });

}

export const navesPorNombre = async (req, res)=>{
    const naves = await Naves.find().sort({ "Nombre": 1 });

    res.json({ naves });
}

export const navePorId = async (req, res)=>{
    const id = req.params.id;

    const nave = await Naves.find({ ID: id });

    res.json({ nave });
}