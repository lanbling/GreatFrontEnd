import combineRoutes from 'koa-combine-routers';
import publicRouter from './publicRouter';
import loginRouter from './loginRouter';

module.exports = combineRoutes(publicRouter, loginRouter)