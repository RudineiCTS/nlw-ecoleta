import express from 'express';
import ClassController from './controllers/ClassController';
import ConnectionControllers from  './controllers/ConnectionController';
import RegisterContollers from './controllers/RegisterController';
import LoginControllers from './controllers/LoginController';


const routes = express.Router();
const classesControllers = new ClassController();
const connectionsControllers = new ConnectionControllers();
const registerController = new RegisterContollers();
const LoginController = new LoginControllers();

routes.post('/classes', classesControllers.create);
routes.get('/classes', classesControllers.index);

routes.post('/connections',connectionsControllers.create);
routes.get('/connections',connectionsControllers.index);

routes.post('/register', registerController.create);
routes.post('/login', LoginController.login);

export default routes;