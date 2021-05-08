import koa from 'koa';
import statics from 'koa-static';
import path from 'path';
import router from './routes/route';
import koaBody from 'koa-body';
import jsonutil from 'koa-json';
import cors from '@koa/cors';
import compose from 'koa-compose';
import compress from 'koa-compress';
import JWT from 'koa-jwt';
import ErrorHandle from './common/errorHandle';
import config from './config';

const app = new koa();
const jwt = JWT({secret: config.JWT_SECRET}).unless({
    path: [/\/auth/]
});

const isDevMode = process.env.NODE_ENV === 'production' ? false : true;

const middleware = compose([
    koaBody(),
    statics(path.join(__dirname, './public')),
    cors(),
    jsonutil({ pretty: false, param: 'pretty' }),
    ErrorHandle,
    jwt,
])

if (!isDevMode) {
    app.use(compress());
}

app.use(middleware);
app.use(router());
app.listen(3000);