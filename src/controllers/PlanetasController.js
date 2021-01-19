import Planetas from './../models/Planetas';

export const todosLosPlanetas = async (req, res)=>{
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