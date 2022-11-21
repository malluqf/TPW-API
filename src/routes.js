const express = require('express');
const router = express.Router();

const DuvidaController = require('./controllers/DuvidaController');
const CategoriaController = require('./controllers/CategoriaController');
const DicaIniciantesController = require('./controllers/DicaIniciantesController');

router.get('/duvidas', DuvidaController.buscarTodos);
router.get('/duvida/:id', DuvidaController.buscarUm);
router.post('/duvida', DuvidaController.inserir);
router.put('/duvida/:id', DuvidaController.alterar);
router.delete('/duvida/:id', DuvidaController.excluir);

router.get('/categorias', CategoriaController.buscarTodos);
router.get('/categoria/:id', CategoriaController.buscarUm);

router.get('/dicas', DicaIniciantesController.buscarTodos);
router.get('/dica/:id', DicaIniciantesController.buscarUm);

module.exports = router;
