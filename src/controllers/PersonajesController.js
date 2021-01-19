import Personajes from './../models/Personajes'

export const todosLosPersonajes = async (req, res)=>{
    try{
        const personajes = await Personajes.find();
        res.json({ personajes });
    }
    catch(error){
        return res.status(500).send({ message: 'Error interno del servidor'});
    }
}

export const personajesPorNombre = async (req, res)=>{
    try{
        const personajes = await Personajes.find().sort({ "Nombre": 1 });
        res.json({ personajes });
    }
    catch(error){
        return res.status(500).send({ message: 'Error interno del servidor'});
    }
}

export const personajePorId = async (req, res)=>{
    const id = req.params.id;
    if(!id){
        return res.status(500).send({ message: 'Se necesitan los parametros para obtener los datos'});
    }
    try{
        const personaje = await Personajes.find({ ID: id });
        res.json({ personaje });
    }
    catch(error){
        return res.status(500).send({ message: 'Error interno del servidor'});
    }
}

export const personajePorNombre = async (req, res)=>{
    const nombre = req.params.nombre;
    if(!nombre){
        return res.status(500).send({ message: 'Se necesitan los parametros para obtener los datos'});
    }
    try{
        const personaje = await Personajes.find({ Nombre: nombre });
        res.json({ personaje });
    }
    catch(error){
        return res.status(500).send({ message: 'Error interno del servidor'});
    }
}




