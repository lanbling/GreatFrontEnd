import mongoose from 'mongoose'
import config from './index'

mongoose.connect(config.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log('Mongoose connected success:'+config.DB_URL);
});

mongoose.connection.on('error', err => {
    console.log('Mongoose connected fail:'+err);
});

mongoose.connection.on('disconnected', () => {
    console.log('Moogoose disconnected');
});

export default mongoose