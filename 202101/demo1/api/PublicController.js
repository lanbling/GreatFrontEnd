class PublicController {
    constructor(){}

    async demo(ctx){
        ctx.body = {
            msg: 'body message!!!!!!!!'
        }
    }

    async getCaptcha(ctx){
        var svgCaptcha = require('svg-captcha');
        var captcha = svgCaptcha.create({
            size: 4,
            ignoreChars: '0o1il',
            color: true,
            noise: Math.floor(Math.random() * 5),
            width: 150,
            height: 50
        });
        ctx.body = {
            code: 200,
            data: captcha
        }
    }
}

export default new PublicController();