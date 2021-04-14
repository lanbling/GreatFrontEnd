import {getValue, setValue, getHValue} from './RedisConfig';

// setValue('imooc', 'hello world');

// getValue('imooc').then(res => {
//     console.log(res);
// });


setValue('info', {
    name: 'lanbling',
    age: 28,
    heght: 174
})

getHValue('info').then(res => {
    console.log('getHValue:', JSON.stringify(res, null, 2));
})