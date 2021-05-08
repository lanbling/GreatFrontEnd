import Router from 'koa-router';
import AuthController from '../api/AuthController';

const router = new Router();

router.prefix('/auth');
router.post('/reg', AuthController.reg);
router.get('/getCaptcha', AuthController.getCaptcha);
router.get('/login', AuthController.login);
router.get('/forget', AuthController.forget);

export default router;