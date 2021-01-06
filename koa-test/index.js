const Koa = require('koa');
const app = new Koa();
const Router = require('koa-router');
const router = new Router();
const koaBody = require('koa-body');

router.post('/post', async (ctx) => {
    let {body, header} = ctx.request;
    let result;
    // 鉴权
    if(!header.role || header.role != 'admin'){
        result = {
            code: 401,
            msg: 'unauthorized post'
        };
    }else{
        // 判断参数
        if(!body.name || !body.email){
            result = {
                code: 404,
                msg: "name与email不得为空"
            };
        }else{
            result = {
                code: 200,
                data: {
                    name: body.name,
                    email: body.email
                },
                msg: '上传成功'
            };
        }
    }
    ctx.body = result;
});

app.use(koaBody());
app.use(router.routes()).use(router.allowedMethods());
app.listen(3000);