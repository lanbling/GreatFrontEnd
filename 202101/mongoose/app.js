const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/testdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const User = mongoose.model('users', {
    name: String,
    age: Number,
    email: String
});

const lanbling = new User({
    name: 'kobe',
    age: '40',
    email: 'kobe@gmail.com'
});

lanbling.save().then(() => {
    console.log('save ok');
});
