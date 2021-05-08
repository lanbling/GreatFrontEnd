import mongoose from '../config/DBHelper'
const Scheme = mongoose.Schema
const TestScheme = new Scheme({
    'name': {type: String},
    'age': {type: Number},
    'email': {type: String}
});

const TestModel = mongoose.model('users', TestScheme);

const user = {
    name: 'james',
    age: 36,
    email: 'james@gmail.com'
};

// 增加
const addMethod = async () => {
    const data = new TestModel(user);
    const result = await data.save();
    console.log(result);
}

// 查找
const findMethod = async () => {
    const result = await TestModel.find();
    console.log(result);
}

// 修改
const updateMethod = async () => {
    const result = await TestModel.updateOne({name: 'james'}, {
        name: 'wade'
    });
    console.log(result);
}

// 删除
const delMethod = async () => {
    const result = await TestModel.deleteMany({name: 'kobe'});
    console.log(result);
};
delMethod();