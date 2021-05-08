// 模型
import UserModel from '../model/User'
// 工具函数
import send from '../config/nodemailer'
import moment from 'moment'
import config from '../config/index'
import {checkCode} from '../common/utils.js'
import {getValue, setValue} from '../config/RedisConfig'
// 第三方
import svgCaptcha from 'svg-captcha'
import jsonwebtoken from 'jsonwebtoken'


class AuthController{
    constructor(){}

    // 用户注册
    async reg(ctx){
        const body = ctx.request.body;
        let username = body.username;
        let password = body.password;
        const postData = {
            username: username,
            password: password
        };
        if(!username || !password){
            ctx.body = {
                code: 1001,
                msg: '请输入正确的用户名和密码'
            }
        }else{
            // 判断用户名是否存在
            var result = await UserModel.findOne({
                username: username
            });
            console.log(result);
            if(result){
                ctx.body = {
                    code: 1002,
                    msg: '用户已存在，请使用其它用户名注册'
                };
                return;
            }
            const data = new UserModel(postData);
            var result = await data.save();
            console.log(result);
            if(result){
                ctx.body = {
                    code: 200,
                    msg: '用户新增成功'
                }
            }
        }
    }

    // 登录获取token
    async login(ctx){
        const body = ctx.request.body;
        let sid = body.sid;
        let code = body.code;
        // 校验验证码有效性
        let result = await checkCode(sid, code);
        if(result){
            // 验证用户账号密码是否正确
            let checkUserPassword = false;
            let user = await UserModel.findOne({username: body.username});
            if(user.password === body.password){
                checkUserPassword = true;
            }
            if(checkUserPassword){
                //验证通过，返回token数据
                let token = jsonwebtoken.sign({_id:'lanbling'}, config.JWT_SECRET, {
                    expiresIn: '1d'
                })
                ctx.body = {
                    code: 200,
                    token: token
                }
            }else{
                // 用户名验证失败
                ctx.body = {
                    code: 404,
                    msg: '用户名或者密码错误'
                }
            }
        }else{
            ctx.body = {
                code: 401,
                msg: '图片验证码不正确'
            }
        }
    }

    // 获取验证码
    async getCaptcha(ctx){
        const body = ctx.request.query;
        var captcha = svgCaptcha.create({
            size: 4,
            ignoreChars: '0o1il',
            color: true,
            noise: Math.floor(Math.random() * 5),
            width: 150,
            height: 50
        });
        // 将验证码的值存入redis
        setValue(body.sid, captcha.text, 10 * 60);
        console.log(body.sid);
        ctx.body = {
            code: 200,
            data: captcha
        }
    }

    // 忘记密码
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

export default new AuthController