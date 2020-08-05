import express from 'express';
import ClassesController from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsControlle';

const routes = express();
const classesController = new ClassesController();
const connectionsController = new ConnectionsController();
// GET: Buscar ou listar uma informação
// POST: Criar alguma nova informação dentro do backend
// PUT: Atualizar uma informação existente
// DELETE: Deletar uma informação existente

// Corpo (Request Body): dados para criação ou atualização de um registro
// Route Params: identificar qual recurso eu quero atualizar ou deletar
// Query Params: Paginação, filtro, ordenação


routes.post('/classes', classesController.create);
routes.get('/classes', classesController.index);

routes.post('/connections', connectionsController.create);
routes.get('/connections', connectionsController.index);

export default routes;