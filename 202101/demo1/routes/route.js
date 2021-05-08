import combineRoutes from 'koa-combine-routers';
import authRouter from './authRouter';

module.exports = combineRoutes(authRouter)