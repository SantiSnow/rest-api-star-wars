import Naves from './../models/Naves';

export const todasLasNaves = async (req, res)=>{
    try{
        const naves = await Naves.find();
        res.json({ naves });
    }
    catch(error){
        return res.status(500).send({ message: 'Error interno del servidor'});
    }
}

export const navesPorNombre = async (req, res)=>{
    try{
        const naves = await Naves.find().sort({ "Nombre": 1 });
        res.json({ naves });
    }
    catch(error){
        return res.status(500).send({ message: 'Error interno del servidor'});
    }
}

export const navePorId = async (req, res)=>{
    const id = req.params.id;
    if(!id){
        return res.status(500).send({ message: 'Se necesitan los parametros para obtener los datos'});
    }
    try{
        const nave = await Naves.find({ ID: id });
        res.json({ nave });
    }
    catch(error){
        return res.status(500).send({ message: 'Error interno del servidor'});
    }
}
