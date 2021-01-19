import Planetas from './../models/Planetas';

export const todosLosPlanetas = async (req, res)=>{
    try{
        const planetas = await Planetas.find();
        res.json({ planetas });
    }
    catch(error){
        return res.status(500).send({ message: 'Error interno del servidor'});
    }
}

export const planetasPorNombre = async (req, res)=>{
    try{
        const planetas = await Planetas.find().sort({ "Nombre": 1 });
        res.json({ planetas });
    }
    catch(error){
        return res.status(500).send({ message: 'Error interno del servidor'});
    }
}

export const planetaPorId = async (req, res)=>{
    const id = req.params.id;
    if(!id){
        return res.status(500).send({ message: 'Se necesitan los parametros para obtener los datos'});
    }
    try{
        const planeta = await Planetas.find({ ID: id });
        res.json({ planeta });
    }
    catch(error){
        return res.status(500).send({ message: 'Error interno del servidor'});
    }
}