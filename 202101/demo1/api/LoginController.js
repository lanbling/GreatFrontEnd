import send from '../config/nodemailer';
import moment from 'moment';

class LoginController{
    constructor(){}

    async forget(ctx){
        const {body} = ctx.request;
        console.log(body);
        try{
            if(!body.username){
                ctx.body = {
                    code: 2000,
                    data: [],
                    msg: '请输入邮件'
                };
                return;
            }
            let result = await send({
                code: '1234',
                expire: moment().add(30, 'minutes').format('YYYY-MM-DD HH:mm:ss'),
                email: body.username,
                user: 'lanbling'
            });

            ctx.body = {
                code: 200,
                data: result,
                msg: '邮件发送成功'
            };
        }catch(e){
            console.log(e);
        }
    }
}

export default new LoginController();
