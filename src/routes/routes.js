import { Router } from 'express';
import * as PersonajesController from './../controllers/PersonajesController';
import * as PlanetasController from './../controllers/PlanetasController';
import * as NavesController from './../controllers/NavesController';

const router = Router();

router.get('/', (req, res)=>{
    res.json({
        message: 'Bienvenido al index de mi aplicación'
    })
});

router.get('/personajes', PersonajesController.todosLosPersonajes);

router.get('/personajes-alfb', PersonajesController.personajesPorNombre);

router.get('/personaje/:id', PersonajesController.personajePorId);

router.get('/personaje-por-nombre/:nombre', PersonajesController.personajePorNombre);


router.get('/planetas', PlanetasController.todosLosPlanetas);

router.get('/naves', NavesController.todasLasNaves);

export default router;
