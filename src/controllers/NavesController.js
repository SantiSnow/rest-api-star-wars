import Naves from './../models/Naves';

export const todasLasNaves = async (req, res)=>{
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