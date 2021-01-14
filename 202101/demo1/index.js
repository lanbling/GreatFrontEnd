import koa from 'koa';
import statics from 'koa-static';
import path from 'path';
import router from './routes/route';
import koaBody from 'koa-body';
import jsonutil from 'koa-json';
import cors from '@koa/cors';
import compose from 'koa-compose';
import compress from 'koa-compress';

const app = new koa();

const isDevMode = process.env.NODE_ENV === 'production' ? false : true;
console.log(process.env.NODE_ENV);

const middleware = compose([
    koaBody(),
    statics(path.join(__dirname,'./public')),
    cors(),
    jsonutil({pretty:false, param:'pretty'})
])

app.use(middleware);

if(!isDevMode){
    app.use(compress());
}

app.use(router());


app.listen(3000);