import { Router } from 'express';
import * as PersonajesController from './../controllers/PersonajesController';
import * as PlanetasController from './../controllers/PlanetasController';
import * as NavesController from './../controllers/NavesController';

const router = Router();

//home route
router.get('/', (req, res)=>{
    res.json({
        message: 'Bienvenido al index de mi aplicación'
    })
});

//rutas de los personajes
router.get('/personajes', PersonajesController.todosLosPersonajes);

router.get('/personajes-alfb', PersonajesController.personajesPorNombre);

router.get('/personaje/:id', PersonajesController.personajePorId);

router.get('/personaje-por-nombre/:nombre', PersonajesController.personajePorNombre);


//rutas de los planetas
router.get('/planetas', PlanetasController.todosLosPlanetas);

router.get('/planetas-alfb', PlanetasController.planetasPorNombre);

router.get('/planeta/:id', PlanetasController.planetaPorId);


//rutas de las naves
router.get('/naves', NavesController.todasLasNaves);

router.get('/naves-alfb', NavesController.todasLasNaves);

router.get('/naves/:id', NavesController.todasLasNaves);

export default router;
