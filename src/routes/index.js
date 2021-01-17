import { Router } from 'express';

const router = Router();

router.get('/', (req, res)=>{
    res.json({
        message: 'Bienvenido al index de mi aplicación'
    })
});

router.get('/personajes', (req, res)=>{
    res.json({
        message: 'Personajes de star wars'
    })
});

router.get('/planetas', (req, res)=>{
    res.json({
        message: 'Planetas de Star Wars'
    })
});

router.get('/naves', (req, res)=>{
    res.json({
        message: 'Naves de Star Wars'
    })
});

export default router;
