import combineRoutes from 'koa-combine-routers';
import publicRouter from './publicRouter';

module.exports = combineRoutes(publicRouter)